import React, { useState } from "react";
import { useWorkoutsContext } from "../context/WorkoutContex";

export default function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const initialFormState = {
    title: "",
    load: "",
    reps: "",
  };

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/workouts", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setFormState(initialFormState);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Excersize Title:</label>
      <input
        name="title"
        type="text"
        value={formState.title}
        onChange={handleChange}
        className={emptyFields?.includes("title") ? "error" : ""}
      />
      <label>Load (in kg):</label>
      <input
        name="load"
        type="number"
        value={formState.load}
        onChange={handleChange}
        className={emptyFields?.includes("load") ? "error" : ""}
      />
      <label>Number of Reps:</label>
      <input
        name="reps"
        type="number"
        value={formState.reps}
        onChange={handleChange}
        className={emptyFields?.includes("reps") ? "error" : ""}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
