import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import classes from './Comments.module.css'
import NewCommentForm from './NewCommentForm'
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentList from './CommentsList'
import useHttp from '../../hooks/use-http'
import { getAllComments } from '../../lib/api'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams()

  const { quoteId } = params

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }

  // 用useCallback包起來，可以確保addedCommentHandler不會一直被重新建立，因為在NewCommentForm.js的useEffect依賴性陣列中有使用，如果不用useCallback包起來的話，會在父元件重新渲染的時候就重新執行一次子元件的useEffect內容，會造成infinite loop
  const addedCommentHandler = useCallback (() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  let comments
  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }
  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet.</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  )
}

export default Comments
