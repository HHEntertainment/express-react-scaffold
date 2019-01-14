import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import { applyMiddlewareToApp } from './graphql.middleware';

import posts from './routes/posts';

const app = express();
const port = 4000;
const devPort = 4001;

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);

  devServer.listen(devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.use('/', express.static(`${__dirname}/../public`));
app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});
applyMiddlewareToApp(app);

// 라우트 예제
app.use('/posts', posts);

app.listen(port, () => {
    console.log('Express listening on port', port);
});
