ServerEvents.recipes(event => {
    event.remove({ output: /integrated_simply_swords:iceandfire\/dragonsteel_ice\/.*/ });
    event.remove({ output: /integrated_simply_swords:iceandfire\/dragonsteel_fire\/.*/ });
    event.remove({ output: /integrated_simply_swords:iceandfire\/dragonsteel_lightning\/.*/ });
});