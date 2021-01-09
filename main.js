const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classlist.toggle('dark');
});
