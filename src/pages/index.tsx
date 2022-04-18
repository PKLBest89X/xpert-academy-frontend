import React, { useState } from "react";
import { useTitle } from "hooks/effects/useTitle";
import { useResponsiveScreen } from "hooks/effects/useResponsiveScreen";
import { Link } from "react-router-dom";

import { useAos } from "hooks/effects/useAos";

// <--------------- import redux ------------->
import { useAppSelector } from "hooks/useRedux";

// <---------------- import hooks ---------------->
import { useModalOpen } from "hooks/effects/useModal";
import { useFade } from "hooks/effects/useFade";

// <---------------- import layout ------------>
import Modal from "components/layouts/modals";

const Home: React.FC = () => {
    const { popupName, popupStatus } = useAppSelector((state) => state.modal);

    // <---------- defined hooks ------------->
    useTitle({ title: "Home page" });
    useResponsiveScreen();
    useAos();
    const { modalOpen } = useModalOpen();
    const { show, setShow, setVisible } = useFade();

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
                <div className="mx-auto max-w-7xl flex justify-between items-center mt-24 lg:mt-48">
                    <div className="" data-aos="fade-down">
                        <h1 className="text-2xl text-body-color">
                            Welcome to Xpert academy
                        </h1>
                        <p className="text-lg text-body-color">
                            ເວັບຫຼັກສູດການສອນອອນໄລທີ່ມີຄຸນນະພາບ 100%.
                        </p>
                        <Link
                            to="auth/login"
                            className="inline-block transition duration-300 ease-in-out text-md text-body-color py-2 px-10 rounded-md mt-6 bg-primary-color border-2 hover:bg-body-color hover:text-text-color hover:border-body-color"
                        >
                            ຈັດເລີຍ
                        </Link>
                    </div>
                    <div data-aos="fade-down">
                        <div className="bg-[url('../../public/assets/images/wave_blob_banner.svg')] bg-no-repeat bg-contain bg-center flex items-center">
                            <img
                                src="/assets/images/logo_no_shadow.png"
                                alt="xpert banner"
                                className="w-full h-96"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <p className="mt-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                cupiditate doloremque deleniti nisi enim, officia ratione vel
                praesentium vitae dolor fugit recusandae? Corrupti optio
                quibusdam quaerat odit est soluta iste necessitatibus in numquam
                cum vitae minima temporibus molestias totam corporis quos
                assumenda possimus, maiores qui dolorum quia ipsam libero atque.
                Amet laborum quisquam fugiat aut perferendis, placeat,
                praesentium nesciunt nam vero molestias animi, sequi dolorum hic
                suscipit itaque. Non molestiae neque laboriosam iste! Minima
                voluptates totam ex blanditiis quasi autem maiores id at
                accusantium aperiam officiis quae minus non, obcaecati ipsa
                doloremque culpa in laborum ipsum perferendis, voluptate illo.
                Laborum veritatis porro pariatur, eveniet incidunt iste
                molestias. Illo cumque sapiente repellat error eligendi
                reiciendis? Aut nisi quam temporibus? Eligendi, ratione dolor
                tempora in voluptate sit dicta tenetur ea, voluptatem, provident
                eveniet. Nemo, blanditiis impedit sapiente nihil iste labore,
                obcaecati neque tempore praesentium consequuntur dolores
                consequatur doloribus fuga! Beatae exercitationem, voluptatum
                pariatur adipisci maiores excepturi vero, molestias error natus
                a magnam corrupti delectus dolorum provident, unde quia? Maxime
                quibusdam labore repudiandae inventore, fuga pariatur magni
                numquam modi aliquid, rem aperiam. Quae molestiae dolore
                doloremque cum distinctio obcaecati repellat deserunt
                perspiciatis, voluptatibus odio? Nihil debitis sint nisi
                veritatis est earum, maxime praesentium odio quam?
                Necessitatibus alias doloremque voluptas. Aut, eveniet
                cupiditate porro iure sapiente, similique hic accusantium
                reprehenderit quam eaque maiores, provident consequatur ipsa
                ipsum placeat molestias culpa doloremque aspernatur praesentium
                sequi. Minima molestiae rerum porro modi natus illo accusamus
                velit quasi placeat nulla. Placeat ducimus laudantium magni?
                Quae aliquam eos quod quos necessitatibus quas exercitationem,
                eaque consequatur ipsum odit, blanditiis voluptates cupiditate
                dolorem id rerum laboriosam. Blanditiis mollitia eius dolorum
                dolorem. Quaerat quam nisi suscipit harum debitis ad facere et,
                in culpa doloremque, soluta consequuntur beatae fugiat vel
                reiciendis voluptatem modi. Distinctio dolorem, quo doloremque,
                assumenda velit dignissimos ab accusamus, consequuntur corrupti
                asperiores eaque aliquid molestiae. Distinctio velit explicabo
                maxime repellendus quae natus quas quo autem corrupti eum
                dolore, aliquid inventore. Iure quis autem mollitia vero odio
                esse corporis officia debitis, illum, voluptates similique
                cupiditate fugit, iste est ipsam maxime ab expedita odit animi
                fuga dignissimos aperiam totam impedit! Ex cum delectus dolore
                sunt, enim repellendus non vero, similique mollitia voluptates
                libero a excepturi est doloremque aspernatur, perferendis
                impedit temporibus consequatur voluptatum praesentium atque
                quisquam neque obcaecati. Fuga obcaecati laboriosam facilis
                vitae dolorum minus dolorem quisquam reprehenderit sapiente
                perspiciatis mollitia cumque quod officia deserunt, tempora
                aliquid. Fugiat ipsa perferendis voluptas fugit. Vel accusantium
                totam illum. Qui odit ullam hic, pariatur, inventore a et quasi
                temporibus quidem labore architecto asperiores vitae delectus
                optio facere nostrum nam id doloribus dignissimos enim rerum
                perspiciatis expedita saepe rem! Similique expedita incidunt et
                sequi alias fugiat dolores asperiores, reprehenderit beatae,
                perferendis, dignissimos ducimus quibusdam neque eaque quidem
                illo molestias itaque ex laboriosam autem! Modi unde dolore ab
                placeat dignissimos repellendus fugiat nesciunt, recusandae,
                neque laboriosam enim? Obcaecati esse, tempora harum ratione
                officiis, pariatur magnam aliquam facere cumque ipsa laudantium
                reiciendis maxime officia. At, nemo. Ullam pariatur voluptates
                architecto ut, autem obcaecati optio rerum dolorem dicta facere.
            </p>
            <div className="flex flex-col w-full h-screen justify-center items-center gap-2">
                <div
                    className="w-[500px] h-[500px] bg-second-color flex justify-center items-center"
                    data-aos="fade-down"
                >
                    <button
                        className={`py-2 px-8 bg-primary-color text-body-color rounded-md `}
                        onClick={() => {
                            modalOpen("updateModal");
                            setShow(!show);
                        }}
                    >
                        Click me
                    </button>
                </div>
                <div
                    className="w-[500px] h-[500px] bg-second-color"
                    data-aos="fade-down"
                ></div>
                <div
                    className="w-[500px] h-[500px] bg-second-color"
                    data-aos="fade-down"
                ></div>
            </div>
        </div>
    );
};

export default Home;
