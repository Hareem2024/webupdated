// Typing animation
const phrases = ["create", "design", "develop"];
let index = 0;
let currentPhrase = '';
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const pauseBetween = 1000;

function type() {
    if (letterIndex < phrases[index].length) {
        currentPhrase += phrases[index].charAt(letterIndex);
        letterIndex++;
        document.getElementById("dynamic-text").innerText = currentPhrase;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetween);
    }
}

function deleteText() {
    if (letterIndex > 0) {
        currentPhrase = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
        document.getElementById("dynamic-text").innerText = currentPhrase;
        setTimeout(deleteText, erasingSpeed);
    } else {
        index = (index + 1) % phrases.length;
        setTimeout(type, typingSpeed + 1000);
    }
}

// Start typing animation
type();

// Fractal Tree Sketch
new p5(function(p) {
    let angle;

    p.setup = function() {
        const canvas = p.createCanvas(400, 400);
        canvas.parent('fractal-tree');
        angle = p.PI / 4;
        p.stroke('#BDC4D4');
    };

    p.draw = function() {
        p.clear();
        p.translate(200, p.height);
        angle = p.map(p.sin(p.frameCount * 0.01), -1, 1, p.PI / 2, p.PI / 16);
        branch(100);
    };

    function branch(len) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
        if (len > 4) {
            p.push();
            p.rotate(angle);
            branch(len * 0.67);
            p.pop();
            p.push();
            p.rotate(-angle);
            branch(len * 0.67);
            p.pop();
        }
    }
}); 