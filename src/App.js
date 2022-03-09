import logo from './logo.svg';
import './App.css';
import { Meme} from './settime/setime';
import { useState } from 'react';

function App() {

const [Shoe,setShoe]=useState(true);

  return (
    <div className="App">
      {Shoe ? <Meme/> : ""}
      <button onClick={(()=>{
        return (setShoe(!Shoe))
      })}>start and restart</button>


      </div>
  );
}

export default App;
