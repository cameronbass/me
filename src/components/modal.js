import React from 'react'
import SVG from 'react-inlinesvg'
import Close from '../images/close.svg'
import "./stylesheets/modal.css"

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className='modal-title'>The {props.place} Experience</h4>
          <SVG onClick={props.onClose} className="svg" src={Close} width={12} height={12}  />
        </div>
        <div className='modal-body'>
          <SVG 
            src={props.svg} 
            className={"svg " + props.place}
            style={{width: '100%', marginBottom: '10px'}}
            width={120} 
            height={120}  
          />

          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Modal