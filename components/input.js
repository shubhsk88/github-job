import React from 'react'

const Input = (props) => {
    // const { classValue,idName,icon,children,placeholder,value } = props;
    return (
        <div className={`rounded-lg  px-2 shadow-lg w-3/5 bg-white space-x-2 focus:border  focus:border-white items-center flex ${'classValue'}`}>
            <label className="pl-2" htmlFor={'idName'}>{'icon'}</label>
            <input type="text" className="w-4/5 p-4 h-4/5 appearance-none focus:outline-none  focus:border-none" id={'idName'}  placeholder={'placeholder'} />
            <div className="py-2">

            {props.children}
            </div>
        </div>
    )
}

export default Input
