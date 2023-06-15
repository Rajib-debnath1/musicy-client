import { useEffect, useState } from "react"

const useGetToyData = url =>{
    const [toy, setToy] = useState({})
    const [refresh,setRefresh] = useState(null)

    const refetch =(unique)=>{
        setRefresh(unique)
    }

    // console.log(url,"form useGetData");
    
    useEffect(() => {
           fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    },[url,setRefresh,refresh])
    if(toy.length>0){
        return {data:toy,refetch}
    }
    else{
        return [{}]
    }
}

export default useGetToyData