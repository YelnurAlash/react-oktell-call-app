import './App.css'
import axios from 'axios'

function App() {

    const call = async () => {
        await fetch('http://127.0.0.1:4059/callto?number=87479012100')
        const result = await fetch('http://127.0.0.1:4059/getcurrentcallinfo')
        console.log('decline: ' + result )
    }
    
    const decline = async () => {
        const result = await fetch('http://127.0.0.1:4059/disconnectcall')
        console.log('decline: ' + result )
    }

    const getInfo = async () => {
        const result = axios.get('http://127.0.0.1:4059/getcurrentcallinfo', {
            "Content-Type": "application/xml; charset=utf-8"
        }).then(res => console.log(res)).catch(error => console.log(error))
        console.log('decline: ' + result )
    }

    const focus = async () => {
        const result = await fetch('http://127.0.0.1:4059/focus')
        console.log('decline: ' + result )
    }

  return (
    <div>
        <button onClick={() => call()}>Call</button>
        <button onClick={() => decline()}>Decline</button>
        <button onClick={() => getInfo()}>Info</button>
        <button onClick={() => focus()}>Focus</button>
    </div>
  )
}

export default App
