# Tab-2-Accordion
Tab-2-Accordion is a multifunctional and lightweight accordion plugin for creating Responsive Tabs which acts as a tabs in Desktop and Accordion on the mobile devices. It comes with different themes, You can view demo at http://ui.techhysahil.com/Tab-2-accordion/.

### Usage
    $(".tab_accord_wrapper").tab2accordion();

### HTML Structure

```
<div class="tab_accord_wrapper flat_theme">
    <ul class="tabs">
        <li class="active" rel="tab1">First Tab</li>
        <li rel="tab2">Second Tab</li>
        <li rel="tab3">Third Tab</li>
    </ul>

    <div class="tab_container">
        <div class="tab_drawer_heading_wrapper">
            <h3 class="d_active tab_drawer_heading" rel="tab1">First Tab
                <i class="fa fa-plus"></i>
            </h3>
        </div>
        <div id="tab1" class="tab_content">
            Tab 1 Content
        </div>

        <div class="tab_drawer_heading_wrapper">
            <h3 class="tab_drawer_heading" rel="tab2">Second Tab
                <i class="fa fa-plus"></i>
            </h3>
        </div>
        <div id="tab2" class="tab_content">
            Tab 2 Content
        </div>

        <div class="tab_drawer_heading_wrapper">
            <h3 class="tab_drawer_heading" rel="tab3">Third Tab
                <i class="fa fa-plus"></i>
            </h3>
        </div>
        <div id="tab3" class="tab_content">
            Tab 3 Content
        </div>
    </div>
</div>
```
