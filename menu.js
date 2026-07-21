// Menu for website

const menu = [
  {
    category: "Starters and Soups",
    items: [
      {
        name: "Crispy Pancake Rolls (2)",
        price: 4.3,
      },
      {
        name: "Prawn Crackers",
        price: 3.0,
      },
      {
        name: "Chicken and Sweetcorn Soup",
        price: 4.3,
      },
      {
        name: "Chicken Noodle Soup",
        price: 4.3,
      },
      {
        name: "Crispy Vegetable Pancake Rolls (8)",
        price: 4.3,
      },
      {
        name: "Sesame Prawn Toast (6)",
        price: 6.2,
      },
      {
        name: "Skewered Satay Stick Chicken (4)",
        price: 6.6,
      },
      {
        name: "Skewered Satay Stick King Prawn (4)",
        price: 7.7,
      },
      {
        name: "Skewered Satay Stick Beef (4)",
        price: 6.6,
      },
    ],
  },

  {
    category: "Spare Rib Dishes",
    items: [
      {
        name: "Crispy Spare Ribs in Spicy Garlic Sauce",
        price: 8.4,
      },
      {
        name: "Cantonese Style Spare Ribs with Vegetables",
        price: 8.4,
      },
      {
        name: "Spare Ribs in Barbecue Sauce",
        price: 8.2,
      },
      {
        name: "Spare Ribs in Sweet and Sour Sauce",
        price: 8.2,
      },
      {
        name: "Spare Ribs in Black Bean Sauce",
        price: 8.2,
      },
      {
        name: "Crispy Spare Ribs in Hoi Sin Sauce",
        price: 8.4,
      },
      {
        name: "Salt and Pepper Chilli Spare Ribs",
        price: 8.4,
      },
      {
        name: "Crispy Aromatic Spare Ribs",
        price: 8.2,
      },
    ],
  },

  {
    category: "Roast Duck Dishes",
    items: [
      {
        name: "Roast Duck with Mixed Vegetables",
        price: 9.2,
      },
      {
        name: "Roast Duck with Pineapple",
        price: 9.2,
      },
      {
        name: "Roast Duck with Mushrooms",
        price: 9.2,
      },
      {
        name: "Roast Duck with Beansprouts",
        price: 9.2,
      },
      {
        name: "Roast Duck with Plum Sauce",
        price: 9.4,
      },
      {
        name: "Roast Duck & Chinese Roast Pork with Egg Fried Rice & BBQ Sauce",
        price: 8.7,
      },
      {
        name: "Crispy Aromatic Duck (Half)",
        price: 21.5,
      },
      {
        name: "Crispy Aromatic Duck (Quarter)",
        price: 14.5,
      },
    ],
  },

  {
    category: "Squid Dishes",
    items: [
      {
        name: "Squid with Ginger and Spring Onion",
        price: 8.4,
      },
      {
        name: "Squid with Fresh Chilli and Black Bean Sauce",
        price: 8.7,
      },
      {
        name: "Squid with Mixed Vegetables",
        price: 8.4,
      },
      {
        name: "Squid with Pineapple",
        price: 8.4,
      },
      {
        name: "Squid with Mushrooms",
        price: 8.4,
      },
      {
        name: "Squid with Beansprouts",
        price: 8.4,
      },
      {
        name: "Squid with Sweet and Sour Sauce",
        price: 8.4,
      },
      {
        name: "Squid with Garlic Sauce",
        price: 8.4,
      },
    ],
  },

  {
    category: "King Prawn Dishes",
    items: [
      {
        name: "King Prawn with Fresh Ginger and Spring Onion",
        price: 9.4,
      },
      {
        name: "King Prawn with Cashew Nuts",
        price: 9.4,
      },
      {
        name: "King Prawn with Green Peppers and Black Bean Sauce",
        price: 9.4,
      },
      {
        name: "King Prawn with Fresh Chilli and Black Bean Sauce",
        price: 9.6,
      },
      {
        name: "King Prawn in Cantonese Sauce with Mixed Vegetables",
        price: 9.4,
      },
      {
        name: "Kung Po King Prawn (Sweet and Sour Spicy)",
        price: 9.4,
      },
      {
        name: "King Prawn with Bamboo Shoots and Water Chestnuts",
        price: 9.4,
      },
      {
        name: "King Prawn with Baby Corn and Straw Mushrooms",
        price: 9.2,
      },
      {
        name: "King Prawn with Pineapple",
        price: 9.2,
      },
      {
        name: "King Prawn with Fresh Tomato",
        price: 9.2,
      },
      {
        name: "King Prawn with Fresh Mushrooms",
        price: 9.2,
      },
      {
        name: "Garlic King Prawns",
        price: 9.2,
      },
      {
        name: "King Prawn in Oyster Sauce",
        price: 9.2,
      },
      {
        name: "King Prawn Chop Suey (Mixed Vegetables)",
        price: 9.2,
      },
      {
        name: "King Prawn in Hot Spicy Sauce",
        price: 9.4,
      },
      {
        name: "Crispy King Prawn Peking Style",
        price: 9.4,
      },
      {
        name: "King Prawn with Broccoli (Black Bean or Oyster Sauce)",
        price: 9.4,
      },
      {
        name: "Deep Fried Salt and Pepper Chilli King Prawns",
        price: 9.4,
      },
    ],
  },

  {
    category: "Chicken Dishes",
    items: [
      {
        name: "Special Chop Suey (Mixed Meats and King Prawns)",
        price: 7.9,
      },
      {
        name: "Sliced Chicken and Roast Pork with Beansprouts",
        price: 7.0,
      },
      {
        name: "Chicken in Lemon Sauce",
        price: 7.7,
      },
      {
        name: "Chicken with Fresh Ginger and Spring Onions",
        price: 7.9,
      },
      {
        name: "Chicken with Green Peppers in Black Bean Sauce",
        price: 7.9,
      },
      {
        name: "Chicken with Fresh Chilli in Black Bean Sauce",
        price: 8.2,
      },
      {
        name: "Chicken in Oyster Sauce",
        price: 7.9,
      },
      {
        name: "Chicken in Cantonese Sauce",
        price: 7.8,
      },
      {
        name: "Chicken with Cashew Nuts",
        price: 8.2,
      },
      {
        name: "Chicken with Fresh Mushrooms",
        price: 7.8,
      },
      {
        name: "Chicken with Fresh Tomato",
        price: 7.6,
      },
      {
        name: "Chicken with Pineapple",
        price: 7.6,
      },
      {
        name: "Kung Po Chicken (Sweet and Sour Spicy)",
        price: 7.8,
      },
      {
        name: "Chicken with Bamboo Shoots and Water Chestnuts",
        price: 7.4,
      },
      {
        name: "Chicken Chop Suey (Mixed Vegetables)",
        price: 7.4,
      },
      {
        name: "Crispy Chicken Peking Style",
        price: 7.9,
      },
      {
        name: "Chicken with Babycorn and Straw Mushrooms",
        price: 7.5,
      },
      {
        name: "Chicken in Hot Spicy Sauce",
        price: 7.8,
      },
      {
        name: "Crispy Pork Peking Style",
        price: 7.8,
      },
      {
        name: "Chicken with Broccoli (Black Bean or Oyster Sauce)",
        price: 7.9,
      },
      {
        name: "Deep Fried Salt and Pepper Chilli Chicken",
        price: 8.0,
      },
    ],
  },

  {
    category: "Beef Dishes",
    items: [
      {
        name: "Beef with Fresh Ginger and Spring Onions",
        price: 8.2,
      },
      {
        name: "Beef with Onions",
        price: 7.8,
      },
      {
        name: "Deep Fried Crispy Beef in Hot Spicy Sauce",
        price: 8.3,
      },
      {
        name: "Beef with Fresh Tomato",
        price: 7.9,
      },
      {
        name: "Kung Po Beef (Sweet and Sour Spicy)",
        price: 8.0,
      },
      {
        name: "Beef with Fresh Chilli in Black Bean Sauce",
        price: 8.4,
      },
      {
        name: "Beef with Green Peppers in Black Bean Sauce",
        price: 8.2,
      },
      {
        name: "Beef Chop Suey (Mixed Vegetables)",
        price: 7.8,
      },
      {
        name: "Beef in Oyster Sauce",
        price: 7.9,
      },
      {
        name: "Beef with Bamboo Shoots and Water Chestnuts",
        price: 7.7,
      },
      {
        name: "Beef with Cashew Nuts",
        price: 8.4,
      },
      {
        name: "Beef with Fresh Mushrooms",
        price: 7.7,
      },
      {
        name: "Beef in Cantonese Sauce",
        price: 8.0,
      },
      {
        name: "Beef in Hot Spicy Sauce",
        price: 8.1,
      },
      {
        name: "Beef with Broccoli (Black Bean or Oyster Sauce)",
        price: 8.3,
      },
    ],
  },

  {
    category: "Jade Palace Specials",
    items: [
      {
        name: "Jade Palace Special (Chicken, Roast Pork, King Prawn & Beef with Mixed Vegetables, served with Boiled Rice)",
        price: 8.4,
      },
      {
        name: "Lammy Special (Chicken, Roast Pork, King Prawn with Mixed Vegetables carefully selected from the son of the business)",
        price: 9,
      },
    ],
  },

  {
    category: "Fried Rice Dishes",
    items: [
      {
        name: "Special Fried Rice",
        price: 7.9,
      },
      {
        name: "King Prawn Fried Rice",
        price: 8.7,
      },
      {
        name: "Shrimp Fried Rice",
        price: 7.7,
      },
      {
        name: "Chicken Fried Rice",
        price: 7.7,
      },
      {
        name: "Singapore Fried Rice (Spicy)",
        price: 7.9,
      },
      {
        name: "Young Chow Fried Rice",
        price: 7.8,
      },
      {
        name: "Roast Duck Fried Rice",
        price: 9.0,
      },
    ],
  },

  {
    category: "Chow Mein Dishes",
    items: [
      {
        name: "Special Chow Mein (Mixed Meats and King Prawns)",
        price: 8.4,
      },
      {
        name: "King Prawn Chow Mein",
        price: 8.8,
      },
      {
        name: "Shrimp Chow Mein",
        price: 7.7,
      },
      {
        name: "Chicken Chow Mein",
        price: 7.7,
      },
      {
        name: "Beef Chow Mein",
        price: 7.9,
      },
      {
        name: "Chinese Roast Pork Chow Mein",
        price: 7.9,
      },
      {
        name: "Singapore Chow Mein (Spicy)",
        price: 8.0,
      },
      {
        name: "Roast Duck Chow Mein",
        price: 9.0,
      },
    ],
  },

  {
    category: "Curry Dishes",
    items: [
      {
        name: "Special Curry (Mixed Meats and King Prawns)",
        price: 7.8,
      },
      {
        name: "King Prawn Curry",
        price: 7.9,
      },
      {
        name: "Shrimp Curry",
        price: 6.9,
      },
      {
        name: "Chicken Curry",
        price: 6.9,
      },
      {
        name: "Beef Curry",
        price: 7.0,
      },
      {
        name: "Chinese Roast Pork Curry",
        price: 6.9,
      },
      {
        name: "Roast Duck Curry",
        price: 7.9,
      },
    ],
  },

  {
    category: "Sweet and Sour Dishes",
    items: [
      {
        name: "Sweet & Sour King Prawns in Batter",
        price: 8.9,
      },
      {
        name: "Sweet & Sour King Prawns (Hong Kong Style)",
        price: 9.0,
      },
      {
        name: "Sweet & Sour Chicken in Batter",
        price: 7.7,
      },
      {
        name: "Sweet & Sour Chicken (Hong Kong Style)",
        price: 7.9,
      },
      {
        name: "Sweet & Sour Pork (Hong Kong Style)",
        price: 7.9,
      },
      {
        name: "Mixed Sweet & Sour King Prawns & Chicken in Batter",
        price: 8.0,
      },
    ],
  },

  {
    category: "Satay Dishes",
    items: [
      {
        name: "Special Satay (Mixed Meats and King Prawns)",
        price: 8.4,
      },
      {
        name: "King Prawn Satay",
        price: 8.7,
      },
      {
        name: "Chicken Satay",
        price: 7.7,
      },
      {
        name: "Beef Satay",
        price: 7.9,
      },
    ],
  },

  {
    category: "Szechuan Dishes",
    items: [
      {
        name: "Special Szechuan (Mixed Meats and King Prawns)",
        price: 8.1,
      },
      {
        name: "Szechuan King Prawns",
        price: 8.5,
      },
      {
        name: "Szechuan Chicken",
        price: 7.5,
      },
      {
        name: "Szechuan Beef",
        price: 7.6,
      },
    ],
  },

  {
    category: "Foo Young Dishes",
    items: [
      {
        name: "Special Foo Young",
        price: 7.5,
      },
      {
        name: "Shrimp Foo Young",
        price: 7.1,
      },
      {
        name: "Chicken Foo Young",
        price: 7.2,
      },
      {
        name: "Mushroom Foo Young",
        price: 6.4,
      },
      {
        name: "King Prawn Foo Young",
        price: 8.6,
      },
    ],
  },

  {
    category: "Vegetable Dishes",
    items: [
      {
        name: "Mushroom Fried Rice",
        price: 6.4,
      },
      {
        name: "Vegetable Chow Mein",
        price: 6.7,
      },
      {
        name: "Mushroom Chow Mein",
        price: 6.7,
      },
      {
        name: "Vegetable Curry (Includes Boiled Rice or Chips)",
        price: 7.3,
      },
      {
        name: "Mushroom Curry (Includes Boiled Rice or Chips)",
        price: 7.3,
      },
      {
        name: "Sweet and Sour Mixed Vegetables",
        price: 5.9,
      },
      {
        name: "Mixed Vegetables in Satay Sauce",
        price: 5.9,
      },
      {
        name: "Mixed Vegetables in Black Bean Sauce",
        price: 6.0,
      },
      {
        name: "Mixed Vegetables in Hot Spicy Sauce",
        price: 6.0,
      },
      {
        name: "Stir Fry Broccoli in Garlic Sauce",
        price: 5.9,
      },
      {
        name: "Singapore Vegetable Chow Mein (Spicy)",
        price: 7.0,
      },
    ],
  },

  {
    category: "Omelette Dishes",
    items: [
      {
        name: "Shrimp Omelette and Chips",
        price: 7.2,
      },
      {
        name: "Chicken Omelette and Chips",
        price: 7.3,
      },
      {
        name: "Mushroom Omelette and Chips",
        price: 6.5,
      },
      {
        name: "Special Omelette and Chips",
        price: 7.5,
      },
      {
        name: "Plain Omelette and Chips",
        price: 6.2,
      },
      {
        name: "King Prawn Omelette and Chips",
        price: 8.6,
      },
    ],
  },

  {
    category: "Desserts",
    items: [
      {
        name: "Banana Fritter in Syrup",
        price: 3.5,
      },
      {
        name: "Pineapple Fritter in Syrup",
        price: 3.5,
      },
    ],
  },

  {
    category: "Extras",
    items: [
      {
        name: "Boiled Rice",
        price: 3.8,
      },
      {
        name: "Egg Fried Rice",
        price: 4.1,
      },
      {
        name: "Chips",
        price: 3.6,
      },
      {
        name: "Salt & Pepper Chips",
        price: 4.4,
      },
      {
        name: "Three-in-One (Fried Rice, Chips & Curry Sauce)",
        price: 5.9,
      },
      {
        name: "Beansprouts",
        price: 4.0,
      },
      {
        name: "Fried Noodles with Beansprouts",
        price: 4.8,
      },
      {
        name: "Mixed Vegetables",
        price: 4.8,
      },
      {
        name: "Mushrooms",
        price: 4.7,
      },
      {
        name: "Garlic Mushrooms",
        price: 4.8,
      },
      {
        name: "Bamboo Shoots and Water Chestnuts",
        price: 4.3,
      },
      {
        name: "Curry Sauce",
        price: 2.8,
      },
      {
        name: "Sweet and Sour Sauce",
        price: 2.8,
      },
      {
        name: "Barbecue Sauce",
        price: 2.8,
      },
    ],
  },
];

// Set-Menu Array for end of Menu

const setMenus = [
  {
    name: "Set Meal A",
    prices: {
      2: 28.5,
      3: 35,
      4: 43.5,
    },
    dishes: [
      "Prawn Crackers",
      "Sweet & Sour Pork Hong Kong Style",
      "Beef & Green Peppers in Black Bean Sauce",
      "Chicken with Fresh Mushrooms",
      "Young Chow Fried Rice",
    ],
  },
  {
    name: "Set Meal B",
    prices: {
      2: 34.5,
      3: 42.5,
      4: 51,
    },
    dishes: [
      "Pancake Rolls",
      "Sweet & Sour Chicken Hong Kong",
      "Chicken in Oyster Sauce",
      "King Prawn with Cashew Nuts",
      "Satay Beef",
      "Young Chow Fried Rice",
    ],
  },
  {
    name: "Set Meal C",
    prices: {
      2: 40,
      3: 49,
      4: 58,
    },
    dishes: [
      "Cantonese Style Spare Ribs",
      "King Prawn with Green Peppers in Black Bean Sauce ",
      "Rotast Duck with Mixed Vegetables",
      "Satay Chicken",
      "Deep Fried Crispy Beef in Hot Spicy Sauce",
      "Young Chow Fried Rice",
    ],
  },
];

// Attach ID to each category

let currentId = 1;

menu.forEach((category) => {
  category.items.forEach((item) => {
    item.id = currentId;
    currentId++;
  });
});

// Render menu to browser

const menuContainer = document.getElementById("menu");

menu.forEach((foodCategory) => {
  const categorySection = document.createElement("div");
  categorySection.classList.add("menu-category");
  categorySection.id = foodCategory.category.toLowerCase().replaceAll(" ", "-");

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("animate", "fade-up");
  categoryTitle.textContent = foodCategory.category;

  menuContainer.appendChild(categorySection);
  categorySection.appendChild(categoryTitle);

  foodCategory.items.forEach((foodItem) => {
    const itemRow = document.createElement("div");
    itemRow.classList.add("menu-item", "animate", "fade-up");
    itemRow.innerHTML = `
        <span class="food-item">${foodItem.name}</span>
        <div class="menu-price-and-button">
        <span class="food-price">£${foodItem.price.toFixed(2)}</span>
        <button class="add-to-cart" data-id="${foodItem.id}">Add</button>
        </div>
        `;

    itemRow.dataset.id = foodItem.id;
    categorySection.appendChild(itemRow);
  });
});

// Render Set Menus to the Menu

const setMenuSection = document.createElement("section");

setMenuSection.classList.add("menu-category");

setMenuSection.id = "set-menu-dishes";

menuContainer.appendChild(setMenuSection);

setMenus.forEach((setMenu) => {

  const setMenuCard = document.createElement("div");
  setMenuCard.classList.add("set-menu-card");

  const title = document.createElement("h3");
  title.textContent = setMenu.name;
  setMenuCard.appendChild(title);

  const subTitle = document.createElement("p");

  subTitle.classList.add("set-menu-sub");

  subTitle.textContent = "Available for 2, 3, or 4 people";

  setMenuCard.appendChild(subTitle);

  const dishesList = document.createElement("ul");
  dishesList.classList.add("set-menu-list");

  setMenu.dishes.forEach((dish) => {

    const li = document.createElement("li");

    li.textContent = dish;

    dishesList.appendChild(li);
  })

  setMenuCard.appendChild(dishesList);

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("set-menu-prices");

  Object.entries(setMenu.prices).forEach(([people, price]) => {

    const button = document.createElement("button");

    button.classList.add("set-menu-btn");

    button.textContent = `${people} People • £${price.toFixed(2)}`;

    button.dataset.id = `set-menu-${setMenu.name}-${people}`;

    button.dataset.name = `${setMenu.name} (${people} People)`;

    button.dataset.price = price;

    priceContainer.appendChild(button);
  })

  setMenuCard.appendChild(priceContainer);

  setMenuSection.appendChild(setMenuCard);

});

// Category Slider/Scroll animation

document.querySelector('[data-target="starters-and-soups"]')
  ?.classList.add("active");

const setCategoryObserver = () => {
  const menuSections = document.querySelectorAll(".menu-category");
  const categoryButtons = document.querySelectorAll(".category-bar button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;

        const activeButton = document.querySelector(
          `[data-target="${sectionId}"]`,
        );

        const currentActive = document.querySelector(
          ".category-bar button.active",
        );

        if (activeButton && currentActive !== activeButton) {
          currentActive?.classList.remove("active");

          activeButton.classList.add("active");

          activeButton.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-30% 0px -60% 0px",
    },
  );

  menuSections.forEach((section) => {
    observer.observe(section);
  });
};

document.querySelectorAll(".category-bar button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const section = document.getElementById(targetId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    button.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    document
      .querySelectorAll(".category-bar button")

      .forEach((button) => button.classList.remove("active"));

    button.classList.add("active");
  });
});

initAnimations();
setCategoryObserver();
