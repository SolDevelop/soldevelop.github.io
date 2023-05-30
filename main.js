var ᵗ = document.getElementById('theme-toggle-light');
var ᵈ = document.getElementById('theme-toggle-dark');
ᵗ.addEventListener('click', function () {
    var ᵈⁱˢᵃʳᵈ = document.getElementById("setter");
    ᵈⁱˢᵃʳᵈ.classList.remove("dark");
    var ᵖˡᵃʸᵉʳ = document.getElementById("embedPlayer");
    ᵖˡᵃʸᵉʳ.setAttribute("src", "https://embed.music.apple.com/eg/playlist/trip-playlist/pl.u-GgA5eqgTo7lgjqv?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light");
})
ᵈ.addEventListener('click', function () {
    var ᵈⁱˢᵃʳᵈ = document.getElementById("setter");
    ᵈⁱˢᵃʳᵈ.classList.add("dark");
    var ᵖˡᵃʸᵉʳ = document.getElementById("embedPlayer");
    ᵖˡᵃʸᵉʳ.setAttribute("src", "https://embed.music.apple.com/eg/playlist/trip-playlist/pl.u-GgA5eqgTo7lgjqv?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark");

})
var ₓ = JSON.parse(data);
document.getElementById("celebration").innerHTML = ₓ.name;
var ₛ = new Date(ₓ.tilldate).getTime();

var 𝔁 = setInterval(function() {
  var 𝔫 = new Date().getTime();
  var ₔ = ₛ - 𝔫;
  var ᵈₐʸₛ = Math.floor(ₔ / (1000 * 60 * 60 * 24));
  var ₕₒᵤᵣₛ = Math.floor((ₔ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var ʳₑₘₐᵢₙᵢₙgₕₒᵤᵣₛ = ₕₒᵤᵣₛ + (ᵈₐʸₛ * 24);
  var ₘᵢₙᵤₜₑₛ = Math.floor((ₔ % (1000 * 60 * 60)) / (1000 * 60));
  var ₛₑcₒₙdₛ = Math.floor((ₔ % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = ʳₑₘₐᵢₙᵢₙgₕₒᵤᵣₛ + ":" + ₘᵢₙᵤₜₑₛ + ":" + ₛₑcₒₙdₛ;
  if (ₔ < 0) {
    clearInterval(𝔁);
    document.getElementById("timer").innerHTML = "IT'S OVER";
  }
}, 1000);
