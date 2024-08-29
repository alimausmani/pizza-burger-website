// import React, { createContext, useState, useContext, useEffect } from 'react';
// import allData from '../db.json';

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//  const [data, setData] = useState([...allData.All_Data.burgers, ...allData.All_Data.pizzas]);
//  const [searchQuery, setSearchQuery] = useState('');

//  useEffect(()=>{
//     const filteredData = data.filter(item =>  
//         item.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
//         );
//         setData(filteredData);
//         console.log(filteredData);
        
//         console.log(searchQuery);
        
//  },[searchQuery])



//  return (
//  <DataContext.Provider value={{ data, setSearchQuery }}>
//  {children}
//  </DataContext.Provider>
//  );
// };

// export const useDataContext = () => {
//  return useContext(DataContext);
// };



import React, { createContext, useState, useContext, useEffect } from 'react';
import allData from '../db.json';

// Create the context
const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([...allData.All_Data.burgers, ...allData.All_Data.pizzas]); // Original data
    const [filteredData, setFilteredData] = useState(data); // Filtered data
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filtered = data.filter(item =>
            item.title?.toLowerCase().includes(searchQuery?.toLowerCase())
        );
        setFilteredData(filtered); // Update the filtered data
        console.log(filtered);
        console.log(searchQuery);
    }, [searchQuery, data]);

    return (
        <DataContext.Provider value={{ data: filteredData, setSearchQuery }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the DataContext
export const useDataContext = () => {
    return useContext(DataContext);
};
