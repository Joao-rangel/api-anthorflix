import {Movie} from '../infra/typeorm/Movie.entity';

export interface IMoviesRepository {
  create(
    movie: Omit<Movie, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Movie>;
}
