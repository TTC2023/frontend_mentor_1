import './App.css';
import Comment from '../src/Comment/Comment'
import CurrentUser from './CurrentUser/CurrentUser';
import {useState, useEffect} from 'react'
import data from './data.json'

function App() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(data.comments)
  }, [])

  return (
    <div className="App">
      {comments.map(comment => 
        <Comment key={comment.id} comment={comment} />
      )}
      <CurrentUser />
    </div>
  );
}

export default App;
