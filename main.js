fetch('https://fortee.jp/phperkaigi-2020/api/sponsors')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // generate_sponsor_table(data.sponsor_plans)
        generate_sponsor_div(data.sponsor_plans)
    });

fetch('https://fortee.jp/phperkaigi-2020/api/staff')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        generate_staff_text(data.staff)
    });

function generate_staff_text(staff) {
    let t = document.getElementById('staff_div');

    Object.keys(staff).forEach(function (k) {
        let row = document.createElement('div');
        row.classList.add("row");

        let pad1 = document.createElement('div');
        pad1.classList.add("col-md-2");
        row.appendChild(pad1);

        // title
        let title_div = document.createElement('div');
        title_div.classList.add("col-md-3");
        let title = document.createElement("h5");
        title.textContent = k; 
        title_div.appendChild(title);
        row.appendChild(title_div);

        // name
        let name_div = document.createElement('div');
        name_div.classList.add("col-md-5");

        staff[k].forEach(function (v) {
            let a = document.createElement('a');
            a.href = v.url;
            a.textContent = v.name;
            name_div.appendChild(a);
            name_div.appendChild(document.createElement('br'));
        });

        row.appendChild(name_div);

        let pad2 = document.createElement('div');
        pad2.classList.add("col-md-2");
        row.appendChild(pad2);

        t.appendChild(row);
    });
}

function generate_sponsor_div(sponsor_plans) {
    let t = document.getElementById('sponsor_div');

    sponsor_plans.forEach(function (v) {
        let row = document.createElement('div');
        row.classList.add("row");

        let pad1 = document.createElement('div');
        pad1.classList.add("col-md-2");
        row.appendChild(pad1);

        // title
        let title_div = document.createElement('div');
        title_div.classList.add("col-md-3");
        let title = document.createElement("h5");
        title.textContent = v.name; 
        title_div.appendChild(title);
        row.appendChild(title_div);

        // name
        let name_div = document.createElement('div');
        name_div.classList.add("col-md-5");

        v.sponsors.forEach(function (v) {
            let a = document.createElement('a');
            a.href = v.url;
            a.textContent = v.name;
            name_div.appendChild(a);
            name_div.appendChild(document.createElement("br"));
        });

        name_div.appendChild(document.createElement("br")); // 空行をいれたい

        row.appendChild(name_div);

        let pad2 = document.createElement('div');
        pad2.classList.add("col-md-2");
        row.appendChild(pad2);

        t.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", function () {
});
