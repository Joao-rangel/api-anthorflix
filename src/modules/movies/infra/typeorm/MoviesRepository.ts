import {Repository} from 'typeorm';
import {appDataSource} from '../../../../shared/infra/typeorm/data-source';
import {IMoviesRepository} from '../../interfaces/IMoviesRepository';
import {Movie} from './Movie.entity';

export class MoviesRepository implements IMoviesRepository {
  private repository: Repository<Movie>;

  constructor() {
    this.repository = appDataSource.getRepository(Movie);
  }

  async findById(id: number): Promise<Movie> {
    return this.repository.findOne({where: {id}});
  }

  async findByYear(year: number): Promise<Movie[]> {
    return this.repository.find({where: {year}});
  }

  async create(
    payload: Omit<Movie, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Movie> {
    const movie = this.repository.create(payload);

    await this.repository.save(movie);

    return movie;
  }
}
