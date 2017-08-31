import Clock from './Component.jsx'
import { h, render } from 'preact'

function log (s: string) {
    console.log(s)
}

log('hello')

// render an instance of Clock into <body>:
render(<Clock />, document.body)
