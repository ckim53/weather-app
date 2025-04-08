const contactPage = () => {
    const contactInfo = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = "Contact Us";
    header.classList.add("title");
    contactInfo.appendChild(header);
    let item = document.createElement('p');
    item.textContent = "Owner/Manager: Christina Kim";
    contactInfo.appendChild(item);
    item = document.createElement('p');
    item.textContent = "(555) 555-5555";
    contactInfo.appendChild(item);
    item = document.createElement('p');
    item.textContent = "christina@cafe.com";
    contactInfo.appendChild(item);
    contactInfo.classList.add("description");

    const content = document.getElementById('content');
    content.appendChild(contactInfo);
};

export {contactPage};