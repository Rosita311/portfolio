// Darkmode
document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
});

// Day counter
const dayCounter = document.getElementById('counter');
const start = '03-13-2020';
const startDate = new Date(start);
const numFormat = new Intl.NumberFormat("en-US");
  
setInterval(() => {
    const currentDate = new Date();
    const difference = Math.floor(
        (currentDate.getDate() - startDate.getDate()) / 1000);
        dayCounter.innerText = numFormat.format(difference);
},);
