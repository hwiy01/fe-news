import { createHeader } from './components/header';
import './styles/index.css';

const app = document.querySelector('#app');

app.innerHTML =  `
  <article class="news"></article>
`
const layoutMain = app.querySelector('.news');
const header = createHeader();

layoutMain.prepend(header);
