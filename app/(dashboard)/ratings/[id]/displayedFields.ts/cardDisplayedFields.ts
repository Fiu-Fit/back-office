import { Rating } from '@fiu-fit/common';

export const ratingCardFields = (rating: Rating) => ({
    ID:          rating._id,
    'ID Rutina': rating.workoutId,
    'ID Atleta': rating.athleteId,
    Rating:      rating.rating,
    Comentario:  rating.comment,
    Timestamp:   rating.ratedAt,
  });
