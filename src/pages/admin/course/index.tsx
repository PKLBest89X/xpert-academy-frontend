import { FC } from "react";

// <-------------------- import table components -------------------->
import { Table } from "components/table";

// <-------------------- import components ------------------------->
import FormsWithModal from "components/formComponents/forms/FormsWithModal";
import Modal from "components/layouts/modals";
import { Button } from "components/formComponents/Button";
import { TextField } from "components/formComponents/TextField";
import { Divider } from "components/Divider";

// <------------------- import effects hooks ---------------------->
import { useFade } from "hooks/effects/useFade";

const AdminCourses: FC = () => {
    // <------------------ defined initial variables --------------------->

    // <------------------ defined hooks and fetching data ------------------>
    const { visible, modalOpen } = useFade();

    // <------------------ functions --------------------------->

    return (
        <div className="px-12 py-8 min-h-[calc(100vh-64px)]">
            {visible && (
                <Modal>
                    <FormsWithModal />
                </Modal>
            )}
            <section className="">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-text-color text-xl">Course</h1>
                </div>
            </section>
            <Divider />
            <section className="shadow-md mt-8">
                <div className="p-4">
                    <div className="flex justify-between items-center w-full">
                        <TextField
                            name="searchCourseAdmin"
                            type="text"
                            placeholder="ຄົ້ນຫາ..."
                            leftIcon={`search`}
                        />
                        <Button
                            text="ເພີ່ມ"
                            handleClick={() => modalOpen("adCourse")}
                            leftIcon={"plus"}
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <Table />
                </div>
            </section>
        </div>
    );
};

export default AdminCourses;
