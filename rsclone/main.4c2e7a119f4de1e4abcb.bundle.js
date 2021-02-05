(()=>{"use strict";const t=document.createElement("canvas");t.className="canvas_back";const e=t.getContext("2d"),r=document.createElement("canvas");r.className="canvas_game";const i=r.getContext("2d"),s=document.createElement("canvas");s.className="canvas_high";const a=s.getContext("2d"),n=window.innerWidth,o=window.innerHeight,l=n>=1e3?1e3:10*Math.round(.8*n/10),d=10*Math.round(.85*o/10),b=l>800?80:10*Math.round(l/50),h=d>700?40:10*Math.round(d/150),c=l>800?7:3,_=80,m={current_round:0,MAX_ROUND:2,bricks:[],stop_game:!1,FONT_SIZE:l>800?30:20,round_score:0,game_score:0,passed_rounds:[!1,!1,!1],test_mode:!1,life:3},u={_2_seconds:!0,set_2_seconds(){u._2_seconds=!0,setTimeout((()=>{u._2_seconds=!1}),2e3)}},g={x:0,y:0,updating:!1,x_start:0,y_start:0,dx:0,dy:0,left_left_correction:0,right_correction:0},y={intro:{obj_audio:new Audio,src:"./assets/music/Matt Gray - Arkanoid Title Theme.mp3"},round_start:{obj_audio:new Audio,src:"./assets/music/Round Start.mp3"},sfx4:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (4).mp3"},sfx6:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (6).mp3"},sfx7:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (7).mp3"},sfx11:{obj_audio:new Audio,src:"./assets/music/Arkanoid SFX (11).mp3"},win:{obj_audio:new Audio,src:"./assets/music/Ending.mp3"},game_over:{obj_audio:new Audio,src:"./assets/music/Game Over.mp3"}},p=1.5,f=["bonus_l","bonus_s","bonus_c","bonus_d","bonus_e"],x={bonus_frame:0,setBonusRotation(){setInterval((()=>{x.bonus_frame+=1,x.bonus_frame>7&&(x.bonus_frame=0)}),150)}};function v(t,e){t.insertAdjacentHTML("afterbegin",e)}t.width=l,t.height=d,r.width=l,r.height=d,s.width=l,s.height=60;function w(t){const e=t.play();void 0!==e&&e.then((e=>{t.currentTime=0,t.play()})).catch((t=>{}))}function k(){document.body.innerHTML="",v(document.body,'\n<div class="container start-template">\n    <div class="d-flex flex-column mt-5 justify-content-center" >\n\n        <div class="d-flex +mt-2 justify-content-center" >\n            <img  class = "w-75" class="brd" src="./assets/img/rs_clone.svg" alt="rs_clone">\n        </div>\n        <div class="d-flex mt-5 justify-content-center" >\n            <img  class = "w-50" class="brd" src="./assets/img/arcade.svg" alt="arcade">\n        </div>\n\n        <div class="d-flex mt-4 justify-content-center" >\n            <button class="help text-white bg-black arcade-font h5 border-0" type="button">push<br>h button for help</button> \n        </div>\n\n        <div class="d-flex mt-4 justify-content-center" >\n            <button class="space text-white bg-black arcade-font h5 border-0" type="button">push<br>space to play</button> \n        </div>\n        <div class="d-flex mt-5 justify-content-center" >\n        <button class="music text-white bg-black arcade-font h5 border-0" type="button">play music</button> \n    </div>\n\n        <div class="d-flex mt-5 justify-content-center" >\n        <h2 class="text-center text-warning">TypeScript Project</h2>\n        </div>\n\n        <div class="d-flex  mt-2  justify-content-center" >\n        <a href="https://github.com/ya6" class="text-dark d-flex align-items-center">\n        <div class="github m-1"></div>\n        <h2 class="text-danger">ya6</h2>\n    </a>\n        </div>\n       \n    </div>\n\n    <div class="d-flex justify-content-center flex-wrap mt-2"  >\n              \n                <div class="mx-2">\n                    <a href="https://rs.school/js/" class="text-dark d-flex align-items-center">\n                        <div class="rs_school m-1"></div>\n                        <div  class="text-white"> "JavaScript/Front-end"</div>\n                    </a>\n                </div>\n               \n            <div class="mx-2 d-flex align-items-center"> <div><strong>2021</strong> </div></div>\n\n</div>\n'),function(t){var e,r,i,s;e=this,r=void 0,s=function*(){for(const e in t)t[e].obj_audio.src=t[e].src,yield t[e].obj_audio.readyState,HTMLMediaElement.HAVE_ENOUGH_DATA;return"sounds load!"},new((i=void 0)||(i=Promise))((function(t,a){function n(t){try{l(s.next(t))}catch(t){a(t)}}function o(t){try{l(s.throw(t))}catch(t){a(t)}}function l(e){var r;e.done?t(e.value):(r=e.value,r instanceof i?r:new i((function(t){t(r)}))).then(n,o)}l((s=s.apply(e,r||[])).next())}))}(y),w(y.intro.obj_audio),document.querySelector(".music").addEventListener("click",(()=>{w(y.intro.obj_audio)}))}function E(t){null!==t&&null!==t.parentNode&&t.parentNode.removeChild(t)}function I(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const j={background_1:{img:new Image,url:"./assets/img/back_1.jpg"},background_2:{img:new Image,url:"./assets/img/back_2.jpg"},background_3:{img:new Image,url:"./assets/img/back_3.jpg"},border_pipe_horizontal:{img:new Image,url:"./assets/img/border_pipe_horizontal.png"},border_pipe_vert:{img:new Image,url:"./assets/img/border_pipe_vert.png"},border_block_horizontal:{img:new Image,url:"./assets/img/border_block_horizontal.png"},border_block_vert:{img:new Image,url:"./assets/img/border_block_vert.png"},border_cornerTL:{img:new Image,url:"./assets/img/border_cornerTL.png"},border_cornerTR:{img:new Image,url:"./assets/img/border_cornerTR.png"},border_cornerBL:{img:new Image,url:"./assets/img/border_cornerBL.png"},border_cornerBR:{img:new Image,url:"./assets/img/border_cornerBR.png"},ball:{name:"ball",is_active:!0,img:new Image,url:"./assets/img/ball_2.png",x:Math.round((l-15)/2),y:d-_-15,width:15,height:15,speed:c,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.dy=-this.speed,this.stick||(this.dx=I(-this.speed,this.speed))},move(){this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=j.platform.x+j.platform.width/2-this.width/2),this.dimensionUpdate()},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.stick=!1,this.x=Math.round(Math.round((l-15)/2)),this.y=d-_-15,this.dy=0,this.dx=0,this.acceleration=0}},ball2:{name:"ball2",is_active:!1,img:new Image,url:"./assets/img/ball_3.png",x:Math.round((l-15)/2)-16,y:d-_-15,width:15,height:15,speed:c,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.is_active&&(this.x=j.platform.x+j.platform.width/2-16,this.dy=-this.speed,this.dx=I(-this.speed,this.speed))},move(){this.is_active&&(this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=j.platform.x+j.platform.width/2-this.width/2-16),this.dimensionUpdate())},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.is_active=!1,this.stick=!1,this.x=Math.round((l-15)/2)-16,this.y=d-_-15,this.dy=0,this.dx=0,this.acceleration=0}},ball3:{name:"ball3",is_active:!1,img:new Image,url:"./assets/img/ball_3.png",x:Math.round((l-15)/2)+16,y:d-_-15,width:15,height:15,speed:c,dx:0,dy:0,acceleration:0,stick:!1,l:{x:0,y:0},r:{x:0,y:0},t:{x:0,y:0},b:{x:0,y:0},start(){this.is_active&&(this.x=j.platform.x+j.platform.width/2+16,this.dy=-this.speed,this.dx=I(-this.speed,this.speed))},move(){this.is_active&&(this.dy&&(this.y+=this.dy,this.x+=this.dx),0===this.dy&&(this.x=j.platform.x+j.platform.width/2-this.width/2+16),this.dimensionUpdate())},dimensionUpdate(){this.l.x=this.x,this.l.y=this.y+7,this.r.x=this.x+15,this.r.y=this.y+7,this.t.x=this.x+7,this.t.y=this.y,this.b.x=this.x+7,this.b.y=this.y+15},reset(){this.is_active=!1,this.stick=!1,this.x=Math.round((l-15)/2)+16,this.y=d-_-15,this.dy=0,this.dx=0,this.acceleration=0}},platform:{img:new Image,url:"./assets/img/platform_++.png",x:(l-100)/2,y:d-_,frame_position:0,width:100,height:30,speed:10,dx:0,dy:0,acceleration:0,l:0,r:0,t:0,b:0,start(t){37===t&&(this.dx=-this.speed),39===t&&(this.dx=this.speed)},move(){(this.x>=40&&this.x<=l-(40+this.width)||this.x<=40&&this.dx>0||this.x>=l-(40+this.width)&&this.dx<0)&&(this.dx&&(this.x+=this.dx),this.dimensionUpdate())},stop(){this.dx=0,this.acceleration=0},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},reset(){this.x=(l-100)/2,this.y=d-_,this.frame_position=0,this.width=100}},bullet_1:{img:new Image,url:"./assets/img/bullet.png",is_active:!1,x:Math.round(l/2-50),y:d-_,width:12,height:24,speed:c,dx:0,dy:0,t:{x:0,y:0},fire(){this.dy=-this.speed},move(){this.dy&&(this.y+=this.dy),0===this.dy&&(this.x=j.platform.x+5),this.dimensionUpdate()},dimensionUpdate(){this.t.x=this.x+7,this.t.y=this.y},reset(){this.x=Math.round(l/2-50),this.y=d-_,this.dy=0}},bullet_2:{img:new Image,url:"./assets/img/bullet.png",is_active:!1,x:Math.round(l/2+30),y:d-_,width:12,height:24,speed:c,dx:0,dy:0,t:{x:0,y:0},fire(){this.dy=-this.speed},move(){this.dy&&(this.y+=this.dy),0===this.dy&&(this.x=j.platform.x+j.platform.width-20),this.dimensionUpdate()},dimensionUpdate(){this.t.x=this.x+7,this.t.y=this.y},reset(){this.x=Math.round(l/2-50),this.y=d-_,this.dy=0}},bonus_l:{img:new Image,url:"./assets/img/bonus_l.png",x:0,y:0,l:0,r:0,t:0,b:0,width:b,height:h,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=p,this.y>d&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,w(y.sfx4.obj_audio),j.bullet_1.is_active=!0,j.bullet_2.is_active=!0,j.platform.frame_position=250,j.platform.width=100,setTimeout((()=>{j.bullet_1.is_active=!1,j.bullet_2.is_active=!1,j.platform.frame_position=0,j.platform.width=100}),15e3)}},bonus_s:{img:new Image,url:"./assets/img/bonus_s.png",x:0,y:0,l:0,r:0,t:0,b:0,width:b,height:h,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=p,this.y>d&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,j.ball.dy/=2,j.ball.dx/=1.5,setTimeout((()=>{j.ball.dy=j.ball.dy>0?c:-c,j.ball.dx*=1.5}),2e4)}},bonus_c:{img:new Image,url:"./assets/img/bonus_c.png",x:0,y:0,l:0,r:0,t:0,b:0,width:b,height:h,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=p,this.y>d&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){this.bonus_start=!1,this.y=0,this.b=0,j.ball.stick=!0,j.ball2.stick=!0,j.ball3.stick=!0,setTimeout((()=>{j.ball.stick=!1,j.ball2.stick=!1,j.ball3.stick=!1}),2e4)}},bonus_d:{img:new Image,url:"./assets/img/bonus_d.png",x:0,y:0,l:0,r:0,t:0,b:0,width:b,height:h,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=p,this.y>d&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){j.bullet_1.is_active=!1,j.bullet_2.is_active=!1,j.platform.frame_position=0,j.platform.width=100,this.bonus_start=!1,this.y=0,this.b=0,j.ball2.is_active=!0,j.ball3.is_active=!0,j.ball2.start(),j.ball3.start()}},bonus_e:{img:new Image,url:"./assets/img/bonus_e.png",x:0,y:0,l:0,r:0,t:0,b:0,width:b,height:h,frame:0,bonus_start:!1,bonus_activate:!1,move(){this.bonus_start&&(this.y+=p,this.y>d&&(this.bonus_start=!1),this.dimensionUpdate())},dimensionUpdate(){this.l=this.x,this.r=this.x+this.width,this.t=this.y,this.b=this.y+this.height},activate(){j.bullet_1.is_active=!1,j.bullet_2.is_active=!1,this.bonus_start=!1,this.y=0,this.b=0,w(y.sfx4.obj_audio),j.platform.frame_position=100,j.platform.width=150,j.platform.x+j.platform.width>l-60&&(j.platform.x=j.platform.x-60),setTimeout((()=>{j.platform.frame_position=0,j.platform.width=100}),2e4)}},br_green:{img:new Image,url:"./assets/img/brick_green.png",width:b,height:h},br_magenta:{img:new Image,url:"./assets/img/brick_magenta.png",width:b,height:h},br_yellow:{img:new Image,url:"./assets/img/brick_yellow.png",width:b,height:h},br_grey:{img:new Image,url:"./assets/img/brick_grey.png",width:b,height:h},br_red:{img:new Image,url:"./assets/img/brick_red.png",width:b,height:h},br_blue:{img:new Image,url:"./assets/img/brick_blue.png",width:b,height:h},br_dark:{img:new Image,url:"./assets/img/brick_dark_grey.png",width:b,height:h}};function T(){e.clearRect(0,0,l,d);const t=`background_${String(m.current_round+1)}`;e.drawImage(j[t].img,0,0),e.lineWidth=15,e.strokeStyle="black",e.strokeRect(0,0,l,d),e.shadowColor="#000a1e",e.shadowBlur=5,e.shadowOffsetX=5,e.shadowOffsetY=5,e.drawImage(j.border_pipe_horizontal.img,4,4,l-8,18),e.drawImage(j.border_pipe_vert.img,4,4,18,d-12),e.drawImage(j.border_pipe_vert.img,l-22,4,18,d-12),e.shadowColor="",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(j.border_cornerTL.img,4,4),e.drawImage(j.border_cornerTR.img,l-40,4),e.shadowColor="#000a1e",e.shadowBlur=5,e.shadowOffsetX=5,e.shadowOffsetY=5;let r=2,i=(l-j.border_block_horizontal.img.width*r)/(r*r);for(let t=1;t<=r;t++)e.drawImage(j.border_block_horizontal.img,i*(t+t-1)+j.border_block_horizontal.img.width*(t-1),0,j.border_block_horizontal.img.width,j.border_block_horizontal.img.height);r=Math.floor(d/(1.5*j.border_block_vert.img.height)),i=(d-j.border_block_vert.img.height*(r-1))/r;for(let t=1;t<r;t++)e.drawImage(j.border_block_vert.img,0,i*t+j.border_block_vert.img.height*(t-1)),e.drawImage(j.border_block_vert.img,l-26,i*t+j.border_block_vert.img.height*(t-1))}const L=[[["br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey","br_grey"],["br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red","br_red"],["br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow","br_yellow"],["br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue","br_blue"],["br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta","br_magenta"],["br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green","br_green"]],[["br_grey","","","","","","","","","",""],["br_grey","br_yellow"],["br_grey","br_yellow","br_blue"],["br_grey","br_yellow","br_blue","br_green"],["br_grey","br_yellow","br_blue","br_green","br_red"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey","br_green"],["br_grey","br_yellow","br_blue","br_green","br_red","br_yellow","br_magenta","br_grey","br_green","br_blue"],["br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_dark","br_red"]],[["br_yellow","br_blue","br_green","br_dark","br_magenta","","br_grey","br_magenta","br_yellow","br_blue","br_green"],["br_blue","br_green","br_dark","br_magenta","br_grey","","br_magenta","br_yellow","br_blue","br_green","br_yellow"],["br_green","br_dark","br_magenta","br_grey","br_magenta","","br_yellow","br_blue","br_green","br_yellow","br_blue"],["br_dark","br_magenta","br_grey","br_magenta","br_yellow","","br_blue","br_green","br_yellow","br_blue","br_green"],["br_magenta","br_grey","br_magenta","br_yellow","br_blue","","br_green","br_yellow","br_blue","br_green","br_dark"],["br_grey","br_magenta","br_yellow","br_blue","br_green","","br_yellow","br_blue","br_green","br_dark","br_magenta"],["br_magenta","br_yellow","br_blue","br_green","br_yellow","","br_blue","br_green","br_dark","br_magenta","br_grey"],["br_yellow","br_blue","br_green","br_yellow","br_blue","","br_green","br_dark","br_magenta","br_grey","br_magenta"],["br_blue","br_green","br_yellow","br_blue","br_green","","br_dark","br_magenta","br_grey","br_magenta","br_yellow"]]];function R(t=0){const e=[];let r=Math.floor((l-b)/b);r=r%2==0?r-1:r,r=r>L[t][0].length?L[t][0].length:r;const i=(L[t][0].length-r)/2,s=i+r,a=(l-r*b)/2;for(let r=0;r<L[t].length;r++){let n=0;for(let o=i;o<s;o++)L[t][r][o]&&e.push({type:L[t][r][o],x:a+b*n,y:70+h*r,width:b,height:h,l:a+b*n,r:a+b*n+b,t:70+h*r,b:70+h*r+h}),n+=1}return f.forEach((t=>{let r=I(0,e.length-1);for(;!e[r];)r=I(0,e.length-1);e[r].bonus=j[t],j[t].x=e[r].x,j[t].y=e[r].y})),e}function U(){g.updating?r.style.cursor="ew-resize":r.style.cursor="default"}function M(t){t.preventDefault(),0===j.ball.dy&&j.ball.start(),0===j.ball2.dy&&j.ball2.is_active&&j.ball2.start(),0===j.ball3.dy&&j.ball3.is_active&&j.ball3.start(),g.x=j.platform.x+j.platform.width/2,g.y=j.platform.y+j.platform.height/2,g.x_start=g.x,g.y_start=g.y,g.left_correction=g.x_start-j.platform.l,g.right_correction=j.platform.r-g.x_start,g.updating=!0,U(),[j.bullet_1,j.bullet_2].forEach((t=>{0!==j.ball.dy&&t.is_active&&t.fire()}))}function A(t){g.x=t.pageX-r.getBoundingClientRect().left,g.y=t.pageY-r.getBoundingClientRect().top,g.x>=j.platform.x&&g.x<=j.platform.x+j.platform.width&&g.y>=j.platform.y&&g.y<=j.platform.y+j.platform.height&&(g.x_start=g.x,g.y_start=g.y,g.left_correction=g.x_start-j.platform.l,g.right_correction=j.platform.r-g.x_start,g.updating=!g.updating,U())}function S(t){g.x=t.pageX-r.getBoundingClientRect().left,g.y=t.pageY-r.getBoundingClientRect().top,g.updating&&(g.dx=g.x_start-g.x,g.x>30+g.left_correction&&g.x<l-(g.right_correction+30+j.platform.width-100)&&(j.platform.x=g.x-g.left_correction))}function B(t){const e=t.keyCode;37!==e&&39!==e||j.platform.start(e),32===e&&([j.ball,j.ball2,j.ball3].forEach((t=>{0===t.dy&&t.start()})),[j.bullet_1,j.bullet_2].forEach((t=>{0!==j.ball.dy&&t.is_active&&t.fire()})))}function C(){j.platform.stop()}function O(t){a.clearRect(0,0,l,60),a.font=m.FONT_SIZE/1.5+"px ArcadeNormal",a.textAlign="center",a.textBaseline="middle",a.fillStyle="red",a.fillText("HIGH SCORE",l/2,15),a.fillText("1 UP",l/8,15),a.fillStyle="white",a.fillText("50000",l/2,45),a.fillText(`${t}`,l/8,45)}let N;const X={x:0,y:0,x_start:0,y_start:0,dx:0,dy:0,x_direction:0};function z(){document.removeEventListener("keydown",B),document.removeEventListener("keyup",C),document.removeEventListener("keypress",$),r.removeEventListener("click",A),r.removeEventListener("mousemove",S),document.removeEventListener("contextmenu",M),r.removeEventListener("dblclick",M),r.removeEventListener("touchstart",H),r.removeEventListener("touchmove",F)}function D(t){m.bricks[t].bonus&&(m.bricks[t].bonus.bonus_start=!0),m.bricks.splice(t,1),m.round_score+=10,O(`${m.round_score}`),0===m.bricks.length&&Y("next")}function F(t){X.x=t.changedTouches[0].pageX-r.getBoundingClientRect().left,j.platform.x>=40&&j.platform.x<=l-(40+j.platform.width)&&(j.platform.x=X.x+X.dx,j.platform.x<40&&(j.platform.x=40),j.platform.x>l-(40+j.platform.width)&&(j.platform.x=l-(40+j.platform.width))),X.x_direction=X.x_direction+t.changedTouches[0].pageX}function H(t){X.x_start=t.changedTouches[0].pageX-r.getBoundingClientRect().left,X.y_start=t.changedTouches[0].pageY-r.getBoundingClientRect().top,X.dx=j.platform.x-X.x_start}function Y(t){let e;for(G(),"next"===t&&(m.passed_rounds[m.current_round]=!0,e=m.passed_rounds.indexOf(!1),-1===e&&(m.stop_game=!0,i.clearRect(0,0,l,d),m.stop_game=!0,z(),w(y.win.obj_audio),q("YOU WIN!"),setTimeout((()=>{i.clearRect(0,0,l,d),J(),Z()}),6200))),m.current_round+=1,m.current_round===m.MAX_ROUND+1&&(m.current_round=0);-1!==e&&m.passed_rounds[m.current_round];)m.current_round+=1,m.current_round===m.MAX_ROUND+1&&(m.current_round=0);-1!==e&&(T(),m.bricks=R(m.current_round),w(y.round_start.obj_audio),u.set_2_seconds(),P(`ROUND ${m.current_round+1}`))}function G(){j.ball.reset(),j.ball2.reset(),j.ball3.reset(),j.platform.reset(),j.bullet_1.is_active=!1,j.bullet_2.is_active=!1,m.stop_game=!0,f.forEach((t=>{j[t].bonus_start=!1}))}function $(t){"KeyC"===t.code&&Y("skip"),"KeyT"===t.code&&(m.test_mode=!m.test_mode)}function q(t){i.font=m.FONT_SIZE+"px ArcadeNormal",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#fff5f5",i.shadowBlur=10,i.shadowColor="black",i.fillText(`${t}`,l/2,d-d/2)}function P(t){N===j.platform.x?j.platform.acceleration=0:N>j.platform.x?j.platform.acceleration=-1:j.platform.acceleration=1,window.requestAnimationFrame((()=>{j.platform.move(),[j.ball,j.ball2,j.ball3].forEach((t=>{t.move()})),[j.bullet_1,j.bullet_2].forEach((t=>{t.move()})),f.forEach((t=>{j[t].move()})),function(t){i.clearRect(0,0,l,d),m.test_mode&&(i.drawImage(j.border_pipe_horizontal.img,4,d-22,l-8,18),i.drawImage(j.border_cornerBL.img,4,d-40),i.drawImage(j.border_cornerBR.img,l-40,d-40)),i.shadowColor="#000a1e",i.shadowBlur=5,i.shadowOffsetX=5,i.shadowOffsetY=5,[j.ball,j.ball2,j.ball3].forEach((t=>{t.is_active&&i.drawImage(t.img,0,0,t.width,t.height,t.x,t.y,t.width,t.height)})),[j.bullet_1,j.bullet_2].forEach((t=>{t.is_active&&i.drawImage(t.img,0,0,t.width,t.height,t.x,t.y,t.width,t.height)})),i.drawImage(j.platform.img,j.platform.frame_position,0,j.platform.width,j.platform.height,j.platform.x,j.platform.y,j.platform.width,j.platform.height),i.shadowColor="",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0,t.forEach((function(t){i.drawImage(j[t.type].img,t.x,t.y,t.width,t.height)}));for(let t=1;t<m.life;t++)i.drawImage(j.platform.img,0,0,100,j.platform.height,60*t,d-40,50,15)}(m.bricks),u._2_seconds&&q(t),function(){const t=l-25,e=d-25;(!m.test_mode&&j.ball.t.y>=d&&j.ball2.t.y>=d&&j.ball3.t.y>=d||!m.test_mode&&j.ball.t.y>=d&&!j.ball2.is_active&&!j.ball3.is_active)&&(w(y.sfx11.obj_audio),G(),m.life-=1,m.life>0?(u.set_2_seconds(),P(`ROUND ${m.current_round+1}`)):(i.clearRect(0,0,l,d),m.stop_game=!0,z(),w(y.game_over.obj_audio),q("GAME OVER!"),setTimeout((()=>{i.clearRect(0,0,l,d),J(),Z()}),3e3))),!m.test_mode&&j.ball2.t.y>=d&&(j.ball2.is_active=!1),!m.test_mode&&j.ball3.t.y>=d&&(j.ball3.is_active=!1),[j.ball,j.ball2,j.ball3].forEach((r=>{r.t.y<=25&&(r.dy=-r.dy),r.l.x<=25&&(r.dx=-r.dx),r.b.y>=e&&m.test_mode&&(r.dy=-r.dy),r.r.x>=t&&(r.dx=-r.dx)}))}(),[j.ball,j.ball2,j.ball3].forEach((t=>{t.b.x>=j.platform.l-10&&t.b.x<j.platform.r+10&&t.b.y>=j.platform.t&&t.b.y-10<j.platform.t&&(t.stick||0===t.dy?t.stick&&0!==t.dy&&(t.dx=0,t.dy=0):(w(y.sfx6.obj_audio),t.dy=-t.dy),0!==t.dy&&(t.dx+=j.platform.acceleration))})),f.forEach((t=>{(j[t].l>=j.platform.l&&j[t].l<=j.platform.r&&j[t].b<=j.platform.b&&j[t].b>=j.platform.t||j[t].r>=j.platform.l&&j[t].r<=j.platform.r&&j[t].b<=j.platform.b&&j[t].b>=j.platform.t)&&j[t].activate()})),[j.ball,j.ball2,j.ball3].forEach((t=>{m.bricks.forEach((function(e,r){return t.is_active&&t.b.x>=e.l&&t.b.x<=e.r&&t.b.y>=e.t&&t.b.y<e.b||t.is_active&&t.t.x>=e.l&&t.t.x<=e.r&&t.t.y<=e.b&&t.t.y>e.t?(w(y.sfx7.obj_audio),t.dy=-t.dy,void D(r)):t.is_active&&t.r.y>=e.t&&t.r.y<=e.b&&t.r.x>=e.l&&t.r.x<e.r?(w(y.sfx7.obj_audio),t.dx=-t.dx,void D(r)):t.is_active&&t.l.y>=e.t&&t.l.y<=e.b&&t.l.x<=e.r&&t.l.x>e.l?(t.dx=-t.dx,w(y.sfx7.obj_audio),void D(r)):void 0}))})),[j.bullet_1,j.bullet_2].forEach((t=>{m.bricks.forEach((function(e,r){if(t.is_active&&t.t.x>=e.l&&t.t.x<=e.r&&t.t.y<=e.b&&t.t.y>e.t)return w(y.sfx7.obj_audio),t.reset(),void D(r)}))})),[j.bullet_1,j.bullet_2].forEach((t=>{t.is_active&&t.t.y<=0&&t.reset()})),f.forEach((t=>{j[t].bonus_start&&i.drawImage(j[t].img,80*x.bonus_frame,0,80,40,j[t].x,j[t].y,j[t].width/1.5,j[t].height/1.5)})),m.stop_game?m.stop_game=!1:P(t)})),N=j.platform.x}function K(){document.addEventListener("keydown",B),document.addEventListener("keyup",C),document.addEventListener("keypress",$),r.addEventListener("click",A),r.addEventListener("mousemove",S),document.addEventListener("contextmenu",M),r.addEventListener("dblclick",M),r.addEventListener("touchstart",H),r.addEventListener("touchmove",F),m.bricks=R(m.current_round),T(),x.setBonusRotation(),w(y.round_start.obj_audio),O("0000"),u.set_2_seconds(),P(`ROUND ${m.current_round+1}`)}function W(){return E(document.querySelector(".start-template")),v(document.body,'  \n<div class=" spinner mt-5 d-flex justify-content-center">\n  <div class="spinner-border" role="status">\n    \n  </div>\n\n'),t.style.left=r.style.left=s.style.left=(n-l)/2+"px",document.body.appendChild(s),document.body.appendChild(t),document.body.appendChild(r),m.life=3,m.current_round=0,m.round_score=0,m.game_score=0,m.passed_rounds=[!1,!1,!1],j.ball.reset(),j.ball2.reset(),j.ball3.reset(),j.platform.reset(),function(t){return e=this,r=void 0,s=function*(){for(const e in t)t[e].img.src=t[e].url,yield t[e].img.decode();return"images uploaded"},new((i=void 0)||(i=Promise))((function(t,a){function n(t){try{l(s.next(t))}catch(t){a(t)}}function o(t){try{l(s.throw(t))}catch(t){a(t)}}function l(e){var r;e.done?t(e.value):(r=e.value,r instanceof i?r:new i((function(t){t(r)}))).then(n,o)}l((s=s.apply(e,r||[])).next())}));var e,r,i,s}(j).then((()=>{const t=document.querySelector(".spinner");null!==t&&null!==t.parentNode&&t.parentNode.removeChild(t)})).then(K),"game loaded"}function Z(){k()}function J(){document.body.addEventListener("keypress",V),document.body.addEventListener("click",V)}function V(t){const e=t.target;(e.classList.contains("space")||"Space"===t.code)&&(document.body.removeEventListener("keypress",V),document.body.removeEventListener("click",V),y.intro.obj_audio.pause(),y.intro.obj_audio.currentTime=0,W()),(e.classList.contains("help")||"KeyH"===t.code)&&(E(document.querySelector(".start-template")),v(document.body,'\n<div class="container start-template">\n\n        <div class="d-flex flex-column mt-2 justify-content-center">\n\n            <div class="d-flex mt-2 justify-content-center">\n                <img class="w-50" class="brd" src="./assets/img/arcade.svg" alt="arcade">\n            </div>\n\n            <div class="my-2">\n            <div class="text-danger  arcade-font h5 "> About Project </div>\n\n            <div><span class="h4"> It is a student project: "RS Clone" JavaScript/Front-End 2020Q3 by Rolling Scopes School</span> </div>\n           \n        </div>\n        <hr>\n\n            <div class="my-2">\n                <div class="text-white  arcade-font h5 "> Keyboard </div>\n\n                <div><span class="h5">"Space"</span> - start the ball, &#160;&#160; <span class="h5">"Arrow left, Arrow\n                        right"</span> - move the platform,\n                    &#160;&#160; <span class="h5">"C"</span> - skip the level</div>\n            </div>\n            <hr>\n\n     \n            <div class="my-2">\n                <div class="text-white  arcade-font h5 "> Mouse </div>\n                <div><span class="h5">"Right click"</span> - start the ball & bind the platform, &#160;&#160;\n                    <span class="h5">"Left click on platform"</span> - binding - unbinding the mouse and the platform\n                </div>\n            </div>\n            <hr>\n\n            <div class="my-2">\n                <div class="text-white  arcade-font h5"> Touch screen </div>\n                <div><span class="h5">"Double Tap"</span> - start the ball, &#160;&#160;\n                    <span class="h5">"Swipe Right-Left" </span> - move the platform\n                </div>\n            </div>\n            <hr>\n\n\n            <div class="my-2">\n            <div class="text-warning  arcade-font h5"> Test Mode </div>\n            <div><span class="h5">"T"</span> - set bottom frame pipe for reflection</div>\n        </div>\n        <hr>\n\n        <div class="my-2">\n        <div class="text-white  arcade-font h5"> Game bonuses </div>   \n        <div><span class="h5">Get the acceleration, when reflect the ball by moving platform</span></div>\n        <div><span class="h5">"Bonus L"</span> - shooting platform</div> \n        <div><span class="h5">"Bonus S"</span> - slowing down the ball</div>\n        <div><span class="h5">"Bonus C"</span> - sticking the ball to the platform</div>\n        <div><span class="h5">"Bonus D"</span> - adding 2 extra balls</div>\n        <div><span class="h5">"Bonus E"</span> - lengthening platform by 1.5 times</div>\n    </div>\n    <hr>\n            <div class="d-flex mt-3 justify-content-center">\n                <button class="space text-white bg-black arcade-font h4 border-0" type="button">push<br>space to play</button>\n            </div>\n\n        </div>\n\n    </div>\n'))}J(),Z()})();