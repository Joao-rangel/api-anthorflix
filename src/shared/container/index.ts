import {MoviesRepository} from '@modules/movies/infra/typeorm/MoviesRepository';
import {container} from 'tsyringe';

container.registerSingleton('MoviesRepository', MoviesRepository);
