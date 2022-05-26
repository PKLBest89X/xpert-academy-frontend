export type NotificationType = {
    message?: string;
};

export type VisibleFadeType = "idle" | "active" | "inactive";


export type BackdropModalType = "backdropActive"
export type ModalCourse = "adCourse" | "updateCourse";
export type ModalArticle = "adArticle" | "updateArticle";

export type ModalPopupType = ModalCourse | ModalArticle | BackdropModalType;
