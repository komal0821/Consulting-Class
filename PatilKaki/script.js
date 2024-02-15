// Countdown Timer Script
const timer = document.getElementById('timer');

let time = 86100; // 23 hours and 45 minutes in seconds

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

setInterval(() => {
    if (time > 0) {
        time--;
        timer.textContent = formatTime(time);
    }
}, 1000);

// Function to add new icon box
function addIconBox(iconSrc, text) {
    const iconBox = document.createElement('div');
    iconBox.classList.add('icon-box');

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');
    const iconImg = document.createElement('img');
    iconImg.src = iconSrc;
    iconImg.alt = 'Icon';
    iconDiv.appendChild(iconImg);

    const p = document.createElement('p');
    p.textContent = text;

    iconBox.appendChild(iconDiv);
    iconBox.appendChild(p);

    document.querySelector('.why-choose-us').appendChild(iconBox);
}

// Add more icons
addIconBox('icon4.png', 'Quality Assurance');
addIconBox('icon5.png', 'Global Reach');
// Add more as needed



// Form Slide Up Script
document.getElementById('showForm').addEventListener('click', () => {
    document.getElementById('form-overlay').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('form-overlay').style.display = 'none';
});
