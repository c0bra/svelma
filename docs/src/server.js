import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(...[
		process.env.SAPPER_EXPORT && '/svelma' || undefined,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	].filter(x => !!x))
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
