import React from 'react';
import ReactDOM from 'react-dom';

const STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(34, 34, 34)',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '90%',
    width: '90%',
    padding: '20px',
    color: 'white'
};

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
};

const Overlay = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} onClick={onClose} />
            <div style={STYLE}>
                <button onClick={onClose} style={{ float: 'right', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>X</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Overlay;
