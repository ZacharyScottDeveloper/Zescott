const APP_DATA = {
  "portfolio": {
    title: "Zachary Scott - Portfolio",
    tabs: [
      {
        name: "Profile",
        content: `
          <div class="profile-avatar-frame">
             <img src="your-photo.jpg" alt="Profile Layout">
          </div>
          <div class="system-text-block">
             <h2>Zachary Scott</h2>
             <p>Software Engineer</p>
             <p>Student at Stretton State College</p>
             <p>Passionate about building intuitive user interfaces and efficient systems.</p>
             <p>Brisbane, Australia</p>
          </div>
        `
      },
      {
        name: "Skills",
        content: `
          <div class="system-text-block">
             <a href="https://projects.zsdev.com" target="_blank"><h2>Skills Inventory</h2></a>
             <p>• JavaScript / HTML / CSS</p>
             <p>• Frontend Systems Architecture</p>
             <p>• Python scripting</p>
             <p>• VEX Robotics</p>
             <p>• Asset creation</p>
             <p></p><p><a href="https://portfolio.zsdev.com" target="_blank">View my portfolio</a></p>
          </div>
        `
      },
      {
        name: "Social",
        content: `<div class="system-text-block"><h2>Social Connections</h2><p>
        • Email: contact@zsdev.com</p><p>
        • LinkedIn: linkedin.com/in/zachary-scott</p><p>
        • GitHub: <a href="https://github.com/ZacharyScottDeveloper" target="_blank">github.com/ZacharyScottDeveloper</a></p><p>
        • Twitter: @zsdev</p><p>
        • Instagram: @zsdev
        </p></div>`
      },
      {
        name: "Hobbies",
        content: `<div class="system-text-block"><h2>My Hobbies</h2><p>• Hiking</p><p>• Photography</p><p>• Lego</p><p>• Reading</p><p>• Basketball</p><p>• Coding</p></div>`
      },
    ]
  },
  "resume": {
    title: "Document Manager - Resume",
    tabs: [
      {
        name: "Work Experience",
        content: `<div class="system-text-block"><h2>Work Experience</h2><p>• McDonald's Crew Member (Kitchen): March 2026 - Present (2024-Present)</p></div>`
      },
      {
        name: "Education",
        content: `<div class="system-text-block"><h2>Education Details</h2><p>Grade 1 - 12 at Stretton State College</p><p>• Consistant A's and few B's</p><p>• <a href="https://awards.zsdev.com">Platinum Awards</a>: Grade 4, 6</p></div>`
      }
    ]
  },
"billy-bot": {
    title: "Billy Bot - Raspberry Pi Projects",
    tabs: [
      {
        name: "Overview",
        content: `
          <div class="system-text-block">
            <div class="proj-section">
              <div class="proj-section-title">📊 Dashboard</div>
              <p>A real-time information dashboard running on a Raspberry Pi 5, displayed on a Waveshare 1.69" LCD (240×280px, ST7789V2). Shows the current time, date, temperature from Open-Meteo, and the next 3 upcoming iCloud calendar events — all refreshed automatically while the clock ticks every second.</p>
            </div>
            <div class="proj-section">
              <div class="proj-section-title">🎙️ Voice Assistant</div>
              <p>Billy Bot is a voice-activated assistant powered by a Raspberry Pi. It uses keyword detection to understand spoken commands and respond with pre-recorded audio clips or synthesised speech — similar in approach to early Siri releases — without relying on a large language model.</p>
            </div>
          </div>
        `
      },
      {
        name: "Technical Details",
        content: `
          <div class="system-text-block">
            <div class="proj-section">
              <div class="proj-section-title">📊 Dashboard</div>
              <p>Built in Python using Pillow (PIL) to render frames pushed to the ST7789V2 over SPI0. Weather is fetched from Open-Meteo every 15 minutes; calendar events are pulled from iCloud via CalDAV every 12 hours. The clock updates every second while all other data is cached between refreshes.</p>
              <p>Hostname: <strong>billy</strong> — User: <strong>zescott12</strong> — Script: <code>~/dashboard/dashboard.py</code></p>
            </div>
            <div class="proj-section">
              <div class="proj-section-title">🎙️ Voice Assistant</div>
              <p>Built in Python using speech recognition and text-to-speech libraries. Keyword detection parses spoken input and triggers hardcoded responses, giving the effect of a language model without actually using one. Falls back to the offline Vosk model (<code>vosk-model-small-en-us-0.15</code>) when internet is unavailable.</p>
            </div>
          </div>
        `
      },
      {
        name: "Libraries",
        content: `
          <div class="system-text-block">
            <div class="proj-section">
              <div class="proj-section-title">📊 Dashboard</div>
              <p>• <strong>adafruit-circuitpython-rgb-display:</strong> Drives the ST7789V2 LCD panel over SPI.</p>
              <p>• <strong>adafruit-blinka:</strong> CircuitPython compatibility layer for Raspberry Pi GPIO.</p>
              <p>• <strong>Pillow (PIL):</strong> Renders text and layout onto frames before pushing to the display.</p>
              <p>• <strong>requests:</strong> Fetches weather data from the Open-Meteo API.</p>
              <p>• <strong>caldav:</strong> Connects to iCloud to retrieve upcoming calendar events.</p>
              <p>• <strong>icalendar:</strong> Parses the raw iCal event data returned by CalDAV.</p>
            </div>
            <div class="proj-section">
              <div class="proj-section-title">🎙️ Voice Assistant</div>
              <p>• <strong>SpeechRecognition:</strong> Captures mic audio and maps speech to text via Google STT.</p>
              <p>• <strong>pygame (mixer):</strong> Manages playback of pre-recorded .mp3 voice clips.</p>
              <p>• <strong>vosk:</strong> Offline fallback STT — requires <code>vosk-model-small-en-us-0.15</code> in root.</p>
              <p>• <strong>pyttsx3:</strong> Native offline TTS for dynamic string responses.</p>
              <p>• <strong>word2number:</strong> Converts spoken number words into integers for the timer feature.</p>
              <p>• <strong>requests:</strong> Fetches data from Open-Meteo and GNews endpoints.</p>
            </div>
          </div>
        `
      },
      {
        name: "Instructions",
        content: `
          <div class="system-text-block">
            <div class="proj-section">
              <div class="proj-section-title">📊 Dashboard</div>
              <p><strong>1. Enable SPI:</strong> Run <code>sudo raspi-config</code> → Interface Options → SPI → Enable.</p>
              <p><strong>2. Fix CE0 conflict:</strong> Add <code>dtoverlay=spi0-0cs</code> to <code>/boot/firmware/config.txt</code> to stop the kernel claiming CE0.</p>
              <p><strong>3. Fix GPIO library:</strong> Uninstall RPi.GPIO to avoid it shadowing rpi-lgpio (the Pi 5–compatible version):</p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">pip uninstall RPi.GPIO</p>
              <p><strong>4. Install dependencies:</strong></p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">pip install adafruit-circuitpython-rgb-display adafruit-blinka caldav icalendar requests Pillow</p>
              <p><strong>5. Configure:</strong> Set <code>LATITUDE</code>, <code>LONGITUDE</code>, <code>ICLOUD_EMAIL</code>, and <code>ICLOUD_APP_PASSWORD</code> at the top of <code>dashboard.py</code>. Generate an app-specific password at appleid.apple.com.</p>
              <p><strong>6. Run:</strong></p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">python ~/dashboard/dashboard.py</p>
              <p><strong>7. Auto-start:</strong> Enable the systemd service so it launches on boot:</p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">sudo systemctl enable dashboard.service</p>
            </div>
            <div class="proj-section">
              <div class="proj-section-title">🎙️ Voice Assistant</div>
              <p><strong>1. Clone Repository:</strong></p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">git clone https://github.com/ZacharyScottDeveloper/Billy-Bot</p>
              <p><strong>2. Install Dependencies:</strong></p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">pip install -r requirements.txt</p>
              <p><strong>3. Add Vosk Model:</strong> Place the <code>vosk-model-small-en-us-0.15</code> folder in the project root for offline fallback.</p>
              <p><strong>4. Add Voice Assets:</strong> Create a <code>Voices/</code> folder and add your own .mp3 recordings. (My own voice files are excluded for privacy.)</p>
              <p><strong>5. Launch:</strong></p>
              <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">python assistant.py</p>
            </div>
          </div>
        `
      },
      {
        name: "Hardware",
        content: `
          <div class="system-text-block">
            <div class="proj-section">
              <div class="proj-section-title">📊 Dashboard</div>
              <p><strong>Display:</strong> Waveshare 1.69" LCD — 240×280px, ST7789V2, SPI0.</p>
              <p><strong>Wiring:</strong></p>
              <p>• VCC → Pin 1 &nbsp;|&nbsp; GND → Pin 6</p>
              <p>• DIN → Pin 19 (GPIO10/MOSI) &nbsp;|&nbsp; CLK → Pin 23 (GPIO11/SCLK)</p>
              <p>• CS → Pin 24 (GPIO8/CE0) &nbsp;|&nbsp; DC → Pin 22 (GPIO25)</p>
              <p>• RST → Pin 13 (GPIO27) &nbsp;|&nbsp; BL → Pin 12 (GPIO18)</p>
            </div>
            <div class="proj-section">
              <div class="proj-section-title">🎙️ Voice Assistant</div>
              <p>Total cost: approximately <strong>$357.34 AUD</strong></p>
              <p>• <strong>Raspberry Pi 5 4GB ($179.55):</strong> Main processing unit — <a href="https://core-electronics.com.au/raspberry-pi-5-model-b-4gb.html" target="_blank">Core Electronics</a></p>
              <p>• <strong>UE Wonderboom ($117.82):</strong> Speaker for audio output — <a href="https://ultimateears.com" target="_blank">Ultimate Ears</a></p>
              <p>• <strong>ChanGeek USB Microphone ($16.95):</strong> Gooseneck mic for voice input — <a href="https://www.amazon.com.au/Microphone-Gooseneck-Universal-Compatible-CGS-M1/dp/B08M37224H" target="_blank">Amazon AU</a></p>
              <p>• <strong>Official Power Supply ($21.07):</strong> 27W adapter — <a href="https://core-electronics.com.au" target="_blank">Core Electronics</a></p>
              <p>• <strong>Samsung PRO Endurance 32GB microSD ($21.95):</strong> OS storage — <a href="https://amazon.com.au" target="_blank">Amazon AU</a></p>
            </div>
          </div>
        `
      }
    ]
  }
 
  
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.program');
  const shortcuts = Array.from(document.querySelectorAll('.shortcut'));
  const windowsContainer = document.getElementById('desktop-windows');
  const tabsContainer = document.getElementById('taskbar-tabs');

  startTaskbarClock();

  if (!container || shortcuts.length === 0) return;

  shortcuts.forEach((shortcut) => {
    enableDrag(shortcut, container);

    const appId = shortcut.dataset.website;
    if (appId) {
      shortcut.addEventListener('dblclick', () => {
        const title = shortcut.querySelector('.label').textContent;
        createWindow(appId, title, windowsContainer, tabsContainer);
      });
    }
  });
});


function createWindow(id, title, container, tabsContainer) {
  if (document.getElementById(`win-${id}`)) {
    focusWindow(id);
    return;
  }

  const config = APP_DATA[id] || { title: title, tabs: [{ name: "General", content: "Empty Content Layout Module Block" }] };

  const win = document.createElement('div');
  win.id = `win-${id}`;
  win.className = 'window';
  win.style.left = '150px';
  win.style.top = '100px';

  let tabsHtml = '';
  let panelsHtml = '';

  config.tabs.forEach((tab, index) => {
    const isActive = index === 0 ? 'active-inner-tab' : '';
    const isPanelActive = index === 0 ? 'active-panel' : '';
    
    tabsHtml += `<div class="window-content-tab ${isActive}" data-tab-index="${index}">${tab.name}</div>`;
    panelsHtml += `<div class="tab-panel ${isPanelActive}" id="panel-${id}-${index}">${tab.content}</div>`;
  });

  win.innerHTML = `
    <div class="window-titlebar">
      <span class="window-title">${config.title}</span>
      <div class="window-controls">
        <button class="win-btn-close">×</button>
      </div>
    </div>
    
    <div class="window-tab-strip">
       ${tabsHtml}
    </div>

    <div class="window-body-inset">
       ${panelsHtml}
    </div>

    <div class="dialog-footer-actions">
        <button class="win-btn-close">OK</button>
        <button class="win-btn-close">Cancel</button>
    </div>
  `;

  const tab = document.createElement('div');
  tab.id = `tab-${id}`;
  tab.className = 'taskbar-tab active-tab';
  tab.textContent = title;

  container.appendChild(win);
  tabsContainer.appendChild(tab);
  
  makeWindowDraggable(win);

  const innerTabs = win.querySelectorAll('.window-content-tab');
  innerTabs.forEach(tBtn => {
    tBtn.addEventListener('click', () => {
      innerTabs.forEach(t => t.classList.remove('active-inner-tab'));
      win.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active-panel'));

      tBtn.classList.add('active-inner-tab');
      const idx = tBtn.dataset.tabIndex;
      win.querySelector(`#panel-${id}-${idx}`).classList.add('active-panel');
    });
  });

  win.addEventListener('mousedown', () => focusWindow(id));
  tab.addEventListener('click', () => toggleMinimize(id));

  win.querySelectorAll('.win-btn-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      win.remove();
      tab.remove();
    });
  });
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.style.zIndex = 100);
  document.querySelectorAll('.taskbar-tab').forEach(t => t.classList.remove('active-tab'));

  const activeWin = document.getElementById(`win-${id}`);
  const activeTab = document.getElementById(`tab-${id}`);

  if (activeWin) {
    activeWin.style.zIndex = 200;
    activeWin.style.display = 'flex';
  }
  if (activeTab) activeTab.classList.add('active-tab');
}

function toggleMinimize(id) {
  const win = document.getElementById(`win-${id}`);
  const tab = document.getElementById(`tab-${id}`);

  if (win.style.display === 'none' || !tab.classList.contains('active-tab')) {
    focusWindow(id);
  } else {
    win.style.display = 'none';
    tab.classList.remove('active-tab');
  }
}

function makeWindowDraggable(win) {
  const titlebar = win.querySelector('.window-titlebar');
  
  titlebar.onmousedown = function(event) {
    if (event.target.tagName === 'BUTTON') return;
    event.preventDefault();

    const parentRect = win.parentElement.getBoundingClientRect();
    const rect = win.getBoundingClientRect();
    
    let posX = rect.left - parentRect.left;
    let posY = rect.top - parentRect.top;

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    const desktop = document.querySelector('.desktop-container').getBoundingClientRect();
    const taskbarHeight = 40;

    function elementDrag(e) {
      e.preventDefault();
      
      let deltaX = e.clientX - mouseX;
      let deltaY = e.clientY - mouseY;
      
      mouseX = e.clientX;
      mouseY = e.clientY;

      posX = posX + deltaX;
      posY = posY + deltaY;

      const maxX = desktop.width - win.offsetWidth - 30; 
      const maxY = desktop.height - win.offsetHeight - taskbarHeight - 30;

      if (posX < 0) posX = 0;
      if (posX > maxX) posX = maxX;
      if (posY < 0) posY = 0;
      if (posY > maxY) posY = maxY;

      win.style.left = posX + "px";
      win.style.top = posY + "px";
    }

    function closeDragElement() {
      document.onmousemove = null;
      document.onmouseup = null;
    }

    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  };
}


function enableDrag(element, container) {
  element.addEventListener('mousedown', (startEvent) => {
    if (startEvent.target.tagName === 'BUTTON') return;
    startEvent.preventDefault();

    const rect = element.getBoundingClientRect();
    const offsetX = startEvent.clientX - rect.left;
    const offsetY = startEvent.clientY - rect.top;

    const containerRect = container.getBoundingClientRect();

    function onMouseMove(moveEvent) {
      let left = moveEvent.clientX - containerRect.left - offsetX;
      let top = moveEvent.clientY - containerRect.top - offsetY;

      const minX = 0;
      const minY = 0;
      const maxX = containerRect.width - element.offsetWidth;
      const maxY = containerRect.height - element.offsetHeight - 40;

      left = Math.max(minX, Math.min(left, maxX));
      top = Math.max(minY, Math.min(top, maxY));

      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    }

    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
}

function startTaskbarClock() {
  const clockEl = document.getElementById('clock');
  function updateTime() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  setInterval(updateTime, 1000);
  updateTime();
}

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: block;
  }

  .bg-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .mythology-image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-height: 80%;
    max-width: 60%;
    opacity: 0.5;
    filter: drop-shadow(0 0 30px rgba(150, 100, 200, 0.4));
  }

  .mythology-image.glitch {
    animation: glitch 0.15s infinite;
  }

  @keyframes glitch {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%);
      transform: translateX(-50%) translateX(2px);
    }
    20% {
      clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
      transform: translateX(-50%) translateX(-2px);
    }
    40% {
      clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
      transform: translateX(-50%) translateX(1px);
    }
    60% {
      clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
      transform: translateX(-50%) translateX(-1px);
    }
    80% {
      clip-path: polygon(0 50%, 100% 50%, 100% 90%, 0 90%);
      transform: translateX(-50%) translateX(2px);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translateX(-50%) translateX(0);
    }
  }
