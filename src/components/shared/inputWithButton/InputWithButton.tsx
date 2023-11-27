import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useAuthStore from '../../../store/auth.store';
import { toast } from 'sonner'
import ModalHomePage from '../../modal/ModalHomePage';
import './inputwithbutton.css';

//API
import { postHomeMessage } from '../../../api/services.api';


function InputWithButton() {
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
    } catch (error:any) {
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
      <input type="text" className='inputWithButton' minLength={3} maxLength={250} onChange={handleInputChange} value={textInput} placeholder='Deja tu mensaje aqui' required/>
      <button className='buttonInputWithButton'>{language ? "Enviar" : "Send"}</button>
    </form>
  )
}

export default InputWithButton;