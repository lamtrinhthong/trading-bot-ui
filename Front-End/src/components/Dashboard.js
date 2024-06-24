// src/components/Dashboard.js

import React, { useEffect, useRef } from 'react';

function Dashboard() {
  const dashboardRef = useRef(null);

  useEffect(() => {
    fetch('./dashboard.html')
      .then(response => response.text())
      .then(data => {
        if (dashboardRef.current) {
          dashboardRef.current.innerHTML = data;
        }
      });
  }, []);

  return <div ref={dashboardRef}></div>;
}

export default Dashboard;
