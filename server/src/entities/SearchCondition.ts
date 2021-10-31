import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseEntites } from './BaseEntites';

export class SearchCondition extends BaseEntites {
    // 页码
    @IsInt({ message: '页码必须为整数' })
    @Min(1, { message: '页码最小值为1' })
    @Type(() => Number)
    public page: number = 1;

    // 页容量
    @IsInt({ message: '页容量必须为整数' })
    @Min(1, { message: '页容量最小值必须为1' })
    @Type(() => Number)
    public limit: number = 3;

    // 查询关键字
    @Type(() => String)
    public key: string = '';

    // 类型转换
    public static changeType(plainObj: object): SearchCondition {
        return super.BaseChangeType(SearchCondition, plainObj);
    }
}
