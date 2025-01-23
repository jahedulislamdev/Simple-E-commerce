const ProductsData = [
    {
        id: 1,
        productName: "Wireless Earbuds",
        category: "Electronics",
        price: 300,
        description:
            "Compact and ergonomic earbuds with superior sound quality and noise cancellation.",
        brandName: "SoundTech",
        productImg:
            "https://images.unsplash.com/photo-1603694681044-e71c5993d6cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 2,
        productName: "Running Shoes",
        category: "Footwear",
        description:
            "Lightweight running shoes with breathable material and comfortable cushioning.",
        brandName: "StridePro",
        price: 540,
        productImg:
            "https://images.unsplash.com/photo-1620856902651-ce18d6d31d42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        productName: "Smartwatch",
        category: "Wearables",
        description:
            "Feature-packed smartwatch with fitness tracking, notifications, and long battery life.",
        brandName: "TechGear",
        price: 680,
        productImg:
            "https://plus.unsplash.com/premium_photo-1683120889995-b6a309252981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 4,
        productName: "Gaming Laptop",
        category: "Computers",
        description:
            "High-performance laptop with powerful graphics card, fast processor, and RGB keyboard.",
        brandName: "GameCore",
        price: 340,
        productImg:
            "https://plus.unsplash.com/premium_photo-1661304671477-37c77d0c6930?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    },
    {
        id: 5,
        productName: "Blender",
        category: "Home Appliances",
        description:
            "Efficient blender with multiple speed settings, ideal for smoothies and soups.",
        brandName: "KitchenAid",
        price: 700,
        productImg:
            "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    },
    // Add more products here...
];

const categoryContainer = document.getElementById("categoryContainer");
const productList = document.getElementById("productList");

const displayProducts = (products) => {
    productList.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add(
            "col-lg-3",
            "col-md-4",
            "col-sm-6",
            "col-12",
            "mb-4",
        );
        productCard.innerHTML = `
                    <div class="card mb-2">
                        <div>
                            <img src="${product.productImg}" class="w-100 card-img-top card-image" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-1">${product.productName}</h5>
                            <p class="fw-light text-sm mb-1">${product.category}</p>
                            <h6 class="mb-1">$${product.price}</h6>
                        </div>
                        <div class="card-footer d-flex justify-content-around text-muted">
                            <a id="productDetail" href="../Product/product_detail.html" role="button" class="btn rounded-1 btn-outline-success">Details</a>
                            <a id="AddToCart" href="#" role="button" class="btn rounded-1 btn-outline-danger">Add to Cart</a>
                        </div>
                    </div>
        `;
        productList.appendChild(productCard);
    });
};

// Create all category button and handle category
const displayPostsByCategory = () => {
    const categories = ["All", ...new Set(ProductsData.map((c) => c.category))];

    categories.forEach((category) => {
        const categoryButton = document.createElement("button");
        categoryButton.textContent = category;
        categoryButton.classList.add("category-btn");

        // Handle category
        categoryButton.addEventListener("click", () => {
            // Remove "active" class from all buttons
            document
                .querySelectorAll(".category-btn")
                .forEach((btn) => btn.classList.remove("active"));

            // Add "active" class to the clicked button
            categoryButton.classList.add("active");

            // Filter products by category
            const filteredProducts =
                category === "All"
                    ? ProductsData
                    : ProductsData.filter((item) => item.category === category);
            displayProducts(filteredProducts);
        });

        categoryContainer.appendChild(categoryButton);
    });

    // Display all products initially
    displayProducts(ProductsData);
};

displayPostsByCategory();

// add to cart functionality
const AddToCartButton = document.getElementById("AddToCart");
const ViewDetails = document.getElementById("productDetail");

const initialCartItem = 0;

AddToCartButton.addEventListener("click", (id) => {
    initialCartItem++;
    console.log(initialCartItem);
});
