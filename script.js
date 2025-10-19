const content = document.getElementById('content');

const osData = {
    windows: `
        <h2>Встановлення Windows</h2>
        <ol>
            <li>Підготуйте флешку з офіційним ISO.</li>
            <li>Налаштуйте BIOS/UEFI для завантаження з флешки.</li>
            <li>Виберіть диск та розділи для установки.</li>
            <li>Слідуйте інструкціям установника.</li>
        </ol>
    `,
    linux: `
        <h2>Встановлення Linux</h2>
        <ol>
            <li>Завантажте ISO потрібного дистрибутива.</li>
            <li>Створіть завантажувальну флешку.</li>
            <li>Налаштуйте BIOS/UEFI.</li>
            <li>Встановіть систему та додаткове ПЗ.</li>
        </ol>
    `,
    other: `
        <h2>Інші ОС</h2>
        <p>Тут будуть інструкції для FreeBSD, ReactOS та інших ОС.</p>
    `
};

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const os = link.dataset.os;
        content.innerHTML = osData[os];
    });
});
