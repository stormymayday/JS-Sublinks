const getElement = (selection) => {

    const element = document.querySelector(selection);

    if (element) {

        return element;

    } else {

        throw new Error(`${selection} selection was not found`);

    }

};

export default getElement;