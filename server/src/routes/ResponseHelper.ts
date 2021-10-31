// 统一响应格式：
import { Response } from 'express';
import { ISearchResult } from '../entities/CommonTypes';
export default class {
    /**
     * 处理错误响应
     * @param {String | Array} err 错误消息
     * @param {Object} res 响应对象
     * @author gzq
     */
    public static sendErr(err: string | string[], res: Response) {
        let error: string;
        if (Array.isArray(err)) {
            error = err.join(';');
        } else {
            error = err;
        }
        res.send({
            error,
            data: null
        });
    }

    /**
     * 处理正确的响应
     * @param {*} data 正确的响应消息
     * @param {Object} res 响应对象
     * @returns
     * @author gzq
     */
    public static sendData<T>(data: T, res: Response) {
        res.send({
            error: null,
            data,
        });
    }

    /**
     * 处理分页数据的响应
     * @param {*} result 每一页的结果
     * @param {Object} res 响应对象
     * @author gzq
     */
    public static sendPageData<T>(result: ISearchResult<T>, res: Response) {
        if (result.errs.length) {
            this.sendErr(result.errs, res);
        } else {
            res.send({
                error: null,
                data: result.data,
                count: result.count
            })
        }
    }
}
