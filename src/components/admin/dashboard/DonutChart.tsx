import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

// <------------------ import icons --------------------->
import { FaAddressCard, FaAirFreshener } from "react-icons/fa";

const devices = [
    {
        title: "ຈອງຜ່ານເວັບໄຊ",
        value: 30,
        icon: FaAddressCard,
        color: "#4bafe7",
    },
    {
        title: "ໂທຈອງ",
        value: 70,
        icon: FaAirFreshener,
        color: "#d6d6d6",
    },
];

const DonutChart: React.FC = () => {
    // <------------------- defined initial variables -------------------->

    const data = {
        datasets: [
            {
                data: devices.map((items) => [items.value]),
                backgroundColor: ["#4bafe7", "#d6d6d6"],
                borderWidth: 1,
                borderColor: "#d6d6d6",
                hoverBorderColor: "#ffffff",
            },
        ],
        labels: ["ຈອງຜ່ານເວັບໄຊ", "ໂທຈອງ"],
    };

    return (
        <div className="bg-container-primary-color shadow-lg rounded-md">
            <Doughnut
            style={{
                height: '12rem'
            }}
                data={data}
                options={{
                    cutout: 80,
                    layout: { padding: 0 },
                    maintainAspectRatio: false,
                    responsive: true,
                }}
            />
        </div>
    );
};

export default DonutChart;
