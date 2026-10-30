const theme_color_btn = document.getElementById('theme-color');
const form = document.querySelector('.form');

function changeBackground() {
    theme_color_btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-background');

    const DarkMode = document.body.classList.contains('dark-background');
    localStorage.setItem('theme', DarkMode ? "dark" : "light");

    });
window.addEventListener('DOMContentLoaded', () => {
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme === 'dark') {
        document.body.classList.add('dark-background');
    }
});
}

function updateButtonText() {
    theme_color_btn.addEventListener('click', () => {
        const darkMode = document.body.classList.contains('dark-background');
        theme_color_btn.textContent = darkMode ? "Light mode" : "Dark mode";
    });
}

changeBackground();
updateButtonText();


if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const existingCard = document.querySelector('.card');
        if (existingCard) {
            existingCard.remove();
        }

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-content">
                <h2>Välkommen ${form.name.value}</h2>
                <p>Är detta din email? ${form.email.value}</p>
                <p>Tack för ditt meddelande: ${form.message.value}</p>
                <button id="back-btn">Gå tillbaka till formuläret</button>
            </div>
        `;
        form.after(card);

        card.querySelector('#back-btn').addEventListener('click', goBackToForm);
        
        form.style.display = 'none';

    });
}


function goBackToForm() {
    form.style.display = 'block';
    document.querySelector('.card')?.remove();
}