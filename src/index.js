import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



function XoxGameComponent() {
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinish] = useState(false);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    setGames([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    setIsGameFinish(false);
    setMark("X");
    setMessage("Hame Sirasi: " + mark);
  }

  const markGame = (index) => {
    if(!isGameFinish){


    const newGames = [...games];
    if (newGames[index] == "") {
      newGames[index] = mark;
      setGames(newGames);
      mark == "X" ? setMark("0") : setMark("X");
      setMessage("Hamle Sirasi: " + (mark == "X" ? "O" : "X"));
    }
  }
  }

  return (
    <>
      <div className='container text-center'>

        <h2 className='alert alert-warning'>XOX Oyunu</h2>
        {message}
        <button onClick={newGame} className='btn btn-outline-primary w-100'>Yeni Oyun</button>
        <div className='row mt-2'>
          {games.map((game, index) => (
            <div key={index} className='col-md-4 box' onClick={() => markGame(index)}>
              {game}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<XoxGameComponent />);


reportWebVitals();
