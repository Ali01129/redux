import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {login,logout} from './redux/slices/userSlice';
import { store } from './redux/store';
import { changeTheme } from './redux/slices/themeSlice';

type RootState = ReturnType<typeof store.getState>;


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

function Login(){

  let theme=useSelector((state:RootState)=>state.theme);

  const dispath=useDispatch();
  const navigate=useNavigate();

  interface LoginFormValues {
  email: string;
  password: string;
}

  return (
    <div className={`flex flex-col ${theme=='black'?"bg-black text-white":"bg-white text-black"} items-center justify-center h-screen`}>
        <h1 className='font-bold border-2 border-solid rounded-md px-34 py-2 text-white bg-gray-600'>Login</h1>
        <Formik
        initialValues={{email:"",password:""}}
        validate={values=>{
          
          const errors: Partial<Record<keyof LoginFormValues, string>> = {};

          if(!values.email){
            errors.email="Email is required"
          }
          if (!values.password){
            errors.password="Password is required"
          }
          return errors;
        }}
        onSubmit={(values)=>{
          console.log(values);
          dispath(login(values));
          navigate("/home",{replace:true});
        }}
        >
          <Form>
                <div className='border-1 border-solid p-4 rounded-md my-2 flex flex-row justify-between'>
                  <label className='' htmlFor="email">Email:</label>
                  <Field className="mx-2 border-1 border-solid rounded-md px-2" type="email" name="email" />
                </div>
                <ErrorMessage component="div" className='text-red-500 font-bold' name='email'/>
                <div className='border-1 border-solid p-4 rounded-md my-2 flex flex-row justify-between'>
                  <label htmlFor="password">Password:</label>
                  <Field className="mx-2 border-1 border-solid rounded-md px-2" type="password" name="password" />
                </div>
                <ErrorMessage component="div" className='text-red-500 font-bold mb-2' name='password'/>

                <button className='bg-blue-500 rounded-md px-4 py-2 text-white' type='submit'>
                  submit
                </button>
              </Form>

        </Formik>
      </div>
  );
}

function Home(){

  let theme=useSelector((state:RootState)=>state.theme);

  const dispath=useDispatch();

  const email=useSelector((state:RootState)=>state.user.email)
  const password=useSelector((state:RootState)=>state.user.password)

  const navigate=useNavigate();

  return(
    <div className={`h-screen ${theme=='black'?"bg-black text-white":"bg-white text-black"} flex justify-center items-center flex-col`}>
      <div className={`font-bold px-6 py-2 border-2 border-${theme=='black'?"white":"black"} rounded-md`}>{"email: "+email}</div>
      <div className={`font-bold px-6 py-2 border-2 border-${theme=='black'?"white":"black"} rounded-md mt-6`}>{"password: "+password}</div>
      <div className='flex flex-row'>
        <button className={`bg-blue-500 rounded-md px-4 py-2 text-white mt-10`} onClick={()=>{navigate("/")}}>
          goBack
        </button>
        <button className={`bg-blue-500 rounded-md px-4 py-2 text-white mt-10 mx-4`} onClick={()=>dispath(changeTheme())}>
          Change Theme
        </button>
      </div>
      <button className={`bg-blue-500 rounded-md px-4 py-2 text-white mt-6 mx-4`} onClick={()=>dispath(logout())}>
        Logout
      </button>
    </div>
  );
}

export default App