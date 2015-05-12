(function ( $ ) {

    function supportsLocalStorage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    var methods = {

        init: function (param) {
            var tabs = this,
                options = {
                    saveTabInStorage: false,
                    vertical: false,
                    width: '150px'
                },
                defaults = $.extend(options, param),
                current,
                tabsNav = tabs.children('.just-tabs'),
                tabsNavLink = tabsNav.find('.link_tabs');

            tabsNavLink.each(function (i, el) {
                $(el).attr('data-tab', i);
            });

            //cahange style, if set vertical tabs
            if (defaults.vertical) {
                tabsNavLink.css({'width': defaults.width});
                tabsNav.css({'float': 'left'});
                tabsNav.find('.nav__item').css({'float': 'none'});
                tabs.children('.content_tabs').css({'margin-left': defaults.width});
            }

            //set active tab from storage
            if (defaults.saveTabInStorage) {
                if ( !supportsLocalStorage() ) {
                    return false;
                } else {
                    current = localStorage.getItem('justTabCurrent' + tabs.selector);
                    if (current) {
                        $(tabs).justTabs('selectTab', current);
                    }
                }
            }

            //change tab event listener
            tabsNavLink.on('click', function (event) {

                if ( !$(event.target).is('.link_tabs_active') && !$(event.target).is('.link_tabs_disable') ) {
                    var tabID = $(event.target).attr('data-tab');

                    $(tabs).justTabs('selectTab', tabID);
                }
                return false;
            });
        },

        getCurrentTab: function () {
            var tabs = this,
                index = tabs.children('.just-tabs').find('.link_tabs_active').attr('data-tab');

            return +index;
        },

        selectTab: function (index) {
            var tabs = this,
                tabsNav = tabs.children('.just-tabs'),
                tabsWrap = tabs.children('.content_tabs');

            tabsNav.find('.link_tabs').removeClass('link_tabs_active');
            tabsWrap.children('.content__tab').hide();
            tabsNav.find('[data-tab="' + index + '"]').addClass('link_tabs_active');
            tabsWrap.children('.' + 'tab-' + index).show();

            if ( !supportsLocalStorage() ) {
                return false;
            } else {
                localStorage.setItem('justTabCurrent' + tabs.selector, index);
            }
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