const isMobileDevice = () =>
  /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800;

export { isMobileDevice };
