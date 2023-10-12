const apiUrl = "http://localhost:1337";

const currentPage = window.location.pathname.split("/").pop() + "s";
const signing = currentPage.replace(".html", "");
const endpoint = "/api/" + signing + "?populate=*";

const images = {};
const interieurList = [
  "Wallcovering",
  "Interieurfolie",
  "Privacyfolie",
  "Meubelpanelen",
  "Peesframes",
  "Ledframes",
  "Textielfoto",
  "Folieteksten",
  "Schilderijprints",
  "Whiteboards",
  "Wayfinding",
];

const exterieurList = [
  "Gevellichtreclame",
  "Reclameborden",
  "Raamstikkers",
  "Bewegwijzering",
  "Spandoekenvlaggen",
  "Fleetmarking",
];

// Fetch data from the API
const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from Strapi");
  }
};

// Display data fetched from the API
const displayFetchedData = async () => {
  try {
    const data = await fetchDataFromAPI();

    // Fetch image URLs and populate the images
    grabImageURLs(data, images);
    renderImages(images);
  } catch (error) {
    console.error("Error displaying data: ", error);
  }
};

// Recursively fetch image URLs from the data images
const grabImageURLs = (data, result, parentKey = "") => {
  for (const key in data) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof data[key] === "object" && data[key] !== null) {
      grabImageURLs(data[key], result, newKey);
    } else {
      if (newKey.toLowerCase().includes("attributes.url")) {
        result[newKey] = apiUrl + data[key];
      }
    }
  }
};

// Populate the image carousel
function renderImages() {
  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      if (signing == "exterieur-signings") {
        for (const word of exterieurList) {
          if (key.includes(word)) {
            const elementId = word.toLowerCase();
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
              targetElement.src = images[key];
              targetElement.style.display = "block";
            }
          }
        }
      } else {
        for (const word of interieurList) {
          if (key.includes(word)) {
            const elementId = word.toLowerCase();
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
              targetElement.src = images[key];
              targetElement.style.display = "block";
            }
          }
        }
      }
    }
  }
}

displayFetchedData();
