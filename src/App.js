import React, { useState } from 'react';
import './App.css';

function App() {
  // Définir les états pour les champs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez votre logique de connexion ici
    console.log("Soumission du formulaire :", { email, password });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Supprimer l'image du logo */}
        <p>
         connexion
        </p>
        {/* Créer le formulaire de connexion */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
