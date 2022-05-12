import { IconProp } from '@fortawesome/fontawesome-svg-core'

type RoutingType = {
    title: string;
    path: string;
};

type AdminRoutingType = {
    title: string;
    path: string;
    iconName: IconProp
}

export const routingAdminData: AdminRoutingType[] = [
    {
        title: "ໜ້າຫຼັກ",
        path: "",
        iconName: "house"
    },
    {
        title: "courses",
        path: "manage-course",
        iconName: "book"
    },
    {
        title: "ບົດຄວາມ",
        path: "manage-article",
        iconName: "file-lines"
    },
    {
        title: "ຊຳລະ course",
        path: "course-payment",
        iconName: "basket-shopping"
    }, 
    {
        title: "ລາຍງານ",
        path: "report",
        iconName: "chart-line"
    }
];

export const routingUserData: RoutingType[] = [
    {
        title: "ໜ້າຫຼັກ",
        path: "",
    },
    {
        title: "courses",
        path: "courses",
    },
    {
        title: "ບົດຄວາມ",
        path: "articles",
    },
    {
        title: "my course",
        path: "admin"
    }
];
