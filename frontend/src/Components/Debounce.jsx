import React, { useEffect, useState } from 'react'

function Debounce(value , delay) {
  const [debounceValue , setDebounceValue] = useState(value);
  useEffect(()=>{
    const timmer = setTimeout(()=>{
        setDebounceValue(value)
    },delay);

    return ()=>{
        clearTimeout(timmer)
    }
  },[value,delay])
    return debounceValue
}

export default Debounce