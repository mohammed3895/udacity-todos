import * as dotenv from "dotenv";
dotenv.config();


export const config = {
  username: `${process.env.POSTGRES_USER}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_access_id: process.env.AWS_ACCESS_ID,
  aws_secret_key: process.env.AWS_SECRET_KEY,
};