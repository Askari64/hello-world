import {useState, useEffect} from 'react'

function useFetch(url) { //useFetch custom hook takes a url param

    const [data, setData] = useState();

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json()) //parse res object as json()
        .then((data)=> setData(data)); // set parsed data to data state variable using setter function
    },[url]) //url is dependency

  return [data] //returns the data variable which stores array of parsed objects
};

export default useFetch