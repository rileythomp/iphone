const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let number_pad_table = "<table id='dial-pad'>" +
                            "<tr>" + 
                                "<td class='number-pad'>1<br><span class='letters'></span></td></td>" + 
                                "<td class='number-pad'>2<br><span class='letters'>A B C</span></td>" + 
                                "<td class='number-pad'>3<br><span class='letters'>D E F</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td class='number-pad'>4<br><span class='letters'>G H I</span></td>" + 
                                "<td class='number-pad'>5<br><span class='letters'>J K L</span></td>" + 
                                "<td class='number-pad'>6<br><span class='letters'>M N O</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td class='number-pad'>7<br><span class='letters'>P Q R S</span></td>" + 
                                "<td class='number-pad'>8<br><span class='letters'>T U V</span></td>" + 
                                "<td class='number-pad'>9<br><span class='letters'>W X Y Z</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td class='number-pad hidden'> </td>" + 
                                "<td id='zero' class='number-pad'>0<br><span class='letters'></span></td></td>" + 
                                "<td class='number-pad hidden'> </td>" + 
                            "</tr>" + 
                        "</table>"

let emergency_pad_table = "<table id='dial-pad'>" +
                        "<tr>" + 
                            "<td class='emergency-pad'>1<br><span class='letters'></span></td></td>" + 
                            "<td class='emergency-pad'>2<br><span class='letters'>A B C</span></td>" + 
                            "<td class='emergency-pad'>3<br><span class='letters'>D E F</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td class='emergency-pad'>4<br><span class='letters'>G H I</span></td>" + 
                            "<td class='emergency-pad'>5<br><span class='letters'>J K L</span></td>" + 
                            "<td class='emergency-pad'>6<br><span class='letters'>M N O</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td class='emergency-pad'>7<br><span class='letters'>P Q R S</span></td>" + 
                            "<td class='emergency-pad'>8<br><span class='letters'>T U V</span></td>" + 
                            "<td class='emergency-pad'>9<br><span class='letters'>W X Y Z</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td class='emergency-pad'>*</td>" + 
                            "<td id='zero' class='emergency-pad'>0<br><span class='letters'>+</span></td></td>" + 
                            "<td class='emergency-pad'>#</td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td class='emergency-pad hidden'> </td>" + 
                            "<td id='make-call'class='emergency-pad'><i class='fa fa-phone'></i><br><span class='letters'></span></td>" + 
                            "<td id='backspace' class='emergency-pad'><i class='fa fa-arrow-left'></i><br><span class='letters'></span></td>" + 
                        "</tr>" + 
                    "</table>"

let home_screen = "<div id='screen-header'>" + 
                    "<i class='fa fa-signal'></i > &nbsp; ROGERS &nbsp; <i class='fa fa-wifi'></i> <i class='fa fa-lock'></i> 100% <i class='fa fa-battery-full'></i>" + 
                "</div>" + 
                "<div id='time'>" + 
                "</div>" +
                "<div id='date'>" + 
                "</div>" +
                "<div id='unlock-msg'>" + 
                    "Press home to unlock" + 
                "</div>" + 
                "<div id='screen-footer'>" +
                "<span id='left-dot'>●</span> <span id='right-dot'>●</span> <i class='fa fa-camera'></i>"+
                "</div>"


let passcode_screen = "<div id='screen-header'>" + 
                            "<i class='fa fa-signal'></i > &nbsp; ROGERS &nbsp; <i class='fa fa-wifi'></i> <i class='fa fa-lock'></i> 100% <i class='fa fa-battery-full'></i>" + 
                        "</div>" + 
                        "<div id='touch-enter-msg'>" + 
                            "Touch ID or Enter Passcode" +
                        "</div>" + 
                        "<div id='passcode-dots'>" + 
                            "<span>◯</span> <span>◯</span> <span>◯</span> <span>◯</span>" +
                        "</div>" +
                        "<div class='number-pad'>" + 
                            number_pad_table + 
                        "</div>" +
                        "<div id='passcode-footer'>" +
                            "<span id='emergency'>Emergency</span> <span id='passcode-cancel' class='cancel'>Cancel</span>" + 
                        "</div>"

let unlocked_screen = "<div id='screen-header'>" + 
                                "<i class='fa fa-signal'></i > &nbsp; ROGERS &nbsp; <i class='fa fa-wifi'></i> <span id='unlock-time'>4:20 PM</span> 100% <i class='fa fa-battery-full'></i>" + 
                            "</div>" + 
                            "<table id='apps'>" + 
                                "<tr class='app-row'>" + 
                                    "<td class='app'>" + 
                                        "<img src='assets/settings.png'><br>" + 
                                        "<span>Settings</span>" + 
                                    "</td>" + 
                                    "<td class='app'>" + 
                                        "<img src='assets/app_store.png'><br>" + 
                                        "<span>App Store</span>" + 
                                    "</td>" + 
                                    "<td class='app'>" + 
                                        "<img src='assets/clock.png'><br>" + 
                                        "<span>Clock</span>" + 
                                    "</td>" + 
                                    "<td class='app'>" + 
                                        "<img src='assets/maps.png'><br>" + 
                                        "<span>Maps</span>" + 
                                    "</td>" + 
                                "</tr>" +
                                "<tr class='app-row'>" + 
                                "<td class='app'>" + 
                                    "<img src='assets/calculator.png'><br>" + 
                                    "<span>Calculator</span>" + 
                                "</td>" + 
                                "</tr>" +
                            "</table>" + 
                            "<div id='screen-footer'>" +
                                "<span id='left-dot'>●</span> <span id='right-dot'>●</span> <i class='fa fa-camera'></i>"+
                            "</div>"

let emergency_screen = "<div id='screen-header'>" + 
                            "<i class='fa fa-signal'></i > &nbsp; ROGERS &nbsp; <i class='fa fa-wifi'></i> <i class='fa fa-lock'></i> 100% <i class='fa fa-battery-full'></i>" + 
                        "</div>" +
                        "<div id='typed-num'>" + 
                        "</div>" +  
                        "<div id='emergency-call'>" + 
                            "<span>Emergency call</span>" +
                        "</div>" + 
                        "<div class='number-pad' id='emergency-pad'>" + 
                            emergency_pad_table + 
                        "</div>" +
                        "<div id='passcode-footer'>" +
                            "<span class='cancel' id='emergency-cancel'>Cancel</span>" + 
                        "</div>"
