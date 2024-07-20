const inputElement = document.querySelector("#inputElement");
const searchButton = document.querySelector("#search");
const clearButton = document.querySelector("#clear");
const imageContainer = document.querySelector(".image-container");
const query = document.getElementById("inputElement").value.trim();
const apidata = new API();

eventListener();

function eventListener() {
  searchButton.addEventListener("click", getDataFromApi);
  clearButton.addEventListener("click", clearPage);
}
async function getDataFromApi() {
  const searchedText = inputElement.value.trim();
  let responseAPI = await apidata.getPhotosFromApi(searchedText);
  
  clearImages();
  responseAPI.forEach((photo) => {
    addImgTagToUi(photo.urls.small);
  });
}
function addImgTagToUi(url) {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  imgElement.style.width = "300px";
  imgElement.style.height = "300px";
  imgElement.style.objectFit = "cover"; // Resmin div içinde kaplamasını sağlar
  imgElement.style.margin = "30px";
  imgElement.style.borderRadius = "4px solid";
  imgElement.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 10)";
  imgElement.style.borderRadius = "24px";
  imageContainer.appendChild(imgElement);
}

function clearPage() {
  inputElement.value = "";
  imageContainer.innerHTML = "";
}
function clearImages() {
  imageContainer.innerHTML = "";
}
