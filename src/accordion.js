import renderNames from "./renderNames";

const accordion = (books) => {

    const section = document.createElement('section');
    const accordion = document.createElement('div');

    section.className = "container";
    section.style.padding = "40px 0";
    accordion.className = "accordion accordion-flush";
    accordion.id = "accordion";

    document.querySelector('body').appendChild(section);
    section.appendChild(accordion);

    renderNames(books);

}

export default accordion;