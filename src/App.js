
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from './Page/landingPage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage />} />
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
