import React, { useState } from 'react';
import Modal from 'react-modal';
import Forms from './form';

Modal.setAppElement('#root')

const Modals = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const opened = () =>{
      setModalOpen(true)
  }

  const closed = () =>{
    setModalOpen(false)
}
  return (
      <div>
        <button onClick={opened}>Modal Open</button>
          <Modal 
            isOpen={modalOpen} 
            onRequestClose={closed}
            style={
                {
                    overlay:{
                        backgroundColor: 'grey'
                    },
                    content: {
                        color: 'orange'
                    }
                }
            }
            >
              <h2>title</h2>
              <p>body</p>
              <div>
                  <Forms />
              </div>
              <div>
                  <button onClick={closed}>close</button>
              </div>
          </Modal>
      </div>
  )
}

export default Modals;
