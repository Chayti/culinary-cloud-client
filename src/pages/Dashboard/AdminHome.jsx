import React from "react";
import Chart from "../../components/Charts/Chart";
import Chart1 from "../../components/Charts/Chart1";
import Card4 from "../../components/shared/Card/Card4";
import { FaWallet, FaTruck, FaUsers } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

const AdminHome = () => {
    return (
        <div className="mt-8">
            <h2 className="text text-animation p-4 text-3xl normal-case">Hi, Welcome Back!</h2>
            <div class="flex flex-wrap justify-center">
                <Card4 icon={<FaWallet size={32} />}>{{ title: "Revenue", data: 1000, color1: 'from-[#b82bf6]', color2: 'to-[#f0c0ee]' }}</Card4>
                <Card4 icon={<FaUsers size={32} />}>{{ title: "Customers", data: 1500, color1: 'from-[#d1a054]', color2: 'to-[#ffe1a4]' }}</Card4>
                <Card4 icon={<GiCook size={32} />}>{{ title: "Products", data: 103, color1: 'from-[#ff4079]', color2: 'to-[#f6b7e0]' }}</Card4>
                <Card4 icon={<FaTruck size={32} />}>{{ title: "Orders", data: 500, color1: 'from-[#68aaff]', color2: 'to-[#95f8fe]' }}</Card4>

            </div>
            <div class="flex flex-wrap justify-center mt-12">
                <div class="w-full sm:w-1/2 md:w-1/2 pr-4 mb-4 bg-green">
                    <Chart></Chart>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/2 px-4 mb-4">
                    <Chart1></Chart1>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;