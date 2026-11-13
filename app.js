// Client Interactivity & Lucide Icon Initialization
const initIcons = () => { if (window.lucide) window.lucide.createIcons(); };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initIcons);
else initIcons();