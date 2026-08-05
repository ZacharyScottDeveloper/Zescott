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
    title: "Billy Bot - Raspberry Pi Chatbot",
    tabs: [
      {
        name: "Overview",
        content: `<div class="system-text-block"><h2>What is Billy Bot?</h2><p>Billy Bot is a chatbot powered by a Raspberry Pi, designed to provide voice-activated assistance and play a few simple games.</p></div>`
      },
      {
        name: "Technical Details",
        content: `<div class="system-text-block"><h2>Technical Details</h2><p>Billy Bot is built using Python and runs on a Raspberry Pi.</p><p>The chatbot functionality is implemented using a combination of speech recognition and text-to-speech libraries, allowing Billy Bot to understand voice commands and respond according to hardcoded keywords, giving the effect of a language model while only using keyword detection (similar to the early releases of Siri.).</p><p><strong>Privacy Note:</strong> I am not sharing my own voice recordings for privacy reasons. You will need to record and include your own .mp3 files in a <code>Voices/</code> folder for the bot to play them back.</p><p>The speech to text library, <code>speech_recognition</code>, is used to convert spoken language into text. It pulls keywords from the audio input then runs commands based on the keywords. The localized fallback uses the <code>vosk-model-small-en-us-0.15</code> model.</p></div>`
      },
      {
        name: "Libraries",
        content: `
          <div class="system-text-block">
             <h2>Core Dependencies</h2>
             <p>• <strong>SpeechRecognition:</strong> Handles microphone audio capture and maps speech to text using Google STT API protocols.</p>
             <p>• <strong>pygame (mixer):</strong> Manages the audio threading engine to play back your pre-recorded .mp3 voice asset clips instantly.</p>
             <p>• <strong>vosk:</strong> Serves as the localized, fully offline fallback STT framework. Requires the <code>vosk-model-small-en-us-0.15</code> model to be placed in the root directory.</p>
             <p>• <strong>pyttsx3:</strong> Drives the native offline TTS text-to-speech fallback when reading dynamic calculated string variables.</p>
             <p>• <strong>word2number:</strong> Parses raw, spoken natural-language word blocks directly into actual mathematical integer values for the smart timer matrix.</p>
             <p>• <strong>requests:</strong> Runs external API handshakes to fetch current data strings from Open-Meteo and GNews endpoints.</p>
          </div>
        `
      },
      {
        name: "Instructions",
        content: `
          <div class="system-text-block">
             <h2>Setup & Deployment</h2>
             <p><strong>1. Clone Repository:</strong> Open your terminal environment and clone the core directory block using git commands:</p>
             <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">git clone https://github.com/ZacharyScottDeveloper/Billy-Bot</p>
             
             <p><strong>2. Dependency Installation:</strong> Navigate into the folder workspace and run pip to install the required system libraries:</p>
             <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">pip install -r requirements.txt</p>
             
             <p><strong>3. API Configuration:</strong> The weather and news subroutines query external endpoints. Ensure your development environment has internet access on execution.</p>
             
             <p><strong>4. Audio Hardware Configuration:</strong> Connect your microphone capture array and speakers. The pygame engine requires a valid audio device initialization to boot.</p>

             <p><strong>5. Voice Assets:</strong> Create a <code>Voices/</code> folder in the root directory and add your own .mp3 recordings. (Note: I am not sharing my own voice for privacy reasons).</p>
             
             <p><strong>6. Launch Engine:</strong> Execute the primary runtime file loop inside the terminal wrapper to initialize Billy Bot:</p>
             <p style="padding-left:12px; font-family:Courier, monospace; background:#eaeaea; margin:4px 0;">python assistant.py</p>
          </div>
        `
      },
      {
        name: "Setup",
        content: `<div class="system-text-block"><h2>Hardware Setup</h2><p>Billy Bot is designed to run on a Raspberry Pi with a connected microphone and speaker system. Ensure that your audio hardware is properly configured and recognized by the Raspberry Pi before launching the chatbot.</p><p>For optimal performance, use a high-quality USB microphone and a compatible speaker system to ensure clear audio input and output.</p><p><strong>The specific parts I used:</strong></p>
             
             <p>Total cost for parts is approximately <strong>$357.34 AUD</strong> (Note: the products I used are likely not the most optimal or cheap choices so more affordable tech is likely better. Do your own research):</p>
             
             <p>• <strong>Raspberry Pi 5 ($179.55 AUD):</strong> 
                <a href="https://core-electronics.com.au/raspberry-pi-5-model-b-4gb.html" target="_blank" class="os-link">Core Electronics</a> 
                - The 4GB Model processing unit running the voice engine loop.
             </p>
             
             <p>• <strong>UE Wonderboom ($117.82 AUD):</strong> 
                <a href="https://ultimateears.com" target="_blank" class="os-link">Ultimate Ears</a> 
                - Sourced speaker element used for audio output playback.
             </p>
             
             <p>• <strong>ChanGeek Microphone ($16.95 AUD):</strong> 
                <a href="https://www.amazon.com.au/Microphone-Gooseneck-Universal-Compatible-CGS-M1/dp/B08M37224H" target="_blank" class="os-link">Amazon AU</a> 
                - Mini USB Gooseneck microphone capture interface for keyword extraction.
             </p>
             
             <p>• <strong>Official Power Supply ($21.07 AUD):</strong> 
                <a href="https://core-electronics.com.au" target="_blank" class="os-link">Core Electronics</a> 
                - 27W power delivery adapter to prevent undervoltage system dropouts.
             </p>
             
             <p>• <strong>Samsung PRO Endurance ($21.95 AUD):</strong> 
                <a href="https://amazon.com.au" target="_blank" class="os-link">Amazon AU</a> 
                - 32GB High-endurance microSD card holding the headless OS lite configuration.
             </p></div>`
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