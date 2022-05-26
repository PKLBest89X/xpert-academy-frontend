export type CourseType = {
    name: string;
    title: string;
    status: string;
    age: number;
    role: string;
}

export type CourseDetailsDisplayType = {
    courseId: string;
    courseName: string;
    teacher: string;
    coursePrice: number;
    userRegis: number;
    coursePicture: string;
}


export type AddCourseType = {
    categoryId: number;
    courseName: string;
    courseLevel: string;
    coursePrice: number;
    teacher: string;
    fileUpload: File
}

export type UpdateCourseType = {
    courseId: string;
    categoryId: number;
    courseName: string;
    courseLevel: string;
    coursePrice: number;
    teacher: string;
    fileUpload: File
}