import axios, {AxiosInstance} from 'axios';
import {Movie} from '@modules/movies/infra/typeorm/Movie.entity';
import {IMovieProvider} from './IMovieProvider';

export class MovieProvider implements IMovieProvider {
  private movieClient: AxiosInstance;

  constructor() {
    this.movieClient = axios.create({
      baseURL: 'https://www.omdbapi.com/?apikey=5fac9c6b&type=movie',
    });
  }

  public async findByTitle(
    title: string,
  ): ReturnType<IMovieProvider['findByTitle']> {
    const {data} = await this.movieClient.get('', {params: {t: title}});

    if (data.Response === 'False') return undefined;

    const isNumber = !isNaN(data.imdbRating);
    const rate = isNumber ? Math.round(data.imdbRating) : 0;

    return {
      title: data.Title,
      year: data.Year,
      rate,
      genre: data.Genre,
      director: data.Director,
      actors: data.Actors,
      runtime: data.Runtime,
      poster: data.Poster,
      plot: data.Plot,
    } as Movie;
  }
}
