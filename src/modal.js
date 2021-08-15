// import React from 'react';

const Modal = () => {
				// Initialize All Required DOM Elements
			const modalOverlay = document.getElementById("modalOverlay");
			const modalOpen = document.getElementById("modalOpen");
			const modalClose = document.getElementById("modalClose");

			// Initialize Open Modal by Click Button
			modalOpen.addEventListener("click", () => {
				modalOverlay.classList.add("visible");
			});

			// Initialize Close Modal by Click Button
			modalClose.addEventListener("click", () => {
				modalOverlay.classList.remove("visible");
				clearInputField();
			});

			// Initialize Close Modal by Click Outside
			window.addEventListener("click", (e) => {
				if (e.target === modalOverlay) {
					modalOverlay.classList.remove("visible");
					clearInputField();
				}
			});

			// Initialize Close Modal by Click Escape
			window.addEventListener("keyup", (e) => {
				if (e.key === "Escape" && modalOverlay.classList.contains("visible")) {
					modalOverlay.classList.remove("visible");
					clearInputField();
				}
			});

			// Initialize preventDefault Submit Button
			window.addEventListener("submit", (e) => {
				e.preventDefault();
			});

			// Initialize Clear Input Filed Function
			const clearInputField = () => {
				setTimeout(() => {
					document.getElementById("email").value = "";
				}, 1000);
			};
	return
}

export default Modal