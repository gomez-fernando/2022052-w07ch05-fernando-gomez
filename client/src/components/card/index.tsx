import { Link } from "react-router-dom";
import { iRobot } from "../../interfaces/interfaces";


export function Card({robot}: {robot: iRobot}) {
    return (
        <>
            <Link to={`details/${robot._id}`} >
                {robot.name}
            </Link>
        </>
    )
}