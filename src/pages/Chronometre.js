import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chronometre.css';

function Chronometre() {
  const [time, setTime] = useState(0); // en centièmes de seconde
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  // Formatage du temps en mm:ss:cs
  const formatTime = (centiseconds) => {
    const minutes = Math.floor(centiseconds / 6000);
    const seconds = Math.floor((centiseconds % 6000) / 100);
    const cs = centiseconds % 100;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10); // 10ms = 1 centième
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setIsStopped(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsStopped(true);
  };

  const handleReset = () => {
    setTime(0);
    setLaps([]);
    setIsStopped(false);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsStopped(false);
  };

  const handleLap = () => {
    setLaps((prev) => [...prev, formatTime(time)]);
  };

  return (
    <main>
      <h1>Chronomètre</h1>
      <div className="temps">{formatTime(time)}</div>

      {!isRunning && !isStopped && (
        <div className="debut">
          <button onClick={handleStart}>Démarrer</button>
        </div>
      )}

      {isRunning && (
        <div className="encours">
          <button onClick={handleStop} className="bouton-stop">Arrêter</button>
          <button onClick={handleLap} className="bouton-lap">Tour</button>
        </div>
      )}

      {!isRunning && isStopped && (
        <div className="fin">
          <button onClick={handleResume} className="bouton-resume">Continuer</button>
          <button onClick={handleReset} className="bouton-reset">Effacer</button>
        </div>
      )}

      {laps.length > 0 && (
        <div className="tours">
          <h2>Tours</h2>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>Tour {index + 1}: {lap}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Chronometre;
