import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Main />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
}

export default App;
