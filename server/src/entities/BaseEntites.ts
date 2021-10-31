import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export abstract class BaseEntites {
    /**
     * 验证数据
     * @param skipMissing 跳过默认参数验证
     * @returns Promise
     * @author gzq
     */
    public async validateThis(skipMissing: boolean = false): Promise<string[]> {
        const skipMissingObj = skipMissing ? {
            skipMissingProperties: true
        } : {}
        const errs = await validate(this, skipMissingObj);
        return errs.map(err => Object.values(err.constraints!)).flat();
    }

    /**
     * 类型转换
     * @param {*}
     * @returns
     * @author gzq
     */
    protected static BaseChangeType<T>(cls: new (...args: any[]) => T, plainObj: object): T {
        if (plainObj instanceof cls) {
            return plainObj;
        }

        return plainToClass(cls, plainObj);
    }
}
