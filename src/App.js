import './App.css';
import SliderData from './components/SliderData';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <h3>Griffin Alcorn</h3>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
