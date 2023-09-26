const url = "./api/people.json";
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    displayItems(data);
  } catch (err) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
