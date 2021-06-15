import React from "react";


// destructure props into currentPhoto
const Modal = ({ onClose, currentPhoto }) => {
  // destructure currentPhoto properties into constants to assign values
  const { name, category, description, index } = currentPhoto;

  return (
    // JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={`./img/large/${category}/${index}.jpg`}
          alt="current category"
        />
        <p>{description}</p>
        <button onClick={onClose} type="button">Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
