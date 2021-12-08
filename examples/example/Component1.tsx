import React, { useState } from 'react';
import { ring } from 'bell';

import { SendOrderRequest, SendOrderResponse } from ''

export const App = () => {

  const order: SendOrderRequest = {};
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendOrder = () => {
    ring('sendOrder', order, () => {
      setIsLoading(true);
    }).then((response: SendOrderResponse) => {
      console.log(response);
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className={`spinner ${isLoading && 'loading'}`} />
      <div onClick={sendOrder}>
        {'Send Order'}
      </div>
    </>
  )
}