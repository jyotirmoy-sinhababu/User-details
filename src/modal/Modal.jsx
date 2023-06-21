import ReactDOM from 'react-dom';
import './modalStyle.css';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-cnt'>{children}</div>,
    document.getElementById('portal')
  );
};

export default Modal;
