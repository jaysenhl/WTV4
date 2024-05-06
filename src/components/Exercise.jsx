import { useContext } from "react"
import { WorkoutContext } from "./WorkoutContext"

function Exercise(){
    const { exercises, completeSet, removeExercise } = useContext(WorkoutContext)

    return(
        <div className="exerciseWrapper">
            {exercises.map((exercise)=>(
                <section key={exercise.id} className="exerciseComponent">
                <h2><strong className="text-white">Ejercicio:</strong> {exercise.nombre_ejercicio}</h2>
                <h2><strong className="text-white">Equipo:</strong> {exercise.equipo}</h2>
                <h2><strong className="text-white">Peso:</strong> {exercise.peso} Lib</h2>
                <h2><strong className="text-white">Reps:</strong> {exercise.repeticiones}</h2>
                <h2><strong className="text-white">{exercise.completedSets} De:</strong> {exercise.sets}</h2>
                {/* <h2>MOOD: {exercise.mood}</h2> */}
                <div className="exerciseComponentBtnBox">
                    <button className="btn btn-success" onClick={()=> completeSet(exercise.id)}>Completar Set</button>
                    <button className="btn btn-danger" onClick={()=> removeExercise(exercise.id)}>Eliminar Ejercicio</button>
                </div>
                </section>
            ))}
        </div>
    )
}

export default Exercise