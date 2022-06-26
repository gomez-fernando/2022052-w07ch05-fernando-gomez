import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { iRobot } from "../../interfaces/interfaces";
import { ApiRobot } from "../../services/robot/api";

export default function Create(){
    const dispatch = useDispatch();
    const apiRobot = new ApiRobot()

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
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        // console.log('Guardando:  ', formData);
        let newRobot: iRobot = {...formData};
        newRobot = await apiRobot.setOne(newRobot)
        console.log(newRobot);

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