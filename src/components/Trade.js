import React,{useEffect,useRef} from 'react';

function Trade() {
    const TradeRef=useRef(null);
    useEffect(()=>{
        fetch('./trade.html')
        .then(response=>response.text())
        .then(data=>{
            if(TradeRef.current){
                TradeRef.current.innerHTML=data;
            }
        });
    },[]);
  return <div ref={TradeRef}></div>;
}

export default Trade;
