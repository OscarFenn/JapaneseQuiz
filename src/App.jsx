
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Katakana from "./Pages/Katakana";
import Hiragana from "./Pages/Hiragana";
import ErrorPage from "./Pages/ErrorPage";


function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Katakana" element={<Katakana />} />
        <Route path="/Hiragana" element={<Hiragana />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </Router>
    
  )
}

export default App
