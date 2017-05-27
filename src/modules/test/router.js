'use strict'
import * as controller from './test.controller';
import Router from 'koa-router';

let router = Router();

router.get('/test', controller.test);


export default router;