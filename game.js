const DOM = {
    halk: document.getElementById('bar-halk'),
    asker: document.getElementById('bar-asker'),
    gelir: document.getElementById('bar-gelir'),
    din: document.getElementById('bar-din'),
    valHalk: document.getElementById('val-halk'),
    valAsker: document.getElementById('val-asker'),
    valGelir: document.getElementById('val-gelir'),
    valDin: document.getElementById('val-din'),
    day: document.getElementById('day-val'),
    scene: document.getElementById('scene-container'),
    dialogPanel: document.getElementById('dialog-panel'),
    dialogTitle: document.getElementById('dialog-title'),
    dialogText: document.getElementById('dialog-text'),
    optionsContainer: document.getElementById('options-container'),
    notification: document.getElementById('notification'),
    gameOver: document.getElementById('game-over'),
    darkOverlay: document.getElementById('dark-overlay'),
    hotspots: {
        vezir: document.getElementById('hotspot-vezir'),
        serdar: document.getElementById('hotspot-serdar'),
        hazine: document.getElementById('hotspot-hazine')
    }
};

const envoyTitles = {
    vezir: "Vezir-i Azam",
    serdar: "Serdar-ı Ekrem",
    hazine: "Hazine Nazırı"
};

let eventDatabase = [];
let availableEvents = [];
let stats = { halk: 50, asker: 50, gelir: 50, din: 50 };
let day = 1;
let activeEnvoysToday = ['vezir', 'serdar', 'hazine'];
let currentEnvoyType = null;



function updateBars() {
    ['halk', 'asker', 'gelir', 'din'].forEach(key => {
        stats[key] = Math.max(0, Math.min(100, stats[key]));
        DOM[key].style.width = `${stats[key]}%`;
        DOM[key].style.transform = 'none'; // reset just in case
        
        if (stats[key] > 70) DOM[key].style.backgroundColor = 'var(--green)';
        else if (stats[key] < 30) DOM[key].style.backgroundColor = 'var(--crimson)';
        else {
            if(key === 'gelir') DOM[key].style.backgroundColor = 'var(--gold)';
            else if(key === 'halk') DOM[key].style.backgroundColor = 'var(--green)';
            else if(key === 'asker') DOM[key].style.backgroundColor = 'var(--crimson)';
            else DOM[key].style.backgroundColor = '#6B4A9E';
        }
        
        DOM['val' + key.charAt(0).toUpperCase() + key.slice(1)].innerText = stats[key];
    });
}



const envoyOrigins = {
    vezir: { x: 35, y: 40 },
    serdar: { x: 50, y: 40 },
    hazine: { x: 65, y: 40 }
};

function getResponsiveZoomScale() {
    const ratio = window.innerWidth / window.innerHeight;
    return ratio > 1.3 ? 2.5 : 3.0;
}

function applyZoom(type) {
    if (!type) return;
    const origin = envoyOrigins[type];
    const scale = getResponsiveZoomScale();
    const tx = 50 - origin.x;
    const ty = 50 - origin.y;
    
    DOM.scene.querySelector('#scene-image').style.transformOrigin = '50% 50%';
    DOM.scene.querySelector('#scene-image').style.transform = `scale(${scale}) translate(${tx}%, ${ty}%)`;
}

let isProcessing = false;

function openEnvoyPanel(type) {
    if (isProcessing || !activeEnvoysToday.includes(type)) return;
    currentEnvoyType = type;
    
    applyZoom(type);
    
    DOM.darkOverlay.classList.add('active');
    DOM.dialogPanel.classList.add('active');
    
    populateDialog(type);
    updateNavArrows();
}

function closePanel() {
    currentEnvoyType = null;
    DOM.scene.querySelector('#scene-image').style.transform = 'scale(1) translate(0, 0)';
    DOM.darkOverlay.classList.remove('active');
    DOM.dialogPanel.classList.remove('active');
}

function navigateEnvoy(direction) {
    if (isProcessing || !currentEnvoyType) return;
    let idx = activeEnvoysToday.indexOf(currentEnvoyType);
    if (idx === -1) return;
    
    if (direction === -1) {
        idx = (idx - 1 + activeEnvoysToday.length) % activeEnvoysToday.length;
    } else {
        idx = (idx + 1) % activeEnvoysToday.length;
    }
    currentEnvoyType = activeEnvoysToday[idx];
    applyZoom(currentEnvoyType);
    populateDialog(currentEnvoyType);
}

function updateNavArrows() {
    const navLeft = document.getElementById('nav-left');
    const navRight = document.getElementById('nav-right');
    if (activeEnvoysToday.length > 1) {
        navLeft.style.visibility = 'visible';
        navRight.style.visibility = 'visible';
    } else {
        navLeft.style.visibility = 'hidden';
        navRight.style.visibility = 'hidden';
    }
}

function populateDialog(type) {
    let pool = availableEvents.filter(e => e.elci === type);
    if (pool.length === 0) {
        const dbPool = JSON.parse(JSON.stringify(eventDatabase.filter(e => e.elci === type)));
        availableEvents = availableEvents.concat(dbPool);
        pool = availableEvents.filter(e => e.elci === type);
    }
    
    const eventIndex = Math.floor(Math.random() * pool.length);
    const event = pool[eventIndex];

    DOM.dialogTitle.innerText = event.baslik || envoyTitles[type];
    DOM.dialogText.innerText = event.metin;
    DOM.optionsContainer.innerHTML = '';
    
    event.secenekler.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        let effectsHtml = '';
        const names = {halk: 'Halk', asker: 'Asker', gelir: 'Gelir', din: 'Din'};
        const icons = { halk: '🌾', asker: '⚔️', gelir: '🪙', din: '🌙' };
        for (let k in opt.etkiler) {
            if (opt.etkiler[k] > 0) {
                effectsHtml += `<span style="color:#4A8C3A; margin-right:8px;">${icons[k]} ${names[k]} ▲</span>`;
            } else if (opt.etkiler[k] < 0) {
                effectsHtml += `<span style="color:#c93b3b; margin-right:8px;">${icons[k]} ${names[k]} ▼</span>`;
            }
        }
        
        btn.innerHTML = `<span>${opt.metin}</span><div style="font-size:0.9em; margin-top:3px; display:flex; gap:5px;">${effectsHtml}</div>`;
        btn.onclick = () => handleDecision(event, opt);
        DOM.optionsContainer.appendChild(btn);
    });
}

function handleDecision(eventData, option) {
    isProcessing = true;
    
    // Remove event from pool
    const globalIndex = availableEvents.findIndex(e => e.id === eventData.id || e.metin === eventData.metin);
    if (globalIndex > -1) availableEvents.splice(globalIndex, 1);

    const actedEnvoy = currentEnvoyType;
    closePanel();
    
    // Remove envoy and make them walk out
    activeEnvoysToday = activeEnvoysToday.filter(e => e !== actedEnvoy);
    const hotspot = document.getElementById(`hotspot-${actedEnvoy}`);
    hotspot.classList.add('at-door'); // Triggers walk out animation
    
    // Process stat changes
    if (option.etkiler) {
        for (let stat in option.etkiler) {
            stats[stat] += option.etkiler[stat];
            if (stats[stat] > 100) stats[stat] = 100;
            if (stats[stat] < 0) stats[stat] = 0;
        }
    }
    updateBars();
    saveProgress();

    // Show result
    DOM.notification.innerText = option.sonuc_metni || option.sonuc;
    DOM.notification.classList.add('active');

    if (checkGameOver()) {
        DOM.notification.classList.remove('active');
        isProcessing = false;
        return;
    }

    // Wait for result notification to complete
    setTimeout(() => {
        DOM.notification.classList.remove('active');
        
        if (activeEnvoysToday.length === 0) {
            // Day ended
            setTimeout(() => {
                const fadeOverlay = document.getElementById('fade-overlay');
                const fadeText = document.getElementById('fade-day-text');
                day++;
                fadeText.innerText = `Gün ${day}`;
                fadeOverlay.classList.add('active'); // Fade to black
                
                setTimeout(() => {
                    DOM.day.innerText = day;
                    activeEnvoysToday = ['vezir', 'serdar', 'hazine'];
                    
                    saveProgress(); // Save at the start of the new day
                    
                    // Reset envoys to door instantly while screen is black
                    const allHotspots = document.querySelectorAll('.envoy-hotspot');
                    allHotspots.forEach(h => {
                        h.style.transition = 'none'; // Disable transition to teleport
                        h.classList.add('at-door');
                    });
                    
                    // Force reflow
                    void document.body.offsetHeight;
                    
                    // Fade screen back in
                    fadeOverlay.classList.remove('active');
                    
                    setTimeout(() => {
                        // Envoys walk into the room
                        allHotspots.forEach(h => {
                            h.style.transition = ''; // Restore CSS transition
                            h.classList.remove('at-door');
                        });
                        isProcessing = false;
                    }, 800); // Wait a bit after fade out starts before walking in
                }, 2000); 
            }, 500); 
        } else {
            isProcessing = false;
        }
    }, 2500);
}

function checkGameOver() {
    let over = false;
    let title = "Devir Kapandı";
    let text = "";

    if (stats.halk <= 0) { over = true; title = "Zalim Padişah"; text = "Halk isyan etti ve sarayı bastı. Saltanatın sona erdi."; }
    else if (stats.halk >= 100) { over = true; title = "Halkın Sevgilisi"; text = "Halk seni o kadar çok sevdi ki, devlet işlerini boşladın ve otoriteni kaybettin."; }
    else if (stats.asker <= 0) { over = true; title = "Savunmasız Devlet"; text = "Ordu dağıldı, düşman devletler başkente kadar ilerledi."; }
    else if (stats.asker >= 100) { over = true; title = "Askeri Darbe"; text = "Ordu o kadar güçlendi ki, Yeniçeri ağası seni tahttan indirdi."; }
    else if (stats.gelir <= 0) { over = true; title = "Müflis Padişah"; text = "Hazine iflas etti. Maaşını alamayan memurlar ve askerler seni devirdi."; }
    else if (stats.gelir >= 100) { over = true; title = "Cimri Padişah"; text = "Altın istiflemekten başka bir şey düşünmedin, enflasyon devleti yıktı."; }
    else if (stats.din <= 0) { over = true; title = "Dinsiz Padişah"; text = "Ulema seni kafir ilan etti, fetva ile tahttan indirildin."; }
    else if (stats.din >= 100) { over = true; title = "Sofu Padişah"; text = "Devlet işlerini tamamen şeyhülislama bıraktın, padişahlığın kağıt üzerinde kaldı."; }

    if (over) {
        document.getElementById('game-over-subtitle').innerText = title;
        document.getElementById('game-over-text').innerText = `${text}\n\nTahtta ${day} gün kalabildin.`;
        DOM.gameOver.classList.add('active');
        return true;
    }
    return false;
}

// Event Listeners
document.getElementById('hotspot-vezir').addEventListener('click', () => openEnvoyPanel('vezir'));
document.getElementById('hotspot-serdar').addEventListener('click', () => openEnvoyPanel('serdar'));
document.getElementById('hotspot-hazine').addEventListener('click', () => openEnvoyPanel('hazine'));
document.getElementById('close-btn').addEventListener('click', closePanel);
document.getElementById('dark-overlay').addEventListener('click', closePanel);
document.getElementById('nav-left').addEventListener('click', () => navigateEnvoy(-1));
document.getElementById('nav-right').addEventListener('click', () => navigateEnvoy(1));
document.getElementById('restart-btn').addEventListener('click', initGame);

// Page Visibility API
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any heavy tasks
    }
});

// Force Landscape on Mobile (requires user interaction first)
async function lockLandscape() {
    try {
        if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock('landscape');
        }
    } catch (error) {
        console.warn('Orientation lock failed:', error);
    }
}
document.addEventListener('click', lockLandscape, { once: true });
document.addEventListener('touchstart', lockLandscape, { once: true });

// --- Atmospheric Particles ---
function spawnParticles() {
    const layer = document.getElementById('particle-layer');
    if (!layer) return;

    // Spawn Smoke at the incense burners (approx bottom left/right of the carpet)
    setInterval(() => {
        const createSmoke = (leftPos) => {
            let smoke = document.createElement('div');
            smoke.className = 'pixel-smoke';
            // Randomize position slightly around the burner
            smoke.style.left = (leftPos + (Math.random() * 2 - 1)) + '%';
            smoke.style.top = (85 + (Math.random() * 2 - 1)) + '%';
            smoke.style.animationDuration = (2.5 + Math.random()) + 's';
            layer.appendChild(smoke);
            setTimeout(() => smoke.remove(), 3500);
        };
        // The two golden censers are around 15% and 85% width in the new background
        createSmoke(18);
        createSmoke(82);
    }, 400);

    // Spawn Gold Dust randomly in the room
    setInterval(() => {
        let dust = document.createElement('div');
        dust.className = 'pixel-dust';
        dust.style.left = (10 + Math.random() * 80) + '%';
        dust.style.top = (30 + Math.random() * 60) + '%';
        dust.style.animationDuration = (4 + Math.random() * 4) + 's';
        layer.appendChild(dust);
        setTimeout(() => dust.remove(), 8000);
    }, 300);
}
spawnParticles();

// --- Main Menu Logic ---
const DOM_MENU = {
    menu: document.getElementById('main-menu'),
    btnNew: document.getElementById('btn-new-game'),
    btnContinue: document.getElementById('btn-continue'),
    btnExit: document.getElementById('btn-exit')
};

function saveProgress() {
    const data = {
        day,
        stats,
        availableEvents,
        activeEnvoysToday
    };
    localStorage.setItem('padisah_save', JSON.stringify(data));
}

function loadProgress() {
    const saved = localStorage.getItem('padisah_save');
    if (saved) {
        const data = JSON.parse(saved);
        day = data.day;
        stats = data.stats;
        availableEvents = data.availableEvents;
        activeEnvoysToday = data.activeEnvoysToday;
    }
}

function initMenu() {
    const saveExists = !!localStorage.getItem('padisah_save');
    if (!saveExists) {
        DOM_MENU.btnContinue.disabled = true;
    }

    DOM_MENU.btnNew.addEventListener('click', () => {
        localStorage.removeItem('padisah_save');
        startGameFromMenu(true);
    });

    DOM_MENU.btnContinue.addEventListener('click', () => {
        startGameFromMenu(false);
    });

    DOM_MENU.btnExit.addEventListener('click', () => {
        window.close();
        if (!window.closed) alert('Oyundan çıkmak için sekmeyi kapatabilirsiniz.');
    });
}

function startGameFromMenu(isNewGame) {
    const fadeOverlay = document.getElementById('fade-overlay');
    const fadeText = document.getElementById('fade-day-text');
    
    if (isNewGame) {
        fadeText.innerText = 'Gün 1';
    } else {
        const saved = localStorage.getItem('padisah_save');
        if (saved) {
            const data = JSON.parse(saved);
            fadeText.innerText = `Gün ${data.day}`;
        }
    }

    fadeOverlay.classList.add('active');
    
    setTimeout(() => {
        DOM_MENU.menu.classList.add('hidden');
        
        initGame(isNewGame);
        
        setTimeout(() => {
            fadeOverlay.classList.remove('active');
        }, 500);
    }, 1000);
}

function initGame(isNewGame) {
    if (isNewGame) {
        eventDatabase = window.eventDatabase || [];
        stats = { halk: 50, asker: 50, gelir: 50, din: 50 };
        day = 1;
        activeEnvoysToday = ['vezir', 'serdar', 'hazine'];
        availableEvents = JSON.parse(JSON.stringify(eventDatabase));
        saveProgress(); // Initial save
    } else {
        loadProgress();
    }
    
    currentEnvoyType = null;
    isProcessing = false;
    
    DOM.gameOver.classList.remove('active');
    closePanel();
    updateBars();
    DOM.day.innerText = day;
    
    // Start with envoys walking in
    const allHotspots = document.querySelectorAll('.envoy-hotspot');
    allHotspots.forEach(h => {
        h.style.transition = 'none';
        h.classList.add('at-door');
    });
    
    void document.body.offsetHeight; // Force reflow
    
    setTimeout(() => {
        allHotspots.forEach(h => {
            h.style.transition = ''; // Restore CSS transition
            // Only envoys that are still active today will walk in
            if (activeEnvoysToday.includes(h.dataset.envoy)) {
                h.classList.remove('at-door');
            }
        });
    }, 500);
}

// Start Menu
initMenu();
