import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CounterApp from './CounterApp'

import './index.css'

const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

// ReactDOM.render(<App saludo='Hola, soy goku' />, divRoot)

ReactDOM.render(<CounterApp value={123} />, divRoot)
