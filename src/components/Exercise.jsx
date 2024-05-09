import { useContext,useState } from "react"
import { WorkoutContext } from "./WorkoutContext"
import RestConfigurator from "./RestConfigurator";
import { FcCheckmark, FcFullTrash } from "react-icons/fc";

function RepAndSetRange({ exerciseId, completeSet, completedSets }) {
    const [reps, setReps] = useState(0);  // Estado para manejar las repeticiones
    const [sets, setSets] = useState(0)
    const handleCompleteSet = () => {
        completeSet(exerciseId, reps);
        setSets()
    };

    return (
        <div className="repAndSetRangeComponent">
            <h1 className="text-white">Sets: <span>{completedSets}</span></h1>
            <label htmlFor="customRange" className="form-label"><h1><strong>Repeticiones:</strong></h1></label>
            <h1>{reps}</h1>
            <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={reps}
                onChange={(e) => setReps(parseInt(e.target.value))}
                id="customRange"
            />
            <button onClick={handleCompleteSet} className="btn btn-success"><FcCheckmark size='1.5rem' /> Completar Set</button>
        </div>
    );
}

function Exercise(){
    const { exercises, completeSet, removeExercise } = useContext(WorkoutContext)

    return(
        <div className="exerciseWrapper exercise-component">
            {exercises.map((exercise)=>(
                <section key={exercise.id} className="exerciseComponent">
                <h1 className="mt-4"><strong className="text-white">Ejercicio:</strong> {exercise.nombre_ejercicio}</h1>
                <h2><strong className="text-white">Equipo:</strong> {exercise.equipo}</h2>
                <h2><strong className="text-white">Peso:</strong> {exercise.peso} Lib</h2>
                {/* <h2><strong className="text-white">Reps:</strong> {exercise.repeticiones}</h2> */}
                {/* <h2><strong className="text-white">Set {exercise.completedSets} De:</strong> {exercise.sets}</h2> */}
                <RepAndSetRange exerciseId={exercise.id} completeSet={completeSet} completedSets={exercise.completedSets}/>
                {/* <h2>MOOD: {exercise.mood}</h2> */}
                <div className="exerciseComponentBtnBox">
                    {/* <button className="btn btn-success" onClick={()=> completeSet(exercise.id)}>Completar Set <FcCheckmark size='1.5rem' /></button> */}
                    <button className="btn btn-danger" onClick={()=> removeExercise(exercise.id)}>Eliminar Ejercicio <FcFullTrash size='1.5rem' /></button>
                </div>
                <RestConfigurator/>
                </section>
            ))}
        </div>
    )
}


export default Exercise