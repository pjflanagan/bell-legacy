import React from 'react';
import { useRing } from 'bell';

export const App = ({ id }) => {

  const [order] = useRing('getOrder', { id });

  return (
    <div>
      {order?.productId}
    </div>
  )
}
