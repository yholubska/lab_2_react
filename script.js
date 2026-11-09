// 1. localStorage: інформація про ОС і браузер
const info = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  vendor: navigator.vendor,
  cookieEnabled: navigator.cookieEnabled,
  screenSize: screen.width + 'x' + screen.height,
  online: navigator.onLine
};
for (const key in info) {
  localStorage.setItem(key, info[key]);
}

// показ у футері всього, що є в localStorage
const footer = document.getElementById('site-footer');
footer.innerHTML = '';
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  footer.innerHTML += `<p><b>${key}:</b> ${localStorage.getItem(key)}</p>`;
}

// 2. Коментарі з сервера (варіант 8)
async function loadComments() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/8/comments');
    const data = await response.json();
    document.getElementById('comments').innerHTML = data.map(c =>
      `<div class="comment">
         <h3>${c.name}</h3>
         <p><i>${c.email}</i></p>
         <p>${c.body}</p>
       </div>`
    ).join('');
  } catch (error) {
    console.error('Error:', error);
  }
}
loadComments();

// 3. Модальне вікно через 1 хвилину
const modal = document.getElementById('modal');
setTimeout(() => {
  modal.style.display = 'flex';
}, 60000);
document.getElementById('close-modal').addEventListener('click', () => {
  modal.style.display = 'none';
});

// 4. Тема день/ніч
const body = document.body;
const hours = new Date().getHours();
let theme = (hours >= 7 && hours < 21) ? 'light' : 'dark';

function applyTheme() {
  body.classList.toggle('dark', theme === 'dark');
}
applyTheme();

document.getElementById('theme-toggle').addEventListener('click', () => {
  theme = (theme === 'light') ? 'dark' : 'light';
  applyTheme();
});