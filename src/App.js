// import { Fragment } from "react";
// import FormBuilder from "@components/FormBuilder";
// import "react-nestable/dist/styles/index.css";
// const App = () => {
//   return (
//     <Fragment>
//         <FormBuilder />
//     </Fragment>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormBuilder from '@components/FormBuilder';
import Preview from '@components/Preview'; 
import SendEmailPage from '@components/SendEmail/SendEmailPage';
import Login from '@components/Login';
import Register from '@components/Register';
import 'react-nestable/dist/styles/index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/send-email" element={<SendEmailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
