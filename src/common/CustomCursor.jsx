import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Add trail effect
            setTrail(prev => [...prev, {
                x: e.clientX,
                y: e.clientY,
                id: Date.now()
            }].slice(-15)); // Keep last 15 positions
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.classList.contains('hover') ||
                target.closest('a') ||
                target.closest('button');
            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Remove old trail points
    useEffect(() => {
        if (trail.length > 0) {
            const timer = setTimeout(() => {
                setTrail(prev => prev.slice(1));
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [trail]);

    return (
        <>
            {/* Trail effect */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className={styles.trail}
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        opacity: (index / trail.length) * 0.5,
                        transform: `scale(${0.3 + (index / trail.length) * 0.7})`
                    }}
                />
            ))}

            {/* Main cursor dot */}
            <div
                className={`${styles.cursor} ${isPointer ? styles.cursorPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />

            {/* Cursor ring */}
            <div
                className={`${styles.cursorRing} ${isPointer ? styles.cursorRingPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />

            {/* Glow effect */}
            <div
                className={`${styles.cursorGlow} ${isPointer ? styles.cursorGlowPointer : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
        </>
    );
}

export default CustomCursor;
