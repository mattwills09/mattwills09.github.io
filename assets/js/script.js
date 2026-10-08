// Small enhancements; navigation and portfolio content work without JavaScript.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear())
})


const hoodToggle = document.getElementById('hood-toggle')
if (hoodToggle) {
  const notes = [...document.querySelectorAll('.hood-note')]
  const status = document.getElementById('hood-status')
  hoodToggle.hidden = false
  hoodToggle.addEventListener('click', () => {
    const expanded = hoodToggle.getAttribute('aria-expanded') !== 'true'
    hoodToggle.setAttribute('aria-expanded', String(expanded))
    hoodToggle.querySelector('span').textContent = expanded ? '−' : '＋'
    notes.forEach((note) => { note.hidden = !expanded })
    status.textContent = expanded ? 'Engineering notes shown throughout the page.' : 'Engineering notes hidden.'
  })
}

const hero = document.querySelector('.hero')
if (hero) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  let frame = null
  let nextX = 0
  let nextY = 0
  const resetWallpaper = () => {
    if (frame !== null) cancelAnimationFrame(frame)
    frame = null
    hero.style.removeProperty('--wallpaper-x')
    hero.style.removeProperty('--wallpaper-y')
  }
  hero.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return
    const bounds = hero.getBoundingClientRect()
    nextX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2)) * 5
    nextY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2)) * 3
    if (frame !== null) return
    frame = requestAnimationFrame(() => {
      hero.style.setProperty('--wallpaper-x', `${nextX.toFixed(2)}px`)
      hero.style.setProperty('--wallpaper-y', `${nextY.toFixed(2)}px`)
      frame = null
    })
  }, { passive: true })
  hero.addEventListener('pointerleave', resetWallpaper)
  window.addEventListener('blur', resetWallpaper)
  reducedMotion.addEventListener('change', resetWallpaper)
  finePointer.addEventListener('change', resetWallpaper)
}


// Native dialog provides focus containment and Escape handling.
const commandPalette = document.getElementById('command-palette')
if (commandPalette && typeof commandPalette.showModal === 'function') {
  const trigger = document.querySelector('.command-trigger')
  const search = document.getElementById('command-search')
  const results = document.getElementById('command-results')
  const empty = document.getElementById('command-empty')
  const status = document.getElementById('command-status')
  const commands = [
    { label: 'About / homepage', detail: 'Page', href: 'index.html', keywords: 'home profile' },
    { label: 'Experience', detail: 'Section', href: 'index.html#experience-title', keywords: 'safely ems skills career' },
    { label: 'Selected work', detail: 'Page', href: 'portfolio.html', keywords: 'projects portfolio' },
    { label: 'Family League Legacy', detail: 'Live app ↗', href: 'https://family-league-legacy.vercel.app/', keywords: 'react typescript football' },
    { label: 'Safely SDK demo', detail: 'Live demo ↗', href: 'https://demo.safely.com/be/', keywords: 'booking insurance travel' },
    { label: 'Project archive', detail: 'Page', href: 'portfolio-archive.html', keywords: 'older javascript games' },
    { label: 'Contact', detail: 'Page', href: 'contact.html', keywords: 'email message gmail outlook' },
  ]
  let filtered = commands
  let active = 0
  let opener = null
  const selectResult = (index) => {
    active = index
    const items = [...results.children]
    items.forEach((item, i) => item.setAttribute('aria-selected', String(i === active)))
    if (items[active]) search.setAttribute('aria-activedescendant', items[active].id)
    else search.removeAttribute('aria-activedescendant')
  }
  const renderCommands = () => {
    const query = search.value.trim().toLowerCase()
    filtered = commands.filter(command => `${command.label} ${command.keywords}`.toLowerCase().includes(query))
    results.replaceChildren()
    filtered.forEach((command, index) => {
      const item = document.createElement('a')
      item.className = 'command-result'
      item.id = `command-option-${index}`
      item.href = command.href
      item.setAttribute('role', 'option')
      item.tabIndex = -1
      if (command.href.startsWith('https:')) {
        item.target = '_blank'
        item.rel = 'noopener noreferrer'
        item.setAttribute('aria-label', `${command.label}, opens in a new tab`)
      }
      const label = document.createElement('span')
      label.textContent = command.label
      const detail = document.createElement('span')
      detail.textContent = command.detail
      item.append(label, detail)
      item.addEventListener('click', () => commandPalette.close())
      results.append(item)
    })
    empty.hidden = filtered.length !== 0
    selectResult(0)
    status.textContent = `${filtered.length} ${filtered.length === 1 ? 'result' : 'results'}`
  }
  const openCommands = () => {
    if (commandPalette.open) return
    opener = document.activeElement
    search.value = ''
    renderCommands()
    commandPalette.showModal()
    search.setAttribute('aria-expanded', 'true')
    search.focus()
  }
  trigger.hidden = false
  trigger.addEventListener('click', openCommands)
  commandPalette.querySelector('.command-close').addEventListener('click', () => commandPalette.close())
  commandPalette.addEventListener('close', () => {
    search.setAttribute('aria-expanded', 'false')
    if (opener instanceof HTMLElement && document.contains(opener)) opener.focus()
  })
  search.addEventListener('input', renderCommands)
  search.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); commandPalette.close(); return }
    if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && filtered.length) {
      event.preventDefault()
      selectResult((active + (event.key === 'ArrowDown' ? 1 : -1) + filtered.length) % filtered.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (filtered.length) results.children[active].click()
    }
  })
  document.addEventListener('keydown', (event) => {
    const editable = event.target instanceof Element && event.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')
    if (editable || commandPalette.open || event.repeat || event.isComposing) return
    const slash = event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey
    const chord = event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey) && !event.altKey
    if (slash || chord) { event.preventDefault(); openCommands() }
  })
}
