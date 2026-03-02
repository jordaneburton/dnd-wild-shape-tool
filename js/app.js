// Beast data: name, CR (numeric), HP, AC, speed description, fly (bool), swim (bool)
const BEASTS = [
    // CR 0
    { name: "Cat",              cr: 0,     hp: 2,   ac: 12, speed: "40 ft.",                      fly: false, swim: false },
    { name: "Frog",             cr: 0,     hp: 1,   ac: 11, speed: "20 ft., swim 20 ft.",          fly: false, swim: true  },
    { name: "Rat",              cr: 0,     hp: 1,   ac: 10, speed: "20 ft.",                       fly: false, swim: false },
    // CR 1/8
    { name: "Blood Hawk",       cr: 0.125, hp: 7,   ac: 12, speed: "10 ft., fly 60 ft.",           fly: true,  swim: false },
    { name: "Giant Rat",        cr: 0.125, hp: 7,   ac: 12, speed: "30 ft.",                       fly: false, swim: false },
    { name: "Mastiff",          cr: 0.125, hp: 5,   ac: 12, speed: "40 ft.",                       fly: false, swim: false },
    { name: "Poisonous Snake",  cr: 0.125, hp: 2,   ac: 13, speed: "30 ft., swim 30 ft.",          fly: false, swim: true  },
    // CR 1/4
    { name: "Ape",              cr: 0.25,  hp: 19,  ac: 12, speed: "30 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Boar",             cr: 0.25,  hp: 11,  ac: 11, speed: "40 ft.",                       fly: false, swim: false },
    { name: "Constrictor Snake",cr: 0.25,  hp: 13,  ac: 12, speed: "30 ft., swim 30 ft.",          fly: false, swim: true  },
    { name: "Elk",              cr: 0.25,  hp: 13,  ac: 10, speed: "50 ft.",                       fly: false, swim: false },
    { name: "Giant Badger",     cr: 0.25,  hp: 13,  ac: 10, speed: "30 ft., burrow 10 ft.",        fly: false, swim: false },
    { name: "Giant Centipede",  cr: 0.25,  hp: 4,   ac: 13, speed: "30 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Giant Frog",       cr: 0.25,  hp: 18,  ac: 11, speed: "30 ft., swim 30 ft.",          fly: false, swim: true  },
    { name: "Giant Lizard",     cr: 0.25,  hp: 19,  ac: 12, speed: "30 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Giant Owl",        cr: 0.25,  hp: 19,  ac: 11, speed: "5 ft., fly 60 ft.",            fly: true,  swim: false },
    { name: "Giant Wolf Spider",cr: 0.25,  hp: 11,  ac: 13, speed: "40 ft., climb 40 ft.",         fly: false, swim: false },
    { name: "Panther",          cr: 0.25,  hp: 13,  ac: 12, speed: "50 ft., climb 40 ft.",         fly: false, swim: false },
    { name: "Pteranodon",       cr: 0.25,  hp: 13,  ac: 13, speed: "10 ft., fly 60 ft.",           fly: true,  swim: false },
    { name: "Wolf",             cr: 0.25,  hp: 11,  ac: 13, speed: "40 ft.",                       fly: false, swim: false },
    // CR 1/2
    { name: "Black Bear",       cr: 0.5,   hp: 19,  ac: 11, speed: "40 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Crocodile",        cr: 0.5,   hp: 19,  ac: 12, speed: "20 ft., swim 30 ft.",          fly: false, swim: true  },
    { name: "Giant Goat",       cr: 0.5,   hp: 19,  ac: 11, speed: "40 ft.",                       fly: false, swim: false },
    { name: "Giant Wasp",       cr: 0.5,   hp: 13,  ac: 12, speed: "10 ft., fly 50 ft.",           fly: true,  swim: false },
    { name: "Reef Shark",       cr: 0.5,   hp: 22,  ac: 12, speed: "swim 40 ft.",                  fly: false, swim: true  },
    { name: "Warhorse",         cr: 0.5,   hp: 19,  ac: 11, speed: "60 ft.",                       fly: false, swim: false },
    // CR 1
    { name: "Brown Bear",       cr: 1,     hp: 34,  ac: 11, speed: "40 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Dire Wolf",        cr: 1,     hp: 37,  ac: 14, speed: "50 ft.",                       fly: false, swim: false },
    { name: "Giant Eagle",      cr: 1,     hp: 26,  ac: 13, speed: "10 ft., fly 80 ft.",           fly: true,  swim: false },
    { name: "Giant Hyena",      cr: 1,     hp: 45,  ac: 12, speed: "50 ft.",                       fly: false, swim: false },
    { name: "Giant Octopus",    cr: 1,     hp: 52,  ac: 11, speed: "10 ft., swim 60 ft.",          fly: false, swim: true  },
    { name: "Giant Spider",     cr: 1,     hp: 26,  ac: 14, speed: "30 ft., climb 30 ft.",         fly: false, swim: false },
    { name: "Giant Toad",       cr: 1,     hp: 39,  ac: 11, speed: "20 ft., swim 40 ft.",          fly: false, swim: true  },
    { name: "Giant Vulture",    cr: 1,     hp: 22,  ac: 10, speed: "10 ft., fly 60 ft.",           fly: true,  swim: false },
    { name: "Lion",             cr: 1,     hp: 26,  ac: 12, speed: "50 ft.",                       fly: false, swim: false },
    { name: "Tiger",            cr: 1,     hp: 37,  ac: 12, speed: "40 ft.",                       fly: false, swim: false },
    // CR 2 (Moon Druid only at level 6+)
    { name: "Allosaurus",               cr: 2, hp: 51,  ac: 13, speed: "60 ft.",                   fly: false, swim: false },
    { name: "Giant Boar",               cr: 2, hp: 42,  ac: 12, speed: "40 ft.",                   fly: false, swim: false },
    { name: "Giant Constrictor Snake",  cr: 2, hp: 60,  ac: 12, speed: "30 ft., swim 30 ft.",      fly: false, swim: true  },
    { name: "Hunter Shark",             cr: 2, hp: 45,  ac: 12, speed: "swim 40 ft.",              fly: false, swim: true  },
    { name: "Plesiosaurus",             cr: 2, hp: 68,  ac: 13, speed: "20 ft., swim 40 ft.",      fly: false, swim: true  },
    { name: "Polar Bear",               cr: 2, hp: 42,  ac: 12, speed: "40 ft., swim 30 ft.",      fly: false, swim: true  },
    { name: "Rhinoceros",               cr: 2, hp: 45,  ac: 11, speed: "40 ft.",                   fly: false, swim: false },
    { name: "Saber-Toothed Tiger",      cr: 2, hp: 52,  ac: 12, speed: "40 ft.",                   fly: false, swim: false },
    // CR 3 (Moon Druid only at level 9+)
    { name: "Ankylosaurus",  cr: 3, hp: 68,  ac: 15, speed: "30 ft.",                              fly: false, swim: false },
    { name: "Giant Scorpion",cr: 3, hp: 52,  ac: 15, speed: "40 ft.",                              fly: false, swim: false },
    { name: "Killer Whale",  cr: 3, hp: 90,  ac: 12, speed: "swim 60 ft.",                         fly: false, swim: true  },
    // CR 4 (Moon Druid only at level 12+)
    { name: "Elephant",      cr: 4, hp: 76,  ac: 12, speed: "40 ft.",                              fly: false, swim: false },
    { name: "Stegosaurus",   cr: 4, hp: 76,  ac: 13, speed: "40 ft.",                              fly: false, swim: false },
    // CR 5 (Moon Druid only at level 15+)
    { name: "Giant Crocodile",cr: 5, hp: 114, ac: 14, speed: "30 ft., swim 50 ft.",                fly: false, swim: true  },
    { name: "Giant Shark",    cr: 5, hp: 126, ac: 13, speed: "swim 50 ft.",                        fly: false, swim: true  },
    { name: "Triceratops",    cr: 5, hp: 114, ac: 13, speed: "50 ft.",                             fly: false, swim: false },
    // CR 6 (Moon Druid only at level 18+)
    { name: "Mammoth",        cr: 6, hp: 126, ac: 13, speed: "40 ft.",                             fly: false, swim: false },
];

// ── State ────────────────────────────────────────────────────────────────────
let state = {
    level: 2,
    circle: "land",
    maxUses: 2,
    usesRemaining: 2,
};

// ── Rules ────────────────────────────────────────────────────────────────────
function getMaxCR(level, circle) {
    if (circle === "moon") {
        return Math.max(1, Math.floor(level / 3));
    }
    if (level >= 8) return 1;
    if (level >= 4) return 0.5;
    return 0.25;
}

function canUseSwim(level) { return level >= 4; }
function canUseFly(level)  { return level >= 8; }

function isBeastAvailable(beast, level, circle) {
    const maxCR = getMaxCR(level, circle);
    if (beast.cr > maxCR) return false;
    if (beast.swim && !canUseSwim(level)) return false;
    if (beast.fly  && !canUseFly(level))  return false;
    return true;
}

// ── Formatting helpers ───────────────────────────────────────────────────────
function formatCR(cr) {
    if (cr === 0)     return "0";
    if (cr === 0.125) return "1/8";
    if (cr === 0.25)  return "1/4";
    if (cr === 0.5)   return "1/2";
    return cr.toString();
}

// ── Render: Wild Shape uses ──────────────────────────────────────────────────
function renderUses() {
    const display = document.getElementById("usesDisplay");
    const text    = document.getElementById("usesText");
    const useBtn  = document.getElementById("useBtn");

    display.innerHTML = "";
    for (let i = 0; i < state.maxUses; i++) {
        const div = document.createElement("div");
        div.className = "use-pip" + (i < state.usesRemaining ? " available" : " used");
        div.innerHTML = i < state.usesRemaining
            ? '<i class="bi bi-circle-fill"></i>'
            : '<i class="bi bi-circle"></i>';
        display.appendChild(div);
    }

    text.textContent = `${state.usesRemaining} / ${state.maxUses} uses remaining`;
    useBtn.disabled = state.usesRemaining === 0;
}

// ── Render: Current limits info ──────────────────────────────────────────────
function renderLimits() {
    const list   = document.getElementById("limitsList");
    const { level, circle } = state;
    const maxCR  = getMaxCR(level, circle);

    const swimOk = canUseSwim(level);
    const flyOk  = canUseFly(level);

    list.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Max CR
            <span class="badge bg-success rounded-pill">CR ${formatCR(maxCR)}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Swimming Speed
            ${swimOk
                ? '<span class="badge bg-success rounded-pill"><i class="bi bi-check-lg"></i> Allowed</span>'
                : '<span class="badge bg-danger rounded-pill"><i class="bi bi-x-lg"></i> Not yet</span>'}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Flying Speed
            ${flyOk
                ? '<span class="badge bg-success rounded-pill"><i class="bi bi-check-lg"></i> Allowed</span>'
                : '<span class="badge bg-danger rounded-pill"><i class="bi bi-x-lg"></i> Not yet</span>'}
        </li>`;
}

// ── Render: Beast table ──────────────────────────────────────────────────────
function renderBeasts() {
    const showOnly = document.getElementById("showOnlyAvailable").checked;
    const search   = document.getElementById("searchInput").value.toLowerCase().trim();
    const tbody    = document.getElementById("beastTableBody");
    const countBadge = document.getElementById("formCount");

    const { level, circle } = state;
    let availableCount = 0;
    let rows = "";

    BEASTS.forEach(beast => {
        const available = isBeastAvailable(beast, level, circle);
        const matchesSearch = !search || beast.name.toLowerCase().includes(search);

        if (showOnly && !available) return;
        if (!matchesSearch) return;

        if (available) availableCount++;

        const moveBadges = [
            beast.fly  ? '<span class="badge bg-primary me-1" title="Flying speed"><i class="bi bi-wind"></i> Fly</span>' : "",
            beast.swim ? '<span class="badge bg-info text-dark me-1" title="Swimming speed"><i class="bi bi-water"></i> Swim</span>' : "",
        ].join("");

        const statusBadge = available
            ? '<span class="badge bg-success">Available</span>'
            : `<span class="badge bg-secondary" title="${beast.cr > getMaxCR(level, circle) ? 'CR too high' : 'Movement restriction'}">Restricted</span>`;

        rows += `
            <tr class="${available ? "" : "table-secondary text-muted"}">
                <td class="fw-semibold">${beast.name}</td>
                <td><span class="badge bg-dark">CR ${formatCR(beast.cr)}</span></td>
                <td>${beast.hp}</td>
                <td>${beast.ac}</td>
                <td class="small">${beast.speed}</td>
                <td>${moveBadges || '<span class="text-muted">—</span>'}</td>
                <td>${statusBadge}</td>
            </tr>`;
    });

    tbody.innerHTML = rows || `<tr><td colspan="7" class="text-center text-muted py-3">No beasts match the current filters.</td></tr>`;
    countBadge.textContent = `${availableCount} available`;
}

// ── Render: Full page update ─────────────────────────────────────────────────
function render() {
    renderUses();
    renderLimits();
    renderBeasts();
}

// ── Actions ──────────────────────────────────────────────────────────────────
function useWildShape() {
    if (state.usesRemaining > 0) {
        state.usesRemaining--;
        render();
    }
}

function shortRest() {
    state.usesRemaining = state.maxUses;
    render();
}

// ── Event Listeners ──────────────────────────────────────────────────────────
document.getElementById("levelRange").addEventListener("input", function () {
    state.level = parseInt(this.value, 10);
    document.getElementById("levelBadge").textContent = this.value;
    // Restore uses when level changes (simplification)
    state.usesRemaining = state.maxUses;
    render();
});

document.getElementById("circleSelect").addEventListener("change", function () {
    state.circle = this.value;
    state.usesRemaining = state.maxUses;
    render();
});

document.getElementById("showOnlyAvailable").addEventListener("change", renderBeasts);
document.getElementById("searchInput").addEventListener("input", renderBeasts);

// ── Boot ─────────────────────────────────────────────────────────────────────
render();
