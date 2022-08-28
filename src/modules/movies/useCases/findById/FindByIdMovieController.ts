import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {FindByIdMovieService} from './FindByIdMovieService';

export class FindByIdMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const findByIdMovieService = container.resolve(FindByIdMovieService);

    const movie = await findByIdMovieService.execute({id: Number(id)});

    return response.json({movie});
  }
}
