document.addEventListener('alpine:init', () => {
    Alpine.store('theme', {
        dark: localStorage.getItem('darkMode') === 'true',
        toggle() {
            this.dark = !this.dark;
            localStorage.setItem('darkMode', this.dark);
            document.documentElement.classList.toggle('dark');
        }
    });
});
