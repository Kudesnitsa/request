const apiUrl = "https://api.github.com/";

/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log('Ajax:', data);
    }
};
xhttp.open("GET", `${apiUrl}users`, true);
xhttp.send();
$.get(`${apiUrl}users`, function (data) {
}).done(function (data) {
    console.log('JQuery :', data);
}).fail(function (error) {
    console.error(error);
});

$.ajax({
    url: `${apiUrl}users`,
    method: "GET"
}).done(function (data) {
    console.log('JQuery.ajax :', data);
}).fail(function (error) {
    console.error(`massage ${error.responseText['message']}`);
});

fetch(`${apiUrl}users`).then(response => {
    return response.json();
}).then(data => {
    console.log('fetch :', data);
}).catch(error => {
    console.error(error);
});
*/


axios.get(`${apiUrl}users`)
    .then(function (response) {
        let d, s = '';
        $('.users-box').append(`<ul class="list-users container"></ul>`);
        $('.list-users').append(`<li>
                                        <div>id</div>
                                        <div><img src="${d['avatar_url']}" alt="${d['login']}"></div>
                                    </li>`);
        for (d of response.data) {
            $('.list-users').append(`<li>
                                        <div class="user-id">${d['id']}</div>
                                        <div class="user-img"><img src="${d['avatar_url']}" alt="${d['login']}"></div>
                                    </li>`);
        }
        console.log('axios :', response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
