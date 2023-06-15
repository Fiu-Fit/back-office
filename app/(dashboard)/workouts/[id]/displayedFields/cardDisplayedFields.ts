import { Workout, categoryToString } from '@fiu-fit/common';

export const workoutCardFields = (workout: Workout) => ({
    ID:          workout._id,
    Nombre:      workout.name,
    Descripción: workout.description,
    Duracion:    workout.duration,
    Dificultad:  workout.difficulty,
    Categoria:   categoryToString(workout.category),
    Rating:      workout.averageRating ? `${workout.averageRating}/5` : 'Desconocido',
});
