const heroBg = document.getElementById('heroBg');
const thumbRail = document.getElementById('thumbRail');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');

// Keep your images (unchanged)
const slide = [
  { image: "../image/img24.png" },
  { image: "../image/img25.png" },
  { image: "../image/img26.png" },
  { image: "../image/img27.png" },
  { image: "../image/img28.png" },
  { image: "../image/img30.png" },
  { image: "../image/img31.png" },
  { image: "../image/img10.png" },
  { image: "../image/img11.png" },
  { image: "../image/img12.png" },
  { image: "../image/img13.png" },
  { image: "../image/img14.png" },
  { image: "../image/img15.png" },
  { image: "../image/img40.png" },
  { image: "../image/img41.png" },
  { image: "../image/img42.png" },
  { image: "../image/img43.png" },
  { image: "../image/img44.png" },
  { image: "../image/img45.png" },
  { image: "../image/img46.png" },
  { image: "../image/img47.png" },


];

let currentIndex = 0;

function paintHero() {
  heroBg.style.backgroundImage = `url('${slide[currentIndex].image}')`;
  // update active thumb
  document.querySelectorAll('.thumb').forEach((t, i) => {
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

heroPrev?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  paintHero();
});
heroNext?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slide.length;
  paintHero();
});

// Auto advance every 3s (same behavior)
setInterval(() => { currentIndex = (currentIndex + 1) % slide.length; paintHero(); }, 3000);




var leftarrow = document.getElementById('left-arrow');
var rightarrow = document.getElementById('right-arrow');

var data = [
  { p: "شكرا كثير على الكلام الجميل وشكرا الكوا على هذا ال event صراحة تعلمت منه كثير شغلات بالتوفيق للجميع يارب" },
  { p: "شكرا كثير الكم عشان خلونا نعرض مشاريعو ب وحد كل يوم رائع و كل جهدوكم معنا ان شاء الله نزل ع لينكدان" },
  { p: "الله يسعدكم و شكرا الكم كثير على التجربة الرائعة و الافتنت المميز و الله يعافيكي و ان شاء الله" },
  { p: "الله يسعدكم و انتو ما قصرتو و الله" },
  { p: "يسعدكم يارب و بشكركم على هاي الفرصة الجميلة و التنظيم الرائع أكيد مش رح أنسى اشارك بهذه التجربة ان شاء الله" },
  { p: "يسعدكم يارب و بشكركم على هاي الفرصة الجميلة و التنظيم الرائع أكيد مش رح أنسى اشارك بهذه التجربة ان شاء الله" },
  { p: "شكرًا جزيلاً مس انسام كل هذا الانجاز لولا وجودكم و دعمكم المستمر، يعطيكم العافية و يبارك فرداً فرداً ❤️" },


  { p: "كل شي صار بفضلكم الله يعافيكم وافتنت جميل جدا❤️" },
  { p: "شكرااااا جد كنتو احسن مدربين ومس مسات يعطيكم الف عافيه❤️" },
  { p: "يعطيكم الف عافيه يارب 🥺، كان يوم جد بجنن، وشكراً كثير الكم مس جد ما قصرتو معنا من بداية الكورس ❤️❤️❤️🌸" },
  { p: "الله يعافيكم شكراً الكم على الفرصة. وسعيدة اني كنت مشاركة بهذا اليوم" },
  { p: "الله يسعدك يا رب مس و شكراً الكم و يعطيكم العافية عاليوم الحلو هاد و يلي رح يضل للذكرى ❤️" }


];


const cards = document.querySelectorAll('#review-card .feedback-card');
let counter = 3;

leftarrow.addEventListener('click', function () {
  if (counter - 3 <= 0) {
    counter = data.length + 3
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
    counter = 0
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