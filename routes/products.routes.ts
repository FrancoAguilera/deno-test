import { Router, Response } from 'https://deno.land/x/oak/mod.ts';
import * as indexCtrl from '../controllers/index.controller.ts';

const router = new Router();

router.get('/', ({ response }: { response: Response }) => {
  response.body = 'Welcome to my API';
});

router
  .get('/users', indexCtrl.getUsers)
  .get('/users/:id', indexCtrl.getUser)

export default router;
