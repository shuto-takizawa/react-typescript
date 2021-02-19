import React from 'react'
import Child from './Child'

// 下はあくまでJSXの書き方
// 実際には、TypeScriptように書き直す
function Parent () {
    return (
        <div>
            Parent
            <Child />
        </div>
    )
}

export default Parent