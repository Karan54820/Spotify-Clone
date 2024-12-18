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
let artist_names = ["Yo Yo Honey Singh","Arjan Dhillon, Mxrci","Mithoon, Ankit Tiwari, Jeet Ganguli","Karan Aujla, Ikky","Pritam"]
let y = document.querySelector(".albs");
let s = ""
for(let i=0;i<5;i++){
    s+=`<div class="box"><div class="square"><img src="${albums[i]}" alt=""></div><p class="roboto-medium flex justify-content-center">${album_names[i]}</p><p class="roboto-medium flex justify-content-center" id="grey">${artist_names[i]}</p></div>`
}
y.innerHTML=s;

let z = document.querySelector(".radio");
let radio =["https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4YRxDV8wJFPHPTeXepOstw/en-GB","https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB","https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/70B80Lwx2sxti0M1Ng9e8K/en-GB","https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB","https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0oOet2f43PA68X5RxKobEy/en-GB"];
let radio_artists = []
let s1 = ""
for(let i=0;i<5;i++){
    s1+=`<div class="box"><div class="square"><img src="${radio[i]}" alt=""></div><p class="roboto-medium flex justify-content-center" id="grey">Artists</p></div>`
}
z.innerHTML=s1

let charts =["https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg","https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg","https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg","https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg","https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg"]
let p = document.querySelector('.charts');
let s2 =""
for(let i=0;i<5;i++){
    s2+=`<div class="box"><div class="square"><img src="${charts[i]}" alt=""></div><p class="roboto-medium flex justify-content-center" id="grey">Artist</p></div>`
}
p.innerHTML=s2

let playlist = ["https://i.scdn.co/image/ab67706f00000002f6ec90983e7e0893e8e88409","https://i.scdn.co/image/ab67706f000000026783780cb377fb861f86b170","https://i.scdn.co/image/ab67706f00000002e3c504c9d3a1f9faae8d9104","https://i.scdn.co/image/ab67706f00000002e302dd2ed9c6badc58b137d8","https://i.scdn.co/image/ab67706f00000002325a73f69fa4fef821080f25"]
let q = document.querySelector('.playlist');
let s3 = ""
for(let i=0;i<5;i++){
    s3+= `<div class="box"><div class="square"><img src="${playlist[i]}" alt=""></div><p class="roboto-medium flex justify-content-center" id="grey">Artist</p></div>`
}
q.innerHTML=s3


async function getsongs(){
    let a =  await fetch("http://127.0.0.1:3000/Spotify-Clone/songs/")
    let response = await a.text 
    console.log(response)

    // let data = response.json()
    // console.log(data)
}

