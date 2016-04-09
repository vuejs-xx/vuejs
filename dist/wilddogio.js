/**
 * Created by edwin on 2016/4/8.
 */
var ref = new Wilddog("https://sblig.wilddogio.com/");
ref.set({
    "name" : "Jack Bauer",
    "age" : 32,
    "location" : {
        "city" : "beijing",
        "zip" : 100000
    }
});

ref.child("location/city").on("value", function(datasnapshot) {
    console.log(datasnapshot.val());   // 结果会在 console 中打印出 "beijing"
});
