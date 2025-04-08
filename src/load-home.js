const loadHomeContent = () => {
    const content = document.getElementById('content');
    const img1 = document.createElement('img');
   
    img1.width = "600";
    img1.src = 'https://static.wixstatic.com/media/cca33e_dc7f673671ac4894a0a8388ffc286f0e~mv2.jpg/v1/fill/w_1960,h_1588,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/cca33e_dc7f673671ac4894a0a8388ffc286f0e~mv2.jpg';

    const text = document.createElement('div');
    text.classList.add("text");
    const tag = document.createElement('p');
    tag.classList.add("tag");
    tag.textContent = "Welcome to your new favorite cafe and brunch spot.";
    const description = document.createElement('p');
    description.textContent = "Fresh baked goods daily using the highest quality ingredients. A variety of delicious breakfast items and premium coffee menu of handcrafted espresso drinks."
    description.classList.add("description");

    const hours = document.createElement('p');
    hours.textContent = "Hours\nSunday: 8am - 8pm\nMonday-Friday: 6am - 10pm\nSaturday: 8am - 10pm";
    hours.classList.add("description");
    
    const img2 = document.createElement('img');
    img2.height = "400";
    img2.src = "https://c0.wallpaperflare.com/preview/644/703/765/united-states-la-mirada-enchanted-coffee-bar-latte-art.jpg";
    
    text.appendChild(tag);
    text.appendChild(img1);
    text.appendChild(description);
    text.appendChild(img2);
    text.appendChild(hours);
    
    content.appendChild(text);
};

export {loadHomeContent};