import React, { useState, useEffect } from 'react';
import '../styles/Horaires.css';

function Horaires() {
  const [selectedZone, setSelectedZone] = useState('Europe/Paris');
  const [localTime, setLocalTime] = useState('');

  const timezones = [
    { label: 'France (Paris)', value: 'Europe/Paris' },
    { label: 'États-Unis (New York)', value: 'America/New_York' },
    { label: 'Japon (Tokyo)', value: 'Asia/Tokyo' },
    { label: 'Brésil (São Paulo)', value: 'America/Sao_Paulo' },
    { label: 'Inde (Delhi)', value: 'Asia/Kolkata' },
    { label: 'Australie (Sydney)', value: 'Australia/Sydney' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: selectedZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const formatted = now.toLocaleTimeString('fr-FR', options);
      setLocalTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedZone]);

  return (
    <main>
      <h1>Horaires par fuseau</h1>
      <div className="select-zone">
        <label>Choisir un pays :</label>
        <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>{tz.label}</option>
          ))}
        </select>
      </div>

      <div className="heure-locale">
        <h2>Heure locale :</h2>
        <p>{localTime}</p>
      </div>
    </main>
  );
}

export default Horaires;
