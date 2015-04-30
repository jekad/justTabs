Tabs plugin.
==============

Supports IE8+

To use this plugin you need to include a jquery, plugin library and css files.


    <link rel="stylesheet" href="justTabs.css" type="text/css" />
    <script type="text/javascript" src="jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="justTabs.js"></script>

**MARKUP:**

```html

    <div class="wrapper">
        <ul class="just-tabs">
            <li class="nav__item">
                <a class="link link_tabs link_tabs_active" href="#">tab-1</a>
            </li>
            <li class="nav__item">
                <a class="link link_tabs link_tabs_disable" href="#">tab-2</a>
            </li>
            <li class="nav__item">
                <a class="link link_tabs" href="#">tab-3</a>
            </li>
        </ul>
        
        <div class="content_tabs">
            <div class="content__tab tab-0"></div>
            <div class="content__tab tab-1"></div>
            <div class="content__tab tab-2"></div>
        </div>
    </div>
```

**INITIALIZATION**

    $(document).ready(function () {
          $('.wrapper').justTabs();
    });

you can add parameter {getActiveTabFromCookies: true} If you want to save active tab in cookies.

    $(document).ready(function () {
          $('.wrapper').justTabs({getActiveTabFromCookies: true});
    });

**METHODS**
    
    $('.wrapper').justTabs('getCurrentTab');
    
    $('.wrapper').justTabs('selectTab', n);

    $('.wrapper').justTabs('disableTab', n);

    $('.wrapper').justTabs('enableTab', n);

n - number of tab (start from 0)

**EXAMPLES**

http://jekad.github.io/justTabs/