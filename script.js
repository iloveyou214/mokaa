// ==================== CONFIGURATION ====================
const CORRECT_PASSWORD = "حبي العسول";
const RELATIONSHIP_START_DATE = new Date('2024-12-03T00:00:00');

// Romantic Messages Array
const LOVE_MESSAGES = [
    "انا مش عارف ازاي كنت عايش قبل ما احبك واعرف انك بتحبيني بس اكيد كنت عايش غلط 😂❤️",
    "نفسي كل يوم اصحى الاقيكي جمبي كده 😂❤️",
    " عارفه لو كان الحب مادة كنت طلعت اول الدفعه عشانك ومفيش اول مكرر هوا انا بس ومفيش دفعه كمان اي رايك بقا انا وانتي بس 😂♥️",
    "انا مش عايز من الدنيا غيرك ي ملوكه والله ♥️",
    "نفسي تكوني قدامي 24 ساعه عشان اطمن عليكي ي قلبي♥️",
    "ربنا يديمك نعمة في حياتي ي قلبي ♥️",
    "بوسة كبيرة ف الفراولة  عشان أنتي أغلى حاجة في حياتي 😂❤️",
    "انا عارف ان الادمان وحش بس اعمل اي بقا مقدرتش اقاوم حلاوة عيونك ي ملوكي 😂❤️",
    "انا مكنتش بعرف اقول كلام حلو بس انتي اللي لازم يتقالك كلام حلو شبهك ولو ان مفيش احلي منك 😂❤️",
    "انا لو ضيعتك ابقى اهبل رسمي 😂♥️عمرك ما هتضيعي مني وهتبقي نصيبي باذن الله ي ملك ثقي فيا وانا وانتي اد الوعد والله ومش هخذلك ولا هتخذليني بحبك ي روحي ❤️❤️",
    "ربنا يخليكي ليا ومحرمنيش منك ابدا ي قلبي♥️",
    "بحبك قد البحر وسمكاته 😂❤️بس لا البحر صغير نخليها المحيط ؟ انا بقول نلغي المساحه عشان حبي ليكي ملوش حدود 😂❤️",
    "يا رب يخليكي ليا وما يفرقنا أبداً يا ملوكة",
    "أوعدك إني هحافظ عليكي ومش هسمح لأي حاجة تكسر خاطرك او تزعلك ❤️🫂",
    "يارب يومك يكون جميل وقمور زيك ي حبيبتي",
    "فاكرة لما كنا صغيرين؟ كنت بسرح في عيونك وأنسى الدنيا ومركزش مع ابوكي خالص ومكنتش أعرف إنك هتكوني شريكة عمري وتطلعي بتحبيني ي روح قلبي ❤️❤️",
    "يااه يا ملك لو تعرفي كنت بسرح فيكي قد إيه زمان عيونك دي كانت فيها سحر بحب اشوفك واشوف خدودك😂❤️",
    "نفسي أفضل باصص في عيونك العمر كله ومغمضش عيني لحظة ❤️",
    "يا رب اليوم اللي نلبس فيه الدبل ونكون في بيت واحد يجي بسرعة يا حبي❤️🫂💍",
    "ان شاء الله هكون ليكي أحلى حبيب وزوج وابو عيالك وهعوضك عن كل ثانية استنيناها عشان نكون سوا وصبرك عليا لحد ما تبقي مراتي حبيبتي ❤️🫂",
    "مش عايز من الدنيا غير إنك تكوني حلالي وقدام عيني طول العمر❤️🫂",
    "عايزك دايما الأولى زي ما أنتي الأولى في قلبي وفي حياتي😂❤️",
    "كلي كتير يا قلبي مش عايزك تخسي ووشك يصفر ودوخه تاني اهتمي بنفسك وخدي بالك مني بالمره 😂❤️",
    "كلي حلو عشان يبقى فيكي حيل للمذاكرة وللدلع كمان 😂❤️",
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
    const video   = document.getElementById('loveVideo');
    const playBtn = overlay ? overlay.querySelector('.play-btn') : null;

    if (!overlay || !video) return;

    /* ---- helper: show loading spinner inside play-btn ---- */
    function setLoading(on) {
        if (!playBtn) return;
        if (on) {
            playBtn.innerHTML = `<svg viewBox="0 0 50 50" width="36" height="36"
                style="animation:spin 1s linear infinite;">
                <circle cx="25" cy="25" r="20" fill="none"
                    stroke="#1a0a0f" stroke-width="5"
                    stroke-dasharray="80 20"/>
            </svg>
            <style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
        } else {
            playBtn.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                style="width:32px;height:32px;fill:#1a0a0f;margin-right:-4px;">
                <path d="M8 5v14l11-7z"/>
            </svg>`;
        }
    }

    /* ---- helper: attempt to play with proper promise handling ---- */
    function tryPlay() {
        setLoading(true);
        overlay.style.pointerEvents = 'none'; // prevent double-click

        const promise = video.play();
        if (promise !== undefined) {
            promise
                .then(() => {
                    // Playback started successfully
                    overlay.classList.add('hidden');
                    setLoading(false);
                })
                .catch((err) => {
                    console.warn('Video play failed:', err);
                    setLoading(false);
                    overlay.style.pointerEvents = 'auto';
                    // Try muted first (browser policy), then unmute
                    if (!video.muted) {
                        video.muted = true;
                        video.play().then(() => {
                            video.muted = false;
                            overlay.classList.add('hidden');
                        }).catch(() => {
                            overlay.style.pointerEvents = 'auto';
                        });
                    }
                });
        } else {
            // Older browser — no promise
            overlay.classList.add('hidden');
            setLoading(false);
        }
    }

    // Click on overlay → play
    overlay.addEventListener('click', tryPlay);

    // Native controls: if play starts, hide overlay
    video.addEventListener('play', () => {
        overlay.classList.add('hidden');
        overlay.style.pointerEvents = 'auto';
        setLoading(false);
    });

    // Show buffering indicator while waiting
    video.addEventListener('waiting', () => {
        setLoading(true);
    });

    video.addEventListener('canplay', () => {
        setLoading(false);
    });

    // On pause → show overlay again (but only when video not ended)
    video.addEventListener('pause', () => {
        if (!video.ended) {
            overlay.classList.remove('hidden');
            overlay.style.pointerEvents = 'auto';
        }
    });

    video.addEventListener('ended', () => {
        overlay.classList.add('hidden');
    });

    // Error handling
    video.addEventListener('error', () => {
        if (playBtn) {
            playBtn.innerHTML = `<span style="font-size:13px;color:#1a0a0f;font-family:'Cairo',sans-serif;text-align:center;padding:5px;">⚠️<br>تعذّر تحميل<br>الفيديو</span>`;
        }
        overlay.style.pointerEvents = 'none';
    });
}

// ==================== VOICE RECORDER ====================
function initVoiceRecorder() {
    const startRecordBtn = document.getElementById('startRecordBtn');
    const stopRecordBtn = document.getElementById('stopRecordBtn');
    const sendRecordBtn = document.getElementById('sendRecordBtn');
    const recorderStatus = document.getElementById('recorderStatus');
    const timeDisplay = document.getElementById('timeDisplay');
    const recordingsList = document.getElementById('recordingsList');
    
    // Cloudinary Config
    // ⚠️ أضف اسم السحابة والـ Upload Preset هنا ⚠️
    const CLOUD_NAME = "draqszzrb";
    const UPLOAD_PRESET = "draqszzrb";
    
    // تأكد من استخدام /video/upload حتى يدعم كلاوديناري ملفات الصوت
    const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;

    let mediaRecorder;
    let audioChunks = [];
    let startTime;
    let timerInterval;
    let recordedBlob = null;

    if (!startRecordBtn) return;

    // Load saved recordings
    loadRecordings();

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateTimer() {
        const now = Date.now();
        const diff = Math.floor((now - startTime) / 1000);
        timeDisplay.textContent = formatTime(diff);
    }

    startRecordBtn.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                }
            };
            
            mediaRecorder.onstop = () => {
                const options = { type: 'audio/webm' };
                recordedBlob = new Blob(audioChunks, options);
                audioChunks = [];
                
                // Show send button
                sendRecordBtn.classList.remove('hidden');
                recorderStatus.textContent = "تم التسجيل، جاهز للإرسال";
                recorderStatus.classList.remove('recording');
                
                // Stop microphone access
                stream.getTracks().forEach(track => track.stop());
            };
            
            audioChunks = [];
            mediaRecorder.start();
            
            // UI Updates
            startRecordBtn.classList.add('hidden');
            stopRecordBtn.classList.remove('hidden');
            sendRecordBtn.classList.add('hidden');
            
            recorderStatus.textContent = "جاري التسجيل...";
            recorderStatus.classList.add('recording');
            
            startTime = Date.now();
            updateTimer();
            timerInterval = setInterval(updateTimer, 1000);
            
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("يرجى السماح بالوصول إلى الميكروفون للتسجيل.");
        }
    });

    stopRecordBtn.addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            clearInterval(timerInterval);
            
            stopRecordBtn.classList.add('hidden');
            startRecordBtn.classList.remove('hidden');
        }
    });

    sendRecordBtn.addEventListener('click', async () => {
        if (!recordedBlob) return;
        
        sendRecordBtn.classList.add('loading');
        sendRecordBtn.textContent = "⏳";
        sendRecordBtn.style.animation = "spin 2s linear infinite";
        recorderStatus.textContent = "جاري الرفع...";
        
        try {
            const formData = new FormData();
            formData.append('file', recordedBlob);
            formData.append('upload_preset', UPLOAD_PRESET);
            formData.append('resource_type', 'video'); // Cloudinary treats audio as video resource type
            
            // Upload to Cloudinary Unsigned
            const response = await fetch(CLOUDINARY_URL, {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.secure_url) {
                // Save URL securely and show on the page
                saveRecording(data.secure_url);
                showSoftHeartsAnimation();
                
                // === Send to Google Apps Script ===
                try {
                    const scriptUrl = "https://script.google.com/macros/s/AKfycbwsAb2yo75H8tBgc4MO14wY0eMfuxt6TsQ3BjolpnXYf20FWJtegHbBeMu_SkPLAIYV/exec";
                    await fetch(scriptUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ url: data.secure_url })
                    });
                    console.log("Successfully sent URL to Google Apps Script");
                } catch (googleErr) {
                    console.error("Failed to send URL to Google Apps Script:", googleErr);
                }
                
                // Reset UI
                sendRecordBtn.classList.add('hidden');
                sendRecordBtn.classList.remove('loading');
                sendRecordBtn.style.animation = "";
                sendRecordBtn.textContent = "📤";
                recorderStatus.textContent = "تم الحفظ بنجاح! 💖";
                timeDisplay.textContent = "00:00";
                recordedBlob = null;
                
                setTimeout(() => {
                    recorderStatus.textContent = "جاهز للتسجيل";
                }, 3000);
            } else {
                throw new Error("لم يتم إرجاع رابط من السحابة");
            }
            
        } catch (error) {
            console.error("Upload failed:", error);
            recorderStatus.textContent = "فشل الرفع، يرجى المحاولة مرة أخرى.";
            sendRecordBtn.classList.remove('loading');
            sendRecordBtn.style.animation = "";
            sendRecordBtn.textContent = "📤";
        }
    });

    function saveRecording(url) {
        const recordings = JSON.parse(localStorage.getItem('romanticRecordings') || '[]');
        const newRecord = {
            url: url,
            date: new Date().toISOString()
        };
        recordings.push(newRecord);
        localStorage.setItem('romanticRecordings', JSON.stringify(recordings));
        
        addRecordingToDOM(newRecord);
    }

    function loadRecordings() {
        const recordings = JSON.parse(localStorage.getItem('romanticRecordings') || '[]');
        recordings.forEach(rec => addRecordingToDOM(rec));
    }

    function addRecordingToDOM(recording) {
        const dateObj = new Date(recording.date);
        const dateStr = dateObj.toLocaleDateString('ar-EG', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        
        const audioItem = document.createElement('div');
        audioItem.className = 'audio-item';
        
        audioItem.innerHTML = `
            <div class="audio-date">${dateStr}</div>
            <audio controls src="${recording.url}"></audio>
        `;
        
        // Prepend to show newest first
        recordingsList.insertBefore(audioItem, recordingsList.firstChild);
    }

    function showSoftHeartsAnimation() {
        const container = document.getElementById('floatingHearts');
        if (!container) return;
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = '💖';
                heart.style.left = (40 + Math.random() * 20) + '%';
                heart.style.bottom = '20%';
                heart.style.animationDuration = (3 + Math.random() * 3) + 's';
                heart.style.transform = `scale(${0.8 + Math.random()})`;
                
                // Since our hearts use float-up animation naturally, we just append them.
                container.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 200);
        }
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    initPasswordGate();
    initSwiper();
    initLoveMessages();
    initVideoPlayer();
    initVoiceRecorder();
    
    // Start counter
    updateCounter();
    setInterval(updateCounter, 1000);
});
