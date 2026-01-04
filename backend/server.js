import app from "./main.js";
import dotenv from 'dotenv';
import { initDB } from './src/config/db.js';

dotenv.config();


const PORT=process.env.PORT;




initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});