document.write('<br/><button onclick="steal(prompt())">------Click_Me------</button><br/>');

function steal(serial) {
    var size, x, hold, i, satisfied;

    size = document.forms.length;
    serial -= 1;
    if (serial >= size) {
        alert('Collection Limit Exceeded, There are only ' + size + ' columns in total.\n Error Type = Invalid query')
    } else {
        x = document.forms[serial];
        hold = [];
        i;
        for (i = 0; i < x.length; i++) {
            hold.push(' ♦ ' + x.elements[i].name + ' : ' + x.elements[i].value + ', [Catagory ~ ' + x.elements[i].type + ']' + '\n');
        }
        satisfied = confirm(hold.join(''));
        if (satisfied) {
            download_csv(hold)
        }
    }
}