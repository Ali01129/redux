# Redux From Scratch

This project demonstrates how to set up **Redux using Redux Toolkit** from scratch in a React project.


## 📁 Folder Structure

src/
├── redux/
│ ├── store.ts
│ └── slices/
│ ├── themeSlice.ts
│ └── userSlice.ts
├── App.tsx
└── main.tsx


---

## ⚙️ Redux Implementation

### ✅ Install Required Libraries

Install Redux Toolkit and React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```
### ✅ store.ts

First make a store.ts file and create store
import configureStore from redux toolkit and then make and export store 
inside configureStore we can add reducers we will add that later

```bash
import { configureStore } from '@reduxjs/toolkit';
export const store=configureStore({
    reducer:{

    }
});```