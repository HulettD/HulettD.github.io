document.addEventListener("DOMContentLoaded", function (event) {
	const ratingInput = document.getElementById("rating");
	ratingInput.addEventListener("change", function (e) {
		const min = ratingInput.getAttribute("min");
		const max = ratingInput.getAttribute("max");
		const selected = ratingInput.value;
		let stars = "";
		for (let i = min - 1; i < selected; i++)
			stars += "\u{2605}";
		for (let i = selected; i < max; i++)
			stars += "\u{2606}";
		document.getElementById("stars").innerHTML = stars;
	});

	document.getElementById("FeedbackForm").addEventListener("submit", function (e) {
		e.preventDefault();
		const wordCount = document.getElementById("feedback").value.split(' ').filter(function (n) { return n != '' }).length;
		const rating = parseInt(ratingInput.value);
		let ratingFeedback = ""
		switch (rating) {
			case 1:
				ratingFeedback = `only ${rating} star?! ;(`;
				break;
			case 2:
				ratingFeedback = `only ${rating} stars? :(`;
				break;
			case 3:
				ratingFeedback = `${rating} stars? :|`;
				break;
			case 4:
				ratingFeedback = `${rating} stars? :)`;
				break;
			case 5:
				ratingFeedback = `${rating} stars! :D`;
				break;
			default:
				ratingFeedback = `hmm, no rating?`;
				break;
		}
		alert(`${wordCount} word${wordCount == 0 || wordCount > 1 ? "s" : ""} of feedback, ${ratingFeedback}`);
		e.currentTarget.submit();
	});
});