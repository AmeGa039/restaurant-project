const menuItems = [
    {
        category: 'pijefreskuese',
        name: 'Coca-cola',
        image: 'https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg',
        description: 'Pije e Gazuar',
        price: '1.50 euro'
    },
    {
        category: 'pijefreskuese',
        name: 'Golden-Eagle',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeTfbLls8jYCm-fFaQDEey5W5_HFtrOWnJA&s',
        description: 'Pije e Gazuar',
        price: '1.50 euro'
    },
    {
        category: 'pijefreskuese',
        name: 'Ice Tea',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRm2Gm1leRTF1Z_YzuyX8ctt8R0yUyHB-TQ&s',
        description: 'Pije e Gazuar',
        price: '0.80 euro'
    },
    {
        category: 'pijefreskuese',
        name: 'Lemonade',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjNFL-RVj1nHq4WHo3kTPZHz0h6smn9aW9w&s',
        description: 'Pije e Gazuar',
        price: '0.50 euro'
    },
    {
        category: 'mengjesi',
        name: 'Vezë Benedikt',
        image: 'https://i.ytimg.com/vi/QtJGScXwuX8/hqdefault.jpg',
        description: 'Mengjes',
        price: '4.80 euro'
    },
    {
        category: 'mengjesi',
        name: 'Omletë natyral',
        image: 'https://agroweb.org/wp-content/uploads/2018/01/omletaa.jpg',
        description: 'Mengjes',
        price: '4.50 euro'
    },
    {
        category: 'mengjesi',
        name: 'Briosh',
        image: 'https://cdnimpuls.com/alfapress.al/media3/-640-0-dcae9894-4679-491e-b7f4-1741160c3f9c-110.jpg',
        description: 'Mengjes',
        price: '3.20 euro'
    },
    {
        category: 'mengjesi',
        name: 'Mengjes Shqiptar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLGedzcSOh67qBUjF0jeob9Hw1sykn28mUw&s',
        description: 'Mengjes',
        price: '3.80 euro'
    },
    {
        category: 'desertet',
        name: 'Trileqe',
        image: 'https://fol.mk/wp-content/uploads/2018/03/Trileqe.jpg',
        description: 'Pije e Gazuar',
        price: '2 euro'
    },
    {
        category: 'desertet',
        name: 'Kunete',
        image: 'https://marianicutar.ro/wp-content/uploads/2021/02/retete-vegetariene-sanatoase-mancare-sanatoasa-mancare-de-post-retete-sanatoase-151.jpg',
        description: 'Pije e Gazuar',
        price: '2 euro'
    },
    {
        category: 'desertet',
        name: 'Bakllave',
        image: 'https://www.artigatimit.com/wp-content/uploads/2012/11/receta-bakllava-shqiptare-artigatimit-dessert-embelsira-shqiptare-tradicionale.jpg',
        description: 'Pije e Gazuar',
        price: '2 euro'
    },
    {
        category: 'desertet',
        name: 'Puding me çokollatë',
        image: 'https://everydaypie.com/wp-content/uploads/2024/01/dark-chocolate-pudding-8.jpg',
        description: 'Pije e Gazuar',
        price: '1.5 euro'
    },
];

function filterMenu() {
    const selectCategory = document.getElementById('categorySelect').value;
    const menuGallery = document.getElementById('menuGallery'); // Make sure this ID matches your HTML

    menuGallery.innerHTML = '';

    const filteredItems = menuItems.filter(item => {
        return selectCategory === 'all' || item.category === selectCategory;
    });

    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;

        menuGallery.appendChild(menuItemDiv);
    });

    if (filteredItems.length === 0) {
        menuGallery.innerHTML = `<p>Sorry, no items found in this category</p>`;
    }
}

// Assuming you want to call filterMenu on a change event
document.getElementById('categorySelect').addEventListener('change', filterMenu);

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "1",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: false
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    initialSlide: 0,
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      }
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      }
    }
  });            