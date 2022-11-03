const btn = document.querySelector('#btn');
const notifications = document.querySelector('#notifications');
const notificationsDot = document.querySelectorAll('.notification');
const notificationBg = document.querySelectorAll('.notification-bg');

btn.addEventListener('click', () => {
    notifications.innerHTML = 0;
    notificationsDot.forEach(dot => {
        dot.classList.add('hidden');
    });

    notificationBg.forEach(notification => {
        notification.classList.remove('bg-very-light-grayish-blue');
        notification.classList.add('bg-white');
    })
})