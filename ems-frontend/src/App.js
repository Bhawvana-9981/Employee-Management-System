import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';


function App() {
    return (
     
        <div className="App">
           <BrowserRouter>
            <HeaderComponent/>
              <Routes>
              {/*  //https://localhost:3000 */}
                <Route path = "/" element = {<ListEmployeeComponent />}></Route>
                {/* // http://localhost:3000/employees  */}
                <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>

                <Route path = "/add-employee" element = {<EmployeeComponent/>}></Route>

                <Route path ="/edit-employee/:id" element = {<EmployeeComponent/>}></Route>

                
              </Routes>
            <FooterComponent/>
            </BrowserRouter>
        </div>
       
    )
}

export default App;
