$(function(){
  /**
 * Created by Administrator on 2018/6/22.
 */

//js动态把左右布局的高度等同
$('.left_box').innerHeight($('.right_box').innerHeight());


//    登录注册找回
$('label[for=reb]').click(function () {
    $(this).children('i').toggleClass('check_on');
    return false;
});
$('.close').click(function () {
    $(this).parents('.modal').removeClass('active');
    $(this).parents('.modal_main').removeClass('modal_main_show');
});
$('.log_btn,.form_log').click(function () {
    $('.modal').removeClass('active');
    $('.login').addClass('active');
    setTimeout(function () {
        $('.login').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.reg_btn,.form_reg').click(function () {
    $('.modal').removeClass('active');
    $('.register').addClass('active');
    setTimeout(function () {
        $('.register').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.form_back').click(function () {
    $('.modal').removeClass('active');
    $('.back').addClass('active');
    setTimeout(function () {
        $('.back').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.buy_btn').click(function () {
    $('.modal').removeClass('active');
    $('.buy').addClass('active');
    setTimeout(function () {
        $('.buy').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.edit_pass').click(function () {
    $('.modal').removeClass('active');
    $('.password').addClass('active');
    setTimeout(function () {
        $('.password').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.edit_phone').click(function () {
    $('.modal').removeClass('active');
    $('.bd_phone').addClass('active');
    setTimeout(function () {
        $('.bd_phone').children('.modal_main').addClass('modal_main_show');
    },100);
});
$('.reg_agree').click(function () {
    layer.open({
        type: 2,
        title:'用户注册协议',
        area: ['80%', '80%'],
        content: 'agreement.html'
    });
});
//点击获取验证码
//   $('.get_yzm').click(function() {
//     var _this = $(this);
//     if (!_this.hasClass('active')) {
//       _this.addClass('active');
//       _this.find('span').show();
//       _this.find('a').hide();
//       countDown({
//         id: 'get_yzm_time',
//         type: 'miao',
//         m: 1,
//         callback: function() {
//           _this.removeClass('active');
//           _this.find('span').hide();
//           _this.find('a').show();
//         }
//       });
//     }
//   });
//    表单提交提示示例
// $('.form_btn').click(function () {
//     layer.msg('错误提示！', {time: 3000, icon:5});
// });
  
});
/*倒计时countDown 
  id: 容器ID，
  type: 倒计时主要类型   fz-表示 时分秒，miao-表示秒数
  t: 自定义时候起作用表示分钟
  serverTime: 表示服务器端的时间戳
 */
function countDown(obj) {
    var serverTime = obj.serverTime || new Date().getTime();
    a = serverTime,
        b = getDate(obj.m, serverTime),
        ms = 0,
        timeCounter = null,
        parentEle = document.getElementById(obj.id), //获取到放置时间数据的span的id
        ele = parentEle.getElementsByTagName("t"); //获取布局中的em标签用于存取数据
    //如果直接传递的是时间戳的话就不需要设置m的属性值
    if (obj.sjc) {
        ms = (serverTime + obj.sjc) - a
    } else {
        ms = b - a;
    }
    //倒计时
    var interval = 1000,
        count = 0,
        startTime = new Date().getTime();
    countDownStart();
    if (ms >= 0) {
        timeCounter = setTimeout(countDownStart, interval);
    }

    function countDownStart() {
        count++;
        //误差时间，
        var offset = new Date().getTime() - (startTime + count * interval);
        //定时器执行时间
        var nextTime = interval - offset;
        var daytohour = 0;
        var s = 0,
            h = 0,
            m = 0;
        if (nextTime < 0) { nextTime = 0 };
        //定义变量
        h = Math.floor(ms / 1000 / 60 / 60 % 24); //获取剩余小时
        m = Math.floor(ms / 1000 / 60 % 60); //获取剩余分钟
        s = Math.ceil(ms / 1000 % 60); //获取剩余秒数，因为不精确，所以要向上获取整数
        if (h < 10) {
            h = "0" + h
        } else if (h < 0) {
            h = 0
        }
        if (m < 10) {
            m = "0" + m;
        } else if (m < 0) {
            m = 0;
        }
        if (s < 10) {
            s = "0" + s;
        } else if (s < 0) {
            s = 0;
        }
        //1分钟倒计时只显示秒;
        if (obj.type == 'miao') {
            ele[ele.length - 1].innerHTML = Math.ceil(ms / 1000);
        } else {
            ele[0].innerHTML = h;
            ele[1].innerHTML = m;
            ele[2].innerHTML = s;
        }
        ms -= interval;
        if (ms < 0) {
            if (obj.type == 'miao') {
                ele[ele.length - 1].innerHTML = '00';
            } else {
                ele[0].innerHTML = '00';
                ele[1].innerHTML = '00';
                ele[2].innerHTML = '00';
            }
            endFun();
        } else {
            timeCounter = setTimeout(countDownStart, nextTime);
        }

        function endFun() {
            clearTimeout(timeCounter);
            obj.callback() || function() {};
        }
    }

    function getDate(m, serverTime) {
        var curDate = serverTime;
        return curDate + (m * 60 * 1000);
    }
}













// 数量加减
$.fn.count =function(obj){
  var _this = $(this),
      add = _this.find('.add_icon'),
      jian = _this.find('.minus_icon'),
      text = _this.find('.s_number'),
      min = obj.min,
      max = obj.max;
      pdMaxMin();
      number = parseInt(text.val());
        add.tap(function(){
          number = parseInt(text.val());
          number += 1;
          if(number > max || number == max){
              if(!$(this).hasClass('sz_jz')){
                $(this).addClass('sz_jz');
              }
              text.val(max);
              return false
          }else{
            jian.removeClass('sz_jz');
            text.val(number);
          }
        });
        jian.tap(function(){
          number = parseInt(text.val());
          number -= 1;
          if(number <= min){
            if(!$(this).hasClass('sz_jz')){
              $(this).addClass('sz_jz');
            }
            text.val(min);
            return false
          }else{
            add.removeClass('sz_jz');
            text.val(number);
            console.log(text.val(),'运行');
          }
        });
        text.keyup(function(event) {
          pdMaxMin();
        });
        function pdMaxMin(){
           if(text.val() === '')
            {
              jian.addClass('sz_jz');
              text.val(min);
            }
           if(parseInt(text.val()) >= max)
            {
              add.addClass('sz_jz');
              text.val(max);
            }else{
              add.removeClass('sz_jz');
            }
            if(parseInt(text.val()) <= min)
            {
              jian.addClass('sz_jz');
              text.val(min);
            }else{
              jian.removeClass('sz_jz');
            }
        }
     return this; 
}

//复制函数实例化
function copyText(obj) {
  var callback = obj.callback || function(){}; 
  var clipboards = new ClipboardJS(obj.btn, {
    text: function() {
      return removeAllSpace($(obj.btn).closest(obj.div).find(obj.text).text());
    }
  });
  clipboards.on('success', function(e) {
    console.log(e);
    callback(1);
    e.clearSelection();
  });
  clipboards.on('error', function(e) {
    callback(0);
    e.clearSelection();
  });
}



//图片初始化居中-传入容器高度和宽度
//先判断比例是长方形走第一个判断，否走走第二个判断
//长方形判断中，图片宽度比容器宽度高的，把图片高度=容器高度，左右居中，超出隐藏
function loadImg_ty(obj, w, h) {
    var _h = $(obj).height(),
        _w = $(obj).width();
    if (_w / _h > w / h) {
        if (_w > w) {
            $(obj).css({
                "height": h,
                "left": -(((h*(_w/_h))-w)/2)
            });
        } else {
            $(obj).css({
                "width": w,
                "margin-top": (h - _h) / 2,
                "top": -(((h*(_w/_h))-w)/2)
            });
        }
    } else {
        if (_h > h) {
            $(obj).css({
                "height": h,
                "margin-left": (w - h * (_w / _h)) / 2
            });
        } else {
            $(obj).css({
                "height": _h,
                "margin-left": (w - _w) / 2,
                "margin-top": (h - _h) / 2
            });
        }
    }
}
//图片初始化居中
function loadImg(obj,ys){
  var _h = $(obj).height(),
      _w = $(obj).width(),
      ys = ys|| $(obj.closest('li')).width();

  if (_w > _h) {
      $(obj).css({
          "height": ys+'px',
          "left": -(ys * (_w / _h) - ys) / 2+'px',
          "z-index": "1"
      });
  } 
  else{
      $(obj).css({
          "width": ys+'px',
          "top": -(ys * (_h / _w) - ys) / 2+'px',
          "z-index": "1"
      });
  }
}
//图片预览1
function autoYL() {
  // 大图预览
  var imgs = $('.msg_content img');
      _div_ul = $('.imgbox ul'),
      YLbox = $('.imgYl_box');
      $('.msg_content').on('click','img',function(){
          _div_ul.html('');
          YLbox.fadeIn();
          var _src = $(this).attr('src'),
            imgObj = new Image();
            imgObj.src = _src;
            imgObj.onload = function() {
              loadEndYLimg(imgObj);
            }
          var _li = $('<li></li>');
          $(_li).append(imgObj);
          $(_div_ul).append(_li);
          
      });
}

function loadEndYLimg(_this) {
    //让图片宽度和高度自适应
        var pwidth = $("body").width();
        var box_h = $('.imgbox').height();
        var box_w = $('.imgbox').width();
        var _w = $(_this).width(); 
        var _h = $(_this).height();
        if (_w / _h > box_w / box_h) {
            if(_w > box_w){
                $(_this).css({
                  "width": box_w,
                  "margin-top": (box_h - box_w * (_h / _w)) / 2
                });
            }else{
              $(_this).css({
                  "width": _w,
                  "margin-top": (box_h - _h)/ 2,
                  "margin-left": (box_w - _w)/2
              });
            }
        } else {
            if(_h > box_h){
             $(_this).css({
                  "height": box_h,
                  "margin-left": (box_w - box_h * (_w / _h)) / 2
              });  
            }else{
              $(_this).css({
                  "height": _h,
                  "margin-left": (box_w - _w) / 2,
                  "margin-top": (box_h-_h)/2
              });
            }
        }
}

//替换空格
function removeAllSpace(str) {
  var newStr = str.replace(/(^\s+)|(\s+$)/g,"");
  return newStr;
}
//替换文本框空格
$.fn.inputTrim = function(){
  $(this).focus(function(event) {
    /* Act on the event */
     qc(this);
  });
  $(this).keyup(function(event) {
    qc(this);
  });
  function qc(_this){
    var str = $(_this).val();
    $(_this).val(removeAllSpace(str));
  }
}

function isBlank(input) {
  return typeof input === 'undefined' || input === null || input === '' || $.trim(input) === '';
}

var StringKit = {}
StringKit.isBlank = function(text) {
  return typeof text === 'undefined' || text === null || text === '' || $.trim(text) === '';
};
StringKit.isQQ = function(text) {
    return RegExp(/^[1-9]\d{4,10}$/).test(text);
};
StringKit.isEmail = function(text) {
    return RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(text);
};
StringKit.isPhone = function(text) {
  return RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(text);
};
StringKit.trim = function(text) {
    if (StringKit.isBlank(text)) {
        return '';
    }
    return text.replace(/(^\s*)|(\s*$)/g, "");
};
StringKit.endsWith = function(text) {
    if (StringKit.isBlank(text)) {
        return false;
    }
    return text.substr(this.length - str.length) === str;
};
StringKit.isPassword = function(text) {
    return RegExp(/^[0-9a-zA-Z]{6,14}$/).test(text);
}

// 点击切换状态函数1
function tabFun1(_this,state,siblings){
    var state = state || 'active';
    //_this表示当前的元素,siblings表示当前元素的兄弟元素,state表示状态
    var _self = $(_this);
    if(!_self.hasClass(state)){
        _self.addClass(state).siblings(siblings).removeClass(state);
    }
}

