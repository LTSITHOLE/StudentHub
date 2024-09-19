'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook for the App Router

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Replaces useRouter()

  const navItems = [
    { name: '🪟 Dashboard', path: '/dashboard' },
    { name: '📄 Requests', path: '/dashboard/requests' },
    { name: '📁 Documents', path: '/dashboard/documents' },
    { name: '💳 Transactions', path: '/dashboard/transactions' },
    { name: '🧾 Profile', path: '/dashboard/profile' },
  ];

  return (
    <div className="md:flex bg-black min-h-screen">
      {/* Sidebar */}
      <nav className="hideen  w-64 black text-white p-3">
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold">Student Dashboard</h1>
        </div>
        <ul className="mt-6 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} legacyBehavior>
                <a
                  className={`block py-2.5 px-4 rounded transition duration-200 ${
                    pathname === item.path
                      ? 'bg-green-700'
                      : 'hover:bg-gray-500'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white text-black">{children}</div>
    </div>
  );
};

export default DashboardLayout;
