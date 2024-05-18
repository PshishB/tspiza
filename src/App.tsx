import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/addPizzaForm';
import Pizza from './models/Pizza';
import PizzasList from './components/pizzazList';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }
  const deletPizza = (id:number) => {
    setPizzasList(pizzasList.filter((element) => element.id !== id));
  }
  const editPizza = (newPizza:Pizza) => {
    setPizzasList(pizzasList.map(element => element.id === newPizza.id ? newPizza : element));
  }
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">
          Пицерия
        </span>
        <AddPizzaForm addPizza={addPizza} />
        <PizzasList pizzasList={pizzasList} deletPizza={deletPizza} editPizza={editPizza} />
      </div>
    </div>
  );
}

export default App;
