/**
 * Created by zhangshengfeng on 2019/8/24.
 */
(function (log) {
    // log("123")
    // let mainContent = {
    //     W: document.documentElement.clientWidth || document.body.clientWidth,
    //     H: document.documentElement.clientHeight || document.body.clientHeight,
    //     scollTarget: null,
    //     startPage0: function () {
    //         let that = this;
    //         log("startPage0")
    //         $(".down").hide();
    //         $(".lightAni").removeClass(".lightAni");
    //         $(".page0Contet .light").addClass("lightAni");
    //         setTimeout(function () {
    //             $(".page0Contet .girl").addClass("lightAni");
    //             $(".page0Contet .word").addClass("lightAni");
    //             $(".page0Contet .hua").addClass("lightAni");
    //             setTimeout(function () {
    //                 //pageState[0]=true;
    //                 $("#down0").show();
    //                 that.scollTarget.setAllowScrolling(true, "down");
    //             }, 2000);
    //
    //         }, 1000);
    //     },
    //     startPage1: function () {
    //         log("startPage1")
    //         let that = this;
    //         $(".page1Contet input").val('');
    //         $(".page1Contet input").off("change");
    //         $(".page1Contet input").on("change",function(){
    //             $("#down1").hide();
    //             that.scollTarget.setAllowScrolling(false, "down,up");
    //         });
    //         $(".page1Contet .btn").off("click");
    //         $(".page1Contet .restBtn").on("click", function () {
    //             $(".page1Contet input").val(null);
    //             $("#down1").hide();
    //             that.scollTarget.setAllowScrolling(false, "down,up");
    //         });
    //         let timer;
    //         $(".page1Contet .startBtn").on("click", function () {
    //             //$(".page1Contet input").val('');
    //             if ($(".page1Contet input").val().length > 0) {
    //                 $("#down1").show();
    //                 that.scollTarget.setAllowScrolling(true, "down");
    //             } else {
    //                 $(".tankuang").show();
    //                 window.clearTimeout(timer);
    //                 timer = setTimeout(function () {
    //                     $(".tankuang").hide();
    //                 }, 1000)
    //             }
    //
    //         });
    //     },
    //     startPage2: function () {
    //         log("startPage2")
    //         setTimeout(function () {
    //             $(".ansPage").show();
    //         }, 1000);
    //     },
    //     startPage3: function () {
    //         log(".startPage3")
    //         setTimeout(function () {
    //             $(".ansPage").show();
    //         }, 1000);
    //     },
    //     startPage4: function () {
    //         log(".startPage4")
    //         setTimeout(function () {
    //             $(".ansPage").show();
    //         }, 1000);
    //     },
    //     startPage5: function () {
    //         log(".startPage5")
    //         setTimeout(function () {
    //             $(".ansPage").show();
    //         }, 1000);
    //     },
    //     startPage6: function () {
    //         log(".startPage6")
    //         setTimeout(function () {
    //             $(".ansPage").show();
    //         }, 1000);
    //     },
    //     startPage7: function () {
    //         log(".startPage7")
    //         $(".waitPage").show();
    //         $(".ka").hide();
    //         $(".card").hide();
    //         setTimeout(function () {
    //             $(".ka"+ Math.floor( ( Math.random() * 1 ) + 5 )).show();
    //             $(".waitPage").hide();
    //             $(".ansPage").show();
    //             $(".card").show();
    //         }, 3000);
    //
    //     },
    //
    //     init: function () {
    //         let that = this;
    //         var html = document.getElementsByTagName('html')[0];
    //         //屏幕的宽度（兼容处理）
    //         let w = this.W;
    //         let h = this.H;
    //         if (w / h > 750 / 1174) {
    //             $(".page2Contet,.page3Contet,.page4Contet,.page5Contet,.page6Contet,.page0Contet,.page7Contet").width(w);
    //             $(".page2Contet,.page3Contet,.page4Contet,.page5Contet,.page6Contet,.page0Contet,.page7Contet").height(w * (1134 / 750));
    //             $(".down").css("bottom", -(h - w * (1134 / 750)) / 2 + 5)
    //             $(".carImg").width(h * 600 / 950 * (950 / 1174))
    //             $(".carImg").height(h * (950 / 1174))
    //         } else {
    //             $(".page2Contet,.page3Contet,.page4Contet,.page5Contet,.page6Contet,.page0Contet,.page7Contet").width(h * (750 / 1134));
    //             $(".page2Contet,.page3Contet,.page4Contet,.page5Contet,.page6Contet,.page0Contet,.page7Contet").height(h);
    //             $(".down").css("bottom", '1%')
    //             $(".carImg").width(w * 600 / 750)
    //             $(".carImg").height(w * 600 / 750 / (600 / 950))
    //             $(".carImg").css("bottom", "10%")
    //
    //         }
    //         $("#down1").css("bottom", '1%')
    //         $(".card").width(w);
    //         $(".card").height(h);
    //
    //         //$(".down").css("top",h*0.90)
    //
    //         let content3BoxScale = 1;
    //         if (w / h <= 750 / 1174) {
    //             content3BoxScale = ((w / h) / (750 / 1174));
    //
    //         } else {
    //             content3BoxScale = 1 / ((w / h) / (750 / 1174));
    //
    //         }
    //         if (content3BoxScale > 1) {
    //             content3BoxScale = 1;
    //         }
    //         $("#men").css({
    //                 'transform': `scale(${content3BoxScale})`,
    //                 '-ms-transform': `scale(${content3BoxScale})`,
    //                 '-moz-transform': `scale(${content3BoxScale})`,
    //                 '-webkit-transform': `scale(${content3BoxScale})`,
    //                 '-o-transform': `scale(${content3BoxScale})`    /* Opera */
    //             }
    //         );
    //
    //         $('#mainContent').fullpage({
    //             onLeave: function (index, nextIndex, direction) {
    //                 console.log(index, nextIndex, direction)
    //                 $.fn.fullpage.setAllowScrolling(false, "down,up");
    //                 $(".down").hide();
    //                 $(".ansPage").hide();
    //                 $(".duihao").remove();
    //                 if (index == 1) {
    //                     that.startPage1();
    //                 } else if (index == 2) {
    //                     that.startPage2();
    //                 } else if (index == 3) {
    //                     that.startPage3();
    //                 } else if (index == 4) {
    //                     that.startPage4();
    //                 } else if (index == 5) {
    //                     that.startPage5();
    //                 } else if (index == 6) {
    //                     that.startPage6();
    //                 } else if (index == 7) {
    //                     that.startPage7();
    //                 }
    //             },
    //             afterLoad: function (anchorLink, index) {
    //                 console.log(anchorLink, index)
    //             },
    //         });
    //         $(".question").off('click');
    //         $(".question").on('click', function () {
    //             $(".duihao").remove();
    //             $(this).append(`<img src="img/duihao.png" alt="" class="duihao">`)
    //             $(".down").show();
    //             that.scollTarget.setAllowScrolling(true, "down");
    //         });
    //         $(".shareBtn").off('click');
    //         $(".shareBtn").on('click', function () {
    //             alert("分享提示")
    //         });
    //         $(".againBtn").off('click');
    //         $(".againBtn").on('click', function () {
    //             that.scollTarget.moveTo(1)
    //             that.startPage0();
    //         });
    //         //$.fn.fullpage.setAllowScrolling(false);
    //         this.scollTarget = $.fn.fullpage;
    //         this.scollTarget.setAllowScrolling(false, "down,up");
    //         this.startPage0();
    //     }
    // };
    function upData() {
        //log($(".page2Contet .questionBox>.active"))
        let data = {
            username: $(".page1Contet input").val(),
            sex: $(".sexBtnActive").data("id"),
            question_1: [$(".page2Contet .questionBox>.active").data("id")],
            question_2: [$(".page3Contet .questionBox>.active").data("id")],
            question_3: [$(".page4Contet .questionBox>.active").data("id")],
            question_4: [$(".page5Contet .questionBox>.active").data("id")],
            question_5: [],
        }
        let page6Contet = $(".page6Contet .questionBox>.active");
        for (let id = 0; id < page6Contet.length; id++) {

            data.question_5.push($(page6Contet[id]).data("id"))
        }
        log(data);
        //return false;
        $.ajax({
            url: "https://www.jwnice.com/jyserver/wukong/index.php/crm/question/save",
            type: "POST",

            headers: {
                //'Content-Type': 'application/json',
                Accept: "application / json; version=1.0",

                //Authorization: g_info.user.token,  //参数
            },
            //data: JSON.stringify({
            //    "method": "reset",
            //
            //
            //}),
            data: data,
            success: function (res) {

                log("reset=======end", res)


            }
        })
    }

    function canvas(ele, call) {//ele 为带id值，
        var canvas = document.createElement("canvas");
        //默认生成的 canvas 图片在 retina 设备上显示很模糊，处理成 2 倍图能解决这个问题：
        var w = $(ele).width();
        var h = $(ele).height();
        log(w, h)

//要将 canvas 的宽高设置成容器宽高的 2 倍

        canvas.width = w * 4;
        canvas.height = h * 4;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var context = canvas.getContext("2d");
//然后将画布缩放，将图像放大两倍画到画布上
        context.scale(4, 4);
        //html2canvas(document.querySelector(ele), {
        //    canvas: canvas,
        //    useCORS: true,
        //    logging: true,
        //
        //    //proxy:"https://facefusion-merge-1254418846.cos.ap-guangzhou.myqcloud.com",
        //    //background:"rgba(0,0,0,0)",
        //    onrendered: function (canvas) {
        //
        //
        //    }
        //});
        html2canvas(document.querySelector(ele), {
            canvas: canvas,
            useCORS: true,
            logging: true,
            //backgroundColor: "rgba(0,0,0,0)"
        }).then(canvas => {
            call(canvas.toDataURL("image/jpeg", 0.8))
        });
    }

    function loading(target, call) {

        //bdtj("loading");


        log("loading");


        let lazyLoad = $(target + " .lazyLoad");
        let lazyLoadLen = lazyLoad.length;
        //log("lazyLoad", lazyLoad)
        let lazyLoadNum = 0;

        lazyLoad.each(function () {
            this.src = $(this).data("src");
            //log(this)
            $(this).on("load", function () {
                lazyLoadNum++;
                //log("lazyLoadNum", lazyLoadNum)
                $(this).off("load");
                let _currtP = lazyLoadNum / lazyLoadLen;
                // log(lazyLoadNum, lazyLoadLen)
                call(_currtP * 100)
                //$("#loadPage .line").width(_p * _currtP + "%");
                //if (lazyLoadNum < lazyLoadLen) {
                //
                //} else {
                //
                //
                //
                //}
            })

        });
        //startGame();
    }

    let animalNum = 0;
    function get_length(s){
        var char_length = 0;
        for (var i = 0; i < s.length; i++){
            //var son_char = s.charAt(i);
            //encodeURI(son_char).length > 2 ? char_length += 1 : char_length += 0.5;

            var c = s.charCodeAt(i);
            //单字节加1
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
                char_length +=0.5;
            }
            else {
                char_length +=1;
            }
            log("C--",c)
        }
        log(char_length)
        return char_length;
    }
    function cut_str(str, len){
        var char_length = 0;
        for (var i = 0; i < str.length; i++){
            //var son_str = str.charAt(i);
            //encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
            var c = str.charCodeAt(i);
            //单字节加1
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
                char_length +=0.5;
            }
            else {
                char_length +=1;
            }
            if (char_length >= len){
                var sub_len = char_length == len ? i+1 : i;
                return str.substr(0, sub_len);
                break;
            }
        }
    }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    loading("#loadPage", function (p) {
        if (p == 100) {
            loading("#mainContent", function (p) {

                $('.loadW1').hide();
                $('.loadW2').hide();
                $('.loadW3').hide();
                let intP = parseInt(p);
                if (intP >= 100) {
                    $($(".loadW").find(".loadW1")[1]).show();
                    $($(".loadW").find(".loadW2")[0]).show();
                    $($(".loadW").find(".loadW3")[0]).show();


                } else if (intP > 9) {

                    $($(".loadW").find(".loadW3")[intP % 10]).show();
                    $($(".loadW").find(".loadW2")[Math.floor(intP / 10)]).show();
                } else {
                    //$('.loadW .loadW1').hide();
                    //$('.loadW .loadW2').hide();
                    //$('.loadW .loadW3').attr("src",`img/load/${intP%10}.png`)
                    $($(".loadW").find(".loadW3")[intP % 10]).show();
                }

                //$('.loadW').text(parseInt(p*100)+"%");
                $(".redLine").css("right", (100 - parseInt(p)) + "%");
                $(".loadQq").css("left", (parseInt(p) + "%"));
                if (intP == 100) {
                    setTimeout(function () {
                        $("#loadPage").hide();
                        $(".ansPage").hide();
                        $("#mainContent").css("display", "block");

                        //$("#bgMusic")[0].play();
                        // mainContent.init();
                        var mySwiper = new Swiper('.swiper-container', {
                            direction: 'vertical', // 垂直切换选项
                            speed: 800,
                            on: {
                                init: function () {
                                    //Swiper初始化了
                                    // alert('当前的slide序号是'+this.activeIndex);
                                    let that = this;
                                    $(".down").hide();
                                    $(".lightAni").removeClass(".lightAni");
                                    $(".page0Contet .girl").addClass("lightAni");
                                    let timer;
                                    timer = setTimeout(function () {
                                        window.clearTimeout(timer);
                                        $(".page0Contet .light").addClass("lightAni");
                                        timer = setTimeout(function () {
                                            window.clearTimeout(timer);
                                            $(".page0Contet .hua").addClass("lightAni");
                                            timer = setTimeout(function () {
                                                window.clearTimeout(timer);
                                                $(".page0Contet .word0").addClass("lightAni");
                                                timer = setTimeout(function () {
                                                    window.clearTimeout(timer);
                                                    $(".page0Contet .word1").addClass("lightAni");
                                                    timer = setTimeout(function () {
                                                        window.clearTimeout(timer);
                                                        $(".page0Contet .word2").addClass("lightAni");
                                                        timer = setTimeout(function () {
                                                            window.clearTimeout(timer);
                                                            $(".page0Contet .word3").addClass("lightAni");
                                                            timer = setTimeout(function () {
                                                                window.clearTimeout(timer);
                                                                //pageState[0]=true;
                                                                $(".tip").show();

                                                                $(".page0Contet").one("click", function () {
                                                                    that.slideNext();
                                                                    //mySwiper.slideNext();
                                                                })
                                                                // that.scollTarget.setAllowScrolling(true, "down");
                                                            }, 2000);

                                                        }, 1000)

                                                    }, 1000)

                                                }, 1000)

                                            }, 1000)
                                        }, 1000)
                                    }, 1000);
                                    //this.slideNext();
                                    //this.slideTo(7);
                                    //return false;
                                },
                                slideNextTransitionEnd: function () {
                                    console.log("this.activeIndex", this.activeIndex)
                                    if (this.activeIndex == 1) {
                                        //this.slideNext();
                                        //return false;
                                        //let that = this;
                                        $(".page1Contet input").val('');
                                        //let inputVal;
                                        $(".page1Contet input").off("input porpertychange'");
                                        $(".page1Contet input").on("input porpertychange'", function () {
                                            //log("inputpropertychange len",$(this).val().replace(/[^\x00-\xff]/g,"aa").length)
                                            //$("#down1").hide();
                                            // that.scollTarget.setAllowScrolling(false, "down,up");
                                            let inputVal=$(this).val();
                                            log("inputVal",inputVal)
                                            //let len=$(this).val().replace(/[^\x00-\xff]/g,"aa").length;
                                            //if(len<=10){
                                            //    inputVal=$(this).val();
                                            //}else{
                                            //    inputVal=$(this).val();
                                            if(get_length(inputVal)>5){

                                                $(".page1Contet input").val(cut_str(inputVal,5));
                                                $(".tankuangBox .tankuang").hide();
                                                $(".tankuangBox .tankuang2").show();
                                                $(".tankuangBox").show();
                                            }
                                                //var char_length = 0;
                                                //for (var i = 0; i < inputVal.length; i++){
                                                //    var son_str = inputVal.charAt(i);
                                                //    encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
                                                //    if (char_length >= 10){
                                                //        //var sub_len = char_length == 5 ? i+1 : i;
                                                //        inputVal= inputVal.substr(0, 10);
                                                //
                                                //        break;
                                                //
                                                //    }
                                                //}

                                            //}
                                        });
                                        $(".page1Contet .btn").off("click");
                                        $(".page1Contet .restBtn").on("click", function () {
                                            $(".page1Contet input").val(null);
                                            $(".sexBtnActive").removeClass("sexBtnActive");
                                            $("#down1").hide();
                                            // that.scollTarget.setAllowScrolling(false, "down,up");
                                        });
                                        $(".page1Contet input").focus(function () {
                                            $(".page1Contet input").attr('placeholder', '')
                                        });
                                        $(".page1Contet input").blur(function () {
                                            $(".page1Contet input").attr('placeholder', '请输入你的名字')
                                        });
                                        let timer;
                                        $(".page1Contet .sexBtn").on("click", function () {
                                            log(this, $(".sexBtnActive").length)
                                            if (!$(this).hasClass("sexBtnActive")) {
                                                $(".sexBtnActive").removeClass("sexBtnActive");
                                                $(this).addClass("sexBtnActive")
                                            }
                                        })
                                        $(".page1Contet .startBtn").on("click", function () {
                                            //$(".page1Contet input").val('');
                                            if ($(".page1Contet input").val().length > 0) {
                                                // $("#down1").show();
                                                $(".page1Contet input").blur();
                                                if ($(".sexBtnActive").length > 0) {
                                                    setTimeout(function () {
                                                        mySwiper.slideNext();
                                                        $(".page7Contet .name").text($(".page1Contet input").val());

                                                    }, 400)
                                                } else {
                                                    alert("请选择性别")
                                                }

                                                // that.scollTarget.setAllowScrolling(true, "down");
                                            } else {
                                                $(".tankuangBox .tankuang").hide();
                                                $(".tankuangBox .tankuang1").show();
                                                $(".tankuangBox").show();
                                                window.clearTimeout(timer);
                                                //timer = setTimeout(function () {
                                                //    $(".tankuang").hide();
                                                //}, 1000)
                                            }
                                        });
                                    }
                                    else if (this.activeIndex == 2) {
                                        //this.slideTo(7);
                                        //
                                        ////this.slideNext();
                                        //return false;

                                        let num = 0;
                                        $(".page2Contet .girl").addClass("p2GirlAnia");
                                        //$(".page2Contet .girl img").hide();
                                        //$($(".page2Contet .girl").find("img")[num%2+1]).show();
                                        //$(".page2Contet .girl img").addClass("opacity0");
                                        //let timer;
                                        //timer = setInterval(function () {
                                        //    num++;
                                        //    //log(num,Math.floor(num%2))
                                        //    $(".page2Contet .p2gou").addClass("opacity0");
                                        //    //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                                        //    $($(".page2Contet ").find(".p2gou")[Math.floor(num / 3 % 2)]).removeClass("opacity0");
                                        //    if (num < 15) {
                                        //        $(".page2Contet .girl img").addClass("opacity0");
                                        //        //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                                        //        $($(".page2Contet .girl").find("img")[Math.floor(num % 2)]).removeClass("opacity0");
                                        //    }
                                        //    if (num == 3) {
                                        //        //window.clearInterval(timer);
                                        //        $(".ansPage").show();
                                        //        setTimeout(function () {
                                        //            $(".ansPage").animate({opacity: 1}, 1000);
                                        //        }, 500);
                                        //    }
                                        //
                                        //}, 400);
                                        setTimeout(function () {
                                            $(".ansPage").show();
                                            setTimeout(function () {
                                                $(".ansPage").animate({opacity: 1}, 1000);
                                            }, 500);
                                        }, 1000)

                                    }
                                    else if (this.activeIndex == 3) {
                                        //this.slideNext();
                                        //return false;
                                        setTimeout(function () {
                                            $(".ansPage").show();
                                            setTimeout(function () {
                                                $(".ansPage").animate({opacity: 1}, 1000);
                                            }, 500);
                                        }, 1000)

                                    }
                                    else if (this.activeIndex == 4) {
                                        //this.slideNext();
                                        //return false;
                                        $(".page4Contet .girlList").addClass("p4GirlAnia");

                                        setTimeout(function () {
                                            $(".ansPage").show();
                                            setTimeout(function () {
                                                $(".ansPage").animate({opacity: 1}, 1000);
                                            }, 500);
                                        }, 1000)

                                    }
                                    else if (this.activeIndex == 5) {
                                        //this.slideNext();
                                        //return false;
                                        $(".page5Contet .girlList").addClass("p5GirlAnia");

                                        setTimeout(function () {
                                            $(".ansPage").show();
                                            setTimeout(function () {
                                                $(".ansPage").animate({opacity: 1}, 1000);
                                            }, 500);
                                        }, 1000)

                                    }
                                    else if (this.activeIndex == 6) {
                                        //this.slideNext();
                                        //return false;
                                        $(".page6Contet .girlList").addClass("p6GirlAnia");

                                        setTimeout(function () {
                                            $(".ansPage").show();
                                            setTimeout(function () {
                                                $(".ansPage").animate({opacity: 1}, 1000);
                                            }, 500);
                                        }, 1000)
                                    }
                                    else if (this.activeIndex == 7) {
                                        upData();
                                        //$(".waitPage").show();
                                        //$(".ka").hide();
                                        //$(".card").hide();


                                       let sex= Number($(".sexBtnActive").data("id"));
                                        let kaNum;
                                        if(sex==0){
                                            kaNum= parseInt(Math.random() * 3 + 1);

                                        }else if(sex==1){
                                            kaNum= parseInt(Math.random() * 2 + 4);

                                        }else{
                                            kaNum=getQueryString("kaNum")
                                            //kaNum=1
                                            //alert("test")
                                        }
                                        $(".carList>.ka" + kaNum).show();
                                        $(".saveCard .ka" + kaNum).show();
                                        //for(let id=1;id<6;id++){
                                        //    if(id!=kaNum){
                                        //        $(".saveCard>.ka" + id).remove();
                                        //    }
                                        //}
                                        //$(".saveCard>.ka" + kaNum).show();
                                        //alert("saveCard========"+kaNum)
                                        setTimeout(function(){
                                            canvas(".saveCard", function (url) {
                                                setTimeout(function () {
                                                    //$(".carList").hide();
                                                    $(".kaSave").attr("src", url);
                                                    //$(".waitPage").hide();
                                                    $(".ansPage").animate({opacity: 0}, 1000, function () {
                                                        $(".waitPage").hide();
                                                    });
                                                    //$(".kaSave").on("click", function () {
                                                    //    $(".saveTip").show();
                                                    //    $(".saveTip>.button03").show();
                                                    //})
                                                    setTimeout(function(){
                                                        $(".saveTip").show();
                                                        $(".saveTip>.button03").show();
                                                    },2000);
                                                    $(".saveTip>.button03").on("click", function () {
                                                        $(".saveTip").hide();
                                                    })
                                                    //$(".ansPage").show();
                                                    //$(".card").show();
                                                }, 2000);
                                            })
                                        },500);


                                        //canvas(".saveCard", function (url) {
                                        //    $(".kaSave").attr("src", url);
                                        //})
                                    }
                                },
                            },
                        })
                        //
                        $(".question").off('click');
                        $(".question").on('click', function () {
                            console.log($(this).index());
                            $($($(this).parent()).find("active")).removeClass("active");
                            $(this).addClass("active")
                            $(".duihao").remove();
                            $(this).append(`<img src="img/duihao.png" alt="" class="duihao">`)
                            $(".down").show();
                            $(".button03").show();
                            animalNum = $(this).data("animalnum");
                            //upData();
                        });
                        $(".question2").off('click');
                        $(".question2").on('click', function () {
                            var Cts = $(this).context.outerHTML;
                            if (Cts.indexOf("duihao.png") > 0) {
                                var idstr = ".question2" + ":nth-child(" + (parseInt($(this).index()) + 1) + ") " + ".duihao";
                                $(idstr).remove();
                                $(this).removeClass("active")
                            } else {
                                $(this).append(`<img src="img/duihao.png" alt="" class="duihao">`)
                                $(this).addClass("active")
                            }
                            $(".down").show();
                            $(".button03").show();
                        });

                        //$(".down").click(function () {
                        //    mySwiper.slideNext();
                        //})

                        $(".button03").click(function () {
                            if (!$(this).hasClass("closeBtn")) {
                                //setTimeout(function(){
                                mySwiper.slideNext();
                                //
                                //},2000)
                                $(".button03").hide();
                                $(".ansPage").hide();
                                $(".ansPage").css("opacity", 0);
                            }

                        })

                        $(".againBtn").on('click', function () {
                            //window.location.href = location.href + '?time=' + ((new Date()).getTime());
                            window.location.replace(window.location.href + '?time=' + ((new Date()).getTime()));
                        });
                        $(".shareBtn").on('click', function () {
                            //alert("分享提示")
                            $(".shareP").show();
                            $(".shareP .button03").show();
                        });
                        $(".shareP .button03").on('click', function () {
                            //alert("分享提示")
                            $(".shareP").hide();
                        });

                        $(".tankuangBox .button03").on("click", function () {
                            $(".tankuangBox").hide();
                        });


                        let num = 0;
                        let timer = window.setInterval(function () {
                            num++;
                            if (animalNum == 2) {
                                $(".animal1").addClass("opacity0");
                                $($(".page4Contet").find(".animal1")[Math.floor(num / 5 % 2)]).removeClass("opacity0");
                            }
                            else if (animalNum == 3) {
                                $(".animal2").addClass("opacity0");
                                $($(".page4Contet").find(".animal2")[Math.floor(num / 6 % 2)]).removeClass("opacity0");

                            }
                            else if (animalNum == 1) {
                                $(".animal3").addClass("opacity0");
                                $($(".page4Contet").find(".animal3")[Math.floor(num / 7 % 2)]).removeClass("opacity0");

                            }

                            $(".page3Contet .girl0").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page3Contet").find(".girl0")[Math.floor(num / 20 % 2)]).removeClass("opacity0");

                            $(".page3Contet .girl").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page3Contet").find(".girl")[Math.floor(num / 5 % 2)]).removeClass("opacity0");

                            $(".page2Contet .gouPen>.p2gou").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page2Contet .gouPen").find(".p2gou")[Math.floor(num / 10 % 2)]).removeClass("opacity0");

                            $(".page2Contet .girl>img").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page2Contet .girl").find("img")[Math.floor(num / 5 % 2)]).removeClass("opacity0");

                            $(".page4Contet .girl").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page4Contet").find(".girl")[Math.floor(num / 5 % 2)]).removeClass("opacity0");

                            $(".page5Contet .girl").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page5Contet").find(".girl")[Math.floor(num / 5 % 2)]).removeClass("opacity0");

                            $(".page5Contet .liwu").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page5Contet").find(".liwu")[Math.floor(num / 5 % 2)]).removeClass("opacity0");


                            $(".page6Contet .girl").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page6Contet").find(".girl")[Math.floor(num / 5 % 2)]).removeClass("opacity0");


                            $(".page7Contet .girl").addClass("opacity0");
                            //$($(".page2Contet .girl").find("img")[0]).removeClass("opacity0");
                            $($(".page7Contet").find(".girl")[Math.floor(num / 5 % 3)]).removeClass("opacity0");
                        }, 100);
                        let w = document.documentElement.clientWidth || document.body.clientWidth;
                        $(".carImg").width(w * 620 / 750);
                        $(".carImg").height(w * 620 / 750 / (620 / 950));
                        $(".carImg").css("bottom", "10%");
                    }, 500);
                } else {
                    // log(p)

                    //$("#loadPage").html("loading"+p*100+"%");
                }
            })
        }
    })
    $(".music").on('click', function () {
        $($(".music").find("img")).hide();
        let id = Number($(".music").data("id"));
        if (id == 1) {
            $(".music").data("id", 0)
            $($(".music").find("img")[1]).show();
            $("#bgMusic")[0].pause();
        } else {
            $(".music").data("id", 1)
            $($(".music").find("img")[0]).show();
            $("#bgMusic")[0].play();
        }
    })

    var close = true;
    document.body.addEventListener('focusout', () => {
        //软键盘收起的事件处理
        close = true;
    });

    $("input").focus(function () {
        close = false;
    }).blur(function () {
        setTimeout(function () {
            if (close) {
                document.body.scrollIntoView();
            }
        }, 200);
    });
    let w = document.documentElement.clientWidth || document.body.clientWidth;
    let h = document.documentElement.clientHeight || document.body.clientHeight;
    let kaScale=1;
    if (w / h > 750 / 1334) {
        kaScale= h/$(".saveCard").height()*0.6;
        //

        //$(".saveCard").height(h*0.6);
        //$(".saveCard").width(h*750/1334*0.6);
    }else{
        kaScale=0.6;
    }
    //$(".saveCard").css({
    //        'transform': `scale(${kaScale})`,
    //        '-ms-transform': `scale(${kaScale})`,
    //        '-moz-transform': `scale(${kaScale})`,
    //        '-webkit-transform': `scale(${kaScale})`,
    //        '-o-transform': `scale(${kaScale})`    /* Opera */
    //    }
    //);

})(console.log);
