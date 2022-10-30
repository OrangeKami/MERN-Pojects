import React from 'react'
import {useWorkoutsContext} from "../context/WorkoutContex"
import { useNavigate } from "react-router-dom";
// ? date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function WorkoutDetails( {workout}) {
  const {dispatch} = useWorkoutsContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await fetch("/workouts/" + workout._id, {
      method: 'DELETE'
    })
    const json = response.json();

    if (response.ok) {
       dispatch({ type: "DELETE_WORKOUT", payload: json });
       navigate(0);
    }
  }


  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps:</strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
}
