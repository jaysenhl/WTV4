import { useContext } from "react"
import { WorkoutContext } from "./WorkoutContext"
import { Dropdown } from 'react-bootstrap';
import RestConfigurator from "./RestConfigurator";
import { FcCheckmark, FcFullTrash } from "react-icons/fc";

function Exercise(){
    const { exercises, completeSet, removeExercise } = useContext(WorkoutContext)

    return(
        <div className="exerciseWrapper exercise-component">
            {exercises.map((exercise)=>(
                <section key={exercise.id} className="exerciseComponent">
                <h1 className="mt-4"><strong className="text-white">Ejercicio:</strong> {exercise.nombre_ejercicio}</h1>
                <h2><strong className="text-white">Equipo:</strong> {exercise.equipo}</h2>
                <h2><strong className="text-white">Peso:</strong> {exercise.peso} Lib</h2>
                <h2><strong className="text-white">Reps:</strong> {exercise.repeticiones}</h2>
                <h2><strong className="text-white">Set {exercise.completedSets} De:</strong> {exercise.sets}</h2>
                <h2>MOOD: {exercise.mood}</h2>
                <div className="exerciseComponentBtnBox">
                    <button className="btn btn-success" onClick={()=> completeSet(exercise.id)}>Completar Set <FcCheckmark size='1.5rem' /></button>
                    <button className="btn btn-danger" onClick={()=> removeExercise(exercise.id)}>Eliminar Ejercicio <FcFullTrash size='1.5rem' /></button>
                </div>
                <RestConfigurator/>
                </section>
            ))}
        </div>
    )
}

export default Exercise