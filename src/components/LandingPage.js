import React, { useEffect, useRef } from 'react';

function LandingPage() {
    const landingRef = useRef(null);
    useEffect(()=>{
        fetch('./landingpage.html')
        .then(Response => Response.text())
        .then(data=>{
            if(landingRef.current){
                landingRef.current.innerHTML=data;
            }
        });
    },[]);
    return <div ref={landingRef}></div>;
}

export default LandingPage;
