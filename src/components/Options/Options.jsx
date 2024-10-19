import React from 'react'
import css from './Options.module.css'
import clsx from 'clsx'

const Options = ({ updateFn, total }) => {
    


    return (
        <div className={css.options}>
            <button onClick={() => updateFn('good')}>Good</button>
            <button onClick={() => updateFn('neutral')}>Neutral</button>
            <button onClick={() => updateFn('bad')}>Bad</button>
            {total > 0 && <button onClick={() => updateFn('reset')}>Reset</button>}
        </div>
  )
}

export default Options