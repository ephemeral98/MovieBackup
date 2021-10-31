import 'reflect-metadata';
/* import { MovieModel } from './db';
import { Movie } from './entities/Movie';
import { MovieService } from './services/MovieService';

const m = new Movie();
m.name = '爱情公寓4';
m.areas = ['ch', 'hk'];
m.description = 'I hope that they will remember you';
m.isClassic = true;
m.isComming = false;
m.isHot = true;
m.poster = 'this is a poster source';
m.timeSpend = 180;
m.types = ['科幻']; */

// 添加电影
/* MovieService.add(m)
    .then(res => {
        console.log('成功添加到数据库', res);
    }); */

// 修改电影
/* MovieService.edit('617c39cb50c9dda757d83b4b', m)
.then(res => {
    console.log('修改电影成功！', res);
}) */

// 删除一部电影
/* MovieService.del('617d131f889464454145ea90')
.then(err => {
    console.log('删除电影成功', err);
}) */

// 查询一部电影
/* MovieService.findById('617c39cb50c9dda757d83b4b')
.then(res => {
    console.log('查询一部电影成功：', res);
}) */

// 按需求查找电影
/* const condi: any = {
    page: 1,
    limit: '3'
}
MovieService.find(condi).then(res => {
    if (res.errs.length) {
        console.log(res.errs);
    } else {
        console.log(res.data);
    }
}) */


import './routes';
