
import './Style/App.scss';
import Header from './Component/Header';
import { GlobalProvider } from './Goblal/GlobalState';
import Login from './Component/Login';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Login/>
    </GlobalProvider>
  );
}

export default App;
