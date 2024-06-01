import React from 'react';
import Section from './Section';
import {collabApps, collabContent, collabText } from '../constants';
import { check, LeftLine, RightLine } from '../assets';
import Button from './Button';
import {cortexSymbol} from "../assets"



const Collaboration = () => {
  return (
    <Section crosses >
        <div className='container lg:flex'>
           <div className='max-w-[25rem]'>
               <h2 className='h2 mb-4 md:mb-8'>AI Chat App for seamless collaboration</h2>

               <ul className='max-w-[22rem] mb-10 md:mb-14'>
                  {collabContent.map((item)=>
                  (
                    <li className='mb-3 py-3' key={item.id}>
                        <div className='flex item-center '>
                            <img src={check} alt={"check icon"} height={24} width={24} />
                            <h6 className='h6 ml-5'>{item.title}</h6>
                        </div>
                           {item.text && <p className='body-2 mt-3 text-n-4'>{item.text}</p>}
                    </li>
                 
                  ))}
               </ul>

               <Button>Try it now</Button>
           </div>


           <div className='mt-4 ml-auto lg:w-[38rem]'>
              <p className='body-2 mb-4 text-n-4 lg:mb-32 md:mb-16 lg:w-[22rem] lg:mx-auto'>{collabText}</p>

              <div className='relative flex justify-center items-center -translate-x-1/2 left-1/2 border border-n-6 rounded-full aspect-square scale-75 w-[22rem] md:scale-100'>
                  <div className='flex w-60 h-60 aspect-square  border border-n-6  rounded-full'>
                      <div className='w-[6rem] aspect-square m-auto p-[0.2rem] flex bg-conic-gradient rounded-full'>
                          <div className='h-full w-full flex items-center justify-center rounded-full bg-n-8'>
                              <img src={cortexSymbol}width={48} height={48} alt="brainwave" />
                          </div>
                      </div>
                  </div>
                   <ul>
                     {collabApps.map((item,index)=>(
                        
                        <li className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`} key={item.id}>
                           <div className={`relative justify-center items-center -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                              <img width={item.height} height={item.width} src={item.icon} alt="" />
                           </div>
                        
                        </li>
                     
                     ))}
                   </ul>
                   <div className="absolute hidden  max-lg:hidden w-[800px]  -translate-x-[22rem] top-[6rem] xl:block">
                        <img  src={LeftLine} alt="leftline" />
                   </div>

                    <div className='absolute hidden max-lg:hidden  translate-x-[19rem] top-[10.5rem] xl:block '>
                        <img  src={RightLine} alt="rightine" />
                   </div>
              </div>
           </div>
        </div>
    </Section>
  );
}

export default Collaboration;
