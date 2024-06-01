import { curve, heroBackground, robot } from '../assets';
import Button from './Button';
import Section from './Section';
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles,BottomLine,Gradient } from './design/Hero';
import { useRef } from 'react';
import { heroIcons } from '../constants';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';



const Hero = () => {
  const parallaxRef = useRef(null);

    return (
        <Section className={'pt-[8rem] -mt-[5.25]'}  crosses crossesOffset customPaddings id='hero'>
            <div ref={parallaxRef} className='container relative '>
                <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
                    <h1 className='h1 mb-10'>
                        Explore the Possibilities of AI Chatting with {""}
                        <span className='relative inline-block'>
                            Brainwave
                            <img width={624} className='absolute top-full left-0  w-full' src={curve} alt="curve" />
                        </span>
                    </h1>
                    <p className='mx-auto  max-w-3xl body-1 text-n-2 mb-6 lg:mb-8 '>
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                    </p>
                    <Button href={"/pricing"} white>
                        Get Started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className=" z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem] border-2">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="rounded-b-[0.9rem] aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden">
                                <img
                                    src={robot}
                                    className="scale-1.7 lg:-translate-y-[23%] md:-translate-y-[10%]"
                                    height={490}
                                    width={1024}
                                    alt="robot"
                                />

                                    <Generating className={"absolute z-10 left-4 right-4 bottom-5 md:-translate-x-1/2 md:bottom-8 md:right-auto md:left-1/2  md:w-[31rem]"}/>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon,index)=>(
                                           <li key={index} className='p-5'>
                                              <img width={24} height={25} src={icon} alt="" />
                                           </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className={"hidden absolute xl:flex -right-[1.5rem] bottom-[15rem]  w-[18rem]"} title={"Code generation"}/>
                                </ScrollParallax>
                                
                            </div>
                        </div>
                        <Gradient/>
                    </div>
                    <div className="absolute -z-3 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>

                  <BackgroundCircles parallaxRef={parallaxRef} />

                </div>
                
                <CompanyLogos  className="hidden relative z-10 mt-20 lg:block"/>

            </div>
            <BottomLine/>
        </Section>
    );
}

export default Hero;
