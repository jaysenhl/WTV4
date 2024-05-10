import Header from "./Header"
import React, { useContext, useState,useRef, useEffect, useLayoutEffect } from 'react';
import { RxEyeClosed } from "react-icons/rx";
import { RiEye2Line } from "react-icons/ri"
import '../index.css'
import { WorkoutContext } from "./WorkoutContext";
import { addExercisesToDB } from "./db";
import Exercise from "./Exercise";
import gsap from "gsap";
import WorkoutForm from "./WorkoutForm";

function CreateWorkout(){
    const { exercises,clearExercises } = useContext(WorkoutContext)
    let [isShowing, setIsShowing] = useState(false);
    let [isExerciseListVisible, setIsExerciseListVisible] = useState(false);
    const formRef = useRef(null);
    const exerciseListRef = useRef(null);

    useLayoutEffect(() => {
        gsap.set(formRef.current, { autoAlpha: 0 });
        gsap.set(exerciseListRef.current, { autoAlpha: 0 });
    }, []);

    useLayoutEffect(() => {
        if (formRef.current && exerciseListRef.current) {
            gsap.to(formRef.current, { autoAlpha: isShowing ? 1 : 0, height: isShowing ? "auto" : 0, duration: 0.5 });
            gsap.to(exerciseListRef.current, { autoAlpha: isExerciseListVisible ? 1 : 0, height: isExerciseListVisible ? "auto" : 0, duration: 0.5 });
        }
    }, [isShowing, isExerciseListVisible]);

    const formToggle = () => {
        setIsShowing(!isShowing);
    }

    const toggleExerciseList = () => {
        setIsExerciseListVisible(!isExerciseListVisible);
    }

    const handleSaveExercises = async () => {
        try {
          await addExercisesToDB(exercises);
          clearExercises();
          console.log(exercises)
        } catch (error) {
          console.error('Error saving exercises to IndexedDB:', error);
        }
      };

    return(
        <>
            <Header title="CREAR RUTINA"/>
        <div className="btnWrappers">
            <div className="btnBox mb-4 pt-4">
                <button id="toggleBtn" onClick={formToggle} className={isShowing ? 'bg-info' : 'bg-danger'}>
                    {isShowing ? 'Ocultar Formulario ' : 'Mostrar Formulario '}
                    {isShowing ? <RiEye2Line size="1.7rem" /> : <RxEyeClosed size="1.7rem" />}
                </button>
            </div>
            <div ref={formRef} style={{ overflow: 'hidden' }}>
                <WorkoutForm />
            </div>
            <div className="btnBox mb-4">
                <button id="toggleBtn" onClick={toggleExerciseList} className={isExerciseListVisible ? 'bg-info' : 'bg-danger'}>
                    {isExerciseListVisible ? 'Ocultar Lista de Ejercicios ' : 'Mostrar Lista de Ejercicios '}
                    {isExerciseListVisible ? <RiEye2Line size="1.7rem" /> : <RxEyeClosed size="1.7rem" />}
                </button>
            </div>
            <div ref={exerciseListRef} style={{ overflow: 'hidden' }}>
                <div className="listaEjercicio text-center mt-4 mb-4">
                    <h1 className="title">Lista de ejercicios</h1>
                    {exercises.length > 0 ? (
                        <>
                            <Exercise/>
                            <div className="saveBtnBox">
                                <h1 className="title">Guardar la lista y crear otra rutina</h1>
                                <button onClick={handleSaveExercises} className="saveBtn bg-info"><strong>Guardar</strong></button>
                            </div>
                        </>
                    ) : (
                        <h1 className="text-danger">LA LISTA ESTÁ VACÍA</h1>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateWorkout;
