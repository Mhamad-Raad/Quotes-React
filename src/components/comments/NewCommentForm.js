import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';


import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const params = useParams();
  const quoteID = params.quoteID;
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, onAddedComment, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (commentTextRef.current.value === '') {
      alert('The Area cannot be empty');
      return;
    }
    sendRequest({
      commentData: { text: commentTextRef.current.value },
      quoteId: quoteID,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
          )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
