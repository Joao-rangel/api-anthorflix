import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {IMoviesRepository} from '@modules/movies/interfaces/IMoviesRepository';
import {injectable, inject} from 'tsyringe';

interface IServiceRequest {
  year: number;
}

@injectable()
export class ListByYearMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({year}: IServiceRequest): Promise<Movie[]> {
    const movie = await this.moviesRepository.findByYear(year);

    return movie;
  }
}
