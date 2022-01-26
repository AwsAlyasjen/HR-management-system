function getData() {
    return JSON.parse(localStorage.getItem('data') || "[]");
}

function callme() {
    const data = getData();
    const obj = Object.assign(...["name", "department", "level", "salary"].map(prop => 
         ({ [prop]: document.getElementById(prop).value }))
    );
    localStorage.setItem('data', JSON.stringify(data.concat(obj)));
}
function getData() {
    return JSON.parse(localStorage.getItem('data') || "[]");
}

window.onload = function() {
    const tr = document.querySelector('#result-table tr:last-child');
    const tbody = tr.parentNode;
    const data = getData();
    for (let i = 1; i < data.length; i++) {
        tbody.appendChild(tr.cloneNode(true));
    }
    data.forEach((row, i) => 
        Object.keys(row).forEach(prop => 
            tbody.rows[i+1].querySelector('.' + prop).textContent = row[prop]
        )
    )
}    