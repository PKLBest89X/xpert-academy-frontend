import type { CourseType } from "types/course.type";
import type { Order, HeadCell } from "types/table.type";

export const tableCourseHeaderData: HeadCell[] = [
    {
        id: "name",
        disablePadding: false,
        label: "ຊື່",
        numberic: true,
    },
    {
        id: "title",
        disablePadding: false,
        label: "ຫົວຂໍ້",
        numberic: true,
    },
    {
        id: "age",
        disablePadding: false,
        label: "ອາຍຸ",
        numberic: true,
    },
    {
        id: "role",
        disablePadding: false,
        label: "ຕຳແໜ່ງ",
        numberic: true,
    },
    {
        id: "status",
        disablePadding: false,
        label: "ສະຖານະ",
        numberic: true,
    },
];
export const tableCourseData: CourseType[] = [
    {
        name: "Phoummisay",
        title: "let",
        age: 23,
        status: "active",
        role: "admin",
    },
    {
        name: "messi",
        title: "Just be good",
        age: 29,
        status: "inactive",
        role: "employee",
    },
    {
        name: "ronaldo",
        title: "be find",
        age: 24,
        status: "active",
        role: "footballer",
    },
    {
        name: "neymar",
        title: "the best",
        age: 25,
        status: "active",
        role: "the dribbler",
    },
    {
        name: "rice",
        title: "best midfield",
        age: 23,
        status: "pending",
        role: "mid field",
    },
    {
        name: "haaland",
        title: "good striker",
        age: 20,
        status: "active",
        role: "the best striker",
    },
];

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] < a[orderBy]) return 1;
    return 0;
};

export const getComparator = <K extends keyof any>(
    order: Order,
    orderBy: K
): ((
    a: {
        [Key in K]: number | string;
    },
    b: { [Key in K]: number | string }
) => number) => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

export const statbleSort = <T>(
    array: T[],
    comparator: (a: T, b: T) => number
) => {
    const stabilizedThis = array.map(
        (item, index) => [item, index] as [T, number]
    );
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((item) => item[0]);
};
