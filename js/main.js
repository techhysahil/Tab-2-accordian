/*!
 * Tabs-2-Accordion JS
 * Original author: http://techhysahil.com/
 * Further changes, comments: @Techhysahil
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.

;(function($){
    $.fn.tab2accordion = function(options) {

        // Establish our default settings
        var settings = $.extend({
            activeTab : 0
        }, options);

        return this.each( function() {


            //If Tab Mode
            $(".tab_content").hide();
            console.log(settings.activeTab);
            $(".tab_content:eq(" + settings.activeTab + ")").show();

            //If Tab mode
            $("ul.tabs li").click(function() {

                $(".tab_content").hide();
                var activeTab = $(this).attr("rel");
                $("#"+activeTab).fadeIn();

                $("ul.tabs li").removeClass("active");
                $(this).addClass("active");

                $(".tab_drawer_heading").removeClass("d_active");
                $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

            });


            //If Accordion Mode
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

        });
    }
})(jQuery);