const apiUrl = "https://api.github.com/";
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =  () => {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log('Ajax:', data);
    }
};
xhttp.open("GET", `${apiUrl}users`, true);
xhttp.send();
$.get(`${apiUrl}users`,  data => {})
    .done(data => console.log('JQuery :', data))
    .fail(error => console.error('JQuery :', error));

$.ajax({
           url: `${apiUrl}users`,
           method: "GET"
      })
    .done( data => console.log('JQuery.ajax :', data))
    .fail( error => console.error(`massage ${error.responseText['message']}`));

fetch(`${apiUrl}users`).then(response =>  response.json())
    .then(data => console.log('fetch :', data))
    .catch(error => console.error('fetch :', error));



axios.get(`${apiUrl}users`)
    .then(response => {
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
    .catch( error => console.error(error));
