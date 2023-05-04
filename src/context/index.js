import { createContext, useState } from 'react';

export const ContextToTable = createContext({});

 export const ToTableProvider = ({ children }) => {
    const [toTable, setToTable] = useState(true);
    const handleChange = () => {
        setToTable(!toTable);
    };

    return (
        <ContextToTable.Provider
            value={{
                toTable,
                handleChange,
            }}
        >
            {children}
        </ContextToTable.Provider>
    );
};

