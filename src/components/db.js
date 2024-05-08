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

export const getExercisesGroupedByDate = async () => {
  try {
    const allExercises = await db.exercises.toArray();
    const groupedByDate = allExercises.reduce((acc, curr) => {
      acc[curr.fecha] = [...(acc[curr.fecha] || []), curr];
      return acc;
    }, {});
    return groupedByDate;
  } catch (error) {
    console.error('Failed to fetch exercises grouped by date', error);
    throw error;
  }
};

export const clearDatabase = async () => {
  try {
    await db.exercises.clear();
    Swal.fire("Base de datos limpiada", "Todos los ejercicios han sido eliminados.", "success");
  } catch (error) {
    Swal.fire("Error", "No se pudo limpiar la base de datos.", "error");
    console.error('Failed to clear the database', error);
    throw error;
  }
};

export default db;
