//Tabs-2-Accordion JS

(function(){
    // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

    });

    //New changes
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        var d_activeTab = $(this).attr("rel");


        if($(this).hasClass("d_active")){
            $("#"+d_activeTab).fadeOut();
            $(this).removeClass("d_active");
        }
        else{
            $("#"+d_activeTab).fadeIn();
            $(this).addClass("d_active");
        }

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
    //New changes End

    /* Extra class "tab_last" to add border to right side of last tab */
    $('ul.tabs li').last().addClass("tab_last");
})();