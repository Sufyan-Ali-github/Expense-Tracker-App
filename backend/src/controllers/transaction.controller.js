import express from "express";
import { db } from "../config/db.js";

export const createTransaction = async (req, res) => {
  try {
    const { title, category, amount, user_id } = req.body;

    if (!title || !category || !amount || !user_id === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTransaction = await db`
      INSERT INTO "transaction" (title, category, amount, user_id)
      VALUES (${title}, ${category}, ${amount}, ${user_id})
      RETURNING *;
    `;

    console.log(newTransaction);

    res.status(201).json({ message: "Transaction created", transaction: newTransaction[0] });


  } catch (err) {
  console.error("💥 REAL ERROR:", err);
  res.status(500).json({ message: "Server error" });
}
};


export const getTransactions = async (req, res) => {
    
    try{
        const { id } = req.params;
        
        const transactions = await db`
            SELECT * FROM "transaction" WHERE user_id = ${id} ORDER BY created_at DESC;
        `;
        if(transactions.length === 0){
            return res.status(404).json({ message: "No transactions found for this user" });
        }

        res.status(200).json({ transactions });
    } catch (err) {
  console.error("💥 REAL ERROR:", err);
  res.status(500).json({ message: "Server error" });
}

}

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res.status(400).json({ message: "Invalid transaction ID" });
    }

    const deletedTransaction = await db`
      DELETE FROM "transaction" WHERE id = ${id} RETURNING *;
    `;

    if (deletedTransaction.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted", transaction: deletedTransaction[0] });
  } catch (err) {
  console.error("💥 REAL ERROR:", err);
  res.status(500).json({ message: "Server error" });
}
};

export const getAllTransaction=async(req,res)=>{
    try{
        const {user_id}=req.params;
        if(!user_id){
            return res.status(400).json({ message: "User ID is required" });
        }

        const balanceResult=await db`
            SELECT 
                COALESCE(SUM(amount), 0) AS balance FROM "transaction" WHERE user_id=${user_id};
        `;

        const incomeResult=await db`
            SELECT 
                COALESCE(SUM(amount), 0) AS income FROM "transaction"
                WHERE user_id=${user_id} AND amount > 0;
        `;

        const expenseResult=await db`
            SELECT 
                COALESCE(SUM(amount), 0) AS expense FROM "transaction" 
                WHERE user_id=${user_id} AND amount < 0;
        `;




      
        res.status(200).json({ balance: balanceResult[0].balance, income: incomeResult[0].income, expense: expenseResult[0].expense }); 

    }catch (err) {
  console.error("💥 REAL ERROR:", err);
  res.status(500).json({ message: "Server error" });
}
}

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const { title, category, amount } = req.body;

    const updatedTransaction = await db`
      UPDATE "transaction"
      SET
        title = COALESCE(${title}, title),
        category = COALESCE(${category}, category),
        amount = COALESCE(${amount}, amount)
      WHERE id = ${id}
      RETURNING *;
    `;

    if (updatedTransaction.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({
      message: "Transaction updated successfully",
      data: updatedTransaction[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
