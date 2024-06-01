import { Table } from 'src/app/shared/interfaces/table.interface';
import { TemplateOrdredList } from 'src/app/shared/interfaces/template-ordred-list.interface';

export const TEMPLATE_PREREQUIS: TemplateOrdredList = {
  title: 'Pré-requis :',
  paragraph:
    "Merci d'utiliser les technologies suivantes pour réaliser le kata :",
  list: ['Maven', 'Java ou Kotlin', 'Spring boot', 'Angular', 'Bootstrap 5'],
};

export const TEMPLATE_GITHUB: TemplateOrdredList = {
  paragraph: 'Le kata doit être publié sur github et contenir deux dossiers :',
  list: [
    "un dossier kata-backend dans lequel la commande 'mvn spring-boot:run' permet de lancer le backend",
    "un dossier kata-frontend dans lequel la commande 'npm start' permet de lancer le frontend",
  ],
};

export const TEMPLATE_BACKEND: TemplateOrdredList = {
  title: 'Enoncé Backend :',
  paragraph:
    'Ecrire un algorithme qui transforme une nombre (compris entre 0 et 100) en une chaîne de characters. Cet algorithme doit suivre les règles suivantes :',
  list: [
    "Si le nombre est divisible par 3 ou s'il contient 3, la chaîne de characters doit contenir «FOO»",
    "Si le nombre est divisible par 5 ou s'il contient 5, la chaîne de characters doit contenir «BAR»",
    'Si le nombre contient 7, la chaîne de characters doit contenir «QUIX»',
    'La règle "divisible par" est plus prioritaire que la règle "contient"',
    'Le contenu est analysé de gauche à droite',
    "Si aucune des règles n'est vérifiée, retourner la nombre en entrée sous forme de chaîne de characters",
  ],
};

export const TEMPLATE_FRONTEND: TemplateOrdredList = {
  title: 'Enoncé Frontend :',
  paragraph:
    "Créer une page contenant l'énoncé du kata et un bouton permettant de tester l'api backend. Ce bouton doit ouvrir une modal contenant un formulaire permettant de saisir le nombre en entrée. Cet input doit être validé dans le front end.",
};

export const Template_EXAMPLE: Table = {
  title: 'Exemples :',
  header: ['Input', 'Output'],
  body: [
    { input: 1, output: '"1"' },
    { input: 3, output: '"FOOFOO"' },
    { input: 5, output: '"BARBAR"' },
    { input: 7, output: '"QUIX"' },
    { input: 9, output: '"FOO"' },
    { input: 51, output: '"FOOBAR"' },
    { input: 53, output: '"BARFOO"' },
    { input: 33, output: '"FOOFOOFOO"' },
    { input: 33, output: '"FOOFOOFOO"' },
    { input: 15, output: '"FOOBARBAR"' },
    { input: '...', output: '...' },
  ],
};

export const Template_DELIVERY: TemplateOrdredList = {
  title: 'Livraison :',
  paragraph: 'Lien kata publié sur github :',
  listWithLink: [
    {
      textBlod: '[Frontend]',
      link: 'https://github.com/iraqihoussaini/kata-frontend',
      labelLink: 'https://github.com/iraqihoussaini/kata-frontend',
    },
    {
      textBlod: '[Backend]',
      link: 'https://github.com/iraqihoussaini/kata-backend',
      labelLink: 'https://github.com/iraqihoussaini/kata-backend',
    },
    {
      textBlod: '[Document]',
      link: '/assets/Backend-Kata.pdf',
      labelLink: 'Backend-Kata.pdf',
    },
  ],
};
