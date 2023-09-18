export function renderGallery(arr, container) { 
 
    const markup = arr.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => `
        <a class="link-item-card" href=${largeImageURL}>
            <div class="photo-card">
                <img class="img-cat"src=${webformatURL} width=250  alt=${tags} loading="lazy" />
                <div class="info">
                    <p class="info-item">
                    <b>Likes: ${likes}</b>
                    </p>
                    <p class="info-item">
                    <b>Views: ${views}</b>
                    </p>
                    <p class="info-item">
                    <b>Comments: ${comments}</b>
                    </p>
                    <p class="info-item">
                    <b>Downloads: ${ downloads }</b>
                    </p>
                </div>
            </div>
        </a>

`)
    container.insertAdjacentHTML("beforeend",markup);

}