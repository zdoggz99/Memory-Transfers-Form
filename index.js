function handleSubmit(event) {

    document.getElementById('submit').hidden = true;
    document.querySelectorAll('#hiddenNotes, #hiddenSignature').forEach(el => el.style.display = 'flex');
    window.print();

    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    const myJson = JSON.stringify(value)
    console.log(myJson)
    const name = document.getElementById("name").value;
    const reversedName = name.split(' ').reverse().join('');
    console.log(reversedName);

    const url = 'http://192.168.1.17:8000/' + reversedName
    console.log(url)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: myJson
    })
    .then(data => {
    console.log('Success:', data);
    })
    .catch(error => {
    console.error('Error:', error);
    });
    }

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  

  