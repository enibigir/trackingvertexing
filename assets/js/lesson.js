// Make all tables striped by default.
$("table").addClass("table table-striped");


// Handle foldable challenges and solutions (on click and at start).
$(".solution").click(function(event) {
    var trigger = $(event.target).has(".fold-unfold").length > 0
               || $(event.target).filter(".fold-unfold").length > 0;
    if (trigger) {
        $(">*:not(h2)", this).toggle(400);
        $(">h2>span.fold-unfold", this).toggleClass("glyphicon-collapse-down glyphicon-collapse-up");
        event.stopPropagation();
    }
});
$(".solution").each(function() {
    $(">*:not(h2)", this).toggle();
    var h2 = $("h2:first", this);
    h2.append("<span class='fold-unfold glyphicon glyphicon-collapse-down'></span>");
});

// Handle foldable challenges and solution2s (on click and at start).
$(".solution2").click(function(event) {
    var trigger = $(event.target).has(".fold-unfold").length > 0
               || $(event.target).filter(".fold-unfold").length > 0;
    if (trigger) {
        $(">*:not(h3)", this).toggle(400);
        $(">h3>span.fold-unfold", this).toggleClass("glyphicon-collapse-down glyphicon-collapse-up");
        event.stopPropagation();
    }
});
$(".solution2").each(function() {
    $(">*:not(h3)", this).toggle();
    var h3 = $("h3:first", this);
    h3.append("<span class='fold-unfold glyphicon glyphicon-collapse-down'></span>");
});

// Handle searches.
// Relies on document having 'meta' element with name 'search-domain'.
function google_search() {
  var query = document.getElementById("google-search").value;
  var domain = $("meta[name=search-domain]").attr("value");
  window.open("https://www.google.com/search?q=" + query + "+site:" + domain);
}

// function to shrink the life cycle bar when scrolling
$(function(){
    $('#life-cycle').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#life-cycle').data('size') == 'big')
        {
            $('#life-cycle').data('size','small');
            $('#life-cycle').stop().animate({
                padding: '5px'
            },100);
        }
    }
    else
    {
        if($('#life-cycle').data('size') == 'small')
        {
            $('#life-cycle').data('size','big');
            $('#life-cycle').stop().animate({
                padding: '15px'
            },100);
        }
    }
});

// add copy buttons to all code blocks
var codeBlocks = document.querySelectorAll('pre.highlight');
codeBlocks.forEach(function (codeBlock) {var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';
    codeBlock.append(copyButton);
    copyButton.addEventListener('click', function () {var code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);
        copyButton.innerText = 'Copied';
        var fourSeconds = 4000;
        setTimeout(function () {copyButton.innerText = 'Copy';
        }, fourSeconds);
    });
});

