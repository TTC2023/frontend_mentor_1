import './App.css';
import Comment from '../src/Comment/Comment'
import CurrentUser from './CurrentUser/CurrentUser';
import { useState, useEffect } from 'react'
import data from './data.json'

function App() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return (
    <div className="App">
      <div className='container'>
        {comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
      </div>
      <CurrentUser />
    </div>
  );
}

export default App;
