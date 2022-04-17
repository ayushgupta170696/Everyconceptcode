import React from 'react'

function MemoComp({name}) {
console.log('Renderingm Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
