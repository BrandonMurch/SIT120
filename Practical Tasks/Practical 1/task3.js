function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML += `<tr><td>${name}</td><td>${age}</td><td>${location}</td></tr>`

    event.target.reset();
}