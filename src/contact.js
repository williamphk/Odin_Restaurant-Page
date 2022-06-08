import Map from "./map.png";

export function contactjs() {
  const content = document.querySelector("#content");
  content.innerHTML = `
  <div id = "contact-container">
    <p>+8181-411-0471</p>
    <p>トヤマケン, トヤマシ, ヤツオマチアシタニ, 365-1243</p>
    <p>富山市富山市八丁町Ashitani 365-1243</p>
    <p>no1sushi@sushifake.com</p>
  </div>
  `;
  const contact_container = document.querySelector("#contact-container");
  const MapObj = new Image(500, 400);
  MapObj.src = Map;
  contact_container.appendChild(MapObj);
}
