import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import bowserImg from '../characterpics/bowser.png';
import waldoImg from '../characterpics/waldo.png';
import zoidbergImg from '../characterpics/zoidberg.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ChooseCharacterModal(props) {
  let subtitle;
  // const isModalOpen = props.isModalOpen;
  let isModalOpen = props.isModalOpen;
  console.log(isModalOpen);
  // const [modalIsOpen, setIsOpen] = React.useState(props.isModalOpen);

  function openModal() {
    // setIsOpen(true);
    isModalOpen = true;
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    // setIsOpen(false);
    isModalOpen = false;
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Choose character</h2>
        <img src={bowserImg}></img>
        <img src={zoidbergImg}></img>
        <img src={waldoImg}></img>

        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);
