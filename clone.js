// 🔹 Search functionality
const searchInput = document.querySelector(".searchin");
const searchBtn = document.querySelector(".searchicon");

// Function to handle search
function handleSearch() {
    let query = searchInput.value.trim().toLowerCase();
    if (query) {
        alert("Searching for: " + query);  // Replace with real logic later
    } else {
        alert("Please enter something to search!");
    }
}

// Click on search icon
searchBtn.addEventListener("click", handleSearch);

// Press Enter key
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
});

// 🔹 Back to Top functionality
const backTop = document.querySelector(".footpanel1"); // "Back to top" div

backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// 🔹 Dynamic Offers / Deals
const sales = document.querySelector(".sales");       // select your .sales section
const backcontent = document.querySelector(".backcontent"); // or .backcontent section

// List of rotating deals
const offers = [
    "🔥 50% OFF on Electronics!",
    "🎉 Buy 1 Get 1 Free on Fashion!",
    "🚚 Free Delivery on orders above ₹499!",
    "💳 Extra 10% OFF with HDFC Cards!",
    "📱 Best Deals on Mobiles Today!",
    "🛒 Save Big on Groceries!"
];

// Function to change deals randomly
function changeDeals() {
    let randomOffer = offers[Math.floor(Math.random() * offers.length)];
    
    if (sales) sales.textContent = randomOffer;
    if (backcontent) backcontent.textContent = randomOffer;
}

// Change every 4 seconds
setInterval(changeDeals, 4000);

// Run once at start
changeDeals();
