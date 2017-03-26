<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login2.aspx.cs" Inherits="login2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head runat="server">
      <meta charset="utf-8" />
    <title>IMCMaster Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="text/javascript" src="/js2/jquery/jquery-1.11.3.min.js"></script>
     <script type="text/javascript" src="/js2/jquery-ui/jquery-ui.js"></script>
    <link href="/js2/jquery-ui/jquery-ui.min.css" rel="stylesheet" type="text/css" />
    <link id="jqtheme" href="/js2/jquery-ui-themes-1.11.4/cupertino/theme.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>



   <link rel="stylesheet" href="/js2/font-awesome/css/font-awesome.min.css">
     <script src="js2/sweetalert/sweetalert.min.js"></script>
    <link rel="stylesheet" href="/js2/sweetalert/sweetalert.css">
    
    <script src="core.js"></script>
</head>
<body>
<!-- Simple Login - START -->
<form class="col-md-12" runat="server">
<div id="exTab2" class="container" style="margin-top:5px;max-width:500px">	
    
    <div style="margin-bottom:30px"><img src="/images/logo/imc1_1.png" style="width:60px;" /><img src="/images/logo/imcmaster.png" style="width:150px" /></div>
    <ul class="nav nav-tabs" role="tablist">
		<li class="nav-item"><a  href="#dvLogin"  class="nav-link active" data-toggle="tab" role="tab">Login</a></li>
		<li class="nav-item"><a href="#dvJoin" class="nav-link" data-toggle="tab" role="tab">Join</a></li>
		<li class="nav-item"><a href="#3" class="nav-link" data-toggle="tab" role="tab">Solution</a></li>
	</ul>
    <script>
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(e.target).closest("ul").find("a").removeClass("active")
            $(e.target).addClass("active") // newly activated tab
        });
    </script>
    <div class="tab-content ">
        <div id="dvLogin" class="tab-pane active">
        <div>
           <h1>IMCMaster Login </h1>
        </div>
        <div class="form-group">
             <asp:TextBox ID="UserName"  lang="en" runat="server"  CssClass="form-control input-lg textEntry" placeholder="User ID"/>
        </div>
        <div class="form-group">
             <asp:TextBox ID="Password"  lang="en" runat="server" CssClass="form-control input-lg passwordEntry" TextMode="Password" placeholder="Password"/>
        </div>
       <div class="form-group">
            <asp:Button ID="LoginButton" OnClick="login_click" CssClass="btn btn-primary btn-lg btn-block" lang="en" runat="server" CommandName="Login" Text="Log In" ValidationGroup="LoginUserValidationGroup"/>
            <asp:Button ID="btnCancel" OnClick="cancel_click"  CssClass="btn btn-secondary btn-lg btn-block" lang="en" runat="server"  Text="Cancel"/>
        </div>
        <div class="form-group">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" runat="server" id="RememberMe"/>
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Remember</span>
            </label>
            <span class="pull-right"><a href="#" onclick="tabclick('join')">New Registration</a></span>
        </div>
      <%--  <div class="checkbox">
            <label style="font-size: 1.2em">
                <asp:CheckBox  ID="RememberMe1"  runat="server" />
                <span class="cr"><i class="cr-icon fa fa-check"></i></span>
               Remember
            </label>
              <span class="pull-right"><a href="#" onclick="tabclick('join')">New Registration</a></span>
        </div>--%>
         <asp:Label runat="server" ID="lbError" style="color:Red"/>    
        </div>
        <div id="dvJoin" style="margin-top:5px;" class="tab-pane">
            <div id="dvjoin1">
            <style>
                .lb { padding-top:10px;text-align:left;width:60px;}
                .join { width: 60%;float: right;margin-right: 20px;}
                .join1 { width: 17%;float: right;margin:0 10px 0 20px;}
                .join2 { width: 40%;float: right;margin-right:22px;}
                .join3 { width: 40%;float: right;margin-right:5px;}
                label.join { border-bottom:solid 1.5px #B7B7B7;text-align:left;font-weight:normal;}
                .form-group {margin:0 0 10px 10px !important;text-align:left !important;}
            </style>
             <div>
                <h1>Join </h1>
            </div>
            <div class="form-group" style="display:none">
                <label for="lbSysid"  lang="en" class="lb">SysID</label>
                <label class="join"  id="lbSysid"></label>
                <label class="join"  id="lbSvcprovider"></label>
            </div>
            <div class="form-group">
                <label for="inpComp"  lang="en" >CompCode</label>
                    <button type="button" onclick="checkexist($('#inpComp'));" class="join1 btn btn-default btn-primary btn-block"  lang="en">Check</button>
                <input type="text" name="inpComp"  lang="en" class="join3 form-control" id="inpComp"  placeholder="CompCode"/>

                
                <img src="/images/help-icon.png"  title="Ask your administrator your company code"/>
           </div>
           <div class="form-group">
                  <label class="lb"></label>
               <div lang="en" onclick="$('#dvcomp').toggle();$('#dvjoin1').toggle();" class="join linkbtn" >or register new company</div>
           </div>
            <div class="form-group">
                <label for="inpId" lang="en" class="lb">ID</label>
                <input class="join form-control" name="inpId"  lang="en" id="inpId" onblur="checkexist($(this))" placeholder="Email or id">
            </div>
            <div class="form-group">
                <label for="inpPass" lang="en" class="lb">Password</label>
                <input type="password" name="inpPass"  lang="en" class="join form-control" id="inpPass" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="inpPass1" lang="en" class="lb">PassAgain</label>
                <input type="password" name="inpPass1"  lang="en" class="join form-control" id="inpPass1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="inpName"  lang="en" class="lb">Name/Nic</label>
                <input type="text" name="inpName" lang="en" class="join form-control" id="inpName" placeholder="Name or nickname">
           </div>
            <div class="form-group">
                <label for="inpEmail"  lang="en" class="lb">Email</label>
                <input type="email" name="inpEamil" lang="en" class="join form-control" id="inpEmail" placeholder="Email">
           </div>
           
            <div class="join" style="text-align:right;margin-right:20px;"><h5>Want log in? &nbsp;&nbsp;  
                <button type="button" onclick="tabclick('login')" class="btn btn-success btn-xs">Log In</button></h5>
                <div class="col-sm-offset-4 col-sm-12" style="text-align:center;">
                     
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block" onclick="registerAjax()" id="btnRegister" lang="en">Register</button>
            </div>
            </div>
            <div id="dvcomp" style="display:none;margin-top:15px;"> 
                 <div class="form-group">
                    <label for="inpCompname" lang="en" class="lb">CompName</label><span style="color:red;font-size:large;vertical-align:bottom;">*</span>
                    <input class="join form-control" name="inpCompname"  lang="en" id="inpCompname" placeholder="Company Name"/>
                </div>
                <div class="form-group">
                    <label for="inp" lang="en" class="lb">Language</label>
                    <select name="selLanguage"  lang="en" class="join form-control" id="selLanguage">
                        <option disabled="disabled" >Select language!</option>
                        <option value="korean" >Korean</option>
                        <option value="english" >English</option>
                    </select>
                </div>
                <%-- <div class="form-group">
                    <label for="inpPhonearea" lang="en" class="lb">Phone</label>
                    <input name="inpPhone"  lang="en" class="join2 form-control" id="inpPhone"  placeholder="Phone number"/>
                     <input name="inpPhonearea"  lang="en" class="join1 form-control" id="inpPhonearea" placeholder="Country num"/>
                </div>--%>
                <%--<div class="form-group">
                    <label for="inpHome" lang="en" class="lb">Homepage</label>
                    <input name="inpHome"  lang="en" class="join form-control" id="inpHome"  placeholder="Homepage URL"/>
                </div>--%>
               <%-- <div class="form-group">
                    <label for="inp" lang="en" class="lb">Logo</label>
                    <input type="file" name="inpImg"  lang="en" class="join form-control" id="inpImg"/>
                </div>--%>
                 <div class="col-sm-offset-4 col-sm-12" style="text-align:center;margin-top:15px;">
                    <button type="button" onclick="$('#dvcomp').hide();$('#dvjoin1').show();registertoggle();" class="btn btn-default"  lang="en">Cancel</button>
                    <button type="button" class="btn btn-default" onclick="$('#dvcomp').hide();$('#dvjoin1').show();tempsave();registertoggle();"  lang="en">OK</button>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="3">
            <h3>add clearfix to tab-content (see the css)</h3>
	    </div>
    </div>
</div>
</form>
<!-- Simple Login - END -->
<script>
    function registerAjax() {
        var regi = "";
        registerAjax.regicheck = regicheck;
        funLoading(true);
        var svcid = $("#lbSysid").text(), sp = $("#lbSvcprovider").text(), id = $("#inpId").val(), pic = "",
        pass = $("#inpPass").val(), name = $("#inpName").val(), email = $("#inpEmail").val(), comp = $("#inpComp").val(),
        compname = $("#inpCompname").val(), language = $("#selLanguage").val(), tel1 = $("#inpPhonearea").val(), tel2 = $("#inpPhone").val()
        , home = $("#inpHome").val();
        //var url = "/webservice.asmx/CompStaffUpdateWeb";
        //var param = {
        //    staffcode: JSON.stringify(id), password: JSON.stringify(pass)
        //    , staffname: JSON.stringify(name), email: JSON.stringify(email)
        //    , comp: JSON.stringify(comp), pic: JSON.stringify(pic)
        //    , svcprovider: JSON.stringify(sp), svcid: JSON.stringify(svcid)
        //    , compname: JSON.stringify(compname), country: JSON.stringify(country)
        //    , tel1: JSON.stringify(tel1), tel2: JSON.stringify(tel2)
        //    , home: JSON.stringify(home)
        //};
        var compobj = {}, userobj = {};
        compobj.compcode = comp;
        compobj.compname = compname;
        compobj.language = language;
        userobj.id = id;
        userobj.pass = pass;
        userobj.name = name;
        userobj.email = email;
        userobj.comp = comp;

        jsonUpdateAjax("imcregister", "comp", JSON.stringify(compobj), "compcode",comp, registerAjax.regicheck,["comp"]);//, cssdt.code, reloadcsslist);
        jsonUpdateAjax("imcregister", "user", JSON.stringify(userobj), "id", id,registerAjax.regicheck, ["user"]);
        //console.log(param)
        //$.ajax({
        //    contentType: "application/json; charset=utf-8",
        //    url: url,
        //    data: param,
        //    dataType: "json",
        //    success: function (data) {
        //        console.log(data.d)
        //        funStop();
        //        sweetmsgautoclose("Success", "Register succeed. Pls login");
        //        setTimeout(function () { parent.location.reload(); }, 3000);

        //    },
        //    error: function (result) {
        //        console.log(JSON.stringify(result));
        //        funStop();
        //    }
        //});
        function regicheck(dt, type) {
            console.log(dt,type)
            regi.push(type);
            if (regi.length == 2)
                sweetmsgautoclose("Success", "register succeed!");
        }
    }
    function aftlogin() {
        alert($("#UserName").val()+$("#Password").val())
    }
    function tabclick(type) {
        switch (type) {
            case "login":
                $("[href='#dvLogin']").tab('show');
                break;
            case "join":
                $("[href='#dvJoin']").tab('show');
                $("#inpComp").val("").prop('disabled', false);
                break;
        }
    }
    function dellocalstorage() {
        localStorage.removeItem("imctable");
    }
    var compobj = {};
    function tempsave() {
        compobj = {};
        compobj.compcode = idMake();
        compobj.name = $("#inpCompname").val();
        compobj.language = $("#selLanguage").val();
        $("#inpComp").val(compobj.compcode).prop('disabled', true);
    }

    function checkexist(that) {
        var storename, dataname, code;
        switch (that.attr('id')) {
            case "inpComp":
                storename = "imcregister";
                dataname = "comp";
                code = "compcode";
                break;
            case "inpId":
                storename = "imcregister";
                dataname = "user";
                code = "id";
                break;
        }
        checkexist.process = process;
        jsonReadAjax(storename, dataname, code, that.val(), checkexist.process, [storename, dataname, code]);
        function process(dt, storename, dataname, code) {
            console.log(dt)
            switch (storename + dataname) {
                case "imcregisteruser":
                    if (typeof dt.id == "string") {
                        sweetmsgautoclose("Ooops!", "Same id used, try other id..");
                        that.focus();
                    }
                    break;
                case "imcregistercomp":
                    if (typeof dt.compcode == "undefined") {

                        sweetmsgconfirm("$('#dvcomp').toggle(); $('#dvjoin1').toggle();", { title: "Wrong Company code", body: "Create new company code ?" });
                        that.focus();
                    }
                    else {
                        sweetmsgautoclose("OK!", "There is a company named "+dt.compname +" exists");
                    }
                    break;
            }
        }

    }
</script>

</body>
</html>