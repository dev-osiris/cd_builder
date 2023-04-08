import './style.css'
import AboutYou from './components/AboutYou';
import Heading from './components/Heading';
import Education from './Education';

function App() {
  return (
    //flex direction is columnwise in container
    <div id='container'> 
      <h1>Cv builder</h1>
      
      <Heading title={"About you"} />

      <AboutYou />

      <Heading title={"Education"} />

      <Education />

    </div>
  );
}

export default App;
