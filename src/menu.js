import Tuna from "./tuna.png";
import Salmon from "./salmon.png";
import Egg from "./egg.png";
import Bean from "./bean.png";
import Salmon_roe from "./salmon-roe.png";
import Tofu from "./tofu.png";
import Tuna_roll from "./tuna-roll.png";
import Cucumber from "./cucumber-roll.png";

export function menujs() {
  const content = document.querySelector("#content");
  content.innerHTML = `
  <div class = "menu-container">
    <div id="tuna">
        <p>マグロ</p> <p>Tuna</p>
    </div>
    <div id="salmon">
        <p>サーモン</p> <p>Salmon</p>
    </div>
    <div id="egg">
        <p>たまご</p> <p>Egg</p>
    </div>
    <div id="bean">
        <p>いなり寿司</p> <p>Bean curd</p>
    </div>
    <div id="salmon-roe">
        <p>イクラ</p> <p>Salmon roe</p>
    </div>
    <div id="tofu">
        <p>いなりずし</p> <p>Tofu</p>
    </div>
    <div id="tuna-roll">
        <p>鉄火巻き</p> <p>Tuna roll</p>
    </div>
    <div id="cucumber">
        <p>かっぱ巻き</p> <p>Cucumber roll</p>
    </div>
    </div>
  `;
  const tuna = document.querySelector("#tuna");
  const TunaObj = new Image(200, 200);
  TunaObj.src = Tuna;
  tuna.insertAdjacentElement("afterbegin", TunaObj);

  const salmon = document.querySelector("#salmon");
  const SalmonObj = new Image(200, 200);
  SalmonObj.src = Salmon;
  salmon.insertAdjacentElement("afterbegin", SalmonObj);

  const egg = document.querySelector("#egg");
  const EggObj = new Image(200, 200);
  EggObj.src = Egg;
  egg.insertAdjacentElement("afterbegin", EggObj);

  const bean = document.querySelector("#bean");
  const BeanObj = new Image(200, 200);
  BeanObj.src = Bean;
  bean.insertAdjacentElement("afterbegin", BeanObj);

  const salmon_roe = document.querySelector("#salmon-roe");
  const Salmon_roeObj = new Image(200, 200);
  Salmon_roeObj.src = Salmon_roe;
  salmon_roe.insertAdjacentElement("afterbegin", Salmon_roeObj);

  const tofu = document.querySelector("#tofu");
  const TofuObj = new Image(200, 200);
  TofuObj.src = Tofu;
  tofu.insertAdjacentElement("afterbegin", TofuObj);

  const tuna_roll = document.querySelector("#tuna-roll");
  const Tuna_rollObj = new Image(200, 200);
  Tuna_rollObj.src = Tuna_roll;
  tuna_roll.insertAdjacentElement("afterbegin", Tuna_rollObj);

  const cucumber = document.querySelector("#cucumber");
  const CucumberObj = new Image(200, 200);
  CucumberObj.src = Cucumber;
  cucumber.insertAdjacentElement("afterbegin", CucumberObj);
}
