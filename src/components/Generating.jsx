import { loading } from "../assets";

const Generating = ({className}) => {
  return (
    <div className={`flex items-center px-6 bg-n-8/80 h-[3.5rem] rounded-[1.7rem] text-base ${className || ''} `}>
        <img src={loading} className='w-5 h-5 mr-4' alt="generating ai" />
        Ai is generating
    </div>
  );
}

export default Generating;
