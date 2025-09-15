import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className={'inline-flex gap-2 items-center mb-3'}>
            <p>
                {text1} <span className={'font-medium'}>{text2}</span>
            </p>
            <p className={'w-10 h-[2px] bg-[#9f0012]'}></p>
        </div>
    )
}
export default Title
