import React from "react";

// <-------------------- import forms ----------------------->
import AddCourse from "./admin/AddCourse";
import UpdateCourse from "./admin/UpdateCourse";

import AddArticle from "./admin/AddArticle";
import UpdateArticle from "./admin/UpdateArticle";

// <-------------------- import redux hooks and functions ------------------>
import { useAppSelector } from "hooks/useRedux";

const FormsWihModal: React.FC = () => {
    // <------------------- defined initial variables -------------------->
    const { popupName, popupStatus } = useAppSelector((state) => state.modal);

    return popupStatus ? (
        <div className={`flex w-full justify-center`}>
            {popupName === "adCourse" && <AddCourse />}
            {popupName === "updateCourse" && <UpdateCourse />}
            {popupName === "adArticle" && <AddArticle />}
            {popupName === "updateArticle" && <UpdateArticle />}
        </div>
    ) : null;
};

export default FormsWihModal;
