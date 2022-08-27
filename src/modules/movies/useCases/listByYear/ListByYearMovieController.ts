import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {ListByYearMovieService} from './ListByYearMovieService';

export class ListByYearMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {year = 2022} = request.query;

    const listByYearMovieService = container.resolve(ListByYearMovieService);

    const movie = await listByYearMovieService.execute({year: Number(year)});

    return response.status(201).json({movie});
  }
}
