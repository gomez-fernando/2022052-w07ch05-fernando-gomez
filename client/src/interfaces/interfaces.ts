export interface iRobot{
    id?: string;
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string
}

export interface iStore{
    robots: iRobot[];
}