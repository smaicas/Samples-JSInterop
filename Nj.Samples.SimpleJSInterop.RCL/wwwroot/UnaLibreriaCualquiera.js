﻿$(function () {
    console.log("ready");
    window['myFunctionTest'] = function () {
        alert('This is myFunctionTest');
    };

    window['myFunctionTestWithReturn'] = function () {
        var txt = prompt("Dime algo");
        DotNet
            .invokeMethodAsync('Nj.Samples.SimpleJSInterop.RCL', 'ReturnToCSharp', txt)
            .then((data) => { alert(data); });
    }
});