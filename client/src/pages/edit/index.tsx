import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { iStore } from "../../interfaces/interfaces";


export default function editPage(){
    const { id } = useParams();


    const robots = useSelector((store: iStore) => store.robots)
    const robot = robots.find(item => item._id === id);
    return (
        <div className="edit-page">
            {robot ? (
                <>
                    <h1>{robot.name}</h1>
                    <p>Editar: </p>
                    <img src={robot.image} alt={robot.name} />

                    <div>
                        <p>Velocidad: {robot.speed}</p>
                        <p>Resistencia: {robot.endurance}</p>
                        <p>Fecha de creación: {robot.creationDate}</p>
                    </div>
                </>
            ) : (
                <h1>No se ha encontrado este robot..</h1>
            )
            }
        </div>
    )
}