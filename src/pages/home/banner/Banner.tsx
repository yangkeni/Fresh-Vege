import React, { FC } from 'react';
import { Carousel } from 'antd';
import BannerCard from 'components/BannerCard/BannerCard';
import './style.scss'

const Banner: FC<{}> = () => {
  return (
    <div className="banner-container">
      <Carousel autoplay>
        <img src="/image/slides/mongoBanner.jpg" alt='slide' />
        <img src="/image/slides/meatBanner.jpg" alt='slide' />
      </Carousel>
      <div className="banner-card-container">
        <BannerCard
          title='鲜蔬'
          desc='触手可得的高品质有机鲜蔬,即时配送最快29分钟到达,让买到满意的菜像是喝到干净的水一样简单'
          background={{
            image: '/image/banner-card-image/col_1.png',
            color: '#59cca6',
          }}
          className='banner-card'
          to='/merchant/vegetable'
        />
        <BannerCard
          title='坚果'
          desc='7+1人机品控,严选最优质的坚果,绝不把坏果卖给用户,让每一口坚果都充满幸福'
          background={{
            image: '/image/banner-card-image/col_2.webp',
            color: '#91ad41',
          }}
          className='banner-card'
          to='/merchant/nut'
        />
        <BannerCard
          title='生鲜'
          desc='生鲜食材一站式买齐,活鱼活虾送到家,更有世界各地新奇食材,做家门口的云冰箱'
          background={{
            image: '/image/banner-card-image/col_3.webp',
            color: '#e3b375',
          }}
          className='banner-card'
          to='/merchant/seafood'
        />
        <BannerCard
          title='水果'
          desc='新鲜采摘品质保证,绿色有机、安全卫生,应季水果应季吃,足不出户吃遍大江南北,让你会吃也会很好吃'
          background={{
            image: '/image/banner-card-image/col_4.webp',
            color: '#ef7f94',
          }}
          className='banner-card'
          to='/merchant/fruit'
        />
      </div>
    </div>
  );
};
export default Banner;
