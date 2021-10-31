import { IsNotEmpty, ArrayMinSize, IsInt, Min, Max, IsArray, validate } from 'class-validator';
import { Type, plainToClass } from 'class-transformer';
import { BaseEntites } from './BaseEntites';

export class Movie extends BaseEntites {
    @IsNotEmpty({ message: '电影名字不能为空' })
    public name: string | undefined;

    @IsNotEmpty({ message: '电影类型不能为空' })
    @ArrayMinSize(1, { message: '电影类型至少为1个' })
    @IsArray()
    @Type(() => String)
    public types: string[] | undefined;

    @IsNotEmpty({ message: '电影上映地区不能为空' })
    @ArrayMinSize(1, { message: '上映地区至少为1个' })
    @IsArray()
    @Type(() => String)
    public areas: string[] | undefined;

    @IsNotEmpty({ message: '电影时常不能为空' })
    @IsInt({ message: '电影时常必须是整数' })
    @Min(1, { message: '电影时常至少为1分钟' })
    @Max(9999, { message: '电影时常过大' })
    @Type(() => Number)
    public timeSpend: number | undefined;

    @IsNotEmpty({ message: '是否热映不能为空' })
    @Type(() => Boolean)
    public isHot: boolean | undefined;

    public isComming?: boolean;

    public isClassic?: boolean;

    public description?: string;

    public poster: string | undefined;

    /**
     * 类型转换
     * @param {*}
     * @returns
     * @author gzq
     */
    public static changeType(plainObj: object): Movie {
        return super.BaseChangeType(Movie, plainObj);
    }
}
