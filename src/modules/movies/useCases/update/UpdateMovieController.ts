import {IUpdateMovieRequest} from '@modules/movies/interfaces/IMoviesRepository';
import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {UpdateMovieService} from './UpdateMovieService';

export class UpdateMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const partialMovie: IUpdateMovieRequest = request.body;

    const updateMovieService = container.resolve(UpdateMovieService);

    const movie = await updateMovieService.execute({id, ...partialMovie});

    return response.json({movie});
  }
}
