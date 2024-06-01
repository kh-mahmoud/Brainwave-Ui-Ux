import { cortex } from "../assets";
import {navigation} from "../constants"
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useEffect, useState } from "react";
import {HamburgerMenu } from "../components/design/Header"
import scrollLock from 'scroll-lock';



const Header = () => {
const pathname=useLocation()

   const [openNavigation,setOpenNavigation]=useState(false)
   const [size,setSize]= useState(window.innerWidth)


   const handleNavigation=()=>
   {
      if(openNavigation)
         {
            setOpenNavigation(false)
            scrollLock.enablePageScroll()
         }
         else
         {
            setOpenNavigation(true)
            scrollLock.disablePageScroll()
         }
   }
   
   const checkSize=()=>
   {
      if(size>=1024)
      {
          setOpenNavigation(false)
          scrollLock.enablePageScroll()
      }
   }


   useEffect(()=>
   {
      window.addEventListener("resize",checkSize)
       
       return ()=>window.removeEventListener("resize",checkSize)

   },[size])


  return (
   <>
    {openNavigation && <HamburgerMenu/>}

    <header  className={`header ${openNavigation?'backdrop-blur-none':'bg-n-8'}`}>
         <div className="py-5 flex-1  pl-9 pr-5 cursor-pointer ">
            <img src={cortex} width={190} height={40} alt="brainwave" />
         </div>

         <nav className={`${!openNavigation && "hidden"}  lg:text-xs lg:font-semibold lg:flex justify-center`}>
            <div onClick={()=>{setOpenNavigation(false);scrollLock.enablePageScroll()}} className="nav_container">
                {navigation.map((item)=>(
                   <a className={`nav_link  ${item.url == pathname.hash ?'lg:text-n-1':'lg:text-n-1/50'} ${item.onlyMobile?'lg:hidden':""}`} key={item.id} href={item.url}>
                        {item.title}
                   </a>
                ))}
            </div>
         </nav>

         <div className="hidden lg:flex gap-8 justify-end  items-center py-5 flex-1 pr-9 ">
             <a href="#signup" className="button  tex-n-1/50 hover:text-n-1">
                 New account
             </a>

             <Button className={"lg:flex"}  href="#login">
                Sign in
             </Button>
         </div>

         
         <div onClick={handleNavigation} className="pr-9 lg:hidden flex justify-center items-center">
            <Button>
                <MenuSvg openNavigation={openNavigation}/>
            </Button>
         </div>

     

    </header>
    </>
  );
}

export default Header;
