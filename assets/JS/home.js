// this will strike text and date when user clicks on check box
function strike(id){
    let elems = document.querySelectorAll(`[data-id="${id}"]`);
    elems.forEach(elem => {
        elem.classList.toggle('cross');
    })
}
