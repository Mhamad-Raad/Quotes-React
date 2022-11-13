import { useParams, Link, Route, Routes } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';

const QuotesDetails = () => {
  const params = useParams();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
  const { quoteID } = params;

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  const quote = loadedQuote;

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (!quote.text) {
    return <p>No quote found!</p>;
  }

  const JSXDemo = <div className="centered">
              <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
                Load Comments
              </Link>
            </div>

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />     
        <Routes>
          <Route path={`/`} element={JSXDemo} />
          <Route path={`/comments`} element={<Comments />} />
        </Routes>
    </div>
  );
}

export default QuotesDetails;