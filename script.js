// ==================== CONFIGURATION ====================
const CORRECT_PASSWORD = "حبي العسول";
const RELATIONSHIP_START_DATE = new Date('2024-12-03T00:00:00');

// Romantic Messages Array
const LOVE_MESSAGES = [
     "ادعي يا ملك ربنا يخلينا لبعض العمر كله ♥️",
     "بوسة عشان بحبك 😂♥️",
     "ربنا يخليكي ليا سند وظهر وحبيبة ♥️",
     "ربنا يكتبلك نصيب حلو في كل حاجة بتحبيها.",
     "يا رب ضحكتك متفارقش وشك أبدًا.",
     "ربنا يخليكي ليا وميحرمنيش منك أبدًا.",
     "يا بختي بيكِ والله ♥️",
     "قمر بعيون لميع ي قلبي 😂❤️",
     "ضحكتك دي هي اللي مهونة عليا الدنيا",
     "يا شاغلة بالي ليل ونهار بحبك كتيير ♥️",
     "الحب الي مش عايز يسمع الكلام وياكل كويس كلي كويس عشان اقولك حجه بطه 😂",
     "ربنا يكرمنا ويجمعنا في الحلال يا روحي ♥️",
     "ادعيلي كتير ي حبي 😂♥️ ",
     "اشطر كتكوتة يجدعان لو بتتمرقعي وسايبه المزاكره هنفخك 😂",
     "هلا حبي ممكن بوسه وحضن 😂 ♥️",
    "بيقولو الحنينه احسن من الحلوه بس انتي الاتنين ي قلبي ❤️ ",
    "صحيت النهارده لقيت الدنيا حلوة عارفه ليه؟ حلمت ب ملوكه اكيد♥️",
    "بحبك ي عيوني",
    "وحشتيني اوي ",
    "إنت أجمل حاجة حصلتلي 💕",
    "إنت دنيتي كلها 🌍",
    "مفيش زيك والله 😂❤️",
    "بحبك يا نور عيني 👀❤️",
    "صباح الخير يا حبي بحبك يا قلبي",
    "يارب يومك يكون جميل وشبه ضحكتك",
    "صباح الجمال على أجمل عيون شفتها.",
    "يا بختي بيكي والله",
    "إنتي أجمل حاجة حصلتلي في عمري",
    "يا رب أحلم بيكي النهاردة",
    "نمت وأنا بفكر فيكي، وهصحى وأنا بحبك",
    "شكراً إنك موجودة وشكراً إنك بتستحمليني",
    "صباح الهنا على  حبي انا",
    "حبيبتي الجميلة، صباحك نعيم ورضا.",
    "شايلك لهفة في قلبي مش طبيعية، هتشوفيها يوم ما نتقابل",
    "نفسي ف بوسه 😂❤️",
    "طب حضن طيب ي حب 👀",
    "بموت فيكي ي روحي ❤️",
    "بحبك ي ملوكه ❤️",
    "بموت في عنيكي",
    "بحبك يا ملك قد الدنيا وما فيها 💕",
    "يا ملك انتي قلبي وروحي وكل حاجه حلوة في حياتي",
    "صباح الفل على أحلى ملك في الدنيا 🌷",
    "بحبك يا ملك ❤️",
    "يا روحي أنتي ❤️",
    "حب حياتي كله ❤️",
    "ي أغلى من روحي",
    "بحبك قد الدنيا",
    "ملك أحلى بنت",
    "يا حياة قلبي",
    "ام عمير القمر ي ناس",
    "الدلوعه حقي",
    "يارب نتجوز",
];

// Image paths (26 screenshots)
const IMAGE_PATHS = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg',
    'images/15.jpg',
    'images/16.jpg',
    'images/17.jpg',
    'images/18.jpg',
    'images/19.jpg',
    'images/20.jpg',
    'images/21.jpg',
    'images/22.jpg',
    'images/23.jpg',
    'images/24.jpg',
    'images/25.jpg',
    'images/26.jpg'
];

// ==================== FLOATING HEARTS ====================
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 3000);
}

// ==================== PASSWORD GATE ====================
function initPasswordGate() {
    const overlay = document.getElementById('passwordOverlay');
    const container = document.getElementById('passwordContainer');
    const input = document.getElementById('passwordInput');
    const btn = document.getElementById('passwordBtn');

    // Check if already logged in
    if (localStorage.getItem('authenticated') === 'true') {
        overlay.classList.add('hidden');
        return;
    }

    function checkPassword() {
        const enteredPassword = input.value.trim();
        
        if (enteredPassword === CORRECT_PASSWORD) {
            // Correct password
            localStorage.setItem('authenticated', 'true');
            
            // Confetti explosion
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#d4af37', '#f4e4c1', '#ff69b4', '#ff1493']
            });
            
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0 }
                });
                confetti({
                    particleCount: 150,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1 }
                });
            }, 250);
            
            // Fade out overlay
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 1000);
            
        } else {
            // Wrong password
            container.classList.add('shake', 'error');
            input.value = '';
            
            setTimeout(() => {
                container.classList.remove('shake', 'error');
            }, 500);
        }
    }

    btn.addEventListener('click', checkPassword);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
}

// ==================== RELATIONSHIP COUNTER ====================
function updateCounter() {
    const now = new Date();
    const diff = now - RELATIONSHIP_START_DATE;
    
    // Calculate time units
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    // Calculate years and months
    let years = now.getFullYear() - RELATIONSHIP_START_DATE.getFullYear();
    let months = now.getMonth() - RELATIONSHIP_START_DATE.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate remaining days after years and months
    const tempDate = new Date(RELATIONSHIP_START_DATE);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);
    const remainingDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));
    
    // Update DOM
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = remainingDays;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

// ==================== SWIPER INITIALIZATION ====================
function initSwiper() {
    const swiperWrapper = document.getElementById('swiperWrapper');
    
    // Load images into swiper
    IMAGE_PATHS.forEach((imagePath, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="image-container">
                <img src="${imagePath}" alt="ذكرى ${index + 1}" loading="lazy">
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
    
    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
        effect: 'slide',
        speed: 600,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: {
            forceToAxis: true,
        },
    });
}

// ==================== LOVE MESSAGE BUTTON ====================
function initLoveMessages() {
    const button = document.getElementById('loveButton');
    const messageContainer = document.getElementById('loveMessage');
    const messageText = document.getElementById('messageText');
    
    let messageIndex = 0;
    let messagesShown = [];
    
    button.addEventListener('click', () => {
        // Check if all messages have been shown
        if (messagesShown.length === LOVE_MESSAGES.length - 1) {
            // Show final message
            messageText.textContent = LOVE_MESSAGES[LOVE_MESSAGES.length - 1];
            messageContainer.classList.add('show');
            
            // Reset for next cycle
            messagesShown = [];
            return;
        }
        
        // Get random message that hasn't been shown
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * (LOVE_MESSAGES.length - 1));
        } while (messagesShown.includes(randomIndex));
        
        messagesShown.push(randomIndex);
        
        // Hide current message
        messageContainer.classList.remove('show');
        
        // Show new message after animation
        setTimeout(() => {
            messageText.textContent = LOVE_MESSAGES[randomIndex];
            messageContainer.classList.add('show');
        }, 300);
    });
}

// ==================== VIDEO PLAYER ====================
function initVideoPlayer() {
    const overlay = document.getElementById('videoOverlay');
    const video  = document.getElementById('loveVideo');

    if (!overlay || !video) return;

    // Click on overlay → play & hide it
    overlay.addEventListener('click', () => {
        video.play();
        overlay.classList.add('hidden');
    });

    // If user uses native controls to play, hide overlay
    video.addEventListener('play', () => {
        overlay.classList.add('hidden');
    });

    // If video is paused, show overlay again
    video.addEventListener('pause', () => {
        overlay.classList.remove('hidden');
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    initPasswordGate();
    initSwiper();
    initLoveMessages();
    initVideoPlayer();
    
    // Start counter
    updateCounter();
    setInterval(updateCounter, 1000);
});
