const images = [
   "600x600",
   "500x600",
   "600x1000",
   "https://lms.ila.edu.vn/content/lessons/SJ_PR_040/test/ReGRA_unscramble.png",
   "https://lms.ila.edu.vn/content/lessons/SJ_PR_007/test/LIS%20color%20pic%202.png",
];

const reponseHeight = ["400px", "600px", "1000px"];

let index = {
   imageSize: 0,
   reponseHeight: 0,
};

/**
 * Function: DOM elements
 *
 * Initializes the DOM after it is loaded
 */

const Dom = {
   image: document.querySelector("#image"),
   response: document.querySelector(".response-content"),
};

/**
 * Function: init
 *
 * Initializes the DOM after it is loaded
 */

const Events = {
   init() {
      Dom.image.addEventListener("click", this.handleImageClick);
      Dom.response.addEventListener("click", this.handleResponseClick);
   },

   handleImageClick() {
      index.imageSize = (index.imageSize + 1) % images.length;
      const image = images[index.imageSize];

      if (image.includes("lms.ila.edu.vn")) {
         Dom.image.src = image;
      } else {
         Dom.image.src = `https://placehold.co/${image}`;
      }
   },

   handleResponseClick() {
      index.reponseHeight = (index.reponseHeight + 1) % reponseHeight.length;
      Dom.response.style.height = reponseHeight[index.reponseHeight];
      Dom.response.textContent = `Height: ${reponseHeight[index.reponseHeight]}`;
   },
};

/**
 * Function: init
 *
 * Initializes the DOM after it is loaded
 */
const init = () => {
   console.log("The DOM is loaded.");
   Events.init();
};

document.addEventListener("DOMContentLoaded", () => init());
