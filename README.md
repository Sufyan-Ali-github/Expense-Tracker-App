<h1 align="center">💸 ExpenseTracker - Full Stack Mobile Wallet 🚀</h1>
A powerful, cross-platform mobile application designed to simplify personal finance management. This project bridge the gap between a sleek React Native frontend and a robust Node.js/PostgreSQL backend.



Key Functionalities:
This application provides a complete end-to-end flow for managing your money on the go:
Secure Auth Flow:
Dedicated Login and Signup screens with global state management via Context API.
Live Financial Dashboard:
Real-time calculation of your Total Balance, Income, and Expenses directly from the database.
Transaction History:
A clean, scrollable list of all your past activities, sorted by date.
Quick Entry: 
Easily log new transactions as either Income (positive) or Expense (negative).
One-Tap Delete: 
Remove mistakes or old entries with instant balance synchronization




🛠 The Tech Stack:
I chose these technologies to ensure high performance and a smooth developer experience:

Mobile Frontend
React Native & Expo:
For building a truly native feel on both iOS and Android.
NativeWind:
Implementing utility-first CSS (Tailwind) for rapid UI development.
React Navigation:
Handling the switch between Auth stacks and Main App stacks.

Backend & Database

Node.js & Express:
Providing a fast RESTful API for all mobile requests.
PostgreSQL:
Relational data storage ensuring data integrity for financial records.
Postgres.js:
A lightning-fast SQL client for writing clean, performant queries.


🚀 Getting Started
1. Backend Setup
Navigate to /backend and run npm install.

Configure your .env with your PostgreSQL connection string.

Start the server: npm run dev.

2. Mobile Setup
Navigate to /mobile and run npm install.

Ensure your axios.js points to your computer's local IP address.

Start the app: npx expo start.


📝 Author
Sufyan Ali Full Stack Developer
