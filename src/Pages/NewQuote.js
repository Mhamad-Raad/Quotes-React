import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import useHtpp from '../hooks/use-http';
import { addQuote } from '../lib/api'; 




const NewQuotes = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHtpp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      navigate('/Quotes');
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    navigate('/quotes');
  };
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
}

export default NewQuotes;