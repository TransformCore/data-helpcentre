const getParameterByName = name => {
    let url = window.location.href
    url = url.toLowerCase()
    name = name.toLowerCase(),
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.querySelectorAll('.resetLink, .mailTo').forEach(el => {
    newLink = el.getAttribute('href') + getParameterByName('projCode')
    el.setAttribute('href', newLink)
})

// set up what shows and what doesnt based off stype variable
const hideElements = classToHide => {
    document.querySelectorAll(classToHide).forEach(el => {
        el.remove();
    })
}

switch(getParameterByName('stype')) {
    case '1':
        break;
    case '2':
        hideElements('.resetLink')
        break;
    case '3':
        hideElements('.online')
        hideElements('.resetLink')
        break;
    default:
        hideElements('.resetLink')
        break;
}