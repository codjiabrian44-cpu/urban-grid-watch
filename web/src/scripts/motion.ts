import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ReadingMode = 'quick' | 'deep';
type GridState = 'nominal' | 'isolated';

const STORAGE_KEY = 'ugw_reading_depth';

const REVEAL_SELECTOR = [
  '.band-header',
  '.triptych-cell',
  '.contrast-plaque',
  '.pull-quote',
  '.monument-callout',
  '.signpost-panel',
  '.quadrant-cell',
  '.benchmark-col',
  '.case-head',
  '.timeline-spine',
  '.case-subblock',
  '.five-cell',
  '.diagram-feature',
  '.pillar-card-arch',
  '.pillar-feature-band',
  '.horizon-cell',
  '.governance-split',
  '.roadmap-row',
  '.conclusion-frame',
  '.table-wrap',
  '.source-entry',
  '.transition-strip .transition-box',
].join(', ');

const HERO_SELECTOR = [
  '.page-header .rubric-line',
  '.page-header h1',
  '.page-header .hero-thesis',
  '.page-header .page-lead',
  '.page-header .btn-row',
  '.page-header .safety-notice',
  '.page-header .archival-seal',
  '.page-header .schematic-frame',
].join(', ');

function initMotionSite(): void {
  const root = document.documentElement;
  const mainEl = document.getElementById('main-content');
  const depthButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-depth-choice]'));
  const depthActionButtons = Array.from(document.querySelectorAll<HTMLElement>('[data-set-depth]'));
  const deepSections = Array.from(document.querySelectorAll<HTMLElement>('[data-depth="deep"]'));
  const quickNotice = document.querySelector<HTMLElement>('.quick-mode-notice');

  // 1. Mobile navigation drawer with Escape key & focus restoration
  const menuBtn = document.getElementById('mobile-menu-btn') as HTMLButtonElement | null;
  const drawer = document.getElementById('mobile-nav-drawer');
  if (menuBtn && drawer) {
    const setDrawerOpen = (open: boolean, restoreFocus: boolean) => {
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      const openLbl = menuBtn.getAttribute('data-open-label') || 'Menu';
      const closeLbl = menuBtn.getAttribute('data-close-label') || 'Close';
      menuBtn.textContent = open ? closeLbl : openLbl;
      if (open) {
        const firstLink = drawer.querySelector<HTMLAnchorElement>('a');
        if (firstLink) firstLink.focus();
      } else if (restoreFocus) {
        menuBtn.focus();
      }
    };

    menuBtn.addEventListener('click', () => {
      setDrawerOpen(!drawer.classList.contains('is-open'), false);
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' && drawer.classList.contains('is-open')) {
        evt.preventDefault();
        setDrawerOpen(false, true);
      }
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setDrawerOpen(false, false));
    });
  }

  // 2. Sync inactive responsive diagram SVG aria-hidden across 720px breakpoint
  const mobileDiagramQuery = window.matchMedia('(max-width: 720px)');
  const syncDiagramAria = (isMobile: boolean) => {
    document.querySelectorAll('.diagram-svg-desktop').forEach((svg) => {
      svg.setAttribute('aria-hidden', isMobile ? 'true' : 'false');
    });
    document.querySelectorAll('.diagram-svg-mobile').forEach((svg) => {
      svg.setAttribute('aria-hidden', isMobile ? 'false' : 'true');
    });
  };
  syncDiagramAria(mobileDiagramQuery.matches);
  if (typeof mobileDiagramQuery.addEventListener === 'function') {
    mobileDiagramQuery.addEventListener('change', (e) => syncDiagramAria(e.matches));
  }

  // 3. Ensure bfcache back-navigation always restores visible main content
  window.addEventListener('pageshow', () => {
    if (mainEl) {
      gsap.set(mainEl, { opacity: 1, clearProps: 'opacity,visibility,transform' });
    }
  });

  // 4. Shared GridVisual label & state helpers
  const gvFrame = document.getElementById('grid-visual-frame');
  const gvToggle = document.getElementById('gv-state-toggle') as HTMLButtonElement | null;
  const gvToggleLabel = document.getElementById('gv-toggle-label');
  const gvLiveStatus = document.getElementById('gv-live-status');

  let currentGridState: GridState = 'isolated';
  let userToggledGrid = false;
  let hasScrollIsolated = false;
  let activeGridTl: gsap.core.Timeline | null = null;

  const updateGridSemantics = (state: GridState) => {
    if (!gvFrame || !gvToggle) return;
    const isIsolated = state === 'isolated';
    currentGridState = state;
    gvFrame.setAttribute('data-gv-state', state);
    gvToggle.setAttribute('aria-pressed', isIsolated ? 'true' : 'false');

    if (gvToggleLabel) {
      gvToggleLabel.textContent =
        gvFrame.getAttribute(isIsolated ? 'data-label-isolated' : 'data-label-nominal') || '';
    }
    const nodeText = gvFrame.getAttribute(isIsolated ? 'data-node-isolated' : 'data-node-nominal') || '';
    gvFrame.querySelectorAll('.gv-anomaly-state-label').forEach((el) => {
      el.textContent = nodeText;
    });
    const liveNotes = gvFrame.querySelector('.gv-status-live');
    if (liveNotes) {
      const nomEl = liveNotes.querySelector<HTMLElement>('.gv-status-note-nominal');
      const isoEl = liveNotes.querySelector<HTMLElement>('.gv-status-note-isolated');
      if (nomEl) nomEl.style.fontWeight = isIsolated ? '400' : '600';
      if (isoEl) isoEl.style.fontWeight = isIsolated ? '600' : '400';
    }
    if (gvLiveStatus) {
      const nextLiveText =
        gvFrame.getAttribute(isIsolated ? 'data-live-isolated' : 'data-live-nominal') || '';
      if (gvLiveStatus.textContent !== nextLiveText) {
        gvLiveStatus.textContent = nextLiveText;
      }
    }
  };

  const applyGridVisual = (state: GridState, instant: boolean) => {
    if (!gvFrame) return;
    const isIsolated = state === 'isolated';
    activeGridTl?.kill();
    updateGridSemantics(state);

    if (instant) {
      gsap.set(gvFrame.querySelectorAll('.gv-gate'), {
        opacity: isIsolated ? 1 : 0.22,
        scale: isIsolated ? 1 : 0.72,
        transformOrigin: '50% 50%',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-remote-link-outer'), {
        opacity: isIsolated ? 0.35 : 0.9,
      });
      gsap.set(gvFrame.querySelectorAll('.gv-remote-link-inner'), {
        opacity: isIsolated ? 0.7 : 0.45,
        stroke: isIsolated ? '#F26357' : '#CFE3E0',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-halo'), {
        autoAlpha: isIsolated ? 1 : 0,
        scale: isIsolated ? 1 : 0.75,
        transformOrigin: '50% 50%',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-rings'), {
        autoAlpha: isIsolated ? 1 : 0,
        scale: isIsolated ? 1 : 0.8,
        transformOrigin: '50% 50%',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-core-ring'), {
        stroke: isIsolated ? '#F26357' : '#CFE3E0',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-core-dot'), {
        fill: isIsolated ? '#F26357' : '#CFE3E0',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-badge'), {
        stroke: isIsolated ? '#F26357' : '#3A2F27',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-title'), {
        fill: isIsolated ? '#F26357' : '#EDE4D3',
      });
      gsap.set(gvFrame.querySelectorAll('.gv-anomaly-state-label'), {
        fill: isIsolated ? '#B8A990' : '#CFE3E0',
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    activeGridTl = tl;

    if (isIsolated) {
      // Calm, strictly non-looping defensive isolation sequence (no inward particle travel)
      tl.to(gvFrame.querySelectorAll('.gv-remote-link-outer'), { opacity: 0.35, duration: 0.35 }, 0)
        .to(
          gvFrame.querySelectorAll('.gv-remote-link-inner'),
          { opacity: 0.7, stroke: '#F26357', duration: 0.35 },
          0,
        )
        .to(
          gvFrame.querySelectorAll('.gv-gate'),
          { opacity: 1, scale: 1, transformOrigin: '50% 50%', duration: 0.38, ease: 'power3.out' },
          0.08,
        )
        .to(
          gvFrame.querySelectorAll('.gv-anomaly-halo'),
          { autoAlpha: 1, scale: 1, transformOrigin: '50% 50%', duration: 0.55 },
          0.16,
        )
        .to(
          gvFrame.querySelectorAll('.gv-anomaly-rings'),
          { autoAlpha: 1, scale: 1, transformOrigin: '50% 50%', duration: 0.48 },
          0.18,
        )
        .to(gvFrame.querySelectorAll('.gv-anomaly-core-ring'), { stroke: '#F26357', duration: 0.32 }, 0.16)
        .to(gvFrame.querySelectorAll('.gv-anomaly-core-dot'), { fill: '#F26357', duration: 0.32 }, 0.16)
        .to(gvFrame.querySelectorAll('.gv-anomaly-badge'), { stroke: '#F26357', duration: 0.32 }, 0.16)
        .to(gvFrame.querySelectorAll('.gv-anomaly-title'), { fill: '#F26357', duration: 0.32 }, 0.16)
        .to(gvFrame.querySelectorAll('.gv-anomaly-state-label'), { fill: '#B8A990', duration: 0.32 }, 0.16);
    } else {
      tl.to(gvFrame.querySelectorAll('.gv-anomaly-rings'), { autoAlpha: 0, scale: 0.8, transformOrigin: '50% 50%', duration: 0.32 }, 0)
        .to(gvFrame.querySelectorAll('.gv-anomaly-halo'), { autoAlpha: 0, scale: 0.75, transformOrigin: '50% 50%', duration: 0.35 }, 0)
        .to(gvFrame.querySelectorAll('.gv-gate'), { opacity: 0.22, scale: 0.72, transformOrigin: '50% 50%', duration: 0.35 }, 0.05)
        .to(gvFrame.querySelectorAll('.gv-remote-link-outer'), { opacity: 0.9, duration: 0.35 }, 0.08)
        .to(
          gvFrame.querySelectorAll('.gv-remote-link-inner'),
          { opacity: 0.45, stroke: '#CFE3E0', duration: 0.35 },
          0.08,
        )
        .to(gvFrame.querySelectorAll('.gv-anomaly-core-ring'), { stroke: '#CFE3E0', duration: 0.3 }, 0.08)
        .to(gvFrame.querySelectorAll('.gv-anomaly-core-dot'), { fill: '#CFE3E0', duration: 0.3 }, 0.08)
        .to(gvFrame.querySelectorAll('.gv-anomaly-badge'), { stroke: '#3A2F27', duration: 0.3 }, 0.08)
        .to(gvFrame.querySelectorAll('.gv-anomaly-title'), { fill: '#EDE4D3', duration: 0.3 }, 0.08)
        .to(gvFrame.querySelectorAll('.gv-anomaly-state-label'), { fill: '#CFE3E0', duration: 0.3 }, 0.08);
    }
  };

  // 5. Reading depth management (Zero-flash initial sync + smooth GSAP toggle)
  let currentMode: ReadingMode =
    root.getAttribute('data-reading-mode') === 'quick' ? 'quick' : 'deep';
  let reduceMotionActive = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let deepBatchCreated = false;

  const updateDepthButtonsAndStorage = (mode: ReadingMode, persist = true) => {
    currentMode = mode;
    root.setAttribute('data-reading-mode', mode);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        // Ignore storage access restrictions
      }
    }
    depthButtons.forEach((btn) => {
      const active = btn.getAttribute('data-depth-choice') === mode;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const scrollToTarget = (targetId: string | null) => {
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: reduceMotionActive ? 'auto' : 'smooth' });
    }
  };

  const createBatchFor = (elements: HTMLElement[]) => {
    const belowFold: HTMLElement[] = [];
    const threshold = window.innerHeight * 0.9;

    elements.forEach((el) => {
      if (el.getBoundingClientRect().top > threshold) {
        belowFold.push(el);
      } else {
        gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' });
      }
    });

    if (belowFold.length === 0) return;

    gsap.set(belowFold, { autoAlpha: 0, y: 14 });
    ScrollTrigger.batch(belowFold, {
      interval: 0.08,
      batchMax: 6,
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          overwrite: true,
          clearProps: 'transform,opacity,visibility',
        });
      },
    });
  };

  const setModeImmediate = (mode: ReadingMode, persist = true) => {
    updateDepthButtonsAndStorage(mode, persist);
    deepSections.forEach((sec) => {
      gsap.killTweensOf(sec);
      sec.toggleAttribute('hidden', mode === 'quick');
      gsap.set(sec, { clearProps: 'all' });
    });
    if (quickNotice) {
      gsap.killTweensOf(quickNotice);
      gsap.set(quickNotice, { clearProps: 'all' });
    }
  };

  // Apply initial reading mode immediately before any animations (preserve saved quick mode on #src-XX override)
  const hasSourceHash = /^#src-\d+$/i.test(window.location.hash || '');
  setModeImmediate(currentMode, !hasSourceHash);

  const setReadingMode = (nextMode: ReadingMode, targetId: string | null) => {
    if (nextMode === currentMode) {
      scrollToTarget(targetId);
      return;
    }

    if (reduceMotionActive || deepSections.length === 0) {
      setModeImmediate(nextMode);
      ScrollTrigger.refresh();
      scrollToTarget(targetId);
      return;
    }

    gsap.killTweensOf([...deepSections, quickNotice].filter(Boolean));

    if (nextMode === 'quick') {
      updateDepthButtonsAndStorage('quick');
      gsap.to(deepSections, {
        autoAlpha: 0,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          deepSections.forEach((sec) => {
            sec.setAttribute('hidden', '');
            gsap.set(sec, { clearProps: 'all' });
          });
          if (quickNotice) {
            gsap.fromTo(
              quickNotice,
              { autoAlpha: 0, y: 8 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.28,
                ease: 'power2.out',
                clearProps: 'transform,opacity,visibility',
              },
            );
          }
          ScrollTrigger.refresh();
          scrollToTarget(targetId);
        },
      });
    } else {
      updateDepthButtonsAndStorage('deep');
      deepSections.forEach((sec) => {
        sec.removeAttribute('hidden');
        sec.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((child) => {
          gsap.set(child, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' });
        });
      });

      gsap.fromTo(
        deepSections,
        { autoAlpha: 0, height: 0, overflow: 'hidden' },
        {
          autoAlpha: 1,
          height: 'auto',
          duration: 0.38,
          ease: 'power2.out',
          clearProps: 'height,overflow,opacity,visibility',
          onComplete: () => {
            if (!deepBatchCreated) {
              deepBatchCreated = true;
            }
            ScrollTrigger.refresh();
            scrollToTarget(targetId);
          },
        },
      );
    }
  };

  depthButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice: ReadingMode = btn.getAttribute('data-depth-choice') === 'quick' ? 'quick' : 'deep';
      setReadingMode(choice, null);
    });
  });

  depthActionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice: ReadingMode = btn.getAttribute('data-set-depth') === 'quick' ? 'quick' : 'deep';
      const targetId = btn.getAttribute('data-scroll-target');
      setReadingMode(choice, targetId);
    });
  });

  if (gvToggle) {
    gvToggle.addEventListener('click', () => {
      userToggledGrid = true;
      const next: GridState = currentGridState === 'isolated' ? 'nominal' : 'isolated';
      applyGridVisual(next, reduceMotionActive);
    });
  }

  // 6. Outbound short page fade (~0.16s) for internal same-origin navigation
  document.addEventListener('click', (evt) => {
    if (reduceMotionActive || !mainEl) return;
    if (evt.defaultPrevented || evt.button !== 0) return;
    if (evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey) return;

    const target = evt.target as Element | null;
    const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const rawHref = anchor.getAttribute('href') || '';
    if (!rawHref || rawHref.startsWith('#') || anchor.hasAttribute('download')) return;
    if (anchor.target && anchor.target !== '_self') return;

    let dest: URL;
    try {
      dest = new URL(anchor.href, window.location.href);
    } catch {
      return;
    }

    if (dest.origin !== window.location.origin) return;
    if (dest.protocol !== 'http:' && dest.protocol !== 'https:') return;
    if (dest.pathname === window.location.pathname && dest.search === window.location.search && dest.hash) {
      return;
    }

    evt.preventDefault();
    gsap.to(mainEl, {
      opacity: 0,
      duration: 0.16,
      ease: 'power1.in',
      onComplete: () => {
        window.location.href = dest.href;
      },
    });
  });

  // 7. GSAP matchMedia: strictly isolate reduced motion vs animated responsive behaviors
  const mm = gsap.matchMedia();

  mm.add(
    {
      reduceMotion: '(prefers-reduced-motion: reduce)',
      isDesktop: '(min-width: 721px)',
      isMobile: '(max-width: 720px)',
    },
    (context) => {
      const { reduceMotion, isMobile } = context.conditions as {
        reduceMotion: boolean;
        isDesktop: boolean;
        isMobile: boolean;
      };
      reduceMotionActive = reduceMotion;

      if (reduceMotion) {
        if (mainEl) {
          gsap.set(mainEl, { autoAlpha: 1, clearProps: 'opacity,visibility,transform' });
        }
        document.querySelectorAll<HTMLElement>(`${HERO_SELECTOR}, ${REVEAL_SELECTOR}`).forEach((el) => {
          gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' });
        });
        if (gvFrame) {
          gvFrame.removeAttribute('data-motion-managed');
          updateGridSemantics('isolated');
          gsap.set(
            gvFrame.querySelectorAll(
              '.gv-gate, .gv-remote-link-outer, .gv-remote-link-inner, .gv-anomaly-halo, .gv-anomaly-rings, .gv-anomaly-core-ring, .gv-anomaly-core-dot, .gv-anomaly-badge, .gv-anomaly-title, .gv-anomaly-state-label',
            ),
            { clearProps: 'all' },
          );
        }
        return;
      }

      // Page entry settle (~0.24s)
      if (mainEl) {
        gsap.fromTo(
          mainEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.24, ease: 'power2.out', clearProps: 'opacity' },
        );
      }

      // Gentle above-the-fold hero entrance
      const heroTargets = Array.from(document.querySelectorAll<HTMLElement>(HERO_SELECTOR));
      if (heroTargets.length > 0) {
        gsap.from(heroTargets, {
          autoAlpha: 0,
          y: 12,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        });
      }

      // GridVisual: start nominal above the fold, transition once on scroll into isolated state
      if (gvFrame) {
        gvFrame.setAttribute('data-motion-managed', 'true');
        if (!userToggledGrid && !hasScrollIsolated) {
          applyGridVisual('nominal', true);
        }

        ScrollTrigger.create({
          trigger: isMobile ? gvFrame : '.page-header',
          start: isMobile ? 'top 36%' : 'top -48px',
          once: true,
          onEnter: () => {
            if (!userToggledGrid && !hasScrollIsolated && currentGridState !== 'isolated') {
              hasScrollIsolated = true;
              applyGridVisual('isolated', false);
            }
          },
        });
      }

      // Scroll reveals for visible (non-hidden) sections
      const visibleReveals = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
        (el) => !el.closest('[hidden]'),
      );
      createBatchFor(visibleReveals);
      if (currentMode === 'deep') {
        deepBatchCreated = true;
      }

      return () => {
        activeGridTl?.kill();
        if (gvFrame) {
          gvFrame.removeAttribute('data-motion-managed');
        }
      };
    },
  );

  // 8. Ensure citation anchor targets (#src-XX) expand Deep Dive cleanly & remain visible/focusable
  const ensureSourceHashVisible = (behavior: ScrollBehavior = 'auto') => {
    const hash = window.location.hash || '';
    if (!/^#src-\d+$/i.test(hash)) return;
    const targetEl = document.getElementById(hash.slice(1));
    if (!targetEl) return;

    if (currentMode === 'quick') {
      setModeImmediate('deep', false);
      document
        .querySelectorAll<HTMLElement>(`${HERO_SELECTOR}, ${REVEAL_SELECTOR}`)
        .forEach((el) => gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' }));
    }

    gsap.set(targetEl, { autoAlpha: 1, y: 0, clearProps: 'transform,opacity,visibility' });
    targetEl.scrollIntoView({ behavior, block: 'start' });
    targetEl.focus({ preventScroll: true });
    ScrollTrigger.refresh();
  };

  if (hasSourceHash) {
    ensureSourceHashVisible('auto');
  }
  window.addEventListener('hashchange', () =>
    ensureSourceHashVisible(reduceMotionActive ? 'auto' : 'smooth'),
  );
}

initMotionSite();
