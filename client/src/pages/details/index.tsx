import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { iStore } from "../../interfaces/interfaces";


export default function DetailsPage(){
    const { id } = useParams();
    const navigate = useNavigate();

    // const goBack = () => navigate(-1);
    const edit = () => navigate(`/edit/${id}`);
    

    const robots = useSelector((store: iStore) => store.robots)
    const robot = robots.find(item => item._id === id);
    return (
        <div className="details-page">
            {robot ? (
                <>
                    <h1>{robot.name}</h1>
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
            {/* <button onClick={goBack}>Volver</button> */}
            <button onClick={edit}>Editar</button>
        </div>
    )
}