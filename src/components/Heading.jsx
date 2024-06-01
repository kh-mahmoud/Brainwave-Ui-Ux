import Tagline from './Tagline';

const Heading = ({className,title,text,tag}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 md:text-center  lg:mb-20`}>
        {tag && <Tagline className={" mb-4 md:justify-center flex"}>{tag}</Tagline>}
        {title && <h2 className='h2'>{title}</h2>}
        {text && <h2 className='body-2 text-n-4 mt-4'>{text}</h2>}

    </div>
  );
}

export default Heading;
