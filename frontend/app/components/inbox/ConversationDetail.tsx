'use client'

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">Pedro Osorio</p>
                    <p>asdrgsedrgse4rgse54</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-100">
                    <p className="font-bold text-gray-500">Pedro Osorio</p>
                    <p>asdrgsedrgse4rgse54</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 spcae-x-4">
                <input type="text" placeholder="Type a message..." className="w-full bg-gray-200 px-4 py-2" />
                <CustomButton
                    label="Send"
                    onClick={() => console.log('Send')}
                    className="w-[100px]"
/>
            </div>

        </>
    )
}

export default ConversationDetail;