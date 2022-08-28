import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {IMoviesRepository} from '@modules/movies/interfaces/IMoviesRepository';
import {injectable, inject} from 'tsyringe';

@injectable()
export class DeleteMovieService {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute(id: Movie['id']): Promise<void> {
    console.log(id);

    return this.moviesRepository.delete(id);
  }
}
