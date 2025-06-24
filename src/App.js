//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const satges = [
  {id: 1 , name: "start"},
  {id: 2 , name: "game"},
  {id: 3 , name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(satges[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen/>}
      {gameStage === 'game' && <Game/>}
      {gameStage === 'game' && <GameOver/>}
    </div>
  );
}

export default App;
