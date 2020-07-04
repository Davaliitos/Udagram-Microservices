import {Sequelize} from 'sequelize-typescript';
import {configuration} from './config/config';


export const sequelize = new Sequelize({
  'username': configuration.username,
  'password': configuration.password,
  'database': configuration.database,
  'host': configuration.host,

  'dialect': configuration.dialect,
  'storage': ':memory:',
});
