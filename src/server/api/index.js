import server from 'express';
import * as TestController from './controllers/test_controller';

const router = server.Router();

router.get('/testa', TestController.getTestA);
router.post('/testa', TestController.saveTestA);

export default router;
