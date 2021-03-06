﻿var googlekey = "AIzaSyBIJnp5VXSiVEAr8xPM7-OWAYRfdYtlbV0";
var extlink = [], pfx = "/js2/", imapp = false;
var fixedStr = ["$comp", "$name", "$id", "$boss", "$division", "$position"];
var fixedPeriod = ["$thisYear", "$thisQuarter", "$thisMonth", "$thisWeek", "$thisWeednumber", "$Today", "$Yesterday", "$Tomorrow"];
function makefixedstrlist(type) {
    if (type == "period") 
        var list = "this year,$thisYear;this qtr,$thisQuarter;this month,$thisMonth;"+
            "this week,$thisWeek;this weeknum,$thisWeednumber;today,$Today;yesterday$Yesterday;tomorrow,$Tomorrow";
    else
        list = "company,$comp;name,$name;staffid,$id;boss,$boss;department,$division;position level,$position";
    return makeCtr(["select", list, , , ]);
}
function declareglobal() {
    imapp = true;
    googlekey = "AIzaSyBIJnp5VXSiVEAr8xPM7-OWAYRfdYtlbV0", output=0;
    jsonlang = "", jsonlist = "";
    extlink = [];
    menuid = "1", subid = "", contType = "afterlogin", webserviceprefix = "http://www.imcmaster.co.kr";
    umenuid = "", usubid = "", omenuid = "", osubid = "", mtogg = "", hpcd = "";
    tt, cnt = 0,pfx="js2/";
}
function jscssload(list, callback) {
    var cnt = 0;
    if (location.hostname == "") {
        webserviceprefix = "http://www.imcmaster.co.kr";
        pfx = "js2/";
    }
    $.each(list, function (i, k) {
        switch (k) {
            case "font-awesome":
                cssInsert("font-awesome-css", pfx+"font-awesome/css/font-awesome.min.css");
                break;
            case "switchButton":
                cssInsert("switchButton-css", pfx+"switchButton/jquery.switchButton.css");
                jscriptInsert("switchButton-js", pfx+"switchButton/jquery.switchButton.js");
                break;
            case "themeroller":
                jscriptInsert("themeroller-js", pfx+"jquery-themeroller/jquery.themeswitcher.min.js");
                break;
            case "colresizable":
                cssInsert("colresizable-css", pfx+"colResizable/samples/colResizable.Demo/css/main.css");
                jscriptInsert("colresizable-js", pfx+"colResizable/colResizable-1.6.min.js");
                break;
            case "sweetalert":
                cssInsert("sweetalert-css", pfx+"sweetalert/sweetalert.css");
                jscriptInsert("sweetalert-js", pfx+"sweetalert/sweetalert.min.js");
                break;
            case "jqgrid":
                cssInsert("jqgrid-css", pfx+"jqGrid3/css/ui.jqgrid.css");
                if ($("#jqgrid-js2").length > 0) {
                    $("#jqgrid-js2").remove();
                    $("#jqgrid-js1").remove();
                }
                jscriptInsert("jqgrid-js2", pfx+"jqGrid3/js/i18n/grid.locale-en.js");
                jscriptInsert("jqgrid-js1", pfx+"jqGrid3/js/jquery.jqGrid.src.js");
                break;
            case "fullcalendar":
                cssInsert("fullcalendar-css", pfx+"fullcalendar/fullcalendar.css");
                cssInsert("fullcalendar-wrap-css", pfx+"fullcalendar/fullcalendarwrap.css");
                //cssInsert("fullcalendar-printer-css", pfx+"fullcalendar/fullcalendar.printer.css");
                //jscriptInsert("fullcalendar-jquery-js1", pfx+"fullcalendarjquery.min.js");
                jscriptInsert("fullcalendar-jquery-ui-js1", pfx+"fullcalendar/jquery-ui.js");
                jscriptInsert("fullcalendar-moment-js1", pfx+"fullcalendar/moment.min.js");
                jscriptInsert("fullcalendar-js1", pfx+"fullcalendar/fullcalendar.min.js");
                break;
            case "datepicker": case "datetimepicker":
                cssInsert("datetimepicker-css", pfx+"datetimepicker/jquery.datetimepicker.css");
                jscriptInsert("datetimepicker-js1", pfx+"datetimepicker/jquery.datetimepicker.js");
                break;
            case "multipleselect":
                cssInsert("multiple-select-css", pfx+"jquery-multiple-select/multiple-select.css");
                jscriptInsert("multiple-select-js", pfx+"jquery-multiple-select/jquery.multiple.select.js");
                break;
            case "jstree":
                cssInsert("jstree-css", pfx+"jstree/default/style.min.css");
                jscriptInsert("jstree-js", pfx+"jstree/jstree.js");
                styleInsert("jstree-style", ".vakata-context { z-index: 10000001 !important; }.vakata_context { z-index: 10000001 !important; }");
                break;
            case "jqmodal":
                cssInsert("jqmodal-css", pfx+"jqmodal/jqmodal.css");
                jscriptInsert("jqmodal-js", pfx+"jqmodal/jqmodal.js");
                break;
            //case "googlechart":
            //    jscriptInsert("jsapi-js", pfx+"googlechart/jsapi.js");
            //    break;
            case "footable": //for table pagination/sorting
                cssInsert("footable-css", pfx+"footable/css/footable.core.css");
                cssInsert("footable-css1", pfx+"footable/css/footable-demos.css");
                jscriptInsert("footable-js1", pfx+"footable/js/footable.js");
                jscriptInsert("footable-js2", pfx+"footable/js/footable.paginate.js");
                jscriptInsert("footable-js3", pfx+"footable/js/demos.js");
                break;
            case "qtip2":
                cssInsert("qtip2-css", pfx+"qtip2/qtip2.css");
                jscriptInsert("qtip2-js", pfx+"qtip2/qtip2.js");
                break;
            case "simplePagination":
                cssInsert("simplePagination-css", pfx+"simplePagination/simplePagination.css");
                jscriptInsert("simplePagination-js", pfx+"simplePagination/jquery.simplePagination.js");
                break;
            case "quickPagination":
                jscriptInsert("quickpagination_js", pfx+"jquery-quick-pagination-master/js/jquery.quick.pagination.js");
                cssInsert("quickpagination-css", pfx+"jquery-quick-pagination-master/css/style.css");
                break;
            case "tinymce":
                jscriptInsert("tinymce-js", pfx+"tinymce/tinymce.min.js");
                break;
            case "fancybox":
                cssInsert("fancybox-css", pfx+"fancybox/jquery.fancybox.css");
                jscriptInsert("fancybox-js", pfx+"fancybox/jquery.fancybox.js");
                break;
            case "ddlslick"://dropdown with images
                jscriptInsert("ddlslick-js", pfx+"ddlslick/ddlslick.js");
                break;
            case "colorpicker":
                cssInsert("colorpicker-css", pfx+"colorpicker/css/colorpicker.css");
                jscriptInsert("colorpicker-js", pfx+"colorpicker/js/colorpicker.js");
                break;
            case "lang":
                jscriptInsert("lang-js1", pfx+"jquery-lang-js-master/js/jquery-lang.js");
                jscriptInsert("lang-js2", pfx+"jquery-lang-js-master/js/jquery-cookie.js");
                break;

            case "datatables":
                cssInsert("dataTables-css", pfx+"jquery-dataTables/media/css/jquery.dataTables.css");
                jscriptInsert("dataTables-js", pfx+"jquery-dataTables/media/js/jquery.dataTables.js");
                break;
            case "smartmenus":
                cssInsert("smartmenus-css1", pfx+"smartmenus/css/sm-core-css.css");
                cssInsert("smartmenus-css2", pfx+"smartmenus/css/sm-clean/sm-clean.css");
                cssInsert("smartmenus-css3", pfx+"smartmenus/css/sm-simple/sm-simple.css");
                cssInsert("smartmenus-css4", pfx+"smartmenus/css/sm-mint/sm-mint.css");
                cssInsert("smartmenus-css5", pfx+"smartmenus/css/sm-blue/sm-blue.css");
                jscriptInsert("smartmenus-js", pfx+"smartmenus/jquery.smartmenus.js");

                break;
                //case "googlemap":
                //    jscriptInsert("googlemap-js", "https://maps.googleapis.com/maps/api/js?key="+googlekey);
                //    break;
            case "pivottable":
                cssInsert("pivot-css1", pfx+"pivottable-master/dist/pivot.css");
                jscriptInsert("pivot-js1", pfx+"pivottable-master/dist/pivot.js");
                jscriptInsert("pivot-js2", pfx+"pivottable-master/dist/c3_renderers.js");
                jscriptInsert("pivot-js3", pfx+"pivottable-master/dist/d3_renderers.js");
                jscriptInsert("pivot-js4", pfx + "pivottable-master/dist/gchart_renderers.js");
                jscriptInsert("pivot-js5", pfx + "jquery-ui/jquery-ui-mouse-min.js");
                jscriptInsert("pivot-js6", pfx + "jquery.ui.touch-punch.js");
                break;
        }
    });
    //asp page to use list
    extlink.push({ grp: "Setting", name: "Company", url: "/setting/admin/comp/default.aspx" });
    extlink.push({ grp: "Setting", name: "Staff", url: "/setting/admin/UserAdmin.aspx" });
    extlink.push({ grp: "Setting", name: "Organization", url: "/setting/code/View_menu.aspx?code=DV00000000" });
    extlink.push({ grp: "Setting", name: "Level", url: "/setting/code/View_menu.aspx?code=JP00000000" });
    extlink.push({ grp: "Setting", name: "Product", url: "/setting/code/View_Prod.aspx?master=setting&code=PD00000000" });
    extlink.push({ grp: "Setting", name: "Customer", url: "/setting/code/view_chan.aspx?tab=0&hide=1&code=ch00000000" });
    extlink.push({ grp: "Forecast", name: "Forecast", url: "/setting/goal/reportforecast.aspx" });
    extlink.push({ grp: "Goal", name: "GoalList", url: "/setting/goal/batchgoallist.aspx" });
    extlink.push({ grp: "Goal", name: "GoalEdit", url: "/setting/goal/batchgoaledit1.aspx" });
    extlink.push({ grp: "Survey", name: "SurveyList", url: "/setting/ahp/ahpbldlist.aspx?master=nude" });
    extlink.push({ grp: "Report", name: "Reportlist", url: " /Report/reportview.aspx?code=gotop" });

    if ($.inArray("googlechart", list) > -1)
        setTimeout(function () {
            google.load('visualization', '1', {
                packages: ['controls', 'charteditor']
                ,callback: function () {
                    console.log('page inited....');
                    callback();
                }
            });

        }, 2500);
    else
        callback();
}

var menuid = "1", subid = "", contType = "afterlogin", webserviceprefix = "",htdefine="",cnt=0;
function pageInit() {
    var constr = $("#ctl00_hidConnect").val();
    if (typeof constr == "undefined")
        constr = "Data Source=SQL5004.Smarterasp.net;Initial Catalog=DB_9D66CD_imcmaster;User Id=DB_9D66CD_imcmaster_admin;Password=ykn90809080;";
    defconnect = "DBtype=mssql;" + constr;
    window.alert = function (text) { console.log('alert message: ' + text); return true; };
    menutoggle = "",comp="",staff="";
    if (getlogin() == "") {
        menutoggle = "open";
    }
    else if (localStorage.getItem("imcsetting") == null) {
        if (!imapp) {
            Login(getuserid1());
            comp = getlogin().comp;
            staff = getuserid1();
        }
    }
    var imc = localStorage.getItem("imctable")
     if (imc == null | imc == "") {
         jsonReadMyAjax("imctable", getlogin().comp + "," + staff,"","","", pageInit);
     }
     else {
         if (!imapp && getuserid1() != "") menutoggle = "";
         if (imapp && localStorage.getItem("imcsetting") != null) menutoggle = "";
         findsubid(JSON.parse(imc));
         if (imapp)
             initApp();
         else
             init();

     }
     function initApp() {
         jscssload(["jqgrid", "googlechart", "jstree", "datepicker", "multipleselect", "jqmodal", "sweetalert", "colresizable"
            , "datatables", "pivottable"]);

         google.charts.load('visualization','1', { packages: ['corechart'] });
         setTimeout(function () { menuMainApp(); initDisplay(); }, 2000);
      
    }
     function init() {
        var theme = "cupertino", csshref, menu = selectimctable(menutoggle + menuid);
        if (typeof menu != "undefined" && menu.hasOwnProperty("theme")) theme = menu.theme;
        if (theme != "cupertino" && theme != "undefined" && theme != "") {
            $("#jstheme").remove();
            $("#jqtheme").remove();
            csshref = "/js2/jquery-ui-themes-1.11.4/" + theme + "/theme.css";
            cssInsert("jstheme", csshref);
        }

        $("#menu").css("height", $(document).height() + "px");
        multilangReadAjax('kr');
        menuInit();
        var Lang = new Lang('en');
      
        if (isMobile()) {
            setTimeout(function () {
                $("#main-menu").hide();
                $("#main-menu").css({ "margin-left": "", width: "100%" })
                $(".nav-brand>a").remove()
                $("#main-top").appendTo($(".nav-brand"));
                $("#main-top").css({ "float": "left", "background-color": "#F0FFF0" });
                $("#splogo").empty().append($('<img style="width:50px" src="/images/logo/imc1_1.png"/>'));
              
                setTimeout(function () {
                    if ($("#main-menu").css("display") == "block")
                        $("#main-menu").hide();
                }, 1000);
            }, 1000);

        }

        chkwin();
    }
}
function chkwin() {
    if ($(window).width() < 780) {
        $("form").first().css("width", "");
        $("#main-menu").removeAttr("style");
        $("#splogo").empty().append($('<img style="width:50px" src="/images/logo/imc1_1_vertical.png"/>'));
    }
    else {
        $("form").first().css({ 'min-height': '800px', width: '1024px', 'background-color': 'White', margin: 'auto', 'border-right': 'solid 10px #E3E3E3', 'border-bottom': 'solid 5px #CECFCE' });
        $("body").css({ "background-color": "#EFEFE7" })
        $("#main-menu").css({ "float": "left", "margin-left": "100px", "z-index": 100, "background-color": "#F0FFF0" });
        $("#splogo").empty().append($('<img style="width:50px" src="/images/logo/imc1_1.png"/><img style="width:120px;" src="/images/logo/imcmaster.png"/>'));
    }
    
}
function imcload(imc) {
    /*
    retrieve data & update localStorage data by user status as below
    before login/
    after login
        -free user
        -paid user

        -admin group
        -user group
    */
    //menutoggle = "";
    if (typeof imc == "undefined")
        imc = localStorage.getItem("imctable");
    var pimc, imckey;

    if (imc != null && imc != "") {
        pimc = JSON.parse(imc);
        imckey = Object.keys(pimc);
    }
    checklastupdate("imcsetting");
    //if (localStorage.getItem("imcdata") == null) jsonReadallAjax("imcdata");
    //else { checklastupdate("imcdata"); sec += 300;}
    // if ($.inArray("adminmenu", imckey) == -1) jsonReadallAjax("imctable_admin");
    if ($.inArray("menu", imckey) == -1) {
        jsonReadallAjax("imctable");
        sweetmsgautoclose("Welcome", "Enjoy your first visit")
    }
    else {
        checklastupdate("imctable");
    }
}
function imcloadchk(sname) {
    var rtn = false;
    if (localStorage.getItem(sname) != "" && sname in localStorage) rtn = true;
    return rtn;
}
function getuserid1() {
    var id = "";
    var sett = localStorage.getItem("imcsetting");
    if (imapp) {
        if (sett != null) id = JSON.parse(sett).id;
    }
    else {
            id = getuserid();
    }
    return id
}
function getlogin() {
    if (getuserid1() == "") login = "";
    else {
        var login = selectimc("imcsetting", "login");

        //login정보가 없으면 가져옴
        if (typeof (login) == "undefined" | login == "") {
            Login(getuserid1());
            //function getuserid1() {return '<%= System.Web.HttpContext.Current.User.Identity.Name %>';}//각 페이별로 삽입
            login = "";
        }
    }
    return login;
}
function Login(id, pass) {
    if (typeof (pass) == "undefined") pass = '';
    if(id!="")
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/Login",
        data: { id: JSON.stringify(id), pass: JSON.stringify(pass) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            if (data.d != "") {
                var dt = JSON.parse(data.d);
                var dt1 = selectimc("imcsetting", "login");
                imcsetting("imcsetting", "login", data.d);
                localStorage.removeItem("imctable");
                pageInit();
                menutoggle = "";
            }
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
}
function findsubid(imc) {
    menuid = imc[menutoggle + "menu"][0].menuid;
    var mm = $.grep(imc[menutoggle + "submenu"], function (a) {
        return a.menuid == menuid;
    });
    if (mm.length > 0) subid = mm[0].subid;
}
function cleanobject(obj) {
    //delete element key without value
    $(Object.keys(obj)).each(function (i, k) {
        if (obj[k] == "")
            delete obj[k];
    })
    return obj
}
//#endregion

//#region menu
function menuInit(extlink) {
    menuAdminInit();
    menuHead(extlink);
   // menuSide(extlink);
    cssInsert("menu-css", "/js2/menu_slide/menu.css");
    setTimeout(function () {
        menuMain(extlink);
        $("#menu").find("ul").find("a").css("width", $("#menu").css("width"));
        var imc = localStorage.getItem("imctable");
        findsubid(JSON.parse(imc));
        $("#main-menu>li>ul>li>a[subid='" + subid + "']").click();
        funStop();
    }, 1000);
}
var umenuid = "", usubid = "", omenuid = "", osubid = "", mtogg = "", hpcd = "";
function menuHead(extlink) {
    var person = selectimc("imcsetting", "personal");
    var gtran = false;
    if (typeof person != "undefined") {
        if (person.hasOwnProperty("use_googletrans"))
            gtran = JSON.parse(person.use_googletrans);
    }
    jQuery.fn.reverse = [].reverse;
    $("#main-top").remove();
    var topm = menuMy("menu");//selectimc("imctable", menutoggle + "menu");
    var shead = "clean";
    if (typeof topm != "undefined" && topm.hasOwnProperty("topmenu")) shead = topm[0].topmenu;
    var ul = $('<ul id="main-top" style="margin-bottom:2px" class="sm sm-' + shead + '"/>').prependTo($("form")[0]);
    var ins = ["user", "globe", "cog", "question-circle"];
    if (getlogin() == "") ins.splice(2, 1);//before login hide cog
    if (isMobile()) {
        ins.splice(ins.indexOf("cog"), 1);
        ins.splice(ins.indexOf("question-circle"), 1);
    }
    //if (menutoggle == "open") ins = ["user", "globe", "question-circle"];
    $(ins).reverse().each(function (i, k) {
        var ahr = $("<a class='imdim'></a>");
        var icon = $("<i class='fa fa-" + k + "'/>");
        var txt = $("<span>test</span>")
        ahr.append(icon);
        var ll = $("<li/>");
        if (k == "globe") ll = $("<li class='language' />");
        ll.append(ahr).appendTo(ul);
        var ulc = $("<ul>"), str = "";
        switch (k) {
            case "user":
                var id = getuserid1();
                if (id != "") {
                    ahr.append($("<span lang='en' onclick=\"editUser('" + id + "')\">" + id + "</span>"));
                    str = "<li><a lang='en'  onclick=\"toggleLogin()\" >Log Out</a><li>";
                    str += "<li><a lang='en'  onclick=\"editUser('" + id + "')\" >User Setting</a><li>";
                }
                else {
                    str = "<li><a lang='en' onclick=\"loginpop('login')\" >Log In</a><li>";
                    str += "<li><a lang='en' onclick=\"loginpop('join')\" >Join</a><li>";
                }

                break;
            case "globe":
                if (!gtran) {
                    var obj = [];// = Lang.prototype.pack;
                    multilangReadListAjax();
                    if (jsonlist != "") obj = jsonlist.split(';');
                    var set = $.merge(['en', 'us'], obj);
                    //var flaglist = nationalFlag({ text: "long", size: 16 }).flaglist;
                    //ahr.append($("<span id='splang'></span>"));
                    //$(flaglist).each(function (j, pp) {
                    //    var p = pp.split(",");
                    //    var langcode = p[0];
                    //    var cname = p[1];
                    //    var imgsrc = p[2];
                    //    if ($.inArray(langcode, set) > -1) {
                    //        //if (ll[0] == "us") { ll[0] = "en"; ll[1] = "English" }

                    //        // if (ll[0] != b) countryname += "(" + b+")";
                    //        str += "<li><a  lang='en' onclick=\"langload( '" + langcode + "');\"> <img src='" + imgsrc + "'/>" + cname + "</a></li>";
                    //    }

                    //});
                }
                break;
            case "cog":
                ahr.attr("onclick", "menuAdmin();menutoggle='admin'");
                //ahr.append($("<span lang='en' onclick='editUser()'>" + id + "</span>"));
                str = "<li><a id='ahbuild' lang='en'>Page Build</a><li>";
                str += "<li><a id='ahmenu' lang='en'>Menu Edit</a><li>";
                str += "<li><a id='areload' lang='en'>Menu Reload</a><li>";
                str += "<li><a id='ashowmenu' lang='en'>Menu Show</a><li>";

                //ll.attr("onclick", "menutoggle='admin';menuAdmin();setTimeout(function(){adminpage('page')},100);");
                break;
            case "question-circle":
                ahr.on("click", function () {
                    if ($("#dvName>label").text() == "CSSEdit")
                        helpclick("cssedit");
                    else
                        helpclick();

                });

                break;
        }
        if (str != "") {
            // if(k=="user")
            //ll.attr("onclick", ($(str).children().first().attr("onclick")));
            ulc.appendTo(ll);
            $(str).appendTo(ulc);
            $("#ahmenu").click(function () {
                //menutoggle = "";
                adminpage('menu');

                //$("<label style='font-size:2em;padding-top:10px;'>Menu Edit</label>").appendTo($("#dvName"));
                setTimeout(function () {
                    menuAdmin();
                    setTimeout(function () {
                        if ($("#lbedit").length == 0)
                            $("#dvName").append($("<label id='lbedit' style='font-size:2em;margin:20px 0 0 0;'>Menu Edit</label>"));

                    }, 1000);
                }, 2000);
            });
            $("#ahbuild").click(function () {
              
                var curname = $("#dvName").find("label").text();
                $("#dvName").empty();
                funLoading(true);
                switch (menutoggle) {
                    case "":
                        umenuid = menuid; usubid = subid; setTimeout(function () { adminpage('page'); }, 500); menutoggle = 'admin';
                        setTimeout(function () { menuMain(); menutoggle = "" }, 100);
                        break;
                    case "admin":
                        $("#dvadmin").empty(); initEdit(); redips.init();
                        adminfix = "menutoggle = 'admin'; menuMain();";
                        var onc = $("#inE").attr("onclick");
                        $("#inE").attr("onclick", onc + adminfix);
                        break;
                    case "open":
                        adminpage('openpage');
                        break;
                    case "template":
                        adminpage('page');
                        break;
                }
                setTimeout(function () {
                    if ($("#lbedit").length == 0) {
                        if (curname != "") curname = ": " + curname.replace("Page Build :", "");
                        $("#dvName").append($("<label id='lbedit' style='font-size:2em;margin:10px 0 -5px 0;'>Page Build " + curname + "</label>"));
                    }
                    funStop();
                }, 300);
            });
            $("#areload").click(function () {
                //menutoggle = "";
                localStorage.removeItem("imctable");
                localStorageinit({ reset: true }, pageInit);
                $("<div>" + JSON.stringify(JSON.parse(localStorage.getItem("imctable")).menu) + "</div>").dialog();
            });
            $("#ashowmenu").click(function () {
                $("<div>" + JSON.stringify(JSON.parse(localStorage.getItem("imctable")).menu) + "</div>").dialog();
            });
        }
    });
    ul.prepend($('<div id="splogo" onclick="menuHome()" style="margin:8px 0 0 10px;float:left"><img style="width:120px;" src="/images/logo/imcmaster.png"/>'));
    $('#main-top').smartmenus({
        mainMenuSubOffsetX: -1,
        mainMenuSubOffsetY: 4,
        subMenusSubOffsetX: -1,
        subMenusSubOffsetY: -6
    });
    $('#main-top').css({ "z-index": 10, "border": "none", "background-color": "white" });
    $("#main-top >li").css({ 'float': 'right' });

    if (gtran) {
        $("li.language,#google_translate_element").hover(
function (e) {
    var tp = parseInt(e.pageY) - 5, lf = parseInt(e.pageX) - 60;
    var topbar = $(".skiptranslate");
    if (topbar.find(".goog-te-banner-frame").length > 0 && $(topbar[0]).css("display") == "block") {
        tp = parseInt(e.pageY) - 45;
    }

    $("#google_translate_element").css({ position: 'absolute', top: tp, left: lf }).show();
}, function () {
    setTimeout(function () { $("#google_translate_element").hide(); }, 3000);
});
    }
}
function menuAdmin() {
    $("[id*=-csss]").remove();//remove all css style & link
    if (menutoggle == "open") {
        if (osubid == "") {
            var sub2 = selectimc("imctable", "opensubmenu");
            if (sub2.length > 0) usubid = sub2[0].subid;
            omenuid = "open1";
        }
        omenuid = menuid; osubid = subid;
        umenuid = "1"; var sub = selectimc("imctable", "submenu");
        if (sub.length > 0) usubid = sub[0].subid;
    }
    else {
        umenuid = menuid; usubid = subid;
        omenuid = "open1"; var sub1 = selectimc("imctable", "opensubmenu");
        if (sub1.length > 0) osubid = sub1[0].subid;
    }
    $('#tableinsert').remove();

    setTimeout(function () { menuMain(); }, 100);

}
function menuAdminInit() {
    //initially inject admin menu move to server !!!
    var adminmenu = menuMy("submenu");//selectimc("imctable", "adminmenu");
    var comp = getlogin().comp;
    if (adminmenu == "" | adminmenu.length == 0) {
        var tt = ["adminmenu", "adminsubmenu", "admincontrol"];
        var admin = [[{ "menuid": "admin1", "comp": comp, "title": "Edit", "page": "", "default": "", "width": "150", "menuopen": false, "keepopen": false, "position": "left", "backcolor": "#4a6184", "fontsize": "14px", "theme": "excite-bike" }
            , { "menuid": "admin2", "comp": comp, "title": "Resource", "page": "", "default": "", "width": "150", "menuopen": false, "keepopen": false, "position": "left", "backcolor": "#4a6184", "fontsize": "14px", "theme": "black-tie" }
            , { "menuid": "admin3", "comp": comp, "title": "Setting", "page": "", "default": "", "width": "150", "menuopen": false, "keepopen": false, "position": "left", "backcolor": "#4a6184", "fontsize": "14px", "theme": "excite-bike" }]
            , [{ "menuid": "admin1", "comp": comp, "subid": "j16011215331", "table": [], "text": "menu edit", "parent": "admin1", "icon": "fa-align-justify", "href": "menu", "useiframe": false }
                , { "menuid": "admin2", "comp": comp, "subid": "j160112153427", "table": [], "text": "DataList", "parent": "admin2", "icon": "fa-align-justify", "href": "datalist", "useiframe": false }
                , { "menuid": "admin2", "comp": comp, "subid": "j160112163349", "table": [], "text": "CSSList", "parent": "admin2", "icon": "fa-align-justify", "href": "csslist", "useiframe": false }
                , { "menuid": "admin1", "comp": comp, "subid": "j16011219161", "table": [], "text": "PageBuild", "parent": "admin1", "icon": "fa-align-justify", "href": "page", "useiframe": false }
                 , { "menuid": "admin1", "comp": comp, "subid": "j16020910917", "table": [], "text": "PageBuild(open)", "parent": "admin1", "icon": "fa-align-justify", "href": "openpage", "useiframe": false }
                , { "menuid": "admin3", "comp": comp, "subid": "j160113144444", "table": [], "text": "Language", "parent": "admin3", "icon": "fa-align-justify", "href": "language", "useiframe": false }
                , { "menuid": "admin3", "comp": comp, "subid": "j160113144528", "table": [], "text": "Cookie", "parent": "admin3", "icon": "fa-align-justify", "href": "cookie", "useiframe": false }]
            , [{ "menuid": "admin1", "comp": comp, "subid": "j16011215331", "dvid": "fc0", "setting": { "gridstack": [{ "tabid": "001fc0", "id": "gs160114135720", "type": "text", "x": 0, "y": 0, "width": 12, "height": 2, "content": { "savetype": "html", "text": "<p>dsfadf</p>" } }], "tab": [{ "href": "001fc0", "html": "FirstTab" }] } }
                , { "menuid": "admin1", "comp": comp, "subid": "j16011215331", "dvid": "jqac0", "datacode": "dt130614013757", "filter": [["name", "", [], "", "", false], ["code", "", [], "", "", false], ["parentcode", "", [], "", "", false], ["descript", "", [], "", "", false]], "field": [] }, "", "", "", "", "", ""]]

        var ori = JSON.parse(localStorage.getItem("imctable"));
        $(tt).each(function (i, k) {
            if(!ori.hasOwnProperty(k))
            //deleteimcsetting("imctable", k);
            ori[k] = admin[i]
        });
        localStorage.setItem("imctable", JSON.stringify(ori));
        jsonSaveAjax("imctable", JSON.stringify(ori));
    }
}
function menuMy(menu, menutype) {
    if (typeof menutype == "undefined") menutype = menutoggle;
    var sl, grp;
    var storename = 'imctable';
    if (menutype == "template")
        storename = 'imctemplate';

    var mm = selectimc(storename, menutype + menu);

    if (mm != "" && typeof mm != "undefined" && menutoggle == 'template') {
        //var ttype = 'common';
        //if ($("#seltemplate").length > 0) ttype = $("#seltemplate").val();
        var mm = $.grep(mm, function (a) {
            return a.templatetype == templatetype;
        });
    }
    else {
        var my = getlogin();
        if (my != "" && menutoggle != "open") {
            sl = [];
            if(my.hasOwnProperty("slevel")) sl=permissionarray(my.slevel);
            grp = permissionarray(my.group);

            $(mm).each(function (i, k) {
                var chk = false;
                if (k.hasOwnProperty("permission") && k.permission != "") {
                    var list = k.permission.split(",");
                    $(list).each(function (a, b) {
                        if (sl.length>0 && $.inArray(b, sl) == -1) chk = true;
                        if ($.inArray(b, grp) == -1) chk = true;
                    });
                    //if (chk) mm.splice(i, 1);
                }
            });
        }
    }
    function permissionarray(my) {
        var myarr = [];
        switch (my) {
            case "SystemAdmins":
                my = ["CommonAdmins", "CommonUsers", "SystemAdmins"];
                break;
            case "CommonAdmins":
                my = ["CommonAdmins", "CommonUsers"];
                break;
            case "CommonUsers":
                my = ["CommonUsers"];
                break;
            case "SL00000004":
                my = ["SL00000004", "SL00000003", "SL00000002", "SL00000001"];
                break;
            case "SL00000003":
                my = ["SL00000003", "SL00000002", "SL00000001"];
                break;
            case "SL00000002":
                my = ["SL00000002", "SL00000001"];
                break;
            case "SL00000001":
                my = ["SL00000001"];
                break;
        }
        return my;
    }
    return mm;
}
function menuMain() {
    jscriptInsert("breadcrumb", "/js2/jquery-rcrumbs/src/jquery.rcrumbs.js");
    cssInsert("breadcrumb", "/js2/jquery-rcrumbs/dist/jquery.rcrumbs.min.css");
  
    $(".main-nav").remove();
    var nav = $('<nav class="main-nav" role="navigation">').insertAfter($("#main-top"));

    //<!-- Mobile menu toggle button (hamburger/x icon) -->
    var mobilebtn = $('<input id="main-menu-state" type="checkbox" />' +
     '<label class="main-menu-btn" for="main-menu-state">' +
      ' <span class="main-menu-btn-icon"></span> Toggle main menu visibility' +
     '</label>').appendTo(nav);

    //$('<h2 class="nav-brand"><a href="#">Brand</a></h2>').appendTo(nav);
    nav.append($("<span class='nav-brand'><a><i onclick='menuHome()' class='fa fa-home fa-lg imdim' ></i></a></span>"));
    //}
    var topm = menuMy("menu");//selectimc("imctable", menutoggle + "menu");
    topm.sort(function (a, b) {
        return parseFloat(a.odr) - parseFloat(b.odr);
    });
    var subm = menuMy("submenu");// selectimc("imctable", menutoggle + "submenu");
    //    jsInsert("smart-js","/js2/smartmenus/jquery.smartmenus.js");
    //cssInsert("smart-css","/js2/smartmenus/css/sm-core-css.css");
    //cssInsert("smart-css2", "/js2/smartmenus/css/sm-clean/sm-clean.css");
    var cururl = window.location.pathname;
    $("#main-menu").remove(); $("#dvTitle").remove();
    var shead = "clean";
    if (typeof topm != "undefined" && topm.hasOwnProperty("topmenu")) shead = topm[0].topmenu;
    //if(ul.length==0){
    var ul = $('<ul id="main-menu" style="float:left;margin-left:100px;padding-top:2px;z-index:10" class="sm sm-' + shead + '"/>').appendTo(nav);
    $("<table id='dvTitle' width='100%'><tbody><tr/></tbody></table>").insertAfter(nav);
    //}
    $("<td id='dvName' style='padding-left:10px'/>").appendTo($("#dvTitle>tbody>tr"));

    var hr = "#", defarr = ["/", "/default.aspx"];
    $(topm).each(function (i, k) {
        if (k.hasOwnProperty("href")) hr = k.href;
        else if ($.inArray(window.location.pathname, defarr) == -1)
            hr = "/?menuid=" + k.menuid;
        // var ahr = $("<a menuid='"+k.menuid+"' href='"+hr+"'>"+k.title+"</a>");
        var ahr = $("<a  lang='en' menuid='" + k.menuid + "'>" + k.title + "</a>");
        var ll = $("<li/>");
        ll.append(ahr).appendTo(ul);
        var dt = $.grep(subm, function (a) {
            return a.parent == k.menuid;
        });
        if (dt.length > 0) {
            ll.append(menuSub(dt));
        }
    });
    if (getuserid1() == "") menutoggle = "open";
    var smenu = menuMy("submenu");//selectimc("imctable", menutoggle+"submenu");

    if (smenu.length > 0) { var menuid1 = smenu[0].menuid, subid1 = smenu[0].subid; }
    function menuSub(dt) {
        var ulc = $("<ul>");
        $(dt).each(function (i, k) {
            hr = "#";
            if (menutoggle == "admin") {
                // if (typeof k.href != "undefined")
                hr = k.href;
                //else
                //    hr = k.menuid + "," + k.subid;
            }
            else if (cururl != "/") hr = "/?menuid=" + k.menuid + "&subid=" + k.subid;
            else {
                if (k.hasOwnProperty("href") && k.hasOwnProperty("useiframe")) {
                    if (k.useiframe)
                        hr = "#";
                    else
                        hr = k.href;
                }
                else if ($.inArray(window.location.pathname, defarr) == -1)
                    hr = "/?menuid=" + k.menuid + "&subid=" + k.subid;
            }
            var ahr = $("<a  lang='en'   href='" + hr + "' menuid='" + k.menuid + "'  subid='" + k.subid + "' >" + k.text + "</a>");
            if (menutoggle == 'admin') {
                if (typeof hr != "undefined")
                    ahr = $("<a  lang='en' menutype='admin'  onclick=\"adminpage('" + hr + "')\" menuid='" + k.menuid + "'  subid='" + k.subid + "' >" + k.text + "</a>");
                else
                   ahr= $("<a  lang='en' menutype='adminhref'  href='" + hr + "' menuid='" + k.menuid + "'  subid='" + k.subid + "' >" + k.text + "</a>");
            }
               
            var ls = $("<li/>");
            ls.append(ahr).appendTo(ulc);
            var dt1 = $.grep(subm, function (a) {
                return a.parent == k.subid;
            });

            if (dt1.length > 0) {
                ls.append(menuSub(dt1));
            }
        });
        return ulc;
    }
    //if (menutoggle == "")
    //    ul.prepend($('<span style="float:left;margin-left:-170px"><i onclick="menuclick();" style="margin:10px 10px 0 0;" class="fa fa-align-justify fa-2x" ></i></span>'));
    //else {
    //     ul.prepend($("<span style='float:left;margin-left:-170px'><i onclick='menuHome()' style='margin:10px 10px 0 0;' class='fa fa-home fa-2x imdim' ></i></span>"));
    //}
    // ul.prepend($('<div style="float:right;"><i onclick="menuclick();" style="margin:10px 10px 0 0;" class="fa fa-align-justify fa-2x" ></i></div>'));
    
    $("#main-menu a").click(function (event) {
       
        if ($(this).attr("class") != "has-submenu") {
            menuid = $(this).attr("menuid");
            subid = $(this).attr("subid");
            menuBreadcrumbs($($(this)[0]));
            $("#dvName").empty();
            var title = $(this).text().replace("+", "");
            $("#dvName").append($("<label style='font-size:2em;margin:10px 0 -5px 0;'>" + title + "</label>"));
            var dtt = menuMy("submenu");//selectimc("imctable", menutoggle + "submenu");
            var href;

            if ($(this).attr("menutype") != "admin") {
                if ($(this).attr("menutype") == "adminhref")
                adminpage("");

                setTimeout(function () { initDisplay(); setTimeout(function () { multilangInject(); funStop(); }, 1000) }, 100);
            }

            $("#menu a").each(function (i, k) {
                if ($(k).attr("id") == subid)
                    $(k).addClass("active");
                else
                    $(k).removeClass("active");
            });
            return false;
        }
    });
    $('#main-menu').smartmenus({
        mainMenuSubOffsetX: 10,
        mainMenuSubOffsetY: 4
        //subMenusSubOffsetX: 6,
        //subMenusSubOffsetY: -6
        //mainMenuSubOffsetX: 10,
        //mainMenuSubOffsetY: 4,
        //subMenusMinWidth: '10em',        // min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
        //subMenusMaxWidth: '20em',        // max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
    });
    // $('#main-menu').wrap("<div class='rcrumbs'></div>");
    // $(".rcrumbs").rcrumbs();

    $(".main-nav,#main-menu").css("background-color", "#F0FFF0");

    // SmartMenus mobile menu toggle button
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
        // animate mobile menu
        $mainMenuState.change(function (e) {
            var $menu = $('#main-menu');
            if (this.checked) {
                $menu.hide().slideDown(250, function () { $menu.css('display', ''); });
            } else {
                $menu.show().slideUp(250, function () { $menu.css('display', ''); });
            }
        });
        // hide mobile menu beforeunload
        $(window).bind('beforeunload unload', function () {
            if ($mainMenuState[0].checked) {
                $mainMenuState[0].click();
            }
        });
    }
  
   
}
function menuMainApp() {
    //jscriptInsert("breadcrumb", "/js2/jquery-rcrumbs/src/jquery.rcrumbs.js");
    //cssInsert("breadcrumb", "/js2/jquery-rcrumbs/dist/jquery.rcrumbs.min.css");
    var topm = menuMy("menu");
    topm.sort(function (a, b) {
        return parseFloat(a.odr) - parseFloat(b.odr);
    });
    var subm = menuMy("submenu");
    var nav = $("#nav-panel");
    var cururl = window.location.pathname;// /android_asset/www/index.html
    //$("#main-menu").empty();
    $("#dvTitle").remove();
    $("#main-menu>li:not(:eq(0))").remove();
    var ul = $('#main-menu');//<ul id="main-menu" data-role="listview"/>').appendTo(nav);
    $("<table id='dvTitle' width='100%'><tbody><tr/></tbody></table>").prependTo($("#dvContent123"));
    //$("<table id='dvTitle' width='100%'/>").prependTo($("#dvContent123"));
    //}
    $("<td id='dvName' style='padding:0 0 0 10px'/>").appendTo($("#dvTitle>tbody>tr"));
    var hr = "#", defarr = ["/"];
   // $('<li data-icon="delete"><a href="#" data-rel="close">MENU</a></li>').appendTo(ul).trigger('create');    ul.listview('refresh');
    $(topm).each(function (i, k) {
            hr = "/?menuid=" + k.menuid;
        var ahr = $("<a lang='en' menuid='" + k.menuid + "'>" + k.title + "</a>");
        var ll = $("<li/>");
        var dt = $.grep(subm, function (a) {
            return a.parent == k.menuid;
        });
        if (dt.length > 0) {
            ll.attr("data-role", "collapsible");
            ll.attr("data-iconpos", "right");
            ll.attr("data-inset", "true");
            ll.append($("<h2>"+k.title+"</h2>"));
            ll.append(menuSub(dt)).appendTo(ul);;
        }
        else
            ll.append(ahr).appendTo(ul);
        ul.append(ll).trigger('create');
        ul.listview('refresh');
    });
    
    if (getuserid1() == "") menutoggle = "open";
    var smenu = menuMy("submenu");
    if (smenu.length > 0) { var menuid1 = smenu[0].menuid, subid1 = smenu[0].subid; }
    function menuSub(dt) {
        var ulc = $("<ul data-role='listview' data-theme='b'>");
        $(dt).each(function (i, k) {
            hr = "#";
            // hr = "/?menuid=" + k.menuid + "&subid=" + k.subid;
            var ahr = $("<a  lang='en'   href='" + hr + "' menuid='" + k.menuid + "'  subid='" + k.subid + "' onclick=\"clickmenu('"+k.menuid+"','"+k.subid+"','"+k.text+"')\" >" + k.text + "</a>");
            var ls = $("<li/>");
            var dt1 = $.grep(subm, function (a) {
                return a.parent == k.subid;
            });
            if (dt1.length > 0) {
                ll.attr("data-role", "collapsible");
                ll.attr("data-iconpos", "right");
                ll.attr("data-inset", "true");
                ll.append($("<h2>" + k.title + "</h2>"));
                ls.append(menuSub(dt1)).appendTo(ulc);;
            }
            else
                ls.append(ahr).appendTo(ulc);
        });
        return ulc;
    }
   
}
function clickmenu(md,sd,title) {
            //menuid = $(this).attr("menuid");
            //subid = $(this).attr("subid");
    //menuBreadcrumbs($($(this)[0]));
    menuid = md;
    subid = sd;
            $("#dvName").empty();
            title = title.replace("+", "");
            $("#dvName").append($("<label style='font-size:2em;margin:10px 0 -5px 0;'>" + title + "</label>"));
            var dtt = menuMy("submenu");//selectimc("imctable", menutoggle + "submenu");
            var href;
            initDisplay();
            $("[data-role=panel]").panel("close");
            //    setTimeout(function () { initDisplay(); setTimeout(function () { multilangInject(); funStop(); }, 1000) }, 100);
}
function menuHome() {
    //return to user menu
    if (getuserid1() == "") menutoggle = "open";
    if (menutoggle == 'admin') menutoggle = '';
    var sm = menuMy("submenu");//selectimc("imctable", menutoggle+"submenu");
    if (sm != "") {
        menuid = sm[0].menuid;
        subid = sm[0].subid;
    }
    $('#dvadmin').empty(); $('#tableinsert').remove(); menuInit();// initDisplay('', selectimctable(menuid, subid));
    setTimeout(function () { multilangInject(); }, 500);
}
function menuPopup(type, mid, sid) {
    //in order to use multilanguage popup
    menutoggle = type;
    menuid = mid;
    subid = sid;
}
var tt, cnt = 0;
function menuBreadcrumbs(ahr) {
    var dv = $("#dvCrumbs");
    dv.remove();
    dv = $("<div id='dvCrumbs' style='color:#717171;font-size:12px;margin:0 10px 0 5px;float:right;vertical-align:bottom'/>");
    var td = $("<td style='vertical-align:bottom;tet-align:right;'/>").appendTo($("#dvTitle>tbody>tr"));
    td.append(dv);
    var newahr = $("<span/>");
    newahr.text(ahr.text().replace("+", " "));
    dv.append(newahr);
    if (typeof ahr.parent().parent() != "undefined" && ahr.parent().parent() != "")
        goup(ahr.parent().parent())
    function goup(curdom) {
        var up = curdom[0];
        if (typeof up != "undefined")
            switch (up.nodeName) {
                case "LI":
                    var ahr1 = $(curdom.find("a")[0]);
                    var newahr1 = $("<a href='#'/>");
                    newahr1.attr("menuid", ahr1.attr("menuid"));
                    newahr1.attr("subid", ahr1.attr("subid"));
                    newahr1.attr("class", "linkbtn");
                    newahr1.text(ahr1.text().replace("+", " "));
                    var jqTextNode = $(document.createTextNode(' > '));
                    dv.prepend(jqTextNode);
                    dv.prepend(newahr1);
                    goup(ahr1.parent().parent());
                    break;
                case "UL":

                    if ($(up).attr('id') != "main-menu")
                        goup(curdom.parent());
                    break;
            }
    }
    $("#dvCrumbs a").click(function (event) {
        menuid = $(this).attr("menuid");
        subid = $(this).attr("subid");
        var curahr = $("#main-menu").find("a[menuid='" + menuid + "'][subid='" + subid + "']");
        curahr.click();

    });
}
//parse parameter string
$.urlParam = function (name) {
    // example.com?param1=name&param2=&id=6
    //$.urlParam('param1'); // name
    //$.urlParam('id');        // 6
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}
function menuSide() {
    var nav, ul, li, ah, i, dv, data, img;
    var list = [[1, "0", "Home", "fa-home"], ["j1_1", "0", "About", "fa-info-circle"], [3, "0", "Service", ], [4, "0", "Contact", "fa-phone"], [4.1, 4, "s1", ], [4.2, 4, "s2", ]];
    var set = {};
    //data create imsi
    var dt = [];
    $.each(list, function (i, k) {
        set = {};
        set.id = k[0];
        set.parent = k[1];
        set.name = k[2];
        set.text = k[2];
        set.icon = k[3];
        dt.push(set);
    });
    $("#dvMenu1").empty();
    if ($("#dvMenu1").length == 0)
        $("<div id='dvMenu1'/>").appendTo($("body"));

    nav = $("<nav id='menu' class='left' style='line-height:32px'/>");
    $("#dvMenu1").append(nav);
    ul = $("<ul/>");
    nav.append(ul);
    var dt = menuMy("submenu");//selectimc("imctable", "submenu");
    dt = $.grep(dt, function (a) {
        return a.menuid == menuid;
    });
    //create ul list
    $.each(dt, function (i, k) {
        if (k.parent == menuid)
            ul.append(makeli(ul, k));
    });

    function makeli(ul, k) {
        li = $("<li>");
        ah = $("<a />");
        ah.attr("id", k.subid);

        li.append(ah);
        i = "<i class='fa " + k.icon + "' />";
        i += k.text;
        //Recursive
        var ul1 = $("<ul/>");
        var imsi1 = [];
        $.each(dt, function (j, l) {
            if (l.parent == k.subid) {
                imsi1.push(l);
            }
        });
        if (imsi1.length > 0) {
            i += "<i class='fa fa-caret-down'></i>";
            li.append(ul1);
        }
        ah.html(i);
        ul.append(li);

        $.each(imsi1, function (i, k) {
            makeli(ul1, k)
        });
    }

    //nav(button> ullist >showmenu)
    dv = $("<div style='padding:10px;min-height:35px;border-bottom:1px #D7D7D7 solid'/>");
    //var dv1 = $("<div style='float:left;' class='imdim'/>");
    //dv.append(dv1);

    //img = $("<img id='thumbTab' class='thumbTab' src='/images/pinup.png' />");
    //dv1.append(img);

    dv1 = $("<div style='float:right;'/>");
    dv.append(dv1);
    img = $("<img onclick='$(\"#menu\").removeClass(\"show\").addClass(\"left\");' class='imdim' src='/images/close_blue.png' />");
    // img = "<i class='fa fa-times-circle-o' onclick='$(\"#menu\").removeClass(\"show\").addClass(\"left\");'/>";
    dv1.append(img);
    nav.prepend(dv);
    //nav.append($("<a href='#' id='showmenu'> <i class='fa fa-align-justify'></i> </a>"));

    //css update
    var upstyle = "";
    var mstyle = selectimctable(menuid, '', '');
    if (typeof (mstyle) == "undefined" | mstyle == "") {
        mstyle = {};
        mstyle.width = 250;
        mstyle.backcolor = "#4A6184";
        //$("#dvMenu1").css("height", $(window).height() - 100 + "px");
    }
    if (mstyle.hasOwnProperty("width")) {
        if (mstyle.width == "") mstyle.width = 250;
        upstyle += "#menu{width:" + mstyle.width + "px !important;}";
        upstyle += ".left{left:-" + mstyle.width + "px !important;}";
    }
    if (mstyle.hasOwnProperty("backcolor")) {
        upstyle += "#menu{background-color:" + mstyle.backcolor + " !important;}";
        upstyle += "#menu>ul>li>a { border-left: 4px solid " + mstyle.backcolor + " !important; }";
    }
    upstyle += "#menu>ul>li{ margin-bottom: 0px;width:100% !important;}";
    if (mstyle.hasOwnProperty("fontsize")) upstyle += "#menu ul a i{font-size:" + mstyle.fontsize + " !important;}";
    if ($("#menu-css-update").length > 0) $("#menu-css-update").remove();
    styleInsert("menu-css-update", upstyle);
    if (mstyle.hasOwnProperty("menuopen")) {
        if (mstyle.menuopen) {
            $("#menu").attr("class", "show");
            $("#menu").css("position", "");
            refreshLayout();
        }
        else {
            $("#dvMenu1").removeAttr("style");
            $("#tableinsert").removeAttr("style");
        }
    }
    if (mstyle.hasOwnProperty("keepopen")) {
        if (mstyle.keepopen) {
            pinstatus = true;
            $(".thumbTab").attr("class", "thumbTab on");
            var src = $(".thumbTab").attr("src").replace("pinup", "pindown");
            $(".thumbTab").attr("src", src);
            if (!mstyle.menuopen) $("#menu").toggleClass("show");
            refreshLayout();
        }
    }

    //
    //    //#region menu onclick event collection
    //    $("#showmenu").click(function (e) {
    //        e.preventDefault();
    //        if ($("#menu").attr("class") == "show") {
    //            $("#menu").attr("class", "left");
    //            if (typeof (mstyle) != "undefined" && mstyle != "") {
    //                if (mstyle.hasOwnProperty("menuopen"))
    //                    if (mstyle.menuopen) {
    //                        $('body').attr("style", "position:relative;left:0px");
    //                    }
    //                }
    //                refreshLayout();
    //        }
    //        else {
    //            $("#menu").attr("class", "show");
    //            if (typeof (mstyle) != "undefined" && mstyle != "") {
    //                if (mstyle.hasOwnProperty("menuopen"))
    //                    if (mstyle.menuopen) {
    //                        $('body').attr("style", "position:relative;left:" + mstyle.width + "px");
    //                    }
    //                }
    //                deployTable();
    //            }
    //
    //    });
    $(".thumbTab").on('click', function () {
        if ($(this).attr("class") == "thumbTab") {
            this.src = this.src.replace("pinup", "pindown");
            pinstatus = true;

        } else {
            this.src = this.src.replace("pindown", "pinup");
            pinstatus = false;
            //$("#menu").removeClass("show").addClass("left");
        }
        // $(this).toggleClass("on");

        // refreshLayout();
        // initDisplay();
    });
    $("#menu a").click(function (event) {
        //showmenu button은 정상토글
        if ($(this).attr("id") == "showmenu") return false;
        //active class모두제거
        $("#menu").find("a").removeClass("active");
        //sub node click시 slideup방지
        var parent = $(event.target).parent().parent(); // li>ul>li>a(me)
        if (parent.prop("nodeName") == "UL") {
            if (parent.parent().prop("nodeName") == "LI") {
                $(event.target).addClass("active");
                subid = $(this).attr("id");
                initDisplay('', '');
                return false;
            }
        }
        //sub node collapse all
        $("#menu").find("a").each(function (i, k) {
            if ($(k).text() != $(event.target).text()) {
                if ($(k).next('ul').length) {
                    $(k).next().slideUp('slow');
                    $(k).children('i:last-child').attr('class', 'fa fa-caret-down');
                }
            }
        });
        //if click node has sub node--> expand
        if ($(this).next('ul').length) {
            $(this).next().slideToggle('slow');
            $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
        }
        else {
            if (typeof (mstyle) != "undefined" && mstyle != "") {

                if (mstyle.hasOwnProperty("menuopen"))
                    if (mstyle.menuopen && !pinstatus) {
                        $('body').css({ "position": "relative", "left": "0px" });
                    }
            }
        }
        subid = $(this).attr("id");
        initDisplay('', '');
        $(this).addClass("active");
        $("#menu").css("height", $(document).height() + "px");
    });
    $(document).mouseup(function (e) {
        if ($(e.target).next('ul').length) {
            return false;
        }
        if ($(e.target).attr("class") == "fa fa-align-justify") {
            return false;
        }
        if ($(e.target).attr("class") == "thumbTab") {
            return false;
        }

        var th = $(".thumbTab").attr("src");
        if (typeof th != "undefined")
            if (th.substr(th.lastIndexOf("/") + 1) == "pindown.png") {
                return false;
            }
        $("#menu").removeClass("show").addClass("left");
        if (typeof (mstyle) != "undefined" && mstyle != "") {
            if (mstyle.hasOwnProperty("menuopen"))
                if (mstyle.menuopen) {
                    $('body').css({ "position": "relative", "left": "0px" });
                }
        }
    });

    $("#menu").css("height", $(document).height() + "px");
    //#endregion
}
function menuselected() {
    if (menuid == "") menuid = menutoggle + "1";
    var dt = menuMy("submenu");//selectimc("imctable", menutoggle+"submenu");
    dt = $.grep(dt, function (a) {
        return a.menuid == menuid;
    });
    var dt1 = menuMy("menu");// selectimc("imctable", menutoggle + "menu");
    dt1 = $.grep(dt1, function (a) {
        return a.menuid == menuid;
    });
    if (dt.length > 0) subid = dt[0].subid;
    //if( dt1[0].default !="") subid = dt1[0].default;
    $(dt).each(function (i, k) {
        if (k.menuid = menuid && k.subid == subid && k.hasOwnProperty("href")) {
            funLoading(true);
        }
    });
    $("#menu").find("li>a[id^='" + subid + "']").addClass("active")

}
function menuIframeexist() {
    var dt = selectimc("imctable", "control");
    dt = $.grep(dt, function (a) {
        return a.menuid == menuid && a.subid == subid;
    });
    $(dt).each(function (i, k) {

    })
}

//#region frequently used function
(function ($) {
    //visibility: invisible(), visible()
    $.fn.invisible = function () {
        return this.each(function () {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function () {
        return this.each(function () {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));
jQuery.fn.outerHTML = function (s) {
    return s
                ? this.before(s).remove()
                : jQuery("<p>").append(this.eq(0).clone()).html();
};
function funLoading(run) {
    $("#dvloading").remove();
    //if (isMobile()) {
    $("<img id='dvloading' style='width:50px;z-index:100000' src='/images/loading1.gif'/>").center().appendTo($("form")[0]);
    // }
    //else
    //{
    //    var w = browserWidth() / 2 - 250 + "px", h = browserHeight() / 2 - 200 + "px";
    //    $("<div id='dvloading' class='roundbox' style='z-index:10000;display:none; width: 500px;padding: 10px 5px 10px 5px; background: white;border:solid 5px gray; text-align: center;position:absolute;left:" + w + ";top:" + h + "'><h3>Page is loading...</h3></div>").appendTo($("form")[0]);

    //    var imglist = ["dance_loading.jpg", "tumblr.gif", "hammertime2.gif", "cat_loading.gif", "buffer_loading.gif", "line_loading.gif", "moping_loading.gif", "fish_loading.gif", "snake_loading.gif", "walk_loading.gif"];

    //    var i = Math.floor(Math.random() * imglist.length);
    //    var sizelist = ['40', '100', '50', '35', '50', '70', '70', '50', '50', '60'], size = sizelist[i] + "%";
    //    var bgcolor = [, , , '#9BDFFF', , , , , , ];
    //    $("#imgLoading").remove();
    //    $("#dvClose").remove();
    //    if ($("#imgLoading").length == 0) {
    //        var cl = "white";
    //        // if (bgcolor[i] != "undefined") $("#dvloading").css("background-color", bgcolor[i]);
    //        $("<img id='imgLoading' style='width:" + size + "' src='/images/" + imglist[i] + "'/>").prependTo($("#dvloading"));
    //        $("<div id='dvClose' style='float:right;' onclick= \"$('#dvloading').hide();\"><i class='imdim fa fa-times-circle-o fa-3x'/></div>").prependTo($("#dvloading"));
    //    }
    //    if (run)
    //        $("#dvloading").show();
    //}
}
function funStop() {
    $("#dvloading").remove();

}
function userfilter(sign) {
    var rtn = sign;
   
    if ($.inArray(sign, fixedStr) > -1) {
        var log = getlogin();
        var key = sign.substring(1)
        rtn = log[key];
    }
    else if ($.inArray(sign, fixedPeriod) > -1) {
        var dd = sign.substring(1).replace("this", "").toLowerCase();
        var d = new Date();
        switch (dd) {
            case "year":
                rtn = d.getFullYear();
                break;
            case "month":
                rtn = d.getMonth();
                break;
            case "week":
                var wk = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
                rtn = wk[d.getDay() - 1];
                break;
            case "weeknumber":
                rtn = d.getDay();
                break;
            case "today":
                rtn = d.getDate();
                break;
            case "yesterday":
                rtn = d.addDays(-1);
                break;
            case "tomorrow":
                rtn = d.addDays(1);
                break;
        }


    }
    return rtn;
}
function scriptfilter(script, id) {
    //var fixedStr = ["$comp", "$name", "$id", "$boss", "$division", "$position"];
    //var fixedPeriod = ["$thisYear", "$thisQuarter", "$thisMonth", "$thisWeek", "$thisWeednumber", "$Today", "$Yesterday", "$Tomorrow"];
    $($.merge(fixedStr, fixedPeriod)).each(function (i, k) {
        script = script.replace(k, userfilter(k));
    });
    script = script.replace("$curid", id);
    var tt = script.split('$');
    for (var q = 0; q < tt.length; q++)
        script = script.replace("$(this)", "$('#" + id + "')");
    return script;
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) break;
    }
}
function jsonOrderchange(json, orderlist) {
    //orderlist=["a","b","c"]
    json = JSON.parse(JSON.stringify(json, orderlist));
    return;
}
function tabbedDialog(dia, tab) {

    dia.parent().find('.ui-dialog-titlebar-close').prependTo('#' + tab.attr("id"));
    dia.closest('.ui-dialog').children('.ui-dialog-titlebar').remove();
    //var tabid = $("#tabs-mycal");
    tab.find('.ui-dialog-titlebar-close').css({ top: '20px', margin: '-10px 5px 0 0' });
    dia.css({ padding: 0 });

}
function getUrlVars() {
    /*
    ex:http://www.example.com/?me=myValue&name2=SomeOtherValue
    return:{
            "me"    : "myValue",
            "name2" : "SomeOtherValue"
        }
        getUrlVars()[0]="me";
        getUrlVars()["me"]="myValue;
    */
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function getURLParam(strParamName) {
    //parameter fetch
    // http://localhost/test.php?type=view&page=2 일경우
    //getURLParam("type")
    var strReturn = "";
    var strHref = window.location.href;
    var bFound = false;

    var cmpstring = strParamName + "=";
    var cmplen = cmpstring.length;

    if (strHref.indexOf("?") > -1) {
        var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
        var aQueryString = strQueryString.split("&");
        for (var iParam = 0; iParam < aQueryString.length; iParam++) {
            if (aQueryString[iParam].substr(0, cmplen) == cmpstring) {
                var aParam = aQueryString[iParam].split("=");
                strReturn = aParam[1];
                bFound = true;
                break;
            }

        }
    }
    if (bFound == false) return null;
    return strReturn;
}
function browserWidth() {
    //browser width
    if (self.innerHeight) {
        return self.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;
    }

    if (document.body) {
        return document.body.clientWidth;
    }
}
function browserHeight() {
    if (self.innerHeight) {
        return self.innerHeight;
    }

    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    }

    if (document.body) {
        return document.body.clientHeight;
    }
}
function missingArray(old_array, new_array) {
    //var old_array = [1, 2, 3], new_array = [1, 3, 4] return:[2]
    return $(old_array).not(new_array).get();
}
function countObject(object) {
    var element_count = 0;
    for (e in object) { if (object.hasOwnProperty(e)) element_count++; }
    return element_count;
}
function convertId1(addid) {
    //combine pathname + addid
    if (typeof (addid) === "undefined") addid = ""; else addid = "_" + addid
    var pathname = window.location.pathname;
    pathname = pathname.substring(pathname.lastIndexOf("/") + 1)
    return pathname + addid;
}
function convertId(gridid) {
    //combine pathname + grid id
    //if (typeof (ridid) === "undefined") gridid = ""; else gridid="_"+gridid
    var pathname = window.location.pathname;
    pathname = pathname.substring(pathname.lastIndexOf("/") + 1)
    return pathname + "_" + gridid;
}
function isNumber(o) {
    return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
}
function isDate(val) {
    var d = new Date(val);
    return !isNaN(d.valueOf());
}
function isBool(val) {
    return typeof (val);
}
function isMobile() {
    var filter = "win16|win32|win64|mac|macintel";
    var rtn;
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            //mobile
            rtn = true;
        } else {
            //pc
            rtn = false;
        }
    }
    return rtn;
}
function imApp() {
    //is app?
    var rtn = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        rtn = true;
    }
    return rtn;
}

function isOdd(num) { return num % 2; }
function isColumntype(collist, type) {
    var chk = true;
    $.each(collist, function (i, k) {
        switch (type) {
            case "number":
                if (!isNumber(k))
                    chk = false;
                break;
            case "datetime":
                if (!isDate(k) | isNumber(k))
                    chk = false;
                break;
            case "bool":
                if (isBool(k) != "boolean")
                    chk = false;
                break;
        }
        if (!chk) return false;
    });
    return chk;
}
function arraychkexist(arraylist, element) {
    //element exist in a array
    var rtn = false;
    $.each(arraylist, function (i, k) {
        if (k == element)
            rtn = true;
    });
    return rtn;
}
function arraycheckexist(arr, val) {
    var chk = false;

    $.each(arr, function (i, k) {
        if (k != "undefined" && k.length > 0 && k != "" && k.indexOf(val) > -1)
            chk = true;
    });
    return chk;
}
function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1) {
        return rgb;
    } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}
function scriptExists(srcarr, autoinsert) {
    var rtn = false;

    $.each(srcarr, function (i, src) {

        //src= fullurl;exist check할 partial url(ex:"/js2/jqGrid/css/ui.jqgrid.css" vs "css/ui.jqgrid.css")
        var spsrc = src.split(';');
        if (spsrc[1] != "")
            var value = spsrc[1];
        else
            value = src.substring(src.lastIndexOf('/') + 1);

        $('srcipt').each(function () {
            if ($(this).attr("src").indexOf(value) > -1) {
                rtn = true;
                if (typeof (autoinsert) != "undefined" && autoinsert == true)
                    jsInsert(spsrc[0]);
            }
        });
        $('link').each(function () {
            if ($(this).attr("href").indexOf(value) > -1) {
                rtn = true;
                if (typeof (autoinsert) != "undefined" && autoinsert == true)
                    cssInsert(spsrc[0]);
            }
        });
    });
    return rtn;
}
function cssInsert(id, csshref) {
    //   css dynamic insert
    //    cssInsert("/App_Themes/table-samples/css/example.css");
    if ($("#" + id).length == 0) {
        var ss = document.createElement("link");
        ss.type = "text/css";
        ss.id = id;
        ss.rel = "stylesheet";
        ss.href = csshref;
        if (ss != null)

            document.getElementsByTagName("head")[0].appendChild(ss);
        return true;
    }
    else
        return false;
}
function styleInsert(id, style) {
    // style dynamic insert
    // style="div {border: 2px solid black; background-color: blue;}"
    // styleInsert(style);
    if (document.getElementById(id) == 'undefined' || document.getElementById(id) == null) {
        var sheet = document.createElement('style')
        sheet.innerHTML = style;
        sheet.id = id;
        document.body.appendChild(sheet);
        return true;
    }
    return false;
}
function jsfunctionInsert(id, script) {
    // js script dynamic insert
    // script="function xy(){};"
    // jsfunctionInsert(script);
    if (document.getElementById(id) == 'undefined' || document.getElementById(id) == null) {
        var sheet = document.createElement('script')
        sheet.innerHTML = script;
        sheet.id = id;
        document.body.appendChild(sheet);
        return true;
    }
    return false;
}
function jsInsert(jssrc) {
    //   js dynamic insert
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.setAttribute("src", jssrc)
    document.getElementsByTagName("head")[0].appendChild(js);
}
function jscriptInsert(id, jscript, callback) {
    if (document.getElementById(id) == 'undefined' || document.getElementById(id) == null) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = jscript;
        script.id = id;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        if (typeof callback === "object") {
            callback(); console.log('callback running')
        }

        return true;
    }
    else
        return false;
}
function documentreadyInsert(id, jscript) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = id;
    script.text = '$(document).ready(function(){' + jscript + '});';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}
function numberOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46)) {
        //alert("숫자만 입력가능합니다.");
        swal({ title: "Only Number allowed!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
        return false;
    }
    return true;
}
function idMake(option) {
    var d = new Date();
    var yr = d.getFullYear().toString().substr(2, 2)
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var msec = d.getMilliseconds();
    var id = yr +
            (('' + month).length < 2 ? '0' : '') + month +
            (('' + day).length < 2 ? '0' : '') + day +
            hr + min + sec;
    if (typeof option != "undefined") {
        //leaver the num from right side
        id += msec;
        var num = id.length - parseInt(option);
        id = id.substring(num);
    }
    return id;
}
function makeDateTime1(d, seperator, format) {
    var sep = "/";
    if (typeof seperator != "undefined") sep = seperator;

    var yr = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var y = yr + sep,
            mm = (('' + month).length < 2 ? '0' : '') + month + sep,
            dd = (('' + day).length < 2 ? '0' : '') + day + " ",
            h = (('' + hr).length < 2 ? '0' : '') + hr + ":",
            m = (('' + min).length < 2 ? '0' : '') + min + ":",
        s = (('' + sec).length < 2 ? '0' : '') + sec;
    var dt = y + mm + dd + h + m;
    switch (format) {
        case "yyyy-MM-dd hh:mm:ss":
            dt = dt + s;
            break;
        case "yy-MM-dd hh:mm:ss":
            dt = dt.substring(2) + s;
            break;
        case "yy-MM-dd hh:mm":
            dt = dt.substring(2);
            break;
        case "yyyy-MM-dd":
            dt = y + mm + dd;
            break;
        case "yy-MM-dd":
            dt = y.substring(2) + mm + dd;
            break;
    }
    return dt;
}
function friendlydate(d) {
    var rtn = "n/a";
    rtn = makeDateTime1(new Date(d), "-", "yy-MM-dd hh:mm")
    var diff = new Date() - new Date(d);
    var sec = Math.floor(diff / 1000), min = Math.floor(sec / 60), hr = Math.floor(sec / 3600), day = Math.floor(hr / 24);
    if (min < 1)
        rtn += "(" + sec + " secs ago)";
    else if (min < 60)
        rtn += "(" + min + " mins ago)";
    else if (hr >= 1 && day < 1) {
        var mm = Math.floor((sec - hr * 3600) / 60);
        rtn += "(" + hr + "hr" + mm + "min ago)";
    }
    else if (day >= 1) {
        var hhr = Math.floor(hr - day * 24);
        rtn += "(" + day + "day " + hhr + " hr ago)";
    }

    return rtn;
}
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
    return this
}
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
Date.prototype.addMinutes = function (m) {
    this.setMinutes(this.getMinutes() + m);
    return this;
}
Date.prototype.formatDate = function (format) {
    /*
    d = new Date(); console.log(d.formatDate("dd/MM/yyyy hh:mm:ss t"));
    Return -> "30/10/2012 11:49:49 pm"
    d = new Date(); console.log(d.formatDate("dd/MM/yyyy HH:mm:ss"));
    Return -> "30/10/2012 23:50:53"
    */
    var date = this,
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if (!format) {
        format = "yyyy/MM/dd HH:mm";
    }

    format = format.replace("MM", month.toString().replace(/^(\d)$/, '0$1'));

    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2, 2));
    }

    format = format.replace("dd", day.toString().replace(/^(\d)$/, '0$1'));

    if (format.indexOf("t") > -1) {
        if (hours > 11) {
            format = format.replace("t", "pm");
        } else {
            format = format.replace("t", "am");
        }
    }

    if (format.indexOf("HH") > -1) {
        format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("hh") > -1) {
        if (hours > 12) {
            hours -= 12;
        }

        if (hours === 0) {
            hours = 12;
        }
        format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("mm") > -1) {
        format = format.replace("mm", minutes.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("ss") > -1) {
        format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
    }

    return format;
};
String.prototype.capitalize = function () {
    //first letter capitalize
    //"hello world".capitalize();  =>  "Hello world" 
    return this.charAt(0).toUpperCase() + this.slice(1);
}
Array.prototype.transpose || (Array.prototype.transpose = function () {
    //transpose row to column
    //var a = [ [1, 2, 3], [4, 5, 6]];
    //var at = a.transpose();
    if (!this.length) {
        return [];
    }

    if (this[0] instanceof Array) {
        var tlen = this.length,
            dlen = this[0].length,
            newA = new Array(dlen);
    } else {
        throw new Error("二次元配列をクレ！（・∀・）");
    }

    for (var i = tlen; i--;) {
        if (this[i].length !== dlen) throw new Error("Index Error! 不揃いな林檎たち（・∀・）");
    }

    for (var i = 0; i < dlen; ++i) {
        newA[i] = [];
        for (var j = 0, l = tlen; j < l; j++) {
            newA[i][j] = this[j][i];
        }
    }

    return newA;
});
jQuery.fn.center = function () {
    //align element center of page
    //ex:$(element).center();
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}
var checkJSON = function (m) {
    //check string is object type or just string
    //ex:checkJSON('hi')=false;checkJSON("{'obj':'goog'}")=true
    if (typeof m == 'object') {
        try { m = JSON.stringify(m); }
        catch (err) { return false; }
    }

    if (typeof m == 'string') {
        try { m = JSON.parse(m); }
        catch (err) { return false; }
    }

    if (typeof m != 'object') { return false; }
    return true;

};
function populate1(id, content, code, name, selcode) {
    var selected = "";
    $(id).empty();
    var newOptions = '<option value="">-- Select --</option>';
    for (i in content) {
        if (selcode == content[i][code]) selected = "selected";
        newOptions += '<option ' + selected + ' value="' + content[i][code] + '">' + content[i][name] + '</option>';
        selected = "";
    }
    $(id).append(newOptions);
    if (typeof $(id).selectmenu() !== "undefined") {
        $(id).selectmenu("refresh", true);
    }
    //$(id).selectmenu('refresh');
    //$(id).attr("selectedIndex", -1)
}
function populate(jsondata, id, topmsg, selectedvalue) {
    var selected = "";
    var select = $('#' + id);
    select.empty();
    if (topmsg != "") {
        var newOptions = '<option value="">' + topmsg + '</option>';
        select.append(newOptions);
    }
    //select.find('option').remove();
    $.each(jsondata, function (key, data) {
        selected = "";
        if (data.code == selectedvalue) selected = "selected";
        select.append('<option ' + selected + ' value=' + data.code + '>' + data.name + '</option>');
    })
}
function stripTextonly(element) {
    //from node element return text only part
    var rtn = element.clone()    //clone the element
                    .children() //select all the children
                    .remove()   //remove all the children
                    .end()  //again go back to selected element
                    .text();
    return rtn;
}
function removeblankarr(arr) {
    //var arr = ["Lorem", "", "ipsum"]-->["Lorem", "ipsum"]
    arr = $.grep(arr, function (n) {
        return (n);
    });
    return arr;
}
function cleanupstorage(json) {
    var list = Object.keys(json);
    $(list).each(function (i, k) {
        json[k] = removeblankarr(json[k]);
    });
    return json;
}
function cleanupimctable(json) {
    var list = Object.keys(json);
    $(list).each(function (i, k) {
        json[k] = removeblankarr(json[k]);
        $(json[k]).each(function (a, b) {
            if (!b.menuid)
                json[k].splice(a, 1)

            switch (k) {
                case "control": case "admincontrol":
                    if (typeof b.menuid == "undefined" | typeof b.subid == "undefined" | typeof b.dvid == "undefined")
                        json[k].splice(a, 1);
                    break;
            }

        });
    });
    return json;
}
function auto_grow(element) {
    //AUTO SCROLL EXPAND TEXTAREA
    //<textarea onkeyup="auto_grow(this)"></textarea>
    //element.style.height = "15px";
    //element.style.height = (element.scrollHeight) + "px";
    var ht = element.prop("scrollHeight");
    //if (ht < 10) ht = 15;
    element.css({ "height": ht + "px" });
}
function makedialogoption() {
    //make default dialog option
    return {
        autoOpen: true,
        appendTo: "body",
        modal: true,
        height: 400,
        width: 800,
        title: "title area",
        close: function (event, ui) {
            $(this).dialog('destroy').remove();
        },
        buttons: [
            {
                text: "Close",
                click: function () {
                    $(this).dialog('destroy').remove();
                }
            },
            {
                text: "Save",
                click: function () {
                    $(this).dialog('destroy').remove();
                }
            }
        ]
    }
}
function toggleSelect(sel, curval, options) {
    //toggle b/w "select" and "input"
    //curval: current value
    //option:iconclass,customvalue
    //example:$(tb.find("tbody>tr>td:nth-child(2)>select")).each(function (i, k) { toggleSelect($(this))});
    var customvalue = "custom", iconclass = "fa fa-remove";
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("customvalue")) customvalue = options.customvalue;
        if (options.hasOwnProperty("iconclass")) iconclass = options.iconclass;
    }
    var id = sel.attr("id");
    var vallist = []
    $(sel.find("option")).each(function (i, k) {
        if ($(k).val() != "")
            vallist.push($(k).val());
    })
    if (typeof curval != "undefined" && curval != "null" && curval != null && curval != "" && $.inArray(curval, vallist) == -1) {
        var td = sel.parent();
        var inp = $("<input id='inp"+id+"' style='width:50%;margin-right:5px' value='" + curval + "'/>");
        td.prepend(inp);
        var icon = $("<i class='" + iconclass + " imdim'/>");
        icon.insertAfter(inp);
        icon.on("click", function () {
            var clon = sel.clone();
            td.prepend(clon);
            $(this).prev().remove();
            $(this).remove()
            toggleSelect(clon);

        });

        sel.remove();
    }
    else {
        sel.change(function () {
            if ($(this).val() == customvalue) {
                $("<input id='inp" + id + "' style='width:50%;margin-right:5px'/>").insertBefore($(this));
                var icon = $("<i class='" + iconclass + " imdim'/>");
                icon.insertAfter($(this));
                $(this).remove();
                icon.on("click", function () {
                    var clon = sel.clone();
                    clon.insertAfter($(this));
                    toggleSelect(clon);
                    $(this).prev().remove();
                    $(this).remove()
                });
            }
        });
        if (typeof curval != "undefined" && curval != "" && curval != "null" && curval != null)
            sel.val(curval)
    }
}
jQuery.fn.rowspan = function (colIdx) {
    return this.each(function () {

        var that;
        $('tr', this).each(function (row) {
            $('th:eq(' + colIdx + ')', this).filter(':visible').each(function (col) {
                if ($(this).html() == $(that).html()) {
                    rowspan = $(that).attr("rowSpan");
                    if (rowspan == undefined) {

                        $(that).attr("rowSpan", 1);
                        rowspan = $(that).attr("rowSpan");
                    }
                    rowspan = Number(rowspan) + 1;
                    $(that).attr("rowSpan", rowspan); // do your action for the colspan cell here
                    $(this).hide(); // .remove(); // do your action for the old cell here
                } else {
                    that = this;
                }
                that = (that == null) ? this : that; // set the that if not already set
            });
        });

    });
}
jQuery.fn.colspan = function (rowIdx) {
    return this.each(function () {

        var that;
        $('tr', this).filter(":eq(" + rowIdx + ")").each(function (row) {
            $(this).find('th').filter(':visible').each(function (col) {
                if ($(this).html() == $(that).html()) {
                    colspan = $(that).attr("colSpan");
                    if (colspan == undefined) {
                        $(that).attr("colSpan", 1);
                        colspan = $(that).attr("colSpan");
                    }
                    colspan = Number(colspan) + 1;
                    $(that).attr("colSpan", colspan);
                    $(this).hide(); // .remove();
                } else {
                    that = this;
                }
                that = (that == null) ? this : that; // set the that if not already set
            });
        });

    });
}
function mergeCells(cells, separator) {

    var data = [];

    $.each(cells, function (i, item) {
        data.push(item[0].innerHTML);
    });

    var result = $('<td/>', {
        'html': data.join(separator)
    });

    return result;
}
function splitCell(cell, separator) {

    var result = "";
    var data = (cell[0].innerHTML).split(separator);
    $.each(data, function (i, item) {
        result = result + "<td>{0}</td>".format(item);
    });

    return result;
}
function wrapouter(obj, type, divid, tabname) {
    /*
    wrap around each object inside tableinsert
    obj:outer div object, type:rectangle,round,tab,divid:div id inside obj,tabname:tabtitle for divid
    */
    switch (type) {
        case "rect":
            obj.tabs();
            obj.removeClass("ui-corner-all");
            break;
        case "round":
            obj.tabs();
            break;
        case "tab":
            $("#ul" + divid).first().remove();
            obj.prepend($("<ul id='ul" + divid + "'><li><a href='#'" + divid + ">" + tabname + "</a></li></ul>"));
            obj.tabs();
            break;
    }
}
function selectupdate(obj, optarr, option) {
    //obj:select object, optarr:option array[[text,value]],option.updatetype:prepend,append,replace
    //if optarr item length==1 then value=text;
    var updatetype = "replace";
    if (typeof option != "undefined") {
        if (option.hasOwnProperty("updatetype")) updatetype = option.updatetype;
    }
    //create optionlist
    if (updatetype=="replace") {
            obj.empty();
            obj.prepend($("<option disabled selected>Select</option>"));
    }
    if(optarr.length>0)
    $(optarr).each(function (a, b) {
        var bb = b.split(',');
        var txt = bb[0], val = bb[0];
        if (bb.length > 1) val = bb[1];
        var option1 = new Option(txt, val);
        switch (updatetype) {
            case "replace": case "append":
                obj.append($(option1));
                break;
            case "prepend":
                obj.prepend($(option1));
                break;
        }
    });
}
//triggerevent:when event happend triggered
//$(sel).bind("triggerevent", function () { //action});

//#region comment parser
// This jQuery plugin will gather the comments within
// the current jQuery collection, returning all the
// comments in a new jQuery collection.
//
// NOTE: Comments are wrapped in DIV tags.
//ex:  var jComments = $( "#template" ).comments();
// <div id="template" style="display: none ;">
//    <!--
//        <li>This is an LI template.</li>
//    -->
//</div>
jQuery.fn.comments = function (blnDeep) {
    var blnDeep = (blnDeep || false);
    var jComments = $([]);

    // Loop over each node to search its children for
    // comment nodes and element nodes (if deep search).
    this.each(
        function (intI, objNode) {
            var objChildNode = objNode.firstChild;
            var strParentID = $(this).attr("id");

            // Keep looping over the top-level children
            // while we have a node to examine.
            while (objChildNode) {

                // Check to see if this node is a comment.
                if (objChildNode.nodeType === 8) {

                    // We found a comment node. Add it to
                    // the nodes collection wrapped in a
                    // DIV (as we may have HTML).
                    jComments = jComments.add(
                        "<div rel='" + strParentID + "'>" +
                        objChildNode.nodeValue +
                        "</div>"
                        );

                }

                else if (
                    blnDeep &&
                    (objChildNode.nodeType === 1)
                    ) {

                    // Traverse this node deeply.
                    jComments = jComments.add(
                        $(objChildNode).comments(true)
                        );

                }
                console.log(objChildNode.nodeType, objChildNode.nodeName, objChildNode.nodeValue)
                // Move to the next sibling.
                objChildNode = objChildNode.nextSibling;

            }

        }
        );

    // Return the jQuery comments collection.
    return (jComments);
}
//#endregion
//#endregion

//#region localStorage IN/OUT
function imcsetting(storename, dataname, data) {
    //storename:imcsetting,dataname:calendar,data:json data

    var json = "";
    if (storename == "") storename = "imcsetting";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);

        data = JSON.parse(data);
        var rtn = updateimcJson(json, dataname, data);
        localStorage.setItem(storename, JSON.stringify(rtn));
        updateimcsettingtime(storename, dataname);
    }
    else
        localStorage.setItem(storename, "{\"" + dataname + "\":" + data + "}");

    // localStorageUpAjax(log.comp, log.id, storename, localStorage.getItem(storename));

}
function imcsettingAjax() {
    var log = getlogin();
    return localStorageFindAjax(log.comp, log.staff, "imcsetting");
}
function imcdatasetting(storename, code, data) {
    var json = "";
    if (storename == "") storename = "imcsetting";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
    }
    data = JSON.parse(data);
    $.each(json, function (key, data) {
        if (data.code == code) {
            rtn = data;
        }
    });
    var rtn = updateimcJson(json, dataname, data);
    localStorage.setItem(storename, JSON.stringify(rtn));
    updateimcsettingtime(storename, dataname);
}
function updateimcdatalist(data, datalist) {
    //update json directory datalist by datatype
    if (data.dtype == "database") {
        if (data.hasOwnProperty("querylist")) {
            $(data.querylist).each(function (i, k) {
                if (k.sqlcommand == "select") {
                    k.datalist = datalist;
                }
            });
        }
    }
    else {
        data.datalist = datalist;
    }
    return data;
}
function deleteimcdatalist(data, keycode, keyvalue) {
    //delete data by keyvalue
    if (data.dtype == "database") {
        if (data.hasOwnProperty("querylist")) {
            $(data.querylist).each(function (i, k) {
                if (k.sqlcommand == "select") {
                    k.datalist = delvalue(k.datalist, keycode, keyvalue);

                }
            });
        }
    }
    else {
        data.datalist = delvalue(datalist.datalist, keycode, keyvalue);
    }
    function delvalue(datalist, keycode, keyvalue) {
        $(datalist).each(function (i, k) {
            if (k[keycode] == keyvalue)
                datalist.splice(i, 1);
        })
        fulldatalist = datalist;
        return datalist;
    }
    fulldata = data;


    return data;
}
function updateimcdata(data) {
    var imcdata = localStorage.getItem("imcdata");
    if (imcdata == null) localStorage.setItem("imcdata", "{}");
    imcdata = JSON.parse(imcdata);
    var chkexist = false;
    $.each(imcdata, function (i, k) {
        if (k.code == data.code) {
            imcdata.splice(i, 1, data);
            chkexist = true;
            return false;
        }
    });
    if (!chkexist) imcdata.push(data);
    localStorage.setItem("imcdata", JSON.stringify(imcdata));
}
function deleteimcdatavalue(datacode, idname, idcode) {
    //imcdata내의 dataset을 찾아 해당id값이 code인 element delete
    // ex: datacode:"dt150603073923",idname:"id",idcode:"c299"
    var imcdata = localStorage.getItem("imcdata");
    if (imcdata != null)
        imcdata = JSON.parse(imcdata);
    $.each(imcdata, function (i, k) {
        if (k.code == datacode) {
            $(k.datalist).each(function (j, l) {
                if (l[idname] == idcode)
                    k.datalist.splice(j, 1);
            });
        }
    });
    localStorage.setItem("imcdata", JSON.stringify(imcdata));
}
function deleteimcdata(code) {
    var imcdata = localStorage.getItem("imcdata");
    if (imcdata != null)
        imcdata = JSON.parse(imcdata);
    $.each(imcdata, function (i, k) {
        if (k.code == code) {
            imcdata.splice(i, 1);
            return false;
        }
    });
    localStorage.setItem("imcdata", JSON.stringify(imcdata));
}
function selectimc1(storename, dataname, keycode, keyvalue) {
    var json = "", json1 = "";
    var rtn = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        if (json != "") {
            json1 = JSON.parse(json);
            $.each(json1, function (key, data) {

                if (dataname == "" | dataname == "*") {

                    if (typeof keycode != "undefined") {
                        $(data).each(function (i, k) {
                            if (k[keycode] == keyvalue)
                                rtn = k;
                        });
                    }
                    else
                        rtn = data;
                }
                else if (key == dataname) {
                    if (typeof keycode != "undefined") {
                        var dt1 = $.grep(data, function (a) {
                            return a[keycode] == keyvalue;
                        });
                        rtn = dt1[0];
                    }
                    else
                        rtn = data;
                    var newlist = []; $(rtn).each(function (i, k) {
                        if (k.hasOwnProperty(keycode))
                            newlist.push(k)
                    });
                    rtn = newlist;
                }
            });

        }
    }

    return rtn;
}
function selectimc(storename, dataname, keycode, keyvalue) {
    var json = "", json1 = "";
    var rtn = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        if (json != "") {
            json1 = JSON.parse(json);
            if (dataname == "" | dataname == "*") {
                var olist = Object.keys(json1);
                $(olist).each(function (i, k) {
                    var dt1 = [];
                    $(json1[k]).each(function (a, b) {
                        if (b != "" && b[keycode] == keyvalue)
                            dt1.push(b);
                    });
                    //var dt1 = $.grep(json1[k], function (a) {
                    //    return  a[keycode] == keyvalue;
                    //});
                    if (dt1.length > 0)
                        rtn = dt1[0];
                });
            }
            else {
                if (typeof keycode != "undefined") {
                    var dt1 = [];
                    $(json1[dataname]).each(function (a, b) {
                        if (b != "" && b[keycode] == keyvalue)
                            dt1.push(b);
                    });

                    //var dt1 = $.grep(json1[dataname], function (a) {
                    //    return a[keycode] == keyvalue;
                    //});
                    if (dt1.length > 0)
                        rtn = dt1[0];
                }
                else {
                    //$(json1[dataname]).each(function (i, k) {
                    //    if (k == "")
                    //        json1[dataname].splice(i, 1);
                    //})
                    rtn = json1[dataname];
                }
            }
        }
    }

    return rtn;
}
function selectimcdata(storename, code) {
    var json = "";
    var rtn = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
        $.each(json, function (key, data) {
            if (data.code == code) {
                rtn = data;
            }
        })
    }
    return nullremove(rtn);
}
function nullremove(dt) {
    $(dt).each(function (i, k) {
        if (k === null) dt.splice(i, 1);
    });
    return dt;
}
function nullarchiveremove(dt) {
    //filter imclist data without code 
    $(dt).each(function (i, k) {
        if (!k.hasOwnProperty("code")) dt.splice(i, 1);
    });
    return dt;
}
function selectimctable(menuid, subid, dvid) {
    var rtn;
    //if ( selectimc("imclist", "", "code", dvid) != "")
    //    rtn = selectimc("imclist", "", "code", dvid);
    if (dvid != "" && typeof dvid != "undefined") {
        var list = menuMy("control");//selectimc("imctable", menutoggle+"control")
        if (typeof list != "undefined")
            $.each(list, function (i, k) {
                if (k != null && k.dvid == dvid) {
                    rtn = k;
                }
            });
    }
    else if (subid != "" && typeof subid != "undefined") {
        var list = menuMy("submenu");//selectimc("imctable", menutoggle+"submenu")
        $.each(list, function (i, k) {
            if (k != null && k != "" && k.subid == subid) {
                rtn = k;
            }
        });
    }
    else if (menuid != "" && typeof menuid != "undefined") {
        var list = menuMy("menu");//selectimc("imctable", menutoggle+"menu")
        $.each(list, function (i, k) {

            if (k != null && k != "" && k.menuid == menuid) {
                rtn = k;
            }
        });
    }
    return rtn;
}
function localStorageinit(options, callback, optarr) {
    //option:reset:reload all localStorage from server, include:anything in array load
    //options:{reset:true,include:['imctable','imcsetting','imctemplate']}
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("reset") && options.reset) {
            $(["imctable", "imcsetting"]).each(function (i, k) {
                localStorage.removeItem(k);
                jsonReadallAjax(k, callback, optarr);
            });
        }
        if (options.hasOwnProperty("include")) {
            $(options.include).each(function (i, k) {
                jsonReadallAjax(k, callback, optarr);
            });
        }
    }
    else {
        var imctb = localStorage.getItem("imctable");
        var imcset = localStorage.getItem("imcsetting");
        var list = [[imctb, "imctable"], [imcset, "imcsetting"]];//,[imcdt,"imcdata"]];
        $(list).each(function (i, k) {
            if (k[0] == "null" | k[0] == "")
                jsonReadallAjax(k[1], callback, optarr);
        });
    }
}
function jsonSaveAjax(type, data,option) {
    //upload and save json file to server as post method
    if (data == "" | typeof data == "undefined") return false;
    var jdata = JSON.parse(data);
    jdata.lastupdate = new Date();
    var path = "/data/json/";
    if (typeof option != "undefined")
        path = option.path;
    path += type + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/SaveDataPost",
        type: "post",
        data: JSON.stringify({ "path": path, "str": JSON.stringify(jdata) }),
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            //sweetmsgautoclose("Update jsonfile", "succeed in saving json file of " + type);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsonReadallAjax(type, callback, optionarray) {
    jsonReadallAjax.defaultfunc = defaultfunc;
    var path = "/data/json/";
    path += type + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ReadData",
        data: { path: JSON.stringify(path) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            if (data.d != "") {
                var dt = JSON.parse(data.d);
                if (typeof callback == "undefined") {
                    jsonReadallAjax.defaultfunc(dt, type);
                }
                else {
                    callbackwithdata(callback, data.d, optionarray);
                }
            }
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("prefix"+ webserviceprefix+"Message: " +r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
    function defaultfunc(dt, type) {
        if (type.indexOf("imctable") >= 0) localStorage.setItem("imctable", JSON.stringify(dt)); //jsonfileReplace(type, dt);
        if (type.indexOf("imctemplate") >= 0) localStorage.setItem("imctemplate", JSON.stringify(dt));
        setTimeout(function () { pageInit(); }, 1000);
    }
}
function jsonReadMyAjax(storename, myinfo,dataname,keycode,keyvalue,callback,opt) {
    //myinfo:comp,staff(or comp only ok)
    if (typeof dataname == "undefined") dataname = "";
    if (typeof keycode == "undefined") keycode = "";
    if (typeof keyvalue == "undefined") keyvalue = "";
    var path = "/data/json/";
    path += storename + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ReadDataMy",
        data: {
            path: JSON.stringify(path), myinfo: JSON.stringify(myinfo), dataname: JSON.stringify(dataname)
            , keycode: JSON.stringify(keycode), keyvalue: JSON.stringify(keyvalue)
        },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            if (data.d != "") {
                if(storename=="imctable")
                jsoncombine(storename,myinfo, JSON.parse(data.d));
                if (typeof callback == "function")
                    callbackwithdata(callback, data.d, opt);
            }
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("prefix" + webserviceprefix + "Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsoncombine(storename, myinfo, json) {
    if (json.length > 1) {
        var imc = json[0], my = json[1];
        imc.menu = my.menu;
        imc.submenu = my.submenu;
        $(my.control).each(function (i, k) {
            checkmy(k);
        });
        localStorage.setItem(storename, JSON.stringify(imc));
    }
    else {
        if (myinfo == "" | myinfo == ",")
            $(["menu", "submenu", "control", "adminmenu", "adminsubmenu", "admincontrol"]).each(function (i, k) {
                delete json[k]
            });
        localStorage.setItem(storename, JSON.stringify(json));

    }
    function checkmy(obj) {
        //replace with my controls that do not exist in imc table, or user created controls
        var rtn = false;
        $(imc.control).each(function (i, k) {
            if (obj.dvid == k.dvid) {
                imc.control.splice(i,1,obj);
                rtn=true;
            }
        });
        if(!rtn)
            imc.control.push(obj);
    }
}
function jsonDelMyAjax(storename, myinfo, dataname,keycode,keyvalue,callback,opt) {
    //storename:imctable,imcsetting etc.
    //myinfo:comp,staff(or comp only ok)
    if (typeof dataname == "undefined") dataname = "";
    if (typeof keycode == "undefined") keycode = "";
    if (typeof keyvalue == "undefined") keyvalue = "";
    var path = "/data/json";
    var comp = "", staff = ""
    if (myinfo != "") {
        var myinfos = myinfo.split(',');
        comp = myinfos[0];
        path += "/"+comp ;
        if (myinfos.Length > 1) {
            staff = myinfos[1];
            path += "/"+staff;
        }
    }
    if(storename!="")
    path += "/"+storename + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/DelDataMy",
        data: {
            path: JSON.stringify(path), myinfo: JSON.stringify(myinfo), dataname: JSON.stringify(dataname)
         , keycode: JSON.stringify(keycode), keyvalue: JSON.stringify(keyvalue)
        },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            callbackexewithparam(callback, opt);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("prefix" + webserviceprefix + "Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsonUpdateMyimcdataAjax(myinfo, udata,datacode, keycode, keyvalue) {
    var path = "/data/json/imcdata.json";
    if (typeof keycode == "undefined") keycode = "";
    if (typeof keyvalue == "undefined") keyvalue = "";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/UpdateDataMy",
        type: "post",
        data: JSON.stringify({ "path": path, "myinfo": myinfo, "udata": JSON.stringify(udata), "datacode": datacode, "keycode": keycode, "keyvalue": keyvalue }),
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            //sweetmsgautoclose("Update jsonfile", "succeed in saving json file of " + storename);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsonUpdateMyAjax(storename, myinfo,udata,dataname,keycode,keyvalue) {
    //myinfo:comp,staff(or comp only ok)
  //  var jdata = JSON.parse(udata);
  //  jdata.lastupdate = new Date();

    var path = "/data/json/";
    if (typeof dataname == "undefined") dataname = "";
    if (typeof keycode == "undefined") keycode = "";
    if (typeof keyvalue == "undefined") keyvalue = "";
   
    path += storename + ".json";
    //console.log("path", path, "myinfo",myinfo,"udata", JSON.stringify(udata), "dataname", dataname, "keycode", keycode, "keyvalue", keyvalue )
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/UpdateDataMy",
        type: "post",
        data: JSON.stringify({ "path": path, "myinfo":myinfo,"udata": JSON.stringify(udata), "dataname": dataname, "keycode": keycode, "keyvalue": keyvalue }),

        //data: {
        //    path: JSON.stringify(path), myinfo: JSON.stringify(myinfo), udata:JSON.stringify(udata),dataname: JSON.stringify(dataname)
        //    , keycode: JSON.stringify(keycode), keyvalue: JSON.stringify(keyvalue)
        //},
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            //sweetmsgautoclose("Update jsonfile", "succeed in saving json file of " + storename);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });

}
var ajaxrtn;
function jsonReadAjax(storename, dataname, keycode, keyvalue, callback, optionarray) {
    //optionarray:additional parameters for callback in order

    var path = "/data/json/";
    funLoading(true);
    path += storename + ".json";

    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ReadDataSingle",
        data: { "path": JSON.stringify(path), "dataname": JSON.stringify(dataname), "keycode": JSON.stringify(keycode), "keyvalue": JSON.stringify(keyvalue) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            callbackwithdata(callback, data.d, optionarray);
            
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message, storename, dataname);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsonDelAjax(storename, dataname, keycode, keyvalue, callback, optionarray) {
    var path = "/data/json/";
    path += storename + ".json";
    funLoading(true);

    $.ajax({
        url: webserviceprefix + "/WebService.asmx/DelDataPost",
        type: "post",
        data: JSON.stringify({ "path": path, "dataname": dataname, "keycode": keycode, "keyvalue": keyvalue }),
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            callbackwithdata(callback, data.d, optionarray);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function jsonUpdateAjax(storename, dataname, data, keycode, keyvalue, callback, optionarray) {
    //upload and save json file to server as post method
    if (data == "" | typeof data == "undefined") return false;
    funLoading(true);

    var jdata = JSON.parse(data);
    jdata.lastupdate = new Date();
    var path = "/data/json/";
    path += storename + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/UpdateDataPost",
        type: "post",
        data: JSON.stringify({ "path": path, "udata": JSON.stringify(jdata), "dataname": dataname, "keycode": keycode, "keyvalue": keyvalue }),
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            //sweetmsgautoclose("Update jsonfile",(data.d));
            callbackwithdata(callback, data.d, optionarray);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
var defconnect;//access web.config connectionstr and fectch in pageInit()
function defconnectset(data) {
    //default connectionstring
    if (!data.hasOwnProperty("connection"))
        data.connection = defconnect;
    if (!data.hasOwnProperty("connectname"))
        data.connection = defconnect;
    else if (data.connectname == "Default" && defconnect != data.connection)
        data.connection = defconnect;
    return data;
}
function jsonDatabaseAjax(data, callback, callparam) {
    //exec database query return datalist
    //data:data.connection, data.querylist(sqlcommand,dtype,query,param)
    //callparam:param array for callback
    data = defconnectset(data);
    var con = data.connection, dbtype = "", cstr = "", spname = "", dtype, sqlcommand, ajaxname;
    if (typeof con != "undefined" && con != "" && con != "undefined") {
        var conn = con.split(";");
        cstr = con.replace(conn[0] + ";", "");
        dbtype = conn[0].split("=")[1];
    }
    else
        return false;

    if (data.hasOwnProperty("querylist")) {
        $(data.querylist).each(function (i, k) {
            sqlcommand = k.sqlcommand;
            spname = k.query;
            dtype = k.dtype;
            pvlist = k.param;
        });
    }
    //[{ "seq": "1", "pname": "@series", "dtype": "VarChar", "pleng": "100" }]
    //Query: compcode,acuvue,varchar#100(pname,pvalue,ptype1#ptype2)
    //Proc: series,roi
    var param = [];
    $(pvlist).each(function (i, k) {
        var str = k[0] + "," + userfilter(k[1]);
        if (dtype == "query") {
            str += "," + k[2];
        }
        param.push(str);
    });
    var paramlist = {};
    paramlist.connect = JSON.stringify(cstr);
    paramlist.spname = JSON.stringify(spname);
    paramlist.paramvalue = JSON.stringify(param.join(";"));
    switch (sqlcommand) {
        case "select":
            switch (dtype) {
                case "procedure":
                    ajaxname = "proctable";
                    break;
                case "query":
                    ajaxname = "querytable";
                    break;
            }
            break;
        case "update": case "delete":
            paramlist.commandtype = JSON.stringify(dtype);
            paramlist.connect = JSON.stringify(data.connection);
            ajaxname = "executeNonQuery";
            break;
    }
    funLoading(true)
    $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        url: webserviceprefix + "/WebService.asmx/" + ajaxname,
        data: paramlist,
        dataType: "json",
        success: function (dt, status) {
            if (dt.d != "") {
                switch (sqlcommand) {
                    case "select":
                        data.datalist = JSON.parse(dt.d);
                        var opt;
                        if (callparam == 'datatableload') opt = {}

                        callbackwithdata(callback, JSON.stringify(data), callparam);
                        break;
                    case "update": case "delete":
                        break;
                }
            }
            funStop();
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            sweetmsg("Ooops!", r.Message)
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
            funStop();
        }
    });
}
function jsonQueryCheck(data, callback, optionarray) {
    if (!data.hasOwnProperty("datalist"))
        jsonDatabaseAjax(data, callback, optionarray);
}
function callbackwithdata(callback, rtndt, opt) {
    if (typeof callback === "function") {
        if (rtndt == "")
            rtndt = "[]";
        var dt = JSON.parse(rtndt);
        if (typeof opt != "undefined")
            //not knowing dynamic add parameter!!!!
            switch (opt.length) {
                case 0:
                    callback(dt);
                case 1:
                    callback(dt, opt[0]);
                    break;
                case 2:
                    callback(dt, opt[0], opt[1]);
                    break;
                case 3:
                    callback(dt, opt[0], opt[1], opt[2]);
                    break;
                case 4:
                    callback(dt, opt[0], opt[1], opt[2], opt[3]);
                    break;
                case 5:
                    callback(dt, opt[0], opt[1], opt[2], opt[3], opt[4]);
                    break;
                case 6:
                    callback(dt, opt[0], opt[1], opt[2], opt[3], opt[4], opt[5]);
                    break;
                case 7:
                    callback(dt, opt[0], opt[1], opt[2], opt[3], opt[4], opt[5], opt[6]);
                    break;
                case 8:
                    callback(dt, opt[0], opt[1], opt[2], opt[3], opt[4], opt[5], opt[6], opt[7]);
                    break;
            }
        else
            callback(dt);

    }
    ajaxrtn = rtndt; funStop();
}
function callbackexewithparam(callback, opt) {
    if (typeof callback === "function") {
        if (typeof opt != "undefined")
            //not knowing dynamic add parameter!!!!
            switch (opt.length) {
                case 1:
                    callback(opt[0]);
                    break;
                case 2:
                    callback(opt[0], opt[1]);
                    break;
                case 3:
                    callback(opt[0], opt[1], opt[2]);
                    break;
                case 4:
                    callback(opt[0], opt[1], opt[2], opt[3]);
                    break;
                case 5:
                    callback(opt[0], opt[1], opt[2], opt[3], opt[4]);
                    break;
                case 6:
                    callback(opt[0], opt[1], opt[2], opt[3], opt[4], opt[5]);
                    break;
                case 7:
                    callback(opt[0], opt[1], opt[2], opt[3], opt[4], opt[5], opt[6]);
                    break;
                case 8:
                    callback(dt, opt[0], opt[1], opt[2], opt[3], opt[4], opt[5], opt[6], opt[7]);
                    break;
            }
        else
            callback();

    }
}
function callbackreturn(dt, callbackname, options) {
    //after callback returned post process with it
    //insert callbackname into array ex(jsonUpdateAjax(preceding parameters......, callbackreturn, ["derivedparameter"]))
    switch (callbackname) {
        case "connectstringmake":
            //funcfrom:databaseLoad
            //callback from imcsetting>preference
            switch (window.location.hostname) {
                //case "localhost":
                //    defconnect="Data Source=User-PC;Initial Catalog=Coredb;User ID=sa;Password=note9080()*)";
                //    break;
                //case "www.imcmaster.co.kr": 
                default:
                    break;
            }

            var imcstr = { code: '1', data: 'Code=1;Title=Default;' + defconnect };
            var list = [imcstr];
            if (dt != "" && dt.hasOwnProperty("connectstring")) {
                list = dt.connectstring;
                list.unshift(imcstr);
            }
            $(list).each(function (i, k) {
                var nlist = k.data.split(";"), conn = [], tit = "";
                $(nlist).each(function (a, b) {
                    var bb = b.split("=");
                    if ($.inArray(bb[0].toLowerCase(), ["code", "title"]) == -1)
                        conn.push(b);
                    else if (bb[0].toLowerCase() == "title") {
                        tit = bb[1]
                    }
                });
                $("#selconn").append($("<option value='" + conn.join(";").replace("Default=false;", "").replace("Default=true;", "") + "'>" + tit + "</option>"));
                console.log(conn.join(";"))
            });
            $("#selconn").append($("<option value=''>&#xf0fe; new connection</option>"));
            databaseLoad.editdataload();

            break;
        case "derivedparameter":
            //funcfrom:databaseLoad
            //with procedure parameters fillin parameter table
            //[{ "seq": "1", "pname": "@series", "dtype": "VarChar", "pleng": "100" }]
            $("#spparam").text(JSON.stringify(dt));
            $("#dvparam").show();
            databaseLoad.paramtable("procedure");
            $(dt).each(function (i, k) {
                appendTableRow($("#tbParam"), ["<input value='" + k.pname.replace("@", "") + "'/>", "<input />", "<i class='fa fa-times-circle fa-lg imdim' onclick='paramRowdel($(this))'  id='idel'/>"]);
            })
            break;
        case "datatableload":
            //  var dlist=datalistreturn(dt)
            if (dt.hasOwnProperty("datalist")) {
                nodeTable(dt.datalist);
                $("#dvjsondt").text(JSON.stringify(dt.datalist));
            }
            accordfilterclick(dt);
            break;

    }
}
function jsonfileReplace(storename, data) {
    //update,insert imctable with data from json file or db file
    //storename:imctable
    var name = storename.split("_");
    var imc = localStorage.getItem(name[0]);
    if (imc != null) imc = JSON.parse(imc);
    else imc = {};
    //var dtt = $.grep(data, function (a) {
    //       return a["comp"] == getlogin().comp;
    //   });

    //    if (data.length > 0) {
    var key = Object.keys(data);
    $(key).each(function (i, k) {
        imc[k] = data[k];
    });
    localStorage.setItem(name[0], JSON.stringify(imc));
    //   }
}
function initimctable() {
    var storename = 'imctable';
    if (menutoggle == 'template') storename = 'imctemplate';
    var imctb = localStorage.getItem(storename);
    if (imctb == "" | imctb == null) {
        set = {};
        set[menutoggle + 'menu'] = [];
        set[menutoggle + 'submenu'] = [];
        set[menutoggle + 'control'] = [];
        localStorage.setItem("imctable", JSON.stringify(set));
    }
    else {
        var imctb1 = JSON.parse(imctb);
        if (!imctb1.hasOwnProperty(menutoggle + 'menu')) imctb1[menutoggle + 'menu'] = [];
        if (!imctb1.hasOwnProperty(menutoggle + 'submenu')) imctb1[menutoggle + 'submenu'] = [];
        if (!imctb1.hasOwnProperty(menutoggle + 'control')) imctb1[menutoggle + 'control'] = [];
        localStorage.setItem(storename, JSON.stringify(imctb1));
    }
}
function checklastupdate(storename) {
    var id = "";
    if (getlogin() != "")
        $.ajax({
            url: webserviceprefix + "/WebService.asmx/localStorageFindLastupdate",
            data: { id: JSON.stringify(getlogin().id), type: JSON.stringify(storename) },
            contentType: "application/json; charset=utf-8",
            dataType: "JSON",
            success: function (data, status) {
                if (data.d != "") {
                    if (isNew(storename, data.d))
                        localStorageFindAjax(getlogin().comp, getlogin().id, storename);
                }
            },
            error: function (response) {
                var r = jQuery.parseJSON(response.responseText);
                console.log("Message: " + r.Message);
                console.log("StackTrace: " + r.StackTrace);
                console.log("ExceptionType: " + r.ExceptionType);
            }
        });
}
function isNew(type, date) {
    //compare two date if input date is new, return true;
    var rtn = true;
    var exist = selectimc(type, "lastupdate");
    if (typeof exist == "undefined") rtn == false;
    else if (exist != "")
        if (new Date(date) <= new Date(exist))
            rtn = false;
    return rtn;
}
function selectimctablearray(menuid, subid, likedvid) {
    var rtn = [];
    if (likedvid != "") {
        var list = selectimc("imctable", "control");
        $.each(list, function (i, k) {
            var str = likedvid.replace("%", "");
            if (k != null && k.menuid == menuid && k.subid == subid && k.dvid.indexOf(str) > -1) {
                rtn.push(k);
            }
        });
    }
    return rtn;
}
function localStorageFindAjax(comp, staff, storename) {
    //var login = selectimc("imcsetting", "login");
    //var comp = comp, staff = staff, stype = storename;
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/localStorageFind",
        data: { comp: JSON.stringify(comp), staff: JSON.stringify(staff), stype: JSON.stringify(storename) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            if (data.d != "") {
                var dt = JSON.parse(data.d);
                if (dt.hasOwnProperty("lastupdate")) {
                    if (isNew(storename, dt.lastupdate)) {
                        jsonfileReplace(storename, dt);
                        sweetmsgautoclose("Success", "Updated data to localStorage")
                    }
                    //else
                    //    sweetmsgautoclose("Success", "Current data is new, no need to update")
                }
            }

        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }

    });
}
function localStorageUpAjax(comp, staff, storename, datastr) {
    //    var login=selectimc("imcsetting", "login");
    //    var comp = login.comp, staff = login.staff, stype = 'imctable',data=localStorage.getItem("imctable")
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/localStorageUpdate",
        type: "post",
        data: JSON.stringify({ comp: comp, staff: staff, stype: storename, data: datastr }),
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            //sweetmsgautoclose("Success", "Saved " + storename + " to database");
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }

    });
}
function updateimctable(menuid1, subid1, dvid, savedata) {
    initimctable();
    var storename = 'imctable';
    if (menutoggle == "template")
        storename = "imctemplate";
    var imctb = localStorage.getItem(storename);
    imctb = JSON.parse(imctb);
    var exist = false, list = [];
    if (dvid != "" && typeof dvid != "undefined") {
        list = menuMy("control");//selectimc("imctable", menutoggle + "control")
        if (list == "") list = [];
        //control save
        $.each(list, function (i, k) {
            if (k != null &&  k.dvid == dvid) {
                if (savedata == '')
                    list.splice(i, 1);
                else {
                    //$.each(savedata, function (key, value) {
                    //    list[i][key] = value;
                    //});
                    list.splice(i, 1, savedata);
                }
                exist = true;
            }
        });
        if (!exist) {
            list.push(savedata);
        }
        imctb[menutoggle + 'control'] = list;
    }
    else if (subid1 != "" && typeof subid1 != "undefined") {

        list = menuMy("submenu");//selectimc("imctable", menutoggle + "submenu");
        if (list == "") list = [];
        $.each(list, function (i, k) {
            if (k != null && k.menuid == menuid && k.subid == subid1) {
                if (savedata == '')
                    list.splice(i, 1);
                else {
                    $.each(savedata, function (key, value) {
                        list[i][key] = value;
                    });
                }
                exist = true;
            }
        });
        if (!exist) {
            list.push(savedata);
        }
        imctb[menutoggle + 'submenu'] = list;
    }
    else if (menuid1 != "" && typeof menuid1 != "undefined") {

        var list = menuMy("menu");//selectimc("imctable", menutoggle + "menu");
        if (list == "") list = [];
        $.each(list, function (i, k) {
            if (k != null && k.menuid == menuid1) {
                if (savedata == '')
                    list.splice(i, 1);
                else {
                    $.each(savedata, function (key, value) {
                        list[i][key] = value;
                    });
                }
                exist = true;
            }
        });

        if (!exist) {
            list.push(savedata);
        }
        imctb[menutoggle + 'menu'] = list;
    }
    localStorage.setItem(storename, JSON.stringify(imctb));
    if (getlogin().group == "CommonAdmins") var myinfo = getlogin().comp;
    else
        myinfo = getlogin().comp + "," + getlogin().id;
    jsonUpdateMyAjax(storename, myinfo, JSON.stringify(imctb));

//    jsonSaveAjax(storename, JSON.stringify(imctb));
}
function deleteimcsetting(storename, dataname) {
    var json = "";
    var rtn = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
        switch (typeof dataname) {
            case "object":
                $(dataname).each(function (i, k) {
                    delete json[k];
                });
                break;
            case "string":
                delete json[dataname];
                break;
        }

        if (json.hasOwnProperty("updated"))
            $.each(json["updated"], function (index, data1) {
                switch (typeof dataname) {
                    case "object":
                        $(dataname).each(function (i, k) {
                            if (data1["dataname"] == k) {
                                delete data1.k;
                            }
                        });
                        break;
                    case "string":
                        if (data1["dataname"] == dataname) {
                            delete data1.dataname;
                        }
                        break;
                }

            })
    }
    localStorage.setItem(storename, JSON.stringify(json));
}
function deleteimc(storename, dataname, keyname, keyvalue) {
    //storename:localStorage name(imclist)
    //dataname:objectkey("form")
    //keyname:object array key code(code)
    //keyvalue:keycode value("fr00001")
    var json = "";
    var rtn = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
        if (dataname == "" | dataname == "*") {
            var list = Object.keys(json);
            $(list).each(function (a, b) {
                $(json[b]).each(function (i, k) {
                    if (k[keyname] == keyvalue | k == "")
                        json[b].splice(i, 1);
                });
                json[b] = nullarchiveremove(json[b]);
            });
        }
        else if (json.hasOwnProperty(dataname)) {
            $(json[dataname]).each(function (i, k) {
                if (k[keyname] == keyvalue | k == "")
                    json[dataname].splice(i, 1);
            });

            json[dataname] = nullarchiveremove(json[dataname]);
        }
        localStorage.setItem(storename, JSON.stringify(json));
    }
}
function findimcsettingvalue(keycode, keyvalue, fieldname, data) {
    //example:keycode:progresscode,keyvalue:"LD0000001",
    //fieldname:"ctime",data:selectimc("progresscode")
    var rtn = "";
    for (i in data) {
        if (data[i][keycode] == keyvalue) {
            rtn = data[i][fieldname];
        }
    }
    return rtn;
}
function updateimcJson(json, dataname, updateingdata) {
    //json:pased localStorage data
    //dataname:objectname in json
    //updateingdata:parsed data of dataname
    if (json == "" | json == "undefined") {
        json = {};
    }
    else {
        $.each(json, function (key, data) {
            if (key == dataname) {
                delete json.key;
            }
        })
    }
    json[dataname] = updateingdata;

    return json;
}
function updateimc(storename, dataname, jsondt, keycode, keyvalue) {
    //storename:"imclist"
    //dataname:objectname in json("form")
    //jsondt:parsed data of dataname(all data uder form object or single data of form array)
    //keycode:if jsondt is array, keycode name(if form is array, array key code name)
    //keyvalue:keycode value 
    var imc = localStorage.getItem(storename);
    if (imc == null) {
        localStorage.setItem(storename, '');
        imc = localStorage.getItem(storename);
    }
    if (imc == "" && dataname != "" && dataname != "*") {
        var set = {}, arr = [];
        arr.push(jsondt);
        set[dataname] = arr;
        localStorage.setItem(storename, JSON.stringify(set));
    }
    else {
        imc = JSON.parse(imc);
        if (dataname != "" && dataname != "*") {
            if (!imc.hasOwnProperty(dataname))
                imc[dataname] = [jsondt];
            else {
                var dt = datainput(imc[dataname]);
            }
        }
        else {
            var objlist = Object.keys(imc);
            $(objlist).each(function (a, b) {
                var dt = datainput(imc[b]);
            });
        }
    }

    localStorage.setItem(storename, JSON.stringify(imc));
    function datainput(dt) {
        var dtt = $.grep(dt, function (a) {
            return a[keycode] == keyvalue;
        });
        if (dtt.length > 0) {
            $(dt).each(function (i, k) {
                if (k[keycode] == keyvalue)
                    dt.splice(i, 1, jsondt);
            });
        }
        else
            dt.push(jsondt);
        return dt;
    }
}
function updateimcsettingvalue(storename, dataname, keycode, keyvalue, updateddata) {
    //특정 부분의 값을 교체
    //dataname:leadstatus, keycode:"progresscode",keyvalue:"LE0000001",updateddata:{"progresscode:"LE0000001",....}

    var json = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
    }
    var chk = false;
    $.each(json, function (key, data) {
        if (key == dataname) {
            $.each(data, function (index, data1) {
                if (data1[keycode] == keyvalue) {
                    //data.splice(index, 1);
                    data.splice(index, 1, updateddata);
                    chk = true;
                    return false;
                }
            })
        }
    })
    var chk1 = false;
    if (!chk) {
        $.each(json, function (key, data) {
            if (key == dataname) {
                data.push(updateddata);
                chk1 = true;
            }
        });
    }
    if (!chk1) {
        json[dataname] = [updateddata];
    }
    if (localStorage.getItem(storename) != null) {
        localStorage.setItem(storename, JSON.stringify(json));
    }
}
function updateimcsettingtime(storename, dataname) {
    //갱신일을 data별로 attach

    var json = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
    }
    var exist = false;
    var exdata = false;
    $.each(json, function (key, data) {
        if (key == "updated") {
            $.each(data, function (index, data1) {
                if (data1["dataname"] == dataname) {
                    data1["upd"] = new Date();
                    exdata = true;
                }
            })
            exist = true;
        }
    });

    if (!exist)
        var upd = [];
    else
        upd = json["updated"];
    if (!exdata) {
        var set = {};
        set["dataname"] = dataname;
        set["upd"] = new Date();
        upd.push(set);
        json["updated"] = upd;
    }
    if (localStorage.getItem(storename) != null) {
        localStorage.setItem(storename, JSON.stringify(json));
    }
}
function findimcsettingtime(storename, dataname) {
    //data별 갱신일 찾기

    var rtn = "";
    var json = "";
    if (localStorage.getItem(storename) != null) {
        json = localStorage.getItem(storename);
        json = JSON.parse(json);
        json = json["updated"];
    }
    $.each(json, function (key, data) {
        if (json[key]["dataname"] == dataname) {
            rtn = json[key]["upd"];
        }
    })
    return rtn;
}
function findtimepassed(storename, dataname) {
    //dataname별 갱신후 몇시간 지났나

    var updated = findimcsettingtime(storename, dataname);
    return substracttime(updated);
}
function substracttime(updated) {
    var div = 1000 * 60 * 60;
    var dif = (new Date().getTime() - new Date(updated).getTime()) / div;
    if (updated == "") dif = 1000;
    return Math.round(dif);
}
function AjaxAdd(storename, dataname, url, parameter, upinterval, callback) {

    if (upinterval == "" | upinterval == "undefined") upinterval = 24;
    if (selectimc(storename, dataname) == "" || findtimepassed(storename, dataname) > upinterval) {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: url,
            data: parameter,
            dataType: "json",
            success: function (data) {
                imcsetting(storename, dataname, data.d);

                if (callback && typeof (callback) === "function") {
                    callback();
                }
            },
            error: function (result) {
                console.log(JSON.stringify(result));
            }
        });
    }
}
function ajaxGen(url, parameter, callback, optionarray) {
    //ex:ajaxGen(webserviceprefix+"/WebService.asmx/DeriveParam",{ dbtype: '', connect: '', spname: JSON.stringify("gauge1") })
    //parameter:{ dbtype: '', connect: '', spname: JSON.stringify("gauge1") }
    //optionarray:additional parameters for callback in order ['opt1','opt2'....]
    $('.loaderImage').show();
    $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        url: url,
        data: parameter,
        dataType: "json",
        success: function (data, status) {
            callbackwithdata(callback, data.d, optionarray);
            console.log(data.d)
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            sweetmsg("Ooops!", r.Message)
            //alert("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function remoteimctable() {
    //ajax로 imctable을 create & update
    var comp = "", id = "";
    var login = getlogin();
    if (login != "") {
        comp = login.comp;
        id = login.id;
    }
    //개인별 imctable remote가져옴
    //localStorageFindAjax(comp, id, "imctable");
    //imc = localStorage.getItem("imctable")
    //if (imc == null | imc=="")
    localStorageFindAjax(comp, id, "imctable");
}
function remoteUpdate(controlid, processcode, postdata) {
    //imcdata에 있는 dataset의 process내역(
    //controlid:'ac0', processcode:"insert,delete...",postdata:{code:"code123"}
    var login = selectimc("imcsetting", "login");
    var comp = login.comp;// + ",1"; // obj.comp;
    var datacode = selectimctable(menuid, subid, controlid).datacode;
    var data = {};
    data.comp = JSON.stringify(comp);
    data.datacode = JSON.stringify(datacode);
    data.processcode = JSON.stringify(processcode);
    data.postdata = JSON.stringify(JSON.stringify(postdata));
    console.log(JSON.stringify(data))
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ProcessData",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            console.log(data.d)
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
}
function remoteimcupdate(type) {
    //remote upload
    //type:imctable,imcsetting,imcdata
    var imc = localStorage.getItem(type), list, newimc, msg;
    if (imc != null) {
        imc = JSON.parse(imc);
        imc.lastupdate = new Date();
        var comp = "", staff = "";
        if (getuserid1() != "" && menutoggle == "" && getuserid1() != "ykn") {
            comp = getlogin().comp, staff = getuserid1();
            localStorageUpAjax(comp, staff, type, JSON.stringify(imc));
            msg = "server database " + type + " data";
        }
        else {
            if (getuserid1() == "ykn" && type == "imctable" && menutoggle != "open") type += "_login";
            switch (type) {
                case "imcsetting":
                    list = ["csslist", "preference"];
                    newimc = {};
                    $(list).each(function (i, k) {
                        newimc[k] = imc[k];
                    });
                    break;
                case "imctable": case "imctable_login": case "imctemplate":
                    newimc = imc;
                    break;
                case "imcdata":
                    list = ["csslist", "preference"];
                    newimc = {};
                    $(list).each(function (i, k) {
                        newimc[k] = imc[k];
                    });
                    break;
            }
            jsonSaveAjax(type, JSON.stringify(newimc));
            msg = type + ".json file";
        }
    }
}
function initLoader() {
    //loading image dynamic insert

    var dv = document.createElement('div');
    dv.setAttribute("class", "loaderimage");
    dv.setAttribute("style", "display:none;");
    var img = document.createElement("image");
    img.setAttribute("src", "/images/loading/loading.gif");
    dv.appendChild(img);
    document.getElementsByTagName('body')[0].appendChild(dv);

}
function imctableAjaxRead(id) {
    var data = selectimctable(menuid, subid, id);
    return data;
}
function updatedataset(datacode, newdt, datamap) {
    jsonReadAjax("imcdata", "", "code", datacode, updatedataset.process, [datacode, newdt, datamap, keycode])
    updatedataset.process = process;
    function process(data, datacode, newdt, datamap, keycode) {
        if (data == "") return false;
        data = JSON.parse(data);
        if (!data.hasOwnProperty("datalist")) return false;
        var origindt = data.datalist;

        var nlist = [], olist = [], combine = [];
        //current dt list
        $(origindt).each(function (i, k) {
            olist.push(k[keycode]);
        });
        //insert new created dt  into combine
        $(newdt).each(function (i, k) {
            if ($.inArray(k[keycode], olist) == -1) {
                combine.push(k);
                newdt.splice(i, 1);
            }
        });
        //existing dt in new dt
        $(newdt).each(function (i, k) {
            nlist.push(k[keycode]);
        });
        //insert not exist in newdt from origindt into combine
        $(origindt).each(function (i, k) {
            if ($.inArray(k[keycode], nlist) == -1) {
                combine.push(k);
            }
        });
        //update 
        combine = $.merge(combine, newdt);
        jsonUpdateAjax("imcdata", "", JSON.stringify(combine), "code", datacode);
    }
}
function finddatacode(dtsrc) {
    var datacode = dtsrc.datacode;
    if (datacode == "" | typeof datacode == "undefined")
        datacode = dtsrc.code;
    return datacode;
}
//#endregion

//#region DataSource
function applyFilter(src, filter) {
    
    var fcode, coltype, foper, fval, st, ed, val, sp, ftype, fmt;
    var fieldlist = [], set = {}, dellist = [], renamelist = [], formatlist = [], newsrc = [], ftypelist = [];
    if (typeof filter != "undefined" && filter.length > 0 && filter != "") {
        $(filter).each(function (i, k) {
            //del list
            if (k[6]) dellist.push(k[0]);
            //rename list
            if (k[5] != "") {
                set = {};
                set.name = k[0];
                set.rename = k[5];
                renamelist.push(set);
            }
            //format list
            if (k[4] != "" && k[4] != "N/A") {
                set = {};
                set.name = k[0];
                set.format = k[4];
                formatlist.push(set);
            }
            ftypelist.push(fieldTypeFind(src, k[0]));
        });
        //delete
        $(src).each(function (i, k) {
            $(dellist).each(function (j, l) {
                delete k[l];
            });

            newsrc.push(k);
        });
     
        //filtering
        $.each(newsrc, function (i, k) {
            var ok = true;

            $.each(filter, function (j, s) {
                //data type fine
                //if (ftypelist[j].type == "string" && ftypelist[j].valuelist.length > 20) {
                //    ok = false;
                //}
                //else
                {
                    ftype = ftypelist[j].type;
                    fcode = s[0];
                    coltype = s[1];
                    foper = s[2];
                    fmt = s[5];
                    //fval = s[2];
                    fval = [];

                    if (typeof (s[4]) != "string" && s[3] != ":" && s[3] != [])
                        $.each(s[2], function (l, m) {
                            if (paramreplace(m) != "" && typeof paramreplace(m) != "undefined") {
                                $(paramreplace(m).split(',')).each(function (i, k) {
                                    fval.push(k);
                                });
                            }
                        });
                    else
                        fval = s[3];
                    var srcval = k[fcode];
                    if ($.inArray(coltype, ["int", "float"]) > -1) {
                        if (srcval !== null && typeof srcval != "undefined" && srcval.length > 0 && !isNaN(srcval))
                            switch (coltype) {
                                case "int":
                                    k[fcode] = parseInt(srcval);
                                    break;
                                case "float":
                                    k[fcode] = parseFloat(srcval);
                                    break;
                            }
                    }
                    //array인경우
                    if ($.isArray(fval)) {
                        if (fval.length > 0 && !arraychkexist(fval, srcval))
                            ok = false;
                    }
                    else if (fval != "") {
                        sp = fval.split(':');
                        //console.log("fcode:", fcode, "val:",k[fcode],"left:", sp[0], "right:", sp[1])
                        switch (sp.length) {
                            case 1:
                                //single value인경우
                                if (srcval != fval)
                                    ok = false;
                                break;
                            case 2:
                                val = "";
                                st = "";
                                ed = "";
                                //datetime,num인경우
                                switch (ftype) {
                                    case "number":
                                        val = srcval;
                                        st = sp[0];
                                        ed = sp[1]
                                        break;
                                    case "datetime":
                                        if (srcval != "")
                                            val = new Date(srcval);
                                        if (sp[0] != "")
                                            st = new Date(sp[0]);
                                        if (sp[1] != "")
                                            ed = new Date(sp[1]);
                                        break;
                                }
                                switch (foper) {
                                    case "bw":
                                        if (val != "" && st != "" && ed != "")
                                            if (val < st | val > ed)
                                                ok = false;
                                        break;
                                    default:
                                        if (val != "" && st != "" && st != "undefined") {
                                            if (!parseOperator(val, st, foper, ftype))
                                                ok = false;
                                        }
                                        break;
                                }
                                break;
                        }
                    }
                    //
                }
            });
            if (ok) {
                //reorderlist
                var k1 = {}, odrlist = [], odrstr = "";
                $(filter).each(function (x, y) {
                    if ($.inArray(y[0], dellist) == -1)
                        odrlist.push(y[0]);
                })
                //rename
            var before = Object.keys(k);
                odrstr = odrlist.join(',');
                $(renamelist).each(function (a, b) {
                    $(odrlist).each(function (e, f) {
                        if (b.name == f) {
                            odrstr = odrstr.replace(f, b.rename);
                        }
                    });
                    $(before).each(function (c, d) {
                        if (b.name == d) {
                            k[b.rename] = k[b.name];
                            delete k[b.name];
                        }
                    });
                });
                //format
                $(formatlist).each(function (a, b) {
                    $(before).each(function (c, d) {
                        if (b.name == d) {
                            if (k[d] != "")
                                k[d] = makeDateTime1(new Date(k[d]), "-", b.format);
                        }
                    });
                });

                //reorder finally
                var k1 = {};
                odrlist = odrstr.split(',');
                $(odrlist).each(function (g, h) {
                    k1[h] = k[h];
                });
                fieldlist.push(k1);
            }
        });
    }
    else
        fieldlist = src;
    return fieldlist;
}
function fieldTypeFind(data, field) {
    //field별 data type: string,number,datetime return
    var valuelist11 = [];
    //unique value insert
    $.each(data, function (index, dt) {
        if (dt[field] != null && dt[field] != "undefined" && dt[field] != "")
            if (!arraycheckexist(valuelist11, dt[field]))
                valuelist11.push(dt[field]);
    });
    if (isColumntype(valuelist11, "bool")) {
        var type1 = "boolean";
    }
    else if (isColumntype(valuelist11, "number")) {
        type1 = "number";
        formatchg(type1);
    }
    else if (isColumntype(valuelist11, "datetime")) {
        type1 = "datetime";
        formatchg(type1)
    }
    else type1 = "string";
    function formatchg(format) {
        var newvlist = [];
        $(valuelist11).each(function (i, k) {
            switch (format) {
                case "datetime":
                    newvlist.push(moment(k).toDate());
                    break;
                case "number":
                    newvlist.push(parseFloat(k));
                    break;
            }
        });
        return newvlist;
    }
    return { type: type1, valuelist: valuelist11 };
}
function findfilter(data) {
    //find filter by datatype
    var rtn = "";
    if (data.dtype == "database") {
        if (data.hasOwnProperty("querylist")) {
            $(data.querylist).each(function (i, k) {
                if (k.sqlcommand == "select") {
                    rtn = k.filter
                }
            });
        }
    }
    else {
        rtn = data.filter;
    }
    return rtn;
}
function readdata(id, rtntype, options) {
    //readdata.archivereturn = archivereturn;
    //find three type of data with id(ctrid or archive code): control, archive, temp(temporarily save in #sparchive)
    //if rtntype='gdt', return whole data of archive or control
    var archive = $("#sparchive").text(), dataobj, gdt;
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("gdt")) {
            gdt = options.gdt;
            if (typeof gdt != "undefined" && gdt.hasOwnProperty("data"))
                dataobj = gdt.data;
            else
                dataobj = nooptdata(id);
        }
        else
            optdata(id, rtntype, options);
    }
    else {
        if (rtntype == "gdt")
            gdt = nooptdata(id, "gdt");
        else
            dataobj = nooptdata(id);
    }
    function optdata(id, rtntype, options) {
        var ctrdt = selectimctable("", "", id), filter = '', field = '';
        if (typeof ctrdt != "undefined") {
            if (ctrdt.hasOwnProperty("data")) dataobj = ctrdt.data;
            if (rtntype == "gdt") gdt = ctrdt;
        }

        if (rtntype == "gdt")
            return gdt;
        else
            return dataobj;
    }
    function nooptdata(id, rtntype) {
        var ctrdt = selectimctable("", "", id), filter = '', field = '';
        if (typeof ctrdt != "undefined") {
            if (ctrdt.hasOwnProperty("data")) dataobj = ctrdt.data;
            if (rtntype == "gdt") gdt = ctrdt;
        }

        if (rtntype == "gdt")
            return gdt;
        else
            return dataobj;
    }
    if (rtntype == "gdt")
        return gdt;
    else
        return dataobj;

    function archivereturn(ardt, rtntype) {
        if (typeof ardt != "undefined") {
            gdt = ardt;
            if (ardt.hasOwnProperty("data"))
                dataobj = ardt.data;
        }
        console.log(ardt)
        if (rtntype == "gdt")
            return gdt;
        else
            return dataobj;
    }
}
function datalistreturn(data, datalist) {
    //apply filter database and others differently with data as input
    //find datalist from dataset
    //if dtype==database,datalist in querylist( sqlcommand='select')
    var rtn = "", dtlist = "",dsrc=$("#spdataajax"),datacode="";
    //if (dsrc.length > 0)
    //    data = JSON.parse(dsrc.text());
    if (typeof datalist != "undefined") dtlist = datalist;
    else if ($("#spdtlist").text() != "") dtlist = JSON.parse($("#spdtlist").text());

    datacode = finddatacode(data);
    if (!data.hasOwnProperty("dtype")) {
        if (datacode != "")
            jsonReadAjax("imcdata", "", "code", data.datacode, datalistreturn, [datalist]);
    }
    else if (data.dtype == "database") {
        if (data.hasOwnProperty("querylist")) {
            $(data.querylist).each(function (i, k) {
                if (k.sqlcommand == "select") {
                    dtlist = k.datalist
                    rtn = applyFilter(dtlist, k.filter);
                }
            });
        }
    }
    else {
        if (dtlist == "") dtlist = data.datalist
        rtn = applyFilter(dtlist, data.filter);
    }

    return rtn;
}
//#endregion

//#region googlechart execute
function googlechartInit(id, options) {
    $("#" + id).empty();
    chartdiv = id;
    var gdt = "";
    if (typeof options != "undefined") gdt = options.gdt
    drawChart1(chartdiv, gdt);
}
var wrapper, cht, data = "";
function drawChart1(mode, opt) {
    var chartid = chartdiv;
    if (typeof opt != "undefined" && opt != "")
        cht = opt;
    else if ($("#lbCtr").text() != "" || chartdiv != "")
        cht = readdata(chartdiv, "gdt");

    else if ($("#archivegdt").text() != "") {
        var agdt = $("#archivegdt").text();
        if (agdt != "")
            cht = JSON.parse(agdt);
    }
    //data
    if (typeof cht != "undefined" && cht.hasOwnProperty("data")) {
        data = cht.data;
    }
    else if ($("#spdataajax").text() != "")
        data = JSON.parse($("#spdataajax").text());

    if (data != "") {
        if (data.hasOwnProperty("datalist") | data.hasOwnProperty("querylist"))
            drawChart2(data, mode, cht, opt)
        else {
            var dcode = ""
            if (data.hasOwnProperty("code")) dcode = data.code
            else if (data.hasOwnProperty("datacode")) dcode = data.datacode
            if (dcode != "")
                jsonReadAjax("imcdata", "", "code", dcode, drawChart2, [mode, cht, opt])
        }
    }
}
function drawChart2(data, mode, cht, opt) {
    //cht: same with gdt(chart info)
    //mode: div id to insert chart(''= chartid)
    var rtn = googlechartdt(cht, data);
    var options = {}, ctype = "ColumnChart", layout, flist = "", slist = "", val = "", ser = "", ax = "", json;
    json = rtn.json, options = rtn.options, ctype = rtn.ctype, flist = rtn.flist, slist = rtn.slist,options.height=1100;
    switch (mode) {
        case "edit":
            wrapper = new google.visualization.ChartWrapper({
                'chartType': ctype,
                'dataTable': json,
                containerId: 'dvChart',
                'options': options
            });
            styleInsert("charteditor-style", ".google-visualization-charteditor-dialog {   max-width:1000px;width:1100px;height:560px;border:solid 1px gray;z-index: 402 !important;}");
          
            chartEditor = new google.visualization.ChartEditor();
            chartEditor.openDialog(wrapper, {});
            google.visualization.events.addListener(chartEditor, 'ok', function () {
                var editor = JSON.parse(JSON.parse(JSON.stringify(chartEditor.getChartWrapper())));
                cht.options = editor.options;
                cht.options.width = "100%";
                // cht.options.height = "100%";
                cht.chartType = editor.chartType;
                var src = "";
                if (typeof opt != "undefined") src = opt.src;
                cht.ctrtype = 'googlechart';

                commonsave(chartdiv, src, cht, opt)
                console.log(opt)
                if (src == "list")
                    $("#archivegdt").text(JSON.stringify(cht));
                if ($('#dvChtedit').length)
                    $('#dvChtedit').empty();
                drawChart1('dvChtedit', opt);
              
            });
            break;
        case "dvChtedit":
            //options.height = "100%";
            $('#dvChtedit').empty();
            console.log(cht, json, data)
           // drawDashboard('dvChtedit', cht, json, data);
            simplechart('dvChtedit', cht, json, data);
            break;
        default:
            //options.height = 350;
            //drawDashboard(mode, cht, json, data);
            console.log(mode, cht, json, data)
            simplechart(mode, cht, json, data);
            break;
    }
}
function googlechartdt(cht, data) {
    var chartid, options = {}, ctype = "ColumnChart", layout, flist = "", slist = "", val = "", ser = "", ax = "";
    if (typeof cht != "undefined") {
        if (cht.hasOwnProperty("options")) {
            options = cht.options;
            cht.options.height = "100%";
            cht.options.width = "100%";
        }
        //options.width = 500;
        if (cht.hasOwnProperty("chartType")) ctype = cht.chartType;
        if (cht.hasOwnProperty("layout")) {
            layout = axismake(cht.layout);
            //common
            val = layout.value;
            if (layout.hasOwnProperty('axis')) ax = layout.axis;
            if (layout.hasOwnProperty('series')) ser = layout.series;
            flist = layout.filterlist;
            slist = layout.sortlist;
        }
        //var filter = '', dlist;
        //if (data.hasOwnProperty('filter')) filter = data.filter;
        //if (data.hasOwnProperty('datalist')) dlist = data.datalist;
        //var datalist = applyFilter(dlist, filter);
        var datalist = datalistreturn(data);

        var json = makeGoogleDataTable(datalist, ax, ser, val, flist, slist);
    }
    return { json: json, options: options, ctype: ctype, flist: flist, slist: slist }
}
function makeGoogleDataTable(data, axislist, series, valuelist, filterlist, sortlist) {
    
    //based on raw data create chart data for google
    var grpby = [];
    var val = [];
    var row = [];
    //create datatable
    var googledt = new google.visualization.DataTable();
    var al = axislist.split(',');
    var sl = series;
    var vl = valuelist.split(';');
    var axistype = "";
    //googledt column create:axis,value
    for (var t in al) {
        //add axis column
        if (typeof data == "undefined")
            googledt.addColumn('string', al[t]);
        else {
            var d = new Date(data[0][al[t]]);
            if (d instanceof Date && d != "Invalid Date")
                googledt.addColumn('date', al[t]);
            else if (typeof al[t] != "function")
                googledt.addColumn('string', al[t]);
        }
    }
    //if series
    var serieslist = "";
    if (sl != "") {
        //series value distict extract
        ser = [];
        for (i in data) {
            ser.push(data[i][sl]);
        }
        ser = $.unique(ser); //refer common.js(uniques)
        //series column
        var tt = vl[0].split(',');
        var aggregation = tt[1];
        for (j in ser) {
            //add axis column
            googledt.addColumn('number', ser[j]);
            serieslist += ser[j] + "," + aggregation + ";";
        }
        //add row
        for (i in data) {
            row = [];
            //x axis row data insert
            var d = new Date(data[i][al[0]]);
            if (d instanceof Date && d != "Invalid Date") {
                row.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
            }
            else
                row.push(data[i][al[0]]);

            for (j in ser) {
                if (data[i][sl] == ser[j])
                    row.push(parseFloat(data[i][tt[0]]));
                else
                    row.push(0);

            }
            googledt.addRow(row)
        }

        serieslist = serieslist.substring(0, serieslist.length - 1);
    }
    else {
        //value column

        for (var t in vl) {
            //add value column
            if (vl[t] != "" && typeof vl[t] != "function") {
                var tt = vl[t].split(',');
                googledt.addColumn('number', tt[0]);
            }
        }
        //googledt row insert
        for (i in data) {
            row = [];
            var d = new Date(data[i][al[0]]);
            if (d instanceof Date && d != "Invalid Date") {
                row.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
                axistype = "date";
            }
            else
                row.push(data[i][al[0]]);

            for (var t in vl) {
                if (vl[t] != "" && typeof vl[t] != "function") {
                    var tt = vl[t].split(',');
                    row.push(parseFloat(data[i][tt[0]]));
                }
            }
            googledt.addRow(row)
        }
    }
    //groupby
    //axis field

    var axisarray = [];
    var axarr = axislist.split(',');
    $(axarr).each(function (i, k) {
        axisarray.push(parseInt(i));
    });

    //value field
    if (sl != "") valuelist = serieslist;
    var valarray = googleGroupbyValueArray(axislist, valuelist);


    //google groupby
    var result = google.visualization.data.group(googledt, axisarray, valarray);
    return result;

}
function simplechart(dvcht, cht, json, data) {
    var preview = false,ht=200;
    if (dvcht == "dvChtedit") preview = true;
    if (dvcht == "") dvcht = chartdiv;
    if (typeof dvcht == "object") var gchart = dvcht;
    else
        var gchart = $("#" + dvcht);
    if(dvcht!="dvChtedit")ht= cht.setting[2][1];
    var chart = new google.visualization[cht.chartType](document.getElementById(dvcht));
    var options = {
        'width': $("#" + dvcht).width()-40,
        'height':ht
    };
    if (cht.options.hasOwnProperty("title")) options.title = cht.options.title;
    chart.draw(json, options);
    console.log(options,cht.setting[2][1])
    if (!preview && (cht.hasOwnProperty("setting"))) {
        var set = cht.setting, title = set[1][1];
        if (cht.setting[0][1] != "none")
            wrapcontrol(dvcht, title, dvcht, "", reloadcht, [chartdiv, { gdt: cht }]);
    }
}
function axismake(layout) {
    var rtn = {}, sort = [], sum, val = [], dir = false;
    $.each(layout, function (i, k) {
        switch (k.type.toLowerCase()) {
            case "value":
                sum = k.Sum
                val.push(k.field + "," + sum);
                break;
            case "axis":
                rtn.axis = k.field;
                rtn.axistype = k.datatype
                break;
            case "series":
                rtn.series = k.field;
                break;
        }
        //sort
        if (k.Sort == "Yes") sort.push(k.field + "," + k.asc);
        if (k.asc == "desc") dir = true;
        //if (k.Sort == "Yes") sort.push(layout.length-1-i+ "," + dir);

    });
    rtn.value = val.join(";");
    rtn.sortlist = sort.join(";");
    rtn.filterlist = "";
    return rtn;
}
var paramshow = "none";
var tb = "", drawcht;
function drawDashboard(dvcht, cht, json, data) {
     var preview = false;
    if (dvcht == "dvChtedit") preview = true;
    if (dvcht == "") dvcht = chartdiv;
    if (typeof dvcht == "object") var gchart = dvcht;
    else
        var gchart = $("#" + dvcht);
    var cs = { overflow: "hidden" };
    
   // if (htdefine != "")
        cs.height = cht.setting[2][1]
    gchart.css(cs);
   
    var contain = document.createElement('div');
    contain.id = "dvContainer"; //  document.getElementById('dvContainer');
    $("#dvContainer").remove();
    //contain.innerHTML = "";
    gchart.append(contain);

    // gchart.css("width", "99.5%");
    var dvdash = document.createElement('div');
    contain.appendChild(dvdash);
    var dvactr = document.createElement('div');
    dvactr.setAttribute("class", "google-visualization-controls-theme-contrast");
    dvactr.id = "dvAxis";

    var chartid, options, ctype = "ColumnChart", layout;
    chartid = chartdiv;

    if (cht.hasOwnProperty("options")) options = cht.options;
    //value control
    if (cht.hasOwnProperty("chartType")) ctype = cht.chartType;
    layout = axismake(cht.layout);
    //common
    var ax = layout.axis;
    var axtype = layout.axistype;
    var ser = layout.series;
    var val = layout.value;
    var filterlist = layout.filterlist;
    var sortlist = layout.sortlist;

    val = val.split(';');
    if (ser == "")
    for (m in val) {
        dv = document.createElement('div');
        dv.id = "dvValue" + m;
        dv.setAttribute("style", "padding:5px 0 5px 5px;display:" + paramshow + ";");
        dv.setAttribute("class", "google-visualization-controls-theme-contrast");
        dvdash.appendChild(dv);
    }

    //chart
    var dvcht = document.createElement('div');
    dvcht.id = "dvChart";
    //table
    var dvtb = document.createElement('div');
    dvtb.id = "dvTable";
    dvtb.setAttribute("style", "display:" + paramshow + ";padding:5px 0 0 5px;");
    if (axtype == "datetime") {
        dvdash.appendChild(dvcht);
        //dvdash.appendChild(dvactr);
        dvactr.setAttribute("style", "padding:0px 0 5px 5px;display:" + paramshow + ";height:50px;");
    }
    else {
        //dvdash.appendChild(dvactr);
        dvdash.appendChild(dvcht);
        dvactr.setAttribute("style", "padding:5px 0 5px 5px;display:" + paramshow + ";");
    }

    //axis control
    var ctrtype = "CategoryFilter";
    if (axtype == "datetime")
        ctrtype = "ChartRangeFilter";
    var actr = setControl(ctrtype, ax, dvactr);

    drawcht = setChart(ctype, dvcht, options);
    //click event
    var func = function () { selectHandler1(chartid, data, cht) };
    google.visualization.events.addListener(drawcht, 'select'
        , func);

    tb = setChart("Table", dvtb, "");
    //google.visualization.events.addListener(tb, 'select', selectHandler);
    //dashboard
    var myDashboard = new google.visualization.Dashboard(dvdash);

    if (ser == "")
        for (m in val) {
            var dvval = document.getElementById('dvValue' + m)
            var vctr = setControl("NumberRangeFilter", val[m].split(',')[0], dvval);
            myDashboard.bind(vctr, drawcht);
            //myDashboard.bind(vctr, tb);
        }
    //myDashboard.bind(actr, tb);
    myDashboard.bind(actr, drawcht);
    //series control

    //sort
    var view = new google.visualization.DataView(json);
    //if (sortlist != "")
    // view.setRows(view.getSortedRows(googleSortArray("1,true")));
    //       var sortexp = googleSortArray(sortlist, json);
    //        if(sortexp.length>0)
    //        view.setRows(view.getSortedRows(googleSortArray(sortlist,json)));
    //       console.log(googleSortArray(sortlist,sortexp))
    if (filterlist != "")
        //filterlist=[{"column":0,"minValue":new Date(2014,10,1),"maxValue":new Date(2014,10,30)}];
        //view.setRows(view.getFilteredRows(filterlist));
        //view.setRows(view.getFilteredRows([{"column": 0, "minValue": "new Date('2014-11-1')"}]));
        view.setRows(view.getFilteredRows(googleFilterArray(filterlist)));

    myDashboard.draw(view);
    var cdv = $("#" + chartdiv), cls = cdv.attr("class");
    //cdv.removeClass();
    //cdv.addClass(cls);
    if (!preview && (cht.hasOwnProperty("setting"))) {
        var set = cht.setting, title = set[1][1];
        console.log(cht.setting[0][1])
        if(!(cdv.parent().attr("class")=="panel-body" &&  cht.setting[0][1]=="none"))
            wrapcontrol(cdv, title, cdv, "", reloadcht, [chartdiv, {gdt:cht}]);

        //if (cdv.find("ul").length == 0) {
        //    cdv.prepend($("<ul><li><a href='#dvContainer'>" + set[1][1] + "</a></li></ul>"));
        //    cdv.tabs();
        //    expbtninsert(chartdiv, reloadcht, [chartdiv]);
        //}
        //checksubsetting(chartdiv, set[0][1]);
    }

  
}
function reloadcht(chartdiv, option) {
    console.log(chartdiv,option)
    //if (fullwin) {
    var cht = $("#" + chartdiv);
    var styl = cht.attr("style");
    var pp = cht.parent();
    cht.empty();
   // styl = "width:1400px;height:1000px";// + $(window).height();
   // pp.append($("<div id='" + chartdiv + "' class='googlechart' />"));
    googlechartInit(chartdiv,option);
    //}
}
function selectHandler1(chartid, data, cht) {
    //var selection = drawcht.getChart().getSelection();
    //console.log(data,cht)
    //var dt = drawcht.getDataTable();
    //var message = '';
    //for (var i = 0; i < selection.length; i++) {
    //    var item = selection[i];
    //    if (item.row != null && item.column != null) {
    //        var str = dt.getFormattedValue(item.row, item.column);
    //        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';
    //    } else if (item.row != null) {
    //        var str = dt.getFormattedValue(item.row, 0);
    //        message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';
    //    } else if (item.column != null) {
    //        var str = dt.getFormattedValue(0, item.column);
    //        message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';
    //            }
    //}
    //if (message == '') {
    //    message = 'nothing';
    //}
    //var xcol = dt.getValue(selection[0].row, 0);
    //var rowcol = selection[0];

    //console.log(JSON.stringify(xcol,rowcol));//, message, dt.getValue(selection[0].row, 0),dt.getValue(0,selection[0].column), selection[0].row, selection[0].column, selection[0], selection)
    // console.log(dt.getValue(selection[0].row, 0), dt.getValue(0, 5), dt.getValue(0, 0), JSON.parse(JSON.stringify(dt)), 'You selected ' + message);
    //var chartdata = selectimctable(menuid, subid, chartdiv);
    //if (chartdata.hasOwnProperty("event")) {
    //    eventInit(chartdiv, dt.getValue(selection[0].row, 0));
    //}


    var selection = drawcht.getChart().getSelection();
    var dt = drawcht.getDataTable();
    //click point row name
    var rname = dt.getValue(selection[0].row, 0), rfield;
    //click point row field
    if (cht.hasOwnProperty("layout")) {
        var lay = cht.layout;
        $(lay).each(function (i, k) {
            if (k.type == "Axis") {
                rfield = k.field;
            }
        });
    }
    var datalist = datalistreturn(data), keycode;
    //find reload mapping linkfield
    if (cht.hasOwnProperty("eventlist")) {
        var ev = cht.eventlist;
        $(ev).each(function (i, k) {
            if (k.command == "load")
                keycode = k.linkfield;
        });
    }
    var mapcode;
    $(datalist).each(function (i, k) {
        if (k[rfield] == rname) {
            mapcode = k[keycode];
        }
    });
    reloadexe(chartid, [{ code: keycode, value: [mapcode] }], 'link');
}
function modifyCtype(ctype) {
    //    if (ctype.indexOf("Chart") == -1)
    //        ctype += "Chart";
    //    return ctype.capitalize();
    return ctype;
}
function setChartView() {
    var state = columnFilter.getState();
    var row;
    var view = {
        columns: [0]
    };
    for (var i = 0; i < state.selectedValues.length; i++) {
        row = columnsTable.getFilteredRows([{ column: 1, value: state.selectedValues[i] }])[0];
        view.columns.push(columnsTable.getValue(row, 0));
    }
    // sort the indices into their original order
    view.columns.sort(function (a, b) {
        return (a - b);
    });
    chart.setView(view);
    chart.draw();
}
function setControl(ctrtype, filtercolumn, div) {
    // Create a date range slider
    var set = {};
    set.controlType = ctrtype;
    set.containerId = div;
    var opt = {};
    opt.filterColumnLabel = filtercolumn;
    var ui = {};
    ui.labelStacking = 'vertical';
    ui.allowTyping = false;
    ui.allowMultiple = true;
    ui.chartOptions = { chartArea: { width: '80%' } };
    opt.ui = ui;
    set.options = opt;

    var ctr = new google.visualization.ControlWrapper(set);

    return ctr;
}
function setChart(chttype, div, options) {
    var set = {};
    set.chartType = chttype;
    //set.dataTable=createTable();
    /*
    options.sortColumn=1;
    options.sortAscending= false;*/

    //options.chartArea = { left: 10, top: 20, width: "90%", height: "80%" };
    set.options = options;
    set.containerId = div;
    var cht = new google.visualization.ChartWrapper(set);
    return cht;
}
function googlechartList() {
    $("#dvChartDesign").hide();
    $("#dvChartlist").show();
    $("#inpList_cht").attr("onclick", "multipleEdit('')");
    $("#inpList_cht").attr("value", "New");
    $("#inpCancel_cht").hide();
    $("#inpSave_cht").hide();

    var gridid = "tbChartlist";
    var pagerid = "dvChartlistpager";

    $("#dvChartlist").append("<div style='text-align:right;padding-top:5px;'><Button onclick=\"googlechartDesign('')\">New</Button>&nbsp;" +
    "<Button onclick=\"multipleChartselect('" + gridid + "')\" >Select</Button></div>");
    //gridid,pagerid,data만으로 구성되는 data display용 jqgrid
    $("#" + gridid).jqGrid("GridUnload");

    var datasrc = localStorage.getItem("googlechart");
    datasrc = eval("(" + datasrc + ")");
    if (datasrc != null) {
        var li = [];
        $.each(datasrc, function (i, k) {
            if (i != "updated")
                li.push(k);
        });


        var colmodel = []; var colname = []; var dtarr = [];
        colname = ["id", "chartType", "title", "value", "axis", "series"]
        $.each(li[0], function (i, v) {
            var imsi = {};
            $.each(colname, function (j, col) {
                $.each(v, function (fname, vv) {
                    if (col == fname) {
                        imsi[fname] = vv;
                    }
                    if (col == "title" && fname == "options")
                        imsi.title = v.options.title;
                });
            });
            dtarr.push(imsi);
        });
        $.each(colname, function (i, fname) {
            var opt = { name: fname, width: 100 };
            switch (fname) {
                case "id":
                    opt.hidden = true;
                    break;
            }
            colmodel.push(opt);
        });
        colname.push('', '');
        colmodel.push({ name: 'edit', width: 15, sortable: false });
        colmodel.push({ name: 'del', width: 15, sortable: false });
        //opt:option 추가 사항
        var options = {
            colNames: colname,
            colModel: colmodel,
            datatype: "local",
            data: dtarr,
            height: "auto",
            multiselect: true,
            autowidth: true,
            rowNum: 5,
            rowList: [5, 10, 20, 30],
            pager: pagerid,
            //caption: "Data View",
            sortable: true,
            //onSelectRow: function (rowid) { console.log(jQuery("#" + gridid).getRowData(rowid).code) },
            gridComplete: function () {
                var selchtids = [];
                $.each(chtlist, function (i, k) {
                    selchtids.push(k.id);
                });
                var ids = jQuery("#" + gridid).jqGrid('getDataIDs');
                for (var i = 0; i < ids.length; i++) {
                    var cl = ids[i];
                    var rowarr = jQuery("#" + gridid).getRowData(cl);

                    if ($.inArray(rowarr.id, selchtids) > -1)
                        jQuery("#" + gridid).jqGrid('setSelection', cl);
                    ae = "<span class='ui-icon ui-icon-check'  onclick=\"googlechartEdit('" + rowarr.id + "');\"  />";
                    be = "<span class='ui-icon ui-icon-pencil'  onclick=\"googlechartDesign('" + rowarr.id + "');\"  />";
                    ce = "<span class='ui-icon ui-icon-trash'   onclick=\"chartDel('" + rowarr.id + "');\" />";
                    jQuery("#" + gridid).jqGrid('setRowData', ids[i], { edit: ae });
                }
            }
        };
        jQuery("#" + gridid).jqGrid(options);
        $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
            caption: "Edit",
            buttonicon: "ui-icon-circle-plus",
            onClickButton: function () {
                //multipleEdit('');
            },
            position: "last"
        });
    }
    else
        RenderGridBlank(gridid, pagerid);
}
function googleSortArray(sortlist, json) {
    //SORTING: data=googledata,sortlist=column Index+","+sort order;(comma & semicolon)

    var sortout = [];
    var srt = sortlist.split(';');
    for (i in srt) {
        var st = {};
        var srtt = srt[i].split(',');
        //st.column = parseInt(srtt[0]);
        var index = colindex(srtt[0], json);
        if (typeof (index) != "undefined") {
            st.column = index;
            switch (srtt[1]) {
                case "desc":
                    st.desc = true;
                    break;
                case "asc":
                    st.desc = false;
                    break;
            }
            sortout.push(st);
        }
    }

    function colindex(sr, json) {
        output = json;
        json = JSON.parse(JSON.parse(JSON.stringify(json))).cols;

        var out;
        $.each(json, function (i, k) {
            if (sr == k.label)
                out = i;
        });

        return out
    }
    return sortout;
}
var output;
function googleFilterArray(filterlist) {
    var srt = filterlist.split(';');
    var filterout = [];

    for (i in srt) {
        var st = {};
        var srtt = srt[i].split(',');
        st = {};
        st.column = parseInt(srtt[0]);
        var d = new Date(srtt[1]);
        if (srtt[2] == "") {
            st.value = srtt[1];
        }

        else {

            if ($.isNumeric(srtt[1])) {
                st.minValue = parseFloat(srtt[1]);
                st.maxValue = parseFloat(srtt[2]);
            }
            else if (d instanceof Date && d != "Invalid Date") {
                st.minValue = new Date(srtt[1]);
                st.maxValue = new Date(srtt[2]);
            }
        }


        filterout.push(st);
    }



    return filterout;
}
function googleGroupbyValueArray(axislist, valuelist) {

    var val = [];
    var vset = {};
    var vl = valuelist.split(';');
    for (var t in vl) {
        var tt = vl[t];
        if (typeof tt == "string") {
            tt = tt.split(',');
            var index = axislist.split(',').length + parseInt(t);
            var aggregate = tt[1];
            var labelname = tt[0];

            switch (aggregate) {
                case "sum":
                    val.push({ 'column': index, 'type': 'number', 'label': labelname, 'aggregation': google.visualization.data.sum });
                    break;
                case "avg":
                    val.push({ 'column': index, 'type': 'number', 'label': labelname, 'aggregation': google.visualization.data.avg });
                    break;
            }
        }
    }

    return val;
}
//#endregion

//#region jstree exe
function jstreeInit(id, options) {
    var gdt, editmode, contain = $("#" + id);
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("gdt")) gdt = options.gdt;
        if (options.hasOwnProperty("contain")) {
            contain = options.contain;
            gdt.contain = contain;
            //contain.empty();
        }
    }
    if (typeof gdt == "undefined") {
        if ($("#archivegdt").text() != "")
            var gdt = JSON.parse($("#archivegdt").text());
        else
            gdt = readdata(id, "gdt");
    }
    jstreeInitmake(gdt, contain);
}
function jstreeInitmake(gdt, contain) {
    jstreeInitmake.datasrc = datasrc;
    if (typeof gdt != "undefined") {
        var ctrdt, datacode = "", filter = "";
        if (gdt.hasOwnProperty("data")) {
            ctrdt = gdt.data;
            datacode = finddatacode(ctrdt);
            filter = ctrdt.filter;
        }
       if (datacode != "")
            jsonReadAjax("imcdata", "", "code", datacode, jstreeInitmake.datasrc, [gdt, filter,contain]);
    }
    function datasrc(dtsrc, gdt, filter,contain) {
        var dvid = $(contain).attr("id");
        var options = jstreeOptionmake(gdt);
        var dt, dtlist,dtlist1;
        dtlist = datalistreturn(dtsrc);
        dtlist1 = datalistreturn1(dtsrc);
        if (filter != "") dtlist = applyFilter(dtlist, filter);

        if (dtlist.length > 0 && !dtlist[0].hasOwnProperty("odr")) {
            $(dtlist1).each(function (i, k) {
                $(dtlist).each(function (a, b) {
                    if (k[options.value] == b[options.value])
                        b.odr = k.odr;
                });
            });
        }
        dt = jstreeData(dtlist, gdt.setting);
        dt.sort(function (a, b) {
            return parseFloat(a.odr) - parseFloat(b.odr);
        });
        var valuebox = "", display = "";
        if (gdt.hasOwnProperty("setting")) {
            var setting = gdt.setting;
            if (setting.hasOwnProperty("display")) display = setting.display;
            if (setting.hasOwnProperty("valuebox")) valuebox = setting.valuebox;
        }
         //gdt.options;
        if (gdt.hasOwnProperty("contain")) options.contain = gdt.contain;
        if (gdt.hasOwnProperty("eventlist")) 
            var event = gdt.eventlist;
            options.dtsrc = dtsrc;
            options.dtlist = applyFilter(datalistreturn(dtsrc), filter);
            options.dtlist = mergeorder(options.dtlist, dt, options);//copy odr into dtlist from dt(jstreeData)

            if ($("#" + dvid).length > 0) {
                // $("#" + dvid).empty();
                switch (options.display) {
                    case "dialog":
                        inputdialog(dvid, options);
                        break;
                    case "dropdown":
                        inputdropdown(dvid, options);
                        break;
                }

                loadtreewithdata1(dvid, dt, options); //plugin, textbox, valuebox, type)
            }
            setTimeout(function () {
                $(".jstree-icon.jstree-themeicon").each(function (i, k) {
                    var k1 = k;
                    var cls = $(k1).attr("class").replace("jstree-icon jstree-themeicon", "").replace("jstree-themeicon-custom", "");
                    if ($.trim(cls) == "fa")
                        $(k).css("display", "none");
                });
                //expand/collapse all btn insert
                $("#dvexpand").remove();
                var exp = $("<div id='dvexpand' class='imdim' style='margin:0 0 -5px 5px '/>");
                var ic = $("<i class='fa fa-plus-square fa-darkred'></i>");
                var tx = $("<label id='lbexpand' class='linkbtn'>expand all</label>");
                exp.append(ic).append(tx);
                exp.on("click", function () {
                    if (ic.hasClass("fa-plus-square")) {
                        jstr.jstree('open_all');
                        ic.removeClass("fa fa-plus-square").addClass("fa fa-minus-square");
                        tx.text("collapse all");
                    }
                    else {
                        jstr.jstree('close_all');
                        ic.removeClass("fa fa-minus-square").addClass("fa fa-plus-square");
                        tx.text("expand all");
                    }
                })
                if ($("#" + dvid).closest("table").attr("id") != "tblEditor")
                    actionbutton(dtsrc, dvid, gdt, $("#" + dvid));
                if ($("#top" + dvid).length > 0)
                    $("#top" + dvid).prepend(exp.css({float:"left"})).append($("<div style='clear:both'/>"));
                else
                    jstr.prepend(exp);
                if (options.display == "dropdown") {
                var w = $("#dv" + dvid + " .input-group").width();
                    $("#dvi" + dvid).css("width", w);
                }
                if (gdt.hasOwnProperty("callback") && typeof gdt.callback == "function") {
                    gdt.callback();
                }
            }, 3000);
    }
    function mergeorder(dtlist, jstreedt,options) {
        if (dtlist.length > 0 && !dtlist[0].hasOwnProperty("odr")) {
            $(jstreedt).each(function (i, k) {
                $(dtlist).each(function(a,b){
                    if (k.id == b[options.value])
                        b.odr = k.odr;
                });
            });
        }
        return dtlist;
    }
    function datalistreturn1(data) {
        if (data.dtype == "database") {
            if (data.hasOwnProperty("querylist")) {
                $(data.querylist).each(function (i, k) {
                    if (k.sqlcommand == "select") {
                        dtlist = k.datalist
                    }
                });
            }
        }
        else  dtlist = data.datalist
        return dtlist;
    }
}
function jstreePreview(gdt, dvid) {
    //var gdt = readdata(id, "gdt");
    //if (typeof gdt == "undefined")
    //    jsonReadAjax("imclist", "jstree", "code", id, archivejstree, [dvid]);
    //else
    //    archivejstree(gdt, dvid);
    // function archivejstree(gdt, dvid) {
    var jqset = saveTable("tes1");
    var setting = {}
    if (jqset.length > 0) {
        $.each(jqset, function (i, k) {
            var val = k[1];
            if (k[0] == "plugin")
                val = $("#selPlugin").multipleSelect("getSelects");
            setting[k[0]] = val;
        });
    }
    else
        setting = gdt.setting;
    var dsc = $("#spdataajax").text();
    if (dsc != "")
        datasrc(JSON.parse(dsc), setting, dvid);
    // }
    function datasrc(dtsrc, setting, dvid) {
        // var dt = dtsrc.datalist;
        var dtlist = $("#spdlist").text();
        if (dtlist != "") dtlist = JSON.parse(dtlist);
        //var dt = applyFilterFromData(dtsrc, dtlist);
        //console.log(dt)
        var dt = jstreeData(dtlist, setting);
        if (typeof dvid == "undefined") {
            dvid = "dvtx";
            $("#dvtx").attr("id", "dvtx1");
            $("#dvdvtx").attr("id", "dvtx1");
            $("<div id='dvtx' style='padding:10px 0 0 0'/>").insertAfter($("#dvtx1"));
            $("#dvtx1").remove();
        }
       
        loadtreewithdata1(dvid, dt, setting);
    }
    jstreePreview.datasrc = datasrc;
    // jstreePreview.archivejstree = archivejstree;
}
function jstreeData(src, setting) {
    //field=["parent","value","text","topnode","topnodename"]
    //extract all data
    var data = [];
    var set = {};
    var pic = {}, top = "", parent = "", def = "", pcode, value;
    if (typeof setting != "undefined") {
        if (setting.hasOwnProperty("iconpic")) {
            if (setting.iconpic != "") {
                pic = JSON.parse(setting.iconpic);
                if (pic.hasOwnProperty("Top")) top = pic.Top;
                if (pic.hasOwnProperty("Parent")) parent = pic.Parent;
                if (pic.hasOwnProperty("Default")) def = pic.Default;
            }
        }
        if (setting.hasOwnProperty("parent")) pcode = setting.parent;
        if (setting.hasOwnProperty("value")) value = setting.value;
        if (setting.hasOwnProperty("topnode") && setting.topnode != "") {
            var topid = setting.topnode, newsrc = [];
            recurchild(src, topid, pcode, newsrc);
            //include self(topid)
            var selfdt = $.grep(src, function (a) {
                return a[value] == topid;
            });
            if (selfdt.length > 0) {
                var ns = selfdt[0];
                ns[pcode] = "#";
            }
            else {
                ns = {};
                ns[pcode] = "#";
                ns[value] = topid;
                ns[setting.text] = "Top";
            }
            newsrc.push(ns);
            src = newsrc;
        }

     
        $(src).each(function (i, k) {
            set = {};
            set.id = k[setting.value];//.toLowerCase();
            set.text = k[setting.text];
            set.parent = parentfind(src, k[setting.parent]);//.toLowerCase());
            if (setting.hasOwnProperty("order") && setting.order !="")
                set.odr = parseInt(k[setting.order]);
            else if (k.hasOwnProperty("odr")) set.odr = parseInt(k.odr);
            else
                set.odr = orderfind(data, set.parent);
            if (k.hasOwnProperty("icon") && k.icon != "")
                set.icon = "fa " + pic[k.icon];
            else {
                if (def != "")
                    set.icon = def;

                if (hasChild(src, set.id,setting) && parent != "") {
                    if (parentfind(src, k[setting.parent]) == "#" && top != "")
                        set.icon = top;
                    else
                        set.icon = parent;
                }
                if (setting.topnode.toLowerCase() == set.id.toLowerCase() && top != "") set.icon =  top;
            }
            data.push(set);
        });
        function hasChild(src, node,setting) {
            var chk = false;
            $(src).each(function (i, k) {
                if (setting.hasOwnProperty("parent") && node.toLowerCase() == k[setting.parent].toLowerCase())
                    chk = true;
            });
            return chk;
        }
        function parentfind(src, pcode) {
            var rtn = pcode, exist = false;
            $(src).each(function (i, k) {
                if (k[value].toLowerCase() == pcode.toLowerCase())
                    exist = true;
            });
            if (!exist) rtn = "#";
            return rtn;
        }
        function orderfind(src, pval) {
            var sib = $.grep(src, function (a) {
                return a["parent"] == pval;
            });
            return sib.length;
        }
        //extract below top node
        var jstrdata = [];
        checkparent(data, setting.topnode, jstrdata);
        function checkparent(src, topvalue, jstrdata) {
            //recursively extract children nodes below topvalue
            $(src).each(function (i, k) {
                if (k.parent == topvalue) {
                    jstrdata.push(k);
                    checkparent(src, k.id, jstrdata);
                }
            });
        }
        function recurchild(data, pid, pcode, newsrc) {
            $(data).each(function (i, k) {
                var exist = $.grep(newsrc, function (a) {
                    return a[value] == k[value];
                });
                if (exist.length == 0 && k[pcode] == pid) {
                    newsrc.push(k);
                    recurchild(data, k[value], pcode, newsrc);
                }
            });
        }
    }
    data.sort(function (a, b) {
        return a["one"] - b["one"] || a["odr"] - b["odr"];
    });
    // data =  [{"id":"1","text":"Top Menu","parent":"#","icon":"fa fa-home"},{"id":"j4_1","text":"page2","parent":"1","icon":"fa fa-times-circle","permissionname":"","permission":""},{"id":"j16011219161","text":"page2222","parent":"1","icon":"fa fa-align-justify","permissionname":"User,free","permission":"CommonUsers,SL00000001"},{"id":"j6_1","text":"test123","parent":"j16011219161","icon":"fa fa-align-justify","permissionname":"","permission":""}]
    return data;
}
function jstreeOptionmake(gdt) {
    var rtn = {};
    rtn.ajax = true;
    // var ctr = readdata(id,'gdt');
    if (gdt.hasOwnProperty("setting")) {
        var parent = "", topnode = "", topname = "Top", value = "", text = "", button = false, width = "150", textbox = "textlist", valuebox = "valuelist", display = "none", plugin = [], icon = "";
        var st = gdt.setting;
        if (st) {
            if (st.hasOwnProperty("parent")) rtn.parent = st.parent;
            if (st.hasOwnProperty("topnode")) topnode = st.topnode;
            if (st.hasOwnProperty("topname")) topname = st.topname;
            if (st.hasOwnProperty("value")) rtn.value = st.value;
            if (st.hasOwnProperty("text")) rtn.text = st.text;
            if (st.hasOwnProperty("order")) rtn.odr = st.order;
            if (st.hasOwnProperty("valprefix")) rtn.valprefix = st.valprefix;
            if (st.hasOwnProperty("width")) rtn.width = st.width;
            if (st.hasOwnProperty("textbox")) rtn.textbox = st.textbox;
            if (st.hasOwnProperty("valuebox")) rtn.valuebox = st.valuebox;
            if (st.hasOwnProperty("title")) rtn.title = st.title;
            if (st.hasOwnProperty("display")) rtn.display = st.display;
            if (st.hasOwnProperty("plugin") && st.plugin != null) rtn.plugin = $.merge(plugin, st.plugin);
            if (st.hasOwnProperty("icon")) rtn.icon = st.icon;
        }

    }
    if (gdt.event) {
        if (gdt.event.hasOwnProperty("button"))
            rtn.button = gdt.event.button;
    }
    if (gdt.hasOwnProperty("data"))
        rtn.data = gdt.data;
    return rtn;
}
var jstr, updatejs = 'no', jstreeval; //updatejs:yes일 경우 신규생성, 아니면 jstree reload
function loadtreewithdata1(jstreeid, jstreedata, options) {
    //plugin, textbox, valuebox, type) {
    //jstreeid:<div id="dvprodtree">,data:"prodlist":[{"id":"PD00000000","text":"Product","parent":"#","state":{"opened":true}}
    //,{"id":"PD00000228","text":"원데이아큐브","parent":"PD00000229"}]
    //plugin:["checkbox","DnD"....], textbox:
    //$.mobile.loading('hide');
    //if ($.jstree.reference($('#' + jstreeid))) {
    //    $('#' + jstreeid).jstree().delete_node($('#' + jstreeid).jstree().get_json());
    //}
    $('#' + jstreeid).jstree('destroy');
    if (options.hasOwnProperty("contain"))
        jstr = options.contain;
    else if (typeof options != "undefined" && options.idtype == "object")
        jstr = jstreeid;
    else
        jstr = $('#' + jstreeid);
    var editnode = "";
    var op = {};
    op.core = {
        'data': jstreedata
            , "check_callback": true
        , "initially_open": ["root"]
        , 'themes': {
            'name': 'proton',
            'responsive': true
        }
    };
    if (options.hasOwnProperty("plugin")) op.plugins = options.plugin;
    if (options.hasOwnProperty("types")) op.types = options.type;
    if (options.hasOwnProperty("contextmenu")) {
    op.contextmenu = {
        "items": customMenu1
    };
    }
    jstr.jstree(op);
    jstr.on("move_node.jstree", function (e, data) {
        // move_item(data.node.id, data.old_parent, data.parent, data.old_position, data.position);
        update_item(data, options, "move");
    });
    jstr.on("loaded.jstree", function (event, data) {
        //$(this).jstree("open_all");
        var depth = 3;
        data.instance.get_container().find('li').each(function (i) {
            if (data.instance.get_path($(this)).length <= depth) {
                data.instance.open_node($(this));
            }
        });
    });
    jstr.on('changed.jstree', function (e, data) {
        var i, r = [];
        var n = [];

        for (i in data.selected) {
            var val = data.instance.get_node(data.selected[i]);
            if (typeof val.id != "undefined") {
                r.push(val.id);
                n.push(val.text);
            }
        }
        if (options.display != "none") {
            var lbl = $("#" + options.textbox);
            switch (lbl.get(0).nodeName) {
                case "LABEL":
                    lbl.text(trimtxt(n, 15));
                    break;
                case "INPUT":
                    lbl.val(trimtxt(n, 15));
                    break;
            }
            jstreeval = r.join(',');
            var val = document.getElementById(options.valuebox);
            val.value = r.join(',');
        }
        var plugin = [], newplugin = [];
        if (options.hasOwnProperty("plugin")) {
            plugin = options.plugin;
            $(plugin).each(function (i, k) {
                newplugin.push($.trim(k));
            });
        }
        //children of r
        var cnode = data.node.children;
        var combine = $.merge(r, cnode);
        console.log('jstreeid', jstreeid, 'code', options.value, 'value', combine, 'parent', options);
        console.log([{ code: options.value, value: combine }
               , { code: options.parent, value: [data.node.parent] }
               , { code: options.text, value: [data.node.text] }])
        if (window.event.which == 1)
            reloadexe(jstreeid, [{ code: options.value, value: combine }
                , { code: options.parent, value: [data.node.parent] }
                , { code: options.text, value: [data.node.text] }], 'link');
    });
    jstr.on('rename_node.jstree', function (e, data) {
        var parent = data.node.parent;
        if (parent == '#') {
            parent = 0;
        }
        if (editnode == data.node.id) {
            //update_item('update', data.node.parent, data.node.id, data.node.text);
            editnode = '';
        }
        else
            editnode = data.node.id;
        // console.log(data, data.node.text)
        update_item(data, options,"rename");

    });
    jstr.on('create_node.jstree', function (e, data) {
        if (options.hasOwnProperty("valprefix")) {
            var newid=options.valprefix+idMake(5);
            jstr.jstree(true).set_id(data.node.id,newid );
            data.node.id = newid;
        }
       
        update_item(data, options, "create");
        editnode = data.node.id;
    });
    jstr.on('delete_node.jstree', function (e, data) {
        delete_item(data, options,"delete");
    });
    //jstr.on("open_node.jstree", function (e, data) {
    //    setTimeout(function () {
    //        $(".jstree-icon.jstree-themeicon").each(function (i, k) {
    //            var k1 = k;
    //            var cls = $(k1).attr("class").replace("jstree-icon jstree-themeicon", "").replace("jstree-themeicon-custom", "");
    //            if ($.trim(cls) == "fa")
    //                $(k).css("display", "none");
    //        });
    //    }, 0);
    //});
    //newly create할 때만 생성, node create후 reload할 때는 중지
    //if (updatejs == "no")
    //switch (options.display) {
    //    case "dialog":
    //        inputdialog(jstreeid, options.textbox, options.valuebox);
    //        break;
    //    case "dropdown":
    //        inputdropdown(jstreeid, options);
    //        break;
    //}
   

    function jstreeorderchg(dtlist, data, options,uptype) {
        var curid = data.node.id, curpos = data.position, oldpos = data.old_position
            , oldpval = data.old_parent, curpval = data.parent
        , pcode = options.parent, code = options.value, odr = options.odr, pos;
        if (odr == "") odr = "odr";
       // console.log(data, curid, curpos, oldpos, oldpval, curpval, pcode, code, odr)
        var curparent = data.instance.get_node(data.parent);
        console.log(options)
        $(curparent.children).each(function (i, k) {
            chgodr(dtlist, code, k,i);
        })
        function chgodr(dtlist, codename, val, odrnum) {
            $(dtlist).each(function (i, k) {
                if (k[codename] == val)
                    k[odr] = odrnum;
            })
        }
        if (oldpval != curpval && uptype=="move") {
            var oldsib = $.grep(dtlist, function (a) {
                return a[pcode] == oldpval;
            });
            $(oldsib).each(function (i, k) {
                k[odr] = i
            });
        }
      
        return dtlist;
    }
    function update_item(data, options,uptype) {
        var inputobject = {}, odrname="odr",replaceobject;
        inputobject[options.value] = data.node.id;
        inputobject[options.text] = data.node.text;
        inputobject[options.parent] = data.node.parent;
        if (options.hasOwnProperty("odr") && options.odr!="") odrname = options.odr;
        if(typeof data.position!="undefined")
        inputobject[odrname] = data.position;
       
       // console.log(data.position, data.old_position, data.old_parent, data.parent)
        var dtlist = options.dtlist;
        var dtsrc = options.dtsrc;
        var datacode = finddatacode(dtsrc);
  
        var chk = false;
        $(dtlist).each(function (i, k) {
            if (multikeycheck(k, inputobject, [options.value])) {
                var objlist = Object.keys(inputobject);
                $(objlist).each(function (a, b) {
                    k[b] = inputobject[b];
                });
                chk = true;
                replaceobject = k;
            }
        });
        if (!chk) dtlist.push(inputobject);
        if($.inArray(uptype,["remove","create","delete"])>-1)
        dtlist=jstreeorderchg(dtlist, data, options,uptype);
       // console.log(dtlist)
        if (dtsrc.hasOwnProperty("querylist") && dtsrc.querylist.hasOwnProperty("select"))
            dtsrc.querylist.select.datalist = dtlist;
        else
            dtsrc.datalist = dtlist;

        var myinfo = getlogin().comp;
        jsonUpdateMyAjax("imcdata", myinfo, dtsrc, "", "code", datacode);
     
        switch (dtsrc.dtype) {
            case "database":
                //var paramlist = {}, plist = {};
                //paramlist.connection = dtsrc.connectstring;
                //plist.query = dtsrc.querylist.query;
                //plist.param = dtsrc.querylist.param;
                //plist.dtype = "update";
                //plist.sqlcommand ="update";
                //paramlist.querylist = plist;
                //jsonDatabaseAjax(paramlist);
                ////console.log(paramlist)
                break;
            case "input":
                //incase input type && if has datamanagement run below
                var keycode = findinputkeycode(dtsrc);
               
                if (keycode != "" && dtsrc.hasOwnProperty("update") && uptype!="create") {
                    var upd = dtsrc.update.replace("udata", JSON.stringify(replaceobject));
                    upd = upd.replace("keyvalue", '"' + multikeyvaluemake(inputobject, keycode) + '"');
                    eval(upd);
                }
                break;
        }
    }
    function delete_item(data, options) {
        var dtlist = options.dtlist;
        var dtsrc = options.dtsrc;
        var datacode = finddatacode(dtsrc);
        var inputobject = {};
        inputobject[options.value] = data.node.id;
        $(dtlist).each(function (i, k) {
            if (multikeycheck(k, inputobject, [options.value])) {
                dtlist.splice(i, 1);
            }
        });
        if (dtsrc.hasOwnProperty("querylist") && dtsrc.querylist.hasOwnProperty("select"))
            dtsrc.querylist.select.datalist = dtlist;
        else
            dtsrc.datalist = dtlist;
        var myinfo = getlogin().comp;
        jsonUpdateMyAjax("imcdata", myinfo, dtsrc, "", "code", datacode);
        //jsonDelMyAjax("imcdata", myinfo, "", "code", datacode);
        var keycode = findinputkeycode(dtsrc);
        console.log(keycode)
        if (keycode != "" && dtsrc.dtype == "input" && dtsrc.hasOwnProperty("delete")) {
            var upd = dtsrc.delete.replace("keyvalue", '"'+multikeyvaluemake(inputobject, keycode)+'"');
            console.log(upd);
        }
    }
    function customMenu1($node) {
        var tree = jstr.jstree(true);
        var items = {
            "Create": {
                "separator_before": false,
                "separator_after": false,
                "label": "Create",
                "action": function (obj) {
                    $node = tree.create_node($node);
                    tree.edit($node);
                }
            }
            , "Rename": {
                "separator_before": false,
                "separator_after": false,
                "label": "Rename",
                "action": function (obj) {
                    tree.rename_node($node);
                    tree.edit($node); //puts the node into edit mode

                }
            }
            , "Remove": {
                "separator_before": false,
                "separator_after": false,
                "label": "Remove",
                "action": function (obj) {
                    if (confirm('Are you sure to remove this category?')) {
                        tree.delete_node($node);
                       // delete_item($node.id);
                    }
                }
            }
        }
        return items;
    }
    function trimtxt(txt, lth) {
        var rtn = "";
        if (txt.join(',').length > lth) {
            rtn = txt.join(',').substring(0, lth) + "...(Total: " + txt.length + ")";
        }
        else rtn = txt;
        return rtn;
    }
    return jstr;
}


//#endregion

//#region fullCalendar exe
var fulldatalist = [], fulldata, mapfield;
function fullCalendarInit(dvid, options) {
    var preview=false,gdt, editmode, contain = $("#" + dvid);
    fullCalendarInit.datasrc = datasrc;
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("gdt")) gdt = options.gdt;
        if (options.hasOwnProperty("contain")) {
            contain = options.contain;
            contain.empty();
            preview = true;
        }
    }
    if (typeof gdt == "undefined") {
        if ($("#archivegdt").text() != "")
            var gdt = JSON.parse($("#archivegdt").text());
        else
            gdt = readdata(dvid, "gdt");
    }
    if (typeof gdt != "undefined") {
        var ctrdt, datacode = "", filter = "";
        if (gdt.hasOwnProperty("data")) {
            ctrdt = gdt.data;
            if (ctrdt.hasOwnProperty("datacode")) {
                datacode = ctrdt.datacode;
                filter = ctrdt.filter;
            }
        }
        if (datacode != "")
            jsonReadAjax("imcdata", "", "code", datacode, fullCalendarInit.datasrc, [dvid, gdt, filter, contain]);
        else
            datasrc("", dvid, gdt, filter, contain);
    }
    function datasrc(data, dvid, gdt, filter, contain) {
        var dt = "", mappeddt = "", field = "";
        if (data != "") {
            dt = datalistreturn(data);
            fulldatalist = dt;
            if (filter != "")
                dt = applyFilter(fulldatalist, filter);
            fulldata = data;
        }
        if (gdt.hasOwnProperty("setting") && gdt.setting.hasOwnProperty("field")) {
            field = gdt.setting.field;
            mapfield = field;
            mappeddt = calendardatamapping(field, dt);
            //fulldatalist = mappeddt;
        }
        //initCalendardata();
        Date.prototype.addMinutes = function (m) {
            this.setMinutes(this.getMinutes() + m);
            return this;
        }
        Date.prototype.addDays = function (days) {
            this.setDate(this.getDate() + days);
            return this
        }
        var extid = "dvExt" + dvid;
        var dropid = "drop-remove" + dvid;
        var wrap = $("<div class='wrap'/>"), ext = "";
        var devider = $("<div class='devider imdimmer' id='devider" + dvid + "' onclick=\"showExternal('" + dvid + "');\" class='imexpand'><img src='/images/Files-Add-List-icon.png' style='width:90%' /></div>");
        //var devider = $("<img class='imexpand' onclick=\"showExternal('" + dvid + "');\" src='/images/icon/application_side_list.png'  />");
        //var cb = $("<p><input id='"+dropid+"' type='checkbox'/><label for='"+dropid+"'>once</label></p>");
        var cal = $("<div id='cal" + dvid + "' />");
        cal.addClass("fullcalendar1");
        ext = makeSidebar(dvid, true, data);
        wrap.append(ext);
        wrap.append(cal);
        contain.empty();
        contain.append(wrap);
        $('#dvPicker' + dvid + ' .ui-datepicker').css({ 'width': '198px' });
        $('#dvPicker' + dvid + ' .ui-datepicker td a').css({ 'height': '25px' });
        
        var currentMousePos = {
            x: -1,
            y: -1
        };
        $(document).on("mousemove", function (event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
        });
        var isElemOverDiv = function (trashEl) {
            //var trashEl = jQuery('#calendarTrash');

            var ofs = trashEl.offset();
            var x1 = ofs.left;
            var x2 = ofs.left + trashEl.outerWidth(true);
            var y1 = ofs.top;
            var y2 = ofs.top + trashEl.outerHeight(true);
            if (currentMousePos.x >= x1 && currentMousePos.x <= x2 &&
                currentMousePos.y >= y1 && currentMousePos.y <= y2) {
                return true;
            }
            return false;
        }
        var st = "";//,list = readdata(dvid, "gdt");
        if (typeof gdt != "undefined")
            if (gdt.hasOwnProperty("setting")) {
                if (gdt.setting.hasOwnProperty("options")) {
                    st = gdt.setting.options;
                }
            }
        var width = "", firstday = "", alldayslot = true, alldaytext = "All Day", defaultview = "month", sidebarshow = false;
        if (st != "") {
            if (st.hasOwnProperty("Width")) width = st.Width;
            if (st.hasOwnProperty("Firstday")) firstday = st.Firstday;
            if (st.hasOwnProperty("AllDaySlot")) alldayslot = st.AllDaySlot;
            if (st.hasOwnProperty("AllDayText")) alldaytext = st.AllDayText;
            if (st.hasOwnProperty("defaultView")) defaultview = st.defaultView;
            if (st.hasOwnProperty("sideBarShow")) sidebarshow = st.sideBarShow;
        }
        var calopt={
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: new Date(),
            defaultView: defaultview,
            selectable: true,
            editable: true,
            selectHelper: true,
            eventLimit: true, // allow "more" link when too many events
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            firstDay: firstday,                         //---        0. 일요일
            weekends: true,
            allDaySlot: alldayslot,
            allDayText: alldaytext,
            axisFormat: 'hh:mm',
            slotMinutes: 30,
            defaultEventMinutes: 60,
            firstHour: 9,
            buttonText: { today: '오늘', month: '월', week: '주', day: '일' },
            select: function (start, end, allDay) {
                var sd = getLocalTimeFromGMT(start._d);
                var sd = new Date(sd);
                var outStr = sd.getHours() + ':' + sd.getMinutes() + ':' + sd.getSeconds();
                if (outStr == "0:0:0")
                    sd.setHours(sd.getHours() + 9);
                var ed = new Date(sd);
                ed.setHours(ed.getHours() + 1);
                sd = makeDateTime(sd);
                ed = makeDateTime(ed);
                eventPop(dvid, "", false, sd, ed, "", "");
            },
            eventClick: function (event, jsEvent, view) {
                var st = getLocalTimeFromGMT(event.start);
                var ed = getLocalTimeFromGMT(event.end);
                var id = event._id;
                var allday = event.allDay;
                var repeat = event.recur;
                var resource = event.resource;
                var src = findCalendarSrc(dvid, event._id, dt);

                eventPop(dvid, id, allday, st, ed, resource, repeat, event);
            },
            drop: function (date, allday, id) { // this function is called when something is dropped
                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');
                var copiedEventObject = $.extend({}, originalEventObject);

                var sd = getLocalTimeFromGMT(date);
                var sd = new Date(sd);
                var outStr = sd.getHours() + ':' + sd.getMinutes() + ':' + sd.getSeconds();
                if (outStr == "0:0:0")
                    sd.setHours(sd.getHours() + 9);
                var ed = new Date(sd);
                ed.setHours(ed.getHours() + 1);
                sd = makeDateTime(sd);
                ed = makeDateTime(ed);

                if ($("#" + dropid).is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    //$(copiedEventObject).remove();
                    $(this).remove();
                    //console.log($(this), $(copiedEventObject))
                }

                //eventPop(dvid, "", false, copiedEventObject.start, copiedEventObject.end, $(this).attr("id"), "", copiedEventObject);
                eventPop(dvid, "", false, sd, ed, $(this).attr("id"), "", copiedEventObject);
                //var chname = findimcsettingvalue("code", $(this).attr("id"), "name", selectimc("imcsetting", "mychan"));
                $("#eventTitle").val($(this).text());
            },
            eventDrop: function (event, delta, revertFunc) {
                var allday = event.allDay;
                var st = getLocalTimeFromGMT(event.start);
                var ed = getLocalTimeFromGMT(event.end);

                var id = event.id;
                var resource = event.resource;

                var eventData = {
                    id: id,
                    title: event.title,
                    allDay: event.allDay,
                    start: st,
                    end: ed,
                    recurrence1: event.recurrence1,
                    resource: event.resource
                };
                if (!allday) {
                    if (ed == "1970/01/01 00:00") {
                        var date = new Date(st);
                        eventData.end = makeDateTime(date.addMinutes(60));
                    }
                }
                updateCalendarSrc(dvid, eventData);
            },
            eventResize: function (event, delta, revertFunc) {
                var st = getLocalTimeFromGMT(event.start);
                var ed = getLocalTimeFromGMT(event.end);
                var id = event.id;

                var allday = event.allDay;
                var resource = event.resource;
                var eventData = {
                    id: id,
                    title: event.title,
                    allDay: event.allDay,
                    start: st,
                    end: ed,
                    recurrence1: event.repeat,
                    resource: event.resource
                };
                updateCalendarSrc(dvid, eventData);
                cal.fullCalendar('updateEvents', eventData);
            },
            eventRender: function (event, element, view) {
                //            return (event.ranges(function (range) {
                //                return (event.start.isBefore(range.end) &&
                //                    event.end.isAfter(range.start));
                //            }).length) > 0;

                //            var originalClass = element[0].className;
                //            element[0].className = originalClass + ' hasmenu';
                //            var date = new Date(); //this is your todays date
                //
                //            if (event.start >= date) {
                //                $(element).css("backgroundColor", "#AD616B");
                //                $(element).css("borderColor", "#AD616B");
                //            }
                //             element.qtip({
                //                content: event.sdesc
                //            });
                if (typeof event.recurrence1 != "undefined" && event.recurrence1 != "") {

                    switch (view.name) {
                        case "month":
                            element.find('.fc-title').parent().append($("<span style='float:right;padding:2px 5px 0 0;'><i class=' fa fa-repeat'/></span>"));
                            break;
                        case "agendaDay": case "agendaWeek":
                            element.find('.fc-title').parent().append($("<div style='float:left;padding:2px 5px 0 0;'><i class=' fa fa-repeat'/></div>"));
                            break;
                    }
                }
                //            if (view.name == 'agendaDay') { // If day view
                //                element.find('.fc-time').remove(); // Remove the original time element
                //                element.prepend( // Add start and end
                //                    "<span>" + event.start.format('MMM D') + // Format however you want
                //                    "-</span><span>" + event.end.format('MMM D') + "<i class=' fa fa-repeat'/></span>");
                //            }
            },
            eventDragStop: function (event, jsEvent, ui, view) {

                var x = isElemOverDiv($('#dvTrash' + dvid));
                var y = isElemOverDiv($('#calendarTrash' + dvid));
                if (x | y) {
                    cal.fullCalendar('removeEvents', event.id);

                    if (field != "") {
                        var deldata = deleteimcdatalist(fulldata, field.id, event.id);

                        jsonUpdateAjax("imcdata", "", JSON.stringify(deldata), "code", deldata.code);
                        remoteDel(event.id);
                    }

                }
            },
            dayRender: function (day, cell) {
                var originalClass = cell[0].className;
                cell[0].className = originalClass + ' hasmenu';
            },
            eventSources: [{
                events: function (from, to, timezone, callback) {
                    from1 = from;
                    to1 = to;
                    var events = [];
                    var dtlist = makeCalrendardata(dvid, mappeddt);

                    events = getRepeatList(dtlist, from, to);
                    callback(events);
                }
            }]
        }
        cal.fullCalendar(calopt);
        if (htdefine != "") {
            var htnum = parseInt(htdefine.replace("px", "").replace("%", "").replace("em", ""));
            cal.css({ height: htdefine });
            cal.fullCalendar('option', 'height', htnum);
        }
      
        if (!preview) {
            //wrapping calendar with tab control
            var indv=$("#" + dvid + ">div")
            wrapcontrol(dvid, "calendar", indv,"", fullCalendarresize,[cal]);
            if($("#lastdv").length==0)
                indv.append($("<div id='lastdv' style='clear:both'/>"))
        }
        //end of calendar
        var caldata1 = [
    {
        // a recurring event
        title: 'Event1',
        start: '10:00',
        end: '14:00',
        dow: [1, 4], // Repeat monday and thursday
        ranges: [{ //repeating events are only displayed if they are within one of the following ranges.
            start: moment().startOf('week'), //next two weeks
            end: moment().endOf('week').add(0, 'd')
        }, {
            start: moment('2015-02-01', 'YYYY-MM-DD'), //all of february
            end: moment('2015-02-01', 'YYYY-MM-DD').endOf('month')
        }],

        exception: ['date', 'dow'],
        backgroundColor: "#FFF880",
        borderColor: "#FFF880",
        textColor: "black"
    },
    {
        // specific date event will be the unique for this day, no Event1
        title: 'Event2',
        start: '2015-06-20T11:00:00',
        end: '2015-06-20T13;00:00',
        backgroundColor: "#609060",
        borderColor: "#609060"
    },
    {
        // specific dow event will be unique for dow 0, no Event1
        title: 'Event3',
        start: '12:00',
        end: '13;00',
        dow: [1, 3],
        backgroundColor: "#9A9A9A",
        borderColor: "#9A9A9A",
        textColor: "black",
        ranges: [{
            start: moment('2015-06-21', 'YYYY-MM-DD'), //all of february
            end: moment('2015-06-21', 'YYYY-MM-DD').endOf('month')
        }]
    }
        ];

        function eventPop(dvid, id, allday, sd, ed, resource, repeat, event) {
            var sname = "", scode = "";
            var resarr = [];
            if (resource != "" && typeof resource != "undefined") resarr = resource.split(',');
            if (typeof resource != "undefined" && resource.length > 0) sname = resource[0]
            if ($("#tbPop").length > 0) $("#tbPop").remove();
            var dvpop = $("<div id='tbPop'/>");
            var calpop = $("<table style='width:100%'/>");
            calpop.append($("<tr><td style='width:60px'></td><td><label id='eventtype'></label></td></tr>"));
            calpop.append($("<tr><td>ID:</td><td><label id='eventid'/></label></td></tr>"));
            calpop.append($("<tr><td>Title:</td><td><input id='eventTitle'/></td></tr>"));
            calpop.append($("<tr><td>All Day:</td><td><input id='allday' type='checkbox' onchange=\"allday_change('" + dvid + "')\"/></td></tr>"));
            calpop.append($("<tr><td>Start:</td><td><input id='startTime' class='dpick'/></td></tr>"));
            calpop.append($("<tr><td>End:</td><td><input id='endTime' class='dpick'/></td></tr>"));
            calpop.append($("<tr><td>Calendar:</td><td><div id='jsCalendar'/></td></tr>"));
            calpop.append($("<tr><td>Repeat:</td><td><input type='checkbox' id='cbRepeat' onclick='cbRepeat_change()' /></td></tr></table>"));
            dvpop.append(calpop);
            var dv = $("<div  class='repeat'/>");
            calpop = $("<table/>");
            dv.append(calpop);
            dvpop.append(dv);

            calpop.append($("<tr><td style='width:60px'>Repeat:</td><td><select id='selRepeat' onclick='selRepeatChange();'/></td></tr>"));
            calpop.append($("<tr><td>Interval:</td><td><select id='selEvery' /><label/></td></tr>"));
            calpop = $("<table  id='trweek' style='display:none'/>");
            dv.append(calpop);
            var wk = "<tr><td style='width:60px'>On Day:</td><td><table><tr>" +
            "<td><label for='weekly_0'><input type='checkbox' class='week' id='weekly_0' />Sun</label></td>" +
            "<td><label for='weekly_1'><input type='checkbox' class='week' id='weekly_1' />Mon</label></td>" +
            "<td><label for='weekly_2'><input type='checkbox' class='week' id='weekly_2' />Tue</label></td>" +
            "<td><label for='weekly_3'><input type='checkbox' class='week' id='weekly_3' />Wed</label></td>" +
            "<td><label for='weekly_4'><input type='checkbox' class='week' id='weekly_4' />Thu</label></td>" +
            "<td><label for='weekly_5'><input type='checkbox' class='week' id='weekly_5' />Fri</label></td>" +
            "<td><label for='weekly_6'><input type='checkbox' class='week' id='weekly_6' />Sat</label></td></tr></table></td></tr>";
            calpop.append($(wk));
            var now = $.datepicker.formatDate('yy/mm/dd', new Date());
            var range = "<tr><td style='vertical-align:top;width:60px;'>End:</td><td><div id='range' style='display:block'>" +
            "<div style='border-bottom: 2px solid #d0d0d0; margin-top:10px; margin-bottom: 10px;'></div>" +
            "<label for='repeat_indefinitely'><input type='radio' name='repeat_range' id='repeat_indefinitely' />Repeat indefinitely</label><br />" +
            "<label for='repeat_until'><input type='radio' name='repeat_range' id='repeat_until' />Repeat until: </label><input id='repeat_until_value' style='width: 130px;' value='" + now + "'/><br />" +
            "<label for='repeat_times'><input type='radio' name='repeat_range' id='repeat_times' />Repeat </label><input id='repeat_times_value' style='width: 20px;' /> time(s).<br />" +
            "</div></td></tr>";
            calpop = $("<table/>");
            dv.append(calpop);
            calpop.append($(range));
            var wth = 550;
            if (isMobile()) wth = $("body").width() - 50;
            dvpop.dialog({
                width:wth,
                autoResize: true,
                modal: false,
                overlay: {
                    backgroundColor: "#000000",
                    opacity: 0.5
                },
                autoOpen: true,
                title: "Schedule Edit",
                stack: false,
                hide: {
                    effect: "explode",
                    duration: 1000
                },
                buttons: [
                    {
                        text: "Save",
                        icons: {
                            primary: "ui-icon-check"
                        },
                        click: function () {
                            calSave(dvid, event);
                            $(this).dialog('destroy').remove();
                        }
                    },
                    {
                        text: "Cancel",
                        icons: {
                            primary: "ui-icon-close"
                        },
                        click: function () {
                            $(this).dialog('destroy').remove();
                        }
                    }
                ]
            });
            dvpop.dialog("option", "position", 'center');
            styleInsert("dialog-css", ".ui-dialog { z-index: 1000 !important ;}");
            $("input:checkbox[id='allday']").attr("checked", allday);
            $("#startTime").val(sd);
            $("#endTime").val(ed);
            dtpick("#startTime");
            dtpick("#endTime");
            dtpick("#repeat_until_value");

            if (id != "") {
                var src = findCalendarSrc(dvid, id, dt);
                //$("#eventid").html(id);
                //$("#eventTitle").val(src.title);
                if (typeof event != "undefined") {
                    $("#eventid").html(event._id);
                    $("#eventTitle").val(event.title);
                }
                $("#eventtype").html("updateEvent");
                allday_change(dvid);
            }
            else {
                id = 'c' + idMake();
                $("#eventid").html(id);
                $("#eventtype").html("renderEvent");
            }
            var ext = selectimc("imcsetting", "mychan");

            populate(ext, "selChan", "select", resource);
            $('.repeat').css("display", "none");
            var rep = "", every = "", rpttype = "", range = "indefinitedly", until = "";
            if (typeof repeat != "undefined" && repeat != "") {
                var repeat = JSON.parse(repeat);
                $("input:checkbox[id='cbRepeat']").attr("checked", true);

                $('.repeat').css("display", "block");
                if (repeat.hasOwnProperty("days")) {
                    $(repeat.days).each(function (i, k) {
                        $($("input:checkbox[class='week']")[k]).attr("checked", true)
                    });
                }
                var ind = 0;
                $("#repeat_until_value").val("");
                $("#repeat_times_value").val("");
                switch (repeat.range) {
                    case "until":
                        $("#repeat_until_value").val(repeat.until);
                        ind = 1;
                        break;
                    case "times":
                        ind = 2;
                        $("#repeat_times_value").val(repeat.times);
                        break;
                }
                $($("input:radio[name='repeat_range']")[ind]).attr("checked", true);
                setTimeout(function () {
                    $("#selRepeat").val(repeat.type);
                    if (repeat.type == "weekly") {
                        $("#trweek").show();
                    }
                    $("#selEvery").val(repeat.every);
                }, 0);
            }

            //calendar jstree
            var data = [], list, jsopt = { textbox: "lbCalendar", valuebox: "inNodevalue2", display: "dialog" };
            jsopt.plugin = ["checkbox"];
            //$("<input id='inNodevalue2' type='hidden' />").appendTo($('body'));
            list = selectimctable(menuid, subid, dvid).setting.field.mycal;

            data.push({ "id": "0", "text": "Top", "parent": "#" });
            $.each(list, function (i, k) {

                var set = {};
                set.id = k.id;
                if (k.hasOwnProperty("title")) set.text = k.title;
                set.parent = "0";
                if ($.inArray(set.id, resarr) > -1)
                    set.state = { opened: true, selected: true };

                if (k.hasOwnProperty("colorlist"))
                    if (k.colorlist.length > 0) {
                        $(k.colorlist).each(function (j, l) {
                            var set = {};
                            set.id = l[0];
                            set.text = l[1];
                            set.parent = k.id;
                            if ($.inArray(l[0], resarr) > -1)
                                set.state = { opened: true, selected: true };
                            data.push(set);
                        });
                    }
                data.push(set);
            });

            loadtreewithdata1("jsCalendar", data, jsopt);
            $("#jsCalendar").jstree("remove", "#0");
            if (typeof resource != "undefined" && resource != "") {
                $("#inNodevalue2").val(resource);
                $("#lbCalendar").text(resource);
                $(resarr).each(function (i, k) {
                    $("#jsCalendar").jstree("select_node", k);
                });
            }
            // end of calendar

            populate([{ code: "daily", name: "Day" }, { code: "weekly", name: "Week" }, { code: "monthly", name: "Month" }], "selRepeat", "select", repeat);
            var date1 = [];
            for (i = 1; i < 30; i++) {
                var set = {};
                set.code = i;
                set.name = i;
                date1.push(set)
            }
            populate(date1, "selEvery", "select", "");
            $("#eventContent").attr('style', 'width:300px;height:300px;padding:20px;display:block;position:absolute;top:50%;left:50%;background-color:white;border:solid 1px black;z-index:1002;');
            $("#eventContent").draggable().resizable();


        }
        /* initialize the external events
        -----------------------------------------------------------------*/
        $("#" + extid + " .fc-event").each(function () {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
        $('.fc-left').prepend("<div id='calendarTrash" + dvid + "' class='imdimmer'><img src='/images/cal-trash.png' ></img></div>");
        $(".fc-left").prepend(devider);
        //when click calendar next prev button affect datepicker too
        $('.fc-prev-button').click(function () {
            var date1 = cal.fullCalendar('getDate');
            var dt = getLocalTimeFromGMT(date1._d);
            dt = new Date(dt);

            $('#dvPicker' + dvid).datepicker('setDate', dt);
            dpickStyle(dvid);
        });
        $('.fc-next-button').click(function () {
            var date1 = cal.fullCalendar('getDate');
            var dt = getLocalTimeFromGMT(date1._d);
            dt = new Date(dt);
            $('#dvPicker' + dvid).datepicker('setDate', dt.addDays(1));
            dpickStyle(dvid);
        });
        $('.fc-today-button').click(function () {
            var date1 = cal.fullCalendar('getDate');
            var dt = getLocalTimeFromGMT(date1._d);
            dt = new Date(dt);
            $('#dvPicker' + dvid).datepicker('setDate', new Date());
            dpickStyle(dvid);
        });
        $('.fc-toolbar').attr("style", "margin:0;border-top:solid 1px #DEDFDE;border-left:solid 1px #DEDFDE;border-right:solid 1px #DEDFDE;border-top-left-radius:5px;border-top-right-radius:5px;padding:5px 5px 5px 0;background-color:#EFEFEF;");
        if (sidebarshow) setTimeout(function () {
            $("#dvExt" + dvid).show("slow");
            $("#devider" + dvid).hide();;
            var calsize = $("#cal" + dvid).css("width").replace("px", "") - 230;
            $("#cal" + dvid).css("width", calsize);
        }, 0);
    }
}
function fullCalendarresize(cal,height) {
    var ht = $(window).height();
    if (typeof height!="undefined") ht = height;
    cal.fullCalendar('option', 'height', ht);
}
function selRepeatChange() {
    var dd = "";
    $("#trweek").hide();
    switch ($("#selRepeat").val()) {
        case "daily":
            dd = "일";
            break;
        case "weekly":
            dd = "주";
            $("#trweek").show();
            break;
        case "monthly":
            dd = "개월";
            break;
    }
    $("#selEvery").next().text(dd);
}
function cbRepeat_change() {
    $('.repeat').css("display", "none");
    if ($("#cbRepeat").is(":checked"))
        $('.repeat').css("display", "block");
}
function allday_change(dvid) {

    var chk = $("#allday").is(":checked"); //.attr('checked');
    if (chk) {
        $("#startTime").attr("disabled", true);
        $("#endTime").attr("disabled", true);
    }
    else {
        $("#startTime").attr("disabled", false);
        $("#endTime").attr("disabled", false);
    }
}
function initCalendardata() {
    var login = getlogin();
    if (login != "") {
        var staff = login.id;
        var param = "{'staff':'" + staff + "'}";
        AjaxAdd("imcsetting", "mychan", webserviceprefix + "/WebService.asmx/staffChanList", param, "", "");
        //    param = "{'comp':'" + login.comp + "','staff':'" + staff + "'}";
        //    AjaxAdd('imcsetting', 'calendar', '/WebService.asmx/calendarList', param, "", "");
    }
}
function calendardatamapping(field, dt, type) {
    //field:mapping table, dt:original database, type:forward(db->fullcalendar),backward(db<-fullcalendar)
    //convert data by mapping field title
    var newdt = [];
    var tit = Object.keys(field);
    //make mapping pair(name:fullcalendar field, value:original field)
    newset = []; $(tit).each(function (i, k) {
        var set = {};
        set.name = k;
        set.value = field[k];
        newset.push(set)
    })
    var compareval, renameval;
    if (typeof type == "undefined") type = 'forward';
    $(dt).each(function (i, k) {
        for (dtname in k) {
            $(newset).each(function (j, l) {
                if (l.name != l.value) {
                    switch (type) {
                        case "forward"://change to fullcalendar data format
                            compareval = l.value;
                            renameval = l.name;
                            break;
                        case "backward"://from fullcalendar format back to database original
                            compareval = l.name;
                            renameval = l.value;
                            break;
                    }
                    if (compareval == dtname) {
                        k[renameval] = k[dtname];
                        delete k[dtname];
                    }
                }
            });
        }
    });

    return dt;
}
function makeCalrendardata(dvid, dt) {
    var filter = [], datacode = "", caldata = [], cdata;

    $(dt).each(function (i, k) {
        if (k.allDay == "True" | k.allDay == "true" | k.allDay == true)
            k.allDay = true;
        else
            k.allDay = false;
        if (k.hasOwnProperty("backgroundColor") && k.backgroundColor != "") {
            k.borderColor = k.backgroundColor;
            k.textColor = textColorFind(k.backgroundColor.toUpperCase());
        }

        if (typeof k.start != "undefined" && k.start != "")
            k.start = caldataformat(k.start);
        if (typeof k.end != "undefined" && k.end != "")
            k.end = caldataformat(k.end);

    });

    //highlight when mouseover to external
    caldata = hightlightLoop(dvid, dt);

    return caldata;
}
function caldataformat(date) {
    var datesplit = date.split(' ');
    var fixeddate = "", chk = "";
    $(datesplit).each(function (i, k) {
        if (k == "오전") chk = "am";
        else if (k == "오후") chk = "pm";
    });
    switch (chk) {
        case "am":
            fixeddate = date.replace("오전", "");
            fixeddate += " AM";
            break;
        case "pm":
            fixeddate = date.replace("오후", "");
            fixeddate += " PM";
            break;
        case "":
            fixeddate = date;
            break;
    }
    return fixeddate;
}
function textColorFind(backgroundColor) {
    var textColor = "white";
    if ($.inArray(backgroundColor, ["#CECFC6", "#FFFF94", "#FFD3DE", "#FDFD96", "#FFD1DC"]) > -1)
        textColor = "black";
    return textColor;
}
var from1, to1;
function highlight(dvid, dlist) {
    var cal = $("#cal" + dvid);
    cal.fullCalendar('removeEvents');
    var events = [];
    var dt = makeCalrendardata(dvid, dlist);
    events = getRepeatList(dt, from1, to1);

    cal.fullCalendar('addEventSource', events);
    cal.fullCalendar('rerenderEvents');
}
function hightlightLoop(dvid, dlist) {
    var dvc = $("#dvExtContents" + dvid);
    var resource = [], rtn = [];

    $(dvc.children().find($('input:checked'))).each(function (i, k) {
        resource.push($(k).attr("id").replace("cb", ""));
    });
    $(dvc.children().find($('.colorBox'))).each(function (i, k) {
        var clr = $(k).attr("style");
        if (typeof clr != "undefined")
            resource.push($(k).attr("id"));
    });
    //filter datasrc with list array
    if (resource.length > 0)
        $(dlist).each(function (i, k) {
            if ($.inArray(k.resource, resource) > -1)
                rtn.push(k);
        });
    else
        rtn = dlist;
    return rtn;
}
function makeSidebar(dvid, color, data) {
    if ($("#dvExt" + dvid).length > 0)
        $("#dvExt" + dvid).remove();
    var ext = $("<div id='dvExt" + dvid + "'  style='display:none;' class='external-events'/>");
    var topstyle = "border-top:solid 1px #DEDFDE;border-left:solid 1px #DEDFDE;border-right:solid 1px #DEDFDE;";
    topstyle += "border-top-left-radius:5px;border-top-right-radius:5px;background-color:#EFEFEF;height:36px;text-align:right;";
    var topimg = "<img src='/images/closeblacknude.png' style='margin:10px 5px 0 0' class='imdim'/>";
    var top = $("<div style='" + topstyle + "' onclick=\"hideExternal('" + dvid + "')\">" + topimg + "</div>").insertBefore(ext);
    ext.append(top);
    var dvcin = $("<div style='border:solid 1px #DEDFDE;border-bottom-right-radius:5px;border-bottom-left-radius:5px;padding:5px;'/>");
    ext.append(dvcin);

    //datepicker
    var picker = $("<div id='dvPicker" + dvid + "' />");
    picker.datepicker({
        inline: true,
        changeYear: true,
        yearRange: "2014:2025",
        changeMonth: true,
        onSelect: function (dateText, inst) {
            var d = new Date(dateText);
            var cal = $('#cal' + dvid);
            var view = cal.fullCalendar('getView');
            cal.fullCalendar('gotoDate', d);
            if (view.name == 'agendaWeek')
                cal.fullCalendar('changeView', 'agendaWeek');
            else
                cal.fullCalendar('changeView', 'agendaDay');
            dpickStyle(dvid);
        },
        onChangeMonthYear: function (year, month, inst) {
            var d = new Date(year + "/" + month + "/1");
            var cal = $('#cal' + dvid);
            var view = cal.fullCalendar('getView');
            cal.fullCalendar('gotoDate', d);
            dpickStyle(dvid);
        }
    });
    dvcin.append(picker);

    //calendar
    var ctr = selectimctable(menuid, subid, dvid); var mycal = "";
    if (typeof ctr != "undefined")
        if (ctr.hasOwnProperty("setting"))
            if (ctr.setting.hasOwnProperty("field"))
                if (ctr.setting.field.hasOwnProperty("mycal"))
                    mycal = ctr.setting.field.mycal;

    if (mycal != "") {
        var menu = $("<div/>"), ins = $("<div class='editfont imdim'><i class='fa fa-plus fa-lg'/>add calendar</div>"); menu.append(ins);
        ins = $("<div class='editfont'>Show All</div>"); menu.append(ins);
        var dvc1 = $("<div id='dvExtContents" + dvid + "' />");
        dvc1.append($("<div style='font-size:16px;margin:10px 0 5px 0;' class='over'><div style='float:left'> Calendar</div><div style='float:right;'><img id='imgopen' class='caledit imdimmer' onclick=\"$('#dvEditcal').slideToggle()\" src='/images/dropdownarrow.png'/></div></div><div style='clear:both'/>"));
        dvc1.append($("<div id='dvEditcal' style='display:none;' class='editbox' >" + menu.clone().html() + "</div>"));
        //dvc1.append($("<div style='margin-top:10px;'><input type='checkbox' id='cbAll" + dvid + "' onchange=\"cbAll('" + dvid + "')\" /><label>All</label>"));
        $(mycal).each(function (i, k) {
            dvc1.append(makeSidelist(dvid, k, data));
        });
    }
    documentreadyInsert("body-ready", "$('body').click(function(e){var container=$(\"#imgopen\"); if (!container.is(e.target)) $(\"#dvEditcal\").hide();});");
    dvcin.append(dvc1);
    dvcin.append($("<div id='dvTrash" + dvid + "' tooltip='Trash' style='display:none;margin-bottom:5px;vertical-align:middle;color:#555555;text-align:right;padding:5px;'><img src='/images/cal-trash.png' /></div>"));
    var sty = ".arrow{ background-repeat:no-repeat;font-size:14px;}";
    sty += ".arrowcollapse{ background-image: url('/images/dot02.gif');padding-left:20px;height:20px;background-position:5px 5px; }";
    sty += ".arrowexpand{background-image: url('/images/arrow_down.png');padding-left:20px;height:20px;background-position:0px 5px}";
    sty += ".arrowminus{ background-image: url('/images/collapse1.gif');padding-left:20px;background-position:0px 5px; }";
    sty += ".arrowplus{background-image: url('/images/expand1.gif');padding-left:20px;background-position:0px 5px;}";
    sty += ".colorBox{border:solid 1px #CBCBCB;width:12px;height:12px;margin:0 10px 0 0;font-size:14px;float:left;}";
    sty += ".over{background-color:#transparent;}";
    sty += ".over:hover{background-color:#EFEFEF;cursor:pointer}";
    sty += ".editbox{width:200px;height:100px;background-color:white;border:solid #CFCFCF 1px;position:absolute;z-index:100;left:205px;margin-top:-6px;box-shadow: 3px 3px 2px #888888;padding:10px;}";
    sty += ".editfont{padding:5px;font-size:16px;color:gray;cursor:pointer}";
    sty += ".editfont:hover{text-decoration:underline;color:#797979;}";
    //<img id='img12' style='vertical-align:middle;margin-right:11px;' src='/images/arrow_down.png'/>
    styleInsert("calColor-style", sty);

    return ext;
}
function makeSidelist(dvid, k, data) {
    var color = k.color, field = '', content = "";
    var title = k.title, code = "", name = "";
    var wrap = $("<div />");
    if (k.hasOwnProperty("colorlist") && k.colorlist.length > 0) {
        content = $("<div class='arrow arrowminus imdim over' style='margin-top:5px;' onclick=\"toggleExternal1(this)\">" + title + "</div>");
        wrap.append(content);
        var dv = $("<div style='margin:0 0 0 6px' />");
        wrap.append(dv);

        $(k.colorlist).each(function (i, k) {
            var c = k[0];
            var n = k[1];
            var bgcolor = "border-color:" + k[2] + ";background-color:" + k[2] + ";color:" + textColorFind(k[2].toUpperCase());

            var tb = $("<table width='100%' cellpadding='0' ></table>");
            tb.appendTo(dv);
            var tr = $("<tr/>");
            tb.append(tr);
            //tr.append($("<td style='width:5px;height:5px;'><input type='checkbox' class='css-checkbox' id='cb" + c + "' onchange=\"highlight('" + dvid + "')\" /></td>"));
            tr.append($("<td style='width:5px;height:5px;'><div class='arrow imdim over' style='margin-top:3px;' onclick=\"toggleColor(this,'" + k[2] + "','" + dvid + "')\"><div id='" + k[0] + "' class='colorBox'/></div><td>"));
            tr.append($("<td><div  style='margin:0;" + bgcolor + "' class='fc-event ui-draggable ui-draggable-handle extdrag' id='" + k[0] + "' >" + k[1] + "</div></td>"));
            //tr.append($("<td><div class='arrow imdim over' style='margin-top:5px;' onclick=\"toggleColor(this,'" + k[2] + "','" + dvid + "')\"><div id='" + k[0] + "' class='colorBox'/><div class='dvdnd' id='"+k[2]+"' style='float:left;'>" + k[1] + "</div></div><div style='clear:both'/><td>"));
        });
        documentreadyInsert("hover-ready"
        , "$('.dvdnd').mouseover(function () {$(this).addClass('fc-event ui-draggable ui-draggable-handle extdrag')});" +
         "$('.dvdnd').mouseout(function(){$(this).removeClass('fc-event ui-draggable ui-draggable-handle extdrag');});"
        );
    }
    else {
        content = $("<div class='arrow imdim over' style='margin-top:5px;' onclick=\"toggleColor(this,'" + color + "','" + dvid + "')\"><div id='" + k.id + "' class='colorBox'/><div style='float:left;'>" + title + "</div></div><div style='clear:both'/>");
        wrap.append(content);
    }

    return wrap;
}
function dpickStyle(dvid) {
    setTimeout(function () {
        $('#dvPicker' + dvid + ' .ui-datepicker').css({ 'width': '198px' });
        $('#dvPicker' + dvid + ' .ui-datepicker td a').css({ 'height': '25px' });
    }, 0);
}
function toggleColor(that, color, dvid) {

    var box = $(that).children()[0];
    var rgb = $(box).css("background-color");
    var hex = rgb2hex(rgb);
    if (hex == color)
        $(box).removeAttr("style");
    else
        $(box).css("background-color", color);
    highlight(dvid);
}
function toggleExternal1(that) {
    switch ($(that).attr("class")) {
        case "arrow arrowminus imdim over":
            $(that).attr("class", "arrow arrowplus imdim over");
            break;
        case "arrow arrowplus imdim over":
            $(that).attr("class", "arrow arrowminus imdim over");
            break;

    }
    $(that).next().slideToggle("slow");

}
function showExternal(id) {
    $("#dvExt" + id).show("slow");//.attr("style", "display:block;margin-top:37px;");
    var calsize = $("#cal" + id).css("width").replace("px", "") - 230;
    $("#cal" + id).css("width", calsize);
    $("#devider" + id).hide();
}
function hideExternal(id) {
    $("#dvExt" + id).show("hide");
    document.getElementById('dvExt' + id).removeAttribute("style");
    document.getElementById('cal' + id).removeAttribute("style");
    $("#devider" + id).show();
}

function getLocalTimeFromGMT(sTime) {
    var dte = new Date(sTime);
    dte.setTime(dte.getTime() + dte.getTimezoneOffset() * 60 * 1000);
    var rtn = makeDateTime(dte);
    return rtn;
}
function makeDateTime(d, seperator) {
    var sep = "/";
    if (typeof seperator != "undefined") sep = seperator;
    var yr = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hr = d.getHours();
    var min = d.getMinutes();
    var dt = yr + sep +
            (('' + month).length < 2 ? '0' : '') + month + sep +
            (('' + day).length < 2 ? '0' : '') + day + " " +
            (('' + hr).length < 2 ? '0' : '') + hr + ":" +
            (('' + min).length < 2 ? '0' : '') + min;
    return dt;
}
$(document).contextmenu({
    delegate: ".hasmenu",
    preventContextMenuForPopup: true,
    preventSelect: true,
    menu: [
            { title: "Cut", cmd: "cut", uiIcon: "ui-icon-scissors" },
            { title: "Copy", cmd: "copy", uiIcon: "ui-icon-copy" },
            { title: "Paste", cmd: "paste", uiIcon: "ui-icon-clipboard", disabled: true },
    ],
    select: function (event, ui) {
        // Logic for handing the selected option
    },
    beforeOpen: function (event, ui) {
        ui.menu.zIndex($(event.target).zIndex() + 1);
    }
});
var calsrc = "";
function formatDate(date) {
    now = date;
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
function getRepeatList(dt, from, to) {
    var events = [];
    $(dt).each(function (i, k) {
        if (k.hasOwnProperty("recurrence1") && k.recurrence1 != "") {
            var repeatdates = [];
            repeatdates = getRepeatday(k.start, k.recurrence1, from.toDate(), to.toDate())
            if (repeatdates.length > 0) {
                //end-start diff minutes:
                var min = (new Date(k.end) - new Date(k.start)) / 60 / 1000;
                $(repeatdates).each(function (j, l) {
                    events.push({
                        id: k.id,
                        title: k.title,
                        start: formatDate(new Date(l)),
                        end: formatDate(new Date(l).addMinutes(min)),
                        allDay: k.allDay,
                        recurrence1: k.recurrence1,
                        resource: k.resource,
                        color: k.color
                    });
                });
            }
        }
        else {
            events.push(k);
        }
    });
    return events;
}
function getRepeatday(start, repeat, from, to) {
    Date.prototype.addMinutes = function (m) {
        this.setMinutes(this.getMinutes() + m);
        return this;
    }
    var rtndt = [];
    repeat = JSON.parse(repeat);
    var type = "", range = "", every = "", until = "", times;
    type = repeat.type;
    range = repeat.range;
    every = repeat.every;

    rtndt.push(start);
    var dt = start;
    var span = "";

    switch (type) {
        case "daily":
            switch (range) {
                case "times":
                    span = parseInt(repeat.times);
                    break;
                case "until":
                    span = DateDiff(start, repeat.until, "day");
                    break;
                case "indefinitely":
                    span = DateDiff(to, start, "day");
                    break;
            }

            for (var i = 0; i < span; i++) {

                var newdate = new Date(dt);

                newdate.setDate(newdate.getDate() + every); // minus the date
                dt = new Date(newdate);

                rtndt.push(dt.toString());
            }
            break;
            //           case "weekly":
            //               switch (range) {
            //                   case "times":
            //                       span = parseInt(until);
            //                       break;
            //                   case "until":
            //                       span = DateDiff(start, until, "day");
            //                       break;
            //                   case "indefinitely":
            //                       span = DateDiff(start, to, "day");
            //                       break;
            //               }
            //               for (i in span) {
            //                   dt = dt.addDays(i * every);
            //                   rtndt.push(dt);
            //               }
            //               break;
    }

    return rtndt;
}
function DateDiff(end, start, datetype) {
    //difference b/w enddate, startdate by datetype(day,hour,minute)
    var divide = 1000;
    switch (datetype) {
        case "day":
            divide = divide * 60 * 60 * 24;
            break;
        case "hour":
            divide = divide * 60 * 60;
            break;
        case "minute":
            divide = divide * 60;
            break;
    }
    return (new Date(end) - new Date(start)) / divide
}
function chklength(arr, length) {
    if (arr.length <= length)
        return true;
    else
        return false;
}
function findCalendarSrc(dvid, id, dlist) {
    var list = makeCalrendardata(dvid, dlist);
    for (i in list) {
        if (list[i]['id'] == id) {
            return list[i];
        }
    }
}
function updateCalendarSrc(dvid, eventdata) {
    var cal = $("#cal" + dvid);
    // cal.fullCalendar('removeEvents');
    //updateimcsettingvalue("imcsetting", "calendar", "id", data.id, data);
    var list = selectimctable(menuid, subid, dvid);
    var cdata = fulldatalist;

    var li = list.setting.field;
    mappeddt = calendardatamapping(li, cdata);
    var chk = false;

    $(mappeddt).each(function (i, k) {
        if (k.id == eventdata.id) {

            k.title = eventdata.title;
            var ad = "False";
            if (eventdata.allDay == true | eventdata.allDay == "true" | eventdata.allDay == "True")
                ad = "True";

            k.allDay = ad;
            k.start = eventdata.start;
            k.end = eventdata.end;
            k.resource = eventdata.resource;
            k.color = eventdata.backgroundColor;
            //k.borderColor = eventdata.backgroundColor;
            //k.textColor=textColorFind( eventdata.backgroundColor);
            k.recurrence1 = eventdata.recurrence1;
            //            if (typeof recur != "undefined" && recur != "" && recur != '""') {
            //                k.recurrence1 = JSON.stringify(recur);
            //            }
            //            else
            //                k.recurrence1 = "";
            //cdata.datalist.splice(i, 1, k);
            chk = true;
        }
    });
    if (!chk) mappeddt.push(eventdata);

    var cdata1 = calendardatamapping(li, mappeddt, 'backward');
    var updata = updateimcdatalist(fulldata, cdata1);
    fulldata = updata;
    fulldatalist = cdata1;
    jsonUpdateAjax("imcdata", "", JSON.stringify(updata), "code", updata.code);

    var recurr = "", resource = "";
    if (eventdata.recurrence1 != "" && eventdata.recurrence1 != "undefined") {
        if (typeof eventdata.recurrence1 == "object")
            recurr = JSON.stringify(eventdata.recurrence1);
        else
            recurr = eventdata.recurrence1;
    }
    var color = "";
    if (typeof eventdata.resource != "undefined" && eventdata.resource != "") resource = eventdata.resource;
    if (typeof eventdata.backgroundColor != "undefined" && eventdata.backgroundColor != "") color = eventdata.backgroundColor;
}
function calSave(dvid, event) {
    var cal = $("#cal" + dvid);
    var id1 = $("#eventid").html();
    var title = $("#eventTitle").val();
    if (title == "") title = "(제목 없음)";
    var allday = "False", allday1 = false;
    var chk = $("#allday").is(":checked");
    if (chk) {
        allday = "True", allday1 = true;
    }

    var start = $("#startTime").val();
    var end = $("#endTime").val();
    var resource = $("#inNodevalue2").val();

    var chk = $("#cbRepeat").is(":checked");
    var repeat = "";
    if (chk) {
        repeat = {};
        //{"type":"monthly","days":[3,24],"every":"1","range":"until","until":"12/31/9999 11:59:59 PM"}
        repeat.type = $("#selRepeat").val();
        var wk = [];
        $("input[class='week']").each(function () {
            if (this.checked) {
                wk.push(parseInt($(this).attr("id").replace("weekly_", "")));
            }
        });
        repeat.days = wk;
        var every = 1;
        if ($("#selEvery").val() != "") every = parseInt($("#selEvery").val());
        repeat.every = every;
        if ($("input[name='repeat_range']:radio:checked").length > 0) {
            var range = $("input[name='repeat_range']:radio:checked").attr("id").replace("repeat_", "");
            repeat.range = range;
            switch (range) {
                case "until":
                    repeat.until = $("#repeat_until_value").val();
                    break;
                case "times":
                    repeat.times = $("#repeat_times_value").val();
                    break;
            }
        }
        repeat = JSON.stringify(repeat);
    }
    var eventData;
    eventData = {
        id: id1,
        title: title,
        allDay: allday,
        start: start,
        end: end,
        resource: resource,
        recurrence1: repeat
    };
    if (resource != "") {
        var color = findbackgroundcolor(resource);
        eventData.backgroundColor = color.toUpperCase();
    }
    if (typeof event == "undefined") event = eventData;
    else {
        event.title = title
        event.allDay = allday1;
        event.start = start;
        event.end = end;
        event.resource = resource;
        event.recurrence1 = repeat;
        if (resource != "") {
            var color = findbackgroundcolor(resource);
            event.backgroundColor = color.toUpperCase();
        }
    }

    var events = cal.fullCalendar('getEventsById', id1);
    switch ($("#eventtype").html()) {
        case "renderEvent":
            eventData.allDay = allday1;
            cal.fullCalendar("renderEvent", eventData, true);
            updateCalendarSrc(dvid, eventData);
            // 
            //cal.fullCalendar('removeEvents');
            //cal.fullCalendar('refetchEvents');
            break;
        case "updateEvent":
            cal.fullCalendar('updateEvent', event);
            updateCalendarSrc(dvid, eventData);
            break;
    }
    remoteSave(id1, title, allday, start, end, resource, color, repeat)
    cal.fullCalendar('unselect');
    $("#eventContent").attr('style', 'display:none');
    function findbackgroundcolor(resource) {

        var mycal = selectimctable(menuid, subid, dvid).setting.field.mycal;
        var rtn = "";
        $(mycal).each(function (i, k) {
            if (k.colorlist.length > 0) {
                $(k.colorlist).each(function (j, l) {
                    if (l[0] == resource.split(',')[0]) {
                        rtn = l[2].toUpperCase();
                        return false;
                    }
                });
            }
            else {
                if (k.id == resource) {
                    rtn = k.color.toUpperCase();
                    return false;
                }
            }
        });
        return rtn;
    }
}
function remoteDel(id) {
    var upparam = makeparam(id);
    var dtype = "", field = "", upd = "", con;

    if (fulldata.hasOwnProperty("dtype")) dtype = fulldata.dtype;
    if (fulldata.hasOwnProperty("querylist")) qlist = fulldata.querylist;
    if (fulldata.hasOwnProperty("connection")) {
        con = fulldata.connection;
        //var num = con.indexOf(";");
        //con = con.substring(num + 1);
    }
    var updatecommand = $.grep(qlist, function (a) {
        return a["sqlcommand"] == "delete";
    });
    if (updatecommand.length > 0) {
        upd = updatecommand[0];
    }
    var plist = Object.keys(upparam)
    if (dtype == "database" && upd != "") {
        var param = [];
        $(upd.param).each(function (i, k) {
            //paramlist=parametername,parametervalue,fieldtype(only query case);.... repeat
            if ($.inArray(k[0], plist) == -1)
                k[1] = userfilter(k[1]);
            if (upparam[k[0]] != "undefined")
                k[1] = userfilter(upparam[k[0]]);
            else
                k[1] = "";

        });
        var data = {};
        data.connection = JSON.stringify(con);
        data.querylist = [];
        data.querylist.push({ sqlcommand: "delete", dtype: upd.dtype, query: upd.query, param: upd.param });
        jsonDatabaseAjax(data);
    }
}
function remoteSave(id, title, allday, start, end, resource, color, repeat) {
    var upparam = makeparam(id, title, allday, start, end, resource, color, repeat);
    var dtype = "", field = "", upd = "", con;

    if (fulldata.hasOwnProperty("dtype")) dtype = fulldata.dtype;
    if (fulldata.hasOwnProperty("querylist")) qlist = fulldata.querylist;
    if (fulldata.hasOwnProperty("connection")) con = fulldata.connection;
    var updatecommand = $.grep(qlist, function (a) {
        return a["sqlcommand"] == "update";
    });
    if (updatecommand.length > 0) {
        upd = updatecommand[0];
    }

    var plist = Object.keys(upparam)
    if (dtype == "database" && upd != "") {
        $(upd.param).each(function (i, k) {
            //paramlist=parametername,parametervalue,fieldtype(only query case);.... repeat
            if ($.inArray(k[0], plist) == -1)
                k[1] = userfilter(k[1]);
            else if (upparam[k[0]] != "undefined")
                k[1] = userfilter(upparam[k[0]]);
            else
                k[1] = "";

        });
        var data = {};
        data.connection = JSON.stringify(con);
        data.commandtype = JSON.stringify(upd.dtype);
        data.querylist = [];
        data.querylist.push({ sqlcommand: "update", dtype: upd.dtype, query: upd.query, param: upd.param });
        jsonDatabaseAjax(data);
    }

}
function makeparam(id, title, allday, start, end, resource, color, repeat) {
    var param = {};
    param["id"] = id;
    param["staff"] = getlogin().id;
    param["invite"] = "";
    param["title"] = title;
    param["desc"] = "";
    param["start"] = start;
    param["end"] = end;
    param["resource"] = resource;
    param["color"] = color;
    param["allday"] = allday;
    var recur = "";
    if (repeat != "")
        recur = repeat;
    param["recur"] = recur
    param["reminder"] = "0";

    param = calendardatamapping(mapfield, param, 'backward');
    return param;
}
function onSuccess(data) {
    var comp = getlogin().comp;
    var staff = getlogin().id;
}
function onError(result) {
    //console.log(result);
}
function calCancel() {
    $("#eventContent").attr('style', 'display:none');
}
function selChanChange() {
    if ($("#selChan").val() != "")
        $("#eventTitle").val($("#selChan option:selected").text() + " visit");
}
//#endregion

//#region map
var mapcntr,initialsize=[];
function mapInit(id, option) {
    //if (typeof option != "undefined" && option.hasOwnProperty("gdt")) {
    //    console.log(id, JSON.stringify(option.gdt)); return false;
    //}
    //mapInit.resizemap=resizemap;
   
    if (typeof getpos == "undefined") {
        getLocation(mapInit, [id,option]);//get current position
        return false;
    }
    var gdt, latlng = {}, filter = "", contain;
    if (typeof id != "object") contain = $("#" + id);
    if (typeof option != "undefined" && option.hasOwnProperty("gdt")) {
        gdt = option.gdt;
        if (gdt.hasOwnProperty("data"))
            filter = findfilter(gdt.data);
        if (option.hasOwnProperty("contain"))
            contain = option.contain;
    }
    if (typeof gdt == "undefined")
        gdt = readdata(id, "gdt", option);

    mapInit.process = process;
    mapInit.markerreplace = markerreplace;
    if (typeof gdt != "undefined" && gdt.hasOwnProperty("data")) {
        var curdt = gdt.data;
        if (curdt.hasOwnProperty("datacode")) var datacode = curdt.datacode;
        else if (curdt.hasOwnProperty("code")) var datacode = curdt.code;
        if (datacode != "") {
            jsonReadAjax("imcdata", "", "code", datacode, mapInit.process, [id, gdt, filter, contain, datacode]);
        }
    }
    else {
        console.log('improcess')
        process("", id, gdt, "", contain, "");
    }
    function process(dsrc, id, gdt, filter, contain, datacode) {

        var dt = "", dtorigin = "";
        if (dsrc != "") {
            dtorigin = datalistreturn(dsrc);
            dt = dtorigin;
        }
        if (filter != "") dt = applyFilter(dtorigin, filter);
        if (typeof id == "object") {
            var dv = id;
            id = "dvpreview";
            dv.attr("id", id);
            dv.addClass("map");
        }
        else {
            dv = contain
            id = dv.attr("id");
            dv.addClass("map");
        }
        dv.empty();
        var htcss = "";
        console.log(gdt)
        if (gdt.hasOwnProperty("setting") && gdt.setting.hasOwnProperty("height"))
            htcss = gdt.setting.height+gdt.setting.heightunit;
        dv.attr("style", "width:100%;min-height:500px;margin:0;padding:0;"+htcss);
        // dv.attr("class", "roundbox");

        var maptype="google",mapmode = "ROADMAP", zoomlevel = 11, markerurl = "/images/marker.png",centerurl, toolkit = [];
        var latlng = { lat: -33.8, lng: 151.25 },markerarray=[];
      //  var markerarray = [
      //['Bondi Beach', -33.890542, 151.274856, 4],
      //['Coogee Beach', -33.923036, 151.259052, 5],
      //['Cronulla Beach', -34.028249, 151.157507, 3],
      //['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      //['Maroubra Beach', -33.950198, 151.259302, 1]
      //  ];
      //  var latlng = { lat: 37.366905, lng: 127.107693 };
        //var markerarray= [["Key Acc",37.366905,127.107693,1],["IO",37.366905,127.107693,2],["FMS",37.385997,127.119475,3],["KBY",37.575548,126.984747,4],["GRC",37.56482,126.966996,5]]
        if (typeof gdt != "undefined" && gdt.hasOwnProperty("setting")) {
            var st = gdt.setting;
            if (st.hasOwnProperty("center") && st.center!="") {
                var cnt = gdt.setting.center;
                if (cnt != "" && typeof cnt != "undefined" && cnt != null) {
                    cnt = cnt.split("^");
                    latlng.lat = parseFloat(cnt[0]);
                    latlng.lng = parseFloat(cnt[1]);
                    console.log(latlng,'first')
                }
            }
            else if (st.maptype == "streetdirectory" && st.center == "" ) {
                latlng.lat = getcountrypos(st.country).lat;
                latlng.lng = getcountrypos(st.country).lng;
            }
            else {
                console.log(getpos)
                latlng.lat = getpos.lat;
                latlng.lng = getpos.lng;
            }

            //"{"mapmode":"map","detailshow":null,"markerimage":null,"markerimage":"0","center":"36.844461^127.265625","markeraction":"detail","content":"c16020481245"
            if (st.hasOwnProperty("maptype")) maptype = st.maptype;
            if (st.hasOwnProperty("mapmode")) mapmode = st.mapmode;
            if (st.hasOwnProperty("zoom")) zoomlevel = parseInt(st.zoom);
            if (st.hasOwnProperty("toolkit")) toolkit = st.toolkit;
            if (st.hasOwnProperty("centerimage")) {
                if (st.hasOwnProperty("showcenter") && st.showcenter)
                    resetcenterimage(st.centerimage);
                else
                    resetcenterimage('');
              
            }
            if (st.hasOwnProperty("markerimage")) {
                var mimg = ["/images/marker.png", "/images/office-building-32.png", "/images/person-male.png"];
                $(mimg).each(function (i, k) {
                    if (st.markerimage == i)
                        markerurl = k;
                });
            }
            if (st.hasOwnProperty("fieldmap")) {
                //srcdata
                var fmap = gdt.setting.fieldmap, name, lat1, lng1, add1, add2, locid, markerimg;
                $(fmap).each(function (j, s) {
                    switch (s[0]) {
                        case "LocId":
                            locid = s[1];
                            break;
                        case "LocName":
                            name = s[1];
                            break;
                        case "Lat":
                            lat1 = s[1];
                            break;
                        case "Lng":
                            lng1 = s[1];
                            break;
                        case "Address1":
                            add1 = s[1];
                            break;
                        case "Address2":
                            add2 = s[1];
                            break;
                        case "markerimg":
                            markerimg = s[1];
                            break;
                    }
                });
                markerarray = makemarkerarray(dt, lat1, lng1, locid, markerimg);
                console.log(markerarray.length, markerarray)
            }      
        }
        if (filter != "" && typeof contain != "undefined") {
            //if filter applied or only single spot displayed, move center
            switch (markerarray.length) {
                case 0:
                    if (id.indexOf("popupdv") > -1) $("#" + id).dialog('destroy').remove();
                    else
                        markerarray = makemarkerarray(dtorigin, lat, lng, locid, markerimg);
                    sweetmsgautoclose("Ooops!", "Map information is not available!!", { timer: 1000 });
                    break;
                //default:
                //    var m0 = markerarray[0];
                //    latlng.lat = parseFloat(m0[1]);
                //    latlng.lng = parseFloat(m0[2]);
                //    zoomlevel = 13;
                //    break;
            }
        }
        var btnappend = $("<input id='append" + id + "' type='button' style='display:none'></input>");
        var btnclear = $("<input id='clear" + id + "' value='clear' type='button' style='display:none'></input>");
        var btndraggable = $("<input id='draggable" + id + "' value='draggable' type='button' style='display:none'></input>");

        dv.closest('tr').prepend(btnappend);
        dv.closest('tr').prepend(btnclear);
        dv.closest('tr').prepend(btndraggable);
        
       // map = mapdeclare("map", maptype, [id, latlng, zoomlevel, mapmode]);
        map = mapdeclare("map", maptype, { id: id, lat: latlng.lat, lng: latlng.lng, zoomlevel: zoomlevel, mapmode: mapmode });
       
        addcentermarker(maptype,id,map);
        console.log(map,latlng)
       
       // setMarkers(id, map, markerarray, markerurl);
        //daum.maps.event.addListener(map, 'dblclick', function (event) {
        //    placeMarker(id, event.latLng);
        //    position = event.latLng;
        //});
        //google.maps.event.addListener(map, 'dblclick', function (event) {
        //    placeMarker(id, event.latLng);
        //    position = event.latLng;
        //});
       
        



        $(toolkit).each(function (i, k) {
            switch (k) {
                case "streetview":
                    streetView(id, latlng, map);
                    break;
                case "search":
                    geoSearch(maptype, id); 
                    break;
                case "multisearch":
                    geoSearch(maptype, id); multiSearch(maptype, id);
                    break;
                case "reload":
                    var withsearch = true;
                    if ($.inArray("search", toolkit) == -1) withsearch = false;
                    OriginalReload(dsrc, id, gdt, contain, withsearch);
                    break;
            }
        })
        // btn1.hide(); btn2.hide();
        $(btnappend).click(function (e) {
            jsonReadAjax("imcdata", "", "code", datacode, mapInit.markerreplace, [id, map, filter, markerurl, lat, lng, locid, markerimg]);
        });
        $(btndraggable).click(function (e) {
            btnclear.click();
            markerurl = "/images/marker.png";
            var opt = { draggable: true };
            setMarkers(maptype,id, map, markerarray, markerurl, opt);
        });
        if(gdt.hasOwnProperty("setting")){
            //google.maps.event.addDomListener(window, "resize", function() {
            //    var center = map.getCenter();
            //    google.maps.event.trigger(map, "resize");
            //    map.setCenter(center); 
            //});
            var type = gdt.setting.tab, dvid = dv.attr("id"), tabname = gdt.setting.tabname, opt = {};
          
            opt.optdialog = {}; opt.optdialog.width = $("#" + id).closest("td").width();
            var opt = {};
            opt.w = dv.width(), opt.h = dv.height(), opt.id = dvid, chkexist = false;
            console.log(initialsize)
            $(initialsize).each(function (i, k) {
                if (k.id == dvid) {
                    chkexist = true;
                }
            });
            console.log(chkexist,dvid)
            if (!chkexist)
                initialsize.push(opt);

            switch (gdt.setting.display) {
                case "dropdown":
                    inputdropdown(id, opt);
                    var parent = $("<div id='parent" + dvid + "' />");
                    dv.wrap(parent);
                    wrapcontrol("parent" + id, "maptest", id, "", resizemap, [maptype, map,dvid, opt]);
                    break;
                case "dialog":
                    inputdialog(id, opt, resizemap, [maptype,map,dvid,opt]);
                    break;
                case "wrap":
                    var parent = $("<div id='parent" + dvid + "' />");
                    dv.wrap(parent);
                    wrapcontrol("parent" + id, "maptest", id, "", resizemap, [maptype, map,dvid,opt]);
                    break;
            }
        }
    }
    var markers = [], infowins = [];
    function multiSearch(maptype, id) {
        var inp = $("<input id='address' class='form-control col-3' placeholder='search'/>");
        var ps = mapdeclare("place", maptype);
     
       // var inp = $("#address");
        switch (maptype) {
            case "daum": case "naver": case "streetdirectory": case "google":
                if ($("#address").length == 0) {
                    inp.css({ position: "absolute", top: "10px", right: "1%", "z-index": 10003 });
                    inp.attr("onfocus", " $('.pac-container').remove();this.value='';$('.pac-container').css({ 'z-index': 10003 });");
                 
                    $("#" + id).append(inp);
                    $("#" + id).css("position", "relative");
                }
                else {
                    var inp = $("#address");
                    inp.click(function () {
                        $('.pac-container').hide();
                    })
                }
                $("#address").keyup(function (event) {
                    var keycode = (event.keyCode ? event.keyCode : event.which);
                    if (keycode == '13') {
                        $(markers).each(function (i, k) {
                            k.setMap(null);
                        });
                        $(infowins).each(function (i, k) {
                            k.close();
                        });
                        $(".pac-container").hide();
                       
                        event.preventDefault();
                        funLoading();
                        switch (maptype) {
                            case "google":
                                ps.getQueryPredictions({ input: inp.val() }, googleresults);
                                break;
                            case "daum":
                                ps.keywordSearch(inp.val(), daumresults);
                                break;
                            case "naver":
                                ps.keywordSearch(inp.val(), naverresults);
                                break;
                        }
                      
                       
                       return false;
                    }
                });
                break;
        }
       var googleresults = function (predictions, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                alert(status);
                return;
            }
            var geocoder = new google.maps.Geocoder;
            var grp = showlist(),i=0;
            //var infowindow = new google.maps.InfoWindow;
            removeMarker();
            predictions.forEach(function (place) {
                geocoder.geocode({ 'placeId': place.place_id }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            var latlng = results[0].geometry.location;
                            var plc = {};
                            plc.lat = latlng.lat();
                            plc.lng = latlng.lng();
                            plc.address = results[0].formatted_address;
                            plc.title = place.structured_formatting.main_text;
                            plc.i = i;
                            i++;
                            ahr = appendlist(grp,plc),
             //   marker = addMarker(places[i], ahr), title = places[i].title;
                            addMarker(plc,ahr);
                          
                            if (results[0].geometry.viewport) {
                                map.fitBounds(results[0].geometry.viewport);
                            } else {
                                map.setCenter(results[0].geometry.location);
                                map.setZoom(17);
                            }
                          
                        } else {
                            window.alert('No results found');
                        }
                    } else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
                $("#containopen").click();
               
                funStop();
            });
        };
       var daumresults = function (status, data, pagination) {
           if (status === daum.maps.services.Status.OK) {
              
               removeMarker();
               // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
               // LatLngBounds 객체에 좌표를 추가합니다
               var bounds = new daum.maps.LatLngBounds();
               var places = data.places;
               var grp=showlist();
               for (var i = 0; i < places.length; i++) {
                   var plc = {};
                   plc.lat = places[i].latitude;
                   plc.lng = places[i].longitude;
                   plc.address = places[i].address;
                   plc.title = places[i].title;
                   plc.i = i;
                   var placePosition = new daum.maps.LatLng(plc.lat,plc.lng);//places[i].latitude, places[i].longitude),
                        ahr = appendlist(grp,plc),
                   marker = addMarker(plc, ahr,i), title = places[i].title;
                   bounds.extend(placePosition);
                   plc.marker = marker;
               }
              
               // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
               map.setBounds(bounds);
               $("#containopen").click();
              
               funStop();
           }
       }
       var naverresults = function (status, data, pagination) {
            if (status === daum.maps.services.Status.OK) {
                removeMarker();
                var bounds = new naver.maps.LatLngBounds();
                var places = data.places;
                var grp = showlist();
                for (var i = 0; i < places.length; i++) {
                    var plc = {};
                    plc.lat = places[i].latitude;
                    plc.lng = places[i].longitude;
                    plc.address = places[i].address;
                    plc.title = places[i].title;
                    plc.i = i;
                    ahr = appendlist(grp, plc),
                    marker = addMarker(plc, ahr, i);
                    var placePosition = new naver.maps.LatLng(plc.lat, plc.lng);//places[i].latitude, places[i].longitude),
                    bounds.extend(placePosition);
                    map.setCenter(placePosition); // 중심 좌표 이동
                }
               
               // map.fitBounds(bounds);
                map.setZoom(13)
                $("#containopen").click();
               
                funStop();
            }
       }
       var appendlist = function (grp,k) {
           var ahr = $("<a href='#' class='list-group-item list-group-item-action flex-column'>").appendTo(grp);
           var hgrp = $('<div class="d-flex w-100">').appendTo(ahr);
           var hs = $('<span class="badge badge-primary"></span>').appendTo(hgrp);
           var hl = $('<h6 class="mb-1"></h6>').appendTo(hgrp);
          
           var body = $('<p class="mb-1"></p>').appendTo(grp);
           var end = $('<small></small>').appendTo(grp);
           hl.text(k.title);
           hs.text(k.i+1);
           body.text(k.address);
           end.text('');
           return ahr;
       }
       var showlist = function () {
           var map = $("#parent" + id);
           var panel = map.parent(), wth = panel.width() - 270, ht = panel.height();
           map.css({ float: "right", width: wth });
           var container = $(".hidescroll");
           if (container.length > 0) container.empty();
           else {
               container = $("<div class='hidescroll' style='float:left;'><div/>");
               container.css({ height: ht, overflow: 'auto' });
           }

           if (panel.find(".panel-primary").length > 0)
               container.insertAfter(panel.find(".panel-primary"));
           else
               panel.prepend(container);
           var close = $('<div style="padding:10px;"><button id="containclose" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><div>').appendTo(container);
           var open = $("#containopen");
           if (open.length == 0) {
               open = $("<div id='containopen' style=' position: absolute;top: 250px;left: 0px;z-index:10;display:none;'><i class='fa fa-toggle-right fa-2x imdim'/></div>");//$('<button type="button" class="close rotate" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
               panel.append(open);
           }
           var grp = $("<div class='list-group' style='width:250px'/>").appendTo(container);

           close.click(function () {
               map.css({ width: "100%" });
               $("#" + id).css({ width: "100%" });
               panel.css({ position: "relative" });
               container.hide();
               open.show();
           });
           open.click(function () {
               wth = map.parent().width() - 270;
               map.css({ width: wth });
               $("#" + id).css({ width: wth });
               container.show();
               container.css("height", map.height());
               open.hide();
           });
           return grp;
       }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(place, ahr, i) {
            var imageSrc = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld="+i+"|FF0000|000000";
            //'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new daum.maps.Size(36, 37),  // 마커 이미지의 크기
            imgOptions = {
                spriteSize: new daum.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin: new daum.maps.Point(0, 0),//(idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new daum.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions);
                    //marker = new daum.maps.Marker({
                    //    position: position, // 마커의 위치
                    //    image: markerImage
                    //});
            var marker = mapdeclare("marker", maptype, { lat: place.lat, lng: place.lng,i:place.i,markerimage:markerImage });
            var infowindow = mapdeclare("infowindow", maptype, { name: place.title, address: place.address, lat: place.lat, lng: place.lng });
            infowins.push(infowindow);
            marker.setMap(map); // 지도 위에 마커를 표출합니다
            markers.push(marker);  // 배열에 생성된 마커를 추가합니다
            markerevent(maptype, marker, infowindow,ahr);
            return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        }

    }
    function geoSearch(maptype,id) {
        var inp = $("<input id='address' class='form-control col-3' placeholder='search'/>");
    
        switch (maptype) {
            case "google":
                inp.css('margin-top','10px').insertBefore($("#" + id));
                inp.attr("onfocus", "this.value='';$('.pac-container').css({ 'z-index': 10003, display: 'block' });");
                var searchBox = new google.maps.places.SearchBox(inp.get(0)); //$("#address").get(0)==document.getElementById('address')
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(inp.get(0));
                // map.controls[google.maps.ControlPosition.TOP_LEFT].push(btn.get(0));
                var autocomplete = new google.maps.places.Autocomplete(inp.get(0));
                autocomplete.bindTo('bounds', map);
                var infowindow = new google.maps.InfoWindow();
                var marker = new google.maps.Marker({
                    map: map,
                    anchorPoint: new google.maps.Point(0, -29)
                });
                autocomplete.addListener('place_changed', function () {
                    //infowindow.close();
                    //marker.setVisible(false);
                    $(markers).each(function (i, k) {
                        k.setMap(null);
                    });
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    markers = [], infowins = [];

                    var place = autocomplete.getPlace();
                    if (!place.geometry) {
                        window.alert("Autocomplete's returned place contains no geometry");
                        return;
                    }
                    // If the place has a geometry, then present it on a map.
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setZoom(15);
                        // map.setZoom(17);  // Why 17? Because it looks good.
                    }
                    marker.setIcon(/** @type {google.maps.Icon} */({
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(35, 35)
                    }));
                    marker.setPosition(place.geometry.location);
                    marker.setVisible(true);
                    var address = '';
                    if (place.address_components) {
                        address = [
                          (place.address_components[0] && place.address_components[0].short_name || ''),
                          (place.address_components[1] && place.address_components[1].short_name || ''),
                          (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
                    infowindow.open(map, marker);
                });
                break;
            case "daum":case "naver":case "streetdirectory":
                inp.css({ position: "absolute", top: "10px", right: "1%","z-index":10003 });
                inp.attr("onfocus", "this.value='';$('.pac-container').css({ 'z-index': 10003, display: 'block' });");
                
                $("#" + id).append(inp);
                $("#" + id).css("position", "relative");
                var places = new google.maps.places.Autocomplete(inp.get(0));
                google.maps.event.addListener(places, 'place_changed', function () {
                    var place = places.getPlace();
                    console.log(place)
                    $(markers).each(function (i, k) {
                        k.setMap(null);
                    });
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    markers = [],infowins=[];
                    setmarker(maptype, place);
                  
                });

                function setmarker(maptype,place) {
                    var address = place.formatted_address;
                    var lat = place.geometry.location.lat();
                    var lng = place.geometry.location.lng();
                    // 지도에 마커를 생성하고 표시한다
                    var marker = mapdeclare("marker", maptype, { lat: lat, lng: lng });
                    var infowindow = mapdeclare("infowindow", maptype, { name: place.name, address: place.formatted_address, lat: lat, lng: lng });
                    console.log(infowindow,marker)
                    markers.push(marker);
                    infowins.push(infowindow);

                    switch (maptype) {
                        case "daum":
                            var bounds = new daum.maps.LatLngBounds();
                            var placePosition = new daum.maps.LatLng(lat, lng);
                            bounds.extend(placePosition);
                            map.setBounds(bounds);
                            break;
                        case "naver":
                            var jeju = new naver.maps.LatLng(lat, lng);
                            //var bounds = new naver.maps.LatLngBounds();
                            //bounds.extend(jeju);
                            //map.fitBounds(bounds);
                            //console.log(bounds)
                            map.setCenter(jeju); // 중심 좌표 이동
                            map.setZoom(13);     // 줌 레벨 변경

   //                         var seoul =
   //                             //new naver.maps.LatLngBounds(
   //                             //new naver.maps.LatLng(lat, lng), new naver.maps.LatLng(38.2127644, 128.59112589999995));
   //                         new naver.maps.LatLngBounds(
   //new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
   //new naver.maps.LatLng(37.7010174173061, 127.18379493229875));
   //                         map.fitBounds(seoul);
                            
   //                         //var bounds = new naver.maps.LatLngBounds();
   //                         //var placePosition = new naver.maps.LatLng(lat, lng);
   //                         //var bounds = new naver.maps.LatLngBounds(placePosition);
   //                         //   // bounds.extend(placePosition);
   //                         //map.fitBounds(bounds);
                            break;
                    }
                 

                    // 마커가 지도 위에 표시되도록 설정합니다
                  //  marker.setMap(map);
                    markerevent(maptype, marker, infowindow);
                  

                        // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
                  
                }
               
                break;
        }
       
      
    }
    function markerevent(maptype,marker,infowindow,ahr) {
        switch (maptype) {
            case "daum":
                daum.maps.event.addListener(marker, 'click', function () {
                    // 인포윈도우를 지도에 표시한다
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    infowindow.open(map, marker);
                   // marker.setPosition(map.getCenter());
                });
                if(typeof ahr!="undefined")
                ahr.on("click", function () {
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    infowindow.open(map, marker);
                   // marker.setPosition(map.getCenter());
                })
                break;
            case "naver":
                //naver.maps.Event.addListener(marker, 'click', function () {
                //    // 인포윈도우를 지도에 표시한다
                //    infowindow.open(map, marker);
                //});
                naver.maps.Event.addListener(marker, "click", function (e) {
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        infowindow.open(map, marker);
                      //  marker.setPosition(map.getCenter());
                    }
                });
                if (typeof ahr != "undefined")
                ahr.on("click", function () {
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        infowindow.open(map, marker);
                    }
                })
                break;
            case "google":
                google.maps.event.addListener(marker, "click", function (e) {
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    infowindow.open(map, marker);
                   // marker.setPosition(map.getCenter());
                });
                if (typeof ahr != "undefined")
                ahr.on("click", function () {
                    $(infowins).each(function (i, k) {
                        k.close();
                    });
                    infowindow.open(map, marker);
                   // marker.setPosition(map.getCenter());
                })
                break;
        }
    }
    function OriginalReload(dsrc, id, gdt, contain, withsearch) {
        var dv = $("<div />"), btn = $("<div style='width:27px;height:27px;background-color:white;border:solid 1px #A9A9A9;padding:5px 0 0 4px' class='imdimmer'><i class='fa fa-university fa-lg ' style='color:#EC9620' title='back to initial'/></div>");
        dv.append(btn);
        var rgt = "216px";
        if (!withsearch) rgt = "10px"
        dv.css({ position: "absolute", top: "10px", right: rgt, zIndex: "1" });
        $("#" + id).append(dv);
        $("#" + id).css("position", "relative");
        //click submit search address
        btn.on("click", function () {
            mapInit.process(dsrc, id, gdt, "", contain);
        })
    }
    function placeMarker(id, location) {
        var marker = new daum.maps.Marker({
            // position: location,
            position: new daum.maps.LatLng(37.56682, 126.97865), // 마커의 좌표
            draggable: true,
            map: map
        });
        //var marker = new google.maps.Marker({
        //    position: location,
        //    draggable: true,
        //    map: map
        //});
        map.setCenter(location);
        marker.addListener('click', function (e) {
            if (infowindow)
                infowindow.close();
            position = e.latLng;
            reloadexe(id, [{ code: "code", value: [] }], 'link');
        });
        //google.maps.event.addListener(marker, 'dragend', function (evt) {
        //    position = evt.latLng;
        //});
        daum.maps.event.addListener(marker, 'dragend', function (evt) {
            position = evt.latLng;
        });
        $("#clear" + id).click(function () {
            marker.setMap(null);
        })
    }
    function markerreplace(dsrc, id, map, filter, markerurl, lat, lng, locid, markerimg) {
        if (dsrc != "") {
            var dtorigin = datalistreturn(dsrc);
            var dt = dtorigin;
        }
        if (filter != "") dt = applyFilter(dtorigin, filter);
        var markerarray = makemarkerarray(dt, lat, lng, locid, markerimg);
        setMarkers(id, map, markerarray, markerurl);
    }
    function addcentermarker(maptype, id, map) {
        var mapbody = $("#" + id);//map.getDiv()
        $('<div/>').addClass('centerMarker').appendTo(mapbody)
        ////do something onclick
        //.click(function () {
        //    var that = $(this);
        //    if (!that.data('win')) {
        //        that.data('win', new google.maps.InfoWindow({
        //            content: 'this is the center<br/>lat:' + mapcntr.lat + 'lng:<br/>' + mapcntr.lng
        //        }));
        //        that.data('win').bindTo('position', map, 'center');
        //    }
        //    that.data('win').open(map);
        //});
        mapcntr = {};
        switch (maptype) {
            case "google":
                google.maps.event.addListener(map, 'center_changed', function () {
                    mapcntr.lat = map.getCenter().lat();
                    mapcntr.lng = map.getCenter().lng();
                    fillin(mapcntr);
                });
                break;
            case "daum":
                daum.maps.event.addListener(map, 'center_changed', function () {
                    mapcntr.lat = map.getCenter().getLat();
                    mapcntr.lng = map.getCenter().getLng();
                    fillin(mapcntr);
                });
                break;
            case "naver":
                naver.maps.Event.addListener(map, 'center_changed', function () {
                    mapcntr.lat = map.getCenter().lat();
                    mapcntr.lng = map.getCenter().lng();
                    fillin(mapcntr);
                });
                break;
            case "streetdirectory":
                map.viewport.OnEndDrag.register(function () {
                    mapcntr.lat = map.getCenter().lat;
                    mapcntr.lng = map.getCenter().lon;
                    fillin(mapcntr);
                    console.log("viewportonenddrag",map.getCenter());

                });
                //EventManager.add(map, "mouseout", function () {
                //    console.log("mouseout",map.getCenter())
                //    //mapcntr.lat = map.getCenter().lat();
                //    //mapcntr.lng = map.getCenter().lng();
                //    //fillin(mapcntr);
                //   // map.viewport.zoomIn();

                //});
                break;
        }
        function fillin(mapcntr) {
            var val = $("#selcenter").next("input"), txt = $("#txinput" + id);
            val.val(mapcntr.lat + "^" + mapcntr.lng);
            txt.val(mapcntr.lat + "^" + mapcntr.lng);
        }
    }
    function getcountrypos(country) {
        var list="austrailia;canada;hongkong,22.261088^114.196092;india;indonesia,-6.225207^106.844927;malaysia,3.134517^101.686876;phillipine,14.593339^121.036968;singapore,1.300930^103.840163;uk;usa";
        var rtn;
        $(list.split(";")).each(function (i, k) {
            var ar = k.split(",");
            if (ar[0] == country) {
                var lg = ar[1].split("^");
                rtn = { lat: parseFloat(lg[0]), lng: parseFloat(lg[1]) };
            }
                
        })
            return rtn
    }
}

function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13)) { return false; }
}
$(document).ready(function () {
    document.onkeypress = stopRKey;
});
function resetcenterimage(centerimage) {
    centerurl = "/images/mapcenter" + centerimage + ".png";
    $("#map-style1").remove();
    if(centerimage!="")
    styleInsert("map-style1", ".centerMarker { position: absolute; top: 50%;left: 50%;height: 100%; width: 100%;" +
        "background: url(" + centerurl + ") no-repeat; z-index: 1;cursor: pointer;}");
}

function mapdeclare(objname, maptype, optobj) {
    //optarr=[id, lat, lng, zoomlevel,maptype]
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
    var rtn = "";
    switch (objname) {
        case "map":
            var idopt = document.getElementById(optobj.id);
            var opt = {};
            switch (maptype) {
                case "google":
                    opt.center = { lat: optobj.lat, lng: optobj.lng };
                    opt.zoom = optobj.zoomlevel;
                    opt.streetViewControl = true,
                    opt.streetViewControlOptions = {
                        position: google.maps.ControlPosition.LEFT_BOTTOM
                    };
                    opt.zoomControl = true,
                     opt.zoomControlOptions = {
                         position: google.maps.ControlPosition.LEFT_BOTTOM
                     };
                    opt.mapTypeControl = true,
                  opt.mapTypeControlOptions = {
                      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                      position: google.maps.ControlPosition.LEFT_TOP
                  };
                    opt.scaleControl = false,
                    opt.rotateControl=false
                    rtn = new google.maps.Map(idopt, opt);
                    break;
                case "daum":
                    opt.center = new daum.maps.LatLng(optobj.lat, optobj.lng),
                    opt.level = optobj.zoomlevel;
                    // opt.mapTypeId = daum.maps.MapTypeId[optarr[3]];
                    rtn = new daum.maps.Map(idopt, opt);
                    if (optobj.mapmode != "NORMAL")
                        rtn.addOverlayMapTypeId(daum.maps.MapTypeId[optobj.mapmode])

                    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
                    var mapTypeControl = new daum.maps.MapTypeControl();

                    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
                    // daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
                    rtn.addControl(mapTypeControl, daum.maps.ControlPosition.TOPLEFT);

                    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
                    var zoomControl = new daum.maps.ZoomControl();
                    rtn.addControl(zoomControl, daum.maps.ControlPosition.LEFT);


                    break;
                case "naver":
                    opt.center = new naver.maps.LatLng(optobj.lat, optobj.lng),
                     opt.zoom = optobj.zoomlevel;
                    opt.mapTypeId = naver.maps.MapTypeId[optobj.mapmode];
                    //opt.scaleControl = false,
                    //opt.logoControl = false,
                    //opt.mapDataControl = false,
                    //opt.zoomControl = true,
                    opt.minZoom = 1;

                    opt.mapTypeControl= true,
                    opt.mapTypeControlOptions= {
                        style: naver.maps.MapTypeControlStyle.BUTTON,
                        position: naver.maps.Position.TOP_LEFT
                    },
                    opt.zoomControl= true,
                    opt.zoomControlOptions= {
                        style: naver.maps.ZoomControlStyle.SMALL,
                        position: naver.maps.Position.BOTTOM_LEFT
                    },
                    //opt.scaleControl= true,
                    //opt.scaleControlOptions= {
                    //    position: naver.maps.Position.BOTTOM_RIGHT
                    //},
                    //logoControl= true,
                    //logoControlOptions= {
                    //    position: naver.maps.Position.BOTTOM_RIGHT
                    //},
                    opt.mapDataControl= true,
                    opt.mapDataControlOptions= {
                        position: naver.maps.Position.BOTTOM_LEFT
                    }


                    rtn = new naver.maps.Map(idopt, opt);
                    break;
                case "streetdirectory":
                    opt.center = new GeoPoint(optobj.lng, optobj.lat),
                    opt.zoom = optobj.zoomlevel;
                    opt.showCopyright = false
                    rtn = new SD.genmap.Map(idopt, opt);
                    break;
            }
            break;
        case "marker":
            switch (maptype) {
                case "google":
                    var position = new google.maps.LatLng(optobj.lat, optobj.lng);
                    rtn = new google.maps.Marker({
                        position: position // 마커의 좌표
                        , map: map // 마커를 표시할 지도 객체
                        ,label: labels[optobj.i++ % labels.length]
                    });
                    map.setCenter(position);
                    break;
                case "daum":
                    var position = new daum.maps.LatLng(optobj.lat, optobj.lng);
                    var obj = {
                        position: position // 마커의 좌표
                        , map: map // 마커를 표시할 지도 객체
                    }
                    if (optobj.hasOwnProperty("markerimage")) obj.markerimage = optobj.markerimage;
                    rtn = new daum.maps.Marker(obj);
                    map.setCenter(position);
                    break;
                case "naver":
                    var position = new naver.maps.LatLng(optobj.lat, optobj.lng);
                    rtn=new naver.maps.Marker({
                        position: position
                         , map: map // 마커를 표시할 지도 객체
                    });
                    map.setCenter(position);
                    break;
                case "streetdirectory":
                    break;
            }
            break;
        case "infowindow":
            // styleInsert("infowin-css", ".infowin{background-image: url('/images/close.gif');background-repeat: no-repeat;background-position: right 5px top 5px;padding:5px}")
            switch (maptype) {
                case "google":
                    rtn = new google.maps.InfoWindow({
                        content: '<div class="infowin">' + infomaker(optobj).outerHTML() + '</div>'
                       , removable: true
                    });
                    break;
                case "daum":
                    rtn = new daum.maps.InfoWindow({
                        content: '<div class="infowin">' + infomaker(optobj).outerHTML() + '</div>'
                        , removable: true
                    });
                    break;
                case "naver":
                    rtn = new naver.maps.InfoWindow({
                        content: '<div class="infowin">' + infomaker(optobj).outerHTML() + '</div>'
                       , removable: true
                    });
                    break;
                case "streetdirectory":
                    break;
            }
            break;
        case "place":
            switch (maptype) {
                case "google":
                    //rtn = new google.maps.places.PlacesService(map);
                    rtn = new google.maps.places.AutocompleteService();
                    break;
                case "daum":case "naver":
                    rtn =  new daum.maps.services.Places();
                    break;
                //case "naver":
                //    rtn = new naver.maps.services.place();
                //    break;
            }
            break;
    }
    function infomaker(opt) {
        var dv = $("<div/>");
        if (opt.hasOwnProperty("name")) insert(opt.name);
        if (opt.hasOwnProperty("address")) insert(opt.address);
        if (opt.hasOwnProperty("lat")) insert(opt.lat+","+opt.lng);
        function insert(title) {
            //var tr = $("<tr/>").appendTo(tbody);
            //var colspan = "";
            //if (title != "")
            //    td = $("<td><label>" + title + "</label></td>").appendTo(tr);
            //else
            //    colspan = "colspan='2'";
             $("<div>" + title + "</div>").appendTo(dv);
        }
        return dv;
    }

    return rtn;
}

function resizemap(maptype, map, id, opt) {
    var w = opt.w, h = opt.h;
    switch (maptype) {
        case "google":
            $("#" + id).css({ width: w, height: h });
            google.maps.event.trigger(map, "resize");
            break;
        case "naver":
            map.setSize(new naver.maps.Size(w, h));
            break;
        case "daum":
            $("#" + id).css({ width: w, height: h });
            map.relayout();
            break;
        case "streetdirectory":
            map.resizeViewport(opt.w, opt.h);
            break;
    }
    var center = map.getCenter();
    map.setCenter(center);

    if (opt.hasOwnProperty("widthsidebyside")) {
        console.log($(window).width() - opt.widthsidebyside,$("parent" + opt.id).width())
        $("#parent" + opt.id).css({ float: "left", width: $(window).width() - opt.widthsidebyside-50 });
    }
}
var getpos;
function getLocation(callback,callopt) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            getpos = { lat: lat, lng: lng };
            if(typeof callback=="function")
            callbackexewithparam(callback,callopt);
        },errorCallback);
    } else {
       sweetmsgautoclose("Ooops!!","Geolocation is not supported by this browser.");
    }
    function errorCallback(error) {
        sweetmsgautoclose("Ooops!!", error.message);
        getpos = { lat: 37.561459, lng: 126.972462 };
        if (typeof callback == "function")
            callbackexewithparam(callback, callopt);
    }
}

var infowindow = "", position = "", locname = "";
function setMarkers(maptype,id, map1, markerarray, url, option) {
    // Adds markers to the map.
    var image = {
        url: url,//'/images/marker.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new daum.maps.Size(32, 32),
        // The origin for this image is (0, 0).
        origin: new daum.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new daum.maps.Point(0, 32)
    };
    //var image = {
    //    url: url,//'/images/marker.png',
    //    // This marker is 20 pixels wide by 32 pixels high.
    //    size: new google.maps.Size(32, 32),
    //    // The origin for this image is (0, 0).
    //    origin: new google.maps.Point(0, 0),
    //    // The anchor for this image is the base of the flagpole at (0, 32).
    //    anchor: new google.maps.Point(0, 32)
    //};
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };


    //var uluru = { lat: -25.363, lng: 131.044 };
    //var map = new google.maps.Map(document.getElementById('map'), {
    //    zoom: 4,
    //    center: uluru
    //});
    //var infowindow = new google.maps.InfoWindow({
    //    content: contentString
    //});
    //var marker = new google.maps.Marker({
    //    position: uluru,
    //    map: map,
    //    title: 'Uluru (Ayers Rock)'
    //});
    //marker.addListener('click', function () {
    //    infowindow.open(map, marker);
    //});

    var markerarraymade = [];
    for (var i = 0; i < markerarray.length; i++) {
        var arr = markerarray[i];
        if (typeof arr[6] != "undefined") image.url = arr[6];
        if (typeof option == "undefined") option = {};
        //option.position = { lat: arr[1], lng: arr[2] };
        //if (!option.hasOwnProperty("icon")) option.icon = image;
        // option.title = arr[0];
        // option.zIndex = arr[3];
        // option = {
        //    position: { lat: arr[1], lng: arr[2] },
        //    map: map1,
        //    icon: image,
        //    title: arr[0],
        //    zIndex: arr[3]
        //};
        
        option.position = new daum.maps.LatLng(arr[1], arr[2]);//in case daum
        option.map = map1;
      
        switch (maptye) {
            case "google":
                var marker = new google.maps.Marker(option);
                break;
            case "daum":
                var marker = new daum.maps.Marker(option);
                break;
            case "naver":
                break;
            case "streetdirectory":
                break;

        }
       // 
       
        var latlng = { lat: arr[1], lng: arr[2] };
        //infowindowView(marker, contentString, latlng);
        //var contentstr=infowindowCreate(map1,arr)

       // infowindowView(marker, arr[0], latlng, arr[4], arr[0], arr[5], id, map1);

        //streetView(id,latlng);

        markerarraymade.push(marker);
    }
    $("#clear" + id).click(function () {
        $(markerarraymade).each(function (i, k) {
            k.setMap(null);
        })
    })
}
function streetView(id, latlng, map) {
    createDv(id, "pano");
    var panodv = $("#pano");
    panodv.css({ width: "400px", height: "400px" });
    var panorama = new google.maps.StreetViewPanorama(
         document.getElementById('pano'), {
             position: latlng,
             pov: {
                 heading: 34,
                 pitch: 10
             }
         });
    map.setStreetView(panorama);
}
function geocodeAddress(address) {
    var geocoder = new google.maps.Geocoder();
    var ret = "hello";
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            ret = results[0].geometry.location;
        }
    });
    console.log(ret)
    return ret;
}
function createDv(id, newdvid) {
    //var container = $("<div id='container1'/>");
    $("#" + id).wrap("<div id='container1'/>");
    var container = $("#container1");
    //$(id).remove();
    var dv = $("<div/>").css({ float: "left" });
    dv.attr("id", newdvid);
    container.append(dv);
    return dv;
}
var mlist = [];
function geoSearchReload(maptype,id, address, resultmap) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (mlist.length > 0) {
                //remove all existing marker
                mlist[0].setMap(null);
                mlist = [];
            }
            var latlng = results[0].geometry.location;
            resultmap.setCenter(latlng);
            switch (maptype) {
                case "google":
                    var marker = new google.maps.Marker({
                        map: resultmap,
                        position: latlng
                    });
                    break;
                case "daum":
                    var marker = new daum.maps.Marker({
                        map: resultmap,
                        position: latlng
                    });
                    break;
                case "naver":
                    break;
                case "streetdirectory":
                    break;
            }
           
            infowindowView(maptype,marker, address, latlng);
            mlist.push(marker);
        }
    });
}
var map, marker;
var TILE_SIZE = 256;
//search
function makemarkerarray(dt, lat, lng, locid, markerimg) {
    var markerarray = [];
    $(dt).each(function (i, k) {
        if (k[lat] != "" && k[lng] != "") {
            var arr = [k[name], parseFloat(k[lat]), parseFloat(k[lng]), i + 1, k[locid], locid, k[markerimg]];
            markerarray.push(arr);
        }
    });
    return markerarray;
}
//infowindowView
function infowindowView(maptype,marker, content, latlng, locid1, name1, locid, id, map) {
    var cntid, gdt, cstyle;
    switch (maptype) {
        case "google":
            infowindow = new google.maps.InfoWindow({
                content: name1
            });
            break;
        case "daum":
            infowindow = new daum.maps.InfoWindow({
                content: name1
            });
            break;
    }
    infowindow.open(map, marker);
    marker.addListener('click', function (e) {
        if (infowindow) {
            infowindow.close();
        }
        reloadexe(id, [{ code: "code", value: [locid1] }], 'link');
        position = e.latLng;
        locname = name1;
    });
    marker.addListener("position_changed", function () {
        position = marker.getPosition();
        //for external usage of position info
    });
}
//#endregion

//#region misc
function clearinserted() {
    //remove all the inserted
    $("#spdlist").remove();
    $("#archivegdt").remove();
    $("#spdataajax").remove();

}
function sweetmsg(title, body) {
    //swal({
    //    title: "<span style='color:#F8BB86'>Filtering Method<span>"
    //, text: "$[data] will replaced with value string. ex)this is $[data].==> this is value"
    //, showConfirmButton: false
    //, html: true
    //});
    if (typeof body == "undefined" | body == "")
        swal({ title: "", body: title, html: true });
    else
        swal({ title: title, text: body, html: true });
}
function sweetmsgautoclose(title, body, options) {
    var timer = 2500;
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("timer")) timer = options.timer;
    }
    if (typeof body == "undefined" | body == "")
        swal({ title: "", body: title, html: true, timer: timer, showConfirmButton: false });
    else
        swal({ title: "<span style='color:#FF80FF'>" + title + "</span>", text: body, html: true, timer: timer, showConfirmButton: false });
}
function sweetmsgconfirm(confirmfunc, option) {
    var title = "Delete Confirm", body = "Are your sure to delete?", cookiekey = "cookie" + idMake();
    if (typeof option != "undefined") {
        if (option.hasOwnProperty("title")) title = option.title;
        if (option.hasOwnProperty("body")) body = option.body;
        if (option.hasOwnProperty("cookiekey")) cookiekey = option.cookiekey;
    }
    body = "<div>" + body + "</div><div style='margin:0'><label id='cbcookie' type='checkbox'><i class='fa fa-square-o imdim'/>Don't ask</label></div>"
    swal({
        title: title, text: body, html: true, type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55"
        , confirmButtonText: "Yes, do it!", cancelButtonText: "No, cancel!"
        , closeOnConfirm: true, closeOnCancel: true
    }
    , function (isConfirm) {
        if (isConfirm) {
            switch (typeof confirmfunc) {
                case "string":
                    eval(confirmfunc);
                    break;
                case "function":
                    confirmfunc();
                    break;
            }
        }
    });


    //$("#cbcookie").on("click", function () {
    //    $(this).find("i").removeClass();
    //    $(this).find("i").addClass("fa fa-check-square-o imdim");
    //    setCookie("noaskdel_" + cookiekey, true, 1);
    //});
}
function makeTable(id, data, css, option) {
    /* table dynamic creation
    var data = [["City 1", "City 2", "City 3"], //headers
    ["New York", "LA", "Seattle"],
    ["Paris", "Milan", "Rome"],
    ["Pittsburg", "Wichita", "Boise"]]
    var tb = makeTable(data);
    appendTableRow(tb, ['data', 'pager', 'rowNum']);
    $("#dvtable").append(tb);
    appendTableRow(tb, ["<input />", "<input type='checkbox'/>", "<textarea />"]);
    */

    var sty = "", hasthread = true, hasbackgroundcolor = false, hasborder = true;
    if (typeof option != "undefined") {
        if (option.hasOwnProperty("style")) sty = option.style;
        if (option.hasOwnProperty("hasthread")) hasthread = option.hasthread;
        if (option.hasOwnProperty("hasbackgroundcolor")) hasbackgroundcolor = option.hasbackgroundcolor;
        if (option.hasOwnProperty("hasborder")) hasborder = option.hasborder;
    }
    var table = $("<table style='border-collapse: collapse;width:100%;" + sty + "' />");
    if (!hasborder) table = $("<table  style='width:100%;" + sty + "' />");
    //table javascript
    if (id != "") table.attr("id", id);
    var thead = $("<thead/>");
    var tbody = $("<tbody />");
    table.append(thead);
    table.append(tbody);
    if (typeof css != "undefined" && css != "" && css != "general") {
        cssInit(id, "table", css);
    }
    else {
        //table.addClass('ui-widget-' + css);
        thead.addClass('ui-widget-header');
        tbody.addClass('ui-widget-content');
    }
    $.each(data, function (rowIndex, r) {
        var row = $("<tr/>");
        if (hasthread) {
            if (rowIndex == 0)
                thead.append(row);
            else
                tbody.append(row);
            if (hasbackgroundcolor && rowIndex != 0 && rowIndex % 2 == 0)
                row.css("background-color", "#e8eff5");
        }
        else {
            tbody.append(row);
            //if (hasbackgroundcolor && rowIndex % 2 == 0)
            //    row.css("background-color", "#e8eff5");
        }

        $.each(r, function (colIndex, c) {
            var cell = $("<t" + (rowIndex == 0 && hasthread ? "h" : "d") + "/>");
            if (hasborder)
                cell.attr("style", "padding:3px ;border: 1px solid #D3D3D3;border-collapse:collapse;vertical-align:top;");
            else
                cell.attr("style", "padding:3px ;border-collapse:collapse;vertical-align:top;");
            if (typeof c != "undefined" && c.indexOf("|") > -1) {
                var csp = c.split('|');
                if (csp.length > 1) {
                    row.append(cell.html(csp[0]));
                    $.each($.parseJSON(csp[1]), function (k, v) {
                        cell.attr(k, v);
                    });
                }
            }
            else
                row.append(cell.html(c));
            var wth = row.children().first().css("width");
            if (wth == "")
                wth = row.children().first().children().first().css("width");
            if (wth != "")
                row.css({ width: wth });
        });
    });
    //if rows are composed of checkbox add it on head too
    tbody.find("tr").first().find("td").each(function (i, k) {
        if ($(k).children("input:checkbox").length > 5) {
            var cls = $(k).children("input:checkbox").attr("class");
            thead.find("tr>th>span").each(function (a, b) {
                if (a == i)
                    $(b).prepend($("<input id='all" + cls + "' style='margin-right:5px' type='checkbox' onchange=\"chkalltoggle('" + cls + "')\"/>"))
            })
        }
    });
   
     return table;
}
function applybootstrap(tb, nth) {
    //nth:index of td that has form control
    //apply bootstrap css
    tb.find("tbody>tr").each(function (i, k) {
        $(k).find("td:eq(1)").children().not('i, span, div,label').addClass("form-control");
    });
}
function makeCtrboot(inp, rtntype) {
    // create control
    // inp=['type','value','id','class','attr']
    var t = inp[0].split(':');
    var type = t[0]
    if (t[0] == "radiolist") t[0] = "div";
    var rtn = document.createElement(t[0]);
    if (t.length > 1)
        type = t[1];
    //class or style
    //if both, join with "|"(ex:style|class)
    if (typeof inp[3] !== "undefined") {
        var dual = inp[3].split("|");
        if (dual.length == 1) {
            var st = inp[3].split(":");
            if (st.length > 1)
                rtn.setAttribute("style", inp[3]);
            else
                rtn.setAttribute("class", inp[3]);
        }
        else if (dual.length == 2) {
            var st = dual[0].split(":");
            if (st.length > 1) {
                rtn.setAttribute("style", dual[0]);
                rtn.setAttribute("class", dual[1]);
            }
            else {
                rtn.setAttribute("style", dual[1]);
                rtn.setAttribute("class", dual[0]);
            }
        }

    }
    //attribute(onlick...)
    if (typeof inp[4] !== "undefined" && inp[4] != "") {
        var st1 = inp[4].split("^");
        $.each(st1, function (i, k) {
            var st = k.split(":");
            rtn.setAttribute(st[0], st[1]);
        });
    }

    if (typeof inp[2] !== "undefined" && inp[2] != "") rtn.setAttribute("id", inp[2]);

    switch (type) {
        case "span": case "div": case "label":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                //rtn.innerText = inp[1];
                $(rtn).text(inp[1]);
            break;
        case "button":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                rtn.innerHTML = inp[1];
                rtn.setAttribute("type", "button");
                $(rtn).addClass("form-control");
            }
            break;
        case "i":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                rtn.setAttribute("class", inp[1]);

            break;
        case "textarea":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                $(rtn).text(inp[1]);
            if (typeof $(rtn).attr("rows") == "undefined")
                rtn.setAttribute("rows", "3");
            if (typeof $(rtn).attr("cols") == "undefined")
                rtn.setAttribute("cols", "20");
            $(rtn).addClass("form-control");
            break;
        case "input":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                rtn.setAttribute("value", inp[1]);
            rtn.setAttribute("type", "text");
            $(rtn).addClass("form-control");
            break;
        case "checkbox":

            if (typeof inp[1] != "undefined" && inp[1] != "") {
                if (inp[1] != true && inp[1] != false && inp[1].indexOf(";") > -1) {
                    //checked checkbox (text,value,checked:checked)
                    var val = inp[1].split(";");
                    var rtn = document.createElement("div");
                    rtn.setAttribute("id", inp[2]);
                    $(val).each(function (i, k) {
                        var opt = document.createElement("input");
                        opt.setAttribute("type", "checkbox");
                        if (i > 0)
                            opt.setAttribute("style", "margin-left:10px");
                        var op = k.toString().split(',');
                        var tx = document.createTextNode(op[0]);


                        if (op.length > 1)
                            var valu = op[1];
                        if (op.length == 1) valu = op[0];
                        opt.value = valu;
                        if (op.length > 2) {
                            for (s = 2; s < op.length; s++) {
                                var att = op[s].split(':');
                                opt.setAttribute(att[0], att[1]);
                            }
                        }
                        rtn.appendChild(opt);
                        rtn.appendChild(tx);
                    });

                   
                }
                else {
                    rtn.setAttribute("type", "checkbox");
                    if (inp[1] != "" && typeof inp[1] != "undefined")
                        rtn.setAttribute("checked", inp[1]);
                }
            }
            else
                rtn.setAttribute("type", "checkbox");
            $(rtn).addClass("form-control");
            break;
        case "text":
            rtn.setAttribute("type", type);
            rtn.setAttribute("value", inp[1]);
            break;
        case "color":
            rtn.setAttribute("type", type);
            var colval = inp[1];
            if (inp[1] == "") colval = "#FFFFFE";
            rtn.setAttribute("value", colval);
            rtn.setAttribute("class", "cpicker");
            break;
        case "number":
            rtn.setAttribute("type", type);
            rtn.setAttribute("value", inp[1]);
            if (t.length == 3)
                rtn.setAttribute("step", t[2]);

            break;
        case "datetime":
            rtn.setAttribute("type", "text");
            rtn.setAttribute("class", "datetime");
            break;
        case "select":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                //selected option (text,value,selected:selected)

                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    opt.text = op[0];

                    if (op.length > 1)
                        var valu = op[1];
                    if (op.length == 1) valu = op[0];
                    opt.value = valu;
                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    rtn.appendChild(opt);
                });
            }
            break;
        case "selectgroup":
            //<optgroup label='grp1'><option></option></optgroup>
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                //selected option (text,value,selected:selected)
                var grp, optgroup;
                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    if (grp != op[0]) {
                        optgroup = document.createElement("optgroup");
                        rtn.appendChild(optgroup);
                        grp = op[0];
                        if (grp != "" && typeof grp != "undefined")
                            $(optgroup).attr('label', op[0]);
                    }
                    optgroup.appendChild(opt);
                    opt.text = op[1];

                    if (op.length > 1)
                        var valu = op[2];
                    if (op.length == 2) valu = op[1];
                    opt.value = valu;
                    if (op.length > 3) {
                        for (s = 3; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }

                });
            }
            break;
        case "radiolist":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');

                $(val).each(function (i, k) {
                    var lb = document.createElement("label");
                    var opt = document.createElement("input");
                    lb.setAttribute("for", "rd" + i);
                    opt.setAttribute("type", "radio");
                    opt.setAttribute("id", "rd" + i);
                    opt.setAttribute("name", "rd" + i);

                    var op = k.toString().split(',');
                    lb.innerHTML = op[0];

                    if (op.length > 1)
                        var valu = op[1];
                    if (op.length == 1) valu = op[0];
                    opt.value = valu;
                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    rtn.appendChild(lb);
                    rtn.appendChild(opt);
                });
            }
            break;
        case "ul":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                $(val).each(function (i, k) {
                    var opt = $(document.createElement("li"));
                    var op = k.toString().split(',');
                    var ahr = $("<a/>");
                    var img = $("<img/>");
                    ahr.text = op[0];
                    switch (op[2]) {
                        case "img":
                            img.src = op[1];
                            ahr.append(img);
                            break;
                        case "icon":
                            img = $("<i/>");
                            img.attr("class", op[1]);
                            ahr.append(img);
                            break;
                    }
                    opt.append(ahr);

                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    $(rtn).append(opt);
                });
            }
            break;
        case "selectimage":
            //value;text;imgsrc;description(index:0;1;2;3)
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    opt.value = op[0];
                    $(opt).text(op[1]);
                    //opt.text = op[1];
                    opt.setAttribute("data-imagesrc", op[2]);
                    opt.setAttribute("data-description", op[3]);
                    //if (op.length > 2) {
                    //    for (s = 2; s < op.length; s++) {
                    //        var att = op[s].split(':');
                    //        opt.setAttribute(att[0], att[1]);
                    //    }
                    //}
                    rtn.setAttribute("class", "selectimage");
                    rtn.appendChild(opt);
                });

            }
            break;
        case "multiselect":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                for (i in val) {
                    if (val[i] != "" && typeof val[i] != "function") {
                        var opt = document.createElement("option");
                        var op = val[i].split(',');
                        opt.text = op[0];
                        if (op.length > 1)
                            var valu = op[1];
                        if (valu == "" | op.length == 1) valu = op[0];
                        opt.value = valu;
                        if (op.length > 2) {
                            for (s = 2; s < op.length; s++) {
                                var att = op[s].split(':');
                                opt.setAttribute(att[0], att[1]);
                            }
                        }
                        rtn.appendChild(opt);
                        rtn.setAttribute("class", "multiselect");
                        rtn.setAttribute("multiple", "multiple");
                    }
                }
            }
            break;
        case "jstree":
            break;
    }
    jQuery.fn.outerHTML = function (s) {
        return s
                ? this.before(s).remove()
                : jQuery("<p>").append(this.eq(0).clone()).html();
    };
    if (!typeof (rtntype) === "undefined")
        rtn = rtn;
    else
        rtn = $(rtn).outerHTML();
    return rtn;
}
function makeCtr(inp, rtntype) {
    // create control
    // inp=['type','value','id','class','attr']
    var t = inp[0].split(':');
    var type = t[0]
    if (t[0] == "radiolist") t[0] = "div";
    var rtn = document.createElement(t[0]);
    if (t.length > 1)
        type = t[1];
    //class or style
    //if both, join with "|"(ex:style|class)
    if (typeof inp[3] !== "undefined") {
        var dual = inp[3].split("|");
        if (dual.length == 1) {
            var st = inp[3].split(":");
            if (st.length > 1)
                rtn.setAttribute("style", inp[3]);
            else
                rtn.setAttribute("class", inp[3]);
        }
        else if (dual.length == 2) {
            var st = dual[0].split(":");
            if (st.length > 1) {
                rtn.setAttribute("style", dual[0]);
                rtn.setAttribute("class", dual[1]);
            }
            else {
                rtn.setAttribute("style", dual[1]);
                rtn.setAttribute("class", dual[0]);
            }
        }
    }
    //attribute(onlick...)
    if (typeof inp[4] !== "undefined" && inp[4] != "") {
        var st1 = inp[4].split("^");
        $.each(st1, function (i, k) {
            var st = k.split(":");
            if(st[0]!="" && st[0]!="placeholder")
            rtn.setAttribute(st[0], st[1]);
        });
    }

    if (typeof inp[2] !== "undefined" && inp[2] != "") rtn.setAttribute("id", inp[2]);

    switch (type) {
        case "span": case "div": case "label":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                //rtn.innerText = inp[1];
                $(rtn).text(inp[1]);
            break;
        case "button":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                rtn.setAttribute("type", "button");
                $(rtn).addClass("form-control");
                rtn.setAttribute("value", inp[1]);
            }
            break;
        case "i":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                rtn.setAttribute("class", inp[1]);
            break;
        case "textarea":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                $(rtn).text(inp[1]);
            if (typeof $(rtn).attr("rows") == "undefined")
                rtn.setAttribute("rows", "3");
            if (typeof $(rtn).attr("cols") == "undefined")
                rtn.setAttribute("cols", "20");
            $(rtn).addClass("form-control");
            break;
        case "input":
            if (typeof inp[1] !== "undefined" && inp[1] != "")
                rtn.setAttribute("value", inp[1]);
           // rtn.setAttribute("type", "text");
            $(rtn).addClass("form-control");
            break;
        case "checkbox":
            if (typeof inp[1] != "undefined" && inp[1] != "") {
                if (inp[1] != true && inp[1] != false && inp[1].indexOf(";") > -1) {
                    //checked checkbox (text,value,checked:checked)
                    var val = inp[1].split(";");
                    var rtn = document.createElement("div");
                    rtn.setAttribute("id", inp[2]);
                    $(val).each(function (i, k) {
                        var opt = document.createElement("input");
                        opt.setAttribute("type", "checkbox");
                        if (i > 0)
                            opt.setAttribute("style", "margin-left:10px");
                        var op = k.toString().split(',');
                        var tx = document.createTextNode(op[0]);


                        if (op.length > 1)
                            var valu = op[1];
                        if (op.length == 1) valu = op[0];
                        opt.value = valu;
                        if (op.length > 2) {
                            for (s = 2; s < op.length; s++) {
                                var att = op[s].split(':');
                                opt.setAttribute(att[0], att[1]);
                            }
                        }
                        rtn.appendChild(opt);
                        rtn.appendChild(tx);
                    });
                }
                else {
                    rtn.setAttribute("type", "checkbox");
                    if (inp[1] != "" && typeof inp[1] != "undefined")
                        rtn.setAttribute("checked", inp[1]);
                }
            }
            else
                rtn.setAttribute("type", "checkbox");
            $(rtn).addClass("form-control");
            break;
        case "text":
            rtn.setAttribute("type", type);
            rtn.setAttribute("value", inp[1]);
            break;
        case "color":
            rtn.setAttribute("type", type);
            var colval = inp[1];
            if (inp[1] == "") colval = "#FFFFFE";
            rtn.setAttribute("value", colval);
            rtn.setAttribute("class", "cpicker");
            break;
        case "number":
            rtn.setAttribute("type", type);
            rtn.setAttribute("value", inp[1]);
            if (t.length == 3)
                rtn.setAttribute("step", t[2]);
            $(rtn).addClass("form-control");
            break;
        case "datetime":
            rtn.setAttribute("type", "text");
            rtn.setAttribute("class", "datetime");
            $(rtn).addClass("form-control");
            break;
        case "select":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                //selected option (text,value,selected:selected)

                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    opt.text = op[0];

                    if (op.length > 1)
                        var valu = op[1];
                    if (op.length == 1) valu = op[0];
                    opt.value = valu;
                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    rtn.appendChild(opt);
                });
            }
            $(rtn).addClass("form-control");
            break;
        case "selectgroup":
            //<optgroup label='grp1'><option></option></optgroup>
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                //selected option (text,value,selected:selected)
                var grp, optgroup;
                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    if (grp != op[0]) {
                        optgroup = document.createElement("optgroup");
                        rtn.appendChild(optgroup);
                        grp = op[0];
                        if (grp != "" && typeof grp != "undefined")
                            $(optgroup).attr('label', op[0]);
                    }
                    optgroup.appendChild(opt);
                    opt.text = op[1];

                    if (op.length == 2) valu = op[1];
                    if (op.length > 2)
                        var valu = op[2];
                    opt.value = valu;
                    if (op.length > 3) {
                        for (s = 3; s < op.length; s++) {
                            var att = op[s].split(':');

                            opt.setAttribute(att[0], att[1]);
                        }
                    }

                });
            }
            break;
        case "radiolist":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');

                $(val).each(function (i, k) {
                    var lb = document.createElement("label");
                    var opt = document.createElement("input");
                    lb.setAttribute("for", "rd" + i);
                    opt.setAttribute("type", "radio");
                    opt.setAttribute("id", "rd" + i);
                    opt.setAttribute("name", "rd" + i);

                    var op = k.toString().split(',');
                    lb.innerHTML = op[0];

                    if (op.length > 1)
                        var valu = op[1];
                    if (op.length == 1) valu = op[0];
                    opt.value = valu;
                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    rtn.appendChild(lb);
                    rtn.appendChild(opt);
                });
                $(rtn).addClass("form-control");
            }
            break;
        case "ul":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                $(val).each(function (i, k) {
                    var opt = $(document.createElement("li"));
                    var op = k.toString().split(',');
                    var ahr = $("<a/>");
                    var img = $("<img/>");
                    ahr.text = op[0];
                    switch (op[2]) {
                        case "img":
                            img.src = op[1];
                            ahr.append(img);
                            break;
                        case "icon":
                            img = $("<i/>");
                            img.attr("class", op[1]);
                            ahr.append(img);
                            break;
                    }
                    opt.append(ahr);

                    if (op.length > 2) {
                        for (s = 2; s < op.length; s++) {
                            var att = op[s].split(':');
                            opt.setAttribute(att[0], att[1]);
                        }
                    }
                    $(rtn).append(opt);
                });
            }
            break;
        case "selectimage":
            //value;text;imgsrc;description(index:0;1;2;3)
            //getvalue: $(selector).data('ddslick').selectedData.value
            //setvalue:$(selector).ddslick('select', {index: i });
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                $(val).each(function (i, k) {
                    var opt = document.createElement("option");
                    var op = k.toString().split(',');
                    opt.value = op[1];
                    $(opt).text(op[0]);
                    //opt.text = op[1];
                    opt.setAttribute("data-imagesrc", op[2]);
                    opt.setAttribute("data-description", op[3]);
                    //if (op.length > 2) {
                    //    for (s = 2; s < op.length; s++) {
                    //        var att = op[s].split(':');
                    //        opt.setAttribute(att[0], att[1]);
                    //    }
                    //}
                    rtn.setAttribute("class", "selectimage");
                    rtn.appendChild(opt);
                });
            }
            break;
        case "multiselect":
            if (typeof inp[1] !== "undefined" && inp[1] != "") {
                var val = inp[1].split(';');
                for (i in val) {
                    if (val[i] != "" && typeof val[i] != "function") {
                        var opt = document.createElement("option");
                        var op = val[i].split(',');
                        opt.text = op[0];
                        if (op.length > 1)
                            var valu = op[1];
                        if (valu == "" | op.length == 1) valu = op[0];
                        opt.value = valu;
                        if (op.length > 2) {
                            for (s = 2; s < op.length; s++) {
                                var att = op[s].split(':');
                                opt.setAttribute(att[0], att[1]);
                            }
                        }
                        rtn.appendChild(opt);
                        rtn.setAttribute("class", "multiselect");
                        rtn.setAttribute("multiple", "multiple");
                    }
                }
            }
            break;
        case "jstree":
            break;
    }
    if (typeof inp[4] !== "undefined" && inp[4] != "") {
        var st1 = inp[4].split("^");
        $.each(st1, function (i, k) {
            var st = k.split(":");
            if (st[0] != "" && st[0] == "placeholder")
                $(rtn).prepend($('<option value="" disabled selected hidden>' + st[1] + '</option>'));
        });
    }

    jQuery.fn.outerHTML = function (s) {
        return s
                ? this.before(s).remove()
                : jQuery("<p>").append(this.eq(0).clone()).html();
    };
    if (!typeof (rtntype) === "undefined")
        rtn = rtn;
    else
        rtn = $(rtn).outerHTML();
    return rtn;
}
function appendTableRow(table, rowData) {
    var row = $("<tr/>");
    var prevtr = $(table.find('tbody>tr:nth-last-child(1)')).attr("style");
    var secondtr = table.find('tbody>tr:nth-child(2)').css("background-color");
    if (typeof prevtr == "undefined")
        row.css("background-color", secondtr);

    var lastRow = row.appendTo(table.find('tbody:last'));
    $("tr:even").css("class", "even");
    $.each(rowData, function (colIndex, c) {
        var cell = $("<td  style='padding:3px ;border: 1px solid #D3D3D3;border-collapse:collapse;'/>");
        if (typeof c != "undefined" && c != "" && c.toString().indexOf("|") > -1) {
            var csp = c.split('|');

            if (csp.length > 1) {
                lastRow.append(cell.html(csp[0]));
                $.each($.parseJSON(csp[1]), function (k, v) {
                    cell.attr(k, v);
                });
            }
        }
        else
            lastRow.append(cell.html(c));
    });
    return table;
}
function paginathing(id, opt) {
    //pagination insert UL or Table
    //id: any of #id, .class, $('#id'),$(".class")
    //var opt = {
    //    perPage: perpage
    //, limitPagination: limit
    //, containerClass: container
    //, insertAfter: insert
    //, currentpage:1
    //};
    styleInsert("panel-footer", ".panel-footer {   padding: 10px 15px;    background-color: #f5f5f5;    border-top: 1px solid #ddd;    border-bottom-right-radius: 3px;    border-bottom-left-radius: 3px;}");
    var type = typeof id, ctr;
    switch (type) {
        case "object":
            ctr = id;
            break;
        case "string":
            ctr = $(id);
            break;
    }
    var perpage = 6, limit = 8, container = "panel-footer",
        insert = "#" + ctr.attr("id");
    if (typeof opt != "undefined") {
        if (opt.hasOwnProperty("perPage")) perpage = opt.perPage;
        if (opt.hasOwnProperty("limitPagination")) limit = opt.limitPagination;
        if (opt.hasOwnProperty("containerClass")) container = opt.containerClass;
        if (opt.hasOwnProperty("insertAfter")) insert = opt.insertAfter;
    }
    var num = ctr.find("tbody>tr").length;
    if (num / perpage < limit) limit = Math.ceil(num / perpage);
    opt = {
        perPage: perpage
        , limitPagination: limit
        //, containerClass: container
        , insertAfter: null
    };

    var nav = ctr.next().prop("tabName");
    if (nav == "NAV") ctr.next().remove();
    $("." + container).remove();
    $(".pagination-container").remove();

    switch (ctr.prop('tagName')) {
        case "TABLE":
            opt.insertAfter = insert;// "#" + ctr.attr("id");
            if (ctr.find("tbody").length > 0 && limit > 1) {
                ctr.find("tbody").paginathing(opt);
                $(".pagination-container").find("ul").css({ margin: "5px 0" })
            }
            break;
        case "UL":
            opt.containerClass = container;// "panel-footer";
            ctr.paginathing(opt);
            break;
    }
}
function resizeIframe($contain) {
    var $you = $($contain.find("iframe"));
    var ratio = 9 / 16;//parseFloat($you.height() / $you.width());
    var rratio = 16 / 9;
    $you.data('aspectRatio', ratio)

    var newWidth = $contain.width();
    var newHeight = $contain.height();
    var newratio = parseFloat(newHeight / newWidth);
    if (ratio < newratio)
        $you.width(newWidth)
            .height(parseInt(parseFloat(newWidth) * ratio));
    else
        $you.height(newHeight)
            .width(parseInt(parseFloat(newHeight) * rratio));
    $contain.resize(function () {
        var newWidth = $contain.width();
        var newHeight = $contain.height();
        var newratio = parseFloat(newHeight / newWidth);
        if (ratio < newratio)
            $you.width(newWidth)
                .height(parseInt(parseFloat(newWidth) * ratio));
        else
            $you.height(newHeight)
                .width(parseInt(parseFloat(newHeight) * rratio));
    }).resize();
}
var pinstatus = false;
function refreshLayout() {
    var mstyle = selectimctable(menuid, '', '');
    if (typeof (mstyle) == "undefined" | mstyle == "") {
        mstyle = {};
        mstyle.width = 250;
        mstyle.backcolor = "#4A6184";
    }
    if (mstyle.width == "") mstyle.width = 250;
    if (pinstatus) {
        $("#dvMenu1").attr("style", "float:left;position:absolute;width:" + mstyle.width + ";height:" + $(window).height() + "px");
        var w = $(window).width() - parseInt(mstyle.width) - 5;
        console.log(w, mstyle.width)
        $('#tableinsert').attr("style", "clear:both;padding:5px 0 0 5px;float:right;width:" + w + "px");
    }
    else {
        $("#dvMenu1").removeAttr("style");
        $('#tableinsert').removeAttr("style");
    }
    //initDisplay('', '');

}

var jsonlang = "", jsonlist = "";
function multilangReadAjax(language) {
    var pfx = "js2/";
    if (imapp) pfx = "/js2/";
    if (typeof language == "undefined")
        language = $("#selCountry").val();
    if (typeof language == "undefined") language = 'kr';
    var path = pfx+"jquery-lang-js-master/js/langpack/";
    path += language + ".json";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ReadData",
        data: { path: JSON.stringify(path) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            jsonlang = data.d;
            //var Lang = new Lang('en')
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }

    });
}
function multilangReadListAjax(callback) {
    var list, list1 = [];
    var pfx = "js2/";
    if (imapp) pfx = "/js2/";
    var path = pfx+"jquery-lang-js-master/js/langpack/";
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/ReadDataList",
        data: { path: JSON.stringify(path), filetype: JSON.stringify("json") },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            if (data.d != "") {
                list = data.d.split(',');
            }

            $(list).each(function (i, k) {
                list1.push(k.replace(".json", ""));
            });
            jsonlist = list1.join(';');
            if (typeof callback === "function") callback(jsonlist);
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
function multilangInject() {
    // var el = $(data).find('[lang]')
    var langlist = [], exlist = [];
    if (jsonlang == "") multilangReadAjax();
    if (jsonlang != "") {
        var lang1 = JSON.parse(jsonlang);
        langlist = (Object.keys(lang1.token))
    }
    //add lang="en"
    var data = (document.documentElement.innerHTML);
    var exclude = $(data).find("[lang='en']");
    if (exclude.length > 0) {
        $(exclude).each(function (i, k) {
            $.merge(exlist, $(k).find("*"));
        });
    }
    var domlist = ['label', 'input', 'button', 'option', 'textarea', 'img', 'a', 'i', 'p', 'span'];
    $(domlist).each(function (a, b) {
        var el = $(data).find(b)
        $(el).each(function (i, k) {
            var txt = "";
            if ($(k).css("display") != "none") {
                if ($(k).attr("title")) {
                    txt = $(k).attr("title");
                    if ($.inArray(txt, langlist) > -1)
                        $(k).attr("lang", "en");
                }
                switch ($(k).get(0).tagName.toLowerCase()) {
                    case "span": case "button": case "option": case "a": case "p":
                        txt = $(k).text();
                        break;
                    case "input":
                    case "textarea":
                        txt = $(k).val();
                        break;
                    case "img":
                        if (typeof $(k).attr("alt") != "undefined")
                            txt = $(k).attr("alt");
                        break;

                }

                if ($.inArray(txt, langlist) > -1 && $.inArray(k, exlist) == -1) {
                    var target = $($('body').find(b)[i]);
                    //var wrap=$("<div/>");
                    //wrap.insertAfter(target);
                    //var cl = target.clone().attr('lang', 'en');
                    //wrap.append(cl);
                    //cl.unwrap();
                    // target.remove();
                    target.attr('lang', 'en')
                }
            }
        });
    });
}


//region expand collapse control
function wrapcontrol(object, title, inobj, type,callback,paramarr1) {
    //object:control div or its id, title: tab or head title txt, inobj:inner div id or object, callback:function aft expand or collapse
    var id = object, inid = inobj;
    if (typeof object == "object") id = object.attr("id");
    if (typeof inobj == "object") {
        inid = inobj.attr("id");
        if (typeof inid == "undefined") {
            inid = "in" + id;
            inobj.attr("id", inid);
        }
    }
  
    if ($("#" + id).closest("table").attr("id") == "tblEditor")
        return false;
   // $("#" + id).prepend($("<ul><li><a href='#" + inid + "'>" + title + "</a></li></ul>"));
    setTimeout(function () {
        var content = $("#" + id);
        var panel = $("<div class='panel panel-info' style='clear:both'/>").insertBefore(content);
        var head = $('<div class="panel-heading" />');
        var htitle = $('<h3 class="panel-title pull-left">' + title + '</h3>').appendTo(head);
        var hbtn = $("<i id='irebtn" + id+"' class='fa fa-plus-square-o pull-right imdim'/>").appendTo(head);
        head.append($("<div class='clearfix'/>"));
        panel.append(head);

        var body = $("<div class='panel-body'/>");
        $(["jqgrid", "map", "fullcalendar"]).each(function (a, b) {
            if (content.hasClass(b) | content.children().hasClass(b)) {
                body.css("padding", 0);
                //if (b != "map")
                //panel.css("border", "none");
            }
        });
   
        content.wrap(body);
        panel.append(content.parent());
      
        $("#irebtn" + id).click(function (e) {
            expandcollapsediv($("#" + id), callback, paramarr1);
            if (typeof callback == "function" && inid.indexOf("gbox_jq")>-1)
                callbackexewithparam(callback, paramarr1);
            //if($('#'+id).hasClass('fullcalendar'))
          //      $('#' + id).fullCalendar('option', 'height', $(window).height());
        });
    }, 0);
    function xy(that, e) {
        var offset = that.offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);
        cursor = [relativeX, relativeY];
    }
}
var fullwin = false, cursor = [0,0],originopt,elementparent,originw,originh;
function expandcollapsediv(element, callback, paramarr) {
    if (fullwin) {
        element.removeAttr("style");
        element.attr("style", styval);
        var elementchildren = element.parent().children().not(".panel-primary");
        elementparent.append(elementchildren);//because inputdropdown moved to child of td, others are not affected
        $("#elecontain").remove();
        elementparent.css("position", "relative");
        if (element.find(".map").length > 0) {
            setTimeout(function () {
                element.css("float", "right");
                var open = false;
                if ($(".hidescroll").css("display") == "block")
                    open = true;
                $("#containclose").click();
               if(open)
                    $("#containopen").click();
                $(".hidescroll").css("height", element.height());
            }, 100);
        }

        setTimeout(function () {
            if (typeof callback == "function") {
                if (typeof paramarr != "undefined" && typeof originopt != "undefined" && paramarr.length >= 3) {
                    paramarr[3].w = originw, paramarr[3].h = originh;
                }
                if (element.hasClass("fullcalendar") | element.find(".fullcalendar").length > 0) {
                    paramarr.splice(1, 1, originh);
                }
                if (element.hasClass("googlechart") | element.find(".googlechart").length > 0) {
                    paramarr[1].gdt.setting[2][1] = originh;
                }

                console.log(paramarr);
                callbackexewithparam(callback, paramarr);
            }
        }, 0);
        window.scrollTo(cursor[0], cursor[1]);
        fullwin = false;
    }
    else {
        //container move top:0,left:0,position:absolute
        originw = element.parent().width();
        originh = element.parent().height();
        // var id = element.attr("id");
        styval = element.attr("style");
        element.removeAttr("style");
        var td = element.closest("td")// move element child of td
        elementparent = element.parent();//when returning place to append
        var elementwrap = $("<div  id='elecontain'></div>");
       
        elementwrap.append(elementparent.children());
        elementwrap.prependTo(td);
        var eh = element.height(), wh = $(document).height();
        if (eh > wh) wh = eh;
        elementwrap.css({
            position: "absolute", left: 0, top: 0, bottom: 0, right: 0, width: "99.3%", height:wh
            , "background-color": "white", padding: "0 0 0 5px", "z-index": 10001
        });
        var sty = { position: "absolute", left: 0, top: 0 };
        var head = $('<div class="panel-heading" style="height:35px"/>');
        var htitle = $('<h3 class="panel-title pull-left">' + 'hh' + '</h3>').appendTo(head);
        var hbtn = $("<i class='fa fa-times-circle pull-right imdim'/>").appendTo(head);
        var panel = $("<div class='panel panel-primary'/>").append(head);
        elementwrap.prepend(panel);
        window.scrollTo(0, 0);
        fullwin = true;
        hbtn.on("click", function () {
            console.log(paramarr);
            expandcollapsediv(element, callback, paramarr)
        });
        if (typeof callback == "function") {
            if (element.find(".map").length > 0) {
                originopt = paramarr[3], clone = originopt;
                clone.w = $(window).width() - 15;
                clone.h = $(window).height();
                if (widthsidebyside(element) > 15)
                    clone.widthsidebyside = widthsidebyside(element);
                paramarr.splice(3, 1, clone);
                callbackexewithparam(callback, paramarr);
                setTimeout(function () {
                    var open = false;
                    if ($(".hidescroll").css("display") == "block")
                        open = true;
                    $("#containclose").click();
                    if (open)
                        $("#containopen").click();
                    $(".hidescroll").css("height", clone.h);
                }, 100);
            }
            else if (element.hasClass("googlechart")| element.find(".googlechart").length > 0) {
                var originh = paramarr[1].gdt.setting[2][1];
                paramarr[1].gdt.setting[2][1] = $(window).height();
                paramarr[1].gdt.setting[0][1] = "none";
                callbackexewithparam(callback, paramarr);
                console.log(paramarr)
            }
            else
                callbackexewithparam(callback, paramarr);
        }

        $(["map", "fullcalendar", "googlechart"]).each(function (i, k) {
            if (element.hasClass(k) | element.find("."+k).length > 0)
                panel.css("margin-bottom", 0);
        });
        if (element.find(".map").length == 0)
            elementwrap.css("z-index", 10004);
    }
    function widthsidebyside(element) {
        var rtn = 15;
        $(element.siblings().not($(".panel-primary"))).each(function (i, k) {
            if (rtn < $(k).width())
                rtn = $(k).width();
        });
        return rtn;
    }
}
function inputdropdown(objid, options) {
    //objct insert into dropdownlist
    if (typeof objid == "object") objid = objid.attr("id");
    var dropdiv = $("<div id='dvi" + objid + "' class='ddlDiv'  style='margin-bottom:2px' ></div>");
    var textbox = "txinput"+objid, valuebox = "valinput"+objid, wth = "", title = "", optdialog="";
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("textbox")) textbox = options.textbox;
        if (options.hasOwnProperty("valuebox")) valuebox = options.valuebox;
        if (options.hasOwnProperty("wth")) wth = options.width;
        if (options.hasOwnProperty("optdialog")) optdialog = options.optdialog;
        if (options.hasOwnProperty("title")) title = options.title;
    }
    $("#" + objid).wrap(dropdiv);
    $("#dvi" + objid).wrap("<div id='dv" + objid + "'></div>");
    $("#dvi" + objid).css({ "margin-top": "40px" });

    var input = document.createElement('input');
    input.id = textbox;
    input.setAttribute("class", "ddlTextbox form-control");
    input.setAttribute("type", "text");
    input.setAttribute("aria-describedby", "sptitle");
    input.setAttribute("autocomplete", "off");

    $(input).on("click", function () {
        var dv = $("#dvi" + objid);
        if (dv.css("visibility") == "visible")
            dv.css("visibility", "hidden");
        else
            dv.css("visibility", "visible");
    })
    $(input).css({ "background-image": "url('/images/arrow_down.png')" });
    var input1 = document.createElement('input');
    input1.id = valuebox;
    input1.setAttribute("style", "display:none");
    if (title != "") {
        var dvrow = $("<div class='row'/>");
        var dvgrp = $("<div class='col-lg-" + wth + "''/>").appendTo(dvrow);
        var dv = $("<div class='input-group'/>").appendTo(dvgrp);
        var title = $("<span class='input-group-addon' id='sptitle'>" + title + "</span>").appendTo(dv);
        dv.append($(input));
        $("#dv" + objid).append(dvrow);
    }
    else
        $("#dv" + objid).append(input);
    $("#dv" + objid).css({ "margin-bottom": "2px" });
    document.getElementById("dv" + objid).appendChild(input1);
    //var w = $("#dv" + objid + " .input-group").width();
    var optwth = 400;
    if (optdialog.hasOwnProperty("width")) optwth = optdialog.width;

    $("#dvi" + objid).css("width", optwth);
    console.log(optwth)

    //$(document).mouseup(function (e) {
    //    var container = $(".ddlDiv");
    //    var insider = container.children();
    //    var tbox = $(".ddlTextbox");
    //    var node = $(".jstree-icon.jstree-ocl");
    //    var exp = $("#dvexpand"), lb = $("#lbexpand");
    //    if (!insider.is(e.target)  // if the target of the click isn't the container...
    //      //&& !tbox.is(e.target) && !node.is(e.target) && $(e.target)[0].nodeName != "I"
    //      //  && !exp.is(e.target) && !lb.is(e.target)
    //    ) // ... nor a descendant of the container
    //    {
    //        container.css("visibility", "hidden");
    //    }
    //});
}
function inputdialog(objid, options,callback,callopt) {
    //object insert into dialog
    if (typeof objid == "object") objid = objid.attr("id");
    var textbox = "txinput" + objid, valuebox = "valinput" + objid, wth = "", title = "", optdialog = "";
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("textbox")) textbox = options.textbox;
        if (options.hasOwnProperty("valuebox")) valuebox = options.valuebox;
        if (options.hasOwnProperty("wth")) wth = options.width;
        if (options.hasOwnProperty("title")) title = options.title;
        if (options.hasOwnProperty("optdialog")) optdialog = options.optdialog;
    }
    var contain = $("<div style='margin-bottom:2px' />").insertBefore($("#" + objid));
    var inputt = $("<input id='" + textbox + "' class='ddlTextbox form-control'/>");
    inputt.css({ "background-image": "url('/images/paperairplane.png')" });

    if (title != "") {
        var dvrow = $("<div class='row'/>");
        var dvgrp = $("<div class='col-lg-" + wth + "''/>").appendTo(dvrow);
        var dv = $("<div class='input-group'/>").appendTo(dvgrp);
        var title = $("<span class='input-group-addon' id='sptitle'>" + title + "</span>").appendTo(dv);
        dv.append(inputt);
        contain.append(dvrow);
    }
    else
        contain.append(inputt);

    var inputv = $("<input id='" + valuebox + "' style='display:none'/>").appendTo(contain);

    $("#" + objid).hide();
    var diabox = $("<div />").appendTo(contain);
    var optwth = 400;
    if (optdialog.hasOwnProperty("width")) optwth = optdialog.width;
    diabox.append($("#" + objid));
    inputt.on("click", function () {
        $("#" + objid).show();
        diabox.append($("#" + objid));
        var opt = {
            width: optwth,
            autoResize: true,
            modal: false,
            autoOpen: true,
            title: "Tree Select",
            stack: false,
            hide: {
                effect: "explode",
                duration: 1000
            },
            close: function (event, ui) {
                if (!isorigin)
                    dialogexpandcollapse(callback, callopt);
                $("#" + objid).hide().appendTo(contain);
                $(this).dialog('destroy').remove();
            },
            buttons: [
                //{
                //    text: "Apply",
                //    icons: {
                //        primary: "ui-icon-check"
                //    },
                //    click: function () {
                //        var selval = $("#" + objid).jstree("get_selected"),
                //            selarr = $("#" + objid).jstree().get_selected(true), seltxt = [];
                //        $(selarr).each(function (i, k) {
                //            seltxt.push(k.text);
                //        });
                //        inputv.val(selval);
                //        inputt.val(seltxt.join(','));
                //        $("#" + objid).hide().appendTo(contain);
                //        $(this).dialog('destroy').remove();
                //    }
                //},
                {
                    text: "Close",
                    icons: {
                        primary: "ui-icon-close"
                    },
                    click: function () {
                        if (!isorigin)
                            dialogexpandcollapse(callback, callopt);
                        $("#" + objid).hide().appendTo(contain);
                        $(this).dialog('destroy').remove();
                    }
                }
            ]
        }
        if (optdialog != "") {
            $(Object.keys(optdialog)).each(function (a, b) {
                if (b == "button") {
                    $(optdialog["button"]).each(function (c, d) {
                        $(opt.button).each(function (e, f) {
                            if (d.text == f.text)
                                f.click = d.click;
                        });
                    })
                }
                else
                    opt[b] = optdialog[b];
            });
        }
        diabox.dialog(opt);
        diabox.closest(".ui-dialog").css("z-index", 10002);
        if (diabox.find(".map").length>0)
        diabox.closest(".ui-dialog-content").css("padding", "0");
        dialogfullscreen(callback,callopt);

    });
   
}
function bootmodal(body,option) {
    body.attr("data-toggle", "modal");
    body.modal("show");
    //var dv=$('<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"/>'),
    //    cover = $("<div class='model-content'/>").appendTo(dv);
    //dv.insertBefore(body);
    //cover.append(body);
    

}
var originaldialogcss,isorigin=true,originw,originh;
function dialogfullscreen(callback,callopt) {
    var nbtn = $('<button class="ui-button ui-widget ui-corner-all" title="expand"><span class="ui-icon ui-icon-triangle-1-ne"></span></button>');
    nbtn.button().css({ position: 'relative', float: "right", margin: "5px 10px 5px 5px", height: "20px", padding: "4px 3px 0 1px", width: "20px" }).insertBefore($(".ui-dialog").find("button:eq(0)"));
     $('.ui-dialog-title').css("width", "70%");
     originaldialogcss = $('.ui-dialog').attr("style");
     originw = $('.ui-dialog-content').width(), originh = $('.ui-dialog-content').height()
    nbtn.on("click", function () {
        dialogexpandcollapse(callback, callopt);
    });
}
function dialogexpandcollapse(callback, callopt) {
    var nbtn = $(".ui-dialog button[title='expand']");
    if (isorigin) {
        $('.ui-dialog').css({ top: 0, left: 0, width: $(window).width() - 5, height: $(window).height() });
        $('.ui-dialog-content').css("height", $(window).height() - 120);
        if ($('.ui-dialog .map').length > 0)
            $('.ui-dialog-content').css("padding", "0");
        nbtn.find("span:eq(0)").removeClass().addClass("ui-icon ui-icon-triangle-1-sw");
        isorigin = false;
        var opt = {};
        opt.w = $(window).width() - 20;
        opt.h = $(window).height() - 120;

        if (typeof callback == "function") {
            callopt.splice(2, 1, opt);
            callbackexewithparam(callback, callopt);
            console.log('hellooo', callopt)
        }
    }
    else {
        $('.ui-dialog').attr("style", "");
        $('.ui-dialog').attr("style", originaldialogcss);
        var opt = {};
        opt.w = originw;
        opt.h = originh;

        if (typeof callback == "function") {
            callopt.splice(2, 1, opt);
            callbackexewithparam(callback, callopt);
            console.log(callopt);
        }
        $('.ui-dialog-content').css("height", 400);
        nbtn.find("span:eq(0)").removeClass().addClass("ui-icon ui-icon-triangle-1-ne");
        isorigin = true;
    }
}
//#endregion
//#region tab,container
function makeTab(tabarr) {
    /*
    tabarr{id,head,content,options}
    tabarr.id = "tab-nobg";
    tabarr.head = ["Table", "Model"];
    var content = [];
    tabarr.content = content;
    */
    var tab = $(document.createElement('div'));
    var ul = $(document.createElement('ul'));
    var content = $(document.createElement('div'));
    $(tab).attr("id", tabarr.id);

    if (tabarr.hasOwnProperty("class"))
        $(tab).attr("class", tabarr.class);
    $.each(tabarr.head, function (r, k) {
        var li = $(document.createElement('li'));
        var a = $(document.createElement('a'));
        var href = k, html = k;
        if ($.type(k) == "object") {//k=[href:tabid,html:tabname]
            href = k.href;
            html = k.html;
        }
        $(a).attr("href", "#" + href);
        $(a).attr("lang", "en");
        $(a).html(html);
        $(li).append(a);
        $(ul).append(li);
        var tabEl = $("<div />");
        $(tabEl).attr("id", href);
        $(tabEl).append(tabarr.content[r]);
        $(content).append(tabEl);
    });
    $(tab).prepend(ul);
    $(tab).append(content);
    var tabs = $(tab).tabs();

    return tab;
}
function makebootstrapTab(tabarr) {
    var tab = $("<div class='container'/>");
    var ul = $("<ul class='nav nav-tabs'/>");
    var content = $("<div class='tab-content'/>");
    tab.attr("id", tabarr.id);
    tab.prepend(ul);
    tab.append(content);
    $.each(tabarr.head, function (r, k) {
        var li = $("<li/>");
        var a = $("<a data-toggle='tab'/>");
        var href = k, html = k;
        if ($.type(k) == "object") {//k=[href:tabid,html:tabname]
            href = k.href;
            html = k.html;
        }
        a.attr("href", "#" + href);
        a.attr("lang", "en");
        a.html(html);
        li.append(a);
        ul.append(li);
        var tabEl = $("<div />");
        tabEl.attr("id", href);

        tabEl.append(tabarr.content[r]);
        content.append(tabEl);
        if (r == 0) {
            li.attr("class", "active");
            tabEl.attr("class", "active");
        }
    });

    return tab;
}
function appendTab(tab, tabarr) {
    var ul = tab.find("ul");
    $.each(tabarr.head, function (r, k) {
        var li = $(document.createElement('li'));
        var a = $(document.createElement('a'));
        $(a).attr("href", "#" + k);
        $(a).html(k);
        $(li).append(a);
        $(ul).append(li);
        var tabEl = $(document.createElement('div'));
        $(tabEl).attr("id", k);
        $(tabEl).append(tabarr.content[r]);
        $(tab).append(tabEl);
    });
    var tabs = tab.tabs();

    return tabs;
}
function makePortlet(arr) {
    /*
    arr={};//{id,head,content,options}
    arr.id = "tab-nobg";
    arr.head = ["Table", "Model","Goal"];
    var content = [];
    content.push("<table width='100%'><tr><td style='width:200px;vertical-align:top;'><div id='dvtable' style='padding:5px 0 5px 0;'></div></td></tr></table>");
    content.push("<table id='jqgridedit' ></table><div id='jqpageedit'></div>");
    content.push("333");
    arr.content=content;
    arr.options={columns:[270,100],colchild:[["Table","Goal"],["Model"]]};//multiple column   일 경우 columnwidth
    , 각 column에 위치할 portlet head
    */
    var container = $("<div/>");
    var style = ".column {width: 270px;float: left;padding-bottom: 100px; }";
    if (typeof arr.options.columns != "undefined") {
        $.each(arr.options.columns, function (i, k) {
            style += ".column c" + i + "{width:" + k + "px; !important;}";
        });
    }
    style += ".portlet {    margin: 0 1em 1em 0;padding: 0.3em;}";
    style += ".portlet-header {    padding: 0.2em 0.3em;margin-bottom: 0.5em;position: relative;  }";
    style += ".portlet-toggle {    position: absolute;top: 50%;right: 0;margin-top: -8px;  }";
    style += ".portlet-content {    padding: 0.4em;  }";
    style += ".portlet-placeholder {    border: 1px dotted black;margin: 0 1em 1em 0;height: 50px;  }";
    styleInsert("portlet-css", style);
    var col = [arr.head];
    if (typeof arr.options.colchild != "undefined") {
        col = arr.options.colchild;
    }
    $(col, function (j, l) {
        dvc = $("<div/>");
        dvc.attr("class", "column c" + j);

        $.each(arr.head, function (i, k) {
            dvh = $("<div/>");
            dvh.attr("class", "portlet");
            dv = $("<div/>");
            dv.attr("class", "portlet-header");
            dv.text(k);
            dvh.append(dv);
            dv = $("<div/>");
            dv.attr("class", "portlet-content");
            dv.text(arr.content[i]);
            dvh.append(dv);
            if ($.inArray(k, l) > -1)
                dvc.append(dvh);
        });
        container.append(dvc);
    });

    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        stop: function (event, ui) {
            console.log('hhh');
        },
        update: function (event, ui) {
            var inp = makeinput();
            var vv = [];
            $(".portlet-header").each(function (i) {
                vv.push($(this).text());
            });
            inp.val(vv.join(','));
        }
    });

    $(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").click(function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
    return container;
}
function makeAccordion(arr) {
    /*
    arr={id,header,content,options}
    arr.id = "tab-nobg";
    arr.head = ["Table", "Model"];
    var content = [];
    content.push("<table width='100%'><tr><td style='width:200px;vertical-align:top;'><div id='dvtable' style='padding:5px 0 5px 0;'></div></td></tr></table>");
    content.push("<table id='jqgridedit' ></table><div id='jqpageedit'></div>");
    arr.content = content;
    */
    accordioncss();
    var id = "accord";
    if (arr.id != "") id = arr.id;
    var accord = $("<div />");
    accord.attr("id", id);
    accord.remove();
    var dvg, dv, h;

    $.each(arr.head, function (i, k) {
        dvg = $("<div/>");
        dvg.attr("class", "group");
        dv = $("<div/>");
        dv.append(arr.content[i]);
        h = $("<h3/>");
        h.append(k);
        //        dvg.append(h);
        //        dvg.append(dv);
        //        accord.append(dvg);
        accord.append(h.outerHTML());
        accord.append(dv.outerHTML());
    });
    accord.accordion({
        header: "h3",
        collapsible: true,
        active: 0,
        heightStyle: "content"
    })
    .sortable({
        axis: "y",
        handle: "h3",
        stop: function (event, ui) {
            //ui.item.children( "h3" ).triggerHandler( "focusout" );
            $(this).accordion("refresh");
        },
        //tab order change & save state
        update: function (e, ui) {
            var inp = makeinput();
            var vv = [];
            $(".ui-accordion-header").each(function (i) {
                vv.push($(this).text());
            });
            inp.val(vv.join(','));
        }
    });
    //    accord.accordion({
    //        event: "click",
    //        collapsible: true,
    //        active: 0
    //    });
    //    accord.accordion();
    return accord;
}
function makeinput() {
    $("#inporder").remove();
    var inp = $("<input/>");
    inp.attr("id", "inporder");
    inp.attr("type", "hidden");
    $(document.body).append(inp);
    return inp
}
function makeContainer(conarr) {
    var container = "";
    if (typeof (conarr) == "undefined") var conarr = {};

    if (!conarr.hasOwnProperty("id")) {
        conarr.id = "dvContainer";
    }
    else
        $(conarr.id).remove();
    if (conarr.hasOwnProperty("parent")) {
        $("#" + conarr.parent).append(conarr.body).append(conarr.bottom);
    }
    else {
        if ($("#" + conarr.id).size() == 0) {
            container = $(document.createElement('div'));
            $('body').append(container);
            $('body').append("<div class='fade' style='display:block;z-index:20;'></div>");// onclick=\"$('#" + conarr.id + "').remove();$('.fade').remove();\"></div>");
            $(container).resizable();
        }

        else
            container = $("#" + conarr.id);
        if (!conarr.hasOwnProperty("class"))
            conarr.class = "pdiv";
        if (!conarr.hasOwnProperty("css"))
            conarr.css = {
                "z-index": "401",
                "border": "solid 1px #97BCE1",
                "-moz-box-shadow": "0 3 3px #000000",
                "-webkit-box-shadow": "0 3 3px #000000",
                "-moz-border-radius": "5px",
                "-webkit-border-radius": "5px",
                "padding": "5px",
                "background-color": "#4A5D84",
                "width": "1024px",
                "height": "auto",
                "position": "absolute",
                "top": "20%",
                "left": "20%"
            }
        if (!conarr.hasOwnProperty("top"))
            conarr.top = "<div id='dvContainTop' onmouseover=\"enabling('" + conarr.id + "')\" onmouseout=\"disabling('" + conarr.id + "')\" style='text-align:right;'><i  onclick=\"$('#" + conarr.id + "').remove();$('.fade').remove();\" style='color:white;' class='fa fa-times-circle-o fa-2x imexpand' /></div>";


        container.css(conarr.css);
        if ($("#dvContainTop").length == 0)
            $(container).prepend(conarr.top);
        $(container).attr("id", conarr.id);
        $(container).attr("class", conarr.class);

        $(container).append(conarr.body);
        $(container).append(conarr.bottom);
    }
    return container;
}
function enabling(that) {
    $("#" + that).draggable().draggable('enable');
}
function disabling(that) {
    $("#" + that).draggable('disable');
}
//#endregion

//#region rstat
function rstatInit(id, options) {
    rstatInit.rcoloneclick = rcoloneclick;
    var ctr, gcontain = $("#" + id), data;
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("gdt")) ctr = options.gdt;
        else
            ctr = options;
        if (options.hasOwnProperty("contain"))
            gcontain = options.contain;
    }
    else
        ctr = readdata(id, "gdt");

    rstatInit.datasrc = datasrc;
    if (typeof ctr != "undefined" && ctr.hasOwnProperty("data"))
        jsonReadAjax("imcdata", "", "code", ctr.data.datacode, rstatInit.datasrc, [id, ctr]);
    function datasrc(data, id, ctr) {
        var dt, tablist = [];
        dt = datalistreturn(data);
       // jsonQueryCheck(data, rstatInit.datasrc, [gcontain, ctr]);
        if (typeof ctr != "undefined") {
            if (ctr.hasOwnProperty("tablist")) tablist = ctr.tablist;
            if (ctr.hasOwnProperty("opencputmp")) opencputmp = ctr.opencputmp;
        }
        if (dt == "undefined")
            return false;
        else {
            var dtcontain = $("<span style='display:none' id='dt" + id + "'>" + JSON.stringify(dt) + "</span>");
            dtcontain.appendTo($('body'));
        }
        var ntab = [];
        $(tablist).each(function (s, y) {
            var ss = {};
            ss.href = y.id;
            ss.html = y.name;
            ntab.push(ss);
        });
        var workarr = {};
        if ($("#tab-grid" + id).length > 0) {
            $("#tab-grid" + id).remove();
        }
        workarr.id = "tab-grid" + id;
        workarr.head = ntab;
        var content = [];
        $(workarr.head).each(function (i, k) {
            var dvWorkspace = $("<div />");
            dvWorkspace.attr("id", "tab" + k.href);
            content.push(dvWorkspace.prop('outerHTML'));
        });
        workarr.content = content;
        var tabmake = makeTab(workarr);
        $("#" + id).append(tabmake);
        var worktab = $("#tab-grid" + id);

        tabload(id, tablist, 0, dt);
        wrapcontrol(id, "rstat", id, "", rstatInit.rcoloneclick);

        if (tablist.length > 1)
            worktab.tabs({
                activate: function (event, ui) {
                    var $activeTab = worktab.tabs('option', 'active');
                    tabload(id, tablist, $activeTab, dt);
                }
            });
        else {
            $("#tab-grid" + id).tabs("destroy");
            $("#tab-grid" + id + ">ul").remove();
        }

        //expbtninsert(id, rstatInit.rcoloneclick)
        //checksubsetting("tab-grid" + id, "");
        if (htdefine != "")
            $("#" + id + ">div").css({ height: htdefine, overflow: "hidden" });
       
       
        function tabload(id, tablist, index, dt) {
            if (tablist.length > 0) {
                $("#statsortable-style").remove();
                $(tablist).each(function (i, m) {
                    $("#tab" + m.id).empty();
                    $("a[href='#" + m.id + "']").parent().attr("val", JSON.stringify(m));
                });

                var tabdata = tablist[index];
                tabdata.dt = dt;
                tabdata.rstatid = id;
                predarr = tabdata.predictarr;
                rstatInitRun(tabdata);
            }
        }
    }
    function rcoloneclick() {
        $(".rcol").first().click();
    }
}
function rstatInitRun(tabdata, reload) {
    var indeparr = [], dlist = [], k = tabdata;
    var outlist = k.outlist, predarr = k.predictarr, predarr1 = k.predictarr, varlist = k.varlist, tabname = k.tabname, tabsetting = k.tabsetting,
        outodr = k.outorder, column = k.column, cmd = k.cmd, outcmd = [], dt = k.dt, id = k.rstatid;
    if (isMobile()) column = 1;
    $(varlist).each(function (a, b) {
        if (b.vartype != "dependent") {
            indeparr.push(b.imgid);
        }
    });

    $(outlist).each(function (a, b) {
        if (b[2] == "predict") {
            var rtn = predictdatafind(b[1]), rtn1;
            if (rtn != "") {
                if (rtn.hasOwnProperty("dlist") && rtn.dlist.hasOwnProperty("dframe"))
                    rtn1 = rtn.dlist.dframe;
                outcmd.push({ code: "", type: "", model: "newdata=data.frame(" + rtn1 + ")" });
                outcmd.push({ code: b[1], type: b[2], model: b[6], newdata: true });
            }
        }
        else
            outcmd.push({ code: b[1], type: b[2], model: b[6] });
    });
    var rcmdobj = {};
    rcmdobj.dtlist = dt;
    rcmdobj.outcmd = outcmd;
    var opt = opencpuOption(outlist, indeparr, outodr, column, combinecmd(rcmdobj), tabname, tabsetting, $("#tab" + k.id), dt, id);
    if (reload) opt.reload = true;
    else
        $("#tab" + k.id).empty();
    opt.wth = $("#tab" + k.id).width();
    opencpuRun(opt);

}
function predictdatafind(linecode, seq) {
    var rtn = {}, dt = [];
    var dtt = $.grep(predarr, function (a) {
        return a['code'] == linecode;
    });
    if (dtt.length > 0) {
        if (dtt[0].hasOwnProperty("dtlist")) {
            var dlist = dtt[0].dtlist;
            if (typeof seq == "undefined") {
                var dtt2 = $.grep(dlist, function (a) {
                    return a['select'] == true;
                });
                //var ss = findmaxseq(dlist);
                //seq = ss.maxnum;
                seq = dtt2[0].seq;
            }
            var dtt1 = $.grep(dlist, function (a) {
                return a['seq'] == seq;
            });
            rtn.dlist = dtt1[0];
            rtn.indeparr = dtt[0].indeparr;
            rtn.seq = seq;
        }
    }
    return rtn;
}

//opencpu preparation
var opencputmp = [];
function opencpuOption(outlist, indeparr, outodr, column, rcmd, tabname, tabsetting, container, dtlist, id) {
    var option = {};
    var arr = commandarray(outlist, indeparr, outodr, dtlist, id);
    option.outarr = arr;
    option.indeparr = indeparr;
    option.column = column;
    option.container = container;
    option.rcmd = rcmd;
    option.tabsetting = tabsetting;
    option.tabname = tabname;
    option.dtlist = dtlist;
    option.id = id;
    return option;
}
function commandarray(outlist, indeparr, outodr, dtlist, id) {
    var arr = [], j = 1, set = {}, set2 = {};
    $(outlist).each(function (i, k) {
        set = {};
        set = { code: k[1], type: k[2], column: k[3], name: k[4], desc: k[5], model: k[6], outname: k[7] };
        switch (k[2]) {
            case "graph":
                var nn = set.model.split("\n");
                if (nn.length > 1)
                    multigraph(set, j, arr, outodr);
                else {
                    set.outname = j;
                    set = outorderUpdate(set, set.code, outodr)
                    arr.push(set);
                    j++;
                }
                break;
            case "predict":
                var rtn = predictdatafind(set.code), rtn1;
                if (rtn != "") {
                    if (rtn.hasOwnProperty("dlist") && rtn.dlist.hasOwnProperty("dframe"))
                        rtn1 = rtn.dlist.dframe;
                    set.model = set.model.replace("newdata", "data.frame(" + rtn1 + ")");
                    set = outorderUpdate(set, set.code, outodr)
                    arr.push(set);
                }
                else {
                    var opt = { tbid: "tbpredict", addid: "inpaddpredict", containid: "", indeparr: indeparr, code: k[1], dtlist: dtlist, rstatid: id };
                    predictopt(opt);
                }
                break;
            default:
                if (set.hasOwnProperty("outname") && set.outname.split(",").length > 1)
                    multicmd(set, arr);
                else {
                    set = outorderUpdate(set, set.code, outodr)
                    arr.push(set);
                }
                break;
        }
    });

    return arr;

    function multicmd(set, arr) {
        var nn = set.model.split("\n");
        var oo = set.outname.split(",");
        $(nn).each(function (a, b) {
            var set1 = jQuery.extend(true, {}, set);
            set1.code = set1.code + "_" + a;
            set1.name = set1.name + parseInt(a) + 1;
            set1.model = b;
            set1.desc = b;
            set1.outname = oo[a];
            arr.push(set);
        });
    }
    function multigraph(set, j, arr, outodr) {
        var nn = set.model.split("\n");
        $(nn).each(function (a, b) {
            var seq = parseInt(a) + 1;
            var set1 = jQuery.extend(true, {}, set);
            set1.code = set1.code + "_" + a;
            set1.name = set1.name + seq;
            set1.model = b;
            set1.desc = b;
            set1.outname = j;
            set1 = outorderUpdate(set1, set1.code, outodr)
            arr.push(set1);
            j++;
        });
    }
    function outorderUpdate(out, code, outodr) {
        //update order, width change, and multiple cmd split
        var dtt = $.grep(outodr, function (a) {
            return a['code'] == code;
        });
        if (dtt.length > 0) {
            var odr = dtt[0];
            if (odr.hasOwnProperty("code")) out.code = odr.code;
            if (odr.hasOwnProperty("odr")) out.odr = odr.odr;
            if (odr.hasOwnProperty("outnamne")) out.outnamne = odr.outnamne;
            if (odr.hasOwnProperty("column")) out.column = odr.column;
            if (odr.hasOwnProperty("url")) out.url = odr.url;
        }
        return out;
    }
}
function combinecmd(arr) {
    var outcmd = [], dtlist = "";
    if (typeof arr != 'undefined') {
        if (arr.hasOwnProperty("dtlist")) dtlist = JSON.stringify(arr.dtlist);
        if (arr.hasOwnProperty("outcmd")) outcmd = arr.outcmd;
    }
    dtscript = "library(jsonlite)\n";
    dtscript += "library(car)\n";
    dtscript += "data=fromJSON('" + dtlist + "')\n";
    dtscript += "attach(data)\n";
    $(outcmd).each(function (j, q) {
        if ((q.type == "predict" && q.newdata) | q.type != "predict")
            dtscript += q.model;
        if (outcmd.length - 1 != j)
            dtscript += "\n";
    });
    return dtscript;
}
function makeoutcmd(outline) {
    var outcmd = [];
    $(outline).each(function (r, q) {
        var cd = q[1];
        var type = q[2];
        var md = q[6];
        var set = { type: type, code: cd, model: md };
        if (type == "predict") {
            //in case predict check newdata exists
            $(predarr).each(function (a, b) {
                if (b.code == cd) {
                    set.newdata = true;
                    $(b.dtlist).each(function (x, y) {
                        if (y.select)
                            set.model = set.model.replace("newdata", "data.frame(" + y.dframe + ")");
                    });
                }
            });
        }
        outcmd.push(set);// + "\n";
    });
    return outcmd;
}
function makedtlist(id) {
    var dt = $('#spdlist').text()
    if (dt == '') {
        if (id == "")
            id = $("#tbalt").closest(".rstat").attr("id");
        dt = $("#dt" + id).text();
    }
    if (dt != "") dt = JSON.parse(dt)
    return dt;
}
//opencpu run
function opencpuRun(option, pred) {
    //prevent predarr to become [] 
    if (typeof pred != "undefined")
        predarr = pred;

    //Go R button Click Event Handler
    var rCommands = "", tabname = "", reload = false, tabsetting = "";
    if (typeof option != "undefined") {
        if (option.hasOwnProperty("rcmd")) rCommands = option.rcmd;
        if (option.hasOwnProperty("tabname")) tabname = option.tabname;
        if (option.hasOwnProperty("tabsetting")) tabsetting = option.tabsetting;
        if (option.hasOwnProperty("reload")) reload = option.reload;
    }
    jsfunctionInsert("lightbox-opt", "lightbox.option({'fitImagesInViewport': false })");
    funLoading(true);
    var tmpobj = findopencputmp(tabname)

    if (reload | opencputmp.length == 0 | !tmpobj | openreload(tmpobj)) {
        var resultsUrlPrefix = "https://public.opencpu.org",
            url = resultsUrlPrefix + "/ocpu/library/base/R/identity/save";

        $.post(url,
        {
            x: rCommands
        },
        function (data) {
            option.container.empty();
            processopencpu(data, option);
            var tmp = data.toString().match(/.+\/console/m);
            if (tmp.length > 0) {
                var set = {};
                //tmp = tmp[0].replace("/ocpu/tmp/", "").replace("/console", "");
                set.tabname = tabname;
                set.data = data;
                set.date = new Date();
                updateopencputmp(set)
            }
            funStop();
        })
        .error(function (jqXHR, status, error) {
            funStop();
            sweetmsg("Error", jqXHR.responseText);
        });
    }
    else {
        option.container.empty();
        var dt = findopencputmp(tabname);
        processopencpu(dt, option);
        funStop();
    }
    function openreload(tmpobj) {
        //chk if reload is needed
        var rtn = false;
        if (!tmpobj | !tmpobj.hasOwnProperty("data") | tmpobj.date < new Date().addDays(-1))
            rtn = true;
        return rtn;
    }
}
function processopencpu(data, option) {
    var colnum = 1, indeparr = [], outarr = [], container = $("#dvoutput"), tabsetting = "";
    if (typeof option != "undefined") {
        if (option.hasOwnProperty("column")) colnum = option.column;
        if (option.hasOwnProperty("indeparr")) indeparr = option.indeparr;
        if (option.hasOwnProperty("tabsetting")) tabsetting = option.tabsetting;
        if (option.hasOwnProperty("outarr")) outarr = option.outarr;
        if (option.hasOwnProperty("container")) container = option.container;
    }
    var ocpurl = "https://public.opencpu.org";
    if ($("#statsortable").length == 0)
        $("<div id='statsortable' />").appendTo(container);
    else
        $("#statsortable").empty();
    opencpuhead(option);
    var txtarr = [], regex;
    $(outarr).each(function (i, k) {
        switch (k.type) {
            case "text": case "predict":
                regex = new RegExp(".+\/" + k.outname, "m");
                break;
            case "graph":
                regex = new RegExp(".+\/graphics\/" + k.outname, "m");
                break;
        }
        if (data.toString().match(regex) != null) {
            var staturl = ocpurl + data.toString().match(regex);
            k.url = staturl;
        }
    });
    var wth;
    if (option.hasOwnProperty("wth")) wth = option.wth;
    responsivediv(outarr, indeparr, tabsetting, colnum, $('#statsortable'), option.id, option.dtlist, wth);
    responsiveAfter(colnum);
}
function opencpuhead(opt) {
    var outlist = opt.outlist, indeparr = opt.indeparr, outodr = opt.outodr, column = opt.column, tabname = opt.tabname
        , tabsetting = opt.tabsetting, container = opt.container, dt = opt.dt, id = "";
    if (opt.hasOwnProperty("id")) id = opt.id;
    var dvoutbar = $("<div style='width:100%'></div>");
    container.prepend(dvoutbar);
    var odate = "";
    var tmp = findopencputmp(tabname);
    if (tmp.hasOwnProperty('date')) odate = tmp.date;
    if (odate != "") odate = friendlydate(odate);
    var date = $("<div style='float:left;'><span id='spopencputmp' >updated:" + odate + "</span></div>");
    date.prependTo(dvoutbar);
    var reload = $("<div style='margin:0 5px 0 5px;float:left;'> <i class='fa fa-refresh imdim'/></div>");
    reload.prependTo(dvoutbar);
    radio(opt);
    chgcolor(column);
    $(".fa-refresh").on("click", function () {
        opt.reload = true;
        if (showpredictlist)
            opencpuRun(opt, predarr);
        else {
            //reload opencpu
            swal({
                title: "Request Remodel",
                text: "Are you sure to request model again ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, reload it!",
                closeOnConfirm: true
            },
            function () {
                opencpuRun(opt);
            });
        }
    });
    function radio(opt) {
        var dv = $("<div style='float:right' class='widget'/>");
        for (var i = 1; i <= 4; i++) {
            var id = "radio" + i, awesome;
            switch (i) {
                case 1:
                    awesome = "reorder";
                    break;
                case 2:
                    awesome = "th-large";
                    break;
                case 3:
                    awesome = "th";
                    break;
                case 4:
                    awesome = "calendar";
                    break;

            }
            dv.append($("<label for='" + id + "'>" + i + "</label><input class='rcol' type='radio' name='" + id + "' id='" + id + "'/>"));
        }
        dvoutbar.append(dv);
        $(".rcol").checkboxradio({
            icon: false
        });

        $(".rcol").on("click", function (e) {
            var id = e.currentTarget.id;
            var clnum = id.replace("radio", "");
            rcolclick(clnum);
        })
    }
    function rcolclick(num) {
        chgcolor(num);
        $("#statsortable-style").remove();
        opt.column = num;
        opencpuRun(opt);
    }
    function chgcolor(num) {
        $(".rcol").prev("label").removeClass("ui-state-active");
        setTimeout(function () { $("#radio" + num).prev("label").addClass("ui-state-active"); }, 100);
    }
}
function responsivediv(objarr, indeparr, tabsetting, colnum, container, id, dtlist, wth1) {

    var wth = container.width();
    if (wth == null) wth = wth1;

    var height = "height:600px";
    if (tabsetting[0][1] == "true" | tabsetting[0][1] == "")
        height = "height:auto;overflow:hidden";
    else height = "height:" + tabsetting[1][1] + ";overflow:auto";
   
    var style = " .column {width: " + wth + "px;" + height + ";     }";
    style += ".portlet {    float: left; margin:5px 5px 0 0;   }";
    switch (colnum) {
        case '1':
            style += ".col1{width:99%}";
            style += ".col2{width:99%;}";
            style += ".col3{width:99%;}";
            style += ".col4{width:99%;}";
            break;
        case '2':
            style += ".col1{width:49%}";
            style += ".col2{width:99%;}";
            style += ".col3{width:99%;}";
            style += ".col4{width:99%;}";
            break;
        case '3':
            style += ".col1{width:32%}";
            style += ".col2{width:65%}";
            style += ".col3{width:99%}";
            style += ".col4{width:99%}";
            break;
        case '4':
            style += ".col1{width:24.3%}";
            style += ".col2{width:49%}";
            style += ".col3{width:74%}";
            style += ".col4{width:99%}";
            break;
    }
    style += ".portlet-header {    min-height:25px;    position: relative;  }";
    style += ".portlet-toggle {    position: absolute;    top: 50%;    right: 0;    margin-top: -8px;  }";
    style += ".portlet-content {    padding: 5px;height:100%  }";
    style += ".portlet-placeholder {    border: 1px dotted blue;    margin: 0 1em 1em 0;    height: 550px;  }";
    style += ".ui-resizable-helper { border: 2px dotted #00F; }";
    styleInsert("statsortable-style", style);
    if ($(".column").length == 0) {
        var col = $("<div class='column'/>").appendTo(container);
        objarr.sort(function (a, b) {
            return (parseInt(a.odr) > parseInt(b.odr)) ? 1 : -1;
        });
        $(objarr).each(function (i, k) {
            if (k.hasOwnProperty("url")) {
                var portlet = $("<div class='portlet' />").appendTo(col);
                var imgwth = calwidth(wth, colnum, k.column);
                portlet.addClass("col" + k.column);
                var porthead = $("<div class='portlet-header'/>").appendTo(portlet);
                var portcont = $("<div class='portlet-content'/>").appendTo(portlet);;
                porthead.append($("<span style='padding:0 0 0 10px'>" + k.name + "</span>"));
                portcont.append($("<div style='padding:0 0 0 5px'>" + k.desc + "</span>"));
                porthead.attr("value", JSON.stringify(k));
                switch (k.type) {
                    case "graph":
                        var simg = k.url + "/png?width=" + imgwth.width + "&height=" + imgwth.height;
                        var aa = $('<a/>', {
                            href: k.url,
                            "data-lightbox": "image-1",
                            "data-title": "img"
                        }).appendTo(portcont);
                        $('<img/>', {
                            id: 'chartResults',
                            class: "innercontent",
                            src: simg
                        }).appendTo(aa);
                        break;
                    case "text": case "predict":
                        $('<pre/>', {
                            id: 'statResults' + i,
                            class: "innercontent",
                            style: 'word-wrap: break-word; white-space: pre-wrap;font-size:12px;'
                        }).appendTo(portcont);
                        $("#statResults" + i).load(k.url, function (data) {
                            $("#statResults" + i).html(data)
                        });
                        break;
                }
                if (k.type == "predict") {
                    var dv = $("<div class='imdim' style='background-color:#A2E9FF;height:25px;padding:5px;border-radius:5px 5px 0 0;width:" + wth + "'><span><i class='fa fa-caret-square-o-down fa-lg'/>&nbsp;predict setting</span></div>");
                    portcont.append(dv);
                    dv.on("click", function () {
                        if ($(this).find("i").attr("class") == "fa fa-caret-square-o-down fa-lg") {
                            $(this).find("i").attr("class", "fa fa-caret-square-o-up fa-lg");
                            var opt = { tbid: "tbpredict", addid: "inpaddpredict", containid: 'statResults' + i, indeparr: indeparr, code: k.code, rstatid: id, dtlist: dtlist };
                            if ($("#" + opt.tbid).length == 0) {
                                predictopt(opt);
                            }
                            else
                                $("#tbalt").show();
                        }
                        else {
                            $(this).find("i").attr("class", "fa fa-caret-square-o-down fa-lg");
                            $("#dvpop").hide(); $("#tbalt").hide();
                        }
                    });
                }

            }
        });
    }
}
function responsiveAfter(colnum) {
    //colnum=parseInt(colnum);
    //exec after responsive div created 
    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });
    $(".portlet")
      .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
      .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all immove")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle imdim'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this), pt = icon.closest(".portlet");
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        pt.find(".portlet-content").toggle();
    });

    $(".portlet").resizable({
        containment: ".column",
        animate: true,
        alsoResize: "innercontent",
        helper: "ui-resizable-helper",
        //maxHeight: 300,
        //maxWidth: 580,
        stop: function (event, ui) {
            var x = $(event.target).width();
            setTimeout(function () {
                var num = chkwidth($(event.target).width(), colnum);
                for (var i = 1; i <= 4; i++) {
                    $(event.target).removeClass('col' + i);
                }
                $(event.target).addClass('col' + num);
                $(event.target).removeAttr("style");
                var imgwth = calwidth($(".column").width(), colnum, num);
                $(event.target).find(".portlet-content>a>img").css({ width: imgwth.width });
                //header value update
                var val = $(event.target).find(".portlet-header").attr("value"), code;
                if (val != "") {
                    val = JSON.parse(val);
                    val.column = num;
                    code = val.code;
                    $(event.target).find(".portlet-header").attr("value", JSON.stringify(val));
                }
            }, 1000);
        }
    });
    //checkbox change from predictlist
    $(".fa-caret-square-o-down").click();
    if (showpredictlist) {
        $("#dvpop").hide(); $("#tbalt").show(); //$(".fa-caret-square-o-down").click();
    }
    showpredictlist = false;

    function chkwidth(curwth, colnum) {
        var ttlwth = $(".column").width();
        var num = Math.ceil(curwth / ttlwth * parseInt(colnum));
        return num;
    }
}
function findopencputmp(tabname) {
    if (typeof tabname == "undefined") tabname = $("#tab-grid>ul>.ui-state-active").attr("arial-controls");
    var dtt = $.grep(opencputmp, function (a) {
        return a['tabname'] == tabname;
    });
    if (dtt.length > 0)
        return dtt[0];
    else
        return false;
}
function updateopencputmp(obj) {
    var chkexist = false;
    $(opencputmp).each(function (i, k) {
        if (k.tabname == obj.tabname) {
            opencputmp.splice(i, 1, obj);
            chkexist = true;
        }
    });
    if (!chkexist)
        opencputmp.push(obj);
}
function calwidth(wth, ttlnum, curnum) {
    if (ttlnum < curnum) curnum == ttlnum;
    // var wth = $(".column").width();
    var ratio = parseInt(curnum) / parseInt(ttlnum);
    var margin = 80 * ratio;
    var hargin = 70 * ratio;
    var set = {};
    set.width = Math.round(wth * ratio) - margin;
    set.height = Math.round(wth * ratio) - hargin;
    return set;
}
//predict table setting
var predarr = [], showpredictlist = false;
function predictopt(option) {
    predictopt.reload = reload;
    var tbid = "tbpredict", addid = "inpaddpredict", containid = "", code = "", indeparr = [], seq = 1,id="",dtlist=[];
    if (typeof option != "undefined") {
        tbid = option.tbid;
        addid = option.addid;
        containid = option.containid;
        indeparr = option.indeparr;
        code = option.code;
        id = option.rstatid;
        dtlist = option.dtlist;
        var rtn = predictdatafind(code);
        if (option.hasOwnProperty("seq")) seq = option.seq;
        else seq = rtn.seq;
    }
    var dt = [makeCtr(["span", "#", , , ])];
    $(indeparr).each(function (i, k) {
        dt.push(makeCtr(["span", k, , , ]));
    });
    dt.push(makeCtr(["span", "", , , ]));
    var data = [dt];//headers
    var tb = makeTable(tbid, data);
    var colnum = data[0].length;
    var foot = ['<input id="' + addid + '" type="button"  value="add" style="padding:0 3px 0 3px;margin:1px 5px 0 0" />' +
                '|{"colspan":"' + colnum + '","style":"text-align:right;padding:3px 0 3px 0;"}'];
    tb = appendFooter(tb, foot);
    var dv = $("<div id='dvpop'/>");
    var tbb = $("<table width='100%'/>"), tbody = $("<tbody/>");
    tbb.append(tbody);
    tbody.append($("<tr><td style='width:50px'>select</td><td><input type='checkbox' id='cbselect'/></td></tr>"));
    tbody.append($("<tr><td style='width:50px'>seq</td><td><span id='spseq'>" + seq + "</span></td></tr>"));
    tbody.append($("<tr><td style='width:50px'>name</td><td><input id='inpname' style='width:100%'/></td></tr>"));
    tbody.append($("<tr><td cospan='2' style='vertical-align:top'>input</td><td>"+tb.outerHTML()+"</td></tr>"));
    dv.append(tbb);
    
    predictopt.appendrow1 = appendrow1;
	function appendrow1(tbid, indeparr,dlist) {
	    var rowarr = [];
	    if (typeof dlist != "undefined") {
	        $(dlist).each(function (i, k) {
	            if (i > 0) {
	                rowarr = [];
	                rowarr.push(makeCtr(["span", k[0], "", , ]));
	                for (var a = 1; a < k.length; a++) {
	                    rowarr.push(makeCtr(["input", k[a], , "numonly|width:99%", ]));
	                }
	                rowinsert(tbid,rowarr);
	            }
	        });
	    }
	    else {
	        rindx = $("#" + tbid + ">tbody>tr").length + 1;
	        rowarr.push(makeCtr(["span", rindx, "", , ]));
	        $(indeparr).each(function (i, k) {
	            rowarr.push(makeCtr(["input", , , "numonly|width:99%", ]));
	        });
	        rowinsert(tbid,rowarr);
	    }
	    var rowindexchg_callback = { callback: predictopt.reload, callbackoption: [tbid] };
	    delRowdelegate(tbid, rowindexchg_callback);
	    runAfterTableCreate(tbid, { activepage: "last", pagenum: 5 });

	    $(".numonly").keyup(function (e) {

	        //if the letter is not digit then display error and don't type anything
	        if (e.which != 8 && e.which != 0 && e.which != 46 && e.which != 190 && (e.which < 48 || e.which > 57)) {
	            //display error message
	            sweetmsgautoclose("Numbers Only!!", "Please try again.")
	            $(this).val("");
	            return false;
	        }
	    });
	    function rowinsert(tbid,rowarr) {
	        rowarr.push(makeCtr(["i", "fa fa-times-circle fa-lg imdim", , , ]));
	        appendTableRow($('#' + tbid), rowarr);
	    }
	}
	function reload(tbid) {
	    $("#inpaddpredict").show();
	    rowindexreorder(tbid);
	}
	var opt = {
	    width: '540',
	    //minHeight: '330',
	    autoResize: true,
	    modal: false,
	    autoOpen: true,
	    title: "Predict Input",
	    stack: false,
	    close: function (event, ui) {
	        $(this).dialog('destroy').remove();
	    },
	    buttons: [
        {
            text: "Cancel",
            click: function () {
                $(this).dialog('destroy').remove();
            }
        },
        {
            text: "Save",
            click: function () {
                saveopt(tbid, code, indeparr);
                $(this).dialog('destroy').remove();
            }
        }
	    ]
	};
	if (containid != "") {
	    $("#" + containid).parent().append(dv);
	    dv.css({ width: parseInt($(".portlet-content").css("width").replace("px", "")) - 10, border: "solid 1px #E0E0E0", padding: "5px", "border-radius": "5px", "background-color": "#F5F5F5" })
	    //opt.appendTo = "#" + containid;
	    //opt.position = ['center', 100];
	    //opt.width = parseInt($(".portlet-content").css("width").replace("px", "")) - 25;
	    var btndv = $("<div style='text-align:right;padding:5px;'/>");
	    var btn1 = $("<input type='button' value='Save'/>"), btn2 = $("<input id='dvtogg' type='button' value='List'/>");
	    btndv.append(btn2).append(btn1);
	    dv.append(btndv);
	    btn1.on("click", function () {
	        saveopt(tbid, code, indeparr);
	    });
	}
	else {
	    dv.dialog(opt);
	    $("<div  id='dvtogg' class='imdim' style='text-align:right'><i class='fa fa-caret-square-o-down fa-lg'/>&nbsp;List</div>").appendTo(dv);
	}
	dv.addClass('helpinsert').attr("help", 'predictinput');
	helpinsert();
	dv.parent().css("z-index", 500);

	var predinput = "";//predict input parameter
	function makenewdata(tbid, outarr) {
	    var htitle = [], rtn = {};
	    if (typeof outarr == "undefined") {
	        $("#" + tbid + ">thead>tr>th>span").each(function (i, k) {
	            if ($(k).text() != "")
	                htitle.push($(k).text());
	        });
	        predinput = saveTable1(tbid);
	        predinput.unshift(htitle);
	        rtn.dlist = predinput;
	        var transpred = predinput.transpose(), output = [];
	        transpred.splice(0, 1);
	        $(transpred).each(function (i, k) {
	            var title = k[0];
	            k.splice(0, 1);
	            output.push(title + "=c(" + k.join(",") + ")");
	        });
	        rtn.dframe = output.join(",");
	        return rtn;
	    }
	}
	function saveopt(tbid,code,indeparr) {
	    var set = {}, dset = {}, dtsett = [];
	    set.code = code;
	    set.indeparr = indeparr;
	    var chk = $("input:checkbox[id='cbselect']").is(":checked");
	    dset.select = chk;
	    dset.seq = parseInt($("#spseq").text());
	    dset.name = $("#inpname").val();
	    dset.dframe = makenewdata(tbid).dframe;
	    dset.tblist = makenewdata(tbid).dlist;

	    $(predarr).each(function (i, k) {
	        if (k.code == code) {
	            $(k.dtlist).each(function (a, b) {
	                if (b.seq == dset.seq)
	                    b.select = chk;
	                else
	                    b.select = !chk;
	            });
	        }
	    });

	    var chkexist = false, chk1 = false;
	    var dtt = $.grep(predarr, function (a) {
	        return a['code'] == code;
	    });
	    if (dtt.length > 0) {
	        if (dtt[0].hasOwnProperty("dtlist")) {
	            dtsett = dtt[0].dtlist;
	        }
	        $(dtsett).each(function (a, b) {
	            if (b.seq == $("#spseq").text()) {
	                dtsett.splice(a, 1, dset);
	                chkexist = true;
	            }
	        });
	        if (!chkexist)
	            dtsett.push(dset);
	        set.dtlist = dtsett;
	        $(predarr).each(function (c, d) {
	            if (d.code == code) {
	                predarr.splice(c, 1, set);
	                chk1 = true;
	            }
	        });
	    }
	    if (!chk1)
	        predarr.push(set);
        if(chk)
	    $(".fa-refresh").click();
	}
	$("input[type='button']").button();
	$("#" + addid).on("click", function () {
	    var ddlist = predictdatafind(code, seq).dlist;
	    appendrow1(tbid, indeparr);
	});
	if ($("#inpname").val() == "") {
	    $("#inpname").val("alt" + $("#spseq").text());
        if(tb.find("tbody").length==0)
	    $("#" + addid).click();
	}
	$("#dvtogg").on("click", function () {
	    if (dv.css("display") == "block" ) {
	        dv.hide();
	        $("#tbalt").show();
	    }
	    else {
	        dv.show();
	        $("#tbalt").hide();
	    }
	});
	
	var tb = predaltlist(code).insertBefore(dv);
	delRowdelegate("tbalt");
	runAfterTableCreate("tbalt", { activepage: "last", pagenum: 5 });
	$("#tbalt>tbody>tr").each(function (i, k) {
	    $(k).find("td:eq(4)").on("click", function () {
	        dv.show(); $("#tbalt").hide();
	        var seq = $(k).find("td:eq(1)>span").text();
	        $("input:checkbox[id='cbselect']").prop("checked", false);
	        predaltedit(tbid, code, seq)
	    });
	    $(k).find("td:eq(0)>input").on("click", function () {
	        // chkbox check
	        var seq = $(k).find("td:eq(1)>span").text();
	        $("#tbalt>tbody>tr").each(function (a, b) {
                if($(b).find("td:eq(1)>span").text()!=seq)
                    $(b).find("td:eq(0)>input").prop("checked", false);
                else
                    $(b).find("td:eq(0)>input").prop("checked", true);
	        });
	        $(predarr).each(function (u,m) {
	            if (m.code == code) {
	                $(m.dtlist).each(function (a, b) {
	                    if (b.seq == seq)
	                        b.select = true;
	                    else
	                        b.select = false;
	                });
	            }
	        });
	        //expand predictlist after opencpu refresh
	        showpredictlist = true;
	        var tabdata = $("#tbalt").closest($(".rstat")).find(".ui-state-active").attr("val");
            
	        if (typeof tabdata != "undefined") {
	            var tabdt = JSON.parse(tabdata);
	            tabdt.predictarr = predarr;
	            tabdt.dt = dtlist;
	            tabdt.id = id;
	            rstatInitRun(tabdt, true);
	            
	            $("#tbalt").closest($(".rstat")).find(".ui-state-active").attr("val",JSON.stringify(tabdt));
	        }
	        else {
	            $(".fa-refresh").click();
	        }
	    });
	});
	$("#inpadd1").on("click", function () {
	    $("#dvtogg").click();
	    $("input:checkbox[id='cbselect']").prop("checked", false);
	    var mseq = 1;
	    $("#tbalt>tbody>tr").each(function (i, k) {
	        if (mseq <= parseInt($(k).find("td:eq(1)>span").text())) {
	            mseq = parseInt($(k).find("td:eq(1)>span").text()) + 1;
	        }
	    });
	    predaltedit(tbid,code,mseq);
	});
	$("input:checkbox[id='cbselect']").prop("checked", false);
	$("input[type='button']").button();
	predaltedit(tbid, code, seq);
    //prevent when onclick input element hide 
	dv.click(function () { $(this).find("input").show() });
	$("#dvpop").hide(); $("#tbalt").show(); $(".fa-caret-square-o-down").click();
}
function predaltlist(code) {//outline, option, pid) {
    var altlist = [];
    var dtt = $.grep(predarr, function (a) {
        return a['code'] == code;
    });
    if (dtt.length > 0)
        altlist = dtt[0].dtlist;
    var data = [];
    var head = ["","Seq","Name","Alt","",""];//[makeCtr(["span", "", , , ]), makeCtr(["span", "Seq", , , ]), makeCtr(["span", "Name", , , ]), makeCtr(["span", "Alt", , , ]), makeCtr(["span", , , , ]), makeCtr(["span", , , , ]), makeCtr(["span", , , , ])];
    data.push(head);
    $(altlist).each(function (i, k) {
        data.push([makeCtr(["input:checkbox", k.select, , , ]), makeCtr(["span", k.seq, , , ]), makeCtr(["span", k.name, , , ]), makeCtr(["span", JSON.stringify(k.dframe), , , ])
           , makeCtr(["i", "fa fa-gear fa-lg imdim", , , ]), makeCtr(["i", "fa fa-times-circle fa-lg imdim", , , ])]);
    });
    var tb = makeTable("tbalt", data);
    var colnum = data[0].length;
    var foot = ['<input id="inpadd1" type="button"  value="add" style="padding:0 3px 0 3px;margin:1px 5px 0 0" />' +
                '|{"colspan":"' + colnum + '","style":"text-align:right;padding:3px 0 3px 0;"}'];
    tb = appendFooter(tb, foot);
    
    tb.css({ "margin": "5px 0 0 0" });
    tb.click(function () { $(this).find("input").show() });
    return tb;
}
function predaltedit(tbid,code, seq) {
    if (typeof seq == "undefined") seq = 1;
    $("#" + tbid + ">tfoot>tr>td").find("input").show();
    $("#spseq").text(seq);
    $("#cbselect").show();
    $("#inpname").show();
    var name = "alt" + seq,select=false;
    $("#" + tbid + ">tbody").empty();
    if (predarr.length > 0) {
        var ddlist = predictdatafind(code, seq),tblist=[];
        if (typeof ddlist.dlist != "undefined") {
            name = ddlist.dlist.name;
            select = ddlist.dlist.select;
            tblist = ddlist.dlist.tblist;
        }
        if (select)
            $("input:checkbox[id='cbselect']").prop("checked", true);
        $("#inpname").val(name);
        predictopt.appendrow1(tbid, ddlist.indeparr, tblist);
    }
}

//#endregion

//#region pivottable
var pivotset, styval, cstyval;
function pivotInit(id, options) {
    var ctr, gcontain = $("#" + id), data;
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("gdt")) ctr = options.gdt;
        else
            ctr = options;
        if (options.hasOwnProperty("contain"))
            gcontain = options.contain;
    }
    else
        ctr = readdata(id, "gdt");
    gcontain.empty();
    pivotInit.datasrc = datasrc;
    if (typeof ctr != "undefined" && ctr.hasOwnProperty("data")) {
        var code = ctr.data.datacode;
        if (ctr.data.hasOwnProperty("code")) code = ctr.data.code;
        jsonReadAjax("imcdata", "", "code", code, pivotInit.datasrc, [gcontain, ctr]);
    }
    function datasrc(data, gcontain, ctr) {
        var dt;
        var id = gcontain.attr("id");
        dt = datalistreturn(data);
        //jsonQueryCheck(data, pivotInit.datasrc, [gcontain, ctr]);
        if (typeof ctr != "undefined") {
            var rows = "[]", cols = "[]", vals = "[]", render = "", hidden = '', aggregate = "", rendername = "", derieveddate = "", numbergrp = "", filter = "";
            var st = ctr.setting;
            if (st) {
                if (st.hasOwnProperty("rows")) rows = st.rows;
                if (st.hasOwnProperty("cols")) cols = st.cols;
                if (st.hasOwnProperty("vals")) vals = st.vals;
                if (st.hasOwnProperty("render")) render = st.render;
                if (st.hasOwnProperty("hiddenfield")) hidden = st.hiddenfield;
                if (st.aggregate != "") aggregate = st.aggregate;
                if (st.hasOwnProperty("rendername")) rendername = st.rendername;
                if (st.hasOwnProperty("derieveddate")) derieveddate = st.derieveddate;
                if (st.hasOwnProperty("numbergrp")) numbergrp = st.numbergrp;
            }
            if (ctr.hasOwnProperty("data") && id != "pivotpreview") {
                filter = findfilter(ctr.data);
                dt = applyFilter(dt, filter);
            }
        }
        if (dt == "undefined")
            return false;
        var opt = {};
        var opt1 = {
            sorters: function (attr) {
                if (attr == "month name") {
                    return sortAs(["Jan", "Feb", "Mar", "Apr", "May",
                        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
                }
                if (attr == "day name") {
                    return sortAs(["Mon", "Tue", "Wed", "Thu", "Fri",
                        "Sat", "Sun"]);
                }
            },
            hiddenAttributes: ["Date", "Max Temp (C)", "Mean Temp (C)",
                "Min Temp (C)", "Total Rain (mm)", "Total Snow (cm)"],
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.c3_renderers
                //$.pivotUtilities.export_renderers,
                 //$.pivotUtilities.gchart_renderers
                ),
            rows: ["year", "month name"],
            cols: ["day name"]
        }
        var renderers = $.extend($.pivotUtilities.renderers
           , $.pivotUtilities.c3_renderers
          , $.pivotUtilities.d3_renderers
           //,$.pivotUtilities.gchart_renderers
           );
        opt.rows = JSON.parse(rows);
        opt.cols = JSON.parse(cols);
        opt.vals = JSON.parse(vals);
        opt.renderers = renderers;
        opt.aggregatorName = aggregate;
        opt.rendererName = rendername;
        opt.onRefresh = function (config) {
            var config_copy = JSON.parse(JSON.stringify(config));
            //delete some values which are functions
            delete config_copy["aggregators"];
            delete config_copy["renderers"];
            //delete some bulky default values
            delete config_copy["rendererOptions"];
            delete config_copy["localeStrings"];
            pivotset = (JSON.stringify(config_copy, undefined, 2));
        }
        var wth = $("#" + id).closest("td").css("width"), ht = $("#dvtable").height();
        wth = parseInt(wth.replace("px", "")) - 30;
        var sty1 = { "overflow-x": "auto", "width": wth };
        if (htdefine != "") sty1.height = htdefine;
        if (id == "pivotpreview") {
            sty1["overflow-y"] = "hidden";
            sty1["max-height"] = ht;
        }
        $("#" + id).pivotUI(dt, opt).css(sty1);
        
        if (ctr.hasOwnProperty("eventlist")) {
            var event = ctr.eventlist;
            actionbutton(data, id, ctr, $("#" + id));
        }

        //var bar = expandcollapsemake($("#" + id));
        //$("#" + id).prepend(bar);

        //outerwrap wrapping
        wrapcontrol(id, "pivot table", id);
    }
}
//#endregion

//action execute & save
function actionbutton(data, id, gdt, container1, options) {
    //attach action button or icon/link to init page
    var ctrtype = "", datacode = "", event;
    if (typeof gdt == "undefined") return false;
    if (gdt.hasOwnProperty("ctrtype")) ctrtype = gdt.ctrtype;
    if (gdt.hasOwnProperty("eventlist")) event = gdt.eventlist;
    if (ctrtype == "content") container1 = $("#" + id).find(".ui-tabs-panel");
    if (typeof event != "undefined" && event != "") {
        var reverse = JSON.parse(JSON.stringify(event)).reverse(), btn, btndiv;
        anchorbtn(id, event,ctrtype);
        $(container1).each(function (i, container) {
            if ($(container).find("#top" + id).length == 0) {
                $("<div id='top" + id + "'/>").prependTo(container);
                $("<div id='btm" + id + "' />").appendTo(container);
                attachbtn(id, container, event, reverse,ctrtype);
            }
        });
      
    }
    function topOrbtm(id,btnobj) {
        var rtn = $("#btm"+id);
        if (btnobj.position.indexOf("top") > -1) rtn = $("#top"+id);
        return rtn;
    }
    function anchorbtn(id, event,ctrtype) {
        $(event).each(function(a,btnobj){
        $("#"+id).find("*").each(function (i, k) {
            if ($(k).outerHTML() == btnobj.position) {
                var btn = $(k);
                if (btnobj.hasOwnProperty("callback"))
                    options.callback = btnobj.callback;// callbackfind(btnobj.callback);

                btnclickevent(id, btn, btnobj, ctrtype, "", options);
            }
                
        });
        });
    }
    function attachbtn(id, container, event, reverse,ctrtype) {
        var btndiv,dvbtn1, dvbtn2, dvbtn3;
        $(event).each(function (i, btnobj) {
            if ($.inArray(btnobj.position, ["topright", "bottomright"]) == -1){
            //if ($.inArray(btnobj.position, ["topleft", "bottomleft", "create", "rename", "delete"]) > -1) {
              dvbtn1 = "";
              btndiv = topOrbtm(id, btnobj);
              var tn = makebtn(btndiv, btnobj);
              btn = tn.btn;
              if (tn.hasOwnProperty("btndiv")) dvbtn1 = tn.btndiv;
              if (btnobj.hasOwnProperty("dataset")) datacode = btnobj.dataset;
              switch (btnobj.position) {
                  case "topleft":
                      if (dvbtn1 != "")
                          $(container).prepend(dvbtn1);
                      else
                          $(container).prepend(btn);
                      break;
                  case "bottomleft":
                      if (dvbtn1 != "")
                          $(container).append(dvbtn1);
                      else
                          $(container).append(btn);
                      break;
              }
              if (typeof btn == "object") {
                  btn.css({ margin: "3px 0 3px 0" });
                  if (btnobj.hasOwnProperty("callback"))
                      options.callback = btnobj.callback;// callbackfind(btnobj.callback);
                  btnclickevent(id, btn, btnobj, ctrtype, datacode, options);
              }
          }
        });
        
        $(reverse).each(function (i, btnobj) {
            if ($.inArray(btnobj.position, ["topright", "bottomright"]) == -1) return false;
            dvbtn3 = "";
            btndiv = topOrbtm(id, btnobj);
            var tn = makebtn(btndiv, btnobj);
            btn = tn.btn;
            if (tn.hasOwnProperty("btndiv")) dvbtn3 = tn.btndiv;
            if (btnobj.hasOwnProperty("dataset")) datacode = btnobj.dataset;
            switch (btnobj.position) {
                case "topright":
                    if (dvbtn3 != "")
                        $(container).prepend(dvbtn3);
                    else {
                        var wrap = $("<div style='text-align:right;padding:5px;'/>");
                        wrap.append(btn);
                        $(container).prepend(btn);
                    }
                    break;
                case "bottomright":
                    if (dvbtn3 != "") {
                        $(container).append(dvbtn3);
                    }
                    else {
                        var wrap = $("<div style='text-align:right;padding:5px;'/>");
                        wrap.append(btn);
                        $(container).append(wrap);
                    }
                    if (ctrtype == "content")//let btn inside parent div
                        btn.closest($("div[role='tabpanel']")).css({ overflow: "hidden" });
                    break;
            }
            if (dvbtn3 != "") {
               // btn.css({ padding: "5px" });
                dvbtn3.css({ "float": "right" });
            }
            //else
            //    btn.css({ padding: "5px", "float": "right" });

            btnclickevent(id, btn, btnobj, ctrtype, datacode, options);
        });
    }
    function callbackfind(code) {
        var rtn = "";
        $(event).each(function (i, k) {
            if (k.code == code)
                rtn = k;
        });
        return rtn;
    }
    function makebtn(btndiv, btnobj) {
        var btn = $("<input id='action" + btnobj.code + "' type='button' command='"+btnobj.command+"' class='btn btn-secondary' value='" + btnobj.buttonname + "'/>");
        switch (btnobj.type) {
            case "icon":
                var icprefix = "fa ";
                if (btnobj.icon.indexOf("ui-icon") > -1) icprefix = "ui-icon ";
                btn = $("<i id='action" + btnobj.code + "' class='fa-darkred imdim "+icprefix + btnobj.icon + "'/>")
                if (btnobj.hasOwnProperty("buttonname") && btnobj.buttonname != "")
                    btn = $("<span class='imdim linkbtn'><i id='action" + btnobj.code + "' style='margin-right:5px' class='fa-darkred "+icprefix+ btnobj.icon + "'/>" + btnobj.buttonname + "</span>")
                break;
            case "button":
                btn.text(btnobj.buttonname);
                if (btnobj.hasOwnProperty("buttonstyle") && btnobj.buttonstyle != "") {
                    var cls = btnobj.buttonstyle.split(";");
                    $(["default", "primary", "secondary", "success", "info", "warning", "danger","lg","sm","default"]).each(function (i, k) {
                        btn.removeClass("btn btn-" + k);
                        btn.removeClass("btn-" + k);
                    })
                    btn.addClass("btn btn-" + cls[0]);
                    btn.addClass("btn-" + cls[1]);
                }
                break;
            case "link":
                btn = "";
                break;
        }
        var set = {};
        switch (btnobj.display) {
            case "hide":
                btn.hide();
                set.btn = btn;
                break;
            case "hover":
                btndiv.append(btn);
                btn.invisible();
                btndiv.hover(
                    function () { btn.visible(); },
                    function () { btn.invisible(); }
                    );
                set.btn = btn;
                set.btndiv = btndiv;
                break;
            default:
                btndiv.append(btn);
                set.btndiv = btndiv;
                set.btn = btn;
               
                break;
        }
        return set;

    }
    function btnclickevent(id, btn, btnobj, ctrtype, datacode, options) {
        //btn.bind("contextmenu", function (e) {
        //    e.preventDefault();
        //});
        btn.on("click", function (e) {
            console.log(id, btn, btnobj, 'ctrtype:',ctrtype, datacode, options)
            if (e.which == 1) {
                if (datacode == "")
                    btnclickexecute("", id, btn, btnobj, ctrtype, options);
                else
                    jsonReadAjax("imcdata", "", "code", datacode, btnclickexecute, [id, btn, btnobj, ctrtype, options]);
            }
        });
    }
}
function btnclickexecute(data, id, btn, btnobj, ctrtype, options) {
    switch (btnobj.command) {
        case "custom":
            var script = scriptfilter(btnobj.script, id);
            var rtn = $("#action" + btnobj.code).attr("rtn");
            funLoading();
            eval("var rtn=" + rtn + ";" + script);
            if (btnobj.hasOwnProperty("callback")) {
                var callbtnid = btnobj.callback;
                setTimeout(function () { actioncallback("", callbtnid); }, 1500);
            }
            else
                funStop();
            break;
        case "load":
            switch (ctrtype) {
                case "jqgrid":
                    //btn==codearr
                    reloadexe(id, btn, btnobj.type, btnobj);
                    break;
                case "content":
                    var val = [], set = {};
                    var dtrow = btn.closest($("div[role='tabpanel']")).find($(".grid-stack")).attr("dtrow");
                    if (dtrow != "") dtrow = JSON.parse(dtrow);
                    var rlist = btnobj.reloadlist[0].mapfield;

                    $(rlist).each(function (x, y) {
                        set = {}, valarr = [];
                        set.code = y[1];
                        if (y[0] != "")
                            valarr = [dtrow[y[0]]];
                        else if (y[2] != "")
                            valarr = [y[2]]
                        set.value = valarr;
                        val.push(set);
                    });
                    reloadexe(id, val, btnobj.type, btnobj);
                    break;
                default:
                    var val = [], set = {};
                    var rlist = btnobj.reloadlist[0].mapfield;
                    $(rlist).each(function (x, y) {
                        set = {};
                        set.code = y[1];
                        if (y[2] != "")
                            set.value = [y[2]]
                        val.push(set);
                    });
                   
                    reloadexe(id, val, btnobj.type, btnobj);
                    break;
            }
            break;
        default:
            var param = [], datacode, dtype;
            if (btnobj.hasOwnProperty("dataset")) datacode = btnobj.dataset;
            else datacode = finddatacode(data);
            if (data.hasOwnProperty("dtype")) dtype = data.dtype;
            var savedata = actionsavedata(id, btn, ctrtype, options);
            console.log(savedata)
            var dtlist = datalistreturn(data);
            //field convert
            var paramcode, keycode = []; var set = {}, param = [];
            var inputobject = {}, jscheme;
            if (btnobj.hasOwnProperty("jsonscheme")) jscheme = btnobj.jsonscheme;
            else jscheme = btnobj.mapping;
            $(jscheme).each(function (i, k) {
                if (k[2]) {
                    keycode.push(k[0]);
                }
            });
            $(jscheme).each(function (i, k) {
                //paramlist=parametername,parametervalue,fieldtype(only query case);.... repeat
                $(savedata).each(function (a, b) {
                    if (k[1] == b.title) {
                        inputobject[k[0]] = b.val;
                    }
                });
                //append filter $ started parameter
                if (userfilter(k[1]) != k[1])
                    inputobject[k[0]] = userfilter(k[1]);
            });
            $(btnobj.mapping).each(function (i, k) {
                //paramlist=parametername,parametervalue,fieldtype(only query case);.... repeat
                if (k[k.length - 1]) paramcode = k[1];
                $(savedata).each(function (a, b) {
                    if (k[1] == b.title) {
                        b.title = k[0];
                        var ll = [k[0], b.val];
                        if (k.length == 4) ll.push(k[2])
                        param.push(ll)
                    }
                    set[k[1]] = b.val;
                });
                //append filter $ started parameter
                if (userfilter(k[1]) != k[1]) {
                    var ll = [k[0], userfilter(k[1])];
                    if (k.length == 4) ll.push(k[2])
                    param.push(ll)
                }
            });
            var set1 = {};
            $(savedata).each(function (i, k) {
                set1[k.title] = k.val;
            });
            //input if it has datamanage update/delete
            var inputupdate="",inputdelete="";
            if (dtype == "input" ) {
                if(data.hasOwnProperty("update"))
                    inputupdate=data.update;
                if (data.hasOwnProperty("delete"))
                    inputdelete = data.delete;
            }
            //update datalist
            switch (btnobj.command) {
                case "update":
                    var chk = false;
                    $(dtlist).each(function (l, m) {
                        if (multikeycheck(m, inputobject, keycode)) {
                            dtlist.splice(l, 1, inputobject);
                            chk = true;
                        }
                    });
                    if (!chk) dtlist.push(inputobject);
                    
                    if (inputupdate != "") {
                        //incase dtype=input & has datamanage function of update 
                        inputupdate = inputupdate.replace("udata", JSON.stringify(inputobject));
                        inputupdate = inputupdate.replace("keyvalue", multikeyvaluemake(inputobject, keycode));
                        console.log(inputupdate,inputobject,keycode);
                        }
                    break;
                case "delete":
                    $(dtlist).each(function (l, m) {
                        if (multikeycheck(m, inputobject, keycode))
                            dtlist.splice(l, 1);
                    });
                    if (inputdelete != "") {
                        //incase dtype=input & has datamanage function of delete 
                        inputdelete = inputdelete.replace("keyvalue", multikeyvaluemake(inputobject, keycode));
                        eval(inputdelete);
                    }
                    break;
            }
            var updata = updateimcdatalist(data, dtlist);
            //var calloption = { data: inputobject, keyvalue: inputobject[keycode] }, callopt = "";
            var calloption = { data: inputobject, keyvalue: multikeyvaluemake(inputobject, keycode) }, callopt = "";
            if (btnobj.hasOwnProperty("callback")) {
                var callbtnid = btnobj.callback;
                jsonUpdateAjax("imcdata", "", JSON.stringify(updata), "code", datacode, actioncallback, [callbtnid]);
                $("#action" + callbtnid).attr("rtn", JSON.stringify(calloption));
            }
            else
                jsonUpdateAjax("imcdata", "", JSON.stringify(updata), "code", datacode);
            //database update/delete
            if (btnobj.hasOwnProperty("commandtype") && btnobj.commandtype != "") {
                var paramlist = {}, plist = {};
                paramlist.connection = btnobj.connectstring;
                plist.query = btnobj.script;
                plist.param = param;
                plist.dtype = btnobj.commandtype;
                plist.sqlcommand = btnobj.command;
                paramlist.querylist = plist;
                jsonDatabaseAjax(paramlist);
                //console.log(paramlist)
            }
           
           
            break;
    }
}
function multikeycheck(datarow, inputobject, keycode) {
    //if keycode are multi, check all fit
    //datarow:datalist each rows, inputobject:data from form
    var chk = false, coincidenum = 0;
    $(keycode).each(function (i, k) {
        if (datarow[k] == inputobject[k])
            coincidenum++;
    });
    if (keycode.length == coincidenum)
        chk = true;
    return chk;
}
function multikeyvaluemake(inputobject, keycode) {
    //if keycode are multi
    console.log(inputobject,keycode)
    var keyvalarr = [], rtn = "";
    $(keycode).each(function (i, k) {
        keyvalarr.push(inputobject[k]);
    });

    if (keyvalarr.length > 0)
        rtn = keyvalarr.join(',');
    return rtn;
}
function reloadexe(ctrid, codearr, btntype, btnobj) {
    console.log(ctrid, codearr, btntype, btnobj)
    //codearr=[['parentkeycode1','value1'],[parentkeycode2,value2]....]
    if ($("#archivegdt").text() != "")
        var ctr1 = JSON.parse($("#archivegdt").text());
    else
        ctr1 = readdata(ctrid, "gdt");
    var pctrtype = ctr1.ctrtype;
    if (ctr1.hasOwnProperty("eventlist")) {
        var elist = $.grep(ctr1.eventlist, function (a) {
            return a.command == "load";// && a.type == btntype;
        });
        if (typeof btnobj != "undefined") {
            curcode = btnobj.code;
            elist = $.grep(ctr1.eventlist, function (a) {
                return a.code == curcode;
            });
        }
        console.log(elist,JSON.stringify(elist))
        if (elist.length > 0) {
            funLoading(true);
            $(elist).each(function (i, k) {
                $(k.reloadlist).each(function (l, m) {
                    var mid = m.menuid, sid = m.subid, did = m.dvid, ctype = m.ctrtype
                    , loadtype = m.loadtype, func = m.function, mtogg = m.menutoggle, mapfield = m.mapfield, wth;
                    if (m.hasOwnProperty("width")) wth = m.width;
                    var ctrlist = menuMy("control");
                    var reloadctr = $.grep(ctrlist, function (a) {
                        return a.dvid == did
                    });
                    if (reloadctr.length > 0) {
                        if(reloadctr[0].hasOwnProperty("data"))
                        var dtt = filterchange(reloadctr[0].data, mapfield, codearr);
                        var opt = { gdt: reloadctr[0], editmode: true }
                        switch (loadtype) {
                            case "popup":
                                $("#popupdv" + did).remove();
                                var dv = $("<div id='popupdv" + did + "'/>")
                                opt.contain = dv;
                                var opt1 = {
                                    height: 'auto'
                                     , width: wth
                                     , modal: false
                                     , appendTo: "#" + ctrid
                                     , minHeight: 'auto'
                                     , title: opt.ctrtype
                                     , stack: false
                                     , close: function (event, ui) {
                                         $(this).dialog('destroy').remove();
                                     }
                                }
                                if (pctrtype == "map") {
                                    // prevent popup appendTo map iframe
                                    // opt.autoOpen=false;
                                    opt1.open = function () {
                                        setTimeout(function () {
                                            dv.parent().appendTo($("body"));
                                        }, 1000)
                                    };
                                }
                                dv.dialog(opt1);
                                break;
                            case "replace":
                               // if (pctrtype == "form") ctrid = "tb" + ctrid;
                                var td = $("#" + ctrid).parent();
                                if (pctrtype == "map") {
                                    $("#" + ctrid).hide();
                                    opt.contain = td;
                                }
                                else
                                    controlinit(ctrid);                                
                                break;
                            case "sidebyside":
                                if (pctrtype == "form") ctrid = "tb" + ctrid;
                                var td = $("#" + ctrid).parent();
                                $("#" + ctrid).css({ float: "left", width: "50%" });
                                break;
                        }
                        if (loadtype == "sidebyside") {
                            $("#" + did).remove();
                            var cdv = $("<div id='" + did + "' />");
                            if (ctype == "form") {
                                $("#tb" + did).remove();
                                cdv = $("<div id='tb" + did + "' />");
                            }
                            $("#" + cdv.attr("id")).remove();
                            td.append(cdv);
                            opt.contain = cdv;
                            cdv.css({ float: "left", width: "50%" });
                        }
                        if (ctype == "map") {
                            $("#" + did).show();
                            $("#clear" + did).click();
                            $("#append" + did).click();
                        }
                        else
                            reloadview(ctype, did, opt);
                        funStop();
                        if (func != "")
                            setTimeout(function () { eval(func) }, 2000);
                    }
                });
            });
        }
    }
    function filterchange(data, mapfield, codearr) {
        if (data.dtype == "database") {
            if (data.hasOwnProperty("querylist")) {
                $(data.querylist).each(function (i, k) {
                    if (k.sqlcommand == "select") {
                        filterchg(k.filter, mapfield, codearr);
                    }
                });
            }
        }
        else
            filterchg(data.filter, mapfield, codearr);
        console.log('data.filter:',data.filter, 'mapfield:',mapfield, 'codearr:',codearr);
        function filterchg(filter, mapfield, codearr) {
            //mapfield=[[parentkey1,childkey1],[parentkey2,childkey2]....]
            //codearr=[[parentkey1,value1],[parentkey2,value2]...]
            //filter[0][0]:childcode
            $(filter).each(function (a, b) {
                $(mapfield).each(function (c, d) {
                    if (d[1] == b[0]) {//if mapfield childkey == filter childkey
                        var parentkey = d[0];
                        if (parentkey == "") parentkey = d[1];
                        $(codearr).each(function (e, f) {
                            if (f.code.toLowerCase() == parentkey.toLowerCase())
                                //incase newly created tree, needs parentnode code
                                b[3] = f.value;
                        });
                    }
                });
            });
            return filter;
        }
        return data
    }
}
function controlinit(ctrid) {
    //clear control div returning to its initial look
    var dv = $("<div />");
    dv.css({ "padding": "0 5px 5px 0", "margin": "5px 0 5px 0" });
    dv.attr("id", ctrid + "_copy");
    // dv.attr("class", ctype);
    var td = $("#" + ctrid).parent();
    dv.insertAfter($("#" + ctrid));
    $("#" + ctrid).remove();
    dv.attr("id", ctrid);
}
function reloadview(ctype, id, options) {
    //completely remove existing div and inject brandnew div of each control for wrapping
    //var dv = $("<div />");
    //dv.css({ "padding": "0 5px 5px 0","margin":"5px 0 5px 0" });
    //dv.attr("id", id+"_copy");
    //dv.attr("class", ctype);
    //var td = $("#" + id).parent();
    //dv.insertAfter($("#" + id));
    //$("#" + id).remove();
    //dv.attr("id", id);
    console.log(ctype,id,options)
    controlinit(id);
    switch (ctype) {
        case "jqgrid":
            jqgridInit(id, options);
            break;
        case "jstree":
            jstreeInit(id, options);
            break;
        case "googlechart":
            googlechartInit(id, options);
            break;
        case "fullcalendar":
            fullCalendarInit(id, options);
            break;
        case "content":
            contentInit(id, options);
            break;
        case "map":
            mapInit(id, options);
            break;
        case "ifrm":
            set.icon = "fa fa-desktop";
            break;
        case "pivot":
            pivotInit(id, options);
            break;
        case "form":
            formInit(id, options);
            break;
        case "html":
            htmlInit(id, options);
            break;
        default:
            formInit(id, options);
            break;
    }
}
function actioncallback(data, callbtnid) {
    if (callbtnid != "")
        $("#action" + callbtnid).click();
    funStop();
}
function calendardatamapping(field, dt, type) {
    //field:mapping table, dt:original database, type:forward(db->fullcalendar),backward(db<-fullcalendar)
    //convert data by mapping field title
    var newdt = [];
    var tit = Object.keys(field);
    //make mapping pair(name:fullcalendar field, value:original field)
    newset = []; $(tit).each(function (i, k) {
        var set = {};
        set.name = k;
        set.value = field[k];
        newset.push(set)
    })
    var compareval, renameval;
    if (typeof type == "undefined") type = 'forward';
    $(dt).each(function (i, k) {
        for (dtname in k) {
            $(newset).each(function (j, l) {
                if (l.name != l.value) {
                    switch (type) {
                        case "forward"://change to fullcalendar data format
                            compareval = l.value;
                            renameval = l.name;
                            break;
                        case "backward"://from fullcalendar format back to database original
                            compareval = l.name;
                            renameval = l.value;
                            break;
                    }
                    if (compareval == dtname) {
                        k[renameval] = k[dtname];
                        delete k[dtname];
                    }
                }
            });
        }
    });
    return dt;
}
function actionsavedata(id, btn, ctrtype, options) {
    if (typeof btn == "string") btn = $("#" + btn);
    var dt = [];
    switch (ctrtype) {
        case "form":
            var form = btn.closest("form");
            $(form).find(".form-group").each(function (i, k) {
                var lbl = $(k).find("label:eq(0)").text();
                var val = $(k).find(".form-control,.control-label, .custom-control,input[type='file']");
                switch (val.prop("tagName")) {
                    case "LABEL": case "SPAN":
                        if ($(".custom-control").length > 0) {
                            cbval = $(k).find("input:radio:checked");
                            ckval = $(k).find("input:checkbox:checked");
                            if (cbval.length > 0)
                                dt.push({ title: lbl, val: cbval.val() });
                            else if (ckval.length > 0) {
                                var arr = [];
                                ckval.each(function (a, b) {
                                    arr.push($(b).val());
                                });
                                dt.push({ title: lbl, val: arr.join(",") });
                            }
                        }
                        else
                            dt.push({ title: lbl, val: val.text() });
                        break;
                    case "INPUT": case "TEXTAREA":
                        if (val.attr("type") == "file") {
                            //already uploaded list
                            var cfile = [], curfile = val.closest("div").find("input[type='hidden']").val();
                            if (curfile != "") cfile = JSON.parse(curfile);
                            var set = {};
                            var valrtn = uploadFile(getlogin().comp);
                            set.title = lbl;
                            var mg = $.merge(valrtn, cfile)
                            console.log(mg);
                            set.val = mg
                            dt.push(set);
                        }
                        else
                        dt.push({ title: lbl, val: val.val() });
                        break;
                    case "MULTISELECT": case "SELECT": case "SELECTIMAGE":
                        valtxt = val.find("option:selected").text();
                        valval = val.val();
                        dt.push({ title: lbl, txt: valtxt,val: valval });
                        //dt.push({ title: lbl + ":text",  val: valval });
                        //dt.push({ title: lbl + ":value", val: valval });
                        break;
                 
                }
            });
            //var domdetail = '<label><span/><input/></label>';
            //if (options.hasOwnProperty("domdetail"))
            //    domdetail = options.domdetail;
            //switch (domdetail) {
            //    case '<label><span/><input/></label>':
            //        $(form.children()).each(function (i, k) {
            //            //$(container+">#tb" + id + ">label").each(function (i, k) {
            //            var span = $(k).find('span'), val, valtxt, valval;
            //            if (span.text() != "") {
            //                switch (span.next().prop("tagName")) {
            //                    case "LABEL":
            //                        val = span.next().text();
            //                        break;
            //                    case "INPUT": case "TEXTAREA":
            //                        val = span.next().val();
            //                        break;
            //                    case "MULTISELECT": case "SELECT": case "IMAGESELECT":
            //                        valtxt = span.next().find("option:selected").text();
            //                        valval = span.next().val();
            //                }
            //                if ($.inArray(span.next().prop("tagName"), ["SELECT", "MULTISELECT", "IMAGESELECT"]) > -1) {
            //                    dt.push({ title: span.text() + ":text", val: valtxt });
            //                    dt.push({ title: span.text() + ":value", val: valval });
            //                }
            //                else
            //                    dt.push({ title: span.text(), val: val });
            //            }
            //        })
                //    break;
                //case '<input/>':
                //    form.children().not('h2').not("input[type='button']")
                //    //$(container+">#tb" + id).children().not('h2').not("input[type='button']")
                //        .each(function (i, k) {
                //            var val, valtxt, valval;
                //            switch ($(k).prop("tagName")) {
                //                case "LABEL":
                //                    val = $(k).text();
                //                    break;
                //                case "INPUT": case "TEXTAREA": case "SELECT":
                //                    val = $(k).val();
                //                    break;
                //                case "MULTISELECT": case "SELECT": case "IMAGESELECT":
                //                    valtxt = span.next().find("option:selected").text();
                //                    valval = span.next().val();
                //            }
                //            if ($.inArray($(k).prop("tagName"), ["SELECT", "MULTISELECT", "IMAGESELECT"]) > -1) {
                //                dt.push({ title: $(k).attr("placeholder") + ":text", val: valtxt });
                //                dt.push({ title: $(k).attr("placeholder") + ":value", val: valval });
                //            }
                //            else
                //                dt.push({ title: $(k).attr("placeholder"), val: val });
                //        });
                //    break;
           // }
            break;
        case "content":
            var contt = btn.siblings(".grid-stack").attr("dtrow");
            if (contt != "") contt = JSON.parse(contt);
            var key = Object.keys(contt);
            $(key).each(function (i, k) {
                dt.push({ title: k, val: contt[k] });
            });
            break;
        case "jqgrid":
            var arr = Object.keys(btn);
            $(arr).each(function (i, k) {
                dt.push({ title: k, val: btn[k] });
            })
            break;
        case "jstree":

            break;
        case "pivot":
            break;
    }
    return dt
}



function findcontainer(id) {
    //in case popup, prevent save multiple data with same id
    var container = "#" + id;
    $("#tb" + id).parent().each(function (i, k) {
        if ($(k).attr("id") == "popupdv" + id) {
            container = "#popupdv" + id;
        }
    });
    return container;
}
function actionsave(data, id, command, datacode, btnobj) {
    var dtype = "", datalist = [], rtn, dobj, keycode, keyvalue;
    if (data.hasOwnProperty("dtype")) dtype = data.dtype;
    datalist = datalistreturn(data);
    rtn = makedtobj(btnobj.mapping);
    dobj = rtn.set;
    keycode = rtn.keycode;
    keyvalue = rtn.keyvalue;
    var newdatalist = updatedatalist(datalist, keycode, keyvalue, command, dobj);
    data.datalist = newdatalist;
    jsonUpdateAjax("imcdata", "", JSON.stringify(data), "code", datacode);
    function updatedatalist(datalist, keycode, keyvalue, command, newdata) {
        switch (command) {
            case "save": case "update":
                $(datalist).each(function (i, k) {
                    if (k[keycode] == keyvalue) {
                        datalist.splice(i, 1);
                    }
                });
                datalist.push(newdata)
                break;
            case "delete":
                $(datalist).each(function (i, k) {
                    if (k[keycode] == keyvalue)
                        datalist.splice(i, 1);
                });
                break;
        }
        return datalist
    }
    function makedtobj(maplist) {
        var set = {}, rtn = {}, keycode, keyvalue;
        $(maplist).each(function (i, k) {
            set[k[0]] = findvalwithtitle(id, k[1]);
            if (k[k.length - 1]) {
                keycode = k[0];
                keyvalue = findvalwithtitle(id, k[1]);
            }
        });
        rtn.set = set;
        rtn.keycode = keycode;
        rtn.keyvalue = keyvalue;
        return rtn;
    }
}
function findvalwithtitle(id, code) {
    //find value with field title 
    var inputdt = saveTable("tb" + id);
    var rtn = "";
    $(inputdt).each(function (a, b) {
        if (b[0] == code) {
            rtn = b[1];
            return false;
        }
    });
    return rtn;
}
//#endregion

//#region jqgrid execute
var currPage = "1", checkpage = false;
function RenderGrid(gridid, gt, comp, model) {
    jQuery("#" + gridid).jqGrid({
        colNames: gt.colNames,
        colModel: gt.colModel,
        datatype: "local",
        data: gt.setting.data,
        height: "auto",
        gridview: true,
        hoverrows: true,
        autowidth: true,
        rowNum: gt.setting.rowNum,
        rowList: [10, 20, 30],
        pager: gt.setting.pager,
        toolbarfilter: true,
        //                loadtext: "Loading..!!.",
        //                emptyrecords: "No records to view",
        viewrecords: true,
        multiselect: gt.setting.multiselect,
        grouping: gt.setting.group,
        groupingView: gt.setting.grpview,
        footerrow: true,
        userDataOnFooter: true,
        onPaging: function (action) {
            if (currPage != $('#' + gridid).getGridParam('page'))
                checkpage = true;
            currPage = $('#' + gridid).getGridParam('page');
        },
        onClickGroup: function (hid, collapsed) {
            if (!checkpage)//paging이 아닌 경우만실행
                expandcollapseSave(gridid, hid, collapsed);
        },
        gridComplete: function () {
            expandcollapseApply(gridid);
            jqRowCustomButton(gridid);
            checkpage = false;
            jqPagerSaveAllToggle('');
        },
        caption: gt.setting.cap,
        autowidth: true,
        editurl: "clientArray"
    });

    //    jQuery("#jqgrid").jqGrid('setCaption',"New Caption");
    jQuery("#" + gridid).jqGrid('sortableRows');
    jQuery("#" + gridid).jqGrid('setGroupHeaders', {
        useColSpanStyle: gt.colspan,
        groupHeaders: gt.colhead
    });

    jQuery("#chngroup").change(function () {
        var vl = $(this).val();
        if (vl) {
            if (vl == "clear") {
                jQuery("#" + gridid).jqGrid('groupingRemove', true);
            } else {
                jQuery("#" + gridid).jqGrid('groupingGroupBy', vl);
            }
        }
    });

    $('.pdiv').resize(function () {
        $("#" + gridid).jqGrid('setGridWidth', $('.pdiv').width() - 5, true)
    }).trigger('resize');
    /* Add tooltips */
    jQuery('.navtable .ui-pg-button').tooltip({
        container: 'body'
    });

    jqPagerCustomButton(gridid, gt.setting.pager, comp, model);
    //jqPagerAllRowAction(gridid,type);
    jqPagerAdd(gridid, gt.setting.pager, [true, true, true, false, false])
    jqRowCustomButton(gridid);
    expandCollapseAll(gridid);

    //#endregion

    //여기까지 RenderGrid() block
}
function jqgridInit(id, options, callback, param) {
    //var gridid = "jqac0";
    var gdt, event, datacode = "";
    jqgridInit.creategrid = creategrid;
    jqgridInit.resizegrid = resizegrid;

    var contain = $("#" + id);
    //contain.empty();
    var tb = $("<table id='jq" + id + "'/>");
    var pg = $("<div id='pg" + id + "'/>");
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("contain")) {
            contain = options.contain;
            //contain.empty();
            tb = $("<table id='jq1" + id + "'/>");
            pg = $("<div id='pg1" + id + "'/>");
        }
        if (options.hasOwnProperty("gdt")) gdt = options.gdt;
    }
    contain.append(tb).append(pg);//.append(tb.next());
    if (typeof gdt == "undefined") {
        if ($("#archivegdt").text() != "")
            gdt = JSON.parse($("#archivegdt").text());
        else
            gdt = readdata(id, "gdt");
    }
    if (typeof gdt != "undefined") {
        if (gdt.hasOwnProperty("eventlist")) event = gdt.eventlist;
        if (gdt.hasOwnProperty("data")) {
            datacode = gdt.data.datacode;
            filter = findfilter(gdt.data);;
        }
    }
    tb.jqGrid("GridUnload");
    tb.css("margin", "5px 0 0 0");
    if (tb.parent().css("width") == "")
        tb.parent().css("width", "100%");
    styleInsert("jqgrid_style1", ".ui-jqgrid .ui-jqgrid-bdiv { position: relative; margin: 0em; padding:0; overflow-x:hidden; overflow-y:auto; text-align:left;}");
    var gridid = tb.attr('id');
    var pagerid = tb.next().attr("id");
    if (typeof (gdt) != "undefined" && gdt.hasOwnProperty('setting') && gdt.hasOwnProperty("data")) {
        var data = gdt.data, datacode;
        if (data.hasOwnProperty("code")) datacode = data.code;
        else if (data.hasOwnProperty("datacode")) datacode = data.datacode;
        jsonReadAjax("imcdata", "", "code", datacode, jqgridInit.creategrid, [tb, gdt, callback, param, filter,datacode]);
    }
    else
        RenderGridBlank(gridid, pagerid);

    wrapcontrol(id, "Grid Control", "gbox_jq" + id,"",resizegrid,[id]);
    setTimeout(function(){
        $("#gbox_jq" + id).removeClass("ui-tabs-panel").css({ "margin": "5px 0 5px 0" });
    },1000)
       
    function creategrid(data, tb, ctr, callback, param, filter,datacode) {
        var dt = datalistreturn(data),eventlist="";
        if (ctr.hasOwnProperty('data'))
            dt = applyFilter(dt, ctr.data.filter);
        if (filter != "")
            dt = applyFilter(dt, filter);

        if (ctr.setting.hasOwnProperty('data'))
            ctr.setting.data = JSON.stringify(dt);
        else
            ctr.setting = $.extend({ "data": JSON.stringify(dt) }, ctr.setting);
        if (ctr.hasOwnProperty("eventlist")) {
            var eventlist = ctr.eventlist;
        }
        var setting = ctr.setting;
        var gridid = setting.grid;
        var pagerid = setting.pager;
        setting.colNames = ctr.colNames;
        setting.colModel = ctr.colModel;
        setting.data = dt;
        setting.pager = "#" + setting.pager;
        //setting.width= null;
        //setting.shrinkToFit = false;
        // setting.autowidth = true;
        var setlist = Object.keys(setting);
        $(setlist).each(function (i, k) {
            if (setting[k] == "")
                delete setting[k];
        });
        if(eventlist!="")
            setting = jqactionbutton(tb, setting, eventlist, datacode);
        tb.jqGrid(setting);
       
        var dvid = gridid.substring(2);
        tb.jqGrid('navGrid', '#' + pagerid, { edit: true, add: false, del: false, refresh: false, search: false });
        $(eventlist).each(function (i, k) {
            if (k.position == "pager")
                tb.jqGrid('navButtonAdd', '#' + pagerid, {
                    caption: k.buttonname,
                    buttonicon: k.icon,
                    onClickButton: function () {
                        if (k.command == "load")
                            reloadexe(dvid, [], "jqgrid", k)
                        //dataListOnlyAjax(true);
                        //var indx = jQuery("#" + gridid).getGridParam('page');
                        //jsonReadAjax('imcdata', '', '', '', dataList);
                        //jQuery("#" + gridid).trigger("reloadGrid", [{ page: indx }]);
                    }
                });
        });

        var wth = $('#gbox_' + gridid).parent().width();
        tb.setGridWidth(wth);
        //if (ctr.hasOwnProperty("event"))
        //    jqEventInit(gridid, pagerid, ctr.event);
        if (ctr.hasOwnProperty("eventlist")) {
            actionbutton(dt, dvid, ctr, $("#" + dvid));
        }

        if (typeof callback === "function") {
            callbackexewithparam(callback, param);
        }
    }
   
}
function resizegrid(id) {
    var resizeWidth = $('#' + id).width();
    if (!fullwin) resizeWidth = $("#" + id).hide().parent().width();
    $("#" + id).show();
    $('#jq' + id).setGridWidth(resizeWidth, true);
    $('#jq' + id).setGridWidth(resizeWidth, true);
}
function jqactionbutton(tb, setting, eventlist, datacode) {
    var gridid = tb.attr("id"), jq = tb;
    var pagerid = tb.next().attr("id");
    var dvid = gridid.substring(2);
    var rowarr = jq.getRowData();
    var colname = setting.colNames;
    var colmodel = setting.colModel;
    $(eventlist).each(function (i, k) {
        switch (k.position) {
            case "rowright":
                colname.push('');
                colmodel.push({ name: k.code, width: 15, sortable: false });
                break;
            case "rowleft":
                colname.unshift('');
                colmodel.unshift({ name: k.code, width: 15, sortable: false });
                break;
        }
    });
    setting.gridComplete = function () {
        var ids = jq.jqGrid('getDataIDs');
        for (var i = 0; i < ids.length; i++) {
            var btnset = {};
            $(eventlist).each(function (a, b) {
                btnset[b.code] = makebtn(b,i);
            });
            jq.jqGrid('setRowData', ids[i], btnset);
        }
    }
    
    setting.loadComplete = function () {
        jq.find("tr").each(function (a, b) {
            var rowarr = jq.getRowData(a);
            $(b).find("i").each(function (c, d) {
                $(d).on("click", function () {
                    $(eventlist).each(function (i, k) {
                        if ($.inArray(k.position, ["rowright", "rowleft"]) > -1 && $(d).attr("class").indexOf(k.icon) > -1) {
                            if (k.command == "load") {
                                var rlist = k.reloadlist[0].mapfield, codearr = [];
                                $(rlist).each(function (x, y) {
                                    set = {};
                                    set.code = y[1];
                                    set.value = [rowarr[y[0]]];
                                    codearr.push(set);
                                });
                                reloadexe(dvid, codearr, "jqgrid", k)
                            }
                            else 
                                jsonReadAjax("imcdata", "", "code", datacode, btnclickexecute, [dvid, rowarr, k, "jqgrid", {}]);
                        }
                    });
                });
            });
        });
       
    }

    function makebtn(btnobj,i) {
        var icprefix = "fa ",btn="";
        if (btnobj.hasOwnProperty("icon")) {
            if (btnobj.icon.indexOf("ui-icon") > -1) icprefix = "ui-icon ";
            btn = "<i id='action" + btnobj.code + i+"' class='imdim " + icprefix + btnobj.icon + "'/>";
            if (btnobj.hasOwnProperty("buttonname") && btnobj.buttonname != "")
                btn = "<span class='imdim'><i id='action" + btnobj.code +i+ "' style='margin-right:5px' class='" + icprefix + btnobj.icon + "'/>" + btnobj.buttonname + "</span>";
        }
        return btn;
    }
    return setting;
}

function jqEventInit(gridid, pagerid, event) {
    //외부function
    //var ctr = selectimctable(menuid, subid, gridid),
    var func = [], onclick = [], remoteUpdate = [], localUpdate = [], opt = {};
    //pager
    if (event.hasOwnProperty("pager")) {
        //select pager func & onclick
        var flist = ["edit", "add", "del", "search", "refresh"];
        var sel = [];
        $(event.pager).each(function (i, k) {
            sel.push(k.title);
        });
        $(flist).each(function (i, k) {
            if ($.inArray(k, missingArray(flist, sel)) == -1) {
                func.push(true);
                $(event.pager).each(function (j, l) {
                    if (k == l.title) {
                        remoteUpdate.push(l.remoteUpdate);
                        localUpdate.push(l.localUpdate);
                    }
                });
            }
            else {
                func.push(false);
                remoteUpdate.push("");
                localUpdate.push("");
            }
        });
        if (event.hasOwnProperty("setting")) {
            if (event.setting.inline) {
                jqPagerAdd(gridid, pagerid, [false, false, false, false, false], []);
                var inlineparams = {
                    add: func[1],
                    edit: func[0],
                    del: func[2],
                    save: true,
                    cancel: true
                };
                $("#" + gridid).jqGrid('inlineNav', "#" + pagerid, inlineparams);
            }
            else {
                if (func.length > 0)
                    jqPagerAdd(gridid, pagerid, func, localUpdate, remoteUpdate);
            }
        }
    }
    //custom pager
    if (event.hasOwnProperty("pagercustom")) {
        if (event.pagercustom.length > 0)
            $(event.pagercustom).each(function (i, k) {
                jqPagerCustom(gridid, pagerid, k);
            });
    }
    //custom row
    if (event.hasOwnProperty("row")) {
        if (event.row.length > 0)
            jqRowCustom(gridid, event.setting.addedcolumn, event.row);
    }
}
function RenderGridBlank(gridid, pagerid) {
    $("#" + gridid).jqGrid(
    { colNames: ["noList"], colModel: [{ name: "noList" }], pager: "#" + pagerid, width: null }
    );
    $("#" + gridid).parents('div.ui-jqgrid-bdiv').css("height", "10px");
    jqPagerAdd(gridid, pagerid, [false, false, false, false, false]);
    jqPagerCustomButton(gridid, pagerid, "1", "no");
}
function jqEditAjaxSave(jqname, jqsetting) {
    imcsetting("imctable", jqname, jqsetting);
    jqgridAjaxUpdate(jqname, JSON.stringify(jqsetting));
}
function jqgridAjaxDel(name) {
    var param = "{'name':'" + name + "'}";
    AjaxGeneral(webserviceprefix + "/WebService.asmx/jqgridDataDel", param);
}
function jqAuto(gridid, pagerid, datasrc, opt) {
    //gridid,pagerid,data만으로 구성되는 data display용 jqgrid
    $("#" + gridid).jqGrid("GridUnload");
    if (datasrc.length == 0) {
        RenderGridBlank(gridid, pagerid);
        return false;
    }
    var colmodel = []; var colname = [];
    $.each(datasrc[0], function (fname, value) {
        colname.push(fname);
        colmodel.push({ name: fname });
    });
    //opt:option 추가 사항
    var options = {
        colNames: colname,
        colModel: colmodel,
        datatype: "local",
        data: datasrc,
        height: "auto",
        autowidth: true,
        rowNum: 5,
        rowList: [5, 10, 20, 30],
        pager: "#" + pagerid,
        //caption: "Data View",
        sortable: true
    };

    if (typeof (opt) != "undefined" && opt != "")
        $.each(opt, function (code, val) {
            options[code] = eval(val);
        });
    jQuery("#" + gridid).jqGrid(options);
}
//#endregion

//#region jqGrid 외부function
var exp = [];
function expandcollapseSave(gridid, hid, collapsed) {
    $("tr[id^='" + gridid + "ghead_']").each(function () {
        var status = {};
        if ($(this).attr("id") == hid) {
            var name = $(this).find('span').next("b").text().substring(0, 5);
            for (i in exp) {
                if (exp[i]["name"] == name)
                    exp.splice(i, 1);
            }

            status["name"] = name;
            status["st"] = collapsed;
            exp.push(status);
        }
    });
}
function expandCollapseAll(gridid) {
    //maintain group expansion
    if ($('.ui-icon-circlesmall-minus').length == 0) {
        $("#" + gridid + " .ui-icon-circlesmall-plus").trigger("click");
    }
    else {
        $("#" + gridid + " .ui-icon-circlesmall-minus").trigger("click");
    }
    //expandcollapseSave();
}
function expandcollapseApply(gridid) {
    $("tr[id^='" + gridid + "ghead_']").each(function () {
        var st = false;
        if ($(this).next("tr").css("display") == "none") {
            st = true;
        }
        for (i in exp) {
            if (exp[i].name == $(this).find('span').next("b").text().substring(0, 5) && exp[i].st != st) {
                jQuery('#' + gridid).jqGrid('groupingToggle', $(this).attr("id"))
            }
        }

    });
}
function jqGridPaging(gridid) {
    if (currPage != $('#' + gridid).getGridParam('page'))
        checkpage = true;
    currPage = $('#' + gridid).getGridParam('page');
}
function localUpdate(gridid, keyarr, dtarr) {

    //    if (type == "string") {
    //        keyarr = JSON.parse(keyarr);
    //        dtarr = JSON.parse(dtarr);
    //    }
    console.log(gridid, keyarr, dtarr);
    var datacode = selectimctable(menuid, subid, gridid).datacode;
    var data = selectimcdata("imcdata", datacode);

    if (keyarr != "" && keyarr.length > 0) {
        $(data.datalist).each(function (i, k) {
            var cnt = 0;
            $(keyarr).each(function (j, l) {
                if (k[l.name] == l.value) {
                    cnt++;
                }
            });
            if (cnt == keyarr.length) {
                if (typeof dtarr != "undefined" && dtarr != "")
                    data.datalist.splice(i, 1, dtarr); //update
                else
                    data.datalist.splice(i, 1); //delete
            }
        });
    }
    else {
        data.datalist.push(dtarr);      //insert
        console.log("insert")
    }
    updateimcdata(data);
    setTimeout(function () {
        // $("#" + gridid).jqGrid("GridUnload");
        jqgridInit(gridid);
    }, 0);
}
function jqPagerAdd(gridid, pagerid, btnarr, localarr, remotearr) {
    var keylist = [], key = {}, kc = [];
    var ctr = selectimctable(menuid, subid, gridid);
    if (typeof (ctr) != "undefined")
        var data = selectimcdata("imcdata", ctr.datacode);

    if (ctr != null)
        if (ctr.hasOwnProperty("event") && ctr.event.hasOwnProperty("setting")
            && ctr.event.setting.hasOwnProperty("keycolumn") && ctr.event.setting.keycolumn != "undefined") {
            kc = data.keycode;
        }
    //onclickSubmit시 발생하는 function 내역
    var set = {
        closeOnEscape: true, closeAfterEdit: true, reloadAfterSubmit: true
    , drag: true, jqModal: true, url: 'clientArray', savekey: [true, 13]
    };
    jQuery("#" + gridid).jqGrid('navGrid', "#" + pagerid, {
        edit: btnarr[0],
        add: btnarr[1],
        del: btnarr[2],
        search: btnarr[3],
        refresh: btnarr[4]
    },
    $.extend(set,
    {//edit
        editCaption: "Edit Comment", edittext: "Edit", recreateForm: false,
        onclickSubmit: function (params, postdata) {

            //            if (typeof funcarr != "undefined" && funcarr[0] != "" && funcarr[0] != null)
            //                eval(funcarr[0]);
            if (typeof localarr != "undefined" && localarr[0] == "Yes") {

                $(kc).each(function (i, k) {
                    key.name = k;
                    key.value = postdata[k];
                    keylist.push(key);
                });

                delete postdata[gridid + "_id"];
                localUpdate(gridid, keylist, postdata);
            }
            if (typeof remotearr != "undefined" && remotearr[0] == "Yes") {
                remoteUpdate(gridid, "update", postdata);
            }
        }
    }),

    {//Add
        addCaption: "Add Comment", closeOnEscape: true, closeAfterAdd: true, reloadAfterSubmit: true
        , jqModal: true, bottominfo: "Fields marked with (*) are required", url: 'clientArray',
        onclickSubmit: function (response, postdata) {
            console.log(postdata, gridid, localarr)

            if (typeof localarr != "undefined" && localarr[1] == "Yes") {
                //                 $(kc).each(function (i, k) {
                //                    key.name=k;
                //                    key.value= postdata[k];
                //                    keylist.push(key);
                //                });
                delete postdata[gridid + "_id"];
                localUpdate(gridid, "", postdata);
            }
            if (typeof remotearr != "undefined" && remotearr[1] == "Yes") {
                remoteUpdate(gridid, "insert", postdata);
            }
        }
    },
    {//Delete
        url: "clientArray", caption: "Delete Comment", closeOnEscape: true, reloadAfterSubmit: true, jqModal: true,
        onclickSubmit: function (response, postdata) {
            if (postdata != null) {
                var rowdata = $('#' + gridid).jqGrid('getRowData', postdata);
                if (typeof localarr != "undefined" && localarr[2] == "Yes") {
                    $(kc).each(function (i, k) {
                        key.name = k;
                        key.value = rowdata[k];
                        keylist.push(key);
                    });
                    localUpdate(gridid, keylist);
                }
                if (typeof remotearr != "undefined" && remotearr[2] == "Yes") {
                    remoteUpdate(gridid, "delete", rowdata);
                    //console.log(gridid,rowdata)
                }
            }
        }
    }
    );
}
function GetResponseData(resp) {
    var json = resp.responseText;  //format is {errno:(int),errmsg:"",query:""}
    var result = eval("(" + json + ")");
    return [result.errno, result.error, ""];
}
function jqPagerCustomExpand(gridid, pagerid) {
    //pager custom button:expand/collapse all
    $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
        caption: "",
        buttonicon: "ui-icon-carat-2-n-s",
        onClickButton: function () {
            expandCollapseAll(gridid);
        },
        position: "last"
    });
}
function jqPagerCustom(gridid, pagerid, options) {
    //#region  options
    /*
    {
        caption: "",
        buttonicon: "ui-icon-wrench",
        onClickButton: function () {
            jqEdit(gridid,pagerid);
        },
        position: "last"
    }
    */
    //#endregion
    var jq = $("#" + gridid), pg = "#" + pagerid;
    var set = {};
    set.caption = options.title;
    set.buttonicon = options.icon;
    set.onClickButton = (function () { eval(options.onclick); });
    set.position = options.position;
    jq.jqGrid("navButtonAdd", pg, set);
}
function jqPagerCustomButton(gridid, pagerid, comp, model) {
    if (comp == "1" && model != "yes") {

        //pager custom button:self setting
        $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
            caption: "",
            buttonicon: "ui-icon-wrench",
            onClickButton: function () {
                jqEdit(gridid.replace("jq", ""));
            },
            position: "last"
            //'cloneToTop':true
        });
    }
    if (model == "yes") {
        //edit all at once
        $("#ui-icon-calculator").remove();
        $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
            caption: "",
            buttonicon: "ui-icon-calculator",
            id: "ui-icon-calculator",
            onClickButton: function () {
                jqPagerAllRowAction(gridid, 'edit');

                if ($('#' + pagerid + ' :has(".ui-icon-disk")').length == 0) {
                    //save all at once
                    $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
                        caption: "",
                        buttonicon: "ui-icon-disk",
                        onClickButton: function () {
                            jqPagerAllRowAction(gridid, 'save');
                        },
                        position: "last"
                    });
                    //cancel edit all at once
                    $("#" + gridid).jqGrid('navButtonAdd', '#' + pagerid, {
                        caption: "",
                        buttonicon: "ui-icon-arrowreturn-1-w",
                        onClickButton: function () {
                            jqPagerAllRowAction(gridid, 'restore');
                        },
                        position: "last"
                    });
                }
            },
            position: "last"
        });

    }
}
function jqPagerSaveAllToggle(type) {
    //editAll<->saveAll/restoreAll toggle
    switch (type) {
        case "edit":
            $('.ui-icon-calculator').hide();
            $('.ui-icon-arrowreturn-1-w').show();
            $('.ui-icon-disk').show();
            break;
        default:
            $('.ui-icon-calculator').show();
            $('.ui-icon-arrowreturn-1-w').hide();
            $('.ui-icon-disk').hide();
            break;
    }
}
function jqPagerAllRowAction(gridid, type) {
    var ids = $("#" + gridid).getDataIDs();
    for (var i = 0; i < ids.length; i++) {
        switch (type) {
            case "edit":
                $("#" + gridid).editRow(ids[i], true);
                break;
            case "restore":
                $("#" + gridid).restoreRow(ids[i], true);
                break;
            case "save":
                $("#" + gridid).saveRow(ids[i], true);
                break;
        }
    };
    jqPagerSaveAllToggle(type);
    if (type == "save") {
        if (gridid == "jqgridedit")
            jqEditSave();
        else
            jqCreateColmodel(gridid);
    }

}
function jqRowCustomButton(gridid) {
    var jq = $("#" + gridid);
    var ids = jq.jqGrid('getDataIDs');
    for (var i = 0; i < ids.length; i++) {
        var cl = ids[i];
        var dt = jq.jqGrid('getRowData', cl);
        be = "<span class='ui-icon ui-icon-pencil imexpand' value='E' onclick=\"" + jq + ".editRow('" + cl + "');\"  />";
        se = "<span class='ui-icon ui-icon-disk imexpand' onclick=\"" + jq + ".saveRow('" + cl + "', false,'clientArray');\"  />";
        ce = "<span class='ui-icon ui-icon-arrowreturn-1-w imexpand' onclick=\"" + jq + ".restoreRow('" + cl + "');\" />";
        ce1 = "<span class='ui-icon ui-icon-pencil imexpand' onclick=\"alert('" + dt.leadcode + "');\" />";

        //jq.jqGrid('setRowData', ids[i], { act: ce1 });
    }
}
function jqRowCustom(gridid, colid, rowevent) {
    //    var ids = jQuery("#jqac0").jqGrid('getDataIDs');
    //    for (var i = 0; i < ids.length; i++) {
    //        var cl = ids[i];
    //        be = "<input style='height:22px;width:20px;' type='button' value='E' onclick=\"jQuery('#jqac0').editRow('" + cl + "');\"  />";
    //        se = "<input style='height:22px;width:20px;' type='button' value='S' onclick=\"jQuery('#jqac0').saveRow('" + cl + "');\"  />";
    //        ce = "<input style='height:22px;width:20px;' type='button' value='C' onclick=\"jQuery('#jqac0').restoreRow('" + cl + "');\" />";
    //        jQuery("#jqac0").jqGrid('setRowData', ids[i], { good1: be + se + ce });
    //    }

    var keylist = [], key = {}, kc = [];
    var ctr = selectimctable(menuid, subid, gridid);
    if (typeof (ctr) != "undefined")
        var data = selectimcdata("imcdata", ctr.datacode);

    if (ctr != null)
        if (typeof ctr.event.setting.keycolumn != "undefined") {
            kc = data.keycode;
        }
    //if edit checked, insert restore,save
    $(rowevent).each(function (i, k) {
        if (k.id == "edit")

            $(["save", "restore"]).each(function (j, l) {
                var set = {};
                set.title = l;
                set.id = l;
                set.icon = "ui-icon-disk";
                if (l == "restore") set.icon = "ui-icon-arrowreturnthick-1-w";
                set.localUpdate = k.localUpdate;
                set.remoteUpdate = k.remoteUpdate;
                rowevent.push(set);
            });
    });

    var jq = $("#" + gridid);
    var ids = jq.jqGrid('getDataIDs');
    var rtn = "";
    for (var i = 0; i < ids.length; i++) {
        var cl = ids[i];
        var tb = $("<table style='border:solid 0 transparent;'/>"), tr = $("<tr />"), td = $("<td />");
        tb.append(tr);
        $(rowevent).each(function (i, k) {
            td = $("<td />");
            tr.append(td);
            td.append(createicon(gridid, k, cl));
        });
        var set = {};
        set[colid] = tb.prop('outerHTML');
        jq.jqGrid('setRowData', cl, set);
    }
    function createicon(gridid, opt, rowid) {
        var rtn1 = "", sp, title = "", id = "", onclick = "";
        sp = $("<span />");
        sp.attr("class", "imexpand ui-icon " + opt.icon);
        //if (opt.hasOwnProperty("remoteUpdate") && opt.remoteUpdate == "Yes") remoteUpdate =remoteUpdate(gridid, "update", postdata) ;
        if (opt.hasOwnProperty("id")) id = opt.id;
        if (opt.hasOwnProperty("title")) title = opt.title;
        if ($.inArray(id, ["edit"]) > -1) {

            sp.attr("onclick", "$('#" + gridid + "')." + id + "Row('" + rowid + "', true, TheOnEditFunction);" + onclick);
            sp.attr("id", "btn_" + id + "_" + rowid);

        }
        else if ($.inArray(id, ["del"]) > -1) {

            onclick = "afterdelfunc('" + gridid + "', '" + rowid + "');";
            sp.attr("onclick", onclick + ";$('#" + gridid + "')." + id + "RowData('" + rowid + "');");
            sp.attr("id", "btn_" + id + "_" + rowid);
        }
        else if ($.inArray(id, ["save", "restore"]) > -1) {
            onclick = "setglobal('" + gridid + "')";
            sp.attr("onclick", "setglobal('" + gridid + "');$('#" + gridid + "')." + id + "Row('" + rowid + "', DisplayEditButton,'','',aftersavefunc);");

            sp.attr("id", "btn_" + id + "_" + rowid);
            sp.css("display", "none");
        }
        else
            sp.attr("onclick", onclick);
        rtn1 = sp; //.prop('outerHTML');

        return rtn1;
    }



}
function setglobal(gridid) {
    grid = gridid;
}
var grid = "";
function aftersavefunc(id, response, options) {
    console.log(id, response, options, grid);
    var postdata = $("#" + grid).jqGrid('getRowData', id);
    var keylist = [], key = {}, kc = [];
    var ctr = selectimctable(menuid, subid, grid);
    if (typeof (ctr) != "undefined")
        var data = selectimcdata("imcdata", ctr.datacode);

    if (ctr != null)
        if (typeof ctr.event.setting.keycolumn != "undefined") {
            kc = data.keycode;
        }
    key.name = kc[0];
    key.value = postdata[kc[0]];
    keylist.push(key);
    if (ctr.hasOwnProperty("event")) {
        $(ctr.event.row).each(function (i, k) {
            if (k.id == "edit") {
                if (k.localUpdate == "Yes")
                    localUpdate(grid, keylist, postdata);
                if (k.remoteUpdate == "Yes") {
                    remoteUpdate(grid, "update", postdata);
                    console.log(grid, postdata);
                }
            }
        });
    }


}
function afterdelfunc(gridid, id) {
    var postdata = $("#" + gridid).jqGrid('getRowData', id);
    var keylist = [], key = {}, kc = [];
    var ctr = selectimctable(menuid, subid, gridid);
    if (typeof (ctr) != "undefined")
        var data = selectimcdata("imcdata", ctr.datacode);

    if (ctr != null)
        if (typeof ctr.event.setting.keycolumn != "undefined") {
            kc = data.keycode;
        }
    key.name = kc[0];
    key.value = postdata[kc[0]];
    keylist.push(key);
    if (ctr.hasOwnProperty("event")) {
        $(ctr.event.row).each(function (i, k) {
            if (k.id == "del") {
                if (k.localUpdate == "Yes")
                    localUpdate(gridid, keylist, "");
                if (k.remoteUpdate == "Yes")
                    remoteUpdate(gridid, "delete", postdata);
            }
        });
    }
}
function TheOnEditFunction(rowid) {
    //alert("rowid is " + rowid);
    $("#btn_save_" + rowid).show();//.css("visibility", "visible");
    $("#btn_restore_" + rowid).show(); //.css("visibility", "visible");
    $("#btn_edit_" + rowid).hide();
    if ($("#btn_del_" + rowid).length > 0)
        $("#btn_del_" + rowid).hide();
    console.log(rowid);//,response,options);
}
function DisplayEditButton(rowid, response, options) {
    //alert("rowid is " + rowid);
    $("#btn_save_" + rowid).hide();//.css("visibility", "hidden");
    $("#btn_restore_" + rowid).hide();//.css("visibility", "hidden");
    $("#btn_edit_" + rowid).show();
    if ($("#btn_del_" + rowid).length > 0)
        $("#btn_del_" + rowid).show();
}
function jqGridResizeWidth(gridid) {
    //find parent div
    var outerdiv = gridid.replace("jq", "");
    // window에 resize 이벤트를 바인딩 한다.
    $(window).bind('resize', function () {
        var dv = $("#" + gridid).parent();
        // 그리드의 width를 div 에 맞춰서 적용
        $('#' + gridid).setGridWidth(dv.width(), false); //Resized to new width as per window
    }).trigger('resize');
}
function selchange(selid, gridid) {
    $("#" + selid).change(function () {
        var vl = $(this).val();
        if (vl) {
            if (vl == "clear") {
                jQuery("#" + gridid).jqGrid('groupingRemove', true);
            } else {
                jQuery("#" + gridid).jqGrid('groupingGroupBy', vl);
            }
        }
    });
}
//#endregion jqGrid 외부function

//#region csslist
function cssInit(ctrid, ctrtype, cssapplyid) {
    //apply css when displaying control)
    //ctrtype: incase archive needs this(ex:form,content,map.....)
    //cssapplyid: area id confine this css apply, class apply in it
    cssInit.cssattach = cssattach;
    cssInit.cssfromarchive = cssfromarchive;
    var rtn = findcssdt(ctrid);
    if (!rtn) {
        jsonReadAjax("imclist", ctrtype, "code", ctrid, cssInit.cssfromarchive, [cssapplyid, ctrid]);
    }
    else if (typeof rtn != "undefined" && rtn != false) {
        if (rtn.type == "css") {
            var dt = rtn.dt;
            cssattach(dt, "css", cssapplyid, ctrid);
        }
        else if (rtn.type == "csscode") {
            jsonReadAjax("imcsetting", "csslist", "code", rtn.csscode, cssInit.cssattach, ["csscode", cssapplyid, ctrid])
        }
    }
    function cssfromarchive(adt, cssapplyid, ctrid) {
        if (adt != "") {
            if (adt.hasOwnProperty("css")) {
                var dt = adt.css;
                cssattach(dt, "css", cssapplyid, ctrid);
            }
            else if (adt.hasOwnProperty("csscode"))
                jsonReadAjax("imcsetting", "csslist", "code", adt.csscode, cssInit.cssattach, ["csscode", cssapplyid, ctrid])
        }
    }
    function cssattach(dt, csstype, cssapplyid, ctrid) {

        var idname = "", cssname1;
        if (ctrid != "" && rtn.type == "css") idname = "-" + ctrid;
        var cssname = dt.name + idname;
        switch (csstype) {
            case "css":
                cssname1 = cssapplyid;
                cssname = "#" + cssapplyid;
                $("#" + cssapplyid + "-csss").remove();
                break;
            case "csscode":
                cssname1 = dt.name
                cssname = "." + dt.name;
                $("#" + cssapplyid).attr("class", dt.name);
                break;
        }
        var css = cssattachcssname(dt.cssscript, cssname);
        if (dt != "") {
            if (dt.hasOwnProperty("cssurl") && dt.cssurl != "") {
                cssInsert(dt.name + "-csss", dt.cssurl);
            }
            else {
                CSSJSON.toHEAD(css, cssname1 + "-csss");
            }

            if (dt.hasOwnProperty("domtype")) {
                switch (dt.domtype) {
                    default:
                        $("#" + ctrid).addClass(dt.name);
                        break;
                }
            }
        }
    }
}
function findcssdt(ctrid, ctrtype) {
    //find css data by requsted controls:form,cssedit,control
    //ctrid can be controlid,archiveid,or csscode
    var cdt = "", rtn = false, dt, src;
    //findout actual csscode from ctrid
    var copyfromarchive = $("#splistdata").text();
    if (copyfromarchive != "") {
        //in case gdt is from archive
        cdt = JSON.parse(copyfromarchive);
    }
    else
        cdt = readdata(ctrid, "gdt", { type: ctrtype });

    if (typeof cdt != "undefined" && cdt != "") {
        if (cdt.hasOwnProperty("css")) {
            rtn = {};
            rtn.dt = cdt.css;
            rtn.type = "css";
        }
        else if (cdt.hasOwnProperty("csscode")) {
            rtn = {};
            rtn.type = "csscode";
            rtn.csscode = cdt.csscode;
        }
        else
            rtn = true;
    }
    return rtn;
}
function cssattachcssname(cssscript, classname) {
    //read css class & attach ctr id in front
    var json = CSSJSON.toJSON(cssscript);
    var snamelist = Object.keys(json.children), stylelist = [], set;

    $(snamelist).each(function (i, k) {
        set = {};
        if (k != "") {
            var name = k.split(","), nlist = [];
            $(name).each(function (a, b) {
                if (b.indexOf(classname.substring(1)) == -1)
                    nlist.push(classname + b);
                else
                    nlist.push(b);
            });
            set.sname = nlist.join(",");
        }

        var list = "";
        var att = json.children[k].attributes;
        $(Object.keys(att)).each(function (a, b) {
            list += b + ":" + att[b] + ";";
        });
        set.style = list;
        stylelist.push(set);
    })
    return tabletocss(stylelist);
}
function classOverride(csscode, cssoverride) {
    var stylist = "", rtn = "";
    $(cssoverride).each(function (i, k) {
        var name1 = k.sname;
        switch (k.stype) {
            case "class":
                name1 = "." + name1;
                break;
            case "id":
                name1 = "#" + name1;
                break;
        }
        var sty = k.style, leng = k.style.length;
        if (sty.substring(leng - 1, leng) == ";") sty = sty.substring(0, leng - 1);
        rtn += name1 + "{" + sty + " !important;}";
    });
    $("#" + csscode).remove();
    styleInsert(csscode, rtn);
}
function classInsert(id) {
    var ctr = selectimctable(menuid, subid, id);
    if (typeof ctr != "undefined") {
        var csscode = "", cssoverride = "";
        if (ctr.hasOwnProperty("csscode")) csscode = ctr.csscode;
        if (ctr.hasOwnProperty("cssoverride")) cssoverride = ctr.cssoverride;

        var stylist = "", rtn = "";
        var list = selectimc("imcsetting", "csslist");
        var clist = $("#imccss").contents();
        var chkexists = false, csslist = [];


        if (clist.length == 0) {
            var cs = "<!--" + csscode + "-->";
            styleInsert("imccss", cs);
        }
        else {

            $(clist).filter(function () {
                return this.nodeType == 8;
            }).each(function (i, e) {
                csslist = e.nodeValue.split(',');
            });
            if ($.inArray(csscode, csslist) > -1) {
                chkexists = true;
            }
            else {
                csslist.push(csscode);
                $("#imccss").contents().first().replaceWith(
                       document.createTextNode("<!--" + csslist.join(',') + "-->")
                   );
            }
        }
        //replace comment

        if (!chkexists) {
            $(list).each(function (i, k) {
                if (k.code == csscode) {
                    if (k.hasOwnProperty("stylelist")) {
                        $(k.stylelist).each(function (j, l) {
                            var name = l.sname;
                            switch (l.stype) {
                                case "class":
                                    name = "." + name;
                                    break;
                                case "id":
                                    name = "#" + name;
                                    break;
                            }
                            rtn += name + "{" + l.style + "}";
                        });
                    }
                }
            });
            var chk = true;
            $($("#imccss").contents()).each(function (i, k) {
                if ($(k).text() == rtn) {
                    chk = false
                    return false;
                }
            })
            if (chk)
                $("#imccss").append($(document.createTextNode(rtn)));

        }

    }
    classOverride(csscode, cssoverride);
}
//#endregion

//#region content
function contentInit(id, option) {
    //if (typeof option !="undefined" && option.hasOwnProperty("gdt")) {
    //    console.log(id, JSON.stringify(option.gdt)); return false;
    //}
    var gdt, dt = "", datacode = "", filter = "";
    contentInit.datasrc = datasrc;
    classInsert(id);
    var contain = $("#" + id);
    if (typeof option != "undefined" && option.hasOwnProperty("gdt")) {
        gdt = option.gdt;
        if (gdt.hasOwnProperty("data") && gdt.data.datacode != "") {
            datacode = gdt.data.datacode;
            filter = findfilter(gdt.data);
        }
        if (option.hasOwnProperty("contain")) contain = option.contain;
    }
    if (typeof gdt == "undefined") {
        if ($("#archivegdt").text() != "")
            gdt = JSON.parse($("#archivegdt").text());
        else
            gdt = readdata(id, "gdt");
        if (typeof gdt != "undefined") {
            if (gdt.hasOwnProperty("data") && gdt.data.datacode != "")
                datacode = gdt.data.datacode;
            else
                process("", gdt, option, contain, filter);
        }
    }
    if (datacode != "")
        jsonReadAjax("imcdata", "", "code", datacode, contentInit.datasrc, [gdt, option, contain, filter]);
    function datasrc(dsrc, gdt, option, contain, filter) {
        var dt;
        if (dsrc != "")
            dt = datalistreturn(dsrc);
        if (filter != "")
            dt = applyFilter(dt, filter);
        process(dt, gdt, option, contain);
    }
    function process(dt, gdt, option, contain) {
        var cid = contain.attr("id");
        var gstack1 = [], tab = [{ href: "001" + cid, html: "FirstTab" }], cstyle = [], setup, disp = "", pagenum = "", ht = "";
        if (typeof gdt != "undefined") {
            if (gdt.hasOwnProperty("setting")) {
                if (gdt.setting.hasOwnProperty("gridstack")) gstack1 = gdt.setting.gridstack;
                if (gdt.setting.hasOwnProperty("tab")) tab = gdt.setting.tab;
                if (gdt.setting.hasOwnProperty("style")) cstyle = gdt.setting.style;
            }
            if (gdt.hasOwnProperty("setup")) setup = gdt.setup;
        }
        if (typeof option != "undefined" && option.hasOwnProperty("key") && typeof dt != "undefined") {
            //content requested from external control(option has key & val)
            dt = $.grep(dt, function (a) {
                return a[option.key] == option.val;
            });
            dt = dt[0];
        }
        var tb, tr, td;
        tb = $("<table style='width:100%' cellpadding='0' cellspacing='0' id='tbcontent" + cid + "'/>"), tr, td;
        //contain.empty()
        contain.append(tb);
        //contain.css("width", "100%");
        contain.removeClass("yellow");
        // gridstackStyle();

        if (typeof dt == "undefined" | dt == "")
            tabmake(tb, "", "");
        else {
            datarun(call);
            function datarun(callback) {
                $(dt).each(function (j, x) {
                    tabmake(tb, j, x);
                });
                if (typeof callback == "function") {
                    call();
                }
            }
            function call() {
                var rownum = 1;
                if (setup.hasOwnProperty("dispnum")) rownum = setup.dispnum;

                if (setup.hasOwnProperty("pagenum")) pagenum = setup.pagenum;
                if (dt.length / rownum < pagenum) pagenum = Math.ceil(dt.length / rownum);
                var opt = {
                    perPage: rownum
                    , limitPagination: pagenum
                    , containerClass: "panel-footer"
                };
                if (dt.length > 1)
                    paginathing($("#tbcontent" + cid), opt);
            }
        }
        //bottom btn

        actionbutton(dt, cid, gdt, $("#" + cid).find(".ui-tabs-panel"), option);//bottons are located at top,bottom,left,right of contain

        //move pagination to bottom
        $("#" + gdt.dvid + ">.pagination-container").appendTo($("#" + gdt.dvid + ">.pagination-container").parent())
        //show text scroll to end
        setTimeout(function () {
            $(".grid-stack-item").each(function (i, k) {
                var sx = parseInt($(k).attr("data-gs-x"));
                var ex = parseInt($(k).attr("data-gs-width"));
                var sy = parseInt($(k).attr("data-gs-y"));
                var ey = parseInt($(k).attr("data-gs-height"));
                if (nothingbelow($(k), sx, ex, sy)) {
                    $(k).find(".grid-stack-item-content").removeClass();
                    $(k).parent().css({ "overflow-y": "auto" });
                }
                else {
                    $(k).children().first().css({ "overflow-y": "auto" });
                }
            });
            var htnum;
            if (htdefine != ""){
                $("#" + cid).css({ height: htdefine });
                $(".grid-stack").css({ "min-height": "", height: htdefine });
                htnum = parseInt(htdefine.replace("px", "").replace("%", "").replace("em", ""));
            }
            
            switch (setup.height) {
                case "auto":
                    $(".grid-stack").each(function (i, k) {
                        var maxht = 0, cht;
                        if ($(k).css("overflow-y") == "auto") {
                            $($(k).find(".grid-stack-item>div")).each(function (x, y) {
                                cht = $(y).height();
                                if (maxht < cht)
                                    maxht = cht;
                            });
                            if (htnum < maxht)
                                maxht = htnum;
                            $(k).css({ height: maxht + 20, "min-height": "", "overflow-y": "hidden" });
                        }
                    });
                    break;
                default:
                    var sht = parseInt(setup.height.replace("px", "").replace("%", "").replace("em", ""));
                    if (htnum < sht)
                        sht = htnum;
                    $(".grid-stack").css({ height: sht });
                    break;
            }
 
            if ($("#" + cid).closest("table").attr("id") != "tblEditor") {
                wrapcontrol(cid, "content1", cid);
                if (dt.length <= 1) {
                    $("[id^='tab-grid" + id + "']").tabs("destroy");
                    $("[id^='tab-grid" + id + "']>ul").remove();
                }
            }  
        }, 2000);
        function nothingbelow(item, startx, endx, starty) {
            //chk widget box exist below
            var td = item.closest('td');
            var chk = true;
            $(td).find(".grid-stack-item").each(function (i, k) {
                var sx = parseInt($(k).attr("data-gs-x"));
                var ex = parseInt($(k).attr("data-gs-width"));
                var sy = parseInt($(k).attr("data-gs-y"));
                var ey = parseInt($(k).attr("data-gs-height"));

                if (starty < sy && ((sx >= startx && startx <= ex) | (sx <= endx && endx <= ex))) {
                    chk = false;
                }
            });
            return chk;
        }
        function tabmake(tb, j, x) {
            var ntab = [];
            $(tab).each(function (s, y) {
                var ss = {};
                ss.href = y.href + j;
                ss.html = y.html;
                ntab.push(ss);
            });
            var workarr = {};
            if ($("#tab-grid" + cid + j).length > 0) {
                $("#tab-grid" + cid + j).remove();
            }
            //$("#tab-grid" + cid)
            workarr.id = "tab-grid" + cid + j;
            workarr.head = ntab;
            var content = [];
            $(workarr.head).each(function (i, k) {
                var dvWorkspace = $("<div class='grid-stack grid-stack-24' style='min-height:300px;'/>");
                dvWorkspace.attr("id", "tab" + k.href);
                dvWorkspace.attr("dtrow", JSON.stringify(x));
                content.push(dvWorkspace.prop('outerHTML'));
            });

            workarr.content = content;
            var tabmake = makeTab(workarr);
            tr = $("<tr/>"), td = $("<td>");
            tb.append(tr);
            tr.append(td);
            td.append(tabmake);
            var options = {
                float: true
                , static_grid: true
                , draggable: { scroll: false }
                , width: 24
                , cell_height: 20
                , vertical_margin: 3
                , auto_height: true
            };
            var worktab = $("#tab-grid" + cid + j);
            worktab.tabs({
                activate: function (event, ui) {
                    var currentTabId = $($("div[id*='tab-grid" + cid + j + "'] ul .ui-tabs-active").find('a')).attr("href");
                    var tabid = "tab" + currentTabId.replace("#", "") + j;
                    var tabstack = [];
                    $(gstack1).each(function (q, b) {
                        if ("tab" + b.tabid + j == tabid) {
                            if (b.type == 'video')
                                resizeIframe($("#contain" + b.id));
                        }
                    });
                }
            });
            setTimeout(function () {
                $("div[id='tab-grid" + cid + j + "'] ul>li").each(function (i, k) {
                    var tabid = $(k).find('a').attr("href").replace("#", "tab");
                    //gridstackInit(tabid);
                    var tabstack = [];
                    $(gstack1).each(function (q, b) {
                        if ("tab" + b.tabid + j == tabid)
                            tabstack.push(b);
                    });
                    $('#' + tabid + '.grid-stack').gridstack(options);
                    gridstackLoad(id, tabid, tabstack, 'display', x, j);
                });
            }, 500);
        }
        return tb;
    }
}
function gridstackLoad(ctrid, tabid, tabstack, type, dtrow, j) {
    if (typeof j == "undefined") j = "none";
    var grid = $("#" + tabid).data('gridstack');
    if (grid != "undefined" && typeof grid != "undefined") {
        grid.remove_all();
        var delay = 0;
        setTimeout(function () {
            var items = GridStackUI.Utils.sort(tabstack);
            _.each(items, function (node) {
                switch (type) {
                    case "edit":
                        var cont = makeGridstack(ctrid, tabid, node.id, node.type, node);
                        break;
                    default:
                        if (j == "none")
                            cont = makeGridstackDisplaysingle(tabid, node.id, node.type, node);
                        else
                            cont = makeGridstackDisplay(tabid, node.id, node.type, node, dtrow, j);
                        break;
                }

                grid.add_widget(cont, node.x, node.y, node.width, node.height);
                switch (node.type) {
                    case 'video': case 'iframe':
                        resizeIframe($("#contain" + node.id + j));
                        break;
                    case "icon":
                        $("#" + node.id).parent().css("z-Index", 3000);
                        break;
                }
            });
        }, delay);
    }
}
function gridstackTextDatamap(txt, dtrow) {
    //convert $[data] in text to database field (ex: his name is $[name]-> his name is Tom)
    var dtmap = [], text = txt;
    var cnt = txt.split('$').length - 1;
    for (var i = 0; i < cnt; i++) {
        var st = txt.indexOf("$") + 2;
        var ed = txt.indexOf("]");
        dtmap.push(txt.substring(st, ed));
        txt = txt.substring(ed + 2);
    }
    $(dtmap).each(function (i, k) {
        text = text.replace("$[" + k + "]", dtrow[k]);
    });
    return text;
}
function makeGridstackDisplay(tabid, objid, type, node, dtrow, j) {
    var contain = $("<div id='contain" + objid + j + "' />");
    var content = $('<div class="grid-stack-item-content contentin" />');
    contain.append(content);
    var img = "", text = "", video = '', iframe = '', icon = '', cont = "", sty = "", clas = "";
    if (node.hasOwnProperty("content")) {
        cont = node.content;
        if (type == "text") text = gridstackTextDatamap(cont.text, dtrow);
        else if (typeof cont.datamap == "undefined") {
            if (cont.hasOwnProperty("text")) text = cont.text;
            if (cont.hasOwnProperty("url")) {
                switch (type) {
                    case "img":
                        img = cont.url;
                        break;
                    case "video":
                        video = cont.url;
                        break;
                    case "iframe":
                        iframe = cont.url;
                        break;
                }
            }
            if (cont.hasOwnProperty("iclass")) icon = cont.iclass;
        }
        else {
            switch (type) {
                //case "text":
                //    //text = dtrow[cont.datamap];
                //    text = gridstackTextDatamap(cont.text, dtrow);
                //    break;
                case "img":
                    img = dtrow[cont.datamap];
                    break;
                case "video":
                    video = dtrow[cont.datamap];
                    break;
                case "iframe":
                    iframe = dtrow[cont.datamap];
                    break;
                case "iclass":
                    iclass = dtrow[cont.datamap];
                    break;
            }
        }

        var cha = [];
        if (cont.hasOwnProperty("clas")) {
            clas = cont.clas.split("");
            $(clas).each(function (i, k) {
                if ($.inArray(k, [".", "#"]) > -1)
                    cha.push(k)
            });
            clas = cha.join("");
        }
    }
    contain.append($("<div/>"));
    var el;//content element
    switch (type) {
        case "img":
            el = $("<img />").attr("src", img)
            break;
        case "text":
            el = $("<div />").html($(text));
            break;
        case "video":
            el = $(video);
            break;
        case "iframe":
            el = $(iframe);
            break;
        case "icon":
            el = $("<i/>").attr("class", icon);
            break;
    }

    content.append(el);
    if (sty != "") sty += ";";
    if (type == 'img') sty += "max-width:100%;max-height: 100%";
    if (sty != "")
        el.attr("style", sty);
    if (clas != "") {
        var cha = [];
        if (cont.hasOwnProperty("clas")) {
            clas = cont.clas.split("");
            $(clas).each(function (i, k) {
                if ($.inArray(k, [".", "#"]) == -1)
                    cha.push(k)
            });
            clas = cha.join("");
        }
        el.attr("class", clas);
    }
    $(contain.children()[0]).css("background-color", "transparent");

    return contain;
}
function makeGridstackDisplaysingle(tabid, objid, type, node) {
    var contain = $("<div id='contain" + objid + "' />");
    var content = $('<div class="grid-stack-item-content contentin" />');
    contain.append(content);
    var img = "", text = "", video = '', icon = '', cont = "", sty = "", clas = "";
    if (node.hasOwnProperty("content")) {
        cont = node.content;
        if (cont.hasOwnProperty("text")) text = cont.text;
        if (cont.hasOwnProperty("url")) {
            switch (type) {
                case "img":
                    img = cont.url;
                    break;
                case "video":
                    video = cont.url;
                    break;
                case "iframe":
                    iframe = cont.url;
                    break;
            }
        }
        if (cont.hasOwnProperty("iclass")) icon = cont.iclass;
        var cha = [];
        if (cont.hasOwnProperty("clas")) {
            clas = cont.clas.split("");
            $(clas).each(function (i, k) {
                if ($.inArray(k, [".", "#"]) > -1)
                    cha.push(k)
            });
            clas = cha.join("");
        }
    }
    contain.append($("<div/>"));
    var el;//content element
    switch (type) {
        case "img":
            el = $("<img />").attr("src", img)
            break;
        case "text":
            el = $("<div />").html(text);
            break;
        case "video":
            el = $(video);
            break;
        case "iframe":
            el = $(iframe);
            break;
        case "icon":
            el = $("<i/>").attr("class", icon);
            break;
    }
    content.append(el);
    if (sty != "") sty += ";";
    if (type == 'img') sty += "max-width:100%;max-height: 100%";
    if (sty != "")
        el.attr("style", sty);
    if (clas != "") {
        var cha = [];
        if (cont.hasOwnProperty("clas")) {
            clas = cont.clas.split("");
            $(clas).each(function (i, k) {
                if ($.inArray(k, [".", "#"]) == -1)
                    cha.push(k)
            });
            clas = cha.join("");
        }
        el.attr("class", clas);
    }

    $(contain.children()[0]).css("background-color", "transparent");

    return contain;
}
//#endregion

//#region form
function formInit(id, options) {
    var gdt, forsample = false, formdt = "", event = "", datacode = "", editmode = false, filter = "";
    var contain = $("#" + id);
    if (typeof options != "undefined") {
        if (options.hasOwnProperty("forsample")) {
            forsample = options.forsample;
            if (forsample) contain = $("#dvdomsample");
        }
        if (options.hasOwnProperty("contain")) contain = options.contain;

        if (options.hasOwnProperty("gdt")) gdt = options.gdt;
        if (options.hasOwnProperty("editmode")) editmode = options.editmode;
    }
    if (typeof gdt == "undefined") gdt = readdata(id, "gdt");
    if (typeof gdt != "undefined") {
        formdt = gdt;
        if (gdt.hasOwnProperty("eventlist")) event = gdt.eventlist;
        if (gdt.hasOwnProperty("data")) {
            datacode = gdt.data.datacode;
            filter = findfilter(gdt.data);
        }
    }
    var fm = $("<form id='tb" + id + "' />");
    //contain.empty();
    $(".pagination-container").remove();
    contain.append(fm);
    //body
    formControlInit(gdt, id, fm, contain, datacode, filter);
    //bottom btn
   // actionbutton(id, gdt, contain);//bottons are located at top,bottom,left,right of contain
    if (!forsample | typeof forsample == "undefined") {
        cssInit(id, "form", "tb" + id);
    }
    if(typeof contain.attr("id")!="undefined" && contain.attr("id").indexOf("popup")==-1)
    wrapcontrol(id, "form", fm)

    setTimeout(function () {
        var clas = contain.attr("class");
        contain.removeAttr("class");
       repositionbutton(fm);
        contain.addClass(clas);
    }, 2000);

    function repositionbutton(form) {
        var btn = contain.find("input:button[id^='action']");
        var cnt=btn.length;
        $(btn).each(function (i, k) {
            if ($(k).css("display") == "none")
                cnt = cnt - 1;
        })

        if (btn.length > 0) {
            var frm = form.children().last();
            if (typeof frm != "undefined") {
                var node0 = frm.prop("nodeName");
                var fst = $("<" + node0 + "/>");
                if (node0 == "FIELDSET")
                    fst = $("<div/>");
                switch (node0) {
                    case "INPUT":
                        form.append(btn)
                        break
                    default:
                        fst.append(btn);
                        form.append(fst)
                        break;
                }
             
                    var num = 12 / cnt;
                    btn.addClass("col-md-" + num);
                   // if (btn.length > 1) {
                    //var wth = btn.width();
                    //btn.css({ width: wth-5, "margin-right": "1px" });
            //}
                $("<div style='clear:both;margin-bottom:10px'/>").insertAfter(form.children().last());
            }
        }
    }
}
function formControlInit(gdt, id, fm, contain, datacode, filter) {
    formControlInit.findform = findform;
    formControlInit.filldata = filldata;
    ////when deploy form
    //if (gdt.hasOwnProperty("csscode"))
    //    jsonReadAjax("imcsetting", "csslist", "code", gdt.csscode, formControlInit.findform, [gdt, id, fm, contain, datacode, filter]);
    //else if (gdt.hasOwnProperty("css"))
    //    process(gdt, id, fm, gdt.css.domdetail, gdt.css.htmlsample, gdt.css, contain, datacode, filter);
    //else
        process(gdt, id, fm, "<label/><input/>", "", "", contain, datacode, filter);
    function findform(cssdt, gdt, id, fm, contain, datacode, filter) {
        var domdetail = cssdt.domdetail;
        var domsample = cssdt.htmlsample;
        process(gdt, id, fm, domdetail, domsample, cssdt, contain, datacode, filter);
    }
    function process(gdt, id, fm, domdetail, domsample, cssdt, contain, datacode, filter) {
        var ctr = "", data = [], ctrlist = [], finishedseq = [], formgrp = "", colnum = 1;
       // fm.dialog({width:1000})
        if (typeof gdt != "undefined" && gdt != "") {
            if (gdt.hasOwnProperty("ctrlist"))
                ctrlist = gdt.ctrlist;
            //top title

            //if has fieldset
            if (gdt.hasOwnProperty("formgrplist") && gdt.formgrplist != "") {
                formgrp = gdt.formgrplist.split(",");
                $(formgrp).each(function (a, b) {
                    var num = parseInt(a) + 1;
                    var fieldset = $("<fieldset style='margin:10px 0 10px 0'><legend style='text-align:left;font-size:1.2em'>"+
                        "<span class='badge badge-pill badge-default marginright'>" + num + "</span>" + b + "</legend></fieldset>");
                    fm.append(fieldset);
                });
            }
            //var sample = $(domsample);
            //var top = sample.prop("nodeName").toLowerCase();
            if (gdt.hasOwnProperty("title") && gdt.title != "") {
                var tit = $("<h2>" + gdt.title + "</h2>");
                fm.prepend(tit);
            }
            colnum = gdt.colnum;
        }
        if (datacode != "" && typeof datacode != "undefined")
            jsonReadAjax("imcdata", "", "code", datacode, actionbutton, [id, gdt, contain, { domdetail: domdetail }]);
        else
            actionbutton("",id,gdt,contain)
        // data.push([makeCtr(["span", "seq", , , ]), makeCtr(["span", "title", , , ]), makeCtr(["span", "control", , , ])]);
        if (ctrlist.length > 0) {
            ctrlist.sort(function (a, b) {
                return (a.odr > b.odr) ? 1 : -1;
            });
            var dv = $("<div style='text-align:left'/>");
            $(ctrlist).each(function (i, k) {
                var rowdt = makeArrSameseq(ctrlist, k.seq, finishedseq);
                if (rowdt.length > 0) {
                    var rtn = makebootstrap(id, rowdt, colnum,gdt)
                    dv.append(rtn);
                    if (colnum == 2)
                        dv.addClass("row");
                    dv.appendTo(fm);
                }
            });
            setTimeout(function () {
                    $("#" + id).find(".multiselect").multipleSelect({ width: "100%" });
                    $("#" + id).find(".multiselect").next().addClass("form-control");

                    $("#" + id).find('.selectimage').ddslick({
                        width: "100%",
                        imagePosition: "left",
                        selectText: "Select a image",
                        onSelected: function (selectedData) {
                            //callback function: do something with selectedData;
                        }
                    });
                    $("input[type=file]").bootstrapFileInput();
            }, 1500);
            if(datacode!="" && typeof datacode!="undefined")
            jsonReadAjax("imcdata", "", "code", datacode, formControlInit.filldata, [id, gdt, filter]);
        }

    }
    function checkfilter(filter) {
        var chk = false;
        $(filter).each(function (i, k) {
            var param = k[2];
            if (typeof param != "object")
                param = param.replace(":", "");
            if (param != "" | param.length > 0)
                chk = true;
        });
        return chk;
    }
    function filldata(data, id, gdt, filter) {
        //console.log(JSON.stringify(data), id, gdt, JSON.stringify(filter));
        var jsonscheme = "", mapping, keycode,ctrlist=gdt.ctrlist;
        $(gdt.eventlist).each(function (i, k) {
            if (k.command == "update" && k.dataset == data.code) {
                if (k.hasOwnProperty("jsonscheme"))
                    jsonscheme = k.jsonscheme;
                else if (k.hasOwnProperty("mapping"))
                    jsonscheme = k.mapping;
            }
        });
        //change filter: fillin keycode n/a when not exist
        $(jsonscheme).each(function (a, b) {
            set = {};
            if (b[2]) {
                $(filter).each(function (x, y) {
                    if (y[0] == b[0]) {
                        if (!(y[2].length > 0 && y[2] != ":"))
                            y[2] = ["n/a"];
                    }
                });
            }
        });
        var dt = datalistreturn(data);
        dt = applyFilter(dt, filter);
        $("#tb" + id + " .form-group").each(function (i,    k) {
            var title = $(k).find("label").text(), code;
            if (title != "") {
                 $(jsonscheme).each(function (a, b) {
                     if (b[1] == title | b[1] == title + ":value") {
                         code = b[0];
                     }
                    if (dt.length == 0 ) {
                        var klist = findkeyvalue(filter);
                        if (klist.length > 0)
                            $(klist).each(function (e, f) {
                                if (code == f.dtfield) {
                                    ctrlistinput(k, f.keyvalue);
                                    return false;
                                }
                            });
                        else {
                            var nval = newctrlistvalue(title, code, ctrlist, filter);
                            ctrlistinput(k, nval);
                        }   
                    }
                    else
                        $(dt).each(function (c, d) {
                            if (typeof d[code] != "undefined") {
                                ctrlistinput(k, d[code]);
                                return false;
                            }
                        });
                });
                 $(gdt.ctrlist).each(function (a, b) {
                     //eventhandler attach
                    if (b.hasOwnProperty("functype") && b.functype != "none" && title == b.title) {
                        $(k).find(".form-control").on(b.functype.substring(2), function () {
                            eval(b.func);
                        });
                    }
                 });
            }
        });
        if (gdt.hasOwnProperty("formgrplist") && gdt.formgrplist != "")
            fieldsetinsert(id, gdt);
        function ctrlistinput(k, inp) {
            switch ($(k).find(".form-control, .control-label,input[type='file']").prop("nodeName")) {
                case "LABEL": case "SPAN":
                    $(k).find(".control-label").text(inp);
                    break;
                case "INPUT": case "TEXTAREA":
                    if ($(k).attr("type") == "file" && inp != "") {
                        styleFile();
                        //save data to hidden input next to $(k)
                        $(k).closest("div").find("input[type='hidden']").val(inp);
                        curlistFile($(k));
                    }
                    else
                        $(k).find(".form-control").val(inp);
                    break;
                case "SELECT":
                    $(k).find(".form-control").val(inp);
                    break;
            }

        }
        function newctrlistvalue(title, code, ctrlist, filter) {
            if(title=="dvcode")
            console.log(title, code, JSON.stringify(ctrlist), JSON.stringify(filter))
            var inp = "";
            $(filter).each(function (i, k) {
                if (k[0] == code && k[3].length > 0) {
                    inp = k[3][0];
                    return false;
                }
            });
            if(inp=="")
            $(ctrlist).each(function (i, k) {
                if (k.title==title ) {
                    if (k.labelinput != "")
                        inp = userfilter(k.labelinput);
                    else if (k.keymake) {
                            switch (k.keymethod) {
                                case "random":
                                    inp= k.keyprefix + idMake();
                                    break;
                                case "seq":
                                    inp = k.keyprefix + idMake();
                                    break;
                            }
                        }
                }
            });
            return inp;
        }
        function findkeyvalue(filter) {
            //fill in keyvalue to ctrlist
            var keylist = [];
            $(filter).each(function (i, k) {
                if (k[2].length > 0 && k[2][0] != 'n/a')
                    keylist.push({ dtfield: k[0], keyvalue: k[2][0] });
            });
            return keylist;
        }
    }
    function fillsub(elset, rowdt, colnum, i, id, gdt, cssdt) {
        var inp;
        var node0 = elset.prop("nodeName").toLowerCase();
        var fst = $("<" + node0 + "/>");
        if (elset.children().length == 0) {
            fst = makecontrol(rowdt, id, gdt, cssdt);
        }
        //else {
        //    $(elset.children()).each(function (i, k) {
        //        switch ($(k).prop("nodeName")) {
        //            case "LABEL": case "SPAN":
        //                $(k).text(rowdt[0].title);
        //                fst.append($(k))
        //                break;
        //            case "INPUT": case "TEXTAREA": case "SELECT":
        //                fst.append(makecontrol(rowdt, id, gdt, cssdt));
        //                break;
        //        }
        //    })
        //}
        function makecontrol(rowdt, id, gdt, cssdt) {
            inp = controlmake(rowdt, id + i, gdt);
            switch (rowdt[0].ctrtype) {
                case "input": case "textarea":
                    $(inp).attr("placeholder", rowdt[0].title);
                    break;
                case "tree":
                    if (typeof $(inp).attr("setting") != "undefined") {
                        var treedt = JSON.parse($(inp).attr("setting")), setting = "";
                        var idd = $(inp).attr("id");
                        jstreeInitmake(treedt, idd);
                    }
                    break;

            }

            return $(inp);
        }
        if (colnum == 2)
            fst.css({ float: "left", "margin-right": "2px", width: "48%" });
        if ($("#imgx").length > 0)
            $("#imgx").on("hover", function () {
                $("#imgx").css({ height: "200px", position: "absolute" });
            });
        return fst;
    }
    function fieldsetinsert(id, gdt) {
       
        var arr = []; $("#tb"+id+" fieldset").each(function (i, s) {
            var name = $(s).find("legend").clone().children().remove().end().text();
            arr.push({ el: $(s), name: name })
        })
        $("#tb" + id + " .form-group.row").each(function (i, k) {
            var title = $(k).find("label:eq(0)").text();
            $(gdt.ctrlist).each(function (a, b) {
                if (b.title == title) {
                    $(arr).each(function (m, n) {
                        if (b.formgroup == n.name) {
                            $(n.el).append($(k));
                           
                        }
                    })
                }
            })
            console.log(title)
        });
      
    }
}
function makeArrSameseq(ctrlist, seq, finishedseq) {
    //push controls with same seq
    var seqrtn = [];
    if ($.inArray(seq, finishedseq) == -1) {
        $(ctrlist).each(function (i, k) {
            if (k.seq == seq)
                seqrtn.push(k);
        });
        finishedseq.push(seq);
    }
    return seqrtn;
}
function makebootstrap(id, rowdt, colnum,gdt) {
    if (rowdt.length > 1) dvcls = "form-inline";
    var lbl = rowdt[0].title,ctr;
    var dv = $("<div/>"),dvmulti=$("<div class='form-inline'/>"), lb = $("<label/>"), indv = $("<div class='col-10'/>");
    if (colnum == "2") {
        dv.addClass("col-sm-6 form-group");
        lb.css("margin-bottom",0).text(lbl);
        indv = $("<div />");
    }
    else {
        dv.addClass("form-group row");
        lb.addClass("col-2 col-form-label").text(lbl);
    }
    dv.append(lb).append(indv);
    if (rowdt.length > 1) indv.addClass("form-inline");
    $(rowdt).each(function (i, k) {
        ctr = makebootcontrol(id,k,gdt,indv);
        if (typeof ctr!="undefined" && rowdt.length > 1) ctr.addClass("mb-2 mr-sm-2 mb-sm-0");
        indv.append(ctr);
    });
    return dv;
}
function makebootcontrol(id,k,gdt,indv) {
    var ctr, ctrtype = k.ctrtype, subctrtype = "", txt = "", placeholder = "", lid = id, stack = "", rows = "3", filetype="default";
    if (k.hasOwnProperty("seq")) lid += k.seq;
    if (k.hasOwnProperty("subseq")) lid += k.subseq;
    if (k.hasOwnProperty("subctrtype")) subctrtype = k.subctrtype;
    if (k.hasOwnProperty("title")) txt = k.title;
    if (k.hasOwnProperty("placeholder")) placeholder = k.placeholder;
    if (k.hasOwnProperty("stack")) stack = k.stack;
    if (k.hasOwnProperty("filetype")) filetype = k.filetype;
    if (k.hasOwnProperty("rows")) rows = k.rows;
    switch (ctrtype) {
        case "input":
            ctr = $("<input/>")
            if (subctrtype != "")
                ctr.attr("type", subctrtype);
            ctr.addClass("form-control").attr("id", lid);
            if (placeholder != "") ctr.attr("placeholder", placeholder);
            break;
        case "textarea":
            ctr = $("<textarea rows='"+rows+"'/>")
            ctr.addClass("form-control").attr("id", lid);
            if (placeholder != "") ctr.attr("placeholder", placeholder);
            break;
        case "button":
            ctr = $("<button/>");
            ctr.text(k.button);
            if (k.hasOwnProperty("buttonstyle") && k.buttonstyle != "") {
                var cls = k.buttonstyle.split(";");
                $(["default", "primary", "secondary", "success", "info", "warning", "danger", "lg", "sm", "default"]).each(function (i, k) {
                    ctr.removeClass("btn btn-" + k);
                    ctr.removeClass("btn-" + k);
                })
                ctr.addClass("btn btn-" + cls[0]);
                ctr.addClass("btn-" + cls[1]);
            }
            break;
        case "checkbox": case "radio":
            ctr = $("<label class='custom-control custom-" + ctrtype + "'/>");
            inctr = $("<input type='" + ctrtype + "'/>").addClass("custom-control-input").attr("id", lid).appendTo(ctr);
            var sp1 = $('<span class="custom-control-indicator"/>').appendTo(ctr);
            var sp2 = $('<span class="custom-control-description"/>').appendTo(ctr);
            sp2.text(txt);
            break;
        case "checkboxlist": case "radiolist":
            var ctype = ctrtype.replace("list", ""), ctr = $("<div>");
            $(k.optionlist).each(function (i, k) {
                var ctr1 = $("<label class='custom-control custom-" + ctype + "'/>");
                inctr = $("<input value='" + k[1] + "' type='" + ctype + "'/>").addClass("custom-control-input").attr("id", lid).appendTo(ctr1);
                if (ctype == "radio") inctr.attr("name", "radio"+lid);
                var sp1 = $('<span class="custom-control-indicator"/>').appendTo(ctr1);
                var sp2 = $('<span class="custom-control-description"/>').appendTo(ctr1);
                sp2.text(k[0]);
                ctr.append(ctr1)
            });
            if (stack == "stacked")
                ctr.addClass('custom-controls-stacked');
            else
            ctr = ctr.unwrap();
            break;
        case "dropdownlist":
            ctr = $("<select/>"), optlist = [], sctrtype = k.subctrtype,pl="";
            $(k.optionlist).each(function (i, k) {
                optlist.push(k.join(","))
            });
            if (sctrtype == "select") sctrtype = "";
            else
                sctrtype = ":" + sctrtype;
            if(placeholder!="")var pl="placeholder:"+placeholder;
            ctr = $(makeCtr(["select" + sctrtype, optlist.join(";"), lid, "", pl]));
            break;
        case "label":
            ctr = $("<label/>");
            ctr.addClass("control-label").attr("id", lid);
            indv.css("padding-top", "5px");
            //setTimeout(function () { ctr.parent().css("padding-top", "5px"); }, 1000);
            break;
        case "tree":
            if (gdt.hasOwnProperty("external")) {
                $(gdt.external).each(function (a, b) {
                    if (b.extid == "ext" + k.seq) {
                        var ctr1 = $("<div class='col-10' id=" + id + k.seq + "/>").appendTo($("body"));
                        jstreeInit("", { gdt: b, contain: ctr1 });
                        setTimeout(function () {
                            if (b.hasOwnProperty("setting") && b.setting.hasOwnProperty("display"))
                                switch (b.setting.display) {
                                    case "dialog":
                                        ctr1.parent().parent().appendTo(indv);
                                        break;
                                    case "dropdown":
                                        $("#dv" + id + k.seq).appendTo(indv);
                                        break;
                                }
                        }, 2000);
                       
                    }
                });
            }
            break;
        case "map":
            if (gdt.hasOwnProperty("external")) {
                $(gdt.external).each(function (a, b) {
                    if (b.extid == "ext" + k.seq) {
                        ctr = $("<div style='height:50px'/>");
                        ctr.attr("id", "dvextmap" + k.seq);
                        ctr.addClass("map");
                        mapInit("", { gdt: b, contain: ctr });
                    }
                });
            }
            break;
        case "file":
            switch (filetype) {
                case "default":
                    ctr = $("<input multiple type='file' onchange='addFile($(this));listFile($(this));'/><input type='hidden' class='inpfilehidden'/>");
                   
                    break;
                case "filemanager":
                    var comp = getlogin().comp, imgsrc = "", rtn;
                    $.cookie('comp', comp);
                    var rtn = "<div class='form-inline'><input id='inpUrl' onkeyup=\"responsive_filemanager_callback('inpUrl')\" class='form-control col-10'/>";
                    if (k.hasOwnProperty("url")) {
                        imgsrc = k.url;
                        var urlid = "inpUrl" + id + k.seq;
                        rtn = "<input id='" + urlid + "' onkeyup=\"responsive_filemanager_callback('" + urlid + "')\" value='" + k.url + "' class='form-control col-10'/>";
                        rtn += "<img style='height:25px;margin-right:5px;' id='imgx' src='" + imgsrc + "' />";
                    }
                    rtn += "<a href=\"/js2/filemanager/dialog.php?type=1&comp="+comp+"&field_id=" + urlid + "\" class='btn btn-primary iframe-btn marginleft'>";
                    rtn += "find</a></div>";
                    ctr = $(rtn);
                    $('.iframe-btn').fancybox({
                        'width': 900,
                        'height': 900,
                        'type': 'iframe',
                        'autoScale': true,
                        'autoSize': false
                    });
                  
                    break;
            }
          
            break;
     
    }
    return ctr;
}
function jstreecallback(jstreediv,indv) {
    jstreediv.appendTo(indv);
}
function controlmake(rowdt, id, curdt) {
    var rtn = "", optlist = "";
    $(rowdt).each(function (i, k) {
        var cid = "",sctrtype="",ctrtype="";
        if (typeof id != "undefined") cid = id + i;
        if (k.hasOwnProperty("subctrtype")) sctrtype = k.subctrtype;
        console.log(k)
        switch (k.ctrtype) {
            case "dropdownlist":
                switch (sctrtype) {
                    case "default":
                        if (k.hasOwnProperty("optionlist")) {
                            $(k.optionlist).each(function (a, b) {
                                optlist += b[0] + "," + b[1] + ";";
                            });
                            if (optlist != "")
                                optlist = optlist.substring(0, optlist.length - 1);
                        }
                        rtn += makeCtr(["select", optlist, cid, "margin-right:5px;", eventsrcipt(k)]);
                        break;
                    case "selectimage":
                        if (k.hasOwnProperty("optionlist")) {
                            $(k.optionlist).each(function (a, b) {
                                optlist += b[0] + "," + b[1] + "," + b[2] + "," + b[3] + ";";
                            });
                            if (optlist != "")
                                optlist = optlist.substring(0, optlist.length - 1);
                        }
                        rtn += makeCtr(["selectimage", optlist, cid, ";margin-right:5px;", eventsrcipt(k)]);
                        break;
                }
                
                break;
           
            case "button":
                var btn = "";
                if (k.hasOwnProperty("button")) btn = k.button;
                var ctr = makeCtr([k.ctrtype, btn, cid, "margin-right:5px;", eventsrcipt(k)]);
                rtn += ctr;
            //case "file":
            //    var comp = selectimc("imcsetting", "login").comp, imgsrc = "";
            //    if (k.hasOwnProperty("url")) {
            //        imgsrc = k.url;
            //        var urlid = "inpUrl" + id + k.seq;
            //        rtn = "<input id='" + urlid + "' onkeyup=\"responsive_filemanager_callback('" + urlid + "')\" value='" + k.url + "' style='width:60%;margin-right:5px;'/>";
            //        rtn += "<img style='height:25px;margin-right:5px;' id='imgx' src='" + imgsrc + "' />";

            //    }
            //    rtn += "<a href=\"/js2/filemanager/dialog.php?type=1&field_id=" + urlid + "\" class='roundbtn iframe-btn' type='button'>";
            //    rtn += "<i class='fa fa-cloud-download fa-2x imdim' style='padding-top:3px;'/></a>";

            //    $('.iframe-btn').fancybox({
            //        'width': 900,
            //        'height': 600,
            //        'type': 'iframe',
            //        'autoScale': true,
            //        'autoSize': false
            //    });
            //    break;
            case "tree":
                if (typeof curdt != "undefined")
                    $(curdt.external).each(function (a, b) {
                        if (b.extid == "ext" + k.seq) {
                            var list = $("<div id='dvext" + id + k.seq + "'/>").attr("setting", JSON.stringify(b));
                            rtn += list.outerHTML();
                        }
                    });
                break;
            case "input":
                rtn += makeCtr([k.ctrtype, , cid, "margin-right:5px;","type:"+k.subctrtype+"^placeholder:" + k.title+"^"+ eventsrcipt(k)]);
                break;
            case "label":
                var lb = "";
                switch (k.label) {
                    case "custom":
                        lb = k.labelinput;
                        break;
                    default:
                        if (curdt.hasOwnProperty("data")) {
                            //var dlist = datalistreturn(curdt.data);
                            var dlist = $("#spdlist").text();
                            if (dlist != "") dlist = JSON.parse(dlist);
                            if (dlist.length > 0) lb = dlist[0][k.label];
                        }
                        break;
                }


                if (k.keymake && lb == "") {
                    switch (k.keymethod) {
                        case "random":
                            lb = k.keyprefix + idMake();
                            break;
                        case "seq":
                            lb = k.keyprefix + idMake();
                            break;
                    }
                }

                rtn += "<label style='font-weight:normal;padding-top:10px;'>" + lb + "</label>";
                break;
            case "image":
                var lb = "", imgsize = "100%";
                if (k.img == "custom") lb = k.imginput;
                else if (curdt.hasOwnProperty("data")) {
                    var dlist = datalistreturn(curdt.data);
                    if (dlist.length > 0) lb = dlist[0][k.img];
                }
                imgsize = k.imgsize + k.imgtype;
                rtn += "<img src='" + lb + "' style='width:" + imgsize + "' />";
                break;
            default:
                rtn += makeCtr([k.ctrtype, , cid, "margin-right:5px;", "placeholder:" + k.title, eventsrcipt(k)]);
                break;
        }
    });
    function eventsrcipt(k) {
        var ertn = "", funcname = id + k.seq;
        //if (k.functype != "none") {

        //     var tts = function () { eval(k.func) }; $("body").append(tts);
        //     ertn = k.functype + ":" + "tts" + "()";
        //    console.log(tts)
        //}
        return ertn;
    }
    return rtn;
}
//upload file & list
function styleFile(){
    var sty = ".ulfile { width: 100%;  margin: 0 auto;   padding: 1em;  }";
    sty += ".ulfile > li { width: 100%;  list-style-type: disc; line-height: 1em;  border-bottom: 1px solid #ccc; }";
    sty += ".ulfile > li span { float: right; }";
    styleInsert("fileupload-css", sty);
}
function addFile(file) {
    window.arr;
    if (typeof arr == "undefined") arr = [];
    $(file[0].files).each(function (i, k) {
        arr.push(k);
    });
}
function curlistFile(file) {
    var dv = file.closest("div");
    if (dv.find("ul").length == 0)
        var ul = $("<ul class='ulfile'/>").appendTo(dv);
    else ul = dv.find("ul");
    var inp = dv.find("input[type='hidden']").val();
    if (inp != "")
        $(JSON.parse(inp)).each(function (a, b) {
            var li = $("<li />").prependTo(ul);
            li.text(b.filename + "(" + b.filesize + "kb)");
            li.prepend(readFile(b));
            var sp = $('<span class="imdim" />').html($('<i class="fa fa-trash" style="color:blue" />')).appendTo(li);
            sp.on("click", function () {
                swal({
                    title: "Are you sure to delete this data?"
                      , text: "You will not be able to recover this file!"
                      , type: "warning"
                      , showCancelButton: true
                      , confirmButtonColor: "#DD6B55"
                      , confirmButtonText: "Yes, delete it!"
                      , cancelButtonText: "No, never!"
                      , closeOnConfirm: true
                      , closeOnCancel: true
                },
                function (isConfirm) {
                    if (isConfirm) {
                        delajaxFile(file, b.dir);
                    }
                });
            });
        });
}
function listFile(file) {
    var dv = file.closest("div");
    if (dv.find("ul").length==0)
        var ul = $("<ul class='ulfile'/>").appendTo(dv);
    else
    ul=dv.find("ul").empty();
    styleFile();
    $(arr).each(function (i, k) {
        var li = $("<li />").appendTo(ul);
        var filesizeInBytes = k.size;
        var filesizekb = parseInt((filesizeInBytes / (1024)));
        var filename = k.name;
        li.text(filename + "(" + filesizekb + "kb)")
        var sp = $('<span class="imdim" />').html($('<i class="fa fa-trash" />')).appendTo(li);
        sp.on("click", function () {
            delFile(i, file);
        });
    });
    curlistFile(file);
    $(".file-input-name").text("");
}
function delFile(i, file) {
    arr.splice(i, 1);
    listFile(file);
}
function readFile(k) {
    var rtn = "",img;
    switch (k.filetype) {
        case "jpg": case "gif": case "png": case "bmp":
            img = "<img src='" + k.dir + "' width='20px' />";
            rtn = $('<a href="' + k.dir + '" data-lightbox="image-1" data-title="' + k.filename + '">' + img + '</a>');
            $(img).on("hover", function () {
                $(this).css("width", "100px");
            });
            break;
        default:
            img = "<img src='/images/filetype/"+k.filetype+".gif' />";
            rtn = $('<a download href="' + k.dir + '">' + img + '</a>');
            break;
    }
    return rtn;
}
function uploadFile(comp) {
    var rtnarr = [];
    $(arr).each(function (i, k) {
        set = {};
        var filesizeInBytes = k.size;
        set.filesize = parseInt((filesizeInBytes / (1024)));
        set.filename = k.name;
        var compdir = "";
        if (comp != "") compdir = comp + "/";
        set.dir = "/data/document/" + compdir + k.name;
        set.filetype = k.name.split(".")[1];
        rtnarr.push(set);
        var formData = new FormData();
        formData.append("file", k);
        if (typeof comp != "undefined")
            formData.append("comp1", comp);
        $.ajax({
            url: webserviceprefix + "/WebService.asmx/UploadFile",
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            success: function (result) {
                console.log(result)
            }
        });
    });
    arr = [];
    return rtnarr;
}
function delajaxFile(file, dir) {
    $.ajax({
        url: webserviceprefix + "/WebService.asmx/DeleteFile",
        data: { dir: JSON.stringify(dir) },
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data, status) {
            var curfile = file.closest("div").find("input[type='hidden']"),cfile;
            if (curfile.val() != "") {
                cfile = JSON.parse(curfile.val());
                $(cfile).each(function (i, k) {
                    if (k.dir == dir) {
                        cfile.splice(i, 1);
                    }
                });
                curfile.val(JSON.stringify(cfile));
                window.arr;
                if (typeof arr == "undefined") arr = [];
                listFile(file);
            }
        },
        error: function (response) {
            var r = jQuery.parseJSON(response.responseText);
            console.log("prefix" + webserviceprefix + "Message: " + r.Message);
            console.log("StackTrace: " + r.StackTrace);
            console.log("ExceptionType: " + r.ExceptionType);
        }
    });
}
//#endregion

//#region form
function htmlInit(id,options) {
    var ctr = readdata(id, "gdt"); //menuMy(menuid, subid, id);
    var mu = menutoggle, m = menuid, s = subid;
    if (typeof ctr != "undefined") {
        if (ctr.hasOwnProperty("setting")) {
            var setting = ctr.setting;
            var menutype = "", menuid1, subid1, html = "";
            if (setting.hasOwnProperty("menutype")) menutype = setting.menutype
            if (setting.hasOwnProperty("menuid")) menuid1 = setting.menuid;
            if (setting.hasOwnProperty("subid")) subid1 = setting.subid;
            if (setting.hasOwnProperty("html")) {
                html = setting.html;
                $("#" + id).append($(html));
            }

            //console.log(menuid1, subid1)
            //var tb = selectimc("imctable", menutype + "submenu");
            //$(tb).each(function (i, k) {
            //    if (k.menuid == menuid1 && k.subid == subid1) {

            //        menutoggle = menutype, menuid = menuid1, subid = subid1;
            //        initDisplay('sssss', k, $('#' + id));
            //        menutoggle = mu, menuid = m, subid = s;
            //    }
            //});

        }
        if (ctr.hasOwnProperty("eventlist")) {
            var event = ctr.eventlist;
            actionbutton("", id, ctr, $("#" + id),options);
            console.log("", id, ctr, $("#" + id),options);
        }

    }
    function htmlDisplay() {
        clearinserted();
        if (typeof data == "undefined" | data == "")
            data = selectimctable(menuid, subid);
        else if (typeof data != "object")
            data = JSON.parse(data);
        if (data == "")
            remoteimctable();
        var inittext = "page1", dt = "", wth = "100%";
        if (typeof (data) == "object") {
            if (data.hasOwnProperty("text")) inittext = data.text;
            if (data.hasOwnProperty("table")) dt = data.table;
            if (data.hasOwnProperty("width")) wth = data.width;
        }
        var dv;
        if ($("#tableinsert").length == 0)
            $(" <div id='tableinsert' style='margin-top:10px' class='layout' ></div><div style='clear:both;margin-bottom:20px;'/>").appendTo($($("form")[0]));

        var table = displayLayout(id, dt, wth);
        var tb = $(".layout"), w;
        if (typeof insertdv != "undefined") tb = insertdv;
        tb.empty();
        w = tb.width() + "px";
        tb.attr("style", "float:right;position:relative;width:" + w);
        tb.append(table);
        injectObject(tb);
        documentreadyInsert("resize1", "$(window).resize(function () {refreshLayout();});");
        refreshLayout();
        tb.find("table").first().find("td").css({ padding: "0 3px 3px 0" });
        tb.css({ padding: "0 5px 0 5px" })
    }
}
//#endregion