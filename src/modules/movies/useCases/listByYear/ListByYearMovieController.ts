import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {ListByYearMovieService} from './ListByYearMovieService';

export class ListByYearMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {year} = request.query;

    const listByYearMovieService = container.resolve(ListByYearMovieService);

    const movies = await listByYearMovieService.execute({
      year: year && Number(year),
    });

    return response.status(200).json({movies});
  }
}
