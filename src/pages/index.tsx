import React, { useEffect, useState } from "react";
import { useTitle } from "hooks/effects/useTitle";
import { Link } from "react-router-dom";

import { useAos } from "hooks/effects/useAos";
import Typed from "react-typed";

import UserFooter from "components/layouts/footers/UserFooter";

// <--------------- import redux ------------->
import { useAppSelector } from "hooks/useRedux";

// <---------------- import hooks ---------------->
import { useModalOpen } from "hooks/effects/useModal";
import { useFade } from "hooks/effects/useFade";

// <---------------- import layout ------------>
import Modal from "components/layouts/modals";

// <--------------- import course card component --------------->
import { CourseCard } from "components/CourseCard";
import { ArticleCard } from 'components/ArticleCard'

// <---------------- import components ------------------->
import { Button } from "components/formComponents/Button";
import { CarouselCard } from "components/CarouselCard";

// <--------------- import fake data ----------------->
import { fakeBannerData, fakeData, fakeArticleData } from "utils/fakeData";

// <-------------- import swiper ---------------------->
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/swiper.css";

const Home: React.FC = () => {
    // <--------------- defined initial variables --------------->

    // <---------- defined hooks ------------->
    useTitle({ title: "Home page" });
    useAos();

    return (
        <div>
            <section className="pt-16 bg-[url('../../public/assets/images/background_banner.svg')] bg-no-repeat bg-cover w-full h-[50rem] lg:h-[60rem] bg-center">
                <div className="grid st:grid-cols-1 items-center mt-36 md:mt-56 px-4 2xl:px-0 mx-auto max-w-7xl ">
                    <div className="grid grid-cols-1" data-aos="fade-down">
                        <h1 className="text-2xl text-body-color text-center md:text-left">
                            Welcome to
                            <span className="overflow-hidden relative ml-4">
                                <Typed
                                    strings={["Xpert Academy"]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                />
                            </span>
                        </h1>
                        <p className="text-lg text-body-color text-center md:text-left">
                            ເວັບຫຼັກສູດການສອນອອນໄລທີ່ມີຄຸນນະພາບ 100%.
                        </p>
                        <Link
                            to="auth/login"
                            className="inline-block transition duration-300 ease-in-out text-md text-text-color py-2 px-10 justify-self-center md:justify-self-start rounded-md mt-6 bg-body-color border-2 border-body-color hover:bg-opacity-0 hover:border-body-color hover:text-body-color"
                        >
                            ຈັດເລີຍ
                        </Link>
                    </div>
                    {/* <div data-aos="fade-down" className="hidden md:block">
                        <div className="bg-[url('../../public/assets/images/wave_blob_banner (1).svg')] bg-no-repeat bg-contain bg-center flex items-center">
                            <img
                                src="/assets/images/logo_no_shadow.png"
                                alt="xpert banner"
                                className="w-full h-full"
                            />
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="">
                <div className="flex flex-col gap-10 justify-center h-[60rem] mt-8 max-w-7xl mx-auto px-4 md:xl-0">
                    <article className={``}>
                        <h1
                            className={`text-2xl text-title-color text-center font-semibold`}
                        >
                            Course ທີ່ຢາກແນະນຳ
                        </h1>
                        <p className={`text-md text-text-color text-center`}>
                            ໂດຍທາງເຮົາໄດ້ມີ course
                            ທີ່ມີຄຸນນະພາບຫຼາກຫຼາຍທີ່ທ່ານສາມາດເພີ່ມຄວາມຮູ້ໄດ້
                        </p>
                    </article>
                    <div className={``}>
                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                Autoplay,
                            ]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={8}
                            observeParents={true}
                            simulateTouch={false}
                            observer={true}
                            slidesPerView={1}
                            navigation={true}
                            keyboard={{ enabled: true }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {fakeData.map((item, index) => (
                                <SwiperSlide
                                    key={item.courseId}
                                    className="swiper-slide"
                                >
                                    <CarouselCard item={item} rows={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="bg-container-primary-color">
                <div className="grid grid-cols-2 st:grid-cols-1 md:grid-cols-2 items-center h-[60rem] mt-8 max-w-7xl mx-auto">
                    <div data-aos="fade-down">
                        <img
                            src="/assets/images/course_landing_section_1.svg"
                            alt="xpert banner"
                            className="md:w-[800px] lg:w-full h-96"
                        />
                    </div>

                    <article data-aos="fade-down">
                        <h1 className="text-title-color font-semibold text-2xl">
                            course online ທີ່ທັນສະໄໝ
                        </h1>
                        <p className="text-text-color">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam dolorum quam perferendis error ad
                            deserunt, voluptatibus mollitia sequi iure illo!
                            Repellendus perferendis repellat mollitia animi fuga
                            unde veritatis. Sed incidunt facilis similique
                            necessitatibus hic iusto fuga accusamus, fugit
                            consequuntur. At consequuntur corporis nihil optio
                            vero, repudiandae nam? Odit molestias porro
                            reprehenderit perferendis? Officia, accusamus sint
                            doloremque doloribus corrupti quo eum, beatae aut
                            alias earum dignissimos exercitationem. Quas
                            mollitia veniam, explicabo ad, dolore repellat
                            nostrum alias iure asperiores reiciendis omnis, ea
                            sequi sit. Expedita enim non obcaecati nesciunt
                            tenetur, aut repudiandae provident esse officia
                            facilis voluptate fuga nulla optio delectus
                            recusandae.
                        </p>
                    </article>
                </div>
            </section>
            {/* <section className="bg-container-fourth-color">
                <div className="grid grid-cols-2 items-center h-[60rem] max-w-7xl mx-auto">
                    <article data-aos="fade-down">
                        <h1 className="text-title-color font-semibold text-2xl">
                            coure online ທີ່ທັນສະໄໝ
                        </h1>
                        <p className="text-text-color">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam dolorum quam perferendis error ad
                            deserunt, voluptatibus mollitia sequi iure illo!
                            Repellendus perferendis repellat mollitia animi fuga
                            unde veritatis. Sed incidunt facilis similique
                            necessitatibus hic iusto fuga accusamus, fugit
                            consequuntur. At consequuntur corporis nihil optio
                            vero, repudiandae nam? Odit molestias porro
                            reprehenderit perferendis? Officia, accusamus sint
                            doloremque doloribus corrupti quo eum, beatae aut
                            alias earum dignissimos exercitationem. Quas
                            mollitia veniam, explicabo ad, dolore repellat
                            nostrum alias iure asperiores reiciendis omnis, ea
                            sequi sit. Expedita enim non obcaecati nesciunt
                            tenetur, aut repudiandae provident esse officia
                            facilis voluptate fuga nulla optio delectus
                            recusandae.
                        </p>
                    </article>
                    <div data-aos="fade-down">
                        <img
                            src="/assets/images/course_landing_section_1.svg"
                            alt="xpert banner"
                            className="md:w-[800px] lg:w-full h-96"
                        />
                    </div>
                </div>
            </section> */}
            <section className="bg-[url('../../public/assets/images/wave_section.svg')] bg-no-repeat bg-cover w-full h-[70rem] bg-center">
                <div className="grid grid-cols-2 st:grid-cols-1 md:grid-cols-2 items-center h-[70rem] max-w-7xl mx-auto">
                    <article
                        data-aos="fade-down"
                        className="st:order-last md:order-first"
                    >
                        <h1 className="text-body-color font-semibold text-2xl">
                            course online ທີ່ທັນສະໄໝ
                        </h1>
                        <p className="text-body-color">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam dolorum quam perferendis error ad
                            deserunt, voluptatibus mollitia sequi iure illo!
                            Repellendus perferendis repellat mollitia animi fuga
                            unde veritatis. Sed incidunt facilis similique
                            necessitatibus hic iusto fuga accusamus, fugit
                            consequuntur. At consequuntur corporis nihil optio
                            vero, repudiandae nam? Odit molestias porro
                            reprehenderit perferendis? Officia, accusamus sint
                            doloremque doloribus corrupti quo eum, beatae aut
                            alias earum dignissimos exercitationem. Quas
                            mollitia veniam, explicabo ad, dolore repellat
                            nostrum alias iure asperiores reiciendis omnis, ea
                            sequi sit. Expedita enim non obcaecati nesciunt
                            tenetur, aut repudiandae provident esse officia
                            facilis voluptate fuga nulla optio delectus
                            recusandae.
                        </p>
                    </article>
                    <div
                        data-aos="fade-down"
                        className="st:order-first md:order-last"
                    >
                        <img
                            src="/assets/images/course_landing_section_1.svg"
                            alt="xpert banner"
                            className="md:w-[800px] lg:w-full h-96"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-container-primary-color">
                <div className="grid grid-cols-1 items-center h-[60rem] mt-0 max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <div className="" data-aos="fade-down">
                            {" "}
                            <h1 className="text-title-color font-semibold text-2xl text-center">
                                course ແນະນຳ
                            </h1>
                            <p className="text-text-color text-center">
                                ບົດຄວາມທີ່ປະກອບໄປດ້ວຍຄວາມຮູ້ ແລະ
                                ບັນດາຜົນງານຕ່າງໆ
                            </p>
                        </div>

                        <div
                            className="grid st:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4"
                            data-aos="fade-down"
                        >
                            {fakeArticleData.slice(0, 3).map((item, index) => (
                                <ArticleCard
                                    item={item}
                                    rows={index}
                                    key={item.articleId}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <UserFooter />
        </div>
    );
};

export default Home;
