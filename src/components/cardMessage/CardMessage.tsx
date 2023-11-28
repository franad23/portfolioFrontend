import './cardmessage.css';

interface CardMessageProps {
  name: string;
  date: string;
  message: string;
}

function CardMessage({date, message, name}:CardMessageProps) {
  return (
    <div className='cardMessageMainContainer'>
      <p>{message}</p>
      <div className='dateAndNameMessage'>
        <span className='spanInfoCard'>{name}</span>
        <span className='spanInfoCard'>{date.split('T')[0]}</span>
      </div>
    </div>
  )
}

export default CardMessage