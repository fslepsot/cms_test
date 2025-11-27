import { Grid, FileText, Settings2, Users, Wrench } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export default function MainSidebar() {
  const navItems: NavItem[] = [
    {
      icon: <Grid className="w-6 h-6" strokeWidth={1.2} />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <FileText className="w-6 h-6" strokeWidth={1.2} />,
      label: "Content Management",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9999 6.29998C16.5166 6.48691 16.414 6.73823 16.414 6.99998C16.414 7.26173 16.5166 7.51305 16.6999 7.69998L16.2999 9.29998C16.4868 9.48321 16.7381 9.58584 16.9999 9.58584C17.2616 9.58584 17.5129 9.48321 17.6999 9.29998L21.4699 5.52998C21.9727 6.64117 22.1249 7.87921 21.9063 9.07913C21.6877 10.279 21.1086 11.3838 20.2461 12.2463C19.3837 13.1087 18.2789 13.6878 17.079 13.9064C15.8791 14.1251 14.641 13.9728 13.5299 13.47L6.61986 20.38C6.22203 20.7778 5.68246 21.0013 5.11986 21.0013C4.55725 21.0013 4.01768 20.7778 3.61986 20.38C3.22203 19.9822 2.99854 19.4426 2.99854 18.88C2.99854 18.3174 3.22203 17.7778 3.61986 17.38L10.5299 10.47C10.027 9.35879 9.87477 8.12075 10.0934 6.92083C10.312 5.72092 10.8911 4.61614 11.7536 3.7537C12.616 2.89127 13.7208 2.31215 14.9207 2.09352C16.1206 1.8749 17.3587 2.02714 18.4699 2.52998L14.7099 6.28998L14.6999 6.29998Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Approval Management",
    },
    {
      icon: <Wrench className="w-6 h-6" strokeWidth={1.2} />,
      label: "Tools",
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={1.2} />,
      label: "User Management",
    },
  ];

  return (
    <div className="w-[142px] h-screen bg-nav-primary flex flex-col pt-[76px] fixed left-0 top-0">
      <div className="flex flex-col gap-2 px-2 pt-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-1 px-8 py-3 rounded-lg transition-colors cursor-pointer ${
              item.active
                ? "bg-nav-active text-white"
                : "text-text-light hover:bg-nav-active/50"
            }`}
          >
            {item.icon}
            <span className="text-xs text-center leading-tight font-sf-pro" style={{ fontWeight: item.active ? 510 : 400 }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
