import sublinks from './data.js';
import getElement from './utils/getElement.js';

const toggleBtn = getElement('.toggle-btn');
const closeBtn = getElement('.close-btn');
const sidebarWrapper = getElement('.sidebar-wrapper');
const sidebarLinksContainer = getElement('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const subMenu = getElement('.submenu');
// const hero = getElement('.hero');
// const navbar = getElement('.nav');

// Show Sidebar Functionality
toggleBtn.addEventListener('click', () => {

    sidebarWrapper.classList.add('show');

});

// Close Sidebar Functionality
closeBtn.addEventListener('click', () => {

    sidebarWrapper.classList.remove('show');

});

// console.table(sublinks);

// Setting the Sidebar
sidebarLinksContainer.innerHTML = sublinks.map((item) => {

    // console.log(item);

    const { page, links } = item;

    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links.map((link) => {

        // console.log(link);

        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;

    }).join('')}
    </div>
    </article>`;

}).join('');

linkBtns.forEach((btn) => {

    btn.addEventListener('mouseover', function (e) {

        // Getting the textContent of the current target
        const text = e.currentTarget.textContent;

        const tempBtn = e.currentTarget.getBoundingClientRect();

        const bottom = tempBtn.bottom - 3;
        console.log(bottom);

        subMenu.classList.add('show');

    });

});