

var myAutoComplete = (function() {
    var fullData = {};

    var getResponse = function(url, element) {
        $.post(url, {}, function(data) {
            fullData = data;
            create_html(data, element);
        }, 'json');
    };

    // function to create and append the div for the first time. . 
    var create_html = function(raw_data, element) {
        var suggest_div = '<div id="search_suggession_div" style="min-height:301px; display:none;"></div>';
        $(element).parent().append(suggest_div);
        searchResultHtml(raw_data, element);

    };

    // function to make the html each time with the corresponding search result. . .
    var searchResultHtml = function(raw_data, element) {
        var i;
        var searchResultOptions = '';
        for (i = 0; i < raw_data.length; i++) {
            searchResultOptions += '<p><a href="">' + raw_data[i]['country'] + '</a></p>';
        }
        $(element).next('div').html(searchResultOptions);
    };

    // function to compare the keyword with the main data array . . 
    var compareData = function(keyWord, element) {

        searchResultHtml(keyWord, element);
    };

    return {
        getResponse: getResponse,
        compare: compareData,
    };
})();

(function($) {
    $.fn.autocomplete = function(options) {
        var settings = $.extend({
            color: "red",
            backgroundColor: "white",
            url: "",
        }, options);

        this.next("div").css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

        var element = this;
        myAutoComplete.getResponse(settings.url, element)

        this.keyup(function() {
            if ($(this).val().length > 0) {
                myAutoComplete.compare($(this).val(), this);
                $(this).next("div").show();
            } else {
                $(this).next("div").hide();
            }
        });
    };
}(jQuery));
