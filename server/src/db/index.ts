import Mongoose from 'mongoose';
import MovieModel from './MovieSchema';

Mongoose.connect("mongodb://localhost/moviedb", {
}).then(() => console.log('连接数据库成功'));

export { MovieModel }
