import Heading from './Heading';
import {benefits} from "../constants"
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from './design/Benefits';
import Section from './Section';


const Benefits = () => {
  return (
    <Section id='features' >
          <div className='container relative z-2'>
             <Heading className={"md:max-w-md lg:max-w-2xl"} title={"Chat Smarter, Not Harder with Brainwave"}/>

             <div className='flex flex-wrap gap-10 mb-10'>
                  {benefits.map((item)=>(
                      <div 
                         className='relative group  p-0.5 bg-no-repeat  md:max-w-[24rem] bg-[length:100%_100%]'
                         style={{backgroundImage:`url(${item.backgroundUrl})`}}
                         key={item.id}>

                            <div className='flex flex-col p-[2.4rem] min-h-[22rem] pointer-events-none'>
                                <h5 className='h2 mb-5'>{item.title}</h5>
                                <p className='body-2 mb-6 text-n-3 min-h-[9rem]'>{item.text}</p>
                                <div className='flex items-center mt-auto'>
                                   <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                   <p className='text-xs font-bold ml-auto text-n-1 uppercase  font-code'>Explore more</p>
                                    <Arrow/>
                                </div>
                            </div>

                            {item.light && <GradientLight/>}


                            <div className='absolute -z-5 inset-0 bg-n-8'>
                               <div className='absolute inset-0 opacity-0 group-hover:opacity-10  transition-opacity '> 
                                 {item.imageUrl &&
                                   <img src={item.imageUrl} className='h-full w-full  object-cover' alt={item.title}  />}
                               
                               </div>
                            
                            </div>
                      </div>
                  ))}
             </div>
          </div>
    </Section>
  );
}

export default Benefits;
