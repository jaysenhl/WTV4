// db.js
import Dexie from 'dexie';
import Swal from 'sweetalert2';

const db = new Dexie('WorkoutDatabase');
db.version(1).stores({
  exercises: 'id, nombre_ejercicio, equipo, peso, repeticiones, sets, fecha, hora, mood'
});

export const addExercisesToDB = async (exercises) => {
  try {
    await db.exercises.bulkPut(exercises);
    Swal.fire("Ejercicios Guardados!");
  } catch (error) {
    Swal.fire("EROR!");
    console.error('Failed to add exercises to the database', error);
    throw error;
  }
};

export default db;
