// // // import React from 'react';
// // import React, { useEffect, useState } from 'react';
// // import './Home.css';
// // import allData from '../db.json'; 
// // import { useDataContext } from '../context/Context';
// // function Home() {
// //   const {data} = useDataContext();

// //   return (
// //     <div className="Home">
// //       {data.length > 0 ? (
// //         <div className="main-container">
// //               {data.map(item => (
// //             <div key={item.id} className="item-container">
// //               <img src={item.image} alt={item.description} />
// //               <h2>{item.title}</h2>
// //               <p>{item.price}</p>
// //               <p>{item.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p>No data available</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default Home;

// import React from 'react';
// import './Home.css';
// import { useDataContext } from '../context/Context';

// function Home() {
//   const { data } = useDataContext(); // Access the filtered data here

//   return (
//     <div className="Home">
//       {data.length > 0 ? (
//         <div className="main-container">
//           {data.map(item => (
//             <div key={item.id} className="item-container">
//               <img src={item.image} alt={item.description} />
//               <h2>{item.title}</h2>
//               <p>{item.price}</p>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDataContext } from '../context/Context';

function Home() {
    const { data } = useDataContext(); // Access the filtered data here
    const [query,setQuery] =useState(data);
   

    useEffect(()=>{
      console.log(data);
      setQuery(data);

    },[data.length]);


    

    return (
        <div className="Home">
            {query.length > 0 ? (
                <div className="main-container">
                    {query.map(item => (
                        <div key={item.id} className="item-container">
                            <img src={item.image} alt={item.description} />
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Home;
