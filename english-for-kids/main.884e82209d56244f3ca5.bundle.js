(()=>{var a={534:()=>{Array.prototype.last=function(){return this[this.length-1]}}},t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return a[i](r,r.exports,e),r.exports}(()=>{"use strict";class a{static renderCards(a,t){const e=document.querySelector(".game");if(a.innerHTML="","undefined"!=typeof table&&table.parentElement.removeChild(table),"Main Page"===t.page){let e="";for(let i of t.cards){let t=document.createElement("div");cb.checked&&(e="card--orange"),t.innerHTML=`\n            <a href="#" class="card card__main border-0 rounded ${e}" data-name="${i.name}">\n            <img src="./assets/${i.src}" alt="${i.name}">\n            ${i.name}\n            </a>\n        `,a.append(t)}}else if(cb.checked){e.innerHTML='<button type="button" class="game__button btn text-light mx-auto">Start Play</button>';for(let e of t.cards){let t=document.createElement("div");t.innerHTML=`\n                <div class="card card__play" style="background-image: url(./assets/${e.image});" data-name = "${e.word}" data-sound = "${e.audioSrc}">\n                </div>\n        `,a.append(t)}}else{e.innerHTML="";for(let e of t.cards){let t=document.createElement("div");t.innerHTML=`\n                <div class="card card__train">\n                <div class="front" data-sound = "${e.audioSrc}" data-name="${e.word}" style="background-image: url(./assets/${e.image});">\n               ${e.word}\n               <div class="rotate"></div>\n                </div> \n                <div class="back"  style="background-image: url(./assets/${e.image});">\n              ${e.translation}  \n                </div>                             \n                </div>\n        `,a.append(t)}}}static play(a){const t=new Audio;t.src=`./assets/${a}`,t.currentTime=0,t.play()}}e(534);const t=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Food","Colors"],[{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"strawberry",translation:"клубника",image:"img/strawberry.jpg",audioSrc:"audio/strawberry.mp3"},{word:"apple",translation:"яблоко",image:"img/apple.jpg",audioSrc:"audio/apple.mp3"},{word:"milk",translation:"молоко",image:"img/milk.jpg",audioSrc:"audio/milk.mp3"},{word:"banana",translation:"банан",image:"img/banana.jpg",audioSrc:"audio/banana.mp3"},{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{word:"cheese",translation:"сыр",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3"},{word:"water",translation:"вода",image:"img/water.jpg",audioSrc:"audio/water.mp3"},{word:"tomato",translation:"помидор",image:"img/tomato.jpg",audioSrc:"audio/tomato.mp3"}],[{word:"yellow",translation:"желтый",image:"img/yellow.jpg",audioSrc:"audio/yellow.mp3"},{word:"orange",translation:"оранжевый",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"},{word:"red",translation:"красный",image:"img/red.jpg",audioSrc:"audio/red.mp3"},{word:"green",translation:"зеленый",image:"img/green.jpg",audioSrc:"audio/green.mp3"},{word:"pink",translation:"розовый",image:"img/pink.jpg",audioSrc:"audio/pink.mp3"},{word:"blue",translation:"синий",image:"img/blue.jpg",audioSrc:"audio/blue.mp3"},{word:"black",translation:"черный",image:"img/black.jpg",audioSrc:"audio/black.mp3"},{word:"white",translation:"белый",image:"img/white.jpg",audioSrc:"audio/white.mp3"}]];class i{static render(a,t){let e="";cb.checked?a.classList.add("background--orange"):a.classList.remove("background--orange"),a.innerHTML="";for(let i of t.menu){let r=document.createElement("li");i===t.page&&(e="active"),r.innerHTML="delimiter"===i?'<hr class="bg-light">':`<a class="menu__item ${e}" href="#">${i}</a>`,e="",a.appendChild(r)}}static close(){menu__toggle.checked=!1}}class r{static renderStatistics(a,t){const e=this.loadStatistics();a.innerHTML="","undefined"!=typeof table&&table.parentElement.removeChild(table);let i=[],r=document.createElement("div");r.setAttribute("id","table"),i.push('<div class="d-flex justify-content-end m-2">\n    <button id ="difficult" class="btn btn-warning m-2" type="button">Repeat difficult words</button>\n    <button  id= "reset" class="btn btn-danger m-2" type="button">Reset</button>\n    </div>\n\n    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">\n            <thead>\n              <tr>\n              <th class="th-sm" data-sort="name" data-order="desc">Category\n                </th>\n                <th class="th-sm">Word\n                </th>\n                <th class="th-sm">Transl\n                </th>\n                <th class="th-sm">Hit\n                </th>\n                <th class="th-sm">Miss\n                </th>\n                <th class="th-sm">% of Hits\n                </th>\n                <th class="th-sm">Train\n                </th>\n              </tr>\n            </thead>\n            <tbody>');for(let a=0;a<e[0].length;a++)for(let t of e[a+1]){let r=0==t.hit?0:Math.round(t.hit/(t.hit+t.mis)*100),o=`\n        <tr>\n        <td>${e[0][a]}</td>\n        <td>${t.word}</td>\n        <td>${t.translation}</td>\n        <td>${t.hit}</td>\n        <td>${t.mis}</td>\n        <td>${r}</td>\n        <td>${t.train}</td>\n        </tr>\n         `;i.push(o)}i.push(' </tbody>\n  <tfoot>\n  <tr>\n  <th class="th-sm" data-sort="name" data-order="desc">Category\n                </th\n  <th class="th-sm" data-sort="name" data-order="desc">Word\n  </th>\n  <th class="th-sm">Translation\n  </th>\n  <th class="th-sm">Hit\n  </th>\n  <th class="th-sm">Miss\n  </th>\n  <th class="th-sm">% of Hits\n  </th>\n  <th class="th-sm">Train\n  </th>\n</tr>\n  </tfoot>\n</table>'),r.innerHTML=`${i.join("")}`,a.parentElement.append(r)}static makeStatisticsData(){for(let a=0;a<t[0].length;a++)for(let e of t[a+1])e.hit=0,e.mis=0,e.train=0;return t}static addPointToStatistic(a,t,e){const i=a.statCards[0].indexOf(a.page)+1;for(const r of a.statCards[i])r.word===t&&(r[e]+=1);this.saveStatistics(a)}static saveStatistics(a){localStorage.setItem("statistics",JSON.stringify(a.statCards))}static loadStatistics(){const a=JSON.parse(localStorage.getItem("statistics"));return null!==a?a:this.makeStatisticsData()}}class o{static index(e){e=class{static makePage(a){if(a.menu=["Main Page",...t[0],"delimiter","Statistics"],a.cards=[],"Main Page"===a.page){let e=1;for(let i of t[0])a.cards.push({name:i,src:t[e][0].image}),e+=1}else{let e=t[0].indexOf(a.page)+1;for(let i of t[e])a.cards.push({word:i.word,translation:i.translation,image:i.image,audioSrc:i.audioSrc})}return a}}.makePage(e);const r=document.querySelector(".container__inner"),o=document.querySelector(".menu__box");a.renderCards(r,e),i.render(o,e)}static statistics(a){const t=document.querySelector(".container__inner"),e=document.querySelector(".menu__box");r.renderStatistics(t,a),i.render(e,a)}}class s{static route(a){return"Statistics"==a.page?o.statistics(a):o.index(a)}}class n{static setTrainMode(){cb.checked=!1}static clearGameAttributes(){const a=document.querySelector(".game"),t=document.querySelector(".stars");if(null!==document.querySelector(".popup")){const a=document.querySelector(".popup");a.parentElement.removeChild(a)}a.innerHTML="",t.innerHTML=""}static rotateCard(a){const t=a.parentElement.parentElement;t.children[0].classList.add("card--rotate-180"),t.children[1].classList.add("card--rotate-360"),t.addEventListener("mouseleave",(a=>{t.children[0].classList.remove("card--rotate-180"),t.children[1].classList.remove("card--rotate-360")}))}}class d{static set appData(a){this._appData=a}static get appData(){return this._appData}static setGame(){this.appData.errors=0,this.setShuffleCards(),this.changeForRepeatButton(),this.playGame()}static playGame(){0==this.appData.playCards.length&&setTimeout((function(){d.winGame()}),1e3),setTimeout((function(){d.playLast()}),500)}static setShuffleCards(){this.appData.playCards=this.appData.cards.sort((()=>Math.random()-.5))}static playLast(){if(0==this.appData.playCards.length)return;const t=this.appData.playCards;a.play(t.last().audioSrc)}static checkCard(t){const e=this.appData.playCards.last().word,i=document.querySelector(".stars");if(t.dataset.name==e){const e=document.createElement("div");e.className="star--gold",i.appendChild(e),a.play("audio/correct.mp3"),this.appData.playCards.pop(),t.classList.add("card__correct"),r.addPointToStatistic(this.appData,t.dataset.name,"hit"),this.playGame()}else{this.appData.errors+=1;const t=document.createElement("div");t.className="star-grey",i.appendChild(t),a.play("audio/error.mp3"),r.addPointToStatistic(this.appData,this.appData.playCards.last().word,"mis")}}static changeForRepeatButton(){let a=document.querySelector(".game__button");const t=a.parentNode;t.removeChild(a),t.innerHTML='<button type="button" class="repeat__button btn text-light mx-auto">Repeat</button>'}static winGame(){0==this.appData.errors?(a.play("audio/success.mp3"),this.makePopup("win.png","Cool!")):(a.play("audio/failure.mp3"),this.makePopup("mis.png","Has to work!"))}static makePopup(a,t){const e=document.createElement("div");e.className="popup",e.innerHTML=`<div class="mx-auto">\n         <img src="./assets/img/${a}" class="popup__img">\n         </div>\n         <div class=""><button  class="btn btn-warning" type="button">${t}</button></div>`,document.body.appendChild(e),document.querySelector(".btn-warning").addEventListener("click",d.goToMainPage)}static goToMainPage(){n.setTrainMode(),n.clearGameAttributes(),d.appData.page="Main Page",d.appData.play=!1,s.route(d.appData)}}const c={page:"Main Page",statCards:r.loadStatistics()};document.querySelector(".container-fluid").addEventListener("click",{handleEvent:class{static clickDispatcher(t){const e=this.appData;let o;if(("object"==typeof t&&"DIV"==t.target.parentElement.tagName||"object"==typeof t&&"IMG"==t.target.tagName||"A"==t.target.tagName)&&i.close(),"A"!=t.target.tagName&&"IMG"!=t.target.tagName||(o=t.target.dataset.name||t.target.alt||"A"==t.target.tagName&&t.target.innerText||e.page,n.clearGameAttributes(),e.page=o,e.play=!1,s.route(e)),t.target==cb&&e.play&&t.preventDefault(),t.target!=cb||e.play||s.route(e),t.target.classList.contains("front")){a.play(t.target.dataset.sound||t.target.parentElement.dataset.sound);const i=t.target.dataset.name||t.target.parentElement.dataset.name;r.addPointToStatistic(e,i,"train")}if(t.target.classList.contains("rotate")){const a=t.target;n.rotateCard(a)}t.target.classList.contains("game__button")&&(e.play=!0,d.appData=e,d.setGame()),t.target.classList.contains("repeat__button")&&d.playGame(),t.target.classList.contains("card__play")&&e.play&&!t.target.classList.contains("card__correct")&&d.checkCard(t.target),"undefined"!=typeof reset&&t.target==reset&&(e.statCards=r.makeStatisticsData(),r.saveStatistics(e),s.route(e))}}.clickDispatcher,appData:c}),n.setTrainMode(),s.route(c)})()})();