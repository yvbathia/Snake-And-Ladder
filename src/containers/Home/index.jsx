import React, { useState } from "react";
import Board from "../../components/Board";
import Layout from "../../components/Layoout";
import PlayArea from "../../components/PlayArea";
import Mode from "../Mode";
import Winner from "../Winner";

const Home = () => {
  const [players, setPlayers] = useState({});
  const [step, setStep] = useState(1);
  const [winner, setWinner] = useState("");
  return (
    <Layout>
      {step === 1 && (
        <Mode letsPlay={() => setStep(2)} setPlayers={setPlayers} />
      )}
      {step === 2 && (
        <>
          <Board players={players} />
          <PlayArea
            players={players}
            setPlayers={setPlayers}
            setWinner={setWinner}
            gameOver={() => setStep(3)}
          />
        </>
      )}
      {step === 3 && <Winner player={winner} restartGame={() => setStep(1)} />}
    </Layout>
  );
};

export default Home;
