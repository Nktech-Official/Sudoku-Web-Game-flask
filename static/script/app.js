// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}
let newgame = "true";

function active(id) {
    document.getElementById(id).className = "active";
}

function repo_nav() {

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("tcon").style.marginTop = "0px"
        on();

    } else {
        x.className = "topnav";
        document.getElementById("tcon").style.marginTop = "15px"

    }

}

function checkBlank(row, c) {
    if ($(c).val() == "") {
        row.push("0");
    } else {
        row.push($(c).val());
    }
}
cell = []
var c,
    list = ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    row1 = [],
    row2 = [],
    row3 = [],
    row4 = [],
    row5 = [],
    row6 = [],
    row7 = [],
    row8 = [],
    row9 = [];

for (i in list) {
    for (j = 1; j <= 9; j++) {
        c = '#cell_' + list[i] + j;
        cell.push(c)
        if (list[i] == "A") {
            checkBlank(row1, c);
        } else if (list[i] == "B") {
            checkBlank(row2, c);
        } else if (list[i] == "C") {
            checkBlank(row3, c);
        } else if (list[i] == "D") {
            checkBlank(row4, c);
        } else if (list[i] == "E") {
            checkBlank(row5, c);
        } else if (list[i] == "F") {
            checkBlank(row6, c);
        } else if (list[i] == "G") {
            checkBlank(row7, c);
        } else if (list[i] == "H") {
            checkBlank(row8, c);
        } else if (list[i] == "I") {
            checkBlank(row9, c);
        }

    };
};
// console.log(row1)
$(document).on("click", "#newGame", function() {
    reset();
    $("#overlay").css({ "display": "none" })
    $("#loader").css({ "display": "block" })


    for (i = 0; i < 81; i++) {
        a = $(".Input")[i]
        $(a).addClass("pause")


    }
    req = $.ajax({
        type: 'POST',
        url: '/',
        data: {
            level: $('input:radio[name=radio]:checked').val(),

        }
    });
    req.done(function(data) {

        var i = 0;
        // console.log(data)
        for (j in data) {
            if (data[j] == "0") {
                $(cell[i]).val('');

                $(cell[i]).removeClass("black");
                $(cell[i]).removeAttr('readonly');
            } else {
                $(cell[i]).val(data[j]);
                $(cell[i]).attr('readonly', 'readonly');

                $(cell[i]).addClass("black")


            };

            i++;
        };

        $("#loader").css({ "display": "none    " })
        for (i = 0; i < 81; i++) {
            a = $(".Input")[i]
            $(a).removeClass("pause")


        }
        start();
    });
});
$(document).on("click", "#check", function() {

    cell = []
    var c,
        list = ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        row1 = [],
        row2 = [],
        row3 = [],
        row4 = [],
        row5 = [],
        row6 = [],
        row7 = [],
        row8 = [],
        row9 = [];

    for (i in list) {
        for (j = 1; j <= 9; j++) {
            c = '#cell_' + list[i] + j;
            cell.push(c)
            if (list[i] == "A") {
                checkBlank(row1, c);
            } else if (list[i] == "B") {
                checkBlank(row2, c);
            } else if (list[i] == "C") {
                checkBlank(row3, c);
            } else if (list[i] == "D") {
                checkBlank(row4, c);
            } else if (list[i] == "E") {
                checkBlank(row5, c);
            } else if (list[i] == "F") {
                checkBlank(row6, c);
            } else if (list[i] == "G") {
                checkBlank(row7, c);
            } else if (list[i] == "H") {
                checkBlank(row8, c);
            } else if (list[i] == "I") {
                checkBlank(row9, c);
            }

        };
    };
    req = $.ajax({
        type: 'POST',
        url: '/SolveSudoku',
        data: {
            row1: JSON.stringify(row1),
            row2: JSON.stringify(row2),
            row3: JSON.stringify(row3),
            row4: JSON.stringify(row4),
            row5: JSON.stringify(row5),
            row6: JSON.stringify(row6),
            row7: JSON.stringify(row7),
            row8: JSON.stringify(row8),
            row9: JSON.stringify(row9),
        }
    });

    req.done(function(data) {
        var i = 0;

        for (j in data) {
            $(cell[i]).val(data[j])
            i++;
        }
        pause();
    });
});


$(document).on("focus", ".Input", function() {
    clas = this.className;
    var classlist = clas.split(" ");


    $("." + classlist[1]).addClass("active");
    $("." + classlist[2]).addClass("active");
    $("." + classlist[3]).addClass("active");
    $(this).addClass("focused")


});

$(document).on("blur", ".Input", function() {
    clas = this.className;
    var classlist = clas.split(" ");

    $("." + classlist[0]).removeClass("active");
    $("." + classlist[1]).removeClass("active");
    $("." + classlist[2]).removeClass("active");
    $(this).removeClass("focused")
});
const divs = document.getElementsByTagName("input")




let miniseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// To show 00 insted of 0
let displayMS = 0;
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;
let interval = null;
let status = "stoped";

function stopwatch() {
    miniseconds++;
    if (miniseconds / 100 === 1) {
        miniseconds = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
    }
    if (miniseconds < 10) {
        displayMS = "0" + miniseconds.toString();
    } else {
        displayMS = miniseconds;
    }
    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
    } else {
        displaySec = seconds;
    }
    if (minutes < 10) {
        displayMin = "0" + minutes.toString();
    } else {
        displayMin = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    if (displayHours == 0) {
        document.getElementById("time").innerHTML = displayMin + ":" + displaySec + ":" + displayMS;
    } else {
        document.getElementById("time").innerHTML = displayHours + ":" + displayMin + ":" + displaySec + ":" + displayMS;
    }
}


function start() {
    if (status === "stoped") {
        interval = window.setInterval(stopwatch, 9.98);
        status = "started";
        off()
        return true;
    } else { return false }

}

function pause() {
    if (status === "started") {
        window.clearInterval(interval);
        status = "stoped"
        return true;

    } else { return false }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    miniseconds = 0;
    document.getElementById("time").innerHTML = "00:00:00"
    status = "stoped"
}

function on() {
    document.getElementById("overlay").style.display = "block";
    pause();
    for (i = 0; i < 81; i++) {
        a = $(".Input")[i]
        $(a).addClass("pause")

    }

    // if (status == "stoped") {

    // }
}

function off() {
    document.getElementById("overlay").style.display = "none";
    if (status == "stoped") { start(); }
    for (i = 0; i < 81; i++) {
        a = $(".Input")[i]
        $(a).removeClass("pause")


    }
    if (newgame == "true") {
        $("#newGame").trigger("click");

        newgame = "false"
    }

}

function act(id) {
    active(id);
    on();
    status = "started"
}
$(document).keydown(function(e) {
    var $table = $(this);
    var $active = $('input:focus,select:focus', $table);
    var $next = null;
    var focusableQuery = 'input:visible,select:visible,textarea:visible';
    var position = parseInt($active.closest('td').index()) + 1;
    console.log('position :', position);
    switch (e.keyCode) {
        case 37: // <Left>
            $next = $active.parent('td').prev().find(focusableQuery);
            break;
        case 38: // <Up>                    
            $next = $active
                .closest('tr')
                .prev()
                .find('td:nth-child(' + position + ')')
                .find(focusableQuery);

            break;
        case 39: // <Right>
            $next = $active.closest('td').next().find(focusableQuery);
            break;
        case 40: // <Down>
            $next = $active
                .closest('tr')
                .next()
                .find('td:nth-child(' + position + ')')
                .find(focusableQuery);
            break;
    }
    if ($next && $next.length) {
        $next.focus();
    }
});