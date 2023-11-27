import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import useAuthStore from '../../store/auth.store';
import './modalhomepage.css';

interface ModalHomePageProps {
  openModal: boolean;
  onCloseModal: () => void;
}

const ModalHomePage = ({openModal, onCloseModal}: ModalHomePageProps) => {
  const [open, setOpen] = useState(openModal);

  useEffect(() => {
    setOpen(openModal)
  },[openModal])

  const language = useAuthStore((state) => state.language);

  const handleClickModal = () => {
    setOpen(false);
    onCloseModal();
  }


  return (
    <div className='modalHomePageMainContainer'>
      <Modal
        open={open}
        title={language ? "Para continuar, necesitamos tu nombre o pseudonimo:" : "To continue, we need your name or pseudonym:"}
        footer={[
          <button className='buttonModal' onClick={handleClickModal}>{language ? "Enviar" : "Send"}</button>
        ]}
      >
        <input type="text" className='inputModal'/>
      </Modal>
    </div>
  );
};

export default ModalHomePage;
