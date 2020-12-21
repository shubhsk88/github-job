import React from 'react'

const Input = (props) => {
    const { classValue,idName,icon,children,placeholder,value } = props;
    return (
        <div className={`rounded-lg shadow-lg p-2 ${classValue}`}>
            <label htmlFor={idName}>{icon}</label>
            <input type="text"  id={idName} value={value} placeholder={placeholder} />
            <div className="px-4 py-2">

            {children}
            </div>
        </div>
    )
}

export default Input
