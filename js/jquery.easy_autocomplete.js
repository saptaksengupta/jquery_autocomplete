

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
        var suggest_div = '<div id="search_suggession_div" style=""></div>';
        $(element).parent().append(suggest_div);

    };

    // function to make the html each time with the corresponding search result. . .
    var searchResultHtml = function(searchResults, element) {
        var searchResultOptions = "";

        if (searchResults != '') {
            searchResultOptions += "<ul>";
            $.each(searchResults, function(index, value) {
                searchResultOptions += '<li><a href="javascript:void(0);" data-id="' + value.id + '">' + value.country + '</a></li>';
            });
            searchResultOptions += "</ul>";
        }else{
            searchResultOptions += '<p><b>No Records Found. . .</b></p>';
        }

        //searchResultOptions += '<p><a href="">' + raw_data + '</a></p>';

        $(element).next('div').html(searchResultOptions);

    };

    // function to compare the keyword with the main data array . . 
    var compareData = function(keyWord, element) {

        searchResults = [];
        $.each(fullData, function(index, value) {
            if (value.country.toUpperCase().indexOf(keyWord.toUpperCase()) !== -1) {
                searchResults.push(value);
            }
        });
        searchResultHtml(searchResults, element);
        setValue();
    };
    //Functions for get the value and set it into the text box for further work.
    var setValue = function() {
        $("#search_suggession_div").children('ul').children('li').click(getValue);
    };

    var getValue = function() {
        $("#search_suggession_div").siblings('input').val($(this).children('a').html());
        $("#search_suggession_div").hide();
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

        
        console.log(this.next);

        var element = this;

        myAutoComplete.getResponse(settings.url, element)

        this.keyup(function() {
            if ($(this).val().length > 0) {
                myAutoComplete.compare($(this).val(), this);
                $(this).next("div").children('ul').children('li').css({
                    backgroundColor: settings.listBackgroundColor
                });
                $(this).next("div").children('ul').children('li').children('a').css({
                    color:settings.listtextColor
                });
                $(this).next("div").show();
            } else {
                $(this).next("div").hide();
            }
        });
    };
}(jQuery));

$(document).on('load', function() {

});