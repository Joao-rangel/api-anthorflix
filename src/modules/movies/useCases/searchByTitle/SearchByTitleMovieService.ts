import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {IMoviesRepository} from '@modules/movies/interfaces/IMoviesRepository';
import {AppError} from '@shared/errors/AppError';
import {MovieProvider} from '@shared/providers/movie/MovieProvider';
import {injectable, inject} from 'tsyringe';

interface IServiceRequest {
  title: string;
}

@injectable()
export class SearchByTitleMovieService {
  private movieProvider = new MovieProvider();

  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({title}: IServiceRequest): Promise<Movie> {
    let movie = await this.moviesRepository.findByTitle(title);

    if (!movie) {
      const moviePartial = await this.movieProvider.findByTitle(title);

      if (!moviePartial) throw new AppError('Filme não encontrado.');

      movie = await this.moviesRepository.create(moviePartial);
    }

    return movie;
  }
}
