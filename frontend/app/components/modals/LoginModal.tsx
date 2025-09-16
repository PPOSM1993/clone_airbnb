const LoginModal = () => {
    return (
        <>
            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

            </form>
        </>
    )
}

export default LoginModal;