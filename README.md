# Tab-2-Accordion
Tab-2-Accordion is a multifunctional and lightweight accordion plugin for jQuery.This acts as a tabs in Desktop and Accordion on the mobile devices. It comes with different themes, Example below:

    Theme Name                  Demo Link
1. Flat Design
    Skin 1 (Horizontal):
    Skin 1 (Vertical):

    Skin 2 (Horizontal):
    Skin 2 (Vertical):

1. Material Design
    Skin 1 (Horizontal):
    Skin 1 (Vertical):

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

### Version History

### About the Author

### Licence
