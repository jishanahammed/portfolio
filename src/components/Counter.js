import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const counters = [
    { value: 30, suffix: '', label: 'Projects Completed' },
    { value: 20, suffix: '', label: 'Happy Clients' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 5, suffix: '+', label: 'Years Experience' },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const sectionRef = useRef(null);
  const timers = useRef([]);

  const animateCount = (start, end, index) => {
    if (timers.current[index]) clearInterval(timers.current[index]);

    const duration = 2000; // Animation duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));
    let current = start;
    const increment = end > start ? 1 : -1;

    timers.current[index] = setInterval(() => {
      current += increment;

      // If the next step will exceed the target value, stop at the target
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timers.current[index]);
      }

      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = current;
        return newCounts;
      });
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter, index) => animateCount(0, counter.value, index));
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      timers.current.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <section ref={sectionRef} className="counter py-16  dark:bg-gray-900 ">
      <div className="container max-w-7xl mx-auto px-4 bg-blue-500 dark:bg-gray-900  py-10 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="single-counter text-center bg-white dark:bg-gray-900 dark:border dark:border-gray-100 shadow-md p-8 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-4xl font-bold text-indigo-600 dark:text-white">
                {counts[index]}
                <span className="text-2xl">{counter.suffix}</span>
              </h4>
              <p className="mt-4 text-gray-600 dark:text-gray-50">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
