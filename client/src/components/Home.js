import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../pics/pic1.jpg';

const images = [
	'../pics/pic1.jpg',
	'../pics/pic2.png',
	'../pics/pic3.png',
	'../pics/pic4.jpg'
  ];

const Home = () => {
	return (
		<div>
			<h1>Home</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi aperiam itaque similique illum ullam. Vitae, cumque officiis fugiat amet quis illo expedita accusantium a numquam consectetur doloribus illum sunt!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi aperiam itaque similique illum ullam. Vitae, cumque officiis fugiat amet quis illo expedita accusantium a numquam consectetur doloribus illum sunt!
			</p>
			
			<Zoom
				images={images}
				scale="0.4"
				duration={5000}
				transitionDuration={1000}
        	/>
			
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi aperiam itaque similique illum ullam. Vitae, cumque officiis fugiat amet quis illo expedita accusantium a numquam consectetur doloribus illum sunt!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi aperiam itaque similique illum ullam. Vitae, cumque officiis fugiat amet quis illo expedita accusantium a numquam consectetur doloribus illum sunt!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi aperiam itaque similique illum ullam. Vitae, cumque officiis fugiat amet quis illo expedita accusantium a numquam consectetur doloribus illum sunt!
			</p>
		</div>
	);
};

export default Home;