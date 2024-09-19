import logo from './logo.svg';
import './App.css';
import Form from './form.js';
import Navbar from './navbar.js';
import Myprofile from './newfunction.js';
import Hello from './state.js';
import Newapp from './new.js';
import Mainapp from './mainapp.js';
import Allapp from './real.js';
import About from './about.js';
import Myapp from './nikhil.js';
import Dark from './darkmode.js';

function App() {
 
  return (
    <div>
     <Dark />
    {/* <About/> */}
      <Mainapp />
    {/* <Myapp/>*/}
    </div>
  );
}
// Myprofile.defaultProps = {
//   Title : 'kanchan',
//   age : 25,
//   coder : "php",
// }





export default App;
