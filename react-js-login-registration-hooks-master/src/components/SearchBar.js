import React, { useState } from 'react';
import '../searchBar.css';


const SearchBar = () => {
    const [Ausgangsort, setAusgangsort] = useState('');
    const [Anreiseort, setAnreiseort] = useState('');
    const [Startdatum, setStartdatum] = useState('');
    const [Rückkehrdatum, setRückkehrdatum] = useState('');

    const handleSearch = () => {
        // Logique pour effectuer la recherche avec les données fournies
        console.log('Ausgangsort:', Ausgangsort);
        console.log('Anreiseort:', Anreiseort);
        console.log('Startdatum:', Startdatum);
        console.log('Rückkehrdatum:', Rückkehrdatum);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Ausgangsort"
                value={Ausgangsort}
                onChange={(e) => setAusgangsort(e.target.value)}
            />
            <input
                type="text"
                placeholder="Anreiseort"
                value={Anreiseort}
                onChange={(e) => setAnreiseort(e.target.value)}
            />
            <input
                type="date"
                placeholder="Startdatum"
                value={Startdatum}
                onChange={(e) => setStartdatum(e.target.value)}
            />
            <input
                type="date"
                placeholder="Rückkehrdatum"
                value={Rückkehrdatum}
                onChange={(e) => setRückkehrdatum(e.target.value)}
            />
            <button onClick={handleSearch}>Suchen</button>
        </div>
    );
};

export default SearchBar;