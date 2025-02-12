import { useEffect, useRef, useState } from "react";
import "./ConBlock.css"
import Image from "next/image";
import Link from "next/link";
import { useScrollbarWidth } from "$hooks/useScrollbarWidth";
import PopupLink from "./PopupLink/PopupLink";

const ConBlock = () => {
	const popup = useRef()
	const scrollbarWidth = useScrollbarWidth();

	// Открытие окна 
	function openPopup() {
		document.body.classList.add("menu-active")
		popup.current.style.display = 'block';
		document.querySelector('.wrapper').style.paddingRight = scrollbarWidth + "px";
		document.querySelector('.header').style.paddingRight = scrollbarWidth + "px";
	};

	// Закрытие окна при нажатии на крестик 
	function closePopup() {
		document.body.classList.remove("menu-active")
		popup.current.style.display = 'none';
		document.querySelector('.wrapper').style.paddingRight = "0px";
		document.querySelector('.header').style.paddingRight = "0px";
	};

	useEffect(e => {
		if (typeof window !== 'undefined') {
			window.addEventListener('click', function (event) {
				if (event.target === popup) {
					document.body.classList.remove("menu-active")
					popup.current.style.display = 'none';
				}
			});
		}
	}, [])

	return (
		<div className="conboxcontainer">
			<div className="conbox">
				<Link href="/guides" className="left">
					<h1>Доєднатися до пошиття</h1>
				</Link>
				<button onClick={openPopup} id="openBtn" className="right"><span>Підтримуй нас Донатом</span></button>
				<div ref={popup} id="popup" className="popup">
					<div className="popup-content">
						<span onClick={closePopup} id="closeBtn" className="popup__close">&times;</span>
						<PopupLink href="https://www.paypal.com" text="marishka.polo@gmail.com" img="/images/paypal.jpg" />
						<PopupLink href="https://send.monobank.ua/jar/5VV7zhDJGY" text="5375 4112 0381 7304" img="/images/mono.jpg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConBlock;