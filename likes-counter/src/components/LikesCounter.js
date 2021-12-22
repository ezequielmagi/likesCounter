import React from 'react'
import './likesCounter.css'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart , faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

function LikesCounter() {

  const [ likeCounter , setlikeCounter] = useState (0)
  const [ dislikeCounter , setdislikeCounter] = useState (0)
  const [ lovitCounter , setlovitCounter] = useState (0)

  const handleLikesCounter = () => {
    setlikeCounter( likeCounter + 1 )
  }
  const handleDislikesCounter = () => {
    setdislikeCounter( dislikeCounter + 1 )
  }
  const handleLovitCounter = () => {
    setlovitCounter( lovitCounter + 1 )
  }

  return (
    <>
      <div className="likesButtons">
        <div className='likesButtons--button'><p>{ dislikeCounter }</p> <button className='disLike' onClick={ handleDislikesCounter }><FontAwesomeIcon icon={faThumbsDown} /></button> </div>
        <div className='likesButtons--button'><p>{ likeCounter }</p> <button className='like' onClick={ handleLikesCounter } ><FontAwesomeIcon icon={faThumbsUp} /></button> </div>
        <div className='likesButtons--button'><p>{ lovitCounter }</p> <button className='loveit' onClick={ handleLovitCounter } ><FontAwesomeIcon icon={faHeart} /></button></div>
      </div>
    </>
  )
}



export default LikesCounter

