import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const data = [
  {
    name: "Focaccia",
    ingredients: "Bread wit italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldout: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldout: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarello, spinach, and rocotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpeg",
    soldout: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarello, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldout: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarello, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldout: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarello, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/proscuitto.jpg",
    soldout: false,
  },
]

function App() {
  return <div className='container'>
    <Head/>
    <Menu/>
    <Footer/>
  </div>
}

function Head() {
  return <header className='header'>
    <h1 > Pizza Store </h1>
  </header>
}
function Menu() {
  const datalength = data.length 
  return <main className='menu'>
    <h2> check out amazing pizzas </h2>
    {
      datalength > 0 && (
        <ul className='pizzas'>
          {data.map(pizza => 
            <Pizza 
              pizzaData={pizza}
              key={pizza.photoName}
            />
          )}  
      </ul>)
    }
  </main>
}
function Footer() {
  const currentHour = new Date().getHours();
  const open = 10;
  const close = 20;
  const isOpen = currentHour >= open && currentHour <= close;
  // <p> { new Date().toLocaleTimeString() } </p>
  
  return <footer className='footer'>
    { isOpen 
      ? <div className='order'>
          <p> {`Now Open -- Closing in ${close - currentHour} hrs`} </p>
          <button className='btn'> Order Now </button>
        </div>
      : <p> { `Currently Closed -- Opening in ${(24 - currentHour) + 10} hrs`}</p>}
  </footer>
}
function Pizza(props) {
  return <li className='pizza'>
    <img src={props.pizzaData.photoName} alt={props.pizzaData.name}></img>
    <div>
      <h3> {props.pizzaData.name} </h3>
      <p> {props.pizzaData.ingredients} </p>
      <span> {props.pizzaData.price} </span>
    </div>
  </li>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
</React.StrictMode>
)