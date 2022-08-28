import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {
  ICreateMovieRequest,
  IMoviesRepository,
} from '@modules/movies/interfaces/IMoviesRepository';
import {injectable, inject} from 'tsyringe';

@injectable()
export class CreateMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute(moviePartial: ICreateMovieRequest): Promise<Movie> {
    const movie = await this.moviesRepository.create(moviePartial);

    return movie;
  }
}
