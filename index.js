var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function (err, files) {
    console.log('Zawartość katalogu zadanie_13_7:'.blue);
    console.log(files);
    fs.writeFile('./lista.txt', '\n' + files, function (err) {
        console.log('Zapisano listę zawartości katalogu w pliku lista.txt.'.blue);
    });
});

/*
var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

var fs = require('fs');

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log(data);
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function (err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});

var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/

