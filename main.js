fetch('https://fortee.jp/phperkaigi-2020/api/sponsors')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        generate_sponsor_table(data.sponsor_plans)
    });

fetch('https://fortee.jp/phperkaigi-2020/api/staff')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        generate_staff_text(data.staff)
    });

function generate_staff_text(staff) {
    let t = document.getElementById('staff_table');

    Object.keys(staff).forEach(function (k) {
        let tr = document.createElement('tr');

        let td_e = document.createElement('td');
        td_e.textContent = k;
        td_e.classList.add('e');

        // name
        let td_v = document.createElement('td');
        td_v.classList.add('v');
        staff[k].forEach(function (v) {
            let a = document.createElement('a');
            a.href = v.url;
            a.textContent = v.name;
            td_v.appendChild(a);
            td_v.appendChild(document.createElement('br'));
        });

        tr.appendChild(td_e);
        tr.appendChild(td_v);
        t.appendChild(tr);
    });
}

function generate_sponsor_table(sponsor_plans) {
    let t = document.getElementById('sponsor_table');

    sponsor_plans.forEach(function (v) {
        let tr = document.createElement('tr');

        // title
        let td_e = document.createElement('td');
        td_e.textContent = v.name;
        td_e.classList.add('e');

        // name
        let td_v = document.createElement('td');
        td_v.classList.add('v');
        v.sponsors.forEach(function (v) {
            let a = document.createElement('a');
            a.href = v.url;
            a.textContent = v.name;
            td_v.appendChild(a);
            td_v.appendChild(document.createElement("br"));
        });

        td_v.appendChild(document.createElement("br")); // 空行をいれたい

        tr.appendChild(td_e);
        tr.appendChild(td_v);
        t.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function () {
});
