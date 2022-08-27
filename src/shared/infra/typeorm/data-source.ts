import {DataSource} from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'anthorflix',
  synchronize: true,
  logging: false,
  entities: ['./src/modules/**/typeorm/*.entity.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});
