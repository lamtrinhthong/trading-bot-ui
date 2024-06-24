import React, { useEffect,useRef } from 'react';

function MarketData() {
    const MarketDataRef=useRef(null);
    useEffect(()=>{
        fetch('./marketdata.html')
        .then(Response=>Response.text())
        .then(data=>{
            if(MarketDataRef.current){
                MarketDataRef.current.innerHTML=data;
            }
        });
    },[]);
  return <div ref={MarketDataRef}></div>;
}

export default MarketData;
