//* Main app

import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <html lang='es'>
      <body>
        <header>
          <NavBar />
        </header>
        <main className='main__bg'>
          <ItemListContainer greeting="Cargando items..." />
        </main>
      </body>
    </html>
  );
}

export default App;
