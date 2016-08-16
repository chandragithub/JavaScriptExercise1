/*
   Populating data and appending it to tbody in the table tag.
   Pure for dynamic data table formation.
*/
$(document).ready(function()
{
    var tableRow = '';
    var data = {
                    'books' : [
                        {   
                            'id' : 1,
                            'name' : 'Da Vinci Code',
                            'author' : 'Dan Brown',
                            'published_year' : 2003
                        },
                        {   
                            'id' : 2,
                            'name' : 'Digital Fortress',
                            'author' : 'Dan Brown',
                            'published_year' : 1998
                        },
                        {
                            'id' : 3,
                            'name' : 'Catcher in the Rye',
                            'author' : 'J D Salinger',
                            'published_year' : 1951
                        }
                    ]
                };
    
    tableRow += '<tbody>';
    
    for(var i = 0; i < data.books.length; i++)
    {
        var content = data.books[i];
        
        tableRow += '<tr class="contentRow"><td>' + content.name + '</td><td>'+ content.author +'</td> <td>'+
        content.published_year +'</td></tr>';
    }
    tableRow += '</tbody>';

    // appending tableRow data into the table with class bookTable.
    $('.bookTable').append(tableRow);
});
