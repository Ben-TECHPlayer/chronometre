import React, { useState, useEffect, useRef } from 'react';
import '../styles/Minuteur.css';

function Minuteur() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  // Décrémentation automatique
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Détection de fin
  useEffect(() => {
    if (timeLeft === 0 && audioRef.current) {
      alert("Temps écoulé !");
      audioRef.current.play();
    }
  }, [timeLeft]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCreateTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimeLeft(totalSeconds);
    setShowModal(false);
  };

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <main>
      <h1>Minuteur</h1>

      <div className="config">
        <button onClick={handleOpenModal}>Créer un minuteur</button>
      </div>

      {timeLeft > 0 && (
        <div className="time-display">
          <p>Temps restant : {formatTime(timeLeft)}</p>
        </div>
      )}

      {/* Audio caché */}
      <audio ref={audioRef} src="/alarm.mp3" preload="auto" />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modifier le minuteur</h2>

            <div className="modal-inputs">
              <label>Heures:</label>
              <input
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <label>Minutes:</label>
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
              <label>Secondes:</label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
              />
            </div>

            <div className="modal-actions">
              <button className="btn-save" onClick={handleCreateTimer}>Enregistrer</button>
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Minuteur;
