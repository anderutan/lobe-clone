import { useState } from 'react';
import logo from '../assets/logo.png';
import useMediaQuery from '../hooks/useMediaQuery';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-10px' },
};

const Navbar = () => {
  const linkStyle =
    'font-medium md:transition-all md:duration-500 md:ease-in-out md:hover:scale-110';
  const isAboveMediumScreenSize = useMediaQuery('(min-width: 900px)');
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div className='fixed top-0 right-0 left-0 w-full md:max-w-[1440px] md:mx-auto bg-white z-30'>
      <div className='w-full px-6 py-4 md:p-4 flex items-center justify-between'>
        <a className='flex items-center' href='#home'>
          <p className='text-2xl font-bold'>lobe</p>
          <img src={logo} alt='logo' className='h-10' />
        </a>
        {isAboveMediumScreenSize ? (
          <>
            <div>
              <ul className='flex gap-10'>
                <li className={linkStyle}>
                  <a href=''>Overview</a>
                </li>
                <li className={linkStyle}>
                  <a href=''>Examples</a>
                </li>
                <li className={linkStyle}>
                  <a href='' className='font-bold'>
                    Tour
                  </a>
                </li>
                <li className={linkStyle}>
                  <a href=''>Blog</a>
                </li>
                <li className={linkStyle}>
                  <a href=''>Help</a>
                </li>
              </ul>
            </div>
            <div>
              <button className='text-white bg-button py-2 px-5 rounded-3xl font-semibold hover:scale-110 ease-in-out duration-500'>
                Download
              </button>
            </div>
          </>
        ) : (
          <motion.div
            className='p-2 rounded-full bg-[#EEF0F2]'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuToggled ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ rotate: 90, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoCloseSharp className='text-black h-5 w-5' />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <RxHamburgerMenu className='text-black h-5 w-5' />
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
      {!isAboveMediumScreenSize && isMenuToggled && (
        <motion.div
          className='w-full border-t h-[450px] shadow-xl'
          initial='closed'
          animate='open'
          variants={variants}
        >
          <div className='p-8'>
            <ul className='flex flex-col gap-8'>
              <li className={linkStyle}>
                <a href=''>Overview</a>
              </li>
              <li className={linkStyle}>
                <a href=''>Examples</a>
              </li>
              <li className={linkStyle}>
                <a href='' className='font-bold'>
                  Tour
                </a>
              </li>
              <li className={linkStyle}>
                <a href=''>Blog</a>
              </li>
              <li className={linkStyle}>
                <a href=''>Help</a>
              </li>
            </ul>
          </div>
          <div className='px-8 flex flex-col '>
            <button className='text-white bg-button py-2 px-5 rounded-3xl font-semibold '>
              Download
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
