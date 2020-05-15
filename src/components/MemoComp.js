import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
