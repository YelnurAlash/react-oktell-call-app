import {useEffect} from "react"
import './App.css'

function App() {
  useEffect(() => {
      const result = oktell.connect({
          url: '127.0.0.1:4059',
          login: 'y.zhazitov',
          oktellVoice: true,
          password: 'NtV7ubiJ',
          callback: function(data) {
              if ( data.result ) {
                  console.log(result);
              }
          }
      })
      // const call = async () => {
      //     const result = await fetch('http://127.0.0.1:4059/callto?number=87479012100')
      //     console.log(result);
      // }
      //
      // call().then(res => console.log(res))
      
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default App
