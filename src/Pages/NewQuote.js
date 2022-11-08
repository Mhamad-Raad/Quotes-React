import QuoteForm from '../components/quotes/QuoteForm';

const addQuoteHandler = () => {
  console.log('addQuoteHandler');
}

const NewQuotes = () => {
  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
}

export default NewQuotes;