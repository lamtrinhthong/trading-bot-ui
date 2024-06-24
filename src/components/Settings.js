import React, { useEffect,useRef} from 'react';

function Settings() {
  const settingRef=useRef(null);
  useEffect(()=>{
    fetch('./settings.html')
    .then(Response => Response.text())
    .then(data=>{
      if(settingRef.current){
        settingRef.current.innerHTML=data;
      }
    });
  },[]);
  return <div ref={settingRef}></div>;
}

export default Settings;
