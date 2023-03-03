const LANG = { ES: 0, EN: 1, PT: 2, IT: 3 };
let xmlfile = new XMLHttpRequest();
xmlfile.open("GET", "./config.xml", false);
xmlfile.send();
let xml = xmlfile.responseXML;
let languages;

loadLanguage = () => {
    languages = xml.getElementsByTagName("language");
    return languages;
}

setLanguageSelected = (selectLang) => {

    let selected = selectLang ? selectLang : LANG.ES;
    let currentTagNames = document.querySelectorAll(`[data-i18n]`);
    currentTagNames.forEach(function (tag) {
        const key = tag.dataset.i18n;
        try {
            let langs = loadLanguage(selectLang);
            tag.innerText = langs[selected].getElementsByTagName(key)[0].textContent;

        } catch (e) {
            console.log(e)
         }
    });

    let selectLanguage = document.getElementById("change-language");
    selectLanguage.value = selectLang;
}

changeLanguageFunc = () => {
    let selectLanguage = document.getElementById("change-language");
    let selectLang = selectLanguage.options[selectLanguage.selectedIndex].value;

    localStorage.setItem('lang', selectLang);
    setLanguageSelected(selectLang);
}

getCurrentLanguage = () => {
    let localLang;
    try {
        localLang = localStorage.getItem('lang');
    } catch (e) {
        console.log(e)
     }

    if (!localLang) localLang = LANG.ES;

    return localLang;
}

//funcion para cambiar lenguaje
document.getElementById("change-language").addEventListener("change", function (e) {
    changeLanguageFunc();
});

try {
    setLanguageSelected(parseInt(getCurrentLanguage()));
}
catch (e) { 
    console.log(e)
}



