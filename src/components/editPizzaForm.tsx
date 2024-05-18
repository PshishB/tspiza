import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import './styles.css'
import Pizza from "../models/Pizza";
import { Alert, Space } from 'antd';

interface EditPizzaFormProps {
    initState: Pizza;
    editPizza: (newPizza:Pizza) => void;
    flipEditPizza: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ editPizza, initState, flipEditPizza}) => {
    const [thisPizza, setThisPizza] = useState<Pizza>(initState);
    const [error, setError] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setThisPizza({
            ...thisPizza,
            [name]: value,
        });
        setError(false);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img} = thisPizza;
        if (title && price && img && !isNaN(Number(price))) {
            editPizza({
                ...thisPizza,
                price: Number(price),
                title,
            });
            flipEditPizza();
        } else {
            setError(true);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
             name="title"
             type="text"
             placeholder="Название"
             onChange={handleChange}
             value={thisPizza.title}
            />
            <input 
             name="price"
             type="text"
             placeholder="Стоимость"
             onChange={handleChange}
             value={thisPizza.price}
            />
            <input 
             name="img"
             type="text"
             placeholder="Изображение"
             onChange={handleChange}
             value={thisPizza.img}
            />
            <button type="submit">
                Изменить пиццу
            </button>
            {error? (
            <Space direction="vertical" style={{ width: '100%' }}> 
                <Alert message="Вы не ввели значение, либо ввели его не верно" type="error" />
            </Space>) : null}
        </form>
    );
}

export default EditPizzaForm;