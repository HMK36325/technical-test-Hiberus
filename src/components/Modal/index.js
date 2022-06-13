import React from "react";
import ReactDOM from "react-dom";

import './modal.css'

function Modal({ children, onClose, info }) {
    return <div className='my-modal'>
        <div className='my-modal-content'>
            <button className="btn ps-3 pt-3" onClick={onClose}>❌</button>
            {children}
            <h2 className="info-modal">{info}</h2>
        </div>
    </div>
}

export default function ModalPortal({ children, onClose, info }) {
    return ReactDOM.createPortal(<Modal onClose={onClose} info={info}>
        {children}
    </Modal>,
        document.getElementById('modal-root')
    )
}