import { useAppSelector } from "../../store/hook";
import './ErrorMessage.css'



function ErrorMessage():JSX.Element | null {

  const error = useAppSelector((state)=> state.offersReducer.error); 

 
  return (error) ? <div className="error-message">{error}</div> : null
}

export default ErrorMessage
