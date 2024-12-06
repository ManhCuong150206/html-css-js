let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let doDaiMang = arr.length;
let tong = 0
let min,max
max = arr[0]
min = arr [0]
for (let i = 0; i< doDaiMang;i++){
    tong = tong + arr[i];

    if ( arr[i] > max ){
        max = arr[i]
    }
    if ( arr [i] < min){
        min =arr[i]
    }
}
console.log("tong cac phan tu trong mang la: ",tong)
console.log("gia tri lon nhat la", max)
console.log("gia tri be nhat la",min)