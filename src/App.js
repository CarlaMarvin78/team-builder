import React, { useState} from 'react';
import Member from "./Components/Member";
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers]=useState([{"name":"Carla Marvin", "email":"carlamarvin78@gmail.com", "role":"Web Developer"}]);
  return (
    <div className="App">
      {/* <header className="App-header">
      
      </header> */}
      <div className="members">
      {members.map((member,idx)=><Member member={member} key={idx}/>)}
      </div>
    </div>
  );
}

export default App;
