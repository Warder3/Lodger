import Navbar from './Navbar'
import Hero from './Hero'

function App() {
  return (
    <div className="App">
      <div className="nav_bar">
        <Navbar />
      </div>   
      <section>
        <Hero />
      </section>   
    </div>
  );
}

export default App;
