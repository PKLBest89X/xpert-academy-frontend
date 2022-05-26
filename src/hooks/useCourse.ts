import { useQuery, useMutation } from "react-query";

// <--------------------------------- import axios -------------------------------------->
import { AxiosResponse, AxiosError } from "axios";

// <--------------------------------- import types ---------------------------------------->
import type {
    AddCourseType,
    UpdateCourseType,
    CourseDetailsDisplayType,
} from "types/course.type";
import type { NotificationType } from "types/actions.type";

// <-------------------------------- import redux hooks, custom hooks and functions ------------------------------>
import { useAppDispatch } from "hooks/useRedux";
import { useAxiosWithAuth } from "hooks/useAxiosWithAuth";

export const useAddCourse = <T extends AddCourseType>() => {
    const dispatch = useAppDispatch();
    const axiosWithAuth = useAxiosWithAuth();

    return useMutation<
        AxiosResponse<CourseDetailsDisplayType>,
        AxiosError<NotificationType>,
        T
    >("course/addCourse", async (payload: T) => {
        const {
            categoryId,
            courseName,
            courseLevel,
            coursePrice,
            teacher,
            fileUpload,
        } = payload;
        const addCourseRequest = await axiosWithAuth.post("/courses", {
            categoryId,
            name: courseName,
            courseLevel,
            coursePrice,
            teacher,
            fileUpload,
        });
        return addCourseRequest;
    });
};



export const useUpdateCourse = <U extends UpdateCourseType>() => {
    const dispatch = useAppDispatch();
    const axiosWithAuth = useAxiosWithAuth();

    return useMutation<
        AxiosResponse<CourseDetailsDisplayType>,
        AxiosError<NotificationType>,
        U
    >("course/updateCourse", async (payload: U) => {
        const {
            courseId,
            categoryId,
            courseName,
            courseLevel,
            coursePrice,
            teacher,
            fileUpload,
        } = payload;
        const updateCourseRequest = await axiosWithAuth.put("/courses", {
            courseId,
            categoryId,
            name: courseName,
            courseLevel,
            coursePrice,
            teacher,
            fileUpload,
        });
        return updateCourseRequest;
    });
};
