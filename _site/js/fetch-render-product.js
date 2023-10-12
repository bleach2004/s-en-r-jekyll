// const apiUrl = "http://localhost:1337";

// // Get the current page URL
// const currentPageUrl = window.location.href;

// // Extract the page name without .html
// const currentPageName = currentPageUrl
//   .split("/")
//   .slice(-1)[0]
//   .replace(".html", "");
// // .replace("-", "_");

// // Check if the currentPageName ends with 's'

// const endpoint = `/api/${currentPageName}s?populate=*`;

// console.log(endpoint);

// const carousel = {};

// // Fetch data from the API
// const fetchDataFromAPI = async () => {
//   try {
//     const response = await axios.get(`${apiUrl}${endpoint}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw new Error("Failed to fetch data from Strapi");
//   }
// };

// // Display data fetched from the API
// const displayFetchedData = async () => {
//   try {
//     const data = await fetchDataFromAPI();

//     // Fetch image URLs, populate carousel, display description
//     grabImageURLs(data, carousel);
//     renderCarousel(carousel);
//     renderDescription(data);
//   } catch (error) {
//     console.error("Error displaying data: ", error);
//   }
// };

// // Recursively fetch image URLs from the data object
// const grabImageURLs = (obj, result, parentKey = "") => {
//   for (const key in obj) {
//     const newKey = parentKey ? `${parentKey}.${key}` : key;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       grabImageURLs(obj[key], result, newKey);
//     } else {
//       if (newKey.toLowerCase().includes("attributes.url")) {
//         result[newKey] = apiUrl + obj[key];
//       }
//     }
//   }
// };

// const renderDescription = (data) => {
//   const dataContainer = document.getElementById("description");
//   dataContainer.innerHTML = data.data[0].attributes.Beschrijving;
// };

// const renderCarousel = () => {
//   const carouselIndicatorsContainer = document.querySelector(
//     ".carousel-indicators-container"
//   );
//   const carouselIndicators = document.querySelector(".carousel-indicators");
//   const carouselInner = document.querySelector(".carousel-inner");
//   let isFirstSlide = true;

//   let indicatorCounter = 0;

//   for (const key in carousel) {
//     const carouselIndicator = document.createElement("img");
//     carouselIndicator.setAttribute("src", carousel[key]);
//     carouselIndicator.setAttribute("data-bs-target", "#productCarousel");
//     carouselIndicator.setAttribute("data-bs-slide-to", indicatorCounter);
//     carouselIndicator.classList.add("thumbnail");
//     carouselIndicators.appendChild(carouselIndicator);

//     const carouselItem = document.createElement("div");
//     carouselItem.classList.add("carousel-item");

//     if (isFirstSlide) {
//       carouselItem.classList.add("active");
//       carouselIndicator.classList.add("active");
//       isFirstSlide = false;
//     }

//     const image = document.createElement("img");
//     image.classList.add("d-block", "w-100");
//     image.style.objectFit = "cover";
//     image.src = carousel[key];

//     carouselItem.appendChild(image);
//     carouselInner.appendChild(carouselItem);

//     indicatorCounter++;
//   }

//   // Add carousel indicators container with scrolling
//   carouselIndicatorsContainer.appendChild(carouselIndicators);
// };

// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.querySelector(".carousel-indicators-container");

// const startDragging = (e) => {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };

// const stopDragging = (e) => {
//   mouseDown = false;
// };

// const move = (e) => {
//   e.preventDefault();
//   if (!mouseDown) {
//     return;
//   }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// };

// // Add the event listeners
// slider.addEventListener("mousemove", move, false);
// slider.addEventListener("mousedown", startDragging, false);
// slider.addEventListener("mouseup", stopDragging, false);
// slider.addEventListener("mouseleave", stopDragging, false);

// displayFetchedData();
