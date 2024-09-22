var bowlImage = document.querySelector("#bowl-image");
var crackImage = document.querySelector("#crack-image");
var crack1Image = document.querySelector("#crack1-image");
var quoteImage = document.querySelector("#quote-image");
var tutorImage = document.querySelector("#tutor-image");
var tutor1Image = document.querySelector("#tutor1-image");
var cancleImage = document.querySelector("#cancle-image");
var replayImage = document.querySelector("#replay-image");
bowlImage.addEventListener("click", function() {
    let check=crackImage.style.display;
    let check1=crack1Image.style.display;
    let check2=quoteImage.style.display;
    let check3=replayImage.style.display;
    if(check==="" && check1==="" && check2==="" && check3==="" || check==="none" && check1==="none" && check2==="none" && check3==="none"){
        crackImage.style.display="block";
    }
});
crackImage.addEventListener("click", function() {
    let check=crack1Image.style.display;
    let check1=quoteImage.style.display;
    let check2=replayImage.style.display;
    if(check==="" && check1==="" && check2==="" || check==="none" && check1==="none" && check2==="none"){
        crack1Image.style.display="block";
        crackImage.style.display="none";
    }
});
crack1Image.addEventListener("click", function() {
    let check=quoteImage.style.display;
    let check1=replayImage.style.display;
    if(check==="" && check1==="" || check==="none" && check1==="none"){
        quoteImage.style.display="block";
        replayImage.style.display="block";
        crack1Image.style.display="none";
        fetchRandomText();
    }
});
replayImage.addEventListener("click", function() {
    crackImage.style.display="none";
    crack1Image.style.display="none";
    quoteImage.style.display="none";
    replayImage.style.display="none";
    document.getElementById('quote-text').innerText = "";
});
tutorImage.addEventListener("click", function() {
    let check=tutor1Image.style.display;
    let check1=cancleImage.style.display;
    if(check==="" && check1===""){
        tutor1Image.style.display="block";
        cancleImage.style.display="block";
        tutorImage.style.display="none";
    }
});
cancleImage.addEventListener("click", function() {
    let check=tutorImage.style.display;
    if(check==="" || check==="none"){
        tutorImage.style.display="block";
        tutor1Image.style.display="";
        cancleImage.style.display="";
    }
});

const playButton = document.getElementById("playButton");
const myAudio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
    if (myAudio.paused) {
        myAudio.play();
        myAudio1.pause();
    }
});

playButton.addEventListener("dblclick", function() {
    if (!myAudio.paused) {
        myAudio.pause();
    }
});


const playButton1 = document.getElementById("playButton1");
const myAudio1 = document.getElementById("myAudio1");

playButton1.addEventListener("click", function() {
    if (myAudio1.paused) {
        myAudio1.play();
        myAudio.pause();
    }
});

playButton1.addEventListener("dblclick", function() {
    if (!myAudio1.paused) {
        myAudio1.pause();
    }
});




async function fetchRandomText() {
    try {
        // Đọc file JSON
        const response = await fetch('uploads/js/quote_data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        
        // Chuyển đổi dữ liệu thành JSON
        const data = await response.json();

        // Chọn ngẫu nhiên một đoạn văn bản
        const randomText = data[Math.floor(Math.random() * data.length)].text;

        // Hiển thị đoạn văn bản lên trang web
        // document.getElementById('randomText').innerText = randomText;
        document.getElementById('quote-text').innerText = randomText;
        
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
        document.getElementById('randomText').innerText = "Failed to fetch random text.";
    }
}
