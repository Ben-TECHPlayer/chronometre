import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="contacts">
        <div className="copyrights">
          <p>@ Tous droits réservés 2025</p>
        </div>
        <div className="contact-icons">
          {/* Ajoute ici toutes tes icônes de contact comme dans le HTML */}
          <a href="mailto:aboudoubenali@gmail.com"><img src={`${process.env.PUBLIC_URL}/assets/gmail.png`} alt="Gmail" /></a>
          <a href="http://www.linkedin.com/in/ben-ali-aboudou-9a412b269/"><img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" /></a>
          <a href="https://github.com/Ben-TECHPlayer"><img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="GitHub" /></a>
          <a href="https://git.iut-orsay.fr/baboudo"><img src={`${process.env.PUBLIC_URL}/assets/gitlab.png`} alt="GitLab" /></a>
          <a href="https://youtube.fr/@Ben_CR7"><img src={`${process.env.PUBLIC_URL}/assets/youtube.png`} alt="Youtube" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
