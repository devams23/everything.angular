function newfunc(params) {
    var data = 900;
    {
        data = 1000;
    }
    {
        const data1 = 100;
        data1 = 43243;
        console.log(data);
    }
    console.log(data1);
}


newfunc();