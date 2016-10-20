

var myAutoComplete = (function() {
    var fullData = {};
    var searchResults = [];
    var getResponse = function(url, element) {
        $.post(url, {}, function(data) {
            fullData = data;
            create_html(element);
        }, 'json');
    };

    // function to create and append the div for the first time. . 
    var create_html = function(element) {
        var suggest_div = '<div id="search_suggession_div" style="max-height:300px; display:none;"></div>';
        $(element).parent().append(suggest_div);

    };

    // function to make the html each time with the corresponding search result. . .
    var searchResultHtml = function(searchResults, element) {
            var searchResultOptions = "";
            searchResultOptions += "<ul>";
            $.each(searchResults, function (index, value){
                searchResultOptions += '<li><a href="'+ value.id +'">' + value.country + '</a></li>';
            });
            searchResultOptions += "</ul>";
            //searchResultOptions += '<p><a href="">' + raw_data + '</a></p>';
        
        $(element).next('div').html(searchResultOptions);
    };

    // function to compare the keyword with the main data array . . 
    var compareData = function(keyWord, element) {
        
        searchResults = [];
        $.each(fullData, function (index, value){
                if(value.country.indexOf(keyWord) !== -1){
                    searchResults.push(value);
                }else{
                    
                }
                    
        });
        console.log(searchResults);
        searchResultHtml(searchResults, element);
        
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

        this.next("div").children('p').children('a').css({
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
