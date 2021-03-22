import React from 'react'
import {useQuery,useMutation  } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
function Query() {
   const {isLoading,error,data,isFetching} = useQuery("data",() => 
   fetch(
       "https://reqres.in/api/users?page=2"
   ).then((res) => {
      return res.json()})
   );
   console.log("ppppppp",data)
   if (isLoading) {
    return "Loading..."
   }else{
    return (
        <div>
         <table>
            <tr>
                   <th>ID</th>
                   <th>Email</th>
                   <th>First Name</th>
               </tr>
            {
          data.data.map((item,index) => (
           
               
               <tr>
                   <td>{item.id}</td>
                   <td>{item.email}</td>
                   <td>{item.first_name}</td>
               </tr>
          
               
           ))}
            </table>   
        </div>
       );
  }
  
}
export default Query;
