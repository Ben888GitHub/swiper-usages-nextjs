import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState } from 'react';
import NavButton from './NavButton';

const ApiNavigation = ({ posts }) => {
	const [beginningIndex, setBeginningIndex] = useState(false);
	const [endIndex, setEndIndex] = useState(false);

	return (
		<>
			<p className="text-3xl mt-10">Tailwind Swiper Navigation</p>
			<div className="container mx-auto">
				<Swiper
					style={{ marginTop: 20, padding: 50 }} // todo, remove the padding
					className="text-center group relative"
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					navigation={{
						prevEl: '.button-prev-slide',
						nextEl: '.button-next-slide'
					}}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					breakpoints={{
						300: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 10
						},
						1025: {
							slidesPerView: 4,
							spaceBetween: 0
						}
					}}
					onSwiper={(swiper) => {
						swiper.isBeginning && setBeginningIndex(swiper.isBeginning);
					}}
					onSlideChange={(swiper) => {
						setBeginningIndex(swiper.isBeginning);
						setEndIndex(swiper.isEnd);
					}}
				>
					{posts.map((post, idx) => (
						<SwiperSlide key={idx}>
							<div className="mx-auto   max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
								<Image
									quality={50}
									priority
									height={750}
									width={500}
									// src={`https://image.tmdb.org/t/p/w500${poster}`}
									src={post.image}
									alt={post.name}
									className="rounded-t-lg cursor-pointer relative"
								/>
								<p className="text-2xl text-white">{post.name}</p>
							</div>
						</SwiperSlide>
					))}
					<NavButton
						idx={beginningIndex}
						slideNav="button-prev-slide"
						position="left"
					/>
					<NavButton
						idx={endIndex}
						slideNav="button-next-slide"
						position="right"
					/>
				</Swiper>
			</div>
		</>
	);
};

export default ApiNavigation;
