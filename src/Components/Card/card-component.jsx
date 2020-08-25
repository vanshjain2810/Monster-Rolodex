import React from 'react';
import './card-style.css';

export const Card = props => (
   <div className='card-container'>
       <img alt='bhoot' src={`https://robohash.org/${props.monster.id}/?set=set3&size=180x180`}/>
      <h2> {props.monster.name}</h2>
      <p>{props.monster.email}</p>
   </div> 
);