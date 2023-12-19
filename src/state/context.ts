import React, { createContext } from 'react';
import { ActionType, StateType } from './reducer.ts';

const StateContext = createContext<StateType>({
  formSubmissions: {
    accountNumber: '',
    routingNumber: '',
    depositAmount: 0,
    depositFrequency: '',
  },
});

const DispatchContext = createContext<React.Dispatch<ActionType>>(() => {});

export { StateContext, DispatchContext };
