// * get language
const lang = navigator.language.split("-")[0];
// * language msg
fetch("data.json")
  .then((response) => response.json())
  .then(async (data) => {
    // * default title msg
    const defMsg = data[0].msg;
    const defTitle = data[0].title;
    // * title msg
    const msg = (await data.find((e) => e.lang === lang)?.msg) ?? defMsg;
    const title = (await data.find((e) => e.lang === lang)?.title) ?? defTitle;
    document.title = title;
    document.getElementById("title").innerText = title;
    document.getElementById("msg").innerText = msg;
  });
// * footer domain
const domain = window.location.hostname;
const domainOk = domain ? domain : "example.com";
const protocol = window.location.protocol;
const protocolOK = protocol ? protocol + "//" : "http://";
document.getElementById("link").innerText = domainOk;
document.getElementById("link").href = protocolOK + domainOk;

// * bg animation
const canvas = document.getElementById("beerCanvas");
const ctx = canvas.getContext("2d");
const particles = [];
const particleCount = 280;

for (let i = 0; i < particleCount; i++) {
  particles.push(new particle());
}

function particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 300;
  this.speed = 4 + Math.random();
  this.radius = Math.random() * 3;
  this.opacity = (Math.random() * 100) / 1000;
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "lighter";
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255," + p.opacity + ")";
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    ctx.fill();
    p.y -= p.speed;
    if (p.y <= -10) particles[i] = new particle();
  }
}
loop();

// * play bg sound
// const bgsound = new Audio('./webbgsound2ok.mp3');
// bgsound.currentTime = 0;
// bgsound.loop = true;
// bgsound.play();
