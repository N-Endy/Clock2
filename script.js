secondHand = document.querySelector('#seconds');
minuteHand = document.querySelector('#minutes');
hourHand = document.querySelector('#hours');

function moveHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60) * 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes/60) * 360;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours/60) * 360;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(moveHands, 1000);