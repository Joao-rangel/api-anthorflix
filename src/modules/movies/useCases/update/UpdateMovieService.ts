import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {
  IUpdateMovieRequest,
  IMoviesRepository,
} from '@modules/movies/interfaces/IMoviesRepository';
import {injectable, inject} from 'tsyringe';

@injectable()
export class UpdateMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute(moviePartial: IUpdateMovieRequest): Promise<Movie> {
    return this.moviesRepository.update(moviePartial);
  }
}
