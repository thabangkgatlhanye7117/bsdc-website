import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ()=>{
  const {pathname, hash} = useLocation();

  useEffect(()=>{
    if (hash) {
      const  element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      } 
     
    } else {
           window.scrollTo(0,0);
           document.documentElement.scrollTop = 0;
           document.body.scrollTop = 0;
        
      }
   
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop