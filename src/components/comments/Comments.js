import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = () => {
  const parms = useParams();
  const { quoteID } = parms;
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  let comments;
  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed') {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className='centered'>No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddedComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
