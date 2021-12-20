// Haptics when link is pressed or released
$("button, a", true).forEach(e => {
    // for each element in the array, add an event listener of the same name
    ["click","touchend"].forEach(event => {
        e.addEventListener(event, () => { navigator.vibrate(5) });
    });
});