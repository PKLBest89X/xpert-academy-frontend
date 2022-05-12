import { FC } from "react";

// <----------------- import footer ------------------->
import UserFooter from "components/layouts/footers/UserFooter";


// <---------------- import article cart --------------------->
import { ArticleCard } from 'components/ArticleCard';


// <---------------- import fake article data ------------------->
import { fakeArticleData } from 'utils/fakeData';


const Articles: FC = () => {
    // <----------------- defined initial variables ------------------>

    // <---------------- defined hooks ---------------------->

    // <----------------- functions ----------------------->

    return (
        <div className="mt-[64px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 st:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4">
                    {fakeArticleData.map((item, index) => (
                        <ArticleCard item={item} rows={index} key={item.articleId} />
                    ))}
                </div>
            </div>
            <UserFooter />
        </div>
    );
};

export default Articles;
