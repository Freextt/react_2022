//import logo from './logo.svg';
//import './App.css';
import Character from "./components/Character";
function App() {
  return (
      <div>
         <Character
         id = {'293'}
         name = {'Rick Sanchez'}
         status = {'Dead'}
         species = {'Human'}
         gender = {'Male'}
         image = {'https://rickandmortyapi.com/api/character/avatar/293.jpeg'}
         />
          <Character
          id = {'474'}
          name = {'Dancer Cowboy Morty'}
          status = {'Alive'}
          species = {'Human'}
          gender = {'Male'}
          image = {'https://rickandmortyapi.com/api/character/avatar/474.jpeg'}
          />
          <Character
          id = {'12'}
          name = {'Alexander'}
          status = {'Dead'}
          species = {'Human'}
          gender = {'Male'}
          image = {'https://rickandmortyapi.com/api/character/avatar/12.jpeg'}
          />
          <Character
          id = {'17'}
          name = {'Annie'}
          status = {'Alive'}
          species = {'Human'}
          gender = {'Female'}
          image = {'https://rickandmortyapi.com/api/character/avatar/17.jpeg'}
          />
          <Character
          id = {'400'}
          name = {'Giant Judge'}
          status = {'Alive'}
          species = {'Mythological Creature'}
          gender = {'Male'}
          image = {'https://rickandmortyapi.com/api/character/avatar/400.jpeg'}
          />
          <Character
          id = {'702'}
          name = {'Gun Brain Rick'}
          status = {'Dead'}
          species = {'Robot'}
          gender = {'Male'}
          image = {'https://rickandmortyapi.com/api/character/avatar/702.jpeg'}
          />
      </div>
  );
}

export default App;
