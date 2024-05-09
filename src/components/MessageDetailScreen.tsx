import { useParams } from "react-router-dom";
import { Message } from "../types";
import { BiChevronLeft } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

export const MessageDetailScreen = ({ messages }: { messages: Message[] }) => {
	const { messageId } = useParams();

	const message = messages.find((msg) => msg.id === Number(messageId));

	return (
		<div className='min-h-[500px] px-2 bg-[#eceaea] w-full rounded-lg flex flex-col items-center justify-between'>
			<div className='px-2 py-4 bg-white flex items-center justify-between w-full'>
				<div className='flex gap-2 items-center'>
					<BiChevronLeft
						className='text-[#2253af] cursor-pointer'
						size={50}
						onClick={() => window.history.back()}
					/>
					<img
						src={message?.imgUrl}
						alt='user image'
						className='w-12 h-12 rounded-full'
					/>
					<h4 className='text-lg'>{message?.senderName}</h4>
				</div>
				<BsThreeDotsVertical
					size={30}
					className='text-[#2253af]'
				/>
			</div>
			<div className='my-10'>
				<h4 className='text-sm text-white bg-[#2253af] rounded-full p-2'>
					{message?.date}
				</h4>
			</div>
			<div className='self-end bg-[#a8ffca] py-4 px-2 rounded shadow-xl flex flex-col w-80 my-2'>
				<p className='text-sm'>{message?.message}</p>
				<p className='text-xs self-end text-gray-500 flex gap-2 items-center'>
					15:22{" "}
					<span>
						<IoCheckmarkDone />
					</span>
				</p>
			</div>
			<div className='flex gap-2 items-center w-full mb-2 px-4'>
				<input
					type='text'
					className='w-full p-4 border-[0.5px] outline-none rounded-lg border-black'
					placeholder='Mesaj'
				/>
				<button
					type='button'
					className='bg-[#2253af] text-white p-4 flex items-center justify-center rounded-full'>
					<LuSend size={24} />
				</button>
			</div>
		</div>
	);
};
