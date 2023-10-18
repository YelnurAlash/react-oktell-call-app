import {useEffect} from "react"
import './App.css'

function App() {
  useEffect(() => {
      const socket = new WebSocket('ws://phone.tha.kz')

      socket.onopen = () => {
          // WebSocket is connected, send the user data
          socket.send(JSON.stringify({
              login: 'y.zhazitov',
              oktellVoice: true,
              password: 'NtV7ubiJ'
          }));
      };

      socket.onmessage = (event) => {
          console.log(event)
          // Handle incoming WebSocket data
          const data = JSON.parse(event.data);
          
          console.log(data.result);
      };
      
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default App
