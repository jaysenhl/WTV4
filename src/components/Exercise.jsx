import { useContext } from "react"
import { WorkoutContext } from "./WorkoutContext"

function Exercise(){
    const { exercises } = useContext(WorkoutContext)

    return(
        <div className="exerciseWrapper">
            {exercises.map((exercise, index)=>(
                <section key={index} className="exerciseComponent">
                <h1>{exercise.nombre_ejercicio}</h1>
                <h2>{exercise.equipo}</h2>
                <h2>{exercise.peso} Lib</h2>
                <h2>{exercise.repeticiones}</h2>
                <h2>0 De {exercise.sets}</h2>
                {/* <h2>MOOD: {exercise.mood}</h2> */}
                <div className="exerciseComponentBtnBox">
                    <button className="btn btn-success">Completar Set</button>
                    <button className="btn btn-danger">Eliminar Ejercicio</button>
                </div>
                </section>
            ))}
        </div>
    )
}

export default Exercise