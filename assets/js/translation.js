// grabs language from browser / url and then loops through all elements on page.
// replaces any with 'data-text' attribute with the corresponding item in translations (for the given language)

translations = {
  en :  {
  "welcome_header" : "Hello. What can we help you with?",
  "header_1" : "How do I complete this survey?",
  "header_2" : "I have a problem completing my survey",
  "header_3" : "Confidentiality",
  "instructions_p1" : "After reading each question or statement, please click the response that best describes your response or how you feel.",
  "instructions_p2" : "Clicking a neutral response such as one headed 'Neither Agree nor Disagree' indicates that sometimes you agree, sometimes you don't or that you are neutral.",
  "instructions_p3" : "Please <strong>do not</strong> use your browser back button, instead you must use the <strong>'Previous'</strong> button at the bottom of your page to review and change any answers",
  "instructions_p4" : "Each time you click <strong>'Next'</strong> at the bottom of your page, your responses will be submitted and saved",
  "instructions_p5" : "If a question screen has a <strong>'Save and Exit'</strong> button then you can use this to be able to return to where you left the survey at a later date",
  "instructions_sg1" : "After reading each question or statement, please click the response that best describes your response or how you feel.",
  "instructions_sg2" : "Clicking a neutral response such as one headed 'Neither Agree nor Disagree' indicates that sometimes you agree, sometimes you don't or that you are neutral.",
  "instructions_sg3" : "Please <strong>do not</strong> use your browser back button, instead you must use the <strong>'Previous'</strong> button at the bottom of your page to review and change any answers",
  "instructions_sg4" : "Each time you click <strong>'Next'</strong> at the bottom of your page, your responses will be submitted and saved",
  "instructions_sg5" : "If a question screen has a <strong>'Save and Exit'</strong> button then you can use this to be able to return to where you left the survey at a later date",
  "header_2_1" : "I have lost my survey link",
  "header_2_2" : "I didn't receive a survey link",
  "header_2_3" : "Somebody else has used my survey link",
  "header_2_4" : "I want to change my answers",
  "header_2_5" : "My issue isn't covered here",
  "header_3_subheader" : "Your opinion. In confidence.",
  "header_3_intro" : "The guarantee of confidentiality is absolutely vital to the success of any employee survey.<p>We want you to have total confidence that your responses will never be traced back to you as an individual. We've put together the questions and answers below to give you a better idea of what confidentiality means for this survey.",
  "header_3_1" : "<strong>Is the survey really confidential?</strong><br />Absolutely. This survey is being carried out by an independent research company which is bound by the Market Research Code of Conduct. We will never release information that could result in individuals being identified.",
  "header_3_2" : "<strong>Will you ask me for my name or employee number, or any other information that could identify me individually?</strong><br />No. This survey is confidential and we won't ask for any information that could identify you.",
  "header_3_3" : "<strong>Who will see my comments?</strong><br />Your survey will go straight to us, which means your organisation will not be able to see any individual responses. The results will be analysed in a way that prevents making any person identifiable.",
  "header_3_4" : "<strong>Open questions. Could I be identified?</strong><br />Every effort is made to remove names from the comments, however, please do not enter any information which might personally identify yourself or others.",
  "header_3_5" : "<strong>I'm filling out an online survey. Can my response be traced back to my computer?</strong><br />No. As the survey is being hosted by us on our web server no one at your organisation has access to the responses at any point during the survey. We are bound by the Market Research Society's code of conduct for employee research and promises to guarantee the confidentiality of all respondents to the survey.",
  "header_3_6" : "<strong>But you know I've not completed it because you keep sending me reminder emails.</strong><br />We will know the email addresses of the people who have and have not completed the online survey, however this level of detail is not shared with your organisation.",
  "header_3_7" : "<strong>But won't you be able to tell who I am when you break the team results down - I'm the only woman who is working part-time in my team?</strong><br />No. Results that could identify an individual will not be provided.  We abide by the Market Research Society's code of practice, which means that no reports are made on teams or demographic groups of people that could mean any individual could be identified.",
  "error_header" : "Oops - something has gone wrong!"
  }
}

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
