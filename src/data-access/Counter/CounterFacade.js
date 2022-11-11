import { useDispatch, useSelector } from 'react-redux';

import { COUNTER_ACTIONS } from "./CounterStore";

export const useCounterFacade = () => {
    const dispatch = useDispatch();
    const { value, status } = useSelector(({ counter }) => counter);

    const increment = (payload) => dispatch(COUNTER_ACTIONS.increment(payload))

    const decrement = (id) => dispatch(COUNTER_ACTIONS.decrement(id));

    const incrementByAmount = (payload) => dispatch(COUNTER_ACTIONS.incrementByAmount(payload));

    const incrementAsync = (payload) => dispatch(COUNTER_ACTIONS.incrementAsync(payload));

    const incrementIfOdd = (amount) => {
        const currentValue = value;
        if (currentValue % 2 === 1) {
            dispatch(COUNTER_ACTIONS.incrementByAmount(amount));
        }
    };

    const incrementIfEven = (amount) => {
        const currentValue = value;
        if (currentValue % 2 === 0) {
            dispatch(COUNTER_ACTIONS.incrementByAmount(amount));
        }
    };

    return {
        value,
        status,

        increment,
        decrement,
        incrementByAmount,
        incrementIfOdd,
        incrementIfEven,
        incrementAsync
    }
}
