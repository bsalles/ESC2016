
    function escTAB(num) {
        for (i = 1; i < 4; i++) {
            document.getElementById("escNAV" + i).className = "escTAB";
        }
        document.getElementById("escNAV" + num).className = "escTABselect";
    }

    function escFOOT(num) {
        for (i = 1; i < 4; i++) {
            document.getElementById("escFoot" + i).className = "escFootTAB";
            document.getElementById("escFooticon" + i).className = "icon-foot" + i + " icon-blue";
        }
        document.getElementById("escFoot" + num).className = "escFootTABselect";
        document.getElementById("escFooticon" + num).className = "icon-foot" + num + " icon-pink";


        document.getElementById("escH").className = "displayNone";
        document.getElementById("escMapH").className = "displayNone";
        document.getElementById("escEventH").className = "displayNone";
        document.getElementById("escRemindH").className = "displayNone";

        document.getElementById("escb1").className = "displayNone";
        document.getElementById("escb2").className = "displayNone";
        document.getElementById("escb3").className = "displayNone";
        document.getElementById("directions").className = "displayNone";

        if (num == 1) {
            // show reminder header
            // show reminder body
            document.getElementById("escRemindH").className = "escH";
            document.getElementById("escb"+num).className = "displayBlock";
        } else if (num == 2) {
            // hide reminder header
            // hide reminder body
            // hide map header
            // hide map body
            document.getElementById("escH").className = "escH";
            document.getElementById("escb"+num).className = "displayBlock";
            hideEvent();
        } else if (num == 3) {
            // show map header
            // show map body
            document.getElementById("escMapH").className = "escH";
            document.getElementById("escb"+num).className = "displayBlock mapContainer icon-green";
        document.getElementById("directions").className = "directions";
        }
    }


    /*
    getDate()   Returns the day of the month (from 1-31)
    getDay()    Returns the day of the week (from 0-6)
    getFullYear()   Returns the year
    getHours()  Returns the hour (from 0-23)
    getMinutes()    Returns the minutes (from 0-59)
    getMonth()  Returns the month (from 0-11)
    */

    var escDate = new Date();
    var escDay = escDate.getDate();
    var escMonth = escDate.getMonth();
    var escHour = escDate.getHours();
    var escMinute = escDate.getMinutes();
    console.log("Day " + escDay + " Month " + escMonth + " Hour " + escHour);

    /* <img id="circ10" src="public/img/circ.png"> */

    for (i = 1; i < 11; i++) {
        document.getElementById("circ" + i).setAttribute("src", "public/img/circ.png");
    }

    if (escDay == 19) { //FRIDAY
        //3-5 checkin
        if (escHour >= 16 && escHour < 18) {
            yellowDot(1);
        }
        //6-10 white party
        if (escHour >= 18 && escHour < 22) {
            yellowDot(2);
        }
        //10-12 after party (greater than 9)
        if (escHour >= 22) {
            yellowDot(3);
        }
    } else if (escDay == 20) { //SATURDAY
        //12-2 afer party (less than 2)
        if (escHour < 1) {
            yellowDot(3);
        }
        //7-9 breakfast
        if (escHour >= 8 && escHour < 10) {
            yellowDot(4);
        }
        //11-1 olympics
        if (escHour >= 10 && escHour < 12) {
            yellowDot(5);
        }
        //1-7 free time
        if (escHour >= 12 && escHour < 18) {
            yellowDot(6);
        }
        //7-9 black tie dinner
        if (escHour >= 18 && escHour < 19) {
            yellowDot(7);
        }
        //9-11 after party
        if (escHour >= 19) {
            yellowDot(8);
        }
    } else if (escDay == 21) { //SUNDAY
        //8-9 breakfast
        if (escHour >= 8 && escHour < 10) {
            yellowDot(9);
        }
        //9-12 checkout
        if (escHour >= 12) {
            yellowDot(10);
        }
    }

    function yellowDot(num) {
        document.getElementById("circ" + num).setAttribute("src", "public/img/circY.png");
    }

//     <svg width="8" style="position:absolute; left:320px; top:515px; z-index: 31;">
//   <polygon points="0,0 8,0 8,185 0,185" style="fill:white;stroke:white;stroke-width:1" />
//   Sorry, your browser does not support inline SVG.
// </svg>


    var events = [
        ["Friday",
            "Check-In",
            "Check In",
            "Check in at the Hyatt Regency front desk, pick up your goodie bag, drop off your stuff and get ready for a weekend of Escape!",
            "4:00 PM",
            "5:30 PM",
            "Hyatt Front Desk",
            "Any",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt id lacus et faucibus. Nullam euismod auctor vulputate. Curabitur mattis diam dolor."
        ],

        ["Friday",
            "White-Party",
            "Welcome White Party",
            "Kick off your Tahoe de Janeiro weekend with a white party on the beach! White beachwear is encouraged as you relax and enjoy Brazilian cocktails and dinner with your fellow Escapees. Be sure to stick around for the after party — you won't want to miss it...",
            "5:30 PM",
            "10:00 PM",
            "Lakeside Cottage Green",
            "White Beachwear",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt id lacus et faucibus. Nullam euismod auctor vulputate. Curabitur mattis diam dolor."
        ],

        ["Friday",
            "After-Party",
            "'Unofficial' After Party",
            "If you've been with Slalom long, you know there's gonna be more fun after dinner. After you've had your fill of the beach, head back to Cutthroat's Saloon at the Hilton for a Totally Unofficial (shh!) afterparty - but remember: what happens in Tahoe stays in Tahoe.",
            "10:00 PM",
            "1:00 AM",
            "Cutthroat's Saloon",
            "Any",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt id lacus et faucibus. Nullam euismod auctor vulputate. Curabitur mattis diam dolor."
        ],

        ["Saturday",
            "Sat-Breakfast",
            "Breakfast",
            "Early risers will be treated to a tasty breakfast at the hotel. But if you need to sleep in and nurse your hangover, we'll understand.",
            "8:00 AM",
            "10:00 AM",
            "Lakeside Cottage Green",
            "Any",
            ""
        ],

        ["Saturday",
            "Beach-Olympics",
            "Beach Olympics",
            "After breakfast, join us for a morning of beach and lawn games, where teams will compete for Olympic Gold and Slalom Glory! We'll have the lake shore to ourselves, so you won't want to miss it.",
            "10:00 AM",
            "12:00 PM",
            "Lakeside Cottage Green",
            "Comfy, sporty beach attire",
            ""
        ],

        ["Saturday",
            "Free-Time",
            "Free Time!",
            "Once the olympic games conclude, you'll have the rest of the afternoon to relax at the hotel or explore Tahoe. Need some ideas for fun stuff to do? Check these out:",
            "12:00 PM",
            "6:00 PM",
            "Anywhere",
            "Any",
            ""
        ],

        ["Saturday",
            "Silent-Auction",
            "Reception & Silent Auction",
            "Here are some words about the silent auction and reception that Marek and Charlene will write. I bet they'll be awesome. The words.",
            "6:00 PM",
            "7:00 PM",
            "Ballroom",
            "Come prepared for the<br>Carnaval Dinner Formal!",
            ""
        ],

        ["Saturday",
            "Black-Tie-Dinner",
            "Carnaval Dinner Formal & Silent Auction",
            "We're bringing Rio to Tahoe with a Carnaval masquerade ball! Grab your tux or ball gown; don your feathers, sequins, and masks; and get ready for a night of glitz, glam, and Samba dancing!",
            "7:00 PM",
            "12:00 AM",
            "Ballroom",
            "Black tie encouraged, with a<br>touch of Brazilian Carnaval!",
            ""
        ],

        ["Sunday",
            "Sun-Breakfast",
            "Breakfast",
            "Have one last breakfast before checking out and hitting the road.",
            "8:00 AM",
            "10:00 AM",
            "Lakeside Cottage Green",
            "Any",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt id lacus et faucibus. Nullam euismod auctor vulputate. Curabitur mattis diam dolor."
        ],

        ["Sunday",
            "Check-Out",
            "Check Out",
            "Describe the event consectetur adipiscing elit. Nam non augue dapibus ipsum lacinia condimentum eu sed mauris. Sed et hendrerit nulla. Donec lobortis eget leo molestie egestas.",
            "12:00 PM",
            "",
            "Hyatt Front Desk",
            "Any",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt id lacus et faucibus. Nullam euismod auctor vulputate. Curabitur mattis diam dolor."
        ]
    ];

    function showEvent(num) {
        document.getElementById("escEVENT").className = "escEVENT";
        document.getElementById("escEventH").className = "escEventH";
        document.getElementById("escB").className = "displayNone";
        document.getElementById("escH").className = "displayNone";

        document.getElementById("escEVENT1").innerHTML = events[num][2];
        document.getElementById("escEVENT2").innerHTML = events[num][4];
        document.getElementById("escEVENT3").innerHTML = events[num][5];
        document.getElementById("escEVENT4").innerHTML = events[num][6];
        document.getElementById("escEVENT5").innerHTML = events[num][7];
        document.getElementById("escEVENT6").innerHTML = events[num][3];
        /*
        escEVENT1 -- TITLE
        escEVENT2 -- start time
        escEVENT3 -- end time
        escEVENT4 -- location
        escEVENT5 -- attire
        escEVENT6 -- details
        */
    }

    function hideEvent(num) {
        document.getElementById("escEVENT").className = "displayNone";
        document.getElementById("escEventH").className = "displayNone";
        document.getElementById("escB").className = "escB";
        document.getElementById("escH").className = "escH";
    }