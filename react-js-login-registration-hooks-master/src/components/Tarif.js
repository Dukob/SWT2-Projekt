import React from 'react';
import '../tarif.css';

const Tarif = () => {
  return (
    <div class="tarif-container">
      <h1><b>Unsere Tarife</b></h1>
      <hr />
      <ul>
        <li style={{color: 'turquoise'}}><b>Basis</b></li>
        <p style={{color: 'turquoise'}}><b>Sie zahlen nur, wenn Sie Auto fahren. Keine Grundgebühr.</b></p>
        <hr />

        <li style={{color: 'turquoise'}}><b>Normal</b></li>
        <p style={{color: 'turquoise'}}><b>Für fast alle</b></p>
        <p style={{color: 'turquoise'}}><b>Optionale für 60-250km pro Monat. Ob Einkauf oder Kurztrip</b></p>
        <hr />

        <li style={{color: 'turquoise'}}><b>Exklusiv</b></li>
        <p style={{color: 'turquoise'}}><b>Für Vielfahrende</b></p>
        <p style={{color: 'turquoise'}}><b>Günstigere Kilometerpreise. Für häufige oder lange Fahrten</b></p>
      </ul>
    </div>
  );
};

export default Tarif;