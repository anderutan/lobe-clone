import logo from '../assets/logo.png';
import { IoChatbubble, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  const linkStyles = 'hover:scale-110 ease-in-out duration-500 cursor-pointer';
  const btnStyles =
    'bg-button p-3 rounded-full hover:scale-110 ease-in-out duration-500';
  const linkSectionStyles =
    'flex flex-col items-center gap-3 md:items-start md:gap-6';

  return (
    <div className='w-full md:max-w-[1200px] md:w-5/6 md:mx-auto px-4 py-8 text-center md:text-left'>
      <div className='border-t border-gray-300 text-sm p-8 pt-16 grid grid-cols-2 gap-16 md:grid-cols-6 md:gap-0 md:pt-10'>
        <div className='flex flex-col items-center gap-3 row-start-3 col-span-2 md:col-start-1 md:row-start-1 md:items-start md:gap-6'>
          <div className='flex items-center'>
            <p className='text-lg font-bold -mr-1'>lobe</p>
            <img src={logo} alt='logo' className='h-8' />
          </div>
          <p>A product by Microsoft.</p>
          <p>All rights reserved.</p>
          <p>© Microsoft 2021</p>
        </div>
        <div className={linkSectionStyles}>
          <h4 className='font-bold h-8'>About</h4>
          <p className={linkStyles}>Download</p>
          <p className={linkStyles}>Overview</p>
          <p className={linkStyles}>Examples</p>
          <p className={linkStyles}>Blog</p>
        </div>
        <div className={linkSectionStyles}>
          <h4 className='font-bold h-8'>General</h4>
          <p className={linkStyles}> Notice</p>
          <p className={linkStyles}>License</p>
          <p className={linkStyles}>Press Inquiry</p>
          <p className={linkStyles}>Press Images</p>
        </div>
        <div className={linkSectionStyles}>
          <h4 className='font-bold h-8'>Resources</h4>
          <p className={linkStyles}>Help</p>
          <p className={linkStyles}>Tour</p>
          <p className={linkStyles}>Contact</p>
          <p className={linkStyles}>Privacy</p>
        </div>
        <div className='flex flex-col items-center gap-3 md:items-start'>
          <div className={btnStyles}>
            <IoChatbubble className='text-white h-5 w-5' />
          </div>
          <div className={btnStyles}>
            <IoLogoTwitter className='text-white h-5 w-5' />
          </div>
          <div className={btnStyles}>
            <IoLogoYoutube className='text-white h-5 w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
