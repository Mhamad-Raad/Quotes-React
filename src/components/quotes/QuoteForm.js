import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const clickHandler = () => {
    setIsEntering(false);
  }

  const focusHandler = () => {
    setIsEntering(true);
  }


  return (
    <>
      {/* <Prompt
        when={isEntering}
        message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'}
      /> */}
   <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input onFocus={focusHandler} type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea onFocus={focusHandler} id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={clickHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
      </>
  );
};

export default QuoteForm;
