import React from 'react'
import './Linkform.css'
import { useState } from 'react'

const Linkform = () => {
  const [input, setInput] = useState('')
  const [submittedLink, setSubmittedLink] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const handleInputChange = (e) =>{
    console.log(e.target.value)
    setInput(e.target.value)
    
  }
  const handleBtnSubmit = () =>{
    console.log('click')
    setSubmittedLink(input);
    setSubmitted(true);

  }
  return (
    <div>
        <p className='f3'>Let's see how many links / images you can submit</p>

        <div className='form pa4 br3 shadow-5 center'>
            <input type="text" placeholder='Enter your link...' onChange={handleInputChange}/>
            <button className='bg-light-purple white pointer' onClick={handleBtnSubmit}>Submit</button>
        </div>
        {submitted && (
          <p className='f3 white'>This is your link:{submittedLink}</p>
        )}
    </div>

  )
}

export default Linkform