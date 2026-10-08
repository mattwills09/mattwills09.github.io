// Small enhancements; navigation and portfolio content work without JavaScript.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear())
})
