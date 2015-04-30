(function ( $ ) {

    var methods = {

        init: function (param) {
            var tabs = this,
                defaults = $.extend({getActiveTabFromCookies: false}, param),
                current;

            tabs.children('.just-tabs').find('.link_tabs').each(function (i, el) {
                $(el).attr('data-tab', i);
            });

            //set active tab from cookies
            if (defaults.getActiveTabFromCookies) {
                current = getCookie('justTabCurrent');
                if (current) {
                    $(tabs).justTabs('selectTab', current);
                }
            }

            //change tab event listener
            tabs.children('.just-tabs').find('.link_tabs').on('click.jt', function (event) {

                if ( !$(event.target).is('.link_tabs_active') && !$(event.target).is('.link_tabs_disable') ) {
                    var tabID = $(event.target).attr('data-tab');

                    $(tabs).justTabs('selectTab', tabID);
                }
                return false;
            });

            function getCookie(name) {
                var matches = document.cookie.match(new RegExp(
                    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }
        },

        getCurrentTab: function () {
            var tabs = this,
                index = tabs.children('.just-tabs').find('.link_tabs_active').attr('data-tab');

            return +index;
        },

        selectTab: function (index) {
            var tabs = this;

            tabs.children('.just-tabs').find('.link_tabs').removeClass('link_tabs_active');
            tabs.children('.content_tabs').children('.content__tab').hide();
            tabs.children('.just-tabs').find('[data-tab="' + index + '"]').addClass('link_tabs_active');
            tabs.children('.content_tabs').children('.' + 'tab-' + index).show();

            document.cookie = 'justTabCurrent=' + index;
        },

        disableTab: function (index) {
            var tabs = this;
            tabs.children('.just-tabs').find('[data-tab="' + index + '"]').addClass('link_tabs_disable');
        },

        enableTab: function (index) {
            var tabs = this;
            tabs.children('.just-tabs').find('[data-tab="' + index + '"]').removeClass('link_tabs_disable');
        }
    };

    $.fn.justTabs = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' don\'t exist in jQuery.justTabs' );
        }
    }
})( jQuery );