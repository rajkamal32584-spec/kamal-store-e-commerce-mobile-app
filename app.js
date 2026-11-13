// ... existing cart state and functions ...

// Add to the existing app.js (don't replace the whole file)
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) {
        // Create toast if it doesn't exist (for profile page)
        const toastEl = document.createElement('div');
        toastEl.id = 'toast';
        toastEl.className = 'toast';
        document.body.appendChild(toastEl);
        toastEl.textContent = message;
        toastEl.style.display = 'block';
        
        setTimeout(() => {
            toastEl.style.display = 'none';
        }, 3000);
    } else {
        // Use existing toast
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
}