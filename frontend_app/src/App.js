import logo from './logo.svg';
import './App.scss';
import {About, Footer, Header, Skills, Testimonial, Work} from "./containers"
import {Navbar} from "./components"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
      {/* <h2>Coming Soon ...</h2> */}
    </div>
  );
}

export default App;
