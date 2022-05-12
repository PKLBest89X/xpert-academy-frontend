import { FC } from "react";
import { tableCourseHeaderData, tableCourseData } from "utils/table";

// <---------------------- import layout -------------------------->
import { HorizontalOverflow } from "components/layouts/HorizontalOverflow";

type TablePropsType = {
    columns?: string[];
    data?: string[];
};

export const Table: FC<TablePropsType> = ({ columns, data }) => {
    return (
        <HorizontalOverflow>
            <table className="w-full bg-container-primary-color">
                <thead className="text-md">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 "
                                />
                                <label
                                    htmlFor="checkbox-all"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-1"
                                    type="checkbox"
                                    className="w-4 h-4 "
                                />
                                <label
                                    htmlFor="checkbox-table-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Sliver</td>
                        <td className="px-6 py-4">Laptop</td>
                        <td className="px-6 py-4">$2999</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-2"
                                    type="checkbox"
                                    className="w-4 h-4 "
                                />
                                <label
                                    htmlFor="checkbox-table-2"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">White</td>
                        <td className="px-6 py-4">Laptop PC</td>
                        <td className="px-6 py-4">$1999</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="checkbox-table-3"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4">Accessories</td>
                        <td className="px-6 py-4">$99</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="checkbox-table-3"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4">Accessories</td>
                        <td className="px-6 py-4">$99</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="checkbox-table-3"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4">Accessories</td>
                        <td className="px-6 py-4">$99</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label
                                    htmlFor="checkbox-table-3"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium  whitespace-nowrap"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4">Accessories</td>
                        <td className="px-6 py-4">$99</td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium hover:underline">
                                Edit
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </HorizontalOverflow>
    );
};
