//tealium universal tag - utag.502 ut4.0.202307270536, Copyright 2023 Tealium.com Inc. All Rights Reserved.
if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments));};var n=window.pintrk;n.queue=[];n.version="3.0";}
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.defer=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){document.body.appendChild(b);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.event_lookup={"pagevisit":"PageVisit","viewcategory":"ViewCategory","search":"Search","addtocart":"AddToCart","checkout":"Checkout","watchvideo":"WatchVideo","signup":"Signup","lead":"Lead","custom":"Custom"};u.map={};u.extend=[function(a,b){try{if(1){jQuery('body').on('mousedown','#add-to-cart, #add-all-to-cart, .js-addToCartBtn, .js-add-to-cart',function(){var prodId=utag.data.product_sku_short;var prodPrice=jQuery(this).attr('data-analytics-product-list-price');pintrk('track','addtocart',{product_id:prodId,value:prodPrice,order_quantity:1,currency:'USD'});});$.fn.ignore=function(sel){return this.clone().find(sel||">*").remove().end();};}}catch(e){utag.DB(e)}}];u.loader_cb=function(a,b,c){utag.DB("send:502:CALLBACK");u.initialized=true;var obj={};if(u.data.order_subtotal){obj.value=parseFloat(u.data.order_subtotal);}
if(u.data.order_currency){obj.currency=u.data.order_currency;}
if(u.data.property){obj.property=u.data.property;}
if(u.data.search_query){obj.search_query=u.data.search_query;}
if(u.data.order_coupon_code){obj.promo_code=u.data.order_coupon_code;}
if(u.data.page_title){obj.page_title=u.data.page_title;}
if(u.data.video_title){obj.video_title=u.data.video_title;}
if(u.data.lead_type){obj.lead_type=u.data.lead_type;}
if(u.data.product_id.length){obj.line_items=[];for(var i=0;i<u.data.product_id.length;i++){var item={};if(u.data.product_id&&u.data.product_id[i]){item.product_id=u.data.product_id[i];}
if(u.data.product_name&&u.data.product_name[i]){item.product_name=u.data.product_name[i];}
if(u.data.product_unit_price&&u.data.product_unit_price[i]){item.product_price=parseFloat(u.data.product_unit_price[i]);}
if(u.data.product_category&&u.data.product_category[i]){item.product_category=u.data.product_category[i];}
if(u.data.product_variant&&u.data.product_variant[i]){item.product_variant=u.data.product_variant[i];}
if(u.data.product_variant_id&&u.data.product_variant_id[i]){item.product_variant_id=u.data.product_variant_id[i];}
if(u.data.product_brand&&u.data.product_brand[i]){item.product_brand=u.data.product_brand[i];}
if(u.data.product_quantity&&u.data.product_quantity[i]){item.product_quantity=parseInt(u.data.product_quantity[i]);if(u.data.order_id){if(!obj.order_quantity){obj.order_quantity=0;}
obj.order_quantity+=item.product_quantity;}}
obj.line_items.push(item);}}
if(u.data.order_id){u.data.event='checkout';obj.order_id=u.data.order_id;}
if(!u.data.event){u.data.event="PageVisit";}
pintrk('track',u.data.event,obj,u.track_error);utag.DB("send:502:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb();}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:502");utag.DB(b);var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://s.pinimg.com/ct/core.js","tag_id":"2612413255314","page_name":"","page_category":"","event":"","product_variant":"","product_variant_id":"","property":"","search_query":"","page_title":"","video_title":"","lead_type":"","product_id":[],"product_name":[],"product_brand":[],"product_category":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:502:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:502:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.event.length===0&&b._cevent!==undefined){u.data.event=(u.typeOf(b._cevent)==="array")?b._cevent.slice(0):[b._cevent];}
u.data.page_name=u.data.page_name||b["dom.title"];if(!u.data.tag_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.track_error=function(didInit,error){if(!didInit&&error){utag.DB(error);}}
if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data});pintrk('load',u.data.tag_id,{em:u.data.email_address,np:"tealium"});pintrk('page',{page_name:u.data.page_name,page_category:u.data.page_category});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_502","attrs":{}});}}
utag.DB("send:502:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("502","logitech.main"));}catch(error){utag.DB(error);}
