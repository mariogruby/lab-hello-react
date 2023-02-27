import './App.css';
// import logo from './logo.svg';
import ironhack from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"
import img1 from "./images/icon1.png"
import img2 from "./images/icon2.png"
import img3 from "./images/icon3.png"
import img4 from "./images/icon4.png"



function App() {
  return (
    
    <div className="App">
      <div className="color-background">
        <div className="nav-app">
        <img src={ironhack} alt="logo" />
        <img src={menu} alt="menu" />
      </div>
      <div className="header-app">
          <h1>
            Say hello to
            <br />
            ReactJS
          </h1>
          <p>
            You will learn how to use
            <br />
            the most popular frontend library,
            <br />
            and become a super Ninja developer
          </p>

          <button className="btn-app">Awesome!</button>
        </div>
      </div>
      <div className="body-app">
        <div className="card">
          <img src={img1} alt="img1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="card">
          <img src={img2} alt="img2" />
          <h3>Componets</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="card">
          <img src={img3} alt="img3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components`s</p>
        </div>
        <div className="card">
          <img src={img4} alt="img4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
    

    
  );
}

export default App;
