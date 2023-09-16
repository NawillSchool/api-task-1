/*function main() {}

module.exports = { main }*/
const nameContainer = document.querySelector(".container");
const modal = document.querySelector(".info");

async function dataFetch() {
  let res = await fetch("https://swapi.dev/api/people");
  let data = await res.json();
    let result = data.results;
    
  for (let i = 0; i < result.length; i++) {
    const oneperson = result[i];
    const singleList = document.createElement("li");
    singleList.innerText = oneperson.name;
    const singleHeight = document.createElement("li");
    singleHeight.innerText = oneperson.height;
    const singleGender = document.createElement("li");
    singleGender.innerText = oneperson.gender;
      
    singleList.onclick = () => {
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "contentContainer");
      modal.classList.add("show-modal");
      modal.appendChild(divContainer);
      const closeBtn = document.createElement('button')
      closeBtn.innerText = "X";
      closeBtn.setAttribute("class", "close_btn");
      divContainer.appendChild(closeBtn);

      const image = document.createElement("img");
      image.setAttribute(
        "src",
        "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
      );
      image.setAttribute("class", "image")
      divContainer.appendChild(image);
      const name = document.createElement("p");
      name.setAttribute("class", "name");
      name.innerHTML = `<h3> NAME: ${oneperson.name}</h3>`;
      divContainer.appendChild(name);
      
      const height = document.createElement("p");
      height.innerHTML = `<h3> HEIGHT: ${oneperson.height}</h3>`;
      divContainer.appendChild(height);
     
      const gender = document.createElement("p");
      gender.innerHTML = `<h3> GENDER: ${oneperson.gender}</h3>`;
      divContainer.appendChild(gender);

      closeBtn.addEventListener("click", ()=>{
        modal.classList.remove("show-modal");
      })
    };
    nameContainer.appendChild(singleList);
  }
}
dataFetch();