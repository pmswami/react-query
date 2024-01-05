// import { useQuery } from "react-query"
// // @tanstack/react-query

// const fetchPlanets = async () => {
//     const res = await fetch("http://swapi.dev/api/planets")
//     console.log(res.json())
//     return res.json()
// }

// const Planets = () => {
//     const [data, status] = useQuery("planets", fetchPlanets)
//     console.log(data)

//     return (  
//         <div>
//             <h2>Planets</h2>
//         </div>
//     );
// }
 
// export default Planets;


import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Planet from './Planet';

const queryClient = new QueryClient();

const fetchPlanets = async () => {
    const result = await fetch('https://swapi.dev/api/planets')
    return result.json()
}

const Planets = () => {
    const { data, status } = useQuery('Planets', fetchPlanets)
    console.log("data", data, "status", status)
    return (
        <div>
            <h2>Planets</h2>
            {/* <p>{status}</p> */}
            {status==="error" && (
                <div>Error in fetching the data</div>
            )}
            {status==="loading" && (
                <div>Loading the data</div>
            )}
            {status==="success" && (
                // <div>Got you!</div>
                <div>
                    {data.results.map((planet)=>
                        <Planet planet={planet} key={planet.name}/>
                    )}
                </div>
            )}
        </div>
    );
}


export default function Wraped(){
return(<QueryClientProvider client={queryClient}>
        <Planets/>
    </QueryClientProvider>
);
    
}