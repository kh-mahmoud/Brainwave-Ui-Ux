import Section from './Section';
import {smallSphere,stars} from "../assets"
import Heading from "../components/Heading"
import PricingList from './PricingList';
import { RightLine,LeftLine } from './design/Pricing';




const Pricing = () => {
  return (
    <Section className={"overflow-hidden"} id={'pricing'}>
        <div className='container relative'>
            <div className='mb-[6.5rem] hidden lg:flex md:justify-center'>
               <img src={smallSphere} alt="sphere" className='relative z-1' width={255} height={255} />
               <div className='absolute  w-[60rem] -translate-y-14 pointer-events-none'>
                   <img src={stars} className='w-full' height={400} width={950} alt="stars" />
               </div>
            </div>
            <Heading title={"Pay once, use forever"} tag={"GET STARTED WITH BRAINWAVE"}/>

            <div className='relative'>
                <PricingList/>
                <RightLine/>
                <LeftLine/>
            </div>

            <div className='flex justify-center mt-10'>
                <a className='text-xs tracking-wider font-code font-bold uppercase border-b' href="/#pricing">See the full details</a>
            </div>
      


        </div>
    </Section>
  );
}

export default Pricing;
