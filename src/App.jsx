import { useState } from 'react'
import {ModelCiscoCorp} from "../page_build/model/cisco/CiscoCorp";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
        <ModelCiscoCorp/>
    </div>
  )
}

export default App;
