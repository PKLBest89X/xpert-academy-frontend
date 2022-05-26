import type { CourseType } from 'types/course.type';
import React from 'react';

export type Order = "asc" | "desc";

export type HeadCell = {
    disablePadding: boolean;
    id: keyof CourseType;
    label: string;
    numberic: boolean;
}

export type EnhancedTableProps = {
    numberSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof CourseType) => void;
    onSelectedAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export type EnhancedTableToolbarProps = {
    numberSelected: number;
}