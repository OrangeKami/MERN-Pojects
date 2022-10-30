import { createContext, useReducer, useContext } from "react";
import {reducer} from './WorkoutReducer'

export const WorkoutsContext = createContext();
export const useWorkoutsContext = () => useContext(WorkoutsContext)


export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
