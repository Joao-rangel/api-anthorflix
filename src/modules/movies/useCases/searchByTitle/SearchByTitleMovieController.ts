import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {SearchByTitleMovieService} from './SearchByTitleMovieService';

export class SearchByTitleMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {title} = request.query;

    const searchByTitleMovieService = container.resolve(
      SearchByTitleMovieService,
    );

    const movie = await searchByTitleMovieService.execute({
      title: String(title),
    });

    return response.json({movie});
  }
}
