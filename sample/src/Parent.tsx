import React from 'react'
import Child from './Child'

// ���͂����܂�JSX�̏�����
// ���ۂɂ́ATypeScript�悤�ɏ�������
function Parent () {
    return (
        <div>
            Parent
            <Child />
        </div>
    )
}

export default Parent