import useAuthStore from '../../../store/auth.store';
import './leaveamessage.css';

//Components
import InputWithButton from '../../shared/inputWithButton/InputWithButton';


function LeaveAMessage() {
  const language = useAuthStore(state => state.language);
  return (
    <div className='leaveAMessageMainContainer'>
      <InputWithButton/>
      <div className='messagesContainer'>
        <p>Aun no hay mensajes</p>
      </div>
    </div>
  )
}

export default LeaveAMessage