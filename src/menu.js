const createMenu = () => {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content')
    menuContent.classList.add("description");
    const header = document.createElement('h1');
    header.classList.add("title");
    header.textContent = "Menu";
    menuContent.appendChild(header);
    
    let item = document.createElement('p');
    item.textContent = "Pistachio Cream Latte...5";
    menuContent.appendChild(item);
    item = document.createElement('p');
    item.textContent = "Hazelnut Cortado...4";
    menuContent.appendChild(item);
    item = document.createElement('p');
    item.textContent = "Blueberry Lemon Scone...3.5";
    menuContent.appendChild(item);

    
    const content = document.getElementById('content');
    content.appendChild(menuContent);
};

export {createMenu};