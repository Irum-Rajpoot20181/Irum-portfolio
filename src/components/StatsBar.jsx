import { useEffect, useRef, useState } from "react";
import { Rocket, Clock, Users, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    iconColor: "#ffffff",
    bgColor: "#004a6a",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    iconColor: "#ffffff",
    bgColor: "#338c3a",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Happy Clients",
    iconColor: "#ffffff",
    bgColor: "#004a6a",
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    iconColor: "#ffffff",
    bgColor: "#338c3a",
  },
];

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime = null;
    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, iconColor, bgColor, active, index }) {
  const count = useCountUp(value, 1600, active);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(t);
  }, [active, index]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      className="flex flex-col items-center text-center group px-1.5 sm:px-2"
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center rounded-xl sm:rounded-2xl mb-3.5 sm:mb-4 lg:mb-5 w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          boxShadow: `0 8px 24px ${bgColor}55`,
        }}
      >
        <Icon
          className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          color={iconColor}
          strokeWidth={1.8}
        />
      </div>

      {/* Number + suffix */}
      <div className="flex items-baseline gap-0.5 mb-1 sm:mb-2">
        <span
          className="font-bold tracking-tight text-3xl sm:text-3xl lg:text-4xl"
          style={{ lineHeight: 1, color: "#004a6a" }}
        >
          {count}
        </span>
        <span
          className="font-bold text-xl sm:text-xl lg:text-2xl"
          style={{ lineHeight: 1, color: "#338c3a" }}
        >
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p
        className="text-xs sm:text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#94a3b8", letterSpacing: "0.08em" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-8 sm:gap-y-9 lg:gap-y-10">
          {stats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <StatCard {...stat} active={active} index={i} />

              {/* Divider — desktop only */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
                  style={{
                    width: 1,
                    height: 60,
                    background: "linear-gradient(180deg, transparent, #cbd5e1 50%, transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}