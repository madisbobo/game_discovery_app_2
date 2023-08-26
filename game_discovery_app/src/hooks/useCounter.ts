import { useState } from "react"

type CounterResults = {
    count: number;
    increment: (addedValue: number) => void;
}

const useCounter = (initalValue: number): CounterResults => {
    const [count, setCount] = useState(initalValue);

    const increment = (addedValue: number) => {
        setCount(count + addedValue);
    }
    return{count, increment};
};

export default useCounter;