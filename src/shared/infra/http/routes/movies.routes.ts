import {Router} from 'express';
import {FindByIdMovieController} from '@modules/movies/useCases/findById/FindByIdMovieController';
import {ListByYearMovieController} from '@modules/movies/useCases/listByYear/ListByYearMovieController';
import {CreateMovieController} from '@modules/movies/useCases/create/CreateMovieController';
import {DeleteMovieController} from '@modules/movies/useCases/delete/DeleteMovieController';
import {UpdateMovieController} from '@modules/movies/useCases/update/UpdateMovieController';
import {SearchByTitleMovieController} from '@modules/movies/useCases/searchByTitle/SearchByTitleMovieController';

export const moviesRouter = Router();

const findByIdMovieController = new FindByIdMovieController();
const listByYearMovieController = new ListByYearMovieController();
const createMovieController = new CreateMovieController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();
const searchByTitleMovieController = new SearchByTitleMovieController();

moviesRouter.get('/', listByYearMovieController.handle);
moviesRouter.get('/search', searchByTitleMovieController.handle);
moviesRouter.post('/', createMovieController.handle);
moviesRouter.patch('/:id', updateMovieController.handle);
moviesRouter.delete('/:id', deleteMovieController.handle);
moviesRouter.get('/:id', findByIdMovieController.handle);
