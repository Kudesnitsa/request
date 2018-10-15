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
        let d;
        console.log('axios :', response.data);
        $('.users-box').append(`<ul class="list-users container">
                                              <li>
                                                 <div class="label user-id">id</div>
                                                 <div class="label user-img">avatar</div>
                                              </li>
                                 </ul>`);
        for (d of response.data) {
            $('.list-users').append(`<li>
                                        <div class="user-id">${d['id']}</div>
                                        <div class="user-img"><img src="${d['avatar_url']}" alt="${d['login']}"></div>
                                    </li>`);
        }

    })
    .catch(function (error) {
        console.error(error);
    });
