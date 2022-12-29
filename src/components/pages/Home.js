import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='header'><span>Best Kdrama of 2022 so far</span></div>
      <div className='content'>
        <div>
          <div className='heading'><span>1. All Of Us Are Dead</span></div>
          <div className='img'>
            <img src='images/kdrama/best_kdrama_2022/allofusaredead_400.jpg' alt='loading' className='responsive' />
          </div>
          <div className='courtesy'><span>Image courtesy: Netflix</span></div><br />
          <div className='description'>
            <span>
              All of us dead is a thrill korean zombie drama
            </span>
          </div>
        </div>
      </div>


      <div className='content'>
        <div>
          <div className='heading'><span>2. A Business Proposal</span></div>
          <div className='img'>
            <img src='images/kdrama/best_kdrama_2022/bp.png' alt='loading' className='responsive' />
          </div>
          <div className='courtesy'><span>Image courtesy: SBS Drama</span></div><br />
          <div className='description'>
            <span>
              All of us dead is a thrill korean zombie drama
            </span>
          </div>
        </div>
      </div>

      <div className='content'>
        <div>
          <div className='heading'><span>3. Twenty Five, Twenty One</span></div>
          <div className='img'>
            <img src='images/kdrama/best_kdrama_2022/totf.jpg' alt='loading' className='responsive' />
          </div>
          <div className='courtesy'><span>Image courtesy: tvn</span></div><br />
          <div className='description'>
            <span>
              All of us dead is a thrill korean zombie drama
            </span>
          </div>
        </div>
      </div>

      <div className='content'>
        <div>
          <div className='heading'><span>4. Forecasting Love and Weather</span></div>
          <div className='img'>
            <img src='images/kdrama/best_kdrama_2022/fl.jpg' alt='loading' className='responsive' />
          </div>
          <div className='courtesy'><span>Image courtesy: jtbc</span></div><br />
          <div className='description'>
            <span>
              All of us dead is a thrill korean zombie drama
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;