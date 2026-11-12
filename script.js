const translations = {
  pt: {
    brandAria:'RobotProgress Assistência Técnica Unipessoal, Limitada — página inicial',navAria:'Navegação principal',languageAria:'Escolher idioma',navAbout:'A empresa',navEquipment:'Equipamento',navContacts:'Contactos',topCta:'Fale connosco',heroImage:'Braço robótico e modelo digital',heroEyebrow:'Reparação e assistência de equipamento industrial',heroTitle1:'Precisão na reparação.',heroTitle2:'Fiabilidade em operação.',heroCopy:'Colocamos o equipamento industrial novamente em funcionamento, com competência técnica, atenção ao detalhe e foco na continuidade da sua produção.',heroCta:'Fale connosco',heroAbout:'Conheça a empresa',heroCaption1:'COMPETÊNCIA DE ENGENHARIA',heroCaption2:'ASSISTÊNCIA INDUSTRIAL',aboutEyebrow:'A EMPRESA',aboutTitle1:'A maquinaria deve',aboutTitle2:'estar a funcionar.',aboutLead:'A RobotProgress Assistência Técnica Unipessoal, Limitada é especializada na reparação e manutenção de equipamento industrial.',aboutText1:'Ajudamos as empresas a manter a fiabilidade dos seus sistemas de produção: diagnosticamos avarias, identificamos as suas causas e efetuamos reparações de acordo com os requisitos técnicos do equipamento e as necessidades da produção.',aboutText2:'Valorizamos a precisão, uma comunicação clara e resultados práticos que ajudam a reduzir paragens e a prolongar a vida útil do equipamento.',service1:'Diagnóstico',service2:'Reparação',service3:'Assistência',service4:'Seleção de equipamento',aboutText3:'Fazemos também a renovação de máquinas industriais, substituindo equipamento desatualizado por soluções modernas.',service5:'Renovação',aboutText4:'Reparamos placas eletrónicas, servo motores, conversores e sistemas CNC de marcas como Siemens, Indramat, Heidenhain, Fagor, Elesta e Baumüller, entre outras.',service6:'Placas eletrónicas',service7:'Servo motores',service8:'Sistemas CNC',equipmentEyebrow:'DISPONIBILIDADE',equipmentTitle:'Equipamento usado',equipmentIntro:'Equipamento selecionado para necessidades industriais. Contacte-nos para consultar a lista atualizada e obter mais informações.',catalogLabel:'Equipamento para venda',photosLabel:'Fotos',catMotors:'Motores',catControllers:'Controladores',catOther:'Outro',catSiemens:'Siemens',catIndramat:'Indramat',catHeidenhain:'Heidenhain',catalogHeading:'Consulte a disponibilidade',catalogCopy:'Equipamento disponível para venda. Contacte-nos para obter especificações, fotografias adicionais e condições de fornecimento.',catalogCta:'Pedir informações',expand:'Expandir',collapse:'Recolher',contactEyebrow:'CONTACTOS',contactTitle1:'Vamos falar',contactTitle2:'do seu projeto.',contactIntro:'Contacte-nos para reparação, manutenção ou seleção de equipamento.',companyLabel:'EMPRESA',phoneLabel:'TELEFONE',phonePlaceholder:'Adicionar número de telefone',emailPlaceholder:'Adicionar endereço de email',addressLabel:'MORADA',addressPlaceholder:'Adicionar cidade ou morada',contactNote:'Substitua estas indicações pelos seus contactos antes de publicar.',footerTagline:'Reparação de equipamento industrial',description:'Reparação e diagnóstico de equipamento industrial: placas eletrónicas, servo motores, CNC e inversores. Renovação de máquinas e equipamento usado para venda.',title:'Reparação de equipamento industrial, CNC e servo motores | RobotProgress Assistência Técnica Unipessoal, Limitada'
  },
  en: {
    brandAria:'RobotProgress Assistência Técnica Unipessoal, Limitada — home',navAria:'Main navigation',languageAria:'Choose language',navAbout:'About us',navEquipment:'Equipment',navContacts:'Contact',topCta:'Get in touch',heroImage:'Robotic arm and digital model',heroEyebrow:'Industrial equipment repair and service',heroTitle1:'Precision in every repair.',heroTitle2:'Reliability in operation.',heroCopy:'We get industrial equipment back to work with technical expertise, attention to detail and a focus on keeping your production running.',heroCta:'Get in touch',heroAbout:'About the company',heroCaption1:'ENGINEERING EXPERTISE',heroCaption2:'INDUSTRIAL SERVICE',aboutEyebrow:'ABOUT US',aboutTitle1:'Your equipment',aboutTitle2:'should keep working.',aboutLead:'RobotProgress Assistência Técnica Unipessoal, Limitada specialises in the repair and maintenance of industrial equipment.',aboutText1:'We help businesses keep production systems reliable: diagnosing faults, identifying their causes and carrying out repairs in line with equipment requirements and production needs.',aboutText2:'We value precision, clear communication and practical results that help reduce downtime and extend equipment service life.',service1:'Diagnostics',service2:'Repair',service3:'Maintenance',service4:'Equipment sourcing',aboutText3:'We also renovate industrial machines, replacing outdated equipment with modern solutions.',service5:'Renovation',aboutText4:'We repair electronic boards, servo motors, drives and CNC systems from brands such as Siemens, Indramat, Heidenhain, Fagor, Elesta and Baumüller, among others.',service6:'Electronic boards',service7:'Servo motors',service8:'CNC systems',equipmentEyebrow:'AVAILABLE',equipmentTitle:'Used equipment',equipmentIntro:'Selected equipment for industrial needs. Contact us for the current list and further details.',catalogLabel:'Equipment for sale',photosLabel:'Photos',catMotors:'Motors',catControllers:'Controllers',catOther:'Other',catSiemens:'Siemens',catIndramat:'Indramat',catHeidenhain:'Heidenhain',catalogHeading:'Check availability',catalogCopy:'Available for sale. Contact us for specifications, additional photos and supply terms.',catalogCta:'Request details',expand:'Expand',collapse:'Collapse',contactEyebrow:'CONTACT',contactTitle1:'Let’s discuss',contactTitle2:'your requirements.',contactIntro:'Get in touch about repairs, maintenance or equipment sourcing.',companyLabel:'COMPANY',phoneLabel:'PHONE',phonePlaceholder:'Add phone number',emailPlaceholder:'Add email address',addressLabel:'ADDRESS',addressPlaceholder:'Add city or address',contactNote:'Replace these prompts with your contact details before publishing.',footerTagline:'Industrial equipment repair',description:'Industrial equipment repair and diagnostics: electronic boards, servo motors, CNC and drives. Machine renovation and used equipment for sale.',title:'Industrial equipment repair, CNC and servo motors | RobotProgress Assistência Técnica Unipessoal, Limitada'
  },
};

const catalog = document.querySelector('.catalog');
const catalogState = document.querySelector('.catalog-state');

function setLanguage(language) {
  const dictionary = translations[language] || translations.pt;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const value = dictionary[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  updateCatalogLabel(language);
  try { localStorage.setItem('roboprogress-language', language); } catch (_) {}
}

function updateCatalogLabel(language = document.documentElement.lang) {
  const dictionary = translations[language] || translations.pt;
  catalogState.textContent = catalog.open ? dictionary.collapse : dictionary.expand;
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
catalog.addEventListener('toggle', () => updateCatalogLabel());
document.getElementById('year').textContent = new Date().getFullYear();

let initialLanguage = 'pt';
try {
  const savedLanguage = localStorage.getItem('roboprogress-language');
  if (savedLanguage && translations[savedLanguage]) initialLanguage = savedLanguage;
} catch (_) {}
setLanguage(initialLanguage);

