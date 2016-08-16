/*
   creating tableImplementation module pattern.
*/
var tableImplementation = (function (tableImplementation, $) 
{
    var tableImplementation = {};
    
    // Filter method for performing filter operation in the tables.
    tableImplementation.filter = function (self)
    {
        $.each($('tr'), function(index, value) 
        {
            if ($(value).text().indexOf($(self).val()) == -1) 
            {
                $('tr').eq(index).hide();
            }
            else 
            {
                $('tr').eq(index).show();
            }
        });
    };
    
    // sortTable method to perform sorting operation in the table columns
    tableImplementation.sortTable = function(f, n)
    {
        var rows = $('tbody .contentRow').get();
        
        rows.sort(function(first, second)
        {

            var First = getVal(first);
            var Second = getVal(second);

            if(First < Second) 
            {
                return -1 * f;
            }
            if(First > Second)
            {
                return 1 * f;
            }
            return 0;
        });

        function getVal(element)
        {
            var value = $(element).children('td').eq(n).text().toUpperCase();
            if($.isNumeric(value))
            {
                value = parseInt(value, 10);
            }
            return value;
        }

        $.each(rows, function(index, row)
        {
            $('.bookTable').children('tbody').append(row);
        });
    }
      
    // return tableImplementaion object, so this function can be used from outside.
    return tableImplementation;
    
}(window.tableImplementation === window.tableImplementation || {}, jQuery));

     