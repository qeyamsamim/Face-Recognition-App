const particlesConfig = {
    fpsLimit: 120,
    // interactivity: {
    //     events: {
    //         onClick: {
    //             enable: true,
    //             mode: "push",
    //         },
    //         onHover: {
    //             enable: true,
    //             mode: "repulse",
    //         },
    //         resize: true,
    //     },
    //     modes: {
    //         push: {
    //             quantity: 4,
    //         },
    //         repulse: {
    //             distance: 200,
    //             duration: 0.4,
    //         },
    //     },
    // },
    particles: {
        color: {
            value: "#00c200",
        },
        links: {
            color: "#00c200",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 150,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 2,
        },
    },
    detectRetina: true,
}

export default particlesConfig