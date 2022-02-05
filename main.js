const testButton = document.getElementById("test-button");
const testAnchor = document.getElementById("test-anchor");
const testDivision = document.getElementById("test-division");

function buttonAlert() {
    alert("Button Clicked")
};

function anchorAlert() {
    alert("Button Clicked")
};

function divisionAlert() {
    alert("Button Clicked")
};

testButton.addEventListener('click', buttonAlert);
testAnchor.addEventListener('click', anchorAlert);
testDivision.addEventListener('click', divisionAlert);