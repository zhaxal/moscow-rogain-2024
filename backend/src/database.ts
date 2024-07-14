import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/rogain24";

const client = new MongoClient(uri);
client.connect();

const db = client.db(process.env.DB_NAME || "rogain24");

interface User {
  phone: number;
  verified: boolean;
  code?: number;
}

export const usersCol = db.collection<User>("users");
