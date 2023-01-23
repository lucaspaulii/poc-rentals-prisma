import pg from "pg";
import dotenv from "../loadEnv.js";

dotenv();

const { Pool } = pg;

export const db = new Pool({
    connectionString: process.env.DATABASE_URL
})