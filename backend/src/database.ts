import { MongoClient, ObjectId } from "mongodb";

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

interface Question {
  id: number;
  checkpointNumber: number;
  question: string;
  answers: {
    id: number;
    answer: string;
    correct: boolean;
  }[];
}

export const questionsCol = db.collection<Question>("questions");

interface Session {
  userId: ObjectId;
  token: string;
  createdAt: Date;
  expiresAt: Date;
}

export const sessionsCol = db.collection<Session>("sessions");

interface Answer {
  questionId: ObjectId;
  userId: ObjectId;
  correct: boolean;
}

export const answersCol = db.collection<Answer>("answers");
