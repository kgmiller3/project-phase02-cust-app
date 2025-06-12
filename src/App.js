import React, {useState, useEffect} from 'react';
import { getAll, post, put, deleteById } from './memdb.js'
import './App.css';
import CustomerList from './components/CustomerList.js';

function log(message){console.log(message);}

export function App(params) {
  return (
      <div className="App">
      <CustomerList />
    </div>
  );
}

export default App;
