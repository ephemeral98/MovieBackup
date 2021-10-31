import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { ISearchResult } from "../entities/CommonTypes";
import { Movie } from "../entities/Movie";
import { SearchCondition } from "../entities/SearchCondition";

export class MovieService {
    /**
     * 添加电影
     * @param {Object} movie 电影
     * @returns Promise
     * @author gzq
     */
    public static async add(movie: Movie): Promise<IMovie | string[]> {
        console.log('movie??',movie);

        // 1. 转换类型
        const m = Movie.changeType(movie);

        // 2. 数据验证
        const errs = await m.validateThis();
        if (errs.length) {
            return errs;
        }
        // 3. 添加到数据库
        return await MovieModel.create(m);
    }

    /**
     * 修改电影
     * @param {String} id 电影id
     * @returns
     * @author gzq
     */
    public static async edit(id: string, movie: Movie): Promise<string[]> {
        // 转换类型
        const m = Movie.changeType(movie);

        // 数据验证
        const errs = await m.validateThis(true);
        if (errs.length) {
            return errs;
        }

        await MovieModel.updateOne({ _id: id }, movie);
        return errs;
    }

    /**
     * 删除一个电影
     * @param {String} id 电影id
     * @returns
     * @author gzq
     */
    public static async del(id: string): Promise<void> {
        await MovieModel.deleteOne({ _id: id });
    }

    /**
     * 查询一个电影
     * @param {String} id 电影id
     * @returns
     * @author gzq
     */
    public static async findById(id: string): Promise<IMovie | null> {
        return await MovieModel.findById(id);
    }

    /**
     * 查询多个电影
     * @param {*} condition limit、page、key
     * @returns
     * @author gzq
     */
    public static async find(condition: SearchCondition): Promise<ISearchResult<IMovie>> {
        // 类型转换一下
        const condi = SearchCondition.changeType(condition);

        // 数据验证一下
        const errs = await condi.validateThis();
        if (errs.length) {
            return {
                count: 0,
                data: [],
                errs
            };
        }

        const movies = await MovieModel.find({
            name: { $regex: new RegExp(condi.key) }
        }).skip((condi.page - 1) * condi.limit).limit(condi.limit);

        const count = await MovieModel.find({ name: { $regex: new RegExp(condi.key) } }).countDocuments();

        return {
            count,
            data: movies,
            errs: []
        }
    }
}
