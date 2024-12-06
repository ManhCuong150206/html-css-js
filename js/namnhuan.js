function kiemtraNamNhuan (a){
    if (a % 4 == 0){
        if (a % 100 == 0 && a % 400 != 0){
            console.log(" khong la nam nhuan")
        }
        else{
            console.log(" la nam nhuan")
        }
    }
    else{
        console.log("khong la nam nhuan")
    }
}
kiemtraNamNhuan (2080)