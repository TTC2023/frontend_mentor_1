import './App.css';
import Comment from '../src/Comment/Comment'
import CurrentUser from './CurrentUser/CurrentUser';
import { useState, useEffect } from 'react'
import data from './data.json'

function App() {

  const [comments, setComments] = useState([])
  const [replyBox, setReplyBox] = useState(false)

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return (
    <div className="App">
      <div className='container'>
        {replyBox ? <CurrentUser/> : null}
        {comments.map(comment => (
          <>
            <Comment key={comment.id} comment={comment} setReplyBox={setReplyBox} replyBox={replyBox} />
          </>
        ))}
      </div>
      <CurrentUser />
    </div>
  );
}

export default App;
