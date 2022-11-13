import { useNavigate  } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';



const NewQuotes = () => {
  const navigate = useNavigate();

  const addQuoteHandler = () => {
  console.log('addQuoteHandler');
  navigate('/quotes');
}
  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
}

export default NewQuotes;