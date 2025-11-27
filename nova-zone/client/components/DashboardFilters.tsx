import { Calendar } from "lucide-react";

export default function DashboardFilters() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full items-start lg:items-end">
      <div className="flex-1 w-full lg:max-w-[294px]">
        <label className="text-sm text-text-secondary mb-[8px] block font-sf-pro" style={{ fontWeight: 590 }}>
          Start Date
        </label>
        <div className="relative">
          <div className="h-8 bg-bg-light rounded-t px-3 flex items-center">
            <span className="text-sm text-text-primary font-sf-pro" style={{ fontWeight: 510 }}>
              01-Jan-2024
            </span>
          </div>
          <Calendar className="absolute right-3 top-2 w-4 h-4 text-text-primary" strokeWidth={1.2} />
          <div className="h-px bg-[#DDD]"></div>
        </div>
      </div>

      <div className="flex-1 w-full lg:max-w-[294px]">
        <label className="text-sm text-text-secondary mb-[8px] block font-sf-pro" style={{ fontWeight: 590 }}>
          End Date
        </label>
        <div className="relative">
          <div className="h-8 bg-bg-light rounded-t px-3 flex items-center">
            <span className="text-sm text-text-primary font-sf-pro" style={{ fontWeight: 510 }}>
              30-Jan-2024
            </span>
          </div>
          <Calendar className="absolute right-3 top-2 w-4 h-4 text-text-primary" strokeWidth={1.2} />
          <div className="h-px bg-[#DDD]"></div>
        </div>
      </div>

      <div className="flex-1 w-full lg:max-w-[294px]">
        <label className="text-sm text-text-secondary mb-[8px] block font-sf-pro" style={{ fontWeight: 590 }}>
          Location
        </label>
        <div className="relative">
          <div className="h-8 bg-bg-light rounded-t px-3 flex items-center">
            <span className="text-sm text-text-primary font-sf-pro" style={{ fontWeight: 510 }}>
              DOST-STII
            </span>
          </div>
          <svg
            className="absolute right-3 top-2 w-4 h-4"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#606060"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="h-px bg-[#DDD]"></div>
        </div>
      </div>

      <button className="px-3 py-[7.5px] bg-btn-primary text-white text-sm rounded hover:bg-btn-primary/90 transition-colors font-sf-pro w-full lg:w-auto" style={{ fontWeight: 510 }}>
        Get data
      </button>
    </div>
  );
}
