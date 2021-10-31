export interface ISearchResult<T> {
    count: number,  // 数据总数
    data: T[], // 数据列表
    errs: string[]  // 错误信息
}
