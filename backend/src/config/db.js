import {neon} from '@neondatabase/serverless'

import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;  
export const db = neon(DATABASE_URL);



export async function initDB(){
  try{
    await db`
        CREATE TABLE IF NOT EXISTS transaction (    
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL  DEFAULT CURRENT_DATE
        ); 
    `
    console.log('Database initialized successfully');
  } catch(err){
    console.error('Database connection error:', err);
    process.exit(1);   //status code 1 means failure and 0 means success
  }   
}