import { useQuery, useMutation } from "react-query";

// <--------------------------------- import axios -------------------------------------->
import { AxiosResponse, AxiosError } from "axios";

// <--------------------------------- import types ------------------------------------->
import type { VideoDetailType } from "types/video.type";
import type { NotificationType } from "types/actions.type";

// <--------------------------------- import redux hooks, hooks and functions --------------------------------->
import { useAxiosWithAuth } from "hooks/useAxiosWithAuth";
import { useAppDispatch } from "./useRedux";

export const useUpdloadVideo = <
    P extends Omit<VideoDetailType, "videoId" | "videoTitle" | "description">
>() => {
    const axiosWithAuth = useAxiosWithAuth();

    return useMutation<AxiosResponse, AxiosError<NotificationType>, P>(
        "video/upload",
        async ({ fileUpload }: P) => {
            const uploadVideo = await axiosWithAuth.post("/video", fileUpload);
            return uploadVideo;
        }
    );
};

export const useAddVideo = <A extends VideoDetailType>() => {
    const axiosWithAuth = useAxiosWithAuth();

    return useMutation("video/addVideoDetails", async (payload: A) => {
        const { videoId, videoTitle, description, fileUpload } = payload;
        const addVideoDetails = await axiosWithAuth.post("/videos");
        return addVideoDetails;
    });
};

export const useUpdateVideo = <U extends VideoDetailType>() => {
    return useMutation("video/updateVideoDetails", async () => {});
};
