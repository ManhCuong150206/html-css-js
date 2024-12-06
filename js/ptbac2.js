function ptbac2(a,b,c){
    if (a == 0 && b== 0){
        console.log("phuong trinh vo nghiem")
    }
    else{
        if (a == 0){
            let x = -b/c
            console.log("phuong trinh co 1 nghiem. x= ", x)
        }
        else {
            let denta = b*b -4*a*c
            if (denta < 0){
                console.log("phuong trinhh vo nghiem")
            }
            else{
                console.log("phuong trinh co 2 nghiem phan biet")
            }
        }
    }
    
}