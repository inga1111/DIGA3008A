document.addEventListener('DOMContentLoaded', function() {
const makeupBrands = [
    {
        name: "Fenty Beauty",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fenty_Beauty_Logo.png/800px-Fenty_Beauty_Logo.png",
        price: "$$$",
        specialty: "Known for inclusive foundation shades and bold colors",
        tags: ["Luxury", "Inclusive", "Cruelty-Free"],
        url: "https://fentybeauty.com",
        color: "var(--luxury)"
    },
    {
        name: "Glossier",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Glossier_logo.svg/800px-Glossier_logo.svg.png",
        price: "$$",
        specialty: "Minimalist, skin-first makeup products",
        tags: ["Clean Beauty", "Minimalist", "Millennial Pink"],
        url: "https://www.glossier.com",
        color: "var(--clean)"
    },
    {
        name: "e.l.f. Cosmetics",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/ELF_Logo.svg/800px-ELF_Logo.svg.png",
        price: "$",
        specialty: "Affordable, cruelty-free makeup",
        tags: ["Drugstore", "Cruelty-Free", "Vegan Options"],
        url: "https://www.elfcosmetics.com",
        color: "var(--drugstore)"
    },
    {
        name: "Pat McGrath Labs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pat_McGrath_Labs_logo.svg/800px-Pat_McGrath_Labs_logo.svg.png",
        price: "$$$$",
        specialty: "High-fashion, editorial-quality makeup",
        tags: ["Luxury", "High-Pigment", "Runway"],
        url: "https://www.patmcgrath.com",
        color: "var(--luxury)"
    },
    {
        name: "Milk Makeup",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Milk_Makeup_Logo.png/800px-Milk_Makeup_Logo.png",
        price: "$$",
        specialty: "Vegan, cruelty-free makeup with innovative formulas",
        tags: ["Vegan", "Clean Beauty", "Cruelty-Free"],
        url: "https://www.milkmakeup.com",
        color: "var(--vegan)"
    }
];

const suggestBtn = document.getElementById('suggestBtn');
const brandCard = document.getElementById('brandCard');
const brandLogo = document.getElementById('brandLogo');
const brandName = document.getElementById('brandName');
const priceRange = document.getElementById('priceRange');
const brandSpecialty = document.getElementById('brandSpecialty');
const brandTags = document.getElementById('brandTags');
const brandLink = document.getElementById('brandLink');

suggestBtn.addEventListener('click', () => {
    // Select random brand
    const randomBrand = makeupBrands[Math.floor(Math.random() * makeupBrands.length)];
    
    // Update UI
    brandLogo.style.backgroundImage = `url(${randomBrand.logo})`;
    brandName.textContent = randomBrand.name;
    priceRange.textContent = randomBrand.price;
    brandSpecialty.textContent = randomBrand.specialty;
    brandLink.href = randomBrand.url;
    
    // Update tags
    brandTags.innerHTML = '';
    randomBrand.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagElement.style.backgroundColor = randomBrand.color;
        tagElement.style.color = 'white';
        brandTags.appendChild(tagElement);
    });
    
    // Show card with animation
    brandCard.classList.remove('hidden');
    setTimeout(() => {
        brandCard.style.opacity = '1';
        brandCard.style.height = 'auto';
    }, 10);
});

// Optional: Generate one on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        suggestBtn.click();
    }, 500);
});
});