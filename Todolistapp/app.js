document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const saveButton = document.getElementById('save-button');
    const taskList = document.getElementById('task-list');

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;
        if (title === '') return;
        addTask(title, description, date, time);
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    });

    function addTask(title, description, date, time) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td class="action-container">
                <button class="btn btn-info btn-sm read-button">Read</button>
                <button class="btn btn-danger btn-sm delete-button">Remove</button>
            </td>
        `;
        taskList.appendChild(row);

        const deleteButton = row.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            row.remove();
        });

        const readButton = row.querySelector('.read-button');
        readButton.addEventListener('click', function() {
            row.classList.toggle('task-read');
            readButton.classList.toggle('btn-success');
            readButton.innerText = readButton.innerText === 'Read' ? 'Unread' : 'Read';
        });
    }
    // example tasks
    addTask('Recording', 'Recording my new rap', '2024-02-19', '13:00');
    addTask('Temple', 'Visiting Iscon Temple', '2024-02-19', '16:00');
});