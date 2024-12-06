function kiemTraMua(a){
    if (a < 1 || a > 12 ){
        console.log("vui long nhap lai so thang")
    }
    else{
        switch(a){
            case 1: {
                console.log("mua dong")
                break
            }
            case 2: {
                console.log("mua dong")
                break
            }
            case 3: {
                console.log("mua xuan")
                break
            }
            case 4: {
                console.log("mua xuan")
                break
            }
            case 5: {
                console.log("mua xuan")
                break
            }
            case 6: {
                console.log("mua he")
                break
            }
            case 7: {
                console.log("mua he")
                break
            }
            case 8: {
                console.log("mua he")
                break
            }
            case 9: {
                console.log("mua thu")
                break
            }
            case 10: {
                console.log("mua thu")
                break
            }
            case 11: {
                console.log("mua thu")
                break
            }
            case 12: {
                console.log("mua dong")
                break
            }
        }
    }
}
kiemTraMua (13)
// cau b
function kiemtradiem (diem){
    if (diem < 0 || diem > 100){
        console.log("so diem khong hop le, vui long nhap lai.")
    }
    else {
        switch(true){
            case diem < 60 :{
                console.log("hang D")
                break
            }
            case diem >= 60 && diem < 70:{
                console.log("hang C")
                break
            }
            case diem >= 70 && diem < 79:{
                console.log("hang B")
                break
            }
            case diem >= 80 && diem < 89:{
                console.log("hang A")
                break
            }
            default: {
                console.log("hang A+")
                break
            }
        }
    }
}
kiemtradiem (92)
