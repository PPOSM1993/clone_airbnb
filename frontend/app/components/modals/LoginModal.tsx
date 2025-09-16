'use client'
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {

    const loginModal = useLoginModal();
    const content = (
        <>

            <h2 className="mb-6 text-2xl">Welcome to Airbnb, please login</h2>

            <form className="space-y-4">
            <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-md opacity-80">
                    The Error Message
                </div>

                <CustomButton
                    label="Submit"
                />

            </form>
        </>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;