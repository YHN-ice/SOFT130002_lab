const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

const category = ["Human", "Classical", "Abstract", "Beauty"];

let container = document.getElementsByClassName("flex-container justify")[0];
for (let i = 0; i < works.length; i++) {
    let subContainer = document.createElement("div");
    subContainer.className = "item";

    let genreBlock = document.createElement("h4");
    genreBlock.innerText = "Genre: " + category[i];
    subContainer.appendChild(genreBlock);

    let authorBlock = document.createElement("div");
    authorBlock.className = "inner-box";
    let name = document.createElement("h3");
    name.innerText = works[i].author;
    name.style.display = "inline";
    authorBlock.appendChild(name);
    let lifetime = document.createElement("h5");
    lifetime.innerText = "lifetime:" + works[i].lifetime;
    lifetime.style.display = "inline";
    lifetime.style.marginLeft = "1em";
    authorBlock.appendChild(lifetime);
    subContainer.appendChild(authorBlock);

    let photoBlock = document.createElement("div");
    photoBlock.className = "inner-box";
    let title = document.createElement("h3");
    title.innerText = "Popular Photos";
    photoBlock.appendChild(title);

    for (let j = 0; j < works[i].photos.length; j++) {
        let component = document.createElement("img");
        component.className = "photo";
        component.src = works[i].photos[j];
        photoBlock.appendChild(component);
    }

    subContainer.appendChild(photoBlock);


    let button = document.createElement("button");
    button.innerText = "Visit";
    subContainer.appendChild(button);

    container.appendChild(subContainer);
}

