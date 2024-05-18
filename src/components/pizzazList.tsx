import React, { FC } from "react";
import Pizza from "../models/Pizza";
import PizzaItem from "./pizzaItem";

interface PizzasListProps {
    pizzasList: Pizza[];
    deletPizza: (id:number) => void;
    editPizza: (newPizza:Pizza) => void;
}

const PizzasList: FC<PizzasListProps> = ({pizzasList, deletPizza, editPizza}) => {
    return (
        <div className="container">
            {pizzasList.map((pizza) => {
                return (
                        <PizzaItem pizza={pizza} deletPizza={deletPizza} key={pizza.id} editPizza={editPizza} />
                )
            })}
        </div>
    )
}

export default PizzasList;