import {
	join
} from 'path';

let config = {
	env: 'production',
	port: 8002,
	logDir: join(__dirname, '../logs'),
	apiTimeout: 5000
}

export default config;
