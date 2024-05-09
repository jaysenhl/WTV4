// WorkoutContext.js
import React, { createContext, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { addExercisesToDB } from './db';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);
    const listRef = useRef(null)

    const addExercise = async (exercise) => {
        const newExercise = {
            ...exercise,
            id: uuidv4(),  // Agregar un ID único a cada nuevo ejercicio
            completedSets: 0,
            sets:[]
        };
        setExercises(prevExercises => [...prevExercises, newExercise]);
        Swal.fire('Añadido', 'Ejercicio añadido a la lista', 'success');
    };

    const clearExercises = () => {
        gsap.to('.exercise-component', { // Assuming each exercise component has a class "exercise-component"
            opacity: 0,
            y: -20,
            onComplete: () => {
                setExercises([]); // Clear the exercise list
                Swal.fire('Rutina Guardada', 'Todos los ejercicios han sido eliminados! puedes crear otra rutina nueva', 'success');
            }
        });
    };

    const completeSet = (id, reps) => {
        setExercises(prevExercises =>
            prevExercises.map(exercise => {
                if (exercise.id === id) {
                    const newSet = { num: exercise.completedSets + 1, reps: reps };
                    const updatedSets = exercise.sets ? [...exercise.sets, newSet] : [newSet];
                    return { ...exercise, completedSets: exercise.completedSets + 1, sets: updatedSets };
                }
                return exercise;
            })
        );
        Swal.fire('Completado', 'Un set más completado', 'info');
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
        <WorkoutContext.Provider value={{ exercises, addExercise, completeSet, removeExercise, clearExercises }}>
            {children}
        </WorkoutContext.Provider>
    );
};
