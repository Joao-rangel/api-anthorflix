import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';

export interface IMovieProvider {
  findByTitle(
    title: string,
  ): Promise<Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>>;
}
