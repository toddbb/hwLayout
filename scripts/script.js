const images = [
   "600x600",
   "500x600",
   "600x1000",
   "https://lms.ila.edu.vn/content/lessons/SJ_PR_040/test/ReGRA_unscramble.png",
   "https://lms.ila.edu.vn/content/lessons/SJ_PR_007/test/LIS%20color%20pic%202.png",
];

let index = {
   imageSize: 0,
   responseContent: 0,
};

const responseItem4 = `
   <div class="response-item">Response Item 1</div>
   <div class="response-item">Response Item 2</div>
   <div class="response-item">Response Item 3</div>
   <div class="response-item">Response Item 4</div>
`;

const responseItem8 = `
   <div class="response-item">Response Item 1</div>
   <div class="response-item">Response Item 2</div>
   <div class="response-item">Response Item 3</div>
   <div class="response-item">Response Item 4</div>
   <div class="response-item">Response Item 5</div>
   <div class="response-item">Response Item 6</div>
   <div class="response-item">Response Item 7</div>
   <div class="response-item">Response Item 8</div>
`;

const responseContent = [responseItem4, responseItem8];

/**
 * Function: DOM elements
 *
 * Initializes the DOM after it is loaded
 */

const Dom = {
   body: document.querySelector("body"),
   btnDebug: document.querySelector(".btnDebug"),
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
      Dom.btnDebug.addEventListener("click", this.handleDebugClick);
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
      index.responseContent = (index.responseContent + 1) % responseContent.length;
      Dom.response.innerHTML = responseContent[index.responseContent];
   },

   handleDebugClick() {
      Dom.body.classList.toggle("debug");
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
