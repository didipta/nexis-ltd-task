import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Home = () => {
    const {data: alldata =[],refetch,isLoading} = useQuery({
        queryKey: ['test'],
        queryFn: async() =>{
            const res = await fetch(`https://test.nexisltd.com/test`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem('access_token_Ultimate')}`
              }
            }
            );
            const data = await res.json();
            return data;
        }
    });
    let dataarray=[];
    let datearray=[];
    for(let i in alldata)
    {
        dataarray.push(alldata[i]);
    }
    for(let i in dataarray[0]?.attendance)
    {
        datearray.push(i);
    }
    console.log(dataarray,datearray);
    return (
        <div className="relative top-16 p-5 lg:p-20">
          <div className="w-full p-5">
            <p className="bg-[#1678CB] p-6 w-full lg:w-80 text-center text-xl font-bold m-auto text-white">Attendance information</p>
          </div>
                <div className="overflow-x-auto ">
                 <table className="table w-full">
               
                   <thead>
                     <tr>
                       <th>Date</th>
                       <th>Employee Name</th>
                       <th>Status</th>
                     </tr>
                   </thead>
                   <tbody>
                   {
                    datearray.map(data=>
                        
                         dataarray.map(x=>
                        <tr key={x.id}>
                        <td>{data}</td>
                        <td>{x.name}</td>
                        <td>{x?.attendance[data].status}</td>
                       </tr> 
                                )
                        
                       
                        )
                    
                        
                       
                      
                      
                   }
                     
                     
                   </tbody>
                 </table>
               </div>
            
           
        </div>
    );
};

export default Home;