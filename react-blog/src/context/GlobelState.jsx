import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// porvider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      playload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", playload: transaction });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )

};
