import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div className="flex-grow">
           {children}
        </div>
    )
}

export default Wrapper
