import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav className="nav"/>
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
