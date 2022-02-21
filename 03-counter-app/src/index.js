import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import CounterApp from './CounterApp'

import './index.css'

const divRoot = document.querySelector('#root')

// ReactDOM.render(<App saludo='Hola, soy Goku' />, divRoot)

ReactDOM.render(<CounterApp value={100} />, divRoot)
