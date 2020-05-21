require("arrive");
import {
    gsap
} from "gsap"; {
    const body = document.body;
    const docEl = document.documentElement;
    const charming = require('charming');
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1),
            b = y1 - m * x1;
        return m * currentVal + b;
    };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const distance = (x1, x2, y1, y2) => {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.hypot(a, b);
    };

    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {
            x: posx,
            y: posy
        }
    }

    let winsize;
    const calcWinsize = () => winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    // const feDisplacementMapEl = document.querySelector('feDisplacementMap');

    class Profile {
        constructor() {
            this.DOM = {
                svg: document.querySelector('svg.p'),
                menu: document.querySelector('span.typewriter')
            };
            this.DOM.imgs = [...this.DOM.svg.querySelectorAll('g > image')];
            this.DOM.menuLinks = [...this.DOM.menu.querySelectorAll('#p__link')];
            console.log(this.DOM.menuLinks)
            this.mousePos = {
                x: winsize.width / 2,
                y: winsize.height / 2
            };
            this.lastMousePos = {
                translation: {
                    x: winsize.width / 2,
                    y: winsize.height / 2
                },
                displacement: {
                    x: 0,
                    y: 0
                }
            };
            this.dmScale = 0;

            this.current = -1;

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));

            this.DOM.menuLinks.forEach((item, pos) => {
                charming(item);
                const letters = [...item.querySelectorAll('span')];

                const mouseenterFn = () => {
                    this.current = pos;
                    console.log(this.DOM.imgs)
                    gsap.to(this.DOM.imgs[this.current], 0.5, {
                        ease: 'Quad.easeOut',
                        opacity: 1
                    });

                    gsap.staggerTo(letters, 0.2, {
                        ease: 'Sine.easeInOut',
                        y: this.lastMousePos.translation.x < this.mousePos.x ? 30 : -30,
                        startAt: {
                            opacity: 1,
                            y: 0
                        },
                        opacity: 0,
                        yoyo: true,
                        yoyoEase: 'Expo.easeOut',
                        repeat: 1,
                        stagger: {
                            grid: [1, letters.length - 1],
                            from: this.lastMousePos.translation.x < this.mousePos.x ? 'start' : 'end',
                            amount: 0.12
                        }
                    });
                };
                const mouseleaveFn = () => {
                    gsap.to(this.DOM.imgs[this.current], 0.5, {
                        ease: 'Quad.easeOut',
                        opacity: 0
                    });
                };
                item.addEventListener('mouseenter', mouseenterFn);
                item.addEventListener('mouseleave', mouseleaveFn);
            });
        }
        render() {
            this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.15);
            this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.15);
            this.DOM.svg.style.transform = `translateX(${(this.lastMousePos.translation.x-winsize.width/2)}px) translateY(${this.lastMousePos.translation.y-winsize.height/2}px)`;

            // Scale goes from 0 to 50 for mouseDistance values between 0 to 100
            this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.07);
            this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.07);
            const mouseDistance = distance(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y);
            this.dmScale = Math.min(lineEq(50, 0, 100, 0, mouseDistance), 50)
            // console.log(document.querySelector('feDisplacementMap').scale.baseVal)
            document.querySelector('feDisplacementMap').scale.baseVal = this.dmScale;

            requestAnimationFrame(() => this.render());
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        // var mutationObserver = new MutationObserver(function (mutations) {
        //     mutations.forEach(function (mutation) {
        //         // console.log(mutation && mutation.target && mutation.target.id);
        //         if (mutation && mutation.target && mutation.target.id === 'p__link') {
        //             console.log('Got you')
        //             new Profile();
        //         }
        //     });
        // });

        // mutationObserver.observe(document.querySelector('#p__link'), {
        //     attributes: true,
        //     characterData: true,
        //     childList: true,
        //     subtree: true,
        //     attributeOldValue: true,
        //     characterDataOldValue: true
        // });
        // mutationObserver.disconnect();

        document.getElementById("app").arrive(".header-wrapper", function () {
            // 'this' refers to the newly created element
            console.log('Shit')
        });
    });
    document.arrive("#p__link", function () {
        new Profile();
        // 'this' refers to the newly created element
    });

}