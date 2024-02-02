import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'






const ReactELement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'

  },
  chuldren:'CLick me to visit google'
}
//it will not run because react render also have some rules some specifications
//So it is not supported in react

const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)
//it is a basic syntax of react 



const reactElement =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
//it is a write way to pass the object in react first tag name than 


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
