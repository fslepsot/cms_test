export default function DashboardHeader() {
  return (
    <div className="absolute left-0 top-0 right-0 h-[76px] border-b border-[#EAEAEA] bg-white z-10">
      <div className="absolute left-8 top-[17px]">
        <h1 className="text-lg font-semibold text-nav-primary font-sf-pro" style={{ fontSize: '18px', fontWeight: 590 }}>
          Dashboard
        </h1>
      </div>
    </div>
  );
}
