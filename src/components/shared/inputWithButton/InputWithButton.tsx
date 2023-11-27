import { ChangeEvent, FormEvent, useState } from 'react';
import useAuthStore from '../../../store/auth.store';
import { toast } from 'sonner'
import './inputwithbutton.css';

//API
import { postHomeMessage } from '../../../api/services.api';


function InputWithButton() {
  const language = useAuthStore(state => state.language);
  const [textInput, setTextInput] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  return (
    <form className='inputWithButtonMainContainer'  onSubmit={handleSubmit}>
      <input type="text" className='inputWithButton' minLength={5} maxLength={250} onChange={handleInputChange} value={textInput}/>
      <button className='buttonInputWithButton'>{language ? "Enviar" : "Send"}</button>
    </form>
  )
}

export default InputWithButton