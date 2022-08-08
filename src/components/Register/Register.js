import React from 'react'
import { useState } from 'react';


const Register = ({onSignIn, onHome, loadUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onNameChange = (e) =>{
        setName(e.target.value)
        // console.log(name)
    }

    const onEmailChange = (e) =>{
        setEmail(e.target.value)
        // console.log(email)
    }

    const onPasswordChange = (e) =>{
        setPassword(e.target.value)
        // console.log(password)
    }

   
    const onSubmitRegister = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password

            })
        }).then((res) => res.json())
        .then((user) => {
            if(user){
                loadUser(user);
                onHome();
            }
            
        })
    }




  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address" onChange={onNameChange}>Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address" onChange={onEmailChange}>Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div class="mv3">
                    <label className="db fw6 lh-copy f6" for="password" onChange={onPasswordChange}>Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={onSubmitRegister}/>
                </div>
                <div class="lh-copy mt3">
                <p href="#0" className="f6 link dim black db" onClick={onSignIn}>Sign In</p>  
                </div>
            </form>
        </main>
    </article>

  )
}

export default Register;