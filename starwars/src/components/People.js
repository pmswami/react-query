import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Person from './Person';
const queryClient = new QueryClient();

const fetchPeople = async () => {
    const result = await fetch('https://swapi.dev/api/people')
    return result.json()
}

const Planets = () => {
    const { data, status } = useQuery('Planets', fetchPeople)
    console.log("data", data, "status", status)
    return (
        <div>
            <h2>People</h2>
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
                    {data.results.map((person)=>
                        <Person person={person} key={person.name}/>
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