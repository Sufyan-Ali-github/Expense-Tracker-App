import express from 'express';
import { createTransaction,getTransactions,deleteTransaction,updateTransaction,getAllTransaction } from '../controllers/transaction.controller.js';
 //import rateLimiter from '../middlewares/rateLimiter.js';

const router = express.Router();

router.post('/create', createTransaction);
router.get('/:id', getTransactions);
router.get('/summary/:user_id', getAllTransaction);
router.delete('/:id',deleteTransaction);
//router.patch('/:id', updateTransaction);

export default router;
