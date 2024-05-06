// WorkoutContext.js
import React, { createContext, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import Swal from 'sweetalert2';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);
    const listRef = useRef(null)

    const addExercise = (exercise) => {
        const newExercise = {
            ...exercise,
            id: uuidv4(),  // Agregar un ID único a cada nuevo ejercicio
            completedSets: 0
        };
        setExercises(prevExercises => [...prevExercises, newExercise]);
        Swal.fire('Añadido', 'Ejercicio añadido a la lista', 'success');
    };

    const completeSet = (id) => {
        setExercises(prevExercises =>
            prevExercises.map(exercise => 
                exercise.id === id ? { ...exercise, completedSets: exercise.completedSets + 1 } : exercise
            )
        );
        Swal.fire('Completado', 'Un set más completado', 'info');
        console.log(exercises)
    };

    const removeExercise = (id) => {
        gsap.to(`#exercise-${id}`, {
            opacity: 0,
            height: 0,
            margin: 0,
            onComplete: () => {
                setExercises(prevExercises => prevExercises.filter(ex => ex.id !== id));
            }
        });
        Swal.fire('Eliminado', 'Ejercicio eliminado de la lista', 'error');
    };

    return (
        <WorkoutContext.Provider value={{ exercises, addExercise, completeSet, removeExercise }}>
            {children}
        </WorkoutContext.Provider>
    );
};
