import React, { useState, useEffect, useRef } from 'react';
import '../styles/Alarme.css';

function Alarme() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmTriggered, setAlarmTriggered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempAlarmHour, setTempAlarmHour] = useState('00');
  const [tempAlarmMinute, setTempAlarmMinute] = useState('00');
  const audioRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const date = now.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setCurrentTime(time);
      setCurrentDate(date);

      const current = now.getHours().toString().padStart(2, '0') + ':' +
                      now.getMinutes().toString().padStart(2, '0');
      if (alarmTime === current && !alarmTriggered) {
        setAlarmTriggered(true);
        if (audioRef.current) {
          audioRef.current.play();
        }

        // Attendre 500ms avant d'afficher l'alerte
        setTimeout(() => {
          alert('⏰ Alarme ! Il est ' + current);
        }, 0);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [alarmTime, alarmTriggered]);

  const handleOpenModal = () => {
    setShowModal(true);
    setTempAlarmHour('00');
    setTempAlarmMinute('00');
  };

  const handleSaveAlarm = () => {
    setAlarmTime(`${tempAlarmHour}:${tempAlarmMinute}`);
    setAlarmTriggered(false);
    setShowModal(false);
  };

  return (
    <main>
      <div className="horloge">
        <h1>Alarme</h1>
        <h2>{currentDate}</h2>
        <h3>{currentTime}</h3>
      </div>

      <div className="alarme">
        <button className="addAlarm" onClick={handleOpenModal}>Créer un alarme</button>

        {alarmTime && (
          <div className="next-alarm">
            Prochaine alarme à <strong>{alarmTime}</strong>
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Créer une alarme</h2>

            <div className="scroll-selectors">
              <div>
                <label>Heure :</label>
                <select value={tempAlarmHour} onChange={(e) => setTempAlarmHour(e.target.value)}>
                  {[...Array(24).keys()].map((h) => (
                    <option key={h} value={String(h).padStart(2, '0')}>
                      {String(h).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Minute :</label>
                <select value={tempAlarmMinute} onChange={(e) => setTempAlarmMinute(e.target.value)}>
                  {[...Array(60).keys()].map((m) => (
                    <option key={m} value={String(m).padStart(2, '0')}>
                      {String(m).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-save" onClick={handleSaveAlarm}>Enregistrer</button>
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* 🔊 Audio pour l'alarme */}
      <audio ref={audioRef} src="/alarm.mp3" preload="auto" />
    </main>
  );
}

export default Alarme;
