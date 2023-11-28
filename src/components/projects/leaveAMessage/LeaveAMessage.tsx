import useAuthStore from '../../../store/auth.store';
import { useEffect, useState } from 'react';
import './leaveamessage.css';

//Components
import InputWithButton from '../../shared/inputWithButton/InputWithButton';
import CardMessage from '../../cardMessage/CardMessage';

//API
import { getFirstTenMessages } from '../../../api/services.api';

//Interfaces
import { Message } from '../../../interfaces/auth.interface';

function LeaveAMessage() {

  const language = useAuthStore(state => state.language);
  const [firstTenMessages, setFirstTenMessages] = useState<Message[]>([])

  const getMessages = async () => {
    const apiResponse = await getFirstTenMessages();
    setFirstTenMessages(apiResponse.data)
  }

  useEffect(() => {
    getMessages();
  }, [])

  const handleMessageSent = () => {
    getMessages();
  }

  return (
    <div className='leaveAMessageMainContainer'>
      <InputWithButton
        messageSent={handleMessageSent}
      />
      <div className='messagesContainer'>
        {firstTenMessages.map((message) => (
          <CardMessage
            key={message.id}
            date={message.created_at}
            message={message.message}
            name={message.username}
          />
        ))}
      </div>
    </div>
  )
}

export default LeaveAMessage