import React, {useEffect, useState} from 'react'
import '../index.css'
import { FaHistory } from "react-icons/fa";
import Routine from './Routine';
import { getExercisesGroupedByDate, clearDatabase } from './db';
import { FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';

function History() {
  const [groupedExercises, setGroupedExercises] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const exercisesByDate = await getExercisesGroupedByDate();
      setGroupedExercises(exercisesByDate);
    };

    fetchExercises();
  }, []);

  const handleClearDatabase = async () => {
    const result = await Swal.fire({
      title: '¿Estás segur@?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar todo!'
    });

    if (result.isConfirmed) {
      await clearDatabase();
      setGroupedExercises([]); // Limpia el estado si estás manejando los ejercicios en el estado de React.
      Swal.fire(
        'Eliminado!',
        'Tus datos han sido eliminados.',
        'success'
      );
    }
  };

  return (
    <div className='text-white historyComponent'>
      <small>Made By Jaysen 🇵🇷</small>
    <h1 className='title mt-3'><FaHistory/> Historial de Rutinas</h1>
    {Object.entries(groupedExercises).length > 0 ? (
      Object.entries(groupedExercises).map(([date, exercises]) => (
        <Routine key={date} date={date} exercises={exercises} />
      ))
    ) : (
      <p></p>
    )}
    {Object.entries(groupedExercises).length > 0 ? (
          <button onClick={handleClearDatabase} className='btn btn-danger'>Borrar Todo <FaTrash size='1.5rem'/> </button>
    ) : (
      <h1 className='title'>No hay ejercicios registrados.</h1>
    )}
  </div>
  )
}

export default History