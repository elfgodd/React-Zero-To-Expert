import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

ReactDOM.render(<App />, divRoot)
