import {Router} from 'express';
import {FindByIdMovieController} from '@modules/movies/useCases/findById/FindByIdMovieController';
import {ListByYearMovieController} from '@modules/movies/useCases/listByYear/ListByYearMovieController';

export const moviesRouter = Router();

const findByIdMovieController = new FindByIdMovieController();
const listByYearMovieController = new ListByYearMovieController();

moviesRouter.get('/', listByYearMovieController.handle);
moviesRouter.get('/:id', findByIdMovieController.handle);
