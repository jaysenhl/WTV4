// WorkoutContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);

    const addExercise = (exercise) => {
        const newExercise = {
            ...exercise,
            id: uuidv4(),  // Agregar un ID único a cada nuevo ejercicio
            completedSets: 0
        };
        setExercises(prevExercises => [...prevExercises, newExercise]);
    };

    const completeSet = (id) => {
        setExercises(prevExercises =>
            prevExercises.map(exercise => 
                exercise.id === id ? { ...exercise, completedSets: exercise.completedSets + 1 } : exercise
            )
        );
    };

    const removeExercise = (id) => {
        setExercises(prevExercises => prevExercises.filter(exercise => exercise.id !== id));
    };

    return (
        <WorkoutContext.Provider value={{ exercises, addExercise, completeSet, removeExercise }}>
            {children}
        </WorkoutContext.Provider>
    );
};
