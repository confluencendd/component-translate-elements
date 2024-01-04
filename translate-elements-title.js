/*    

    SCRIPT DESTINADO A TRADUZIR OS TÍTULOS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA   

*/

//Títulos em Portugues
const titles_documents_PT = [
    'Analytics',//título para teste
    'Comece aqui',
    'FAQ, Tutoriais e Treinamentos',
    'Guia rápido',
    'Manual Conceitual de Negócio',
    'Manual do Usuário',
    'Manual de Instalação do Agente',
    'Manual de Integrações',
    'Configurações de treinamento',
    'Trilhas',
    'Criação de treinamento presencial',
    'Aprofundando o conhecimento',
    'Microlearning e podcast',
    'Certificação',
    'Biblioteca',
    'Gameficação',
    'Webinar',
    'Guia de compatibilidade de fabricantes',// somente ingles e portugues
    'Guia de módulos do MPS', // somente ingles e espanhol
    'Solução de problemas',
    'Visão geral',
    'Usando o NDD Orbix',
    'FAQ, Soluções, Tutoriais e Treinamentos'
];

//Títulos em Ingles
const titles_documents_EN = [
    'Ingles',//título para teste
    'Getting started',
    'FAQ, Totorials and Trainings',
    'Quick guide',
    'Conceptual Business Manual',
    'User Manual',
    'Agent Installation Manual',
    'Integrations Manual',
    'Training settings',
    'Tracks',
    'Creating in person training',
    'Deepening the knowledge',
    'Microlearning and podcast',
    'Certification',
    'Library',
    'Gamification',
    'Webinar',
    'Manufacturer Compatibility Guide',
    '',
    'Troubleshooting',
    'Overview',
    'Using NDD Orbix',
    'FAQ, Troubleshooting, How to and Trainings'
];

//Títulos em Espanhol
const titles_documents_ES = [
    'Espanhol',//título para teste
    'Empieza aquí',
    'FAQ, Totorials and Trainings',
    'Guía rápida',
    'Manual Conceptual de Negocio',
    'Manual del Usuario',
    'Manual de Instalación del Agente',
    'Manual de Integraciones',
    'Configuraciones de entrenamiento',
    'Trillas',
    'Creando entrenamiento en persona',
    'Profundizando el conocimiento',
    'Microlearning y podcast',
    'Certificación',
    'Biblioteca',
    'Gamificación',
    'Webinar',
    '',
    'NDD Print MPS',
    'Solución de problemas',
    'Visión general',
    'Usando el NDD Orbix',
    'FAQ, Soluciones, Tutoriales y Entrenamientos'
];

//Títulos em Italiano
const titles_documents_IT = [
    'Italiano',//título para teste
    'Inizia qui',
    'FAQ, Tutorial e Formazione',
    'Guida rapida',
    '', //não é mais utilizado no Orbix
    '', //não é mais utilizado no Orbix
    '', //não é mais utilizado no Orbix
    'Manuale di Integrazione',
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Kubo
    '', //somente no Print
    '', //somente no Print
    'Soluzione dei problemi',
    'Visione generale',
    'Utilizzare NDD Orbix',
    'FAQ, Soluzioni, Tutorial e Formazione'
];

const html_titles = document.querySelectorAll("h3.tile__headline > a");

function getLanguageFromURL(url) {
    if (url.includes('/?l=en')) return 'en';
    if (url.includes('/?l=es')) return 'es';
    if (url.includes('/?l=it')) return 'it';
    return 'default';
}

function translateTitles(html_element) {
    const title = html_element.innerText;

    for (let i = 0; i < titles_documents_PT.length; i++) {
        if (title === titles_documents_PT[i]) {
            const language = getLanguageFromURL(document.URL);

            switch (language) {
                case 'en':
                    html_element.innerText = titles_documents_EN[i];
                    break;
                case 'es':
                    html_element.innerText = titles_documents_ES[i];
                    break;
                case 'it':
                    html_element.innerText = titles_documents_IT[i];
                    break;
                default:
                    break;
            }
            break; // Termina o loop depois de encontrar a correspondência
        }
    }
}

html_titles.forEach(translateTitles);