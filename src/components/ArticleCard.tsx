import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// <-------------- import icons -------------------->
import { Icon } from "components/Icon";

// <-------------- import components ---------------->
import { Button } from "components/formComponents/Button";

// <-------------- import types ------------------>
import type { ArticleDetailsType } from "types/article.type";

// <-------------- import format number and moment format -------------->
import NumberFormat from "react-number-format";
import moment from "moment";

type ArticleDetailPropsType = {
    item: ArticleDetailsType;
    rows: number;
};

export const ArticleCard: React.FC<ArticleDetailPropsType> = ({ item, rows }) => {
    // <---------------- defined initial variables --------------->
    const [activeToDo, setActiveToDo] = useState({
        isActive: false,
        activeIndex: -1,
    });
    const navigate = useNavigate();
    const location = useLocation();

    // <------------- functions ----------->
    const handleHover = (payload: ArticleDetailsType, rows: number) => {
        const { isActive, activeIndex } = activeToDo;
        if (activeIndex === rows && isActive) {
            setActiveToDo((prev) => ({
                ...prev,
                isActive: false,
                activeIndex: -1,
            }));
        } else {
            setActiveToDo((prev) => ({
                ...prev,
                isActive: true,
                activeIndex: rows,
            }));
        }
    };

    return (
        <article
            className="grid grid-rows-1 bg-container-primary-color shadow-md rounded-md transition duration-200 ease-in-out hover:shadow-2xl hover:transform hover:scale-105"
            onMouseEnter={() => handleHover(item, rows)}
            onMouseLeave={() => handleHover(item, rows)}
            onClick={() =>
                navigate(`/articles/${item.articleId}`, {
                    state: { from: location },
                })
            }
        >
            <figure className="relative block w-full">
                <div
                    className={`absolute w-full h-full rounded-t-md transition duration-300 ease-in-out bg-second-color bg-opacity-40 z-20 ${
                        activeToDo.activeIndex === rows && activeToDo.isActive
                            ? `visible`
                            : `invisible`
                    }`}
                />
                <img
                    className="block w-full h-full rounded-t-md object-cover object-center z-10"
                    src={item.articlePicture}
                    alt={item.articleTitle}
                />
            </figure>
            <section className="p-4">
                <div className={`flex flex-col gap-4 bg-body-color`}>
                    <h2 className={`text-title-color text-xl font-semibold`}>
                        {item.articleTitle}
                    </h2>
                    <p className="text-text-color line-clamp-2 text-md">{item.articleDescription}</p>
                    <div className="relative h-16">
                        <div
                            className={`absolute flex justify-between items-center transition duration-200 ease-in-out transform w-full h-full`}
                        >
                            <div className="inline">
                                <Icon
                                    icon={"clock"}
                                    className={`text-text-color`}
                                />
                                <span className="text-text-color ml-2">
                                    {moment(item.ariticleTimePosted).format(
                                        "MMMM D, Y"
                                    )}
                                </span>
                            </div>
                            <div className="inline">
                                <NumberFormat
                                    value={item.articleViews}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={` views`}
                                    renderText={(value) => (
                                        <span className="text-second-color">
                                            {value}
                                        </span>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default ArticleCard;
