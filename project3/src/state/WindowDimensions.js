import React, {useContext, useState, useEffect} from "react";

const WindowDimensions = React.createContext({
  width: 0,
  height: 0
});

export const WindowDimensionsProvider = ({children}) => {

    const [dimensions, setDimensions] = useState({
        width: (window.innerWidth) || 0,
        height: (window.innerHeight) || 0
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
       
        <WindowDimensions.Provider value={dimensions}>
            {children}
        </WindowDimensions.Provider>
    );
}

export const useWindowDimensions = () => useContext(WindowDimensions); 