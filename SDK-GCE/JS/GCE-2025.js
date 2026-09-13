const heroBg    = document.getElementById('heroBg');
const thumbRail = document.getElementById('thumbRail');
const heroPrev  = document.getElementById('heroPrev');
const heroNext  = document.getElementById('heroNext');

// Keep your images (unchanged)

const slide = [
  { image: "../image/gce2025/56.png" }, 
  { image: "../image/gce2025/58.png" },
  { image: "../image/gce2025/52.png" }, 
  { image: "../image/gce2025/50.png" },  
  { image: "../image/gce2025/55.png" }, 
  { image: "../image/gce2025/57.png" }, 
  { image: "../image/gce2025/60.png" },
 { image: "../image/gce2025/61.png" },
  { image: "../image/gce2025/18.png" },
  { image: "../image/gce2025/21.png" },
  { image: "../image/gce2025/54.png" },
  { image: "../image/gce2025/62.png" },
  { image: "../image/gce2025/63.png" },
    { image: "../image/gce2025/71.png" },
  { image: "../image/gce2025/students/7.png" },
 { image: "../image/gce2025/students/8.png" },
  { image: "../image/gce2025/students/9.png" },
  { image: "../image/gce2025/students/10.png" },
  { image: "../image/gce2025/students/11.png" },
  { image: "../image/gce2025/students/12.png" },
  { image: "../image/gce2025/students/13.png" },
  { image: "../image/gce2025/students/14.png" },
  { image: "../image/gce2025/students/15.png" },
  { image: "../image/gce2025/students/16.png" },
  { image: "../image/gce2025/students/19.png" },
  { image: "../image/gce2025/students/20.png" },
  { image: "../image/gce2025/students/22.png" },
  { image: "../image/gce2025/students/23.png" },
  { image: "../image/gce2025/students/24.png" },
  { image: "../image/gce2025/students/25.png" },
  { image: "../image/gce2025/students/26.png" },
  { image: "../image/gce2025/students/27.png" },
  { image: "../image/gce2025/students/28.png" },
  { image: "../image/gce2025/students/29.png" },
  { image: "../image/gce2025/students/30.png" },
  { image: "../image/gce2025/students/31.png" },
  { image: "../image/gce2025/students/32.png" },
  { image: "../image/gce2025/students/33.png" },
  { image: "../image/gce2025/students/34.png" },
  { image: "../image/gce2025/students/35.png" },
  { image: "../image/gce2025/students/36.png" },
  { image: "../image/gce2025/students/53.png" },
  { image: "../image/gce2025/students/134.png" },


];

let currentIndex = 0;

function paintHero() {
  heroBg.style.backgroundImage = `url('${slide[currentIndex].image}')`;
  // update active thumb
  document.querySelectorAll('.thumb').forEach((t,i)=>{
    t.classList.toggle('active', i === currentIndex);
  });
}

function buildThumbs() {
  thumbRail.innerHTML = '';
  slide.forEach((s, i) => {
    const t = document.createElement('div');
    t.className = 'thumb';
    t.style.backgroundImage = `url('${s.image}')`;
    t.addEventListener('click', () => { currentIndex = i; paintHero(); });
    thumbRail.appendChild(t);
  });
}

buildThumbs();
paintHero();

heroPrev?.addEventListener('click', ()=>{
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  paintHero();
});
heroNext?.addEventListener('click', ()=>{
  currentIndex = (currentIndex + 1) % slide.length;
  paintHero();
});

// Auto advance every 3s (same behavior)
setInterval(()=>{ currentIndex = (currentIndex + 1) % slide.length; paintHero(); }, 3000);




var leftarrow  = document.getElementById('left-arrow');   
var rightarrow = document.getElementById('right-arrow');  

var data = [
  { p: "من أجمل التجارب 🩵🥹 يعطيكم العافية 👏🏻" },
  { p:"ما شاء الله 🔥ابداع و تألق 🌟 و فخورة اني كنت جزء من هاليوم🤍"},
  { p:"من أجمل الايام و التجارب 🔥🫶🏻"},
  { p:" I was honoured to be part of this event ❤️ such a great team and huge works 🦾"},
  { p:"من أجمل الايام و أحلى التجارب , شكرا SDK ❤️"},
  { p:"GCE 25 يوم ولا أروع 🔥🔥🔥🔥❤️ "},
  { p:"يوم أكثر من رائع الصراحة 👏👏👏"},
  { p:"من أجمل التجارب و يوم للذكرى 🩵🤍"},
  { p:"GCE2025 للتاريخ ❤️🔥"},
  { p:"GCE النار 🔥🔥, SDK التوب ❤️"},
  { p:"SDK 🔥🔥"},
  { p:"من أجمل التجارب❤️❤️"},
  { p:"كثير مبدعين و فخور اني كنت طالب بشركة SDK لاني دائما بشهد لنجاح الشركة و طلابهم لانهم كنت قصة نجاح مع شركة SDK على كل ما تقدموه و اشهد لكم على كل قطرة تعب بذلتوها لانكم شركة دائما همها نجاح الطالب 🤍"},
  { p:"يعطيكم العافية SDK تجربة جميلة ❤️😍"},
  { p:"و عليكم السلام و رحمة الله و بركاته الله يسعك مس انسام الشكر الكم انتو على هالفرصة سعدت بالتعاون معكم و أنا جاهز دايما لأي اشي بتحتاجوه باذن الله"},
  { p:"و عليكم السلام و رحمة الله و بركاته والله عنجد كان يوم من احلى الايام و شكرا كتير كتير لجهودكم معنا 🤍🤍"},
];


const cards = document.querySelectorAll('#review-card .feedback-card');
let counter = 3; 

leftarrow.addEventListener('click', function () {
  if (counter - 3 <= 0) {
    counter=data.length+3
    return;
  }
  counter -= 3;
  for (let i = 0; i < 3; i++) {
    const p = cards[i].querySelector('.part2-card p');
    p.textContent = data[counter - 3 + i].p;
  }
});

rightarrow.addEventListener('click', function () {
  if (counter + 3 > data.length) {
    counter=0
    return;
  }
  for (let i = 0; i < 3; i++) {
    const p = cards[i].querySelector('.part2-card p');
    p.textContent = data[counter + i].p;
  }
  counter += 3;
});

setInterval(function () {
  currentIndex = (currentIndex + 1) % slide.length; 
  updateImage();
}, 3000);