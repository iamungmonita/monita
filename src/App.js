
import './Style/App.scss';
import Header from './Component/Header';
import { GlobalProvider } from './Goblal/GlobalState';
import { Route, Routes } from 'react-router';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
    </GlobalProvider>
    
  );
}

export default App;
