import dotenv from 'dotenv';
import { connect } from './configs/db.configs.js';
import app from './app.js';

dotenv.config();

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Running On Port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Server Start Unsuccessful\nMessage:${error.message}`);
  });
