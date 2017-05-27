'use strict';
import testRouter from './modules/test/router';

function register(app){
	app.use(testRouter.routes());
}

export default register;