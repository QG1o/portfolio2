import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import styles from './ThemeTransition.module.css';

function ThemeTransition() {
    const { theme } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationOrigin, setAnimationOrigin] = useState({ x: 50, y: 50 });

    useEffect(() => {
        // Trigger animation on theme change
        setIsAnimating(true);

        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [theme]);

    // Listen for clicks on theme toggle button
    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target.closest('[data-theme-toggle]');
            if (target) {
                const rect = target.getBoundingClientRect();
                const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
                const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
                setAnimationOrigin({ x, y });
            }
        };

        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, []);

    if (!isAnimating) return null;

    return (
        <div className={styles.overlay}>
            <div
                className={styles.circle}
                style={{
                    left: `${animationOrigin.x}%`,
                    top: `${animationOrigin.y}%`,
                }}
            />
        </div>
    );
}

export default ThemeTransition;
