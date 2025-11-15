import React, { useEffect, useRef } from 'react';

const StarCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const stars = [];
        const numberOfStars = 50;
        const speed = 2;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars.length = 0; // Clear stars array on resize
            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 2,
                    isComet: Math.random() < 0.1,
                    trail: [],
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            
            stars.forEach((star) => {
                if (star.isComet) {
                    // ... (Paste your comet drawing logic here) ...
                }
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, true);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        };

        const updateStars = () => {
            stars.forEach((star) => {
                if (star.isComet) {
                    star.x += speed + 2;
                    if (star.x > canvas.width + star.radius) {
                        star.x = -star.radius;
                        star.y = Math.random() * canvas.height;
                        star.trail = [];
                    }
                } else {
                    star.x += speed;
                    if (star.x > canvas.width + star.radius) {
                        star.x = -star.radius;
                        star.y = Math.random() * canvas.height;
                    }
                }
            });
        };

        let animationFrameId;
        const animate = () => {
            drawStars();
            updateStars();
            animationFrameId = requestAnimationFrame(animate);
        };

        const init = () => {
            resizeCanvas();
            createStars();
            animate();
        };

        window.addEventListener("resize", init);
        init();

        // Cleanup function
        return () => {
            window.removeEventListener("resize", init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array ensures this runs once

    return <canvas id="starCanvas" ref={canvasRef}></canvas>;
};

export default StarCanvas;