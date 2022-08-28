import {Movie} from '../infra/typeorm/Movie.entity';

export interface IMoviesRepository {
  create(movie: ICreateMovieRequest): Promise<Movie>;
  update(movie: IUpdateMovieRequest): Promise<Movie>;
  delete(movie: Movie['id']): Promise<void>;
  findById(id: Movie['id']): Promise<Movie>;
  findByTitle(title: Movie['title']): Promise<Movie>;
  listByYear(title: Movie['year']): Promise<Movie[]>;
}

export type ICreateMovieRequest = Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>;
export type IUpdateMovieRequest = Partial<Movie> & Pick<Movie, 'id'>;
