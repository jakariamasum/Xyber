import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';

import team1 from '../../assets/team01.jpg'
import team2 from '../../assets/team02.jpg'
import team3 from '../../assets/team03.jpg'
import team4 from '../../assets/team04.jpg'
import team5 from '../../assets/team05.jpg'
import TeamCard from './TeamCard';

const TeamCarousal = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TeamCard img={team1} name={'Vincent Cooper'} position={'Designer'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team2} name={'Howard Holmes'} position={'UI/UX Designer'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team3} name={'Ella Thomson'} position={'Web Developer'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team4} name={'Daniyelle Brillet'} position={'System Tester'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team5} name={'Howard Holmes'} position={'UI/UX Designer'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team3} name={'Ella Thomson'} position={'Web Developer'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard img={team4} name={'Daniyelle Brillet'} position={'System Tester'} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TeamCarousal;