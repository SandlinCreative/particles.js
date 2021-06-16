/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
const t = true;
const f = false;


var clearScreen = true,
    number = 60,
    size = 1,
    color = "#ffffff",
    opacity = 1,
    tails = 100,

    speed = .01,

    maxDist = 600,
    rotation = 2,

    densityON = f,
    denseVal = 200,

    showLink = false,
    lineThickness = 1,
    lineOpacity = 1,
    collide = false;



var pj = particlesJS('particles-js',

    {
        "clearScreen": {
            "value": clearScreen
        },
        "particles": {
            "number": {
                "value": number,
                "density": {
                    "enable": densityON,
                    "value_area": denseVal
                }
            },
            "color": {
                "value": color
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": lineThickness,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": opacity,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": size,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": showLink,
                "distance": maxDist,
                "color": "#ffffff",
                "opacity": lineOpacity,
                "width": lineThickness
            },
            "move": {
                "enable": true,
                "speed": speed,
                "direction": "none",
                "random": false,
                "straight": false,
                "bounce": collide,
                "out_mode": "bounce",
                "tails": tails,
                "attract": {
                    "enable": true,
                    "rotateX": rotation,
                    "rotateY": rotation
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": true,
            "background_color": "#373737",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);



