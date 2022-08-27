import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {IMoviesRepository} from '@modules/movies/interfaces/IMoviesRepository';
import {injectable, inject} from 'tsyringe';

interface IServiceRequest {
  id: number;
}

@injectable()
export class FindByIdMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({id}: IServiceRequest): Promise<Movie> {
    const movie = await this.moviesRepository.findById(id);

    return movie;
  }
}
