import Express from 'express';
import MovieRouter from './MovieRoute';

const app = Express();

// 解析post等请求的json参数
app.use(Express.json());

app.use('/upload', Express.static('public/upload'));

// 请求中间件
app.use('/api', MovieRouter);
app.listen('4399', () => {
    console.log('服务器开启成功！');
});
