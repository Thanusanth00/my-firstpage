document.getElementById('recForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const msg = document.getElementById('message').value;
  if (name && msg) {
    const newRec = document.createElement('div');
    newRec.classList.add('recommendation');
    newRec.textContent = `"${msg}" — ${name}`;
    document.querySelector('.recommendations').appendChild(newRec);
    document.getElementById('recForm').reset();
    alert("Thank you for leaving a recommendation!");
  }
});
