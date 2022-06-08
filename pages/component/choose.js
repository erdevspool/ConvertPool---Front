import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Choose = () => {
    return (
        <div>
              <h1 className="text-4xl font-bold text-center mt-36 mb-20"> Why Choose Us</h1>
            <div className="choose-container">
                <div className="left">
                   <div className="left-cards p-2">
                      <div className='mr-5'>
                      <h4>Clarity</h4>
                       <p className='text-xl text-gray-400'>100% transperancy from our side.
                       </p>
                      </div>
                 
                      <span className='icon-img2-bg'> <FontAwesomeIcon className='font-4  icon-img2'  icon={faSearch} /></span>
              
                   </div>
                   <div className="left-cards">
                   <div className='mr-5'>
                      <h4>Proper Guidence</h4>
                       <p className='text-xl text-gray-400'>Well guide you about everything you need to do.
                       </p>
                      </div>
                 
                      <span className='icon-img2-bg'> <FontAwesomeIcon className='font-3  icon-img2'  icon={faArrowRightArrowLeft} /></span>
                   </div>
                   <div className="left-cards">
                   <div className='mr-5'>
                      <h4>Effectiveness</h4>
                       <p className='text-xl text-gray-400'>We make sure we bring you the best possible results.
                       </p>
                      </div>
                 
                      <span className='icon-img2-bg'> <FontAwesomeIcon className='font-4  icon-img2'  icon={faListCheck} /></span>
              
                   </div>
                </div>
                <div className="middle">
                <img src="https://marketing.xmartech.in/images/others/whychoose.webp" alt="" />
                </div>
                <div className="right">
                <div className="right-cards p-2"
                >
              
                  <span className='icon-img2-bg'> <FontAwesomeIcon className='font-4  icon-img2'  icon={faPencil} /></span>
                      <div className='ml-5'>
                      <h4>Result Oriented</h4>
                       <p className='text-lg text-gray-400'>Implementing data driven strategies to reach the goals.
                       </p>
                      </div>
                 
                   
              
                   </div>
                   <div className="right-cards">
                   <span className='icon-img2-bg'> <FontAwesomeIcon className='font-4  icon-img2'  icon={faGears} /></span>
                   <div className='ml-5'>
                      <h4>Well Optimized</h4>
                       <p className='text-lg text-gray-400'>Our campaings are optimized for better performance.
                       </p>
                      </div>
                 
                  
              
                   </div>
                   <div className="right-cards">
                   <span className='icon-img2-bg'> <FontAwesomeIcon className='font-4  icon-img2'  icon={faMagnifyingGlassChart} /></span>
                   <div className='ml-5'>
                      <h4>Research</h4>
                       <p className='text-lg text-gray-400'>Dedicated team to reseach & make roadmap for long term results.
                       </p>
                      </div>
                 
                  
              
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;