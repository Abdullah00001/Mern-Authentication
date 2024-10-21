import mongoose from 'mongoose';

export const connect = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log(`Database Connected\nHost:${connection.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Failed\nMessage : ${error.message}`);
    process.exit(1);
  }
};
