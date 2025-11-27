interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  variant: "green" | "orange" | "yellow" | "blue" | "purple";
  width?: "normal" | "small";
}

export default function StatsCard({
  value,
  label,
  icon,
  variant,
  width = "normal",
}: StatsCardProps) {
  const bgColors = {
    green: "rgba(0, 198, 44, 0.12)",
    orange: "rgba(255, 168, 46, 0.12)",
    yellow: "rgba(255, 192, 17, 0.20)",
    blue: "rgba(35, 107, 215, 0.20)",
    purple: "rgba(110, 27, 158, 0.20)",
  };

  const widthClass = width === "small" ? "lg:w-[199px]" : "lg:w-[294px]";

  return (
    <div
      className={`w-full ${widthClass} h-20 border border-[#EDEDED] rounded bg-white relative overflow-hidden shadow-sm`}
      style={{ opacity: 0.95 }}
    >
      <div
        className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center"
        style={{ background: bgColors[variant] }}
      >
        <div className="w-12 h-12">{icon}</div>
      </div>
      <div className="absolute left-[95px] top-5 flex flex-col gap-2">
        <div className="text-2xl font-bold text-text-primary leading-9 font-sf-pro">
          {value}
        </div>
        <div className="text-sm font-bold text-text-secondary leading-normal">
          {label}
        </div>
      </div>
    </div>
  );
}
