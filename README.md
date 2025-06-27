# Redux From Scratch

This project demonstrates how to set up **Redux using Redux Toolkit** from scratch in a React project.


## 📁 Folder Structure
```bash
src/
├── redux/
│ ├── store.ts
│ └── slices/
│ ├── themeSlice.ts
│ └── userSlice.ts
├── App.tsx
└── main.tsx
```

---

## ⚙️ Redux Implementation

### ✅ Install Required Libraries

Install Redux Toolkit and React Redux:

```bash
npm install @reduxjs/toolkit react-redux
```
### ✅ store.ts

First make a store.ts file and create store by
importing configureStore from redux toolkit and then make and export store 
inside configureStore we can add reducers we will add that later

```bash
import { configureStore } from '@reduxjs/toolkit';
export const store=configureStore({
    reducer:{

    }
});
```

### ✅ main.ts
now we will import store that we have created in redux folder and provider from react-redux and wrap our app with provider and pass store.

```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import {store} from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
```

### 📁 Slice
