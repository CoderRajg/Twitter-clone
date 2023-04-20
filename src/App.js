import './App.css';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className='app'>
      {/* Sidebar- on the left */}
      <Sidebar/>

      {/* Feed- only scrolable thing */}
      <Feed/>

      {/* Widgets- the cards in the right hand */}
      <Widgets/>
    </div>
  );
}

export default App;
