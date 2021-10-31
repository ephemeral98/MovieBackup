import Express from 'express';
import { MovieService } from '../services/MovieService';
import ResponseHelper from './ResponseHelper';
const router = Express.Router();

// 查询一条电影
router.get('/test/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await MovieService.findById(id);
        if (!movie) {
            ResponseHelper.sendData(null, res);
        } else {
            ResponseHelper.sendData(movie, res);
        }
    } catch (error) {
        ResponseHelper.sendData(null, res);
    }
});

// 按条件查询多个电影
router.get('/test', async (req, res) => {
    const movies = await MovieService.find(req.query as any);
    ResponseHelper.sendPageData(movies, res);
});

// 添加一条电影
router.post('/test', async (req, res) => {
    const movieObj = await MovieService.add(req.body);
    ResponseHelper.sendData(movieObj, res);
});

// 修改一条电影
router.put('/test', async (req, res) => {
    const movie = req.body;
    const movieObj = MovieService.edit(movie.id, movie);
    ResponseHelper.sendData(movieObj, res);
});

router.delete('/test', async (req, res) => {
    const movie = await MovieService.del(req.body.id);
    ResponseHelper.sendData(movie, res);
})

export default router;
