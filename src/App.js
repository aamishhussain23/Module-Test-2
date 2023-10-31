import { BrowserRouter } from 'react-router-dom';
import Leftsidebar from './components/Leftsidebar';
import Default from './components/Default';
import './App.css';

function App() {
  return (
    <div className='container'>
        <div className='leftsidebar'>
            <Leftsidebar></Leftsidebar>
        </div>
        <div className='default'>
            <Default></Default>
        </div>
    </div>
  );
}

export default App;
