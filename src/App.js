import Navbar from './navbar'
import Hero from './Hero'

function App() {
  return (
    <div className="App">
      <div className="nav_bar">
        <Navbar />
      </div>   
      <section className="hero-container">
        
        <Hero />
      </section>   
    </div>
  );
}

export default App;
