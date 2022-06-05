function fetchData() {
    fetch("https://inshorts.deta.dev/news?category=science").then(response => {
            if (!response.ok) {
                throw Error('ERROR');
            }
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        const html = data.data.map(data => {
            return `
            <div class="container">
               <div class="data">
                <div class="content1">
                    <img src="${data.imageUrl}">
                </div>
                <div class="content2">
                    <h4>${data.title}</h4><br>
                    <p>${data.content}</p><br><br>
                    <p><b>Author</b>: ${data.author}</p>
                    <p><b>Date</b>: ${data.date}</p>             
                    <p><b>Time</b>: ${data.time}</p>
                </div>
                </div><hr>
            </div>`
        }).join('')
        console.log(html);
        document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();