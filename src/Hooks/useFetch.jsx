import { useEffect,useState } from "react";
const useFetch = (url) => {
    const[pending,isPending]=useState(true);
    const[error,setError]=useState(null);
    const[data,setData]=useState([]);
    useEffect(()=>
    {  
        setTimeout(() => {
            fetch(url)
            .then(res=>{
              if(!res.ok)
              {
                  throw Error("Can't fetch the data");
    
              }
              return res.json();
            })  
            .then(data=>{
              
              setData(data);
              isPending(false);
            })
            .catch(err=>{
              setError(err.message);
              isPending(false);
            })
        }, 100);     
    },[]);
   
    return {pending,error,data};
}
 
export default useFetch;