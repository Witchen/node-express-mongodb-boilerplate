import express from 'express';
import loaders from './loaders';

const startServer = async () => {
  const app = express();

  await loaders.init({ expressApp: app });

  app.listen(process.env.PORT, () => {
    console.log(`Backend listening on port ${process.env.PORT}!`);
  });

  return app;
};

startServer();
