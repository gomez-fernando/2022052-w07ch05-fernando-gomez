import { configureStore } from "@reduxjs/toolkit";
import { iRobot, iStore } from "../interfaces/interfaces";

const preloadedState: iStore = {
    robots: [] as iRobot[]
}

export const store = configureStore({
    reducer: {robots: robotReducer},
    preloadedState
})