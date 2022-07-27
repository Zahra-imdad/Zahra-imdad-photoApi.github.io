
class Photos {
    photo = [];
    div;

    constructor() {
        this.div = document.getElementById('photoList');
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.photo = data;
                this.constructHtml()
            })
            .catch(err => console.log(err))
    }

    constructHtml() {
        console.log(this.photo)
        const eachPhoto = this.photo.map((photo) => {
            return `<div class="col-lg-3 col-md-6 pt-5">
                    <div class="card  bg-white border-1 shadow">
                      <a href="${photo.url}" target="_blank"><img class="card-img-top rounded-circle p-4" src="${photo.thumbnailUrl}" alt="Card image cap"></a>
                      <div class="card-body text-center text-dark">
                        <h5 class="card-title">${photo.title}</h5>
                      </div>
                    </div>
            </div> `
            console.log(photo.title)
        }).join('')
        this.div.innerHTML = eachPhoto;
    }
}

const ph = new Photos();