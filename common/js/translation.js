// grabs language from browser / url and then loops through all elements on page. 
// replaces any with 'data-text' attribute with the corresponding item in translations (for the given language)

let x = navigator.languages
	? navigator.languages[0]
	: (navigator.language || navigator.userLanguage),
	lang = ""
switch (x) {
	case 'en-GB': lang = 'en'
		break;

	default: lang = 'en'
}

document.querySelectorAll('*').forEach(function (item) {
	if (item.hasAttribute('data-text')) {
		let text = item.getAttribute('data-text')
		item.innerHTML = translations[lang][text]
	}
})