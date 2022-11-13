import { useParams, Link, Route, Routes } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuotesDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => params.quoteID === quote.id);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
     
        <Routes>
        <Route path={`/quotes/${params.quoteID}/`} element={
           <div className="centered">
            <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
              Load Comments
            </Link>
          </div>      
          
          } />
        
          <Route path={`/quotes/${params.quoteID}/comments`} element={<Comments />} />
        </Routes>
    </div>
  );
}

export default QuotesDetails;