import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-5 space-y-4 hidden sm:block">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
