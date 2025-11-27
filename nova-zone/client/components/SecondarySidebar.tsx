interface MenuItem {
  label: string;
  active?: boolean;
}

export default function SecondarySidebar() {
  const menuItems: MenuItem[] = [
    { label: "CMS Request List" },
    { label: "End User Engagement", active: true },
  ];

  return (
    <div className="w-[240px] h-screen bg-nav-secondary flex flex-col pt-4 px-2 fixed left-[142px] top-0">
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              item.active
                ? "bg-nav-secondary-active text-white"
                : "text-text-light hover:bg-nav-secondary-active/50"
            }`}
          >
            <span className="text-sm font-sf-pro">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
