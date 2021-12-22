import React from 'react'
import './card.css'
import LikesCounter from './LikesCounter'


function Card({ url , user }) {
 
  // const user = '@iMagic'

  return (
    <div className='cardContainer'>
      <img src={url} alt="imagen de perfil" />
      <div className="card--description"> <p className='userCount'>{user}</p> <p>Aca tomando sol</p></div>
      <LikesCounter />
    </div>
  )
}

export default Card
