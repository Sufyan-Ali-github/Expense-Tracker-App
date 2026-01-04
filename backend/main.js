import express from "express";
import cookieParser from "cookie-parser";
import transactionRoutes from "./src/routes/transaction.route.js";





const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/transactions", transactionRoutes);




export default app;
