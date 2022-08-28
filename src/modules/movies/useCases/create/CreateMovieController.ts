import {ICreateMovieRequest} from '@modules/movies/interfaces/IMoviesRepository';
import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {CreateMovieService} from './CreateMovieService';

export class CreateMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const partialMovie: ICreateMovieRequest = request.body;

    const createMovieService = container.resolve(CreateMovieService);

    const movie = await createMovieService.execute(partialMovie);

    return response.status(201).json({movie});
  }
}
