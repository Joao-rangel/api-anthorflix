import {Repository} from 'typeorm';
import {appDataSource} from '../../../../shared/infra/typeorm/data-source';
import {
  ICreateMovieRequest,
  IMoviesRepository,
  IUpdateMovieRequest,
} from '../../interfaces/IMoviesRepository';
import {Movie} from './Movie.entity';

export class MoviesRepository implements IMoviesRepository {
  private repository: Repository<Movie>;

  constructor() {
    this.repository = appDataSource.getRepository(Movie);
  }

  async findById(id: number): Promise<Movie> {
    return this.repository.findOne({where: {id}});
  }

  async findByTitle(title: string): Promise<Movie> {
    return this.repository.findOne({where: {title}});
  }

  async listByYear(year: number): Promise<Movie[]> {
    return this.repository.find({where: {year}});
  }

  async create(payload: ICreateMovieRequest): Promise<Movie> {
    const movie = this.repository.create(payload);

    await this.repository.save(movie);

    return movie;
  }

  async update({id, ...payload}: IUpdateMovieRequest): Promise<Movie> {
    await this.repository.update(id, payload);

    return this.repository.findOne({where: {id}});
  }

  async delete(id: Movie['id']): Promise<void> {
    await this.repository.delete({id});
  }
}
