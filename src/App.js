import React, {Fragment} from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListTask from './Components/ListTask/ListTask';
// import {useSelector} from 'react-redux';


function App() {
  return (
    <Fragment>
      <AddTask />
      <ListTask />
    </Fragment>
  );
}

export default App;
