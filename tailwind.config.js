/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/styles.css",
    "./src/app/app.component.html",
    "./src/app/app.component.css",
    "./src/app/components/nav-bar/nav-bar.component.html",
    "./src/app/components/nav-bar/nav-bar.component.css",
    "./src/app/components/banner/banner.component.html",
    "./src/app/components/banner/banner.component.css",
    "./src/app/components/section-app/section-app.component.html",
    "./src/app/components/section-app/section-app.component.css",
    "./src/app/components/section-a-barbearia/section-a-barbearia.component.html",
    "./src/app/components/section-a-barbearia/section-a-barbearia.component.css",
    "./src/app/components/section-servicos/section-servicos.component.html",
    "./src/app/components/section-servicos/section-servicos.component.css",
    "./src/app/pages/home/home.component.html",
    "./src/app/pages/home/home.component.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e8ae4a',
      },
      fontFamily: {
        title: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        body: 'Montserrat, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
      }
    },
  },
  plugins: [],
}
