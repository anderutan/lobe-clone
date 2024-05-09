import { useState } from 'react';
import videoImg from '../assets/Video.jpg';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Main = () => {
  const [videoPlayToggled, setVideoPlayToggled] = useState(false);

  return (
    <div className='w-full md:max-w-[1200px] md:w-5/6 md:mx-auto px-4 py-8 text-center pt-32'>
      <div className='md:w-3/4 md:mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>
          Lobe <span className='text-button'>Tour</span>
        </h1>
        <p className='md:text-xl font-medium'>
          Build your first machine learning model in ten minutes. No code or
          experience required.
        </p>
      </div>
      <div className='rounded-2xl bg-gray-200 relative'>
        {videoPlayToggled ? (
          <div className='fixed top-0 left-0 h-full w-full bg-white/5 backdrop-blur-[3px] flex justify-center items-center ease-in-out duration-500 z-50'>
            <motion.div
              className='fixed top-5 right-5 cursor-pointer'
              onClick={() => setVideoPlayToggled(!videoPlayToggled)}
              initial={{ opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoCloseSharp className='h-12 w-12' />
            </motion.div>
            <iframe
              src='https://www.youtube.com/embed/Mdcw3Sb98DA?si=1NEW9rJYpPeR6soR'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
              className='h-64 w-full md:w-5/6 md:h-3/6 md:rounded-2xl my-12 shadow-xl'
            ></iframe>
          </div>
        ) : (
          <div
            className='my-16 ease-in-out duration-500'
            onClick={() => setVideoPlayToggled(!videoPlayToggled)}
          >
            <img
              src={videoImg}
              alt=''
              className='w-full bg-green-200  rounded-2xl hover:shadow-2xl hover:scale-105 ease-in-out duration-500 cursor-pointer'
            />
          </div>
        )}
      </div>
      <div className=''>
        <div className=' mb-8'>
          <h2 className='text-4xl md:text-5xl md:w-3/5 md:mx-auto md:leading-[70px] font-bold'>
            Train your app with Lobe
          </h2>
        </div>
        <div>
          <button className='text-white bg-button py-2 px-8 rounded-3xl font-semibold hover:scale-110 ease-in-out duration-500'>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
