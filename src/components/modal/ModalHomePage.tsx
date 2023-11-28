import { FormEvent, useEffect, useState } from 'react';
import { Modal } from 'antd';
import useAuthStore from '../../store/auth.store';
import './modalhomepage.css';

//API
import { createAccessToken } from '../../api/services.api';

interface ModalHomePageProps {
  openModal: boolean;
  onCloseModal: () => void;
}

const ModalHomePage = ({openModal, onCloseModal}: ModalHomePageProps) => {
  const [open, setOpen] = useState(openModal);
  const [username, setUsername] = useState("");
  const language = useAuthStore((state) => state.language);
  const setToken = useAuthStore((state) => state.setToken);
  const setName = useAuthStore((state) => state.setName);

  useEffect(() => {
    setOpen(openModal)
  },[openModal])


  const handleSubmitModal = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resApi = await createAccessToken(username);
      setToken(resApi.data.token);
      setName(username);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='modalHomePageMainContainer'>
      <Modal
        open={open}
        title={language ? "Para continuar, necesitamos tu nombre o pseudonimo:" : "To continue, we need your name or pseudonym:"}
        footer={null}
      >
        <form onSubmit={handleSubmitModal} className='formModalContainer'>
          <input type="text" className='inputModal' minLength={3} maxLength={250} onChange={(e) => setUsername(e.target.value)} required/>
            <button className='buttonModal'>{language ? "Enviar" : "Send" }</button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalHomePage;
