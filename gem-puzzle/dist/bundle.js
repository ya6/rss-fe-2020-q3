(()=>{let e;e=document.body.clientWidth<360?200:document.body.clientWidth<560?360:500;let t,n,a,o=4,s=0,i=[],d={},l=!1,c=1,r="assets/img/default_4.jpg",m=!1,u=0,g=!1,_={sec:0,min:0},p=!1,v=null,b=null,f=!1;document.body.innerHTML=' <div class="game_field">\n    <div class="header">\n        <div class="header__sticker">\n            <div class="rss_sticker"></div>\n        </div>\n        <div class="header__gamedata">\n            <div id="time_game" class=""></div>\n            <div id="steps_game" class=""></div>\n        </div>\n\n    </div>\n    <div class="menu__top">\n        <div class="menu__top_inner">\n            <button id="start_game" type="button" class="button button--green"> <span>Start</span></button>\n            <button id="reset_game" type="button" class="button button--red"> <span>Reset</span></button>\n            <button id="solve_game" type="button" class="button button--leaf"><span>Solve</span></button>\n        </div>\n\n        <div class="menu__top_inner">  <button id="size_game" type="button" class="button button--nightsky"><span>4х4</span></button>\n        <button id="classic_game" type="button" class="button button--blue"><span>Classic</span></button>\n            <button id="image_game" type="button" class="button button--water"><span>Image</span></button>\n        </div>\n    </div>\n\n    <div class="menu__bottom">\n        <div class="menu__top_inner">\n            <button id="save_game" type="button" class="button button--nightsky"> <span>Save</span></button>\n            <button id="load_game" type="button" class="button button--nightsky"> <span>Load</span></button>\n            <button id="score_game" type="button" class="button button--nightsky"><span>Score</span></button>\n        </div>\n        <div class="menu__top_inner">\n            <button id="sound_game" type="button" class="button "><span>Sound</span></button>\n        </div>\n       \n    </div>\n</div>\n\n<audio id="sound_1" src="./assets/sounds/sound_1.mp3"></audio>\n    ';const y=document.querySelector(".game_field"),x=document.querySelector(".rss_sticker"),h=document.querySelector(".menu__bottom");document.querySelector(".menu__top"),start_game.addEventListener("click",G),reset_game.addEventListener("click",(function(){z(),m&&clearInterval(m),W(),M(start_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game),z(),l=!1,R(),D(),$()})),solve_game.addEventListener("click",(function(){if(!l)return;l=!1,u=0,g&&clearInterval(g),time_game.textContent="--:--",z();let e=i.length-1;m=setInterval((()=>{if(E(),C(start_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game),e<=o*o)M(start_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game),clearInterval(m);else{let t=window[i[e][0]],n=window[i[e-1][0]];n.id.style.transition="0.3s",[n.x,t.x]=[t.x,n.x],[n.y,t.y]=[t.y,n.y],n.id.style.top=n.getY()+"px",n.id.style.left=n.getX()+"px",t.id.style.top=t.getY()+"px",t.id.style.left=t.getX()+"px"}e-=2}),500),g&&clearInterval(g)})),size_game.addEventListener("click",(function(e){W(),z(),o=o>=8?3:o+=1,i=[],Y(),j()})),classic_game.addEventListener("click",(function(){W(),z(),Y(),r="assets/img/default_4.jpg",j()})),image_game.addEventListener("click",(function(){W(),z(),l=!1,Y(),c=(c+1)%10,r="assets/img/"+c+".jpg",j()})),save_game.addEventListener("click",(function(){n.classList.remove("hidden"),n.innerHTML='\n    <div>\n    <div style="font-size:2rem; font-weight: bold">Save game</div>  \n     <div><button  id = "save_from_popup"  type=" button" class="button button--green"><span>Save</span></button></div>\n     <div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> \n     </div>\n    ',save_from_popup.addEventListener("click",F),cancel_from_popup.addEventListener("click",L),C(start_game,reset_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game,sound_game)})),load_game.addEventListener("click",(function(){n.classList.remove("hidden"),n.innerHTML='\n    <div>\n    <div style="font-size:2rem; font-weight: bold">Load game</div> \n     <div><button  id = "load_from_popup" type=" button" class="button button--green"><span>Load</span></button></div>\n     <div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> \n     </div>\n    ',load_from_popup.addEventListener("click",w),cancel_from_popup.addEventListener("click",L),C(start_game,reset_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game,sound_game)})),score_game.addEventListener("click",(function(){let e=function(){let e;e='\n     <div>\n     <div style="font-size:2rem; font-weight: bold">Score</div>';let t,n,a,o,s,i,d=localStorage.getItem("game_score")||"";d=d.split(",");for(let l=0;l<10;l++)t=d.pop(),i=d.pop(),i=`${i}x${i}`,n=d.pop(),a=d.pop(),o=a?I(Math.trunc(a/60)):"00",s=a?I(a%60):"00",e+=n?`<div  class ="popup__score" style = "background: #f4e9a1; margin:2px; padding: 1px 12px 1px 12px"> \n        ${t} ${i} moves: ${n} time: ${o}:${s}</div>`:'<div style = "background: #f4e9a1; margin:2px; padding: 1px 10px 1px 10px; color:#f4e9a1;">-</div>';return e+='<div><button  id = "cancel_from_popup" type=" button" class="button button--red"><span>Cancel</span></button><div> \n    </div>\n   ',e}();n.classList.remove("hidden"),n.innerHTML=e,cancel_from_popup.addEventListener("click",L),C(start_game,reset_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game,sound_game)})),sound_game.addEventListener("click",(function(){f=!f,sound_game.classList.toggle("button--nightsky")}));class k{constructor(e,t,n,a,o){this.num=e,this.name=t,this.id=n,this.x=a,this.y=o}getX(){return this.x*(e/o)+2.5}getY(){return this.y*(e/o)+2.5}getBlockSize(){return e/o-5}}function w(){M(start_game,reset_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game,sound_game);let e=localStorage.getItem("game_save");null!=e?(u=Number(localStorage.getItem("steps")),_.sec=Number(localStorage.getItem("time_sec")),_.min=Number(localStorage.getItem("time_min")),o=Number(localStorage.getItem("_field_size")),r=localStorage.getItem("_background_img_url"),e=e.split(","),a.src=r,Y(),a.addEventListener("load",(()=>{i=[];for(let t=0;t<e.length;t+=3)i.push([e[t],Number(e[t+1]),Number(e[t+2])]);p=!0,G()}))):(n.classList.remove("hidden"),n.innerHTML='\n    <div>\n     <div style="font-size:2rem; font-weight: bold; text-align: center">No saved game!</div>   \n     <div>\n        <button id ="cancel_from_popup" type=" button" class="button button--red" style="margin-top:0.5rem"><span>Cancel </span></button>\n     <div>   \n    </div>\n    ',cancel_from_popup.addEventListener("click",L))}function L(){n.innerHTML="",n.classList.add("hidden"),M(start_game,reset_game,size_game,solve_game,classic_game,image_game,save_game,load_game,score_game,sound_game)}function S(){let e,t=document.querySelector('input[name="score_name"]');_score=localStorage.getItem("game_score")||"";let n=_score.split(",");e=t.value.slice(0,10);let a=[60*_.min+(_.sec-1),u,o,e];n.push(a),localStorage.setItem("game_score",n),L()}function E(){steps_game.textContent=u+" moves",u++}function I(e){return(parseInt(e,10)<10?"0":"")+e}function z(){x.classList.remove("rss_sticker--move")}function C(...e){for(let t of e)t.disabled=!0,t.style.opacity="0.3"}function M(...e){for(let t of e)t.disabled=!1,t.style.opacity="1"}function $(){for(let e=0;e<i.length;e++){let t=window[i[e][0]];t.x=i[e][1],t.y=i[e][2],t.id.style.left=t.getX(t.x)+"px",t.id.style.top=t.getY(t.y)+"px"}}function N(e){let t;if(void 0===e){if(b.dataset.num!=="block_"+String(o*o))return;t=window[v.dataset.num],t.id.style.transition="0s"}else t=window[e.target.dataset.num],t.id.style.transition="0.3s";if(t.x==d.x&&t.y==d.y+1||t.x==d.x&&t.y==d.y-1||t.y==d.y&&t.x==d.x+1||t.y==d.y&&t.x==d.x-1){l&&E(),[t.x,d.x]=[d.x,t.x],[t.y,d.y]=[d.y,t.y],f&&sound_1.play(),t.id.style.top=t.getY()+"px",t.id.style.left=t.getX()+"px",d.id.style.top=d.getY()+"px",d.id.style.left=d.getX()+"px",l&&function(){for(let e=0;e<o*o;e++){let t=window["block_"+String(e+1)];if(t.x!==i[e][1]||t.y!==i[e][2])return}clearInterval(g),n.classList.remove("hidden");let e=`\n    <div>\n     <div style="font-size:2rem; font-weight: bold; color: green; text-align: center">Hooray! You solved the puzzle in</div>\n    \n     <div style=" font-size:1.5rem; text-align: center"> ${u-1} moves & time: ${_.min}:${_.sec-1} </div>\n     <div> <input type="text" style="line-height:1rem; padding: 0.5rem; border:3px solid green"   name="score_name" autofocus> </div>\n       \n     <div>\n        <button id ="save_score_from_popup" type=" button" class="button button--green"><span>Save yours result </span></button>\n        <button id ="cancel_from_popup" type=" button" class="button button--red" style="margin-top:0.5rem"><span>Cancel </span></button>\n     <div>\n    \n    </div>\n    `;n.innerHTML=e,save_score_from_popup.addEventListener("click",S),cancel_from_popup.addEventListener("click",L)}();let e=i.length-1;d.x==i[e-1][1]&&d.y==i[e-1][2]?(i.pop(),i.pop()):(i.push([t.name,t.x,t.y]),i.push([d.name,d.x,d.y]))}}function Y(){let e=document.querySelector(".game_field"),t=document.querySelector(".field");e.removeChild(t)}function q(e){v=this}function H(e){return e.preventDefault&&e.preventDefault(),!1}function T(e){}function X(e){}function B(e){return b=this,e.stopPropagation&&e.stopPropagation(),N(),!1}function A(e){}function j(){!function(){let e=Math.floor(11*Math.random())+1;x.style.background=`url("./assets/img/rsschool/sticker_${e}.png") center no-repeat`,x.style.backgroundSize="contain"}(),a=new Image,a.src=r,a.addEventListener("load",(()=>{s=a.width/(e+3),function(e){t=document.querySelector(".field"),null===t&&(t=document.createElement("div"),t.classList.add("field"),t.style.width=e+"px",t.style.height=e+"px",h.parentNode.insertBefore(t,h),y.addEventListener("dragover",H),y.addEventListener("dragenter",T))}(e),n=document.createElement("div"),n.className="popup hidden",n.style.width=e+"px",n.style.height=e+"px",t.appendChild(n),size_game.children[0].textContent=o+"x"+o,function(){!function(e){let t=0,n=[];i=[];for(let a=0;a<e;a++)for(let o=0;o<e;o++)window["block_"+String(t+1)]=new k(t+1,"block_"+String(t+1),"id_"+String(t+1),o,a),n=["block_"+String(t+1),o,a],i.push(n),t+=1;d=window["block_"+e*e]}(o);for(let i=1;i<=o*o;i++)(n=window["block_"+String(i)]).id=document.createElement("canvas"),n.id.setAttribute("id","id_"+n.num),n.id.setAttribute("data-num","block_"+n.num),n.id.setAttribute("draggable","true"),n.id.addEventListener("click",N,!1),n.id.addEventListener("dragstart",q,!1),n.id.addEventListener("dragenter",T,!1),n.id.addEventListener("dragover",H,!1),n.id.addEventListener("dragleave",X,!1),n.id.addEventListener("drop",B,!1),n.id.addEventListener("dragend",A,!1),n.id.classList.add("block"),n.id.style.width=n.getBlockSize()+"px",n.id.style.height=n.getBlockSize()+"px",n.id.style.left=n.getX()+"px",n.id.style.top=n.getY()+"px",t.appendChild(n.id),context=n.id.getContext("2d"),n.num!==o*o?(context.drawImage(a,n.getX()*s,n.getY()*s,e/o*s,e/o*s,0,0,n.id.width,n.id.height),"assets/img/default_4.jpg"==r&&(context.font="90px Arial Black",context.textAlign="center",context.textBaseline="middle",context.fillStyle="#fff5f5",context.shadowBlur=10,context.shadowColor="black",context.fillText(n.num,n.id.width/2,n.id.height/2))):(n.id.style.boxShadow="none",n.id.style.border="none");var n}()}))}function D(){for(let e=1;e<=o*o;e++)window["block_"+e].id.style.transition="0.3s"}function P(){let e=function(){const e=[["x","y"],[1,-1]];let t,n;return"x"===e[0][Math.round(Math.random())]?(t=Math.abs(d.x+e[1][Math.round(Math.random())]),n=d.y,t=t===o?o-2:t):(n=Math.abs(d.y+e[1][Math.round(Math.random())]),n=n===o?o-2:n,t=d.x),{new_x:t,new_y:n}}(),t=!1,n=i.length-1;if(e.new_x!==i[n-2][1]&&e.new_y!==i[n-2][2])for(;!t;){if(e.new_x==i[n][1]&&e.new_y==i[n][2]){let e=window[i[n][0]];[e.x,d.x]=[d.x,e.x],[e.y,d.y]=[d.y,e.y],i.push([e.name,e.x,e.y]),i.push([d.name,d.x,d.y]),t=!0}n--}}function W(){u=0,steps_game.textContent=u+" moves",_.sec=0,_.min=0,time_game.textContent=`${I(0)}:${I(0)}`,g&&clearInterval(g)}function R(){let e=0,t=[];i=[];for(let n=0;n<o;n++)for(let a=0;a<o;a++)t=["block_"+String(e+1),a,n],window["block_"+String(e+1)].x=a,window["block_"+String(e+1)].y=n,i.push(t),e+=1;d=window["block_"+String(o*o)]}function F(){u=u>0?u-1:0,_.sec=_.sec>0?_.sec-1:0,localStorage.setItem("game_save",i),localStorage.setItem("steps",u),localStorage.setItem("time_sec",_.sec),localStorage.setItem("time_min",_.min),localStorage.setItem("_field_size",o),localStorage.setItem("_background_img_url",r),L()}function G(){p||(_.sec=0,_.min=0),clearInterval(g),time_game.textContent=`${I(_.min)}:${I(_.sec)}`,g=setInterval((()=>{time_game.textContent=`${I(_.min)}:${I(_.sec)}`,59==_.sec&&(_.sec=0,_.min=(_.min+1)%60),_.sec=_.sec+1}),1e3),l=!0,p||(u=0),x.classList.add("rss_sticker--move"),p||R(),D(),E(),p||function(e){for(let t=0;t<e;t++)P()}(20*o),p=!1,$()}j()})();