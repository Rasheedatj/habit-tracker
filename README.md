# 🧠 HABIT TRACKER

A modern, cross-platform mobile app built with React Native (Expo) that helps users build consistent habits, track progress, and view daily streaks, all powered by Appwrite for authentication and database management.

## ✨ Features

- 🔐 Secure Authentication – User sign-up and login via Appwrite

- 🗓 Create & Manage Habits – Add, update, and delete your daily habits

- ✅ Mark as Complete – Track completed habits in real-time

- 🔥 Streak View – Visualize your consistency and daily progress

- 📱 Responsive UI – Built with React Native Paper for a polished look

## 🛠 Tech Stack

**Framework:** Expo (React Native)

**UI Library:** React Native Paper

**Navigation:** Expo Router

**Backend & Auth:** Appwrite

**Language:** TypeScript

## 🧩 Project Structure

```
habit-tracker/
│
├── app/
│   ├── auth.tsx          # Login & Signup screens
│   ├── (tabs)/           # Main app screens (Today's Habits, Streaks, Add Habit)
│   ├── _layout.tsx       # Tabs Router layout
│   └── index.tsx         # Root route
│   └── _layout.tsx         # Root layout
│
├── lib/
│   ├── appwrite.ts       # Appwrite client
│   ├── types/      # types
│   ├── database.types.ts      # database types
│   ├── context/      # state management
│   ├── auth-context.tsx      # Auth state management
│
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

1️⃣ Clone the repo

```
git clone https://github.com/Rasheedatj/habit-tracker.git
cd habit-tracker
```

2️⃣ Install dependencies

```
npm install
# or
yarn install
```

3️⃣ Configure Appwrite

- Create a new Appwrite project from your console

- Set up Authentication (Email/Password)

- Create a Database with a collection named habits

- Add the following attributes:

- title → string

- description → string

- completed → boolean

- user_id → string

- frequency → string

- last_completed → string

Copy your project endpoint and credentials into an .env file:

```
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_PROJECT_NAME="habit-tracker"
EXPO_PUBLIC_APPWRITE_ENDPOINT=
EXPO_PUBLIC_DB_ID=
EXPO_PUBLIC_HABITS_COLLECTION_ID=
```

4️⃣ Run the app

```
npm run ios
```

## 📸 Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## 👩🏾‍💻 About the Developer

Rasheedat Jinadu: A mobile and web Frontend Engineer. I help founders, startups, enterprise and business owners build the ideal websites that Attract Users, Keep Users, and Generate Sales

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rasheedatj.vercel.app/)

[![🔗 Connect with me on LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rashedat-jinadu)

## 📝 License

This project is open-source under the [MIT License.](https://choosealicense.com/licenses/mit/)
