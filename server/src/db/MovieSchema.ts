import Mongoose from 'mongoose';
import { Movie } from '../entities/Movie';

export interface IMovie extends Movie, Mongoose.Document { }

const MovieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeSpend: Number,
    isHot: Boolean,
    isComming: Boolean,
    isClassic: Boolean,
    description: String,
    poster: String
}, {
    versionKey: false
});

export default Mongoose.model<IMovie>("Movie", MovieSchema);
