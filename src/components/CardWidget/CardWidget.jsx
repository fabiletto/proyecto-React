import React from 'react'
import './CardWidget.css'
const CardWidget = () => {
    const imgCarrito ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjiayaY0MxWuAGl1KMg_DjfrGOS6z3aeZbA&usqp=CAU";
  return (
    
    <div>
     <img className='imgCarrito' src={imgCarrito} alt="" />
     <strong>2</strong>
    </div>
  )
}

export default CardWidget
