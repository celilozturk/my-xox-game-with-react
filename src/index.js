import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



function XoxGameComponent() {
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinish] = useState(false);
  const [gameMove, setGameMove]=useState([]);

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
    setGameMove([]);
  }

  const markGame = (index) => {
    if (!isGameFinish) {


      const newGames = [...games];
      if (newGames[index] == "") {
        newGames[index] = mark;
        setGames(newGames);
        setGameMove((val)=>[...val,newGames]);
        //console.log(gameMove);
        let e=isMoveFinish(newGames);
        if(e){
          setMessage("Oyun berabere");
          setIsGameFinish(true);
          return;
        }

        let r =isGameOver(newGames);
        if(r){
          setMessage("Oyunu "+ mark + " kazandi!");
          setIsGameFinish(true);
          return;
        }
        mark == "X" ? setMark("0") : setMark("X");
        setMessage("Hamle Sirasi: " + (mark == "X" ? "O" : "X"));
      }
    }
  }

  const isGameOver=(newGames)=>{
    if(newGames[0] != ""
    && newGames[0] === newGames[1]
    && newGames[1] ===newGames[2]){
      return true;
    }
    if(newGames[3] != ""
    && newGames[3] === newGames[3]
    && newGames[4] ===newGames[5]){
      return true;
    }
    if(newGames[6] != ""
    && newGames[6] === newGames[7]
    && newGames[7] ===newGames[8]){
      return true;
    }
    if(newGames[0] != ""
    && newGames[0] === newGames[3]
    && newGames[3] ===newGames[6]){
      return true;
    }
    if(newGames[1] != ""
    && newGames[1] === newGames[4]
    && newGames[4] ===newGames[7]){
      return true;
    }
    if(newGames[2] != ""
    && newGames[2] === newGames[5]
    && newGames[5] ===newGames[8]){
      return true;
    }
    if(newGames[0] != ""
    && newGames[0] === newGames[4]
    && newGames[4] ===newGames[8]){
      return true;
    }
    if(newGames[2] != ""
    && newGames[2] === newGames[4]
    && newGames[4] ===newGames[6]){
      return true;
    }
  }

    function isMoveFinish(newGames){
      for (let i = 0; i < newGames.length; i++) {
        const element = newGames[i];
        if(element === ""){
          return false;
        }
      }
      return true;
    }

    const setThatGameMove = (game)=>{
      setGames(game);
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
        <hr/>
            <ul>
              {gameMove.map((game,index)=>(
                <button onClick={()=>setThatGameMove} className='btn btn-primary mx-1 mt-2' key={index}> {index+1}. Hamle</button>

              ))}
            </ul>
          </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<XoxGameComponent />);


reportWebVitals();
