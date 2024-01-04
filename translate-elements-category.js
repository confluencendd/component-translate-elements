/*

    SCRIPT DESTINADO A TRADUZIR OS CATEGORIAS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA

*/

//Categorias em Portugues
const categories_PT = [
    'Manuais',//categoria para teste
    'Guias',
    'Ferramentas',
    'Developer'
];

//Categorias em Ingles
const categories_EN = [
    'Manuals',//categoria para teste
    'Guides',
    'Tools',
    'Developer'
];

//Categorias em Espanhol
const categories_ES = [
    'Manuales',//categoria para teste
    'Guías',
    'Herramientas',
    'Developer'
];

//Categorias em Italiano
const categories_IT = [
    'Manuali',//categoria para teste
    'Guide',
    'Strumenti',
    'Developer'
];

const html_categories = document.querySelectorAll(".portal__content__heading h2");

function getLanguageFromURL(url) {
    if (url.includes('/?l=en')) return 'en';
    if (url.includes('/?l=es')) return 'es';
    if (url.includes('/?l=it')) return 'it';
    return 'default';
}

function translateCategories(html_element) {
    const categorie = html_element.innerText;

    for (let i = 0; i < categories_PT.length; i++) {
        if (categorie === categories_PT[i]) {
            const language = getLanguageFromURL(document.URL);

            switch (language) {
                case 'en':
                    html_element.innerText = categories_EN[i];
                    break;
                case 'es':
                    html_element.innerText = categories_ES[i];
                    break;
                case 'it':
                    html_element.innerText = categories_IT[i];
                    break;
                default:
                    break;
            }
            break; // Termina o loop depois de encontrar a correspondência
        }
    }
}

html_categories.forEach(translateCategories);