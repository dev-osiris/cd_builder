import './style.css'
import InputText from './components/InputText';
import InputNum from './components/InputNum';

function App() {
  return (
    //flex direction is columnwise in container
    <div id='container'>  
      <div className='mainHeading'>
        <h1>Cv builder</h1>
        <hr />
        <h3>About you</h3>
      </div>

      <div className='two-ip-field-single-row'>
        <InputText label={"First name"} />
        <InputText label={"Last name"} />
      </div>

      <div className='two-ip-field-single-row'>
        <InputNum label={"Age"} />
        <InputNum label={"Mobile"} />
      </div>

      <div>
        <hr />
      </div>

      <h3 style={{textAlign: "center"}}>Education details</h3>

    </div>
  );
}

export default App;
