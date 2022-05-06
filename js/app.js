const elemento = document.querySelector('.grid');
const msnry = new Masonry(elemento, {
    // options
    itemSelector: ".grid-item",
    columnWidth: 230,
    gutter: 20,
    isFitWidth: true
});
