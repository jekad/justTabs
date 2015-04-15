Tabs plugin.
==============

Supports IE8+

To use this plugin you need to include a jquery, plugin library and css files.


link rel="stylesheet" href="justTabs.css" type="text/css"

script type="text/javascript" src="jquery-1.11.1.min.js"

script type="text/javascript" src="justTabs.js"

```html
<h4>MARKUP:</h4>

    <div class="wrapper">

        <ul class="just-tabs">
        
            <li class="nav__item">
            
                <a class="link link_tabs link_tabs_active" href="#">tab-1</a>
                
            </li
            
            ><li class="nav__item">
            
                <a class="link link_tabs link_tabs_disable" href="#">tab-2</a>
                
            </li
            
            ><li class="nav__item">
            
                <a class="link link_tabs" href="#">tab-3</a>
                
            </li>
            
        </ul>
        
        <div class="content content_tabs">
        
            <div class="content__tab" id="tab-0">
            </div>
            
            <div class="content__tab" id="tab-1">
            </div>
            
            <div class="content__tab" id="tab-2">
            </div>
            
        </div>
        
    </div>
```

**INITIALIZATION**

    $(document).ready(function () {
          $('.wrapper').justTabs();
    });

you can add parameter {getActiveTabFromCookies: true} If you want to save active tab in cookies.


**METHODS**
    
    $('.wrapper').justTabs('getCurrentTab');
    
    $('.wrapper').justTabs('selectTab', n);

    $('.wrapper').justTabs('disableTab', n);

    $('.wrapper').justTabs('enableTab', n);

n - number of tab (start from 0)