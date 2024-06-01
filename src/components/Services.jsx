import Section from './Section';
import Heading from './Heading'
import {service1,service2,service3,check} from "../assets"
import {brainwaveServices, brainwaveServicesIcons} from "../constants"
import Generating from "../components/Generating"
import {Gradient,PhotChatMessage,VideoBar,VideoChatMessage} from "./design/Services"


const Services = () => {
  return (
    <Section id={'how-to-use'}>
        <div className='container'>
            <Heading  title={"Generative AI made for creators"} text={"Brainwave unlocks the potential of AI-powered applications"}/>

            <div className='relative'>

               <div className='relative z-1 h-[39rem] flex items-center mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                    <div className='absolute top-0 left-0 h-full w-full pointer-events-none'>
                        <img className='h-full w-full object-cover ' src={service1} alt="service1" />
                    </div>

                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='h4 mb-4'>Smartest AI</h4>
                        <p className='body-2 mb-[3rem] text-n-3'>Brainwave unlocks the potential of AI-powered applications</p>
                        <ul>
                          {brainwaveServices.map((item,index)=>
                          (
                             <li className='flex py-4 border-t border-n-6' key={index}>
                                <img width={24} height={24} src={check} alt="check mark" />
                                <p className='ml-4'>{item}</p>
                             </li>
                          
                          ))}
                        </ul>
                    </div>
                  <Generating className={'absolute left-4 bottom-4 right-4 lg:mx-52 border-n-1/10 border'}/>
               </div>

               <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                    <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
                       <div className='absolute inset-0 '>
                          <img src={service2} className='h-full w-full object-cover' alt="service2" />
                       </div>

                        <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
                           <h4 className='h4 mb-4'>Photo editing</h4>
                           <p className='body-2 mb-[3rem] text-n-3'>Automatically enhance your photos using our AI app&apos; s photo editing feature. Try it now!</p>
                        </div>
                        <PhotChatMessage/>
                    </div>

                    <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
                       <div className='py-12 px-4 xl:px-8'>
                           <h4 className='h4 mb-4'>Video generation</h4>
                           <p className='body-2 mb-[2rem] text-n-3'>The world&apos;s most powerful AI photo and video art generation engine. What will you create?</p>

                           <ul className='flex items-center justify-between'>
                              {brainwaveServicesIcons.map((item,index)=>(
                                   <li className={`flex justify-center rounded-2xl items-center ${index==2 ? " h-[3rem] w-[3rem] p-0.25 bg-conic-gradient":"w-10 h-10 bg-n-6" } `} key={index}>
                                      <div className={`flex justify-center items-center ${index==2 && "bg-n-7 h-full w-full rounded-[1rem]"}`}>
                                         <img src={item} alt="service_icon" />
                                      </div>
                                   </li>
                              
                              ))}
                           </ul>
                       </div>

                       <div className='relative bg-n-8 rounded-xl overflow-hidden'>
                          <img src={service3} className='object-cover h-full w-full' alt="service3" />
                          <VideoChatMessage/>
                          <VideoBar/>
                       </div>
                    </div>
               
               </div>
                 <Gradient/>
            </div>
        </div> 
    </Section>
  );
}

export default Services;
