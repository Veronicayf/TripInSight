import { React, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const guideData = [
    {
      id: 1,
      image: "guide1.jpg",
      name: "John Doe",
      email: "john@example.com",
      tour: "City Tour",
      isEnabled: true,
    },
    {
      id: 2,
      image: "guide2.jpg",
      name: "Jane Smith",
      email: "jane@example.com",
      tour: "Nature Excursion",
      isEnabled: false,
    },
    {
      id: 3,
      image: "guide2.jpg",
      name: "XY Ragnarsson",
      email: "xy@example.com",
      tour: "Nature Excursion",
      isEnabled: false,
    },
    {
      id: 4,
      image: "guide2.jpg",
      name: "Tekito tumoto",
      email: "xy@example.com",
      tour: "Nature Excursion",
      isEnabled: false,
    },
    // Add more guide data as needed
  ];
  const filteredGuides = guideData.filter(
    (guide) =>
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tour.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <div>
        <SideBar/>
      </div>
      <div> 
      <div className="flex-1 p-40">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>

        {/* Search Bar */}
        <div className="flex flex-row justify-evenly">
          <div>
            <input
              type="text"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <Link to="/form">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add a Guide
              </button>
            </Link>
          </div>
        </div>
        {/* Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Tour</th>
              <th className="px-4 py-2">Enable</th>
              <th className="px-4 py-2">Disable</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuides.map((guide) => (
              <tr key={guide.id}>
                <td className="px-4 py-2">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{guide.name}</td>
                <td className="px-4 py-2">{guide.email}</td>
                <td className="px-4 py-2">{guide.tour}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                    Enable
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
      
    </div>
  );
};

export default AdminPanel;
