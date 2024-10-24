import React, { useState, useEffect, useRef } from 'react';
import './PerformanceCount.css';
import CountUp from 'react-countup';

const PerformanceCount = () => {
    const [isVisible, setIsVisible] = useState(false);
    const countSectionRef = useRef(null);

    const performanceCount = [
        { count: 30772, title: 'WorkHours' },
        { count: 234, title: 'Projects' },
        { count: 132, title: 'Clients' },
        { count: 7, title: 'Partners' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it's visible
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
        );
        
        if (countSectionRef.current) {
            observer.observe(countSectionRef.current);
        }

        return () => {
            if (countSectionRef.current) {
                observer.unobserve(countSectionRef.current);
            }
        };
    }, []);

    return (
        <div className="performance-count-main-section" ref={countSectionRef}>
            <div className="performance-count-inner">
                {performanceCount.map((items, index) => (
                    <div
                        key={index}
                        className={(items.title === "Projects" || items.title === "Partners") ? 'performance-count-containt active' : 'performance-count-containt'}
                    >
                        <h3>
                            {isVisible && <CountUp end={items.count} />}
                            +
                        </h3>
                        <p>{items.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceCount;
