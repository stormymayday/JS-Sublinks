import sublinks from './data.js';
import getElement from './utils/getElement.js';

const toggleBtn = getElement('.toggle-btn');
const closeBtn = getElement('.close-btn');
const sidebarWrapper = getElement('.sidebar-wrapper');
const sidebarLinksContainer = getElement('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const subMenu = getElement('.submenu');
const hero = getElement('.hero');
// console.log(sidebarLinks);