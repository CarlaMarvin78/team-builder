import React, { useState} from 'react';
import Member from "./Components/Member";
import logo from './logo.svg';
import './App.css';
import MemberForm from './Components/MemberForm';


function App() {
  const [members, setMembers]=useState([{"name":"Carla Marvin", "email":"carlamarvin78@gmail.com", "role":"Web Developer"}]);
  return (
    <div className="App">
      {/* <header className="App-header">
      
      </header> */}
      <MemberForm setMembers={setMembers} members={members}/> 
      <div className="members">
      {members.map((member,idx)=><Member member={member} key={idx}/>)}
      </div>
    </div>
  );
}

export default App;
