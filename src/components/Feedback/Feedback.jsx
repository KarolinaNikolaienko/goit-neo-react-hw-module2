import React from 'react'
import css from './Feedback.module.css'

const Feedback = ({ state, total, percent }) => {
    return (
        <div>
            <p className={css.state}>Good: {state.good}</p>
            <p className={css.state}>Neutral: {state.neutral}</p>
            <p className={css.state}>Bad: {state.bad}</p>
            <p className={css.state}>Total: {total}</p>
            <p className={css.state}>Positive: {percent}%</p>
        </div>
    )
}

export default Feedback