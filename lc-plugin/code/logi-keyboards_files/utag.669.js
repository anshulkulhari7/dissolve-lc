//tealium universal tag - utag.669 ut4.0.202307270536, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<35){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.ev={"view":1};u.rp=function(a,b){if(typeof a!="undefined"&&a.indexOf(u.t)>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return encodeURIComponent(b[d]);}else{return'';}});}
return a;};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:669");utag.DB(b);var c;u.t="@@";u.i=[];u.p=["https://s.ml-attr.com/getuid?https%3a%2f%2fattr.ml-api.io%2f%3fdomain%3dwww.logitech.com%26pId%3d%24UID","","","","","","",""];u.delim="";u.cachebust="disabled";u.cachevar=""||"_rnd";setTimeout(function(){for(c=0;c<u.p.length;c++){if(u.p[c]!=""){var x=u.rp(u.p[c],b);if(x!=""){if(u.cachebust=="enabled"&&x.indexOf(u.cachevar)<0){if(x.indexOf("?")<0){u.delim="?";}else{u.delim="&";}
x+=u.delim+u.cachevar+"="+Math.random();}
var img=new Image();img.src=x;u.i.push(img);}}}},1000);}};utag.o[loader].loader.LOAD(id);}("669","logitech.main"));}catch(error){utag.DB(error);}
