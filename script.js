document.addEventListener('DOMContentLoaded', () => {
    const trackerBody = document.getElementById('tracker-body');
    const today = new Date();

    // Generate rows for 30 days
    for (let i = 1; i <= 30; i++) {
        const row = document.createElement('tr');
        const date = new Date(today);
        date.setDate(today.getDate() + (i - 1));

        row.innerHTML = `
            <td>${i}</td>
            <td>${date.toLocaleDateString()}</td>
            <td>
                <input type="checkbox" id="day-${i}" onclick="markComplete(this)">
                <label for="day-${i}" class="status-label">Pending</label>
            </td>
        `;

        trackerBody.appendChild(row);
    }
});

// Function to mark the day as complete
function markComplete(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.textContent = "Complete";
        label.classList.add('complete-label');
    } else {
        label.textContent = "Pending";
        label.classList.remove('complete-label');
    }
}
