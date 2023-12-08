const button = document.querySelector('#button');
const toasts = document.querySelector('.toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = [
  'success',
  'error',
  'info'
];



button.addEventListener('click', createNotification);

function createNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(getRandomType());
  notification.textContent = getRandomMessage();
  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}