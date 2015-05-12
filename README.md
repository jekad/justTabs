Tabs plugin.
==============

Supports IE8+

To use this plugin you need to include a jquery, plugin library and css files.


    <link rel="stylesheet" href="justTabs.css" type="text/css" />
    <script type="text/javascript" src="jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="justTabs.js"></script>
    
also if you need a vertical tab add 
    
    <link rel="stylesheet" href="justTabs_vertical.css" type="text/css" />
    
instead of justTabs.css

**MARKUP:**

```html

    <div class="jt-wrapper clearfix">
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

If you want to add several tabs on the page, change tabs wrapper class

    <div class="jt-wrapper-2">
    ...

**INITIALIZATION**

    $(document).ready(function () {
          $('.jt-wrapper').justTabs();
    });

you can add parameter {saveTabInStorage: true} If you want to save active tab in local storage.

    $(document).ready(function () {
          $('.jt-wrapper').justTabs({saveTabInStorage: true});
    });

**METHODS**
    
    $('.jt-wrapper').justTabs('getCurrentTab');
    
    $('.jt-wrapper').justTabs('selectTab', n);

    $('.jt-wrapper').justTabs('disableTab', n);

    $('.jt-wrapper').justTabs('enableTab', n);

n - number of tab (start from 0)

**EXAMPLES**

http://jekad.github.io/justTabs/