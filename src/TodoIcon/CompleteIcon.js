import React from "react";
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
        type="check"
        color={completed? 'cadetblue' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };