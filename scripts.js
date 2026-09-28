     const whatamils = [
    "Beginner Developer",
    "Passionate Designer",
    "Unimaginably Cool Guy",
    "UX Designer",
    "Full stack developer",
    "Self Taught Scripter",
    "Extremely Cool Guy",
];

const whatamI = document.getElementById("whatamI");
let currentIndex = 0;

if (whatamI) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % whatamils.length;
        whatamI.textContent = whatamils[currentIndex];
    }, 2000);
}

const cursorDot = document.querySelector(".cursor-dot");
const cursorTail = document.querySelector(".cursor-tail");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let tailX = mouseX;
let tailY = mouseY;

window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    tailX += (mouseX - tailX) * 0.12;
    tailY += (mouseY - tailY) * 0.12;

    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }

    if (cursorTail) {
        cursorTail.style.left = `${tailX}px`;
        cursorTail.style.top = `${tailY}px`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

let expanded = false;

const toggleBtn = document.querySelector(".projectsToggle");
const projects = document.querySelectorAll(".unimportant");

toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    projects.forEach(project => {
        project.classList.toggle("non-notable", !expanded);
    });

    toggleBtn.textContent = expanded
        ? "Show fewer projects ⌄"
        : "Show more projects >";
});


const SUPABASE_URL = 'https://ghqqyqytrmtcrjooupmx.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocXF5cXl0cm10Y3Jqb291cG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1OTYxMjEsImV4cCI6MjEwNjE3MjEyMX0.Lxx8spDkoSr-7izHTJL18tLjLROIlpvW7-6eqWPyctI';
  const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const commentForm = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');

  fetchComments();

  commentForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('nameInput').value;
    let website = document.getElementById('webInput').value.trim();
    const message = document.getElementById('msgInput').value;

    if (website && !/^https?:\/\//i.test(website)) {
      website = 'http:' + '/' + '/' + website;
    }

    const { error } = await supabase
      .from('comments')
      .insert([{ name, website, message }]);

    if (error) {
      alert('Error saving comment: ' + error.message);
    } else {
      commentForm.reset();
      fetchComments();
    }
  });

  async function fetchComments() {
    const { data: comments, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      commentsList.innerHTML = '<p style="color:red;">Failed to sync comments.</p>';
      return;
    }

    commentsList.innerHTML = '';
    if (comments.length === 0) {
      commentsList.innerHTML = '<p style="color: #6a4d93; text-align: center;">No comments yet. Leave a note!</p>';
      return;
    }

    comments.forEach(item => {
      let siteMarkup = '';
      if (item.website) {
        siteMarkup = '<a href="' + item.website + '" target="_blank" class="author-link">' + item.name + 's site</a>';
      }
      
      const displayDate = new Date(item.created_at).toLocaleDateString();

      const card = document.createElement('div');
      card.className = 'comment-card';
      card.innerHTML = `
        <div class="comment-header">
          <div>
            <span class="author-name">${item.name}</span>
            ${siteMarkup}
          </div>
          <span class="comment-date">${displayDate}</span>
        </div>
        <div class="comment-body">${escapeHTML(item.message)}</div>
        <div class="comment-actions">
          <button type="button">reply</button>
          <button type="button">show replies (0)</button>
        </div>
      `;
      commentsList.appendChild(card);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
  }
