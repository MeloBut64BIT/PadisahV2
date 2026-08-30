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

function initGame() {
    eventDatabase = window.eventDatabase || [];
    stats = { halk: 50, asker: 50, gelir: 50, din: 50 };
    day = 1;
    activeEnvoysToday = ['vezir', 'serdar', 'hazine'];
    availableEvents = JSON.parse(JSON.stringify(eventDatabase));
    currentEnvoyType = null;
    isProcessing = false;
    
    DOM.gameOver.classList.remove('active');
    closePanel();
    updateBars();
    updateHotspotsVisuals();
    DOM.day.innerText = day;
}

function updateBars() {
    ['halk', 'asker', 'gelir', 'din'].forEach(key => {
        stats[key] = Math.max(0, Math.min(100, stats[key]));
        DOM[key].style.transform = `scaleX(${stats[key] / 100})`;
        
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

function updateHotspotsVisuals() {
    ['vezir', 'serdar', 'hazine'].forEach(type => {
        if (activeEnvoysToday.includes(type)) {
            DOM.hotspots[type].classList.remove('inactive');
        } else {
            DOM.hotspots[type].classList.add('inactive');
        }
    });
}

const envoyOrigins = {
    vezir: { x: 38.5, y: 35 },
    serdar: { x: 50.0, y: 35 },
    hazine: { x: 61.5, y: 35 }
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
        for (let k in opt.etkiler) {
            if (opt.etkiler[k] > 0) {
                effectsHtml += `<span style="color:var(--green); margin-right:8px;">${names[k]} ▲</span>`;
            } else if (opt.etkiler[k] < 0) {
                effectsHtml += `<span style="color:var(--crimson); margin-right:8px;">${names[k]} ▼</span>`;
            }
        }
        
        btn.innerHTML = `<span>${opt.metin}</span><div style="font-size:0.9em; margin-top:3px; display:flex; gap:5px;">${effectsHtml}</div>`;
        btn.onclick = () => handleDecision(event, opt);
        DOM.optionsContainer.appendChild(btn);
    });
}

function handleDecision(eventData, option) {
    isProcessing = true;
    
    // Remove event from pool by ID or metin
    const globalIndex = availableEvents.findIndex(e => e.id === eventData.id || e.metin === eventData.metin);
    if (globalIndex > -1) {
        availableEvents.splice(globalIndex, 1);
    }

    const actedEnvoy = currentEnvoyType;
    closePanel();
    
    // Immediately mark envoy as inactive so they can't be clicked again during the notification
    activeEnvoysToday = activeEnvoysToday.filter(e => e !== actedEnvoy);
    updateHotspotsVisuals();
    
    // Apply stats
    for (let key in option.etkiler) {
        if (option.etkiler[key] !== 0) {
            stats[key] += option.etkiler[key];
        }
    }
    updateBars();

    // Show result
    DOM.notification.innerText = option.sonuc_metni || option.sonuc;
    DOM.notification.classList.add('active');

    // Trigger game over check immediately after stats update
    if (checkGameOver()) {
        DOM.notification.classList.remove('active');
        isProcessing = false;
        return;
    }

    setTimeout(() => {
        DOM.notification.classList.remove('active');
        
        if (activeEnvoysToday.length === 0) {
            // Day transition with cinematic fade
            setTimeout(() => {
                const fadeOverlay = document.getElementById('fade-overlay');
                const fadeText = document.getElementById('fade-day-text');
                
                day++;
                fadeText.innerText = `Gün ${day}`;
                fadeOverlay.classList.add('active');
                
                setTimeout(() => {
                    // Update stats while screen is black
                    DOM.day.innerText = day;
                    activeEnvoysToday = ['vezir', 'serdar', 'hazine'];
                    updateHotspotsVisuals();
                    
                    // Fade back in
                    fadeOverlay.classList.remove('active');
                    
                    setTimeout(() => {
                        isProcessing = false;
                    }, 1000); // Wait for fade transition to finish
                }, 2000); // Screen stays black for 2 seconds
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

// Start
initGame();
