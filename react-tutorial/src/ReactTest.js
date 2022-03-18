import React, {Component} from 'react';


function ReactTest({color, name, isSpecial}) {
    return (
        <div>
            <span style={{color}}>
                {isSpecial && "*" }
                안녕하세요우.{name}
            </span>

        </div>
    )
}

ReactTest.defaultProps = {
    name : '이름없음.'
}

export default ReactTest;



