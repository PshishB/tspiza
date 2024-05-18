import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaForm from "./editPizzaForm";

interface PizzaItemProps {
    pizza: Pizza;
    deletPizza: (id: number) => void;
    editPizza: (newPizza:Pizza) => void;
}

const PizzaItem: FC <PizzaItemProps> = ({pizza, deletPizza, editPizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const flipEditPizza = () => {
        setEdit(false);
    }
    return (
        <div className="pizza">
            <img src={pizza.img} alt={pizza.title}></img>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={() => setEdit(true)}/>
                <AiFillDelete onClick={() => deletPizza(pizza.id)} />
            </div>
            {edit ? <EditPizzaForm editPizza={editPizza} initState={pizza} flipEditPizza={flipEditPizza} /> : null }
        </div>
    );
}

export  default PizzaItem;