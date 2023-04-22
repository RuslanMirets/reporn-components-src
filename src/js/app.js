// Input group password
(function () {
	const input = document.querySelector(".input-group__input");
	const showBtn = document.querySelector(".input-group__btn");
	const eyeIcon = document.querySelectorAll(".input-group__icon");

	input.addEventListener("input", () => {
		console.log(input.value);
		if (input.value.length > 0) {
			showBtn.classList.add("active");
		} else {
			showBtn.classList.remove("active");
		}
	});

	showBtn.addEventListener("click", () => {
		if (input.type == "password") {
			input.type = "text";
		} else {
			input.type = "password";
		}
		eyeIcon.forEach((el) => {
			el.classList.toggle("active");
		});
	});
})();
