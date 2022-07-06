import {useState} from 'react'
import Content from './conten'


function App() {
  
   const [show , setShow] = useState(false)

   const hadle = ()=>{
      setShow(!show)
   }
   console.log(hadle)
  return (
        <div className='container' style={{padding : 20}}>
            <button onClick={hadle}> toggle </button>
                     {show && <Content />}
        </div>
  );
}

export default App;
