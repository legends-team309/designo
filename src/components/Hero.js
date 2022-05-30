import React from "react";
import phone from "../img/phone.webp";
import BtnWhite from "./BtnWhite";
function Hero() {
	return (
		<section>
			<div className="hero">

				<div className="banner">
					<div className="panner-p">
						<h1 className="banner-title">Award-winning custom designs and digital branding solutions</h1>
                        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
					<BtnWhite />
                    </div>
					<div>
						<img src={phone} className="phone" />
					</div>
				</div>

			</div>
		</section>
	);
}

export default Hero;
