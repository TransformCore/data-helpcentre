const getParameterByName = name => {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.querySelectorAll('.resetLink').forEach(el => {
    newLink = el.getAttribute('href') + getParameterByName('proj')
    el.setAttribute('href', newLink)
})