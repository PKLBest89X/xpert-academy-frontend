import React, { useEffect, useState } from "react";
import { useTitle } from "hooks/effects/useTitle";
import { useResponsiveScreen } from "hooks/effects/useResponsiveScreen";
import { Link } from "react-router-dom";

import { useAos } from "hooks/effects/useAos";
import Typed from "react-typed";

import UserFooter from "components/layouts/footers/UserFooter";

// <--------------- import redux ------------->
import { useAppSelector } from "hooks/useRedux";

// <---------------- import hooks ---------------->
import { useModalOpen } from "hooks/effects/useModal";
import { useFade } from "hooks/effects/useFade";
import { useGetProvince } from "hooks/useGetUser";

// <---------------- import layout ------------>
import Modal from "components/layouts/modals";

// <--------------- import course card component --------------->
import { CourseCard } from "components/CourseCard";

// <--------------- import fake data ----------------->
import { fakeData } from "utils/fakeData";

const Home: React.FC = () => {
    // <--------------- defined initial variables --------------->

    // <---------- defined hooks ------------->
    useTitle({ title: "Home page" });
    useResponsiveScreen();
    useAos();
    const { modalOpen } = useModalOpen();
    const { show, setShow, setVisible } = useFade();

    // <------------ get value from redux ------------->

    // <------------- defined hooks for fetching ----------->

    const { isLoading, data, error } = useGetProvince();

    let UpdateModal: null | React.ReactElement = null;

    if (show)
        UpdateModal = (
            <Modal>
                <div>
                    <h1>Modal is open</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quod, corrupti eaque. Ab reprehenderit fuga sunt
                        expedita voluptatum quis officia saepe, nesciunt
                        sapiente doloribus delectus. Est eos et, repellendus,
                        atque maxime minus alias officia mollitia quia iusto
                        exercitationem blanditiis ut tempore, nesciunt itaque
                        ipsum? Animi obcaecati quo consequuntur velit, ipsum et.
                    </p>
                </div>
            </Modal>
        );
    return (
        <div>
            {UpdateModal}
            <section className="pt-16 bg-[url('../../public/assets/images/home_banner_wave.svg')] bg-no-repeat bg-cover w-full h-[50rem] lg:h-[57rem] bg-center">
                <div className="mx-auto max-w-7xl flex justify-between items-center mt-24 lg:mt-48 px-4 xl:px-0">
                    <div className="grid grid-cols-1" data-aos="fade-down">
                        <h1 className="text-2xl text-body-color text-center md:text-left">
                            Welcome to
                            <span className="overflow-hidden absolute whitespace-nowrap ml-4">
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
                            className="inline-block transition duration-300 ease-in-out text-md text-body-color py-2 px-10 justify-self-center md:justify-self-start rounded-md mt-6 bg-primary-color border-2 hover:bg-body-color hover:text-text-color hover:border-body-color"
                        >
                            ຈັດເລີຍ
                        </Link>
                    </div>
                    <div data-aos="fade-down" className="hidden md:block">
                        <div className="bg-[url('../../public/assets/images/wave_blob_banner.svg')] bg-no-repeat bg-contain bg-center flex items-center">
                            <img
                                src="/assets/images/logo_no_shadow.png"
                                alt="xpert banner"
                                className="md:w-[800px] lg:w-full h-96"
                            />
                        </div>
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
                            className="grid grid-cols-3 p-4 gap-4"
                            data-aos="fade-down"
                        >
                            {fakeData.slice(0, 3).map((item, index) => (
                                <CourseCard item={item} rows={index} key={item.courseId} />
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
