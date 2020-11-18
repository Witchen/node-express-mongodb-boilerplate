import mongoose from 'mongoose';
import models from '../models';
import { cryptoUtil } from '../util';

const eraseDatabaseOnSync = (process.env.RESET_DB && process.env.RESET_DB === 'true') || false;

const seedUser = async () => {
  const user = new models.User({
    email: 'bytechimp@gmail.com',
    password: await cryptoUtil.hash('pass'),
    name: 'bytechimp',
    type: 'client',
  });

  await models.User.create([user]);
};

const dbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
const connectDb = () => mongoose.connect(process.env.DATABASE_URL, dbOption);

export default async () => {
  await connectDb();

  if (eraseDatabaseOnSync) {
    console.log('Database will be refreshed with seed data');
    await Promise.all([models.User.deleteMany({})]);
    await seedUser();
  }
};
