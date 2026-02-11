import { NavLink } from "react-router-dom";

type Tab = {
  label: string;
  path: string;
};

const tabs: Tab[] = [
  { label: "Home", path: "/home" },
  { label: "Hospital", path: "/hospital" },
  { label: "School", path: "/school" },
  { label: "Settings", path: "/settings" },
];

const TopTabs: React.FC = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white border-b border-gray-200 w-screen">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-14 items-center space-x-10">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                ` flex-1 text-center
                relative pb-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-[1px] after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }
                `
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopTabs;
