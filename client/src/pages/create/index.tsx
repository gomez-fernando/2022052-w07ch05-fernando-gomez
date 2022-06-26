import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function Create(){
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        speed: 0,
        endurance: 0,
        creationDate: '',
    });

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        // const value =
        //     element.type === "checkbox" ? element.checked : element.value;
        const value = element.value;
        setFormData({...formData, [element.name]: value})
        console.log(formData);
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log('Guardando:  ', formData);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre del robot"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Guardar</button>

        </form>
    </>
    )
}