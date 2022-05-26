import { FC, useState } from "react";

// <--------------- import hooks -------------->
import { useTitle } from "hooks/effects/useTitle";

// <--------------- import types -------------->
import type { CourseDetailsDisplayType } from "types/course.type";

// <--------------- import components -------------------->
import { Button } from "components/formComponents/Button";
import { CourseCard } from "components/CourseCard";

// <-------------- import footer ------------------->
import UserFooter from "components/layouts/footers/UserFooter";

// <--------------- import icons -------------------->

// <--------------- import fake data ----------------->
import { fakeData } from "utils/fakeData";

const Courses: FC = () => {
    // <------------------ defined initial variables --------------->

    // <---------- defined hooks ------------->
    useTitle({ title: "Course page" });

    // <------------- functions ----------->

    return (
        <div className={`mt-[64px]`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 st:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4">
                    {fakeData.map((item, index) => (
                        <CourseCard item={item} rows={index} key={item.courseId} />
                    ))}
                </div>
            </div>
            <UserFooter />
        </div>
    );
};

export default Courses;
