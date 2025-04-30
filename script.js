let hs = 10;
let ht = 5;
let m = 10;
let k = 300;
let c = 50;
let g = 9.80665;
let N = 1000;
let dt = 0.01;

let x = hs;
let v = 0;

let btn = document.querySelector('[class="start"]');
let labelhs = document.getElementById("hs");
let labelht = document.getElementById("ht");
let labelm = document.getElementById("m");
let labelk = document.getElementById("k");
let labelc = document.getElementById("c");
let trampo = document.querySelector('[class="trampo"]');
let point = document.querySelector('[class="point"]');
let sol = document.querySelector('[class="sol"]');

function distanceToPixel(distance){
    return 500 - 500*distance/hs;
}

btn.addEventListener('click', ()=>{
    console.log("Coucou");
    hs = parseFloat(labelhs.value);
    ht = parseFloat(labelht.value);
    m = parseFloat(labelm.value);
    k = parseFloat(labelk.value);
    c = parseFloat(labelc.value);

    let x = hs;
    let v = 0;
    let a = -g;

    let nouveauTrampo = Math.round(distanceToPixel(ht));
    trampo.style.top = `${nouveauTrampo}px`;
    let nouveauSol = Math.round(distanceToPixel(0));
    sol.style.top = `${nouveauSol}px`;

    let count = 0;
    const interval = setInterval(()=>{
        if (x>ht){
            console.log(x)
            x = x + dt*v + a*dt*dt/2;
            a = -g;
            v = v + dt*a;

            let nouveauX = Math.round(distanceToPixel(x));
            point.style.top = `${nouveauX}px`;

        };
        if (x<=ht){
            Force = -m*g - k*(x-ht) - v*c;
            v += Force/m *dt;
            x += v*dt;

            let nouveauX = Math.round(distanceToPixel(x));
            point.style.top = `${nouveauX}px`;
        };

        count++;
        if (count===N){
            clearInterval(interval);
        }
    }, 10);


})