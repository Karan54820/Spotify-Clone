let x = document.querySelector(".images");
let image = ["https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca","https://i.scdn.co/image/ab67616100005174bd6fbc7d0973cc33940781ad","https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c","https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7","https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf","https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84"]
let names = ["Pritam","Sachin Jigar","AR Rehman","Arijit Singh","Vishal Shekhar","Atif Aslam"]
let w = ""
for(let i=0;i<5;i++){
    w+=`<div class="box"><div class="circle"><img src="${image[i]}" alt=""></div><p class="roboto-medium flex justify-content-center">${names[i]}</p><p class="roboto-medium flex justify-content-center" id="grey">Artist</p></div>`
}
x.innerHTML=w;

let albums = ["https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88","https://i.scdn.co/image/ab67616d00001e0209c9bf421422262c368009d6","https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3","https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36","https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4"]
let album_names = ["Glory","Patandar","Aashiqui 2","Making Memories","Yeh Jawaani hai Deewani"]
let y = document.querySelector(".albs");
let s = ""
for(let i=0;i<5;i++){
    s+=`<div class="box"><div class="square"><img src="${albums[i]}" alt=""></div><p class="roboto-medium flex justify-content-center">${album_names[i]}</p><p class="roboto-medium flex justify-content-center" id="grey">Artist</p></div>`
}
y.innerHTML=s;


