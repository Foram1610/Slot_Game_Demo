import './App.css';
import Game from './Game';
import Header from './Header';
import Match from './MatchSet';
function App() {
  return (
    <>
      <Header />
      {Match.map((val) => {
        return <Game key={val.id} x={val.x} y={val.y} z={val.z}/>
      })}
    </>
  );
}

export default App;
