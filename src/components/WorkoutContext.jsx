// WorkoutContext.js
import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);

    const addExercise = exercise => {
        setExercises(prevExercises => [...prevExercises, exercise]);
    };

    return (
        <WorkoutContext.Provider value={{ exercises, addExercise }}>
            {children}
        </WorkoutContext.Provider>
    );
};
