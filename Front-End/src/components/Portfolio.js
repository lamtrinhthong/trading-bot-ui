import React, { useEffect,useRef } from 'react';

function Portfolio() {
    const PortfolioRef=useRef(null);
    useEffect(()=>{
        fetch('./portfolio.html')
        .then(Response=>Response.text())
        .then(data=>{
            if(PortfolioRef.current){
                PortfolioRef.current.innerHTML=data;
            }
        });
    },[]);
  return <div ref={PortfolioRef}></div>;
}

export default Portfolio;
