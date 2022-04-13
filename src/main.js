import './styles/_all.scss'
import MainComponent from './components/MainComponent'
import html from "./index.html";
const component = MainComponent('my text component')
document.querySelector('title').appendChild(component)

