'use strict'
function Carousel(ww, hh){
    let that = this;
    this.width= ww;
    this.height = hh;
    this.picItems = document.getElementsByClassName("pic-item");
    let _picItems = this.picItems;
    let picNums = this.picItems.length;
    let goDirection = that.goNext;
    let showDirection = shownext;
    function shownext(n2) {
        if(n2===currentItem)
            return;
        $(_picItems[currentItem]).animate({left: -ww-10},700,"swing");
        $(iCricles[n2]).css({color:"red"});
        $(_picItems[n2]).css({left:ww-10}).animate({left:0},700,"swing");
        $(iCricles[currentItem]).css({color: "black"})
        currentItem = n2;
    }
    function showprevious (n2){
        if(n2===currentItem)
            return;
        $(_picItems[currentItem]).animate({left: ww+10},700,"swing");
        $(iCricles[n2]).css({color:"red"});
        $(_picItems[n2]).css({left:-ww+10}).animate({left:0},700,"swing");
        $(iCricles[currentItem]).css({color: "black"})
        currentItem = n2;
    }
    this.goNext= function (){
        showDirection = shownext;
        let n2 = (currentItem+1)%picNums;
        showDirection(n2);
    };
    this.goPrevious = function () {
        let n2 = (currentItem+picNums-1)%picNums;
        goDirection = that.goPrevious;
        showprevious(n2);
    }
    this.selectItem=function (elem) {
        clearInterval(carouselInterval);
        let n= Number(elem.attr("id").substr(7));
        showDirection(n);
        carouselInterval = setInterval(goDirection,2000);
    }
    this.next = function () {
        clearInterval(carouselInterval);
        goDirection=that.goNext;
        showDirection=shownext;
        goDirection();
        carouselInterval = setInterval(goDirection,2000);
    }
    this.previous = function () {
        clearInterval(carouselInterval);
        goDirection= that.goPrevious;
        showDirection=showprevious;
        goDirection();
        carouselInterval = setInterval(goDirection,2000);
    }
    this.resize = function (rw,rh) {

    }
    $(".elem-items").append("<p id='iRightArrow'><i class=\"material-icons\" >chevron_right</i></p>")
    for(let i=0 ; i<picNums; i++){
        $(".elem-items").append("<p class='iCircle' id='iCircle"+i+"'><i class=\"material-icons\" >brightness_1</i></p>");
    }
    $(".elem-items").append("<p id='iLeftArrow'><i class=\"material-icons\" >chevron_left</i></p>")
    let iCricles = document.getElementsByClassName("iCircle");
    let currentItem = 0;
    let carouselInterval = setInterval(this.goNext,2000);
}
function ProdContent() {
    let that = this;
    let products = {
        simple:{
            id:"simple",
            pic:"pics/simple/simple1.jpg",
            title:"رول‌پلاک ساده",
            shortDescription:"ارزان‌ترین و عمومی‌ترین نوع رول‌پلاک",
            longDescription:"رول‌پلاک ساده اولین، ساده‌ترین و ارزان‌ترین نوع رول‌پلاک است که از در عین حال بیشترین کاربرد را نیز دارد.  ",
            galleryImg:[
                "pics/simple/simple1.jpg",
                "pics/simple/simple2.jpg",
                "pics/simple/simple3.jpg",
                "pics/simple/simple4.jpg",
                "pics/simple/simple5.jpg",
                "pics/simple/simple6.jpg",
                "pics/simple/simple7.jpg"
            ]

        },
        edged:{
            id:"edged",
            pic:"pics/edged/edged1.jpg",
            title:"رول‌پلاک لبه‌دار",
            shortDescription:"در دیوار نمی‌پیچد.",
            longDescription:"رول‌پلاک ساده اولین، ساده‌ترین و ارزان‌ترین نوع رول‌پلاک است که از در عین حال بیشترین کاربرد را نیز دارد.  ",
            galleryImg:[
                "pics/edged/edged1.jpg",
                "pics/edged/edged2.jpg",
                "pics/edged/edged3.jpg",
                "pics/edged/edged4.jpg",
                "pics/edged/edged5.jpg",
                "pics/edged/edged6.jpg",
                "pics/edged/edged7.jpg"
            ]
        },
        butterfly:{
            id:"butterfly",
            pic:"pics/butterfly/butterfly1.jpg",
            title:"رول‌پلاک پروانه‌ای",
            shortDescription:"در بستن دو سطح مانند پرچ عمل می‌کند.",
            longDescription:"رول‌پلاک ساده اولین، ساده‌ترین و ارزان‌ترین نوع رول‌پلاک است که از در عین حال بیشترین کاربرد را نیز دارد.  ",
            galleryImg:[
                "pics/butterfly/butterfly1.jpg",
                "pics/butterfly/butterfly2.jpg",
                "pics/butterfly/butterfly3.jpg"
            ]
        },
        pronged:{
            id:"pronged",
            pic:"pics/pronged/pronged1.jpg",
            title:"رول‌پلاک شاخک‌دار",
            shortDescription:"در سست‌ترین دیوارها محکم می‌شود.",
            longDescription:"رول‌پلاک ساده اولین، ساده‌ترین و ارزان‌ترین نوع رول‌پلاک است که از در عین حال بیشترین کاربرد را نیز دارد.  ",
            galleryImg:[
                "pics/pronged/pronged1.jpg",
                "pics/pronged/pronged2.jpg",
                "pics/pronged/pronged3.jpg"
            ]
        }
    };
    let num =0;
    $("#main-title").find("i,span").css({width:"50px"});
    $("#main-title").hover(function () {
        $(this).find("h1,i").css({fontSize:"4.7vw",cursor:"pointer"})
    },function () {
        $(this).find("h1,i").css({fontSize:"4vw"})
    })
    this.getKindPage= function () {
        let kind;
        let str = "";
        let toolbarChain =[];
        for( kind in products){
            str+="<div class='kind-cart' data-target='"+kind+"'>";
            str+='<img src="'+products[kind]["pic"]+'">';
            str+='<h4>'+products[kind]["title"]+'</h4>';
            str+='<p>'+products[kind]["shortDescription"]+'</p>';
            str+="</div>"
        }

        $("#prod-content").append(str);
        $(".kind-cart").click(function () {
            let kind = $(this).attr("data-target");
            $("#toolbar").append("<p class='toolbar-item' data-target='"+kind+"'>"+products[kind].title+"</p>");
            let elTitle=$("#main-title>h1");
            elTitle.empty().text(products[kind].title).attr(kind);
            that.getProdPage(kind);
        });

    };
    this.getProdPage= function (kind) {
        let prod = products[kind];
        let prodPage = this;
        function ProdInfo () {

            let currentGalleryPic = 0;
            let pics = prod.galleryImg;
            let prodInfo = this;
            let father = document.getElementById("prod-content");
            function init (kind) {
                father.innerHTML='<div id="prod-title"><div id="prod-info"><h4></h4><div></div></div>' +
                    '<div id="prod-gallery"><div id="main-gallery">' +
                    '<div id="gallery-right-btn"><i class="material-icons " >keyboard_arrow_right</i></div>' +
                    '<div id="gallery-main-pic"><img src="" alt="main pic"></div>' +
                    '<div id="gallery-left-btn"><i class="material-icons " >keyboard_arrow_left</i></div>' +
                    '</div><div id="select-gallery"><div id="left-image"><img src="" alt="right pic"/> </div>' +
                    '<div id="main-image"><img src="" alt="main pic"/></div>' +
                    '<div id="right-image"><img src="" alt="left pic"/></div>' +
                    '</div></div></div>';
                let elem = $("#prod-info");
                // elem.find("h1").text(prod.title);
                elem.find("h4").text(prod.shortDescription);
                elem.find("div").text(prod.longDescription);
                showGallery(0);
                document.getElementById("gallery-right-btn").addEventListener("click", showNext);
                document.getElementById("gallery-left-btn").addEventListener("click",showPrevious);
            }
            function showGallery (nn) {
                let n =nn;
                let k=pics.length;
                $("#main-image>img").attr("src",pics[n]);
                $("#gallery-main-pic>img").attr("src",pics[n]);
                $("#left-image>img").attr("src",pics[(n+1)%k]);
                $("#right-image>img").attr("src",pics[(n+k-1)%k]);
                currentGalleryPic=n;
            }
            function showNext () {
                let n = (currentGalleryPic+1)%pics.length;
                showGallery(n);
            }
            function showPrevious (){
                let n = (currentGalleryPic+pics.length-1)%pics.length;
                showGallery(n);
            }
            father.innerHTML="";

            init(kind);

        }
        ProdInfo();
    };

}
$(document).ready(function () {

    let myCarousel = new Carousel($(window).outerWidth(), $(window).outerHeight());
    let products = new ProdContent();

    $("#carousel img").innerWidth($(window).innerWidth());
    let elem = document.querySelector("#carousel img:first-child");
    let h = $(elem).innerHeight()
    $("#carousel").innerHeight(h);
    $(myCarousel.picItems[0]).animate({left:0},700);
    $(".iCircle").click(function (){
        myCarousel.selectItem($(this));
    });
    $("#iLeftArrow").click(function () {
        myCarousel.next(myCarousel);
    });
    $("#carousel img").click(function () {
        alert($(window).innerWidth());
    });
    $("#iRightArrow").click(function () {
        myCarousel.previous(myCarousel);
    });
    $(window).resize(function () {
        let w = $(window).innerWidth();
        if(w<576) w=576;
        $("#carousel img").innerWidth(w);
        let elem = document.querySelector("#carousel img:first-child");
        let h = $(elem).innerHeight()
       $("#carousel").innerHeight(h);
    });
    $("#main-title").click(function () {


        let prodKind = document.getElementById("prod-content") ;
        if(prodKind.innerHTML===""){
            products.getKindPage();
        }
        let titleIcon = $("#main-title > i:first");
        let titleText=titleIcon.text();
        titleIcon.html("keyboard_arrow_right");
        $("#prodContent").slideToggle(300,function () {
            if(titleText==="keyboard_arrow_down")
                titleIcon.text("keyboard_arrow_up");
            else
                titleIcon.text("keyboard_arrow_down");
        });



    });
    $("#pageLink").click(function () {
       $(".toolbar-item").fadeOut(300,function () {
           $(this).remove();
       });
       let elTitle = $("#main-title > h1");
       elTitle.fadeOut(300,function () {
           elTitle.empty().text("محصولات").attr("data-type","kinds").fadeIn(300);
       });
        $("#prodContent").slideUp(1000,function () {
            $("#prod-content").empty();
            products.getKindPage();
            $(this).slideDown(1000);
        });

    });
});