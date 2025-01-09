import React from "react";
import CommonRoute from './routes/CommonRoute'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CommonRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
