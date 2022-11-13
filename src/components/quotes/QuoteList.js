import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const query = new URLSearchParams(location.search);
  
  const isASCSorting = query.get('sort') === 'asc';
  
  const sortedQuotes = sortQuotes(props.quotes, isASCSorting);

  const clickHandler = () => {
    navigate('/Quotes?sort=' + (isASCSorting ? 'desc' : 'asc'));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={clickHandler}>Sort {isASCSorting ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
