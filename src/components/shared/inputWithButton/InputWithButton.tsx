import { ChangeEvent, FormEvent, useState } from 'react';
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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!token) {
      setOpenModal(true);
    }
    try {
      const apiResponse = await postHomeMessage(textInput);
      console.log(apiResponse);
      toast.success( language ? apiResponse.data.message.ES : apiResponse.data.message.EN )
    } catch (error:any) {
      console.log(error);
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <form className='inputWithButtonMainContainer'  onSubmit={handleSubmit}>
      <ModalHomePage
        openModal= {openModal}
        onCloseModal={handleCloseModal}
      />
      <input type="text" className='inputWithButton' minLength={5} maxLength={250} onChange={handleInputChange} value={textInput}/>
      <button className='buttonInputWithButton'>{language ? "Enviar" : "Send"}</button>
    </form>
  )
}

export default InputWithButton