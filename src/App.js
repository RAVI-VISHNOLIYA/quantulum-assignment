import './App.css';
import Investment from './components/Investment';
import Maskcopy from './components/Maskcopy';
import Rectangle from './components/Rectangle';
import RectangleBelow from './components/RectangleBelow';

function App() {
  return (
    <div className="App">
      <Maskcopy />
      <Rectangle />
      <RectangleBelow />
      <Investment />
    </div>
  );
}

export default App;