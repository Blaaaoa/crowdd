'use client'

import React from 'react'
import Public from './public'
import { useEffect,useState } from 'react';
import SidebarX from './sidebar';


export default function MainPage(props: { value: string }) {
  const [urlParam, setUrlParam] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setUrlParam(searchParams.get('page'));
    }
  }, []);

  // Use the hook value to control rendering
  if (props.value === '1' || urlParam === '1') {
    return (
    
      <div>
        <Public />
      </div>
    );
  } else if (props.value === '2' || urlParam === '2') {
    return (
      <div>
       {/* <offlineai/> */}
      </div>
    );
  }

  else {
    return (
      <div>
        <SidebarX />
      </div>
    );
  }
}