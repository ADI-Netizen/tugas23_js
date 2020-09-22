function eliminasi() {
    var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
    var ldlm = angka.filter(function (no) {
        return no > 15;
    });
    console.log(ldlm)
}

eliminasi()