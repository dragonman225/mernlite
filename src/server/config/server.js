const { env } = process;

export default {
  name: 'MERNLite',
  mongodbUri: env.MONGODB_URI || 'mongodb://localhost:27017/mernlite',
  host: env.HOST || '0.0.0.0',
  port: env.PORT || '8000',
};
