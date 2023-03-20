window.onload = fortune;

function fortune(){
    let fortune = new Array("Do what you love.The rest will fall into place.", "Change comes with embracing the future, not fighting your past.","You will receive great news today.", "You already know the answer to the questions lingering inside your head.", "When fear hurts you, conquer and defeat it!");
    let images = new Array("fortunes/img1.png", "fortunes/img2.png", "fortunes/img3.png", "fortunes/img4.png", "fortunes/img5.png");

    let random = Math.floor(Math.random() * fortune.length);

    let content="";
    content += fortune[random]
    content += "<p><img width='200px' src=" + images[random] + "><p>";

    let p1 = document.getElementById("fortuneC");
    p1.innerHTML = content;
}
