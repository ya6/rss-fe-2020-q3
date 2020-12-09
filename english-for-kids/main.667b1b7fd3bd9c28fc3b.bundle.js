(()=>{var t={534:()=>{Array.prototype.last=function(){return this[this.length-1]}}},a={};function e(i){if(a[i])return a[i].exports;var s=a[i]={exports:{}};return t[i](s,s.exports,e),s.exports}(()=>{"use strict";class t{static renderCards(t,a){const e=document.querySelector(".game");if(t.innerHTML="","undefined"!=typeof table&&table.parentElement.removeChild(table),"Main Page"===a.page){let e="";for(let i of a.cards){let a=document.createElement("div");cb.checked&&(e="card--orange"),a.innerHTML=`\n            <a href="#" class="card card__main border-0 rounded ${e}" data-name="${i.name}">\n            <img src="./assets/${i.src}" alt="${i.name}">\n            ${i.name}\n            </a>`,t.append(a)}}else if(cb.checked){e.innerHTML='<button type="button" class="game__button btn text-light mx-auto">Start Play</button>';for(let e of a.cards){let a=document.createElement("div");a.innerHTML=`\n                <div class="card card__play" style="background-image: url(./assets/${e.image});" data-name = "${e.word}" data-sound = "${e.audioSrc}">\n                </div>`,t.append(a)}}else{e.innerHTML="";for(let e of a.cards){let a=document.createElement("div");a.innerHTML=`\n                <div class="card card__train">\n                <div class="front" data-sound = "${e.audioSrc}" data-name="${e.word}" style="background-image: url(./assets/${e.image});">\n               ${e.word}\n               <div class="rotate"></div>\n                </div> \n                <div class="back"  style="background-image: url(./assets/${e.image});">\n              ${e.translation}  \n                </div>                             \n                </div>`,t.append(a)}}}static play(t){const a=new Audio;a.src=`./assets/${t}`,a.currentTime=0,a.play()}}e(534);const a=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Food","Colors"],[{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"strawberry",translation:"клубника",image:"img/strawberry.jpg",audioSrc:"audio/strawberry.mp3"},{word:"apple",translation:"яблоко",image:"img/apple.jpg",audioSrc:"audio/apple.mp3"},{word:"milk",translation:"молоко",image:"img/milk.jpg",audioSrc:"audio/milk.mp3"},{word:"banana",translation:"банан",image:"img/banana.jpg",audioSrc:"audio/banana.mp3"},{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3"},{word:"water",translation:"вода",image:"img/water.jpg",audioSrc:"audio/water.mp3"},{word:"tomato",translation:"помидор",image:"img/tomato.jpg",audioSrc:"audio/tomato.mp3"}],[{word:"yellow",translation:"желтый",image:"img/yellow.jpg",audioSrc:"audio/yellow.mp3"},{word:"orange",translation:"оранжевый",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"},{word:"red",translation:"красный",image:"img/red.jpg",audioSrc:"audio/red.mp3"},{word:"green",translation:"зеленый",image:"img/green.jpg",audioSrc:"audio/green.mp3"},{word:"pink",translation:"розовый",image:"img/pink.jpg",audioSrc:"audio/pink.mp3"},{word:"blue",translation:"синий",image:"img/blue.jpg",audioSrc:"audio/blue.mp3"},{word:"black",translation:"черный",image:"img/black.jpg",audioSrc:"audio/black.mp3"},{word:"white",translation:"белый",image:"img/white.jpg",audioSrc:"audio/white.mp3"}]];class i{static makePage(t){if(t.menu=["Main Page",...a[0],"delimiter","Statistics"],t.cards=[],"Main Page"===t.page){let e=1;for(let i of a[0])t.cards.push({name:i,src:a[e][0].image}),e+=1}else{let e=a[0].indexOf(t.page)+1;for(let i of a[e])t.cards.push({word:i.word,translation:i.translation,image:i.image,audioSrc:i.audioSrc})}return t}static makeDifficultPage(t,e=8){t.menu=["Main Page",...a[0],"delimiter","Repeat difficult words","delimiter","Statistics"],t.cards=[],t.statCards=t.statCards.sort((function(t,a){return t.miss<a.miss?1:t.miss==a.miss?0:t.miss>a.miss?-1:void 0}));for(let a=0;a<8;a++)t.statCards[a].miss>0&&t.cards.push(t.statCards[a]);return t}}class s{static renderStatistics(t,a){const e=a.statCards;t.innerHTML="","undefined"!=typeof table&&table.parentElement.removeChild(table);let i=[],s=document.createElement("div");s.setAttribute("id","table");const r=` \n    \n    <div class="d-flex justify-content-end mb-2">\n    <button id ="difficult" class="btn btn-warning m-2" type="button">Repeat difficult words</button>\n    <button  id= "reset" class="btn btn-danger m-2" type="button">Reset</button>\n    </div> \n    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">\n          <thead>\n          <tr>    \n              <th class="th-sm "><div class="d-flex justify-content-between align-items-center p-1">\n              <div class=""> Category </div >\n              <div  class="" style="width: 30px; height:30px">\n              <input  type="checkbox" class="stateInput"   id="stateInput_1" name='sort' ${a.cardFilter.category}  value='category' >\n              <label  for="stateInput_1" class="arrows"></label>\n              </div>\n              </div>\n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> Word </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_2" name='sort'  ${a.cardFilter.word} value='word'>\n                <label  for="stateInput_2" class="arrows"></label>\n                </div>\n                </div>\n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> Translation </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_3" name='sort' ${a.cardFilter.translation} value='translation' ">\n                <label  for="stateInput_3" class="arrows"></label>\n                </div>\n                </div>\n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> Hit </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_4" name='sort' ${a.cardFilter.hit} value='hit' >\n                <label  for="stateInput_4" class="arrows"></label>\n                </div>\n                \n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> Miss </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_5" name='sort' ${a.cardFilter.miss} value='miss'>\n                <label  for="stateInput_5" class="arrows"></label>\n                </div>\n                </div>\n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> % of Hits </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_6" name='sort' ${a.cardFilter.percent} value='percent'>\n                <label  for="stateInput_6" class="arrows"></label>\n                </div>\n                </div>\n                </th>\n                <th class="th-sm">\n                <div class="d-flex justify-content-between align-items-center p-1"> \n                <div class=""> Train </div >\n                <div  class="" style="width: 30px; height:30px">\n                <input  type="checkbox" class="stateInput" id="stateInput_7" name='sort' ${a.cardFilter.train} value='train'>\n                <label  for="stateInput_7" class="arrows"></label>\n                </div>\n                </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>`;i.push(r);for(let t of e){let a=`\n        <tr>\n        <td>${t.category}</td>\n        <td>${t.word}</td>\n        <td>${t.translation}</td>\n        <td>${t.hit}</td>\n        <td>${t.miss}</td>\n        <td>${t.percent}</td>\n        <td>${t.train}</td>\n        </tr>\n         `;i.push(a)}i.push(' </tbody>\n  <tfoot>\n  <tr>\n  <th class="th-sm" data-sort="name" data-order="desc">Category\n                </th>\n  <th class="th-sm" data-sort="name" data-order="desc">Word\n  </th>\n  <th class="th-sm">Translation\n  </th>\n  <th class="th-sm">Hit\n  </th>\n  <th class="th-sm">Miss\n  </th>\n  <th class="th-sm">% of Hits\n  </th>\n  <th class="th-sm">Train\n  </th>\n</tr>\n  </tfoot>\n</table>'),s.innerHTML=`${i.join("")}`,t.parentElement.append(s)}static makeStatisticsData(t){const e=[];for(let t=0;t<a[0].length;t++)for(let i of a[t+1])i.hit=0,i.miss=0,i.train=0,i.percent=0,i.category=a[0][t],e.push(i);return t.statCards=e,t.cardFilter={category:"checked",word:"",translation:"",hit:"",miss:"",percent:"",train:""},t}static addPointToStatistic(t,a,e){for(const i of t.statCards)i.word===a&&(i[e]+=1,i.percent=0==i.hit?0:Math.round(i.hit/(i.hit+i.miss)*100));this.saveStatistics(t)}static saveStatistics(t){localStorage.setItem("statistics",JSON.stringify(t.statCards)),localStorage.setItem("filter",JSON.stringify(t.cardFilter))}static loadStatistics(t){const a=JSON.parse(localStorage.getItem("statistics")),e=JSON.parse(localStorage.getItem("filter"));return null!==a?(t.statCards=a,t.cardFilter=e,t):this.makeStatisticsData(t)}static sortStatistics(t,a){const e=a.value;t.cardFilter={category:"",word:"",translation:"",hit:"",miss:"",percent:"",train:""},a.checked?t.cardFilter[e]="checked":t.cardFilter[e]="",a.checked?t.statCards=t.statCards.sort((function(t,a){return t[e]>a[e]?1:t[e]==a[e]?0:t[e]<a[e]?-1:void 0})):t.statCards=t.statCards.sort((function(t,a){return t[e]<a[e]?1:t[e]==a[e]?0:t[e]>a[e]?-1:void 0})),o.route(t)}}class r{static render(t,a){let e="";cb.checked?t.classList.add("background--orange"):t.classList.remove("background--orange"),t.innerHTML="";for(let i of a.menu){let s=document.createElement("li");i===a.page&&(e="active"),s.innerHTML="delimiter"===i?'<hr class="bg-light">':`<a class="menu__item ${e}" href="#">${i}</a>`,e="",t.appendChild(s)}}static close(){menu__toggle.checked=!1}}class n{static index(a){a=i.makePage(a);const e=document.querySelector(".container__inner"),s=document.querySelector(".menu__box");t.renderCards(e,a),r.render(s,a)}static statistics(t){const a=document.querySelector(".container__inner"),e=document.querySelector(".menu__box");s.renderStatistics(a,t),r.render(e,t)}static difficult(a){console.log("Controller @difficult",a),a=i.makeDifficultPage(a,8);const e=document.querySelector(".container__inner"),s=document.querySelector(".menu__box");t.renderCards(e,a),r.render(s,a)}}class o{static route(t){return"Statistics"==t.page?n.statistics(t):"Repeat difficult words"==t.page?n.difficult(t):n.index(t)}}class d{static setTrainMode(){cb.checked=!1}static clearPlayAttributes(){const t=document.querySelector(".game"),a=document.querySelector(".stars");if(null!==document.querySelector(".popup")){const t=document.querySelector(".popup");t.parentElement.removeChild(t)}t.innerHTML="",a.innerHTML=""}static rotateCard(t){const a=t.parentElement.parentElement;a.children[0].classList.add("card--rotate-180"),a.children[1].classList.add("card--rotate-360"),a.addEventListener("mouseleave",(()=>{a.children[0].classList.remove("card--rotate-180"),a.children[1].classList.remove("card--rotate-360")}))}}class c{static set appData(t){this._appData=t}static get appData(){return this._appData}static setGame(){this.appData.errors=0,this.setShuffleCards(),this.changeForRepeatButton(),this.playGame()}static playGame(){0==this.appData.playCards.length&&setTimeout((function(){c.winGame()}),1e3),setTimeout((function(){c.playLast()}),500)}static setShuffleCards(){this.appData.playCards=this.appData.cards.sort((()=>Math.random()-.5))}static playLast(){if(0==this.appData.playCards.length)return;const a=this.appData.playCards;t.play(a.last().audioSrc)}static checkCard(a){const e=this.appData.playCards.last().word,i=document.querySelector(".stars");if(a.dataset.name==e){const e=document.createElement("div");e.className="star--gold",i.appendChild(e),t.play("audio/correct.mp3"),this.appData.playCards.pop(),a.classList.add("card__correct"),s.addPointToStatistic(this.appData,a.dataset.name,"hit"),this.playGame()}else{this.appData.errors+=1;const a=document.createElement("div");a.className="star-grey",i.appendChild(a),t.play("audio/error.mp3"),s.addPointToStatistic(this.appData,this.appData.playCards.last().word,"miss")}}static changeForRepeatButton(){let t=document.querySelector(".game__button");const a=t.parentNode;a.removeChild(t),a.innerHTML='<button type="button" class="repeat__button btn text-light mx-auto">Repeat</button>'}static winGame(){0==this.appData.errors?(t.play("audio/success.mp3"),this.makePopup("win.png","Cool!")):(t.play("audio/failure.mp3"),this.makePopup("mis.png","Has to work!"))}static makePopup(t,a){const e=[],i=document.createElement("div");i.className="popup",e.push(`<div class="mx-auto">\n         <img src="./assets/img/${t}" class="popup__img">\n         </div>\n         <div class=""><button  class="btn btn-warning" type="button">${a}`),this.appData.errors>0&&e.push(`You have ${this.appData.errors} miss`),e.push("</button></div>"),i.innerHTML=`${e.join("")}`,document.body.appendChild(i),document.querySelector(".btn-warning").addEventListener("click",c.goToMainPage)}static goToMainPage(){d.setTrainMode(),d.clearPlayAttributes(),c.appData.page="Main Page",c.appData.play=!1,o.route(c.appData)}}const l={page:"Main Page"};s.loadStatistics(l),document.querySelector(".container-fluid").addEventListener("click",{handleEvent:class{static clickDispatcher(a){const e=this.appData;let i;if(("object"==typeof a&&"DIV"==a.target.parentElement.tagName||"DIV"==a.target.tagName||"object"==typeof a&&"IMG"==a.target.tagName||"A"==a.target.tagName)&&r.close(),"A"!=a.target.tagName&&"IMG"!=a.target.tagName||(i=a.target.dataset.name||a.target.alt||"A"==a.target.tagName&&a.target.innerText||e.page,d.clearPlayAttributes(),e.page=i,e.play=!1,o.route(e)),a.target!=cb||e.play||o.route(e),a.target==cb&&e.play&&a.preventDefault(),a.target.classList.contains("front")){t.play(a.target.dataset.sound||a.target.parentElement.dataset.sound);const i=a.target.dataset.name||a.target.parentElement.dataset.name;s.addPointToStatistic(e,i,"train")}if(a.target.classList.contains("rotate")){const t=a.target;d.rotateCard(t)}a.target.classList.contains("game__button")&&(e.play=!0,c.appData=e,c.setGame()),a.target.classList.contains("repeat__button")&&c.playGame(),a.target.classList.contains("card__play")&&e.play&&!a.target.classList.contains("card__correct")&&c.checkCard(a.target),"undefined"!=typeof reset&&a.target==reset&&(s.makeStatisticsData(e),s.saveStatistics(e),o.route(e)),a.target.classList.contains("stateInput")&&s.sortStatistics(e,a.target),"undefined"!=typeof difficult&&a.target==difficult&&(e.page="Repeat difficult words",o.route(e))}}.clickDispatcher,appData:l}),d.setTrainMode(),o.route(l)})()})();