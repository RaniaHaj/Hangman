import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import { useState } from "react";

function App() {
  const isLetterExist = (letter) => {
    let newAllLetters = { ...letters };
    newAllLetters[letter] = true;
    setLetters(newAllLetters);
    updateScore(letter);
  };

  const updateScore = (letter) => {
    let newScore = score;
    if (solution.word.includes(letter)) {
      setScore(newScore + 5);
    } else {
      setScore(newScore - 20);
    }
  };

  const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };
  const [score, setScore] = useState(100);
  const [solution, setSolution] = useState({
    word: "BANANA",
    hint: "minions love it",
  });

  let allLetters = generateLetterStatuses();
  const [letters, setLetters] = useState(allLetters);

  return (
    <div>
      <Score score={score} />
      <Solution solution={solution} letters={letters} />
      <Letters onClickListener={isLetterExist} letters={letters} />
    </div>
  );
}

export default App;
