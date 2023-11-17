import React from 'react'
import Leftbar from "./Leftbar/Leftbar"

const Layout = ({ children }) => {
    return (
        <div className="flex pt-20 min-h-screen h-max">
            <Leftbar />
            <div className="w-3/4 p-4">
                {children}
            </div>
        </div>
    )
}

export default Layout