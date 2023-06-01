import React, { createContext, useContext, useReducer } from "react";

//Prepare the datalayer
export const StateContext = createContext();

// Wrap up app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
//Custom Hook
