window.addEventListener('storage', function (event) {
  if (event.key === 'loginEvent') {
    location.reload();
  } else if (event.key === 'logoutEvent') {
    location.reload();
  }
});
