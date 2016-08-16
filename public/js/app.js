/* this is the application event binding on elements eg. onClick, Keyup etc.*/
(function()
{
    
    var name = 1;
    var author = 1;
    var publishedYear = 1;

    // binding keyup event on search text field
    $('.searchFilter').on('keyup', function () {
        tableImplementation.filter(this);
    });


    // binding onClick event on the columns of a table.
    $("#name").click(function(){
        name *= -1;
        var n = $(this).prevAll().length;
        tableImplementation.sortTable(name, n);
    });

    $("#author").click(function(){
        author *= -1;
        var n = $(this).prevAll().length;
        tableImplementation.sortTable(author, n);
    });

    $("#published-year").click(function(){
        publishedYear *= -1;
        var n = $(this).prevAll().length;
        tableImplementation.sortTable(publishedYear, n);
    });
                 
}());