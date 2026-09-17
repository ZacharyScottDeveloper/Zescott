# 🖥️ Zescott

A desktop-inspired personal portfolio built with vanilla HTML, CSS, and JavaScript. Instead of a traditional scrolling website, Zescott recreates the feel of a lightweight desktop environment with draggable windows, a taskbar, and interactive applications.

## What does it do?

Every time the site loads, it:

1. Builds the desktop from a single JavaScript data object.
2. Creates draggable application windows for each section of the portfolio.
3. Manages opening, closing, minimising, and focusing windows.
4. Displays projects, skills, experience, and contact information through desktop apps.
5. Runs entirely in the browser with no frameworks or backend.

## Desktop applications

| **App**    | **Purpose**                          |
| ---------- | ------------------------------------ |
| About Me   | Personal introduction and background |
| Projects   | Showcase of my software projects     |
| Skills     | Languages, tools, and technologies   |
| Experience | Work and development experience      |
| Contact    | Links to GitHub, email, and socials  |

## Files in this repo

| **File**     | **Description**                                 |
| ------------ | ----------------------------------------------- |
| `index.html` | Desktop layout and application containers       |
| `styles.css` | Window manager, taskbar, and overall styling    |
| `scripts.js` | Desktop logic, window management, and rendering |
| `assets/`    | Icons, images, wallpapers, and branding assets  |

## Configuration

Most of the site's content lives inside the **`APP_DATA`** object in `scripts.js`.

| **Section** | **What it's for**                        |
| ----------- | ---------------------------------------- |
| `portfolio` | About Me, Skills, and Experience content |
| `projects`  | Project cards and descriptions           |
| `contact`   | Social links and contact information     |
| `theme`     | Desktop appearance and branding values   |

Updating the portfolio usually only requires editing the data object rather than the HTML.

## How it works

* **`APP_DATA`** acts as the site's database, storing every project, skill, and section in one place.
* The **window manager** dynamically creates desktop windows and handles dragging, z-index, minimising, and restoring.
* **Desktop icons** open applications without requiring separate pages, making the portfolio feel like a real operating system.
* The **taskbar** tracks open applications and allows windows to be restored after being minimised.
* Everything is rendered with **vanilla JavaScript**, keeping the project lightweight and dependency-free.

## How to run it

No installation is required.

```bash
git clone https://github.com/ZacharyScottDeveloper/Zescott.git
cd Zescott
```

Open `index.html` in any modern browser.

Or visit the live version:

**https://zescott.com**

## Built with

* HTML5
* CSS3
* Vanilla JavaScript
* HTML Canvas API (background effects)
