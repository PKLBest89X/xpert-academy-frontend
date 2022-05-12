import React from "react";

// <------------------- import icons -------------------->
import { Icon } from "components/Icon";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type PropsType = {
    iconName: IconProp;
    cardData: {
        title: string;
        detail: string;
    };
    className?: string;
};

const CardDashboardItem: React.FC<PropsType> = ({ iconName, cardData, className }) => {
    return (
        <div className="shadow-lg bg-container-primary-color rounded-md">
            <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 flex flex-col gap-4">
                        <span className="text-md text-text-color">
                            {cardData.title}
                        </span>
                        <h3 className="text-xl text-title-color font-semibold">
                            {cardData.detail || "ບໍ່ມີ"}
                        </h3>
                    </div>
                    <figure className="col-span-1 flex items-center justify-end">
                        <Icon icon={iconName} className={className} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default CardDashboardItem;
