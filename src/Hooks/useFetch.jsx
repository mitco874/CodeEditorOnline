import { useEffect, useState } from "react"

export const useFetch = (url='') => {
    const [contain,setContain]=useState({
                                          data:{},
                                          isLoading:true,
                                          hasError:false})
    useEffect(()=>{},[])


  return {contain}
  
}
