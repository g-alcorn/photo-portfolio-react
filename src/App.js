import './App.css';
import SliderData from './components/SliderData';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h3>Griffin Alcorn</h3>
      <Navbar/>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
