import { useEffect, useRef } from 'react';
export function useTimer(props) {
    const { remove, id, duration = 2000 } = props;
    const timer = useRef(null);
    const startTimer = () => {
        timer.current = window.setTimeout(() => {
            remove(id);
            removeTimer();
        }, duration);
    };
    const removeTimer = () => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
    };
    useEffect(() => {
        startTimer();
        return () => removeTimer();
    }, []);
    const onMouseEnter = () => {
        removeTimer();
    };
    const onMouseLeave = () => {
        startTimer();
    };
    return {
        onMouseEnter,
        onMouseLeave,
    };
}
