import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank  from './components/Rank/Rank';
import Linkform from './components/Link-form/Linkform';
import Signin from './components/Sign-in/Signin';
import Register from './components/Register/Register';


function App() {
  const [route, setRoute] = useState({
    signin: true,
    home: false,
    register: false
  });

  const[user, setUser] = useState({
    id: '',
    name: '',
    email:'',
    entries: 0,
    joined:'',
  
  })
  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined,

    })
  }

  // connecting to server
  useEffect(() =>{
    fetch('http://localhost:3002/')
    .then((res) => res.json())
    // .then(console.log)
  })

  const handleSignIn = () => {
    setRoute({home:false, signin: true, register: false})

  }

  const handleHome = () =>{
    setRoute({home: true, signin: false, register: false})
  }

  const handleRegister =() => {
    setRoute({signin: false, register: true, home: false })
  }


  return (

    <div className="App">
      {route.signin && (
      <Signin loadUser={loadUser} onHome= {handleHome} onRegister={handleRegister} />)}

      {route.register && (
        <Register loadUser={loadUser} onHome={handleHome} onSignIn={handleSignIn}/>
      )}
      
      {route.home && (
        <>
        
        <Navigation onSignIn={handleSignIn} />
        <Logo />
        <Rank username={user.name} entries= {user.entries}/>
        <Linkform />
        </>
      )} 
    </div>
  );
      }


export default App;
