import { Search, MoreHorizontal, ChevronDown } from "lucide-react";

export default function ForecastSection() {
  return (
    <div className="w-full border-t border-border-medium bg-white mt-4">
      <div className="px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-medium">
        <h2 className="text-xl font-semibold text-btn-secondary font-inter" style={{ fontWeight: 600, letterSpacing: '-0.2px' }}>
          Forecast
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button className="h-10 px-4 bg-[#EEE] rounded-lg flex items-center justify-center hover:bg-[#E0E0E0] transition-colors">
            <MoreHorizontal className="w-6 h-6 text-black" />
          </button>
          <button className="h-10 px-4 bg-btn-secondary text-white rounded-lg font-medium text-base hover:bg-btn-secondary/90 transition-colors font-inter">
            Export
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-bg-lighter flex items-center justify-center overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4b898391fb096d00eeae9da7e592c346fd862a7f?width=80"
                alt="User avatar"
                className="w-10 h-10 object-cover"
              />
            </div>
            <ChevronDown className="w-3 h-3 text-[#828282]" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-0 bg-bg-lighter rounded-lg p-1">
          <button className="px-3 h-8 rounded flex items-center justify-center text-base font-medium text-black hover:bg-white transition-colors font-inter">
            Quiz
          </button>
          <button className="px-3 h-8 rounded bg-white shadow-sm flex items-center justify-center text-base font-medium text-black font-inter">
            Tours
          </button>
          <button className="px-3 h-8 rounded flex items-center justify-center text-base font-medium text-black hover:bg-white transition-colors font-inter">
            Socials
          </button>
        </div>

        <div className="flex items-center gap-3 px-3 h-10 border border-border-medium rounded-lg bg-white w-full lg:w-[405px]">
          <Search className="w-6 h-6 text-[#828282]" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-base text-[#828282] bg-transparent font-inter"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-6">
        <div className="h-[400px] bg-bg-lighter/30 rounded-lg flex items-center justify-center text-text-secondary">
          <p className="text-sm">Tours content will be displayed here</p>
        </div>
      </div>
    </div>
  );
}
