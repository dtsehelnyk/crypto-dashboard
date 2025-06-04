
const Sidebar: React.FC = () => {

  return (
     <aside className="w-64 bg-crypto-dark p-4 border-r border-gray-800">
      <ul className="space-y-2">
        <li>
          <a href="/coins" className="block p-2 hover:bg-gray-800 rounded">
            Coins
          </a></li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-800 rounded">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-800 rounded">
            News
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
