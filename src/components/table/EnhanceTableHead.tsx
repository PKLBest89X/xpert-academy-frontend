import React, { useMemo } from "react";

// <------------------------ import types ------------------------------->
import type { EnhancedTableProps } from "types/table.type";
import type { CourseType } from "types/course.type";

// <------------------------- import utils of table ------------------------->
import { tableCourseHeaderData } from "utils/table";

const EnhanceTableHead: React.FC<EnhancedTableProps> = (props) => {
    // <-------------------------- defined initial variables ------------------------------>
    const {
        onSelectedAllClick,
        order,
        orderBy,
        numberSelected,
        rowCount,
        onRequestSort,
    } = props;
    const courseHeaderData = useMemo(() => tableCourseHeaderData, []);

    // <------------------------------- functions ----------------------------------->
    const createSortHandler =
        (property: keyof CourseType) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <thead>
            <tr>
                <th className="w-4 p-4">
                    <div className="flex items-center">
                        <input
                            id="checkbox-table-1"
                            type="checkbox"
                            className="w-4 h-4 "
                            checked={
                                rowCount > 0 && numberSelected === rowCount
                            }
                            onChange={onSelectedAllClick}
                        />
                    </div>
                </th>
                {courseHeaderData.map((headCell) => (
                    <th className={`py-6 px-4 text-left`} key={headCell.id}>
                        <div onClick={createSortHandler(headCell.id)}>
                            <span className={`text-text-color text-lg`}>
                                {headCell.label}
                            </span>
                            {orderBy === headCell.id ? (
                                <span className={`text-text-color`}>
                                    {order === "desc" ? "▼" : "▲"}
                                </span>
                            ) : null}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default EnhanceTableHead;
