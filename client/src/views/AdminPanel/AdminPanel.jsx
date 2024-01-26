import { React, useState } from "react";

import SideBar from '../../components/SideBar/SideBar';
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";


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
        <SideBar />
        <div className=" w-full">
          <HeaderAdmin/>
          <AdminDashboard/>
        </div>

    </div>
  );
};
export default AdminPanel;
