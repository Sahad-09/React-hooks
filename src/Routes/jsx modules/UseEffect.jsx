import React from 'react'
import Markdown from 'markdown-to-jsx'
import {useState, useEffect} from 'react'
import hello from '../css modules/useEffect.module.css'

const UseEffect = () => {

  const [content, setContent] = useState("")
  console.log(content)

  useEffect(()=>{
    import(`./hello.md`)
      .then(res=>{
        console.log(res.default)
        fetch(res.default)
          .then(response => response.text())
          .then(response => setContent(response))
          .catch(err => console.err(err))
      })
  }, [])

  
  return (
    <>
    <Markdown class={hello.yo}>{content}</Markdown>
    </>
  )
}

export default UseEffect
