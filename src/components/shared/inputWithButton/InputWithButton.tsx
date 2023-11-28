import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useAuthStore from '../../../store/auth.store';
import { toast } from 'sonner'
import ModalHomePage from '../../modal/ModalHomePage';
import './inputwithbutton.css';

//API
import { postHomeMessage } from '../../../api/services.api';

interface InputWithButtonProps {
  messageSent: () => void;
}


function InputWithButton({messageSent}: InputWithButtonProps) {
  const language = useAuthStore(state => state.language);
  const token = useAuthStore(state => state.token);
  const [openModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [waitingForToken, setWaitingForToken] = useState(false);


  const handleSubmitLogic = async () => {
    try {
      const apiResponse = await postHomeMessage(textInput);
      console.log(apiResponse);
      toast.success(language ? apiResponse.data.message.ES : apiResponse.data.message.EN);
      setTextInput("");
      messageSent()
    } catch (error:any) {
      toast.error(language ? error.response.data.message.ES : error.response.data.message.EN);
      console.log(error);
    }
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setOpenModal(true);
      setWaitingForToken(true);
      return;
    }

    handleSubmitLogic();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    setWaitingForToken(false); // Actualiza el estado cuando se cierra el modal
  };
  
  // Lógica para manejar la obtención del token
  useEffect(() => {
    if (waitingForToken && token) {
      setWaitingForToken(false);
      handleSubmitLogic();
    }
  }, [token, waitingForToken]);

  return (
    <form className='inputWithButtonMainContainer' onSubmit={handleSubmit}>
      <ModalHomePage
        openModal={openModal}
        onCloseModal={handleCloseModal}
      />
      <input type="text" className='inputWithButton' minLength={3} maxLength={250} onChange={handleInputChange} value={textInput} placeholder={language ? "Deja tu mensaje aqui" : "Leave your message here"} required/>
      <button className='buttonInputWithButton'>{language ? "Enviar" : "Send"}</button>
    </form>
  )
}

export default InputWithButton;