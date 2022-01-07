import './App.css';
import {useState, useEffect} from 'react';
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src" : "/img/helmet-1.png" },
  { "src" : "/img/potion-1.png" },
  { "src" : "/img/ring-1.png" },
  { "src" : "/img/scroll-1.png" },
  { "src" : "/img/shield-1.png" },
  { "src" : "/img/sword-1.png" }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //Suffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  //Handle a choice
  const handleChoice = (card) => {
    // console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo){

      if (choiceOne.src === choiceTwo.src){
        console.log("Those Cards match")
        resetTurn()
      } else{
        console.log("Those card do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  //Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
