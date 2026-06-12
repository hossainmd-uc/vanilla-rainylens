import './style.css';
import { mountHeader } from './components/Header.js';
import { startRouter } from './router.js';

const app = document.getElementById('app');
mountHeader(app);

const content = document.createElement('div');
content.id = 'content';
app.appendChild(content);

startRouter(content);
