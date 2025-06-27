# Redux From Scratch

This project demonstrates how to set up **Redux using Redux Toolkit** from scratch in a React project.

---

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

import createSlice from redux toolit and make initial state then pass name,initial state and reducers in the createSlice. In the reducers we will create method that will do state update. For example in our case its changing theme from black to white.

```bash
import { createSlice } from "@reduxjs/toolkit";

let initialState:string='black';

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state)=>{
            if(state=="black"){
               return state='white';
            }
            else{
                return state='black'
            }
        }
    }
});

export const {changeTheme}=themeSlice.actions;
export default themeSlice.reducer;
```

After making slice we will have to put that slice in the store by giving it name that why we are exporting ThemeSlice.reducer.

### ✅ Using and Updating State

we will use useDispatch and use useSelector hooks to fetch and update themestate.

To get the theme state we will use useSelector() hook.
```bash
import { useSelector } from 'react-redux';
type RootState = ReturnType<typeof store.getState>;
//for typescirpt we need this RootState for defining the type
let theme=useSelector((state:RootState)=>state.theme);
```

To change the state we have to use useDispatch() hook.
```bash
import { useDispatch } from 'react-redux';
import { changeTheme } from './redux/slices/themeSlice';
//we have to import changeTheme function form themeSlice.ts file

//inside function use the hook
const dispath=useDispatch();

//then we can call this with use event like on button click
dispath(changeTheme())
```