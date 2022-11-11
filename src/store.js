import { configureStore } from '@reduxjs/toolkit';

import { TODO_REDUCERS } from "./data-access/Todo";
import { COUNTER_REDUCERS } from "./data-access/Counter";

export default configureStore({
    reducer: {
        toDo: TODO_REDUCERS,
        counter: COUNTER_REDUCERS
    },
})
