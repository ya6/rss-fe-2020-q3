(()=>{"use strict";const t=document.createElement("canvas");t.className="canvas_back";const e=t.getContext("2d"),r=document.createElement("canvas");r.className="canvas_game";const s=r.getContext("2d"),n=window.innerWidth,i=window.innerHeight,a=n>=1e3?1e3:10*Math.round(.8*n/10),o=10*Math.round(.85*i/10),l=a>800?80:10*Math.round(a/100),d=o>700?40:10*Math.round(o/300),b=80,h={current_round:0,MAX_ROUND:2,bricks:[],stop_game:!1,FONT_SIZE:50,round_score:0,game_score:0,element_round_score:null,element_score_score:null,passed_rounds:[!1,!1,!1],test_mode:!1,life:3},c={_2_seconds:!0,set_2_seconds(){c._2_seconds=!0,setTimeout((()=>{c._2_seconds=!1}),2e3)}},_={x:0,y:0,updating:!1,x_start:0,y_start:0,dx:0,dy:0,left_left_correction:0,right_correction:0},m={intro:{obj_audio:new Audio,src:"./assets/music/Matt Gray - Arkanoid Title Theme.mp3"},round_start:{obj_audio:new Audio,src:"./assets/music/Round Start.mp3"},sfx4:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (4).mp3"},sfx6:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (6).mp3"},sfx7:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (7).mp3"},sfx11:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (11).mp3"},win:{obj_audio:new Audio,src:"./assets/music/Ending.mp3"},game_over:{obj_audio:new Audio,src:"./assets/music/Game Over.mp3"}},g=1.5,u=["bonus_s","bonus_c","bonus_d","bonus_e"],y={bonus_frame:0,setBonusRotation(){setInterval((()=>{y.bonus_frame+=1,y.bonus_frame>7&&(y.bonus_frame=0)}),150)}};function p(t,e){t.insertAdjacentHTML("afterbegin",e)}t.width=a,t.height=o,r.width=a,r.height=o;function f(t){const e=t.play();void 0!==e&&e.then((e=>{t.pause(),t.currentTime=0,t.play()})).catch((t=>{}))}function x(){document.body.innerHTML="",p(document.body,'\n<div class="container start-template">\n    <div class="d-flex flex-column mt-5 justify-content-center" >\n\n        <div class="d-flex mt-5 justify-content-center" >\n            <img  class = "w-75" class="brd" src="./assets/img/rsclone.svg" alt="rsclone">\n        </div>\n        <div class="d-flex mt-5 justify-content-center" >\n            <img  class = "w-50" class="brd" src="./assets/img/arkanoid.svg" alt="arkanoid">\n        </div>\n\n        <div class="d-flex mt-4 justify-content-center" >\n            <button class="help text-white bg-black arcade-font h5 border-0" type="button">push<br>h button for help</button> \n        </div>\n\n        <div class="d-flex mt-4 justify-content-center" >\n            <button class="space text-white bg-black arcade-font h5 border-0" type="button">push<br>space to play</button> \n        </div>\n        <div class="d-flex mt-5 justify-content-center" >\n        <button class="music text-white bg-black arcade-font h5 border-0" type="button">play music</button> \n    </div>\n\n        <div class="d-flex mt-5 justify-content-center" >\n        <h2 class="text-center text-warning">typescript project</h2>\n        </div>\n\n        <div class="d-flex  mt-2  justify-content-center" >\n        <a href="https://github.com/ya6" class="text-dark d-flex align-items-center">\n        <div class="github m-1"></div>\n        <h2 class="text-danger">ya6</h2>\n    </a>\n        </div>\n       \n    </div>\n\n    <div class="d-flex justify-content-center flex-wrap mt-2"  >\n              \n                <div class="mx-2">\n                    <a href="https://rs.school/js/" class="text-dark d-flex align-items-center">\n                        <div class="rsschool m-1"></div>\n                        <div  class="text-white"> "JavaScript/Front-end"</div>\n                    </a>\n                </div>\n               \n            <div class="mx-2 d-flex align-items-center"> <div><strong>2021</strong> </div></div>\n\n</div>\n'),function(t){var e,r,s,n;e=this,r=void 0,n=function*(){for(const e in t)t[e].obj_audio.src=t[e].src,yield t[e].obj_audio.readyState,HTMLMediaElement.HAVE_ENOUGH_DATA;return"sounds load!"},new((s=void 0)||(s=Promise))((function(t,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function o(t){try{l(n.throw(t))}catch(t){i(t)}}function l(e){var r;e.done?t(e.value):(r=e.value,r instanceof s?r:new s((function(t){t(r)}))).then(a,o)}l((n=n.apply(e,r||[])).next())}))}(m),f(m.intro.obj_audio),document.querySelector(".music").addEventListener("click",(()=>{f(m.intro.obj_audio)}))}function w(t){null!==t&&null!==t.parentNode&&t.parentNode.removeChild(t)}function v(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const k={background:{img:new Image,url:"./assets/img/back_5.png"},border_pipe_horizontal:{img:new Image,url:"./assets/img/border_pipe_horizontal.png"},border_pipe_vert:{img:new Image,url:"./assets/img/border_pipe_vert.png"},border_block_horizontal:{img:new Image,url:"./assets/img/border_block_horizontal.png"},border_block_vert:{img:new Image,url:"./assets/img/border_block_vert.png"},border_cornerTL:{img:new Image,url:"./assets/img/border_cornerTL.png"},border_cornerTR:{img:new Image,url:"./assets/img/border_cornerTR.png"},border_cornerBL:{img:new Image,url:"./assets/img/border_cornerBL.png"},border_cornerBR:{img:new Image,url:"./assets/img/border_cornerBR.png"},ball:{name:"ball",is_active:!0,img:new Image,url:"./assets/img/ball_2.png",x:(a-15)/2,y:o-b-15,width:15,height:15,speed:7,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.dy=-this.speed,this.dx=v(-this.speed,this.speed)},move(){this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=k.platform.x+k.platform.width/2-this.width/2),this.dimensionUpdate()},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.x=(a-15)/2,this.y=o-b-15,this.dy=0,this.dx=0,this.acceleration=0}},ball2:{name:"ball2",is_active:!1,img:new Image,url:"./assets/img/ball_2.png",x:(a-15)/2-16,y:o-b-15,width:15,height:15,speed:7,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.is_active&&(this.x=k.platform.x+k.platform.width/2,this.dy=-this.speed,this.dx=v(-this.speed,this.speed))},move(){this.is_active&&(this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=k.platform.x+k.platform.width/2-this.width/2-16),this.dimensionUpdate())},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.x=(a-15)/2-16,this.y=o-b-15,this.dy=0,this.dx=0,this.acceleration=0,this.is_active=!1}},ball3:{name:"ball3",is_active:!1,img:new Image,url:"./assets/img/ball_2.png",x:(a-15)/2+16,y:o-b-15,width:15,height:15,speed:7,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.is_active&&(this.x=k.platform.x+k.platform.width/2+16,this.dy=-this.speed,this.dx=v(-this.speed,this.speed))},move(){this.is_active&&(this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=k.platform.x+k.platform.width/2-this.width/2+16),this.dimensionUpdate())},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.x=(a-15)/2+16,this.y=o-b-15,this.dy=0,this.dx=0,this.acceleration=0,this.is_active=!1}},platform:{img:new Image,url:"./assets/img/platform_+.png",x:(a-100)/2,y:o-b,frame_position:0,width:100,height:30,speed:10,dx:0,dy:0,acceleration:0,l:0,r:0,t:0,b:0,start(t){37===t&&(this.dx=-this.speed),39===t&&(this.dx=this.speed)},move(){(this.x>=40&&this.x<=a-(40+this.width)||this.x<=40&&this.dx>0||this.x>=a-(40+this.width)&&this.dx<0)&&(this.dx&&(this.x+=this.dx),this.dimensionUpdate())},stop(){this.dx=0,this.acceleration=0},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},reset(){this.x=(a-100)/2,this.y=o-b,this.frame_position=0,this.width=100}},bonus_s:{img:new Image,url:"./assets/img/bonus_s.png",x:0,y:0,l:0,r:0,t:0,b:0,width:l,height:d,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=g,this.y>o&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,k.ball.dy/=2,k.ball.dx/=1.5,setTimeout((()=>{k.ball.dy=k.ball.dy>0?7:-7,k.ball.dx*=1.5}),2e4)}},bonus_c:{img:new Image,url:"./assets/img/bonus_c.png",x:0,y:0,l:0,r:0,t:0,b:0,width:l,height:d,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=g,this.y>o&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,k.ball.stick=!0,k.ball2.stick=!0,k.ball3.stick=!0,setTimeout((()=>{k.ball.stick=!1,k.ball2.stick=!1,k.ball3.stick=!1}),2e4)}},bonus_d:{img:new Image,url:"./assets/img/bonus_d.png",x:0,y:0,l:0,r:0,t:0,b:0,width:l,height:d,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=g,this.y>o&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,k.ball2.is_active=!0,k.ball3.is_active=!0,k.ball2.start(),k.ball3.start()}},bonus_e:{img:new Image,url:"./assets/img/bonus_e.png",x:0,y:0,l:0,r:0,t:0,b:0,width:l,height:d,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=g,this.y>o&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,f(m.sfx4.obj_audio),k.platform.frame_position=100,k.platform.width=150,setTimeout((()=>{k.platform.frame_position=0,k.platform.width=100}),2e4)}},br_green:{img:new Image,url:"./assets/img/brick_green.png",width:l,height:d},br_magenta:{img:new Image,url:"./assets/img/brick_magenta.png",width:l,height:d},br_yellow:{img:new Image,url:"./assets/img/brick_yellow.png",width:l,height:d},br_grey:{img:new Image,url:"./assets/img/brick_grey.png",width:l,height:d},br_red:{img:new Image,url:"./assets/img/brick_red.png",width:l,height:d},br_blue:{img:new Image,url:"./assets/img/brick_blue.png",width:l,height:d},br_dark:{img:new Image,url:"./assets/img/brick_dark_grey.png",width:l,height:d}},E=[[["br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey"],["br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red"],["br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow"],["br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue"],["br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta"],["br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green"]],[["br_grey","","","","","","","","","",""],["br_grey","br_yellow"],["br_grey","br_yellow","br_blue"],["br_grey","br_yellow","br_blue","br_green"],["br_grey","br_yellow","br_blue","br_green","br_red"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey","br_green"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey","br_green","br_blue"],["br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_red"]],[["br_yellow","br_blue","br_green","br_dark","br_magenta","","br_grey","br_magenta","br_yellow","br_blue","br_green"],["br_blue","br_green","br_dark","br_magenta","br_grey","","br_magenta","br_yellow","br_blue","br_green","br_yellow"],["br_green","br_dark","br_magenta","br_grey","br_magenta","","br_yellow","br_blue","br_green","br_yellow","br_blue"],["br_dark","br_magenta","br_grey","br_magenta","br_yellow","","br_blue","br_green","br_yellow","br_blue","br_green"],["br_magenta","br_grey","br_magenta","br_yellow","br_blue","","br_green","br_yellow","br_blue","br_green","br_dark"],["br_grey","br_magenta","br_yellow","br_blue","br_green","","br_yellow","br_blue","br_green","br_dark","br_magenta"],["br_magenta","br_yellow","br_blue","br_green","br_yellow","","br_blue","br_green","br_dark","br_magenta","br_grey"],["br_yellow","br_blue","br_green","br_yellow","br_blue","","br_green","br_dark","br_magenta","br_grey","br_magenta"],["br_blue","br_green","br_yellow","br_blue","br_green","","br_dark","br_magenta","br_grey","br_magenta","br_yellow"]]];function I(t=0){const e=[];let r=Math.floor((a-l)/l);r=r%2==0?r-1:r,r=r>E[t][0].length?E[t][0].length:r;const s=(E[t][0].length-r)/2,n=s+r,i=(a-r*l)/2;for(let r=0;r<E[t].length;r++){let a=0;for(let o=s;o<n;o++)E[t][r][o]&&e.push({type:E[t][r][o],x:i+l*a,y:70+d*r,width:l,height:d,l:i+l*a,r:i+l*a+l,t:70+d*r,b:70+d*r+d}),a+=1}return u.forEach((t=>{let r=v(30,e.length-1);for(;!e[r];)r=v(30,e.length-1);e[r].bonus=k[t],k[t].x=e[r].x,k[t].y=e[r].y})),e}function j(){_.updating?r.style.cursor="ew-resize":r.style.cursor="default"}function L(t){t.preventDefault(),0===k.ball.dy&&k.ball.start(),_.x=k.platform.x+k.platform.width/2,_.y=k.platform.y+k.platform.height/2,_.x_start=_.x,_.y_start=_.y,_.left_correction=_.x_start-k.platform.l,_.right_correction=k.platform.r-_.x_start,_.updating=!0,j()}function T(t){_.x=t.pageX-r.getBoundingClientRect().left,_.y=t.pageY-r.getBoundingClientRect().top,_.x>=k.platform.x&&_.x<=k.platform.x+k.platform.width&&_.y>=k.platform.y&&_.y<=k.platform.y+k.platform.height&&(_.x_start=_.x,_.y_start=_.y,_.left_correction=_.x_start-k.platform.l,_.right_correction=k.platform.r-_.x_start,_.updating=!_.updating,j())}function R(t){_.x=t.pageX-r.getBoundingClientRect().left,_.y=t.pageY-r.getBoundingClientRect().top,_.updating&&(_.dx=_.x_start-_.x,_.x>30+_.left_correction&&_.x<a-(_.right_correction+30)&&(k.platform.x=_.x-_.left_correction))}function A(t){const e=t.keyCode;37!==e&&39!==e||k.platform.start(e),32===e&&[k.ball,k.ball2,k.ball3].forEach((t=>{0===t.dy&&t.start()}))}function B(){k.platform.stop()}let C;const O={x:0,y:0,x_start:0,y_start:0,dx:0,dy:0,x_direction:0};function S(){document.removeEventListener("keydown",A),document.removeEventListener("keyup",B),document.removeEventListener("keypress",D),r.removeEventListener("click",T),r.removeEventListener("mousemove",R),document.removeEventListener("contextmenu",L),r.removeEventListener("dblclick",L),r.removeEventListener("touchstart",X),r.removeEventListener("touchmove",M)}function U(t){var e;h.bricks[t].bonus&&(h.bricks[t].bonus.bonus_start=!0),h.bricks.splice(t,1),h.element_round_score&&(e=h.element_round_score,h.round_score+=10,e.textContent=String(h.round_score)),0===h.bricks.length&&N("next")}function M(t){O.x=t.changedTouches[0].pageX-r.getBoundingClientRect().left,k.platform.x>=40&&k.platform.x<=a-(40+k.platform.width)&&(k.platform.x=O.x+O.dx,k.platform.x<40&&(k.platform.x=40),k.platform.x>a-(40+k.platform.width)&&(k.platform.x=a-(40+k.platform.width))),O.x_direction=O.x_direction+t.changedTouches[0].pageX}function X(t){O.x_start=t.changedTouches[0].pageX-r.getBoundingClientRect().left,O.y_start=t.changedTouches[0].pageY-r.getBoundingClientRect().top,O.dx=k.platform.x-O.x_start}function N(t){let e;for(z(),"next"===t&&(h.passed_rounds[h.current_round]=!0,e=h.passed_rounds.indexOf(!1),-1===e&&(h.stop_game=!0,s.clearRect(0,0,a,o),h.stop_game=!0,S(),f(m.win.obj_audio),H("YOU WIN!"),setTimeout((()=>{K(),G()}),6e3))),h.current_round+=1,h.current_round===h.MAX_ROUND+1&&(h.current_round=0);-1!==e&&h.passed_rounds[h.current_round];)h.current_round+=1,h.current_round===h.MAX_ROUND+1&&(h.current_round=0);-1!==e&&(h.bricks=I(h.current_round),k.ball.reset(),k.platform.reset(),f(m.round_start.obj_audio),c.set_2_seconds(),Y(`ROUND ${h.current_round+1}`))}function z(){h.stop_game=!0,k.ball.reset(),k.ball2.reset(),k.ball3.reset(),k.platform.reset(),u.forEach((t=>{k[t].bonus_start=!1}))}function D(t){"KeyC"===t.code&&N("skip"),"KeyT"===t.code&&(h.test_mode=!h.test_mode)}function H(t){s.font=h.FONT_SIZE+"px ARCADECLASSIC",s.textAlign="center",s.textBaseline="middle",s.fillStyle="#fff5f5",s.shadowBlur=10,s.shadowColor="black",s.fillText(`${t}`,a/2,o-o/3)}function Y(t){C===k.platform.x?k.platform.acceleration=0:C>k.platform.x?k.platform.acceleration=-1:k.platform.acceleration=1,window.requestAnimationFrame((()=>{k.platform.move(),[k.ball,k.ball2,k.ball3].forEach((t=>{t.move()})),u.forEach((t=>{k[t].move()})),function(t){s.clearRect(0,0,a,o),h.test_mode&&(s.drawImage(k.border_pipe_horizontal.img,4,o-22,a-8,18),s.drawImage(k.border_cornerBL.img,4,o-40),s.drawImage(k.border_cornerBR.img,a-40,o-40)),s.shadowColor="#000a1e",s.shadowBlur=5,s.shadowOffsetX=5,s.shadowOffsetY=5,[k.ball,k.ball2,k.ball3].forEach((t=>{t.is_active&&s.drawImage(t.img,0,0,t.width,t.height,t.x,t.y,t.width,t.height)})),s.drawImage(k.platform.img,k.platform.frame_position,0,k.platform.width,k.platform.height,k.platform.x,k.platform.y,k.platform.width,k.platform.height),s.shadowColor="",s.shadowBlur=0,s.shadowOffsetX=0,s.shadowOffsetY=0,t.forEach((function(t){s.drawImage(k[t.type].img,t.x,t.y,t.width,t.height)}));for(let t=1;t<h.life;t++)s.drawImage(k.platform.img,0,0,100,k.platform.height,60*t,o-40,50,15)}(h.bricks),c._2_seconds&&H(t),function(){const t=a-25,e=o-25;!h.test_mode&&k.ball.t.y>=o&&(f(m.sfx11.obj_audio),z(),h.life-=1,h.life>0?(k.ball.reset(),k.platform.reset(),c.set_2_seconds(),Y(`ROUND ${h.current_round+1}`)):(s.clearRect(0,0,a,o),h.stop_game=!0,S(),f(m.game_over.obj_audio),H("GAME OVER!"),setTimeout((()=>{K(),G()}),3e3))),!h.test_mode&&k.ball2.t.y>=o&&(k.ball2.is_active=!1),!h.test_mode&&k.ball3.t.y>=o&&(k.ball3.is_active=!1),[k.ball,k.ball2,k.ball3].forEach((r=>{r.t.y<=25&&(r.dy=-r.dy),r.l.x<=25&&(r.dx=-r.dx),r.b.y>=e&&h.test_mode&&(r.dy=-r.dy),r.r.x>=t&&(r.dx=-r.dx)}))}(),[k.ball,k.ball2,k.ball3].forEach((t=>{t.b.x>=k.platform.l-10&&t.b.x<k.platform.r+10&&t.b.y>=k.platform.t&&t.b.y-10<k.platform.t&&(t.stick||0===t.dy?t.stick&&0!==t.dy&&(t.dx=0,t.dy=0):(f(m.sfx6.obj_audio),t.dy=-t.dy),0!==t.dy&&(t.dx+=k.platform.acceleration))})),u.forEach((t=>{(k[t].l>=k.platform.l&&k[t].l<=k.platform.r&&k[t].b<=k.platform.b&&k[t].b>=k.platform.t||k[t].r>=k.platform.l&&k[t].r<=k.platform.r&&k[t].b<=k.platform.b&&k[t].b>=k.platform.t)&&k[t].activate()})),[k.ball,k.ball2,k.ball3].forEach((t=>{h.bricks.forEach((function(e,r){return t.b.x>=e.l&&t.b.x<=e.r&&t.b.y>=e.t&&t.b.y<e.b||t.t.x>=e.l&&t.t.x<=e.r&&t.t.y<=e.b&&t.t.y>e.t?(f(m.sfx7.obj_audio),t.dy=-t.dy,void U(r)):t.r.y>=e.t&&t.r.y<=e.b&&t.r.x>=e.l&&t.r.x<e.r?(f(m.sfx7.obj_audio),t.dx=-t.dx,void U(r)):t.l.y>=e.t&&t.l.y<=e.b&&t.l.x<=e.r&&t.l.x>e.l?(t.dx=-t.dx,f(m.sfx7.obj_audio),void U(r)):void 0}))})),u.forEach((t=>{k[t].bonus_start&&s.drawImage(k[t].img,80*y.bonus_frame,0,80,40,k[t].x,k[t].y,k[t].width/1.5,k[t].height/1.5)})),h.stop_game?h.stop_game=!1:Y(t)})),C=k.platform.x}function F(){document.addEventListener("keydown",A),document.addEventListener("keyup",B),document.addEventListener("keypress",D),r.addEventListener("click",T),r.addEventListener("mousemove",R),document.addEventListener("contextmenu",L),r.addEventListener("dblclick",L),r.addEventListener("touchstart",X),r.addEventListener("touchmove",M),h.bricks=I(h.current_round),function(){e.drawImage(k.background.img,0,0),e.lineWidth=15,e.strokeStyle="black",e.strokeRect(0,0,a,o),e.shadowColor="#000a1e",e.shadowBlur=5,e.shadowOffsetX=5,e.shadowOffsetY=5,e.drawImage(k.border_pipe_horizontal.img,4,4,a-8,18),e.drawImage(k.border_pipe_vert.img,4,4,18,o-8),e.drawImage(k.border_pipe_vert.img,a-22,4,18,o-8),e.shadowColor="",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(k.border_cornerTL.img,4,4),e.drawImage(k.border_cornerTR.img,a-40,4),e.shadowColor="#000a1e",e.shadowBlur=5,e.shadowOffsetX=5,e.shadowOffsetY=5;let t=2,r=(a-k.border_block_horizontal.img.width*t)/(t*t);for(let s=1;s<=t;s++)e.drawImage(k.border_block_horizontal.img,r*(s+s-1)+k.border_block_horizontal.img.width*(s-1),0,k.border_block_horizontal.img.width,k.border_block_horizontal.img.height);t=Math.floor(o/(1.5*k.border_block_vert.img.height)),r=(o-k.border_block_vert.img.height*(t-1))/t;for(let s=1;s<t;s++)e.drawImage(k.border_block_vert.img,0,r*s+k.border_block_vert.img.height*(s-1)),e.drawImage(k.border_block_vert.img,a-26,r*s+k.border_block_vert.img.height*(s-1))}(),y.setBonusRotation(),f(m.round_start.obj_audio),c.set_2_seconds(),Y(`ROUND ${h.current_round+1}`)}function q(){return w(document.querySelector(".start-template")),p(document.body,'\n<div class="container arcade-font">\n    \n    <div class="d-flex j justify-content-around text-danger mb-0 mt-2">\n\n    <div>\n    <p class="h5 text-danger text-center"> 1 up </p>\n    <p class="h5 text-center text-white round-score">0000</p>\n    </div>\n\n    <div>\n    <h2 class="h5 text-danger text-center">HIGH SCORES </h2>\n    <h2 class="h5 text-center text-white game-score"> 00000 </h2>\n    </div>\n\n    <div>\n    <p class="h5 "></p>\n    <p class="h5"></p>\n    </div>\n   \n    </div>\n \n</div>\n    \n'),h.element_round_score=(".round-score",document.querySelector(".round-score")),t.style.left=r.style.left=(n-a)/2+"px",document.body.appendChild(t),document.body.appendChild(r),h.life=3,k.ball.reset(),function(t){return e=this,r=void 0,n=function*(){for(const e in t)t[e].img.src=t[e].url,yield t[e].img.decode();return"images load!"},new((s=void 0)||(s=Promise))((function(t,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function o(t){try{l(n.throw(t))}catch(t){i(t)}}function l(e){var r;e.done?t(e.value):(r=e.value,r instanceof s?r:new s((function(t){t(r)}))).then(a,o)}l((n=n.apply(e,r||[])).next())}));var e,r,s,n}(k).then(F),"game loaded"}function G(){x()}function K(){document.body.addEventListener("keypress",$),document.body.addEventListener("click",$)}function $(t){const e=t.target;(e.classList.contains("space")||"Space"===t.code)&&(document.body.removeEventListener("keypress",$),document.body.removeEventListener("click",$),m.intro.obj_audio.pause(),m.intro.obj_audio.currentTime=0,q()),(e.classList.contains("help")||"KeyH"===t.code)&&(w(document.querySelector(".start-template")),p(document.body,'\n<div class="container start-template">\n\n        <div class="d-flex flex-column mt-5 justify-content-center">\n\n\n            <div class="d-flex mt-5 justify-content-center">\n                <img class="w-50" class="brd" src="./assets/img/arkanoid.svg" alt="arkanoid">\n            </div>\n\n            <div class="my-2">\n                <div class="text-white  arcade-font h5 "> Keyboard </div>\n\n                <div><span class="h5">"Space"</span> - start the ball, &#160;&#160; <span class="h5">"Arrow left, Arrow\n                        right"</span> - move the platform,\n                    &#160;&#160; <span class="h5">"C"</span> - skip the level</div>\n            </div>\n            <hr>\n\n     \n            <div class="my-2">\n                <div class="text-white  arcade-font h5 "> Mouse </div>\n                <div><span class="h5">"Right click"</span> - start the ball, &#160;&#160;\n                    <span class="h5">"Left click on platform"</span> - binding - unbinding the mouse and the platform\n                </div>\n            </div>\n            <hr>\n\n            <div class="my-2">\n                <div class="text-white  arcade-font h5"> Touch screen </div>\n                <div><span class="h5">"Double Tap"</span> - start the ball, &#160;&#160;\n                    <span class="h5">"Swipe Right-Left" </span> - move the platform\n                </div>\n            </div>\n            <hr>\n\n\n            <div class="my-2">\n            <div class="text-warning  arcade-font h5"> Test Mode </div>\n            <div><span class="h5">"T"</span> - set bottom frame pipe for reflection</div>\n        </div>\n        <hr>\n\n        <div class="my-2">\n        <div class="text-white  arcade-font h5"> Bonus </div>\n        <div><span class="h5">The reflection of the ball when the platform is moving adds acceleration</span></div>\n        <div><span class="h5">"Bonus S"</span> - slowing down the ball</div>\n        <div><span class="h5">"Bonus C"</span> - sticking the ball to the platform</div>\n        <div><span class="h5">"Bonus D"</span> - adds 2 extra balls</div>\n        <div><span class="h5">"Bonus E"</span> - platform lengthening by 1.5 times</div>\n    </div>\n    <hr>\n            <div class="d-flex mt-3 justify-content-center">\n                <button class="space text-white bg-black arcade-font h4 border-0" type="button">push<br>space to play</button>\n            </div>\n\n        </div>\n\n    </div>\n'))}K(),G()})();