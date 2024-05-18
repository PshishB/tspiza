import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import './styles.css'
import Pizza from "../models/Pizza";
import { Alert, Space } from 'antd';

interface AddPizzaFormProps {
    addPizza: (newPizza:Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string,}>(initState);
    const [error, setError] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value,
        });
        setError(false);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img} = newPizza;
        if (title && price && img && !isNaN(Number(price))) {
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now(),
            })
        } else {
            setError(true);
        }
        setNewPizza(initState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
             name="title"
             type="text"
             placeholder="Название"
             onChange={handleChange}
             value={newPizza.title}
            />
            <input 
             name="price"
             type="text"
             placeholder="Стоимость"
             onChange={handleChange}
             value={newPizza.price}
            />
            <input 
             name="img"
             type="text"
             placeholder="Изображение"
             onChange={handleChange}
             value={newPizza.img}
            />
            <button type="submit">
                + Добавить в меню
            </button>
            {error? (
            <Space direction="vertical" style={{ width: '100%' }}> 
                <Alert message="Вы не ввели значение, либо ввели его не верно" type="error" />
            </Space>) : null}
        </form>
    );
}

export default AddPizzaForm;