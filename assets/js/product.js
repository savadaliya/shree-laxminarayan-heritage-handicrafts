// Popular products Home
const products = [
  { name: "Gold Engraved Brass", image: "https://shreelaxminarayanhh.com//assets/img/home/gold-engraved-brass.png" },
  { name: "Handcrafted Lord Ganesh Figurine", image: "https://shreelaxminarayanhh.com//assets/img/home/handcrafted-lord-ganesh-figurine.jpg" },
  { name: "Blue Pottery Handcrafted Peacock Pot", image: "https://shreelaxminarayanhh.com//assets/img/home/blue-pottery-handcrafted-peacock-pot.jpg" },
  { name: "Marble Handcrafted Lord Ganesh Figurine", image: "https://shreelaxminarayanhh.com//assets/img/home/marble-handcrafted-lord-ganesh-figurine.png" },
  { name: "Crystal Handcrafted Perfume Bottle with Spherical Lid", image: "https://shreelaxminarayanhh.com//assets/img/home/crystal-handcrafted-perfumebottle-with-spherical-lid.png" },
  { name: "Handmade Metal Camel 'Ship of the Desert", image: "https://shreelaxminarayanhh.com//assets/img/home/handmade-metal-camel-ship of the-desert.jpg" }
];

const phoneNumber = "919756922412"; // Apna WhatsApp number

const gallery = document.getElementById('productGallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

products.forEach(product => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  slide.innerHTML = `
      <div class="animate-underline">
        <img src="${product.image}" alt="${product.name}" class="product-img rounded-4" style="cursor:pointer;"><br/><br/>
        <h3 class="d-block fs-sm fw-medium text-truncate product_title">
          <span class="animate-target">${product.name}</span>
        </h3>
        <br/>
        <a class="whatsapp-btn btn btn-dark w-100 rounded-pill px-3" 
           href="https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Check out this product: ${product.name} - ${product.image}`)}" 
           target="_blank">Send on WhatsApp</a>
      </div>
    `;

  // Image Click Event for Popup
  slide.querySelector('.product-img').addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = product.image;
  });

  gallery.appendChild(slide);
});

// Close Modal on X Click
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close Modal on Outside Click
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// Products Home 
const shopProducts = [
  { name: "Stone Work Handcrafted Coasters", image: "https://shreelaxminarayanhh.com//assets/img/shop/assorted-craft/handcrafted-wind-chimes-pack-of-2.png" },
  { name: "Blue Pottery Handcrafted Aroma Candle Stand Blue", image: "https://shreelaxminarayanhh.com//assets/img/shop/blue-pottery/blue-pottery-handcrafted-jewellery-box.jpg" },
  { name: "Brass Handcrafted Gold Plated Lord Ganesha 4.5", image: "https://shreelaxminarayanhh.com//assets/img/shop/brass-craft/brass-handcrafted-marori-khulai-pot.jpg" },
  { name: "Crystal Handcrafted Perfume Bottle With Handle", image: "https://shreelaxminarayanhh.com//assets/img/shop/crystal-craft/crystal-handcrafted-agarbatti-holder.png" },
  { name: "Handcrafted Multicolor Mudda Blue & Red", image: "https://shreelaxminarayanhh.com//assets/img/shop/furniture/handcrafted-multicolor-mudda-blue&red.png" },
  { name: "Marble Handcrafted Inlay Coasters", image: "https://shreelaxminarayanhh.com//assets/img/shop/marble-handicraft/marble-handcrafted-inlay-coasters.png" },
  { name: "Metal Handcrafte Decorative Peacock Smoll", image: "https://shreelaxminarayanhh.com//assets/img/shop/metal-craft/metal-handcrafted-decorative-peacock-smoll.jpg" },
  { name: "Camels Drinking Water Canvas Painting Unframed", image: "https://shreelaxminarayanhh.com//assets/img/shop/paintings/camels-drinking-water-canvas-painting-unframed.png" },
  { name: "Sardar Vallabhbhai Patel Hand Carved Wooden Statue", image: "https://shreelaxminarayanhh.com//assets/img/shop/wooden-handicraft/sardar-vallabhbhai-patel-hand-carved-wooden-statue.jpg" },
  { name: "Handcrafted Shank with Lotus Print Design Blue Pottery", image: "https://shreelaxminarayanhh.com//assets/img/shop/blue-pottery/handcrafted-shank-with-lotus-print-design-blue-pottery.jpg" }, 
  { name: "Handcrafte Metal Horse", image: "https://shreelaxminarayanhh.com//assets/img/shop/metal-craft/handcrafte-metal-horse.jpg" },
  { name: "Handcrafted Marble Small Temple", image: "https://shreelaxminarayanhh.com//assets/img/shop/marble-handicraft/handcrafted-marble-small-temple.png" }
];

const whatsAppNumber = "919756922412";

const shopGallery = document.getElementById('shopGalleryContainer');
const imgPopupModal = document.getElementById('imgPopupModal');
const popupImage = document.getElementById('popupFullImage');
const modalCloseBtn = document.getElementsByClassName('modalCloseBtn')[0];

shopProducts.forEach(item => {
  const productCard = document.createElement('div');
  // swiper-slide class remove kar diya gaya hai

  productCard.innerHTML = `
      <div class="animate-underline">
        <img src="${item.image}" alt="${item.name}" class="productThumbnail rounded-4" style="cursor:pointer;"><br/><br/>
        <h3 class="d-block fs-sm fw-medium text-truncate product_title">
          <span class="animate-target">${item.name}</span>
        </h3>
        <br/>
        <a class="whatsapp-btn btn btn-dark w-100 rounded-pill px-3" 
           href="https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(`Check out this product: ${item.name} - ${item.image}`)}" 
           target="_blank">Send on WhatsApp</a>
      </div>
    `;

  // Image Click Event for Popup
  productCard.querySelector('.productThumbnail').addEventListener('click', () => {
    imgPopupModal.style.display = "block";
    popupImage.src = item.image;
  });

  shopGallery.appendChild(productCard);
});

// Close Modal on X Click
modalCloseBtn.onclick = () => {
  imgPopupModal.style.display = "none";
};

// Close Modal on Outside Click
window.onclick = (event) => {
  if (event.target == imgPopupModal) {
    imgPopupModal.style.display = "none";
  }
};