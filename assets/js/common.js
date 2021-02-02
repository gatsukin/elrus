"use strict";var header=document.getElementById("header"),headerMap=document.querySelector(".header__main--map");if(document.getElementById("map")?(header.classList.add("fixed"),headerMap.style.display="none"):header.classList.contains("fixed")&&header.classList.remove("fixed"),document.getElementById("tel"))var phoneMask=IMask(document.getElementById("tel"),{mask:"+{7}(000)000-00-00"});if(document.getElementById("modal-tel"))phoneMask=IMask(document.getElementById("modal-tel"),{mask:"+{7}(000)000-00-00"});for(var events=["load","resize"],i=0;i<events.length;i++)window.addEventListener(events[i],function(){var vh=.01*window.visualViewport.height;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))});if(document.getElementById("modal")&&function(){for(var modal=document.getElementById("modal"),button=document.querySelectorAll(".modalOpen"),buttonClose=document.getElementById("modal-close"),_i=0;_i<button.length;_i++){button[_i].addEventListener("click",function(){modal.style.display="flex",setTimeout(function(){modal.classList.toggle("open")},10)})}buttonClose.addEventListener("click",function(){modal.classList.remove("open"),setTimeout(function(){modal.style.display="none"},300)})}(),document.getElementById("scroll-top")){var scrollbtn=document.getElementById("scroll-top");scrollbtn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}if(document.getElementById("lightgallery")&&lightGallery(document.getElementById("lightgallery"),{selector:".item",actualSize:!1}),document.getElementsByClassName("filter")){var checkboxListener=function(e){null==lastEl||lastEl!==e?(lastEl=e,chkboxArr.forEach(function(el){el.checked=!1}),e.checked=!0):lastEl==e&&(chkboxArr.forEach(function(el){el.checked=!0}),lastEl=void 0)},chkboxArr=document.querySelectorAll("#type input");chkboxArr.forEach(function(el){el.checked=!0});var elArr=[],lastEl=void 0,cityOpt=[{label:"Красноярск",value:"krasnoyarsk"},{label:"Москва",value:"Moscow"},{label:"Саратов",value:"Saratov"},{label:"Another one",value:"etc"}],costOpt=[{label:"1млн. - 10млн.",value:"12"},{label:"10млн. - 20млн.",value:"Moscow"},{label:"20млн. - 30млн.",value:"Saratov"},{label:"30млн. - 50млн.",value:"etc"},{label:"50млн. - 100млн.",value:"etc"}],distOpt=[{label:"Центральный р-н",value:"krasnoyarsk"},{label:"Ленинский р-н",value:"Moscow"},{label:"Косой переулок",value:"Saratov"},{label:"Октябрьский",value:"etc"}],sqOpt=[{label:"30кв.м - 50кв.м",value:"krasnoyarsk"},{label:"50кв.м - 150кв.м",value:"Moscow"},{label:"150кв.м - 300кв.м",value:"Saratov"},{label:"больше 300кв.м",value:"etc"}];VirtualSelect.init({ele:"#city",options:cityOpt,placeholder:"Город"}),VirtualSelect.init({ele:"#cost",options:costOpt,multiple:!0,placeholder:"Стоимость",search:!1}),VirtualSelect.init({ele:"#dist",options:distOpt,multiple:!0,placeholder:"Район",search:!1}),VirtualSelect.init({ele:"#sq",options:sqOpt,multiple:!0,placeholder:"Площадь",search:!1})}