let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let home_screen_html = "<div id='screen-header'>" + 
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

let number_pad_table = "<table id='dial-pad'>" +
                            "<tr>" + 
                                "<td>1<br><span class='letters'></span></td></td>" + 
                                "<td>2<br><span class='letters'>A B C</span></td>" + 
                                "<td>3<br><span class='letters'>D E F</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td>4<br><span class='letters'>G H I</span></td>" + 
                                "<td>5<br><span class='letters'>J K L</span></td>" + 
                                "<td>6<br><span class='letters'>M N O</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td>7<br><span class='letters'>P Q R S</span></td>" + 
                                "<td>8<br><span class='letters'>T U V</span></td>" + 
                                "<td>9<br><span class='letters'>W X Y Z</span></td>" + 
                            "</tr>" + 
                            "<tr>" + 
                                "<td class='hidden'> </td>" + 
                                "<td id='zero'>0<br><span class='letters'></span></td></td>" + 
                                "<td class='hidden'> </td>" + 
                            "</tr>" + 
                        "</table>"

let emergency_pad_table = "<table id='dial-pad'>" +
                        "<tr>" + 
                            "<td>1<br><span class='letters'></span></td></td>" + 
                            "<td>2<br><span class='letters'>A B C</span></td>" + 
                            "<td>3<br><span class='letters'>D E F</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td>4<br><span class='letters'>G H I</span></td>" + 
                            "<td>5<br><span class='letters'>J K L</span></td>" + 
                            "<td>6<br><span class='letters'>M N O</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td>7<br><span class='letters'>P Q R S</span></td>" + 
                            "<td>8<br><span class='letters'>T U V</span></td>" + 
                            "<td>9<br><span class='letters'>W X Y Z</span></td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td>*</td>" + 
                            "<td id='zero'>0<br><span class='letters'>+</span></td></td>" + 
                            "<td>#</td>" + 
                        "</tr>" + 
                        "<tr>" + 
                            "<td class='hidden'> </td>" + 
                            "<td id='make-call'><i class='fa fa-phone'></i><br><span class='letters'></span></td></td>" + 
                            "<td class='hidden'> </td>" + 
                        "</tr>" + 
                    "</table>"


let passcode_screen_html = "<div id='screen-header'>" + 
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
                            "<span id='emergency'>Emergency</span> <span class='cancel'>Cancel</span>" + 
                        "</div>"

let emergency_screen_html = "<div id='screen-header'>" + 
                                "<i class='fa fa-signal'></i > &nbsp; ROGERS &nbsp; <i class='fa fa-wifi'></i> <i class='fa fa-lock'></i> 100% <i class='fa fa-battery-full'></i>" + 
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
