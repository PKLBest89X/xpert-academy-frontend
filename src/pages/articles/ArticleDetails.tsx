import React from "react";
import { useParams } from "react-router-dom";

// <----------------- import types ---------------------->
import type { RouteParams } from "types/routes.type";

const ArticleDetails: React.FC = () => {
    // <------------------ defined initial variables ----------------->
    const { articleId } = useParams<RouteParams>();

    // <----------------- defined hooks --------------------->

    // <----------------- functions ---------------------->

    return (
        <div className="mt-[64px]">
            <h1 className="">{articleId}</h1>
        </div>
    );
};

export default ArticleDetails;
