function getTime(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {total, days, hours,minutes,seconds};
}

function startClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTime(endtime);
		daysSpan.innerHTML = formatUnit(t.days);
		hoursSpan.innerHTML = formatUnit(t.hours);
		minutesSpan.innerHTML = formatUnit(t.minutes);
		secondsSpan.innerHTML = formatUnit(t.seconds);
	
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	function formatUnit(timespan) {
		const timeString = ('0' + timespan).slice(-2);
		return timeString.split('').map(t => `<span>${t}</span>`).join('');
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000 -56875000);

startClock('timer', deadline);

