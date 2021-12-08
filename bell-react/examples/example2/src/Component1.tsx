import React, { useState } from 'react';
import { useRing } from 'bell';

// import { Weather } from 'src/ring';

namespace Weather {
  const host = 'app.weather.com';

  // TODO: should functions go in here?

  export namespace Search {
    const endpoint = '/search';
    const method = 'POST';

    export type Request = {
      lat: number;
      lng: number;
    }

    export type Response = {
      temp: number;
    }
  }
}

export const App = ({ coordinates }) => {


  // Weather.Search tells ring 
  // endpoint: domain and route
  // method
  // input and output types
  // Weather.Search.Request
  // Weather.Search.Response
  const [weather, error, isLoading] = useRing<Weather.Search.Response>([coordinates]);

};

