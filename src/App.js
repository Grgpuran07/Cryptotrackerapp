import './App.css';
import Titlebar from './components/Titlebar';
import {Routes,Route} from "react-router-dom"
import Singlecoin from "./components/Singlecoin"
 


function App() {
   
  return (
     <>
       <Routes>
          <Route path="/" element={<Titlebar/>}/>
          <Route path="/:id" element={<Singlecoin/>}/>
      </Routes>
    </>
  );
}

export default App;
