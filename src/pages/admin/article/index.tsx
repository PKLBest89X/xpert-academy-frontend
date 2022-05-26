import { FC } from "react";

// <-------------------- import table components -------------------->
import { Table } from "components/table";

// <-------------------- import components ------------------------->
import FormsWithModal from "components/formComponents/forms/FormsWithModal";
import Modal from "components/layouts/modals";
import { Button } from "components/formComponents/Button";

// <------------------- import effects hooks ---------------------->
import { useFade } from "hooks/effects/useFade";

const AdminArticle: FC = () => {
    // <------------------ defined initial variables --------------------->

    // <------------------ defined hooks and fetching data ------------------>
    const { visible, modalOpen } = useFade();

    // <------------------ functions --------------------------->

    return (
        <div className="p-8 bg-container-fourth-color min-h-[calc(100vh-64px)]">
            {visible && (
                <Modal>
                    <FormsWithModal />
                </Modal>
            )}

            <div className="">
                <Table />
                <Button
                    text="ເພີ່ມບົດຄວາມ"
                    handleClick={() => modalOpen("adArticle")}
                />
            </div>
        </div>
    );
};

export default AdminArticle;
