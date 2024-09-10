document.addEventListener('DOMContentLoaded', (event) => {
    const caixinha = document.querySelector('.caixinha');
    const containers = document.querySelectorAll('.container');

    caixinha.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.className);
    });

    containers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`.${data}`);
            e.target.appendChild(draggedElement);
        });
    });
});