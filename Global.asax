<%@ Import Namespace="Core.Data" %>
<%@ Import Namespace="Core.Event" %>
<%@ Import Namespace="System.Net.Mail" %>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Web.Routing" %>
<%@ Application Language="C#" %>
<script runat="server">
    

    void Application_BeginRequest(Object sender, EventArgs e)
    {
        // look for an .html extension
        //if (Request.Path.IndexOf(".imc") > 0)
        //{
        //    // convert the .html extension to a .aspx extension
        //    string url = Request.Path.ToString();
        //    url = url.Replace(".imc", ".aspx");
        //    Context.RewritePath(url);
        //}
        if (Request.AppRelativeCurrentExecutionFilePath == "~/")
            HttpContext.Current.RewritePath("default.aspx");
    }
    
    void Application_Start(object sender, EventArgs e) 
    {
        RegisterRoutes(RouteTable.Routes);
        //// Schedule task for the first time
        //FlowManager fm = FlowManager.GetInstance();
        //string min = fm.FlowFindNextMin(null);
        //ScheduleTask(min);
        
        //// Code that runs on application startup
        ////Application["isTreeLoad"] = false;
        ////Application["CampaignTree"] = null;

        //try
        //{
        //    string session_param_name = "ASPSESSID";
        //    string session_cookie_name = "ASP.NET_SESSIONID";

        //    if (HttpContext.Current.Request.Form[session_param_name] != null)
        //    {
        //        UpdateCookie(session_cookie_name, HttpContext.Current.Request.Form[session_param_name]);
        //    }
        //    else if (HttpContext.Current.Request.QueryString[session_param_name] != null)
        //    {
        //        UpdateCookie(session_cookie_name, HttpContext.Current.Request.QueryString[session_param_name]);
        //    }
        //}
        //catch (Exception)
        //{
        //    Response.StatusCode = 500;
        //    Response.Write("Error Initializing Session");
        //}

        //try
        //{
        //    string auth_param_name = "AUTHID";
        //    string auth_cookie_name = FormsAuthentication.FormsCookieName;

        //    if (HttpContext.Current.Request.Form[auth_param_name] != null)
        //    {
        //        UpdateCookie(auth_cookie_name, HttpContext.Current.Request.Form[auth_param_name]);
        //    }
        //    else if (HttpContext.Current.Request.QueryString[auth_param_name] != null)
        //    {
        //        UpdateCookie(auth_cookie_name, HttpContext.Current.Request.QueryString[auth_param_name]);
        //    }

        //}
        //catch (Exception)
        //{
        //    Response.StatusCode = 500;
        //    Response.Write("Error Initializing Forms Authentication");
        //}
    }
    static void RegisterRoutes(RouteCollection routes)
    {
        //routes.MapPageRoute("login", "Account/Login", "~/login1.aspx");
    }
    void Application_End(object sender, EventArgs e) 
    {
        //  Code that runs on application shutdown

    }
        
    void Application_Error(object sender, EventArgs e) 
    { 
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e) 
    {
        // Code that runs when a new session is started
        //set english as default startup language
        Session["MyCulture"] = "ko-KR";
        if (HttpRuntime.Cache["ScheduledTask"] == null)
        { DoTask(); }
    }

    void Session_End(object sender, EventArgs e) 
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.



    }

    void UpdateCookie(string cookie_name, string cookie_value)
    {
        HttpCookie cookie = HttpContext.Current.Request.Cookies.Get(cookie_name);
        if (cookie == null)
        {
            cookie = new HttpCookie(cookie_name);
            HttpContext.Current.Request.Cookies.Add(cookie);
        }
        cookie.Value = cookie_value;
        HttpContext.Current.Request.Cookies.Set(cookie);
    }

    static void ScheduleTask(string min)
    {
        if (min == null || min=="")
            min = "1440";
        HttpRuntime.Cache.Add(
            // String that represents the name of the cache item,
            // could be any string
        "ScheduledTask",
            // Something to store in the cache
            "Executed:"+DateTime.Now.ToString()+"  Next Task:"+DateTime.Now.AddMinutes(double.Parse(min)).ToString(),
            // No cache dependencies
        null,
            // Will not use absolute cache expiration
        Cache.NoAbsoluteExpiration,
            // Cache will expire after one hour
            // You can change this time interval according
            // to your requriements
        TimeSpan.FromMinutes(double.Parse(min)),
            // Cache will not be removed before expired
        CacheItemPriority.NotRemovable,
            // SetTimer function will be called when cache expire
        new CacheItemRemovedCallback(SetTimer));
    }

    // This function si called when cache is expired
    static void SetTimer(string key, Object value, CacheItemRemovedReason reason)
    {
        // Call the task function
        DoTask();
        // Schedule new execution time
        FlowManager fm = FlowManager.GetInstance();
        string min = fm.FlowFindNextMin(null);
        ScheduleTask(min);
    }

    static void DoTask()
    {
        // Task code which is executed periodically
        // In this example, code will be executed every hour
        EmailPush();
        FlowManager fm = FlowManager.GetInstance();
        fm.FlowTimeout();
        fm.FlowAutostart(null);
        //ScorecardManager sm = ScorecardManager.GetInstance();
        //sm.KpiInsertBatch("KP00000000", null, "yes");
    }

    static void EmailPush()
    {
        FlowManager fm = FlowManager.GetInstance();
        EmailManager em = EmailManager.GetInstance();
        DataTable dt = fm.FlowEmailList();
        if (dt.Rows.Count > 0)
        {
            foreach (DataRow dr in dt.Rows)
            {
                string comp = dr["comp"].ToString();
                string origincode = dr["origincode"].ToString();
                string fgrpcode = dr["fgrpcode"].ToString();
                string fcode = dr["fcode"].ToString();
                string eventcode =dr["eventcode"].ToString();
                string sendermail = dr["sendermail"].ToString();
                string sendername = dr["sender"].ToString();
                string recmail = dr["recmail"].ToString();
                string reccode = dr["reccode"].ToString();
                string recname = dr["recname"].ToString();
                string headline = dr["headline"].ToString();
                string url = urlreplace(comp,dr["url"].ToString(), eventcode,reccode, fgrpcode, fcode);
                string body = HttpContext.Current.Server.HtmlDecode(bodyreplace(dr["body"].ToString(), url)); //Editor1.Html;

                string emailhost = dr["emailhost"].ToString();
                int emailport = int.Parse(dr["emailport"].ToString());
                string emailid = dr["emailid"].ToString();
                string emailpass = dr["emailpass"].ToString();
                bool ssl = bool.Parse(dr["ssl_yn"].ToString());

                SendGmail(sendermail, sendername, recmail, headline, "", "", "", "", body, "", "", "", emailhost, emailport, emailid, emailpass, ssl
                    , origincode, fgrpcode, fcode, reccode);

            }
        }
    }
    static string urlreplace(string comp,string eventcode,string url, string reccode, string fgrpcode, string fcode)
    {
        string rtnValue = "";
        if (url.Contains("ahpinsert"))
        {
            rtnValue = url.Replace("/setting/ahp/", "/survey/");
        }
        else
        {
            rtnValue = url.Replace("/Setting/Survey2/", "/survey/");
        }
        rtnValue = "http://imcmaster.co.kr" + rtnValue + "&code=" + eventcode + "&comp=" + comp + "&staff=" + reccode + "&fgrp=" + fgrpcode + "&fcode=" + fcode;

        //rtnValue = HttpUtility.UrlEncode(rtnValue + "&staff=" + reccode + "&fgrp=" + fgrpcode + "&fcode=" + fcode);
        //rtnValue = "http://imcmaster.co.kr/checkuser.aspx?comp=" + comp + "&fgrp=" + fgrpcode + "&fcode=" + fcode + "&cust=" + reccode + "&rtn=" + rtnValue;
        //string comp = rtnValue;
        return rtnValue;
    }
    static string bodyreplace(string body, string url)
    {
        string rtnValue = "";
        rtnValue = body + string.Format("<div style=\"text-align:center;margin-top:20px;font-weight:bold;font-size:20px;text-decoration:underline;color:red;\" ><a href={0} target='_blank' id=''>설문집행</a></div>", url);

        return rtnValue;
    }
    //SendGmail
    static void SendGmail(string mymail, string myname, string destin, string subject, string destincc
           , string destinbcc, string attach, string textbody, string htmlbody, string picdir, string picid, string pictype,
            string hostaddr, int port, string uid, string upass, bool ssl, string origincode, string fgrpcode, string fcode, string staff)
    {

        // Mail message construction
        MailMessage mm = new MailMessage();
        mm.From = new MailAddress(mymail, myname);
        // Destin address
        if (!string.IsNullOrEmpty(destin))
        {
            char[] delimiters = new char[] { ';' };
            string[] destins = destin.Split(delimiters,
                             StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < destins.Length; i++)
            {
                if (destins[i].Contains("<"))
                {
                    string mail = destins[i].Replace("<", ",").Replace(">", "");
                    string[] mails = mail.Split(',');
                    mm.To.Add(new MailAddress(mails[1], mails[0]));
                }
                else
                {
                    mm.To.Add(destins[i]);
                }
            }
        }
        // CC address
        if (!string.IsNullOrEmpty(destincc))
        {
            char[] delimiters = new char[] { ';' };
            string[] destinccs = destincc.Split(delimiters,
                             StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < destinccs.Length; i++)
            {
                if (destinccs[i].Contains("<"))
                {
                    string mail = destinccs[i].Replace("<", ",").Replace(">", "");
                    string[] mails = mail.Split(',');
                    mm.CC.Add(new MailAddress(mails[1], mails[0]));
                }
                else
                {
                    mm.CC.Add(destinccs[i]);
                }
            }
        }
        // BCC address
        if (!string.IsNullOrEmpty(destinbcc))
        {
            char[] delimiters = new char[] { ';' };
            string[] destinbccs = destinbcc.Split(delimiters,
                             StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < destinbccs.Length; i++)
            {
                if (destinbccs[i].Contains("<"))
                {
                    string mail = destinbccs[i].Replace("<", ",").Replace(">", "");
                    string[] mails = mail.Split(',');
                    mm.Bcc.Add(new MailAddress(mails[1], mails[0]));
                }
                else
                {
                    mm.Bcc.Add(destinbccs[i]);
                }
            }
        }

        // content
        mm.Subject = subject;

        // attachments
        if (!string.IsNullOrEmpty(attach))
        {
            string[] attachs = attach.Split(';');
            //string[] reals = real.Split(';');
            for (int i = 0; i < attachs.Length; i++)
            {
                string path = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}", "/data/upload", attachs[i]));
                Attachment attachment = new Attachment(path);
                mm.Attachments.Add(attachment);
            }
        }
        //textbody
        AlternateView avText = AlternateView.CreateAlternateViewFromString(textbody, null, "text/plain");
        mm.AlternateViews.Add(avText);

        // htmlbody: HTML message body including one image
        //htmlbody = "<html><body>hello... from .net c# mailmessage<br><img src=\"cid:MyPicture\"></body></html>";
        // htmlbody = "<html><body>내 사람 그대여<div>그대</div><div><strong><font color=\"#ff0000\">나를 사랑한</font></strong></div></body></html>";
        if (htmlbody != null)
        {
            AlternateView avHtml = AlternateView.CreateAlternateViewFromString(htmlbody, null, "text/html");
            //첨부된 image처리
            if (!string.IsNullOrEmpty(picdir))
            {
                string[] picdirs = picdir.Split(';');
                string[] picids = picid.Split(';');
                //string[] pictypes = pictype.Text.Split(';');
                for (int i = 0; i < picdirs.Length; i++)
                {
                    LinkedResource mypic = new LinkedResource(picdirs[i]);
                    mypic.ContentId = picids[i];
                    avHtml.LinkedResources.Add(mypic); // Linking the image
                }
            }
            mm.AlternateViews.Add(avHtml);
        }
        // Sending message
        SmtpClient sc = new SmtpClient(hostaddr);
        if (port != null)
        { sc.Port = port; }

        // our account credentials
        if (uid != null) { sc.Credentials = new NetworkCredential(uid, upass, ""); }
        sc.EnableSsl = ssl;
        FlowManager fm = FlowManager.GetInstance();
        // Catching result
        try
        {
            sc.Send(mm);
            fm.FlowEmailResultInsert(fgrpcode, fcode, staff, "sent");
        }
        catch (Exception ex)
        {
            fm.FlowEmailResultInsert(fgrpcode, fcode, staff, "fail");
        }

    }
       
</script>
