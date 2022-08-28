import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {DeleteMovieService} from './DeleteMovieService';

export class DeleteMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteMovieService = container.resolve(DeleteMovieService);

    await deleteMovieService.execute(Number(id));

    return response.status(204).json({});
  }
}
