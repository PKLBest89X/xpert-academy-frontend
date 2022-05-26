import React, { FC } from "react";

// <---------------------- import dashboard components ----------------------->
import CardDashboardItem from "components/admin/dashboard/CardDashboardItem";
import DonutChart from "components/admin/dashboard/DonutChart";
import { Table } from "components/table";

const Dashboard: FC = () => {
    return (
        <div className="p-4 bg-container-fourth-color">
            <div className="grid gap-4 st:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                <CardDashboardItem
                    iconName={"users"}
                    cardData={{
                        title: "ສະໝັກທັງໝົດ",
                        detail: "200 ຄົນ",
                    }}
                    className="text-body-color bg-primary-color w-6 h-6 rounded-full p-4"
                />
                <CardDashboardItem
                    iconName={"users"}
                    cardData={{
                        title: "ສະໝັກທັງໝົດ",
                        detail: "200 ຄົນ",
                    }}
                    className="text-body-color bg-green-color w-6 h-6 rounded-full p-4"
                />
                <CardDashboardItem
                    iconName={"users"}
                    cardData={{
                        title: "ສະໝັກທັງໝົດ",
                        detail: "200 ຄົນ",
                    }}
                    className="text-body-color bg-second-color w-6 h-6 rounded-full p-4"
                />
                <CardDashboardItem
                    iconName={"users"}
                    cardData={{
                        title: "ສະໝັກທັງໝົດ",
                        detail: "200 ຄົນ",
                    }}
                    className="text-body-color bg-red-color w-6 h-6 rounded-full p-4"
                />
            </div>
            <div className="grid gap-4 st:grid-cols-1 md:grid-cols-2 mt-4">
                <DonutChart />
                <Table />
            </div>
        </div>
    );
};

export default Dashboard;
