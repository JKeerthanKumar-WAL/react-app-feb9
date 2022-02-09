import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import ForumTopic from './ForumTopic';
import Ecommerce from './Ecommerce';
function App() {
  return (
    <div className="App">
     <Comment></Comment>
     <ForumTopic
     topic = "What is React ?">
     </ForumTopic>
     <Ecommerce></Ecommerce>
    </div>
  );
}
export default App;
