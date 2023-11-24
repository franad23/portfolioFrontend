import useAuthStore from '../../../store/auth.store';
import './inputwithbutton.css';



function InputWithButton() {
  const language = useAuthStore(state => state.language);
  return (
    <div className='inputWithButtonMainContainer'>
      <input type="text" className='inputWithButton' minLength={5} maxLength={250}/>
      <button className='buttonInputWithButton'>Enviar</button>
    </div>
  )
}

export default InputWithButton