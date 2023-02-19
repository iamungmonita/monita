
import './Style/App.scss';
import Header from './Component/Header';
import { GlobalProvider } from './Goblal/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
    </GlobalProvider>
  );
}

export default App;
