import { baseUrl, productsUrl } from "../settings/apis.js";

const featuredProducts = async () => {
  const featuredContainer = document.querySelector(".featured");

  try {
    const products = await (await fetch(productsUrl)).json();

    products.forEach((product) => {
      if (!product.featured) return null;

      const title = product.title;
      const productImage = baseUrl + product.image.url;
      const id = product.id;

      featuredContainer.innerHTML += `
        <div class="featured__card">
          <h4> ${title} </h4>
          <div class="featured__image-wrapper">
            <img 
              src='${productImage}' 
              alt='${title}' 
              />
          </div>
          <a 
            class="featured__link"
            href="details.html?product_id=${id}"
            >
            More details
          </a>
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

export default featuredProducts;