/**
*   Unslider by @idiot and @damirfoy
*/


(function ($, f) {

    //$("head").append("<link rel='stylesheet' type='text/css' href='unslider.css' unslider='1' />");

    var Unslider = function () {
        var _ = this;
        _.o = {
            speed: 500,   // 滑动速度, false for no transition (integer or boolean)
            delay: 3000,  // 滑动间隔, false for no autoplay (integer or boolean)
            init: 0,      // init delay, false for no delay (integer or boolean)
            pause: true,    // 鼠标悬停是否暂停滚动 (boolean)
            loop: true,     // 是否无限循环 (boolean)
            keys: true,   // 是否开启键盘快捷键 (boolean)
            dots: true,  // 是否显示圆点 (boolean)
            arrows: false, // display prev/next arrows (boolean)
            prev: '←',   // 上一张幻灯片点击按钮的文本或HTML (string)
            next: '→',   // 下一张幻灯片点击按钮的文本或HTML (string)
            fluid: false, // 是否百分比宽度 (boolean)
            complete: f,  // 动画完成后调用函数 (function with argument)
            items: '>ul', // 幻灯片容器选择器
            item: '>li'   // 幻灯片项目选择器
        };

        _.init = function (el, o) {
            //  Check whether we're passing any options in to Unslider
            _.o = $.extend(_.o, o);
            _.el = el;
            _.ul = el.find(_.o.items);
            _.max = [el.outerWidth() | 0, el.outerHeight() | 0];
            _.li = _.ul.find(_.o.item).each(function (index) {
                var me = $(this),
					width = me.outerWidth(),
					height = me.outerHeight();
                //设置最大值
                if (width > _.max[0]) _.max[0] = width;
                if (height > _.max[1]) _.max[1] = height;
            });

            //  Cached vars
            var o = _.o,
				ul = _.ul,
				li = _.li,
				len = li.length;

            //  Current indeed
            _.i = 0;

            //  Set the main element
            el.css({ width: _.max[0], height: li.first().outerHeight(), overflow: 'hidden' });

            //设置相对宽度
            ul.css({ position: 'relative', left: 0, width: (len * 100) + '%' });
            li.css({ 'float': 'left', width: (100 / len) + '%' });

            //自动播放
            setTimeout(function () {
                if (o.delay | 0) {
                    _.play();
                    if (o.pause) {
                        el.on('mouseover mouseout', function (e) {
                            _.stop();
                            e.type == 'mouseout' && _.play();
                        });
                    };
                };
            }, o.init | 0);

            //按键
            if (o.keys) {
                $(document).keydown(function (e) {
                    var key = e.which;
                    if (key == 37)
                        _.prev(); //Left （向左滚动）
                    else if (key == 39)
                        _.next(); //Right（向右滚动）
                    else if (key == 27)
                        _.stop(); //Esc  （暂停滚动）
                });
            };

            //圆点分页
            o.dots && nav('dot');

            //上,下按钮支持
            o.arrows && nav('arrow');

            //  Patch for fluid-width sliders. Screw those guys.
            if (o.fluid) {
                $(window).resize(function () {
                    _.r && clearTimeout(_.r);
                    _.r = setTimeout(function () {
                        var styl = { height: li.eq(_.i).outerHeight() },
							width = el.outerWidth();
                        ul.css(styl);
                        styl['width'] = Math.min(Math.round((width / el.parent().width()) * 100), 100) + '%';
                        el.css(styl);
                    }, 50);
                }).resize();
            };

            //  Swipe support
            if ($.event.special['swipe'] || $.Event('swipe')) {
                el.on('swipeleft swiperight swipeLeft swipeRight', function (e) {
                    e.type.toLowerCase() == 'swipeleft' ? _.next() : _.prev();
                });
            };
            return _;
        };

        //  Move Unslider to a slide index
        _.to = function (index, callback) {
            var o = _.o,
				el = _.el,
				ul = _.ul,
				li = _.li,
				current = _.i,
				target = li.eq(index);

            //滑不滑动
            if ((!target.length || index < 0) && o.loop == f) return;

            //检查它是否超出边界
            if (!target.length) index = 0;
            if (index < 0) index = li.length - 1;
            target = li.eq(index);

            var speed = callback ? 5 : o.speed | 0,
				obj = { height: target.outerHeight() };

            if (!ul.queue('fx').length) {
                //  Handle those pesky dots
                el.find('.dot').eq(index).addClass('active').siblings().removeClass('active');
                el.animate(obj, speed) && ul.animate($.extend({ left: '-' + index + '00%' }, obj), speed, function (data) {
                    _.i = index;
                    $.isFunction(o.complete) && !callback && o.complete(el);
                });
            };
        };

        //自动播放功能
        _.play = function () {
            _.t = setInterval(function () {
                _.to(_.i + 1);
            }, _.o.delay | 0);
        };
        //停止自动播放
        _.stop = function () {
            _.t = clearInterval(_.t);
            return _;
        };
        //移动到下一张幻灯片
        _.next = function () {
            return _.stop().to(_.i + 1);
        };
        //移动到上一张幻灯片
        _.prev = function () {
            return _.stop().to(_.i - 1);
        };

        //创建dots and arrows
        function nav(name, html) {
            if (name == 'dot') {
                html = '<ol class="dots">';
                $.each(_.li, function (index) {
                    html += '<li class="' + (index == _.i ? name + ' active' : name) + '">' + ++index + '</li>';
                });
                html += '</ol>';
            } else {
                html = '<div class="';
                html = html + name + 's">' + html + name + ' prev">' + _.o.prev + '</div>' + html + name + ' next">' + _.o.next + '</div></div>';
            };

            _.el.addClass('has-' + name + 's').append(html).find('.' + name).click(function () {
                var me = $(this);
                me.hasClass('dot') ? _.stop().to(me.index()) : me.hasClass('prev') ? _.prev() : _.next();
            });
        };
    };

    //创建一个jQuery插件
    $.fn.unslider = function (o) {
        var len = this.length;
        //支持多个滑块
        return this.each(function (index) {
            //  Cache a copy of $(this), so it
            var me = $(this),
				key = 'unslider' + (len > 1 ? '-' + ++index : ''),
				instance = (new Unslider).init(me, o);

            //调用一个unslider实例
            me.data(key, instance).data('key', key);
        });
    };
})(jQuery, false);

