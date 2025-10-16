import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <main>
      <div id="panel">
        <div class="panel-item">
            <img src="/assets/chronometre.jpg" alt="chronometre" class="bg-img"/>
            <span class="label">Chronomètre</span>
        </div>
        <div class="panel-item">
            <img src="/assets/alarme.png" alt="alarme" class="bg-img"/>
            <span class="label">Alarme</span>
        </div>
        <div class="panel-item">
            <img src="/assets/fuseau-horaire.png" alt="mates" id="white" class="bg-img"/>
            <span class="label">Horaires</span>
        </div>
        <div class="panel-item">
            <img src="/assets/minuteur.png" alt="web" class="bg-img"/>
            <span class="label">Minuteur</span>
        </div>
    </div>
    </main>
  );
}

export default Home;