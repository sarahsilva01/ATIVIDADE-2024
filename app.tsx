import React from 'react';
import './App.css';


// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  endereco: string
  cidade: string
 }

 // Componente funcional que utiliza props
 const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco, cidade }) => {
  return (
    
<div>
 <h1>Hello, {name}!</h1>
 <p>You are {age} years old.</p>
 <p>My address is {endereco} </p>
 <p>I'm from the city{cidade} </p>
 </div>
 );

};
