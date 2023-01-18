import React, { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // input is the data from textfield
    setLoading(true)
    console.log(input)
    await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${input}?key=12ba9455-65f7-4be0-a093-14378f9f10d1`)
    .then(response => { return response.json() })
    .then(res => {
      console.log(res[0].meta.syns[0])
      setData(res[0].meta.syns[0])
      //res[0].meta.syns[0]
    })
    setLoading(false)
  }

  const Loading = () => {
    return (
      <h2 style={{ textAlign: 'center' }}>Loading...</h2>
    )
  }

  return (
    <div>
      <div className="container">
        <p className='title'>Find the synonym of the word here!
        <p style={{ fontSize: '12px' }}>Created by: Moses Anthony Y. Fat</p>
        </p>
        <form className='form' action="" onSubmit={handleSubmit}>
          <input className='input' type="text" value={input} onChange={handleChange} required />
          <button 
          type='submit'>Submit</button>
        </form>
        <div className='output'>
          { loading ? 
          <Loading/> 
          :
            data?.map((data, index) => {
              return (
                  <p key={index}>- {data}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
// cd synonym (because i am dumb and new to vite)
// npm run dev
