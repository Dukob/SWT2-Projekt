import React from 'react';
import '../standort.css';

const Standort = () => {
  const states = [
    {
      name: 'Baden-Württemberg',
      cities: ['City A', 'City B', 'City C']
    },
    {
      name: 'Berlin',
      cities: ['City D', 'City E', 'City F']
    },
    {
      name: 'Bremen',
      cities: ['City G', 'City H', 'City I']
    },
    {
      name: 'Hamburg',
      cities: ['City J', 'City K', 'City L']
    },
    {
      name: 'Niedersachsen',
      cities: ['City M', 'City N', 'City O']
    },
    {
      name: 'Saarland',
      cities: ['City P', 'City Q', 'City R']
    }
  ];

  const sortedStates = states.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="germany-states">
      {sortedStates.map((state, index) => (
        <div key={index} className="state">
          <h3 className="state-name">{state.name}</h3>
          <ul className="cities-list">
            {state.cities.sort().map((city, cityIndex) => (
              <li key={cityIndex} className="city">{city}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Standort;