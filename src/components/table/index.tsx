import React, { FC, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// <---------------------- import hooks --------------------------->
import { useFade } from "hooks/effects/useFade";

// <---------------------- import types --------------------------->
import type { Order } from "types/table.type";
import type { CourseType } from "types/course.type";

// <---------------------- import layout -------------------------->
import { HorizontalOverflow } from "components/layouts/HorizontalOverflow";

// <---------------------- import components ------------------------>
import EnhancedTableHead from "./EnhanceTableHead";
import { PageButton } from "components/pageNavigation/PageButton";
import { Dropdown } from "components/Dropdown";

// <--------------------- import utils for table ------------------------->
import { tableCourseData, statbleSort, getComparator } from "utils/table";

// <------------------------- import icons ---------------------------->
import { MdEdit } from "react-icons/md";

type TablePropsType = {
    columns?: string[];
    data?: string[];
};

export const Table: FC<TablePropsType> = React.memo(({ columns, data }) => {
    // <------------------------------ defined initial variables ----------------------------------->
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof CourseType>("name");
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { pathname } = useLocation();
    const courseRowData = useMemo(() => tableCourseData, []);

    // <---------------------------- defined hooks and fetching data ------------------------------>
    const { modalOpen } = useFade();

    // <------------------------------- functions ---------------------------------->

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof CourseType
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelecteds = tableCourseData.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - tableCourseData.length)
            : 0;

    return (
        <HorizontalOverflow>
            <div className="">
                <table className="w-full bg-container-primary-color divide-y">
                    <EnhancedTableHead
                        numberSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectedAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={tableCourseData.length}
                    />
                    <tbody className="divide-y">
                        {statbleSort(
                            courseRowData,
                            getComparator(order, orderBy)
                        )
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                return (
                                    <tr
                                        className=""
                                        key={row.name}
                                        onClick={(event) =>
                                            handleClick(event, row.name)
                                        }
                                    >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-table-1"
                                                    type="checkbox"
                                                    className="w-4 h-4 "
                                                />
                                            </div>
                                        </td>
                                        <td className="p-4 text-left text-text-color">
                                            {row.name}
                                        </td>
                                        <td className="p-4 text-text-color">
                                            {row.title}
                                        </td>
                                        <td className="p-4 text-text-color">
                                            {row.age}
                                        </td>
                                        <td className="p-4 text-text-color">
                                            {row.role}
                                        </td>
                                        <td className="p-4 text-text-color">
                                            {row.status}
                                        </td>
                                        <td className="p-4 text-right">
                                            <MdEdit
                                                className={`text-text-color`}
                                                onClick={() =>
                                                    modalOpen("updateCourse")
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                <section className="p-4">
                    <div className="flex w-full justify-between items-center">
                        <Dropdown />
                        <div className="flex gap-4">
                            {" "}
                            <PageButton iconName={"chevron-left"} />
                            <PageButton iconName={"chevron-right"} />
                        </div>
                    </div>
                </section>
            </div>
        </HorizontalOverflow>
    );
});
