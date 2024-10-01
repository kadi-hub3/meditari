import { createContext, Dispatch, SetStateAction } from "react";

interface TimerContextProps {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextProps>({
    duration: 10,
    setDuration: () => {},
});
