import { useState } from "react";
import { Message } from "../types";
import { BiMessageAltDots } from "react-icons/bi";
import { IoAttach } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const MessageList = ({ messages }: { messages: Message[] }) => {
	const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
	const navigate = useNavigate();

	const toggleMessageSelection = (messageId: number) => {
		setSelectedMessages((prevSelected) => {
			if (prevSelected.includes(messageId)) {
				return prevSelected.filter((id) => id !== messageId);
			} else {
				return [...prevSelected, messageId];
			}
		});
	};

	const goToChatDetails = (messageId: number) => {
		navigate(`/chat/${messageId}`);
	};

	return (
		<div className='w-full flex flex-col items-center gap-2'>
			{messages.map((message) => (
				<div
					key={message.id}
					className='flex items-center rounded-lg shadow-md justify-between py-2 px-4 w-full bg-white'>
					<div className='flex items-center gap-2'>
						<input
							type='checkbox'
							checked={selectedMessages.includes(message.id)}
							onChange={() => toggleMessageSelection(message.id)}
						/>
						<img
							src={message.imgUrl}
							alt='user image'
							className='w-12 h-12'
						/>
						<div
							className='flex flex-col cursor-pointer'
							onClick={() => goToChatDetails(message.id)}>
							<h3 className='text-xl'>{message.senderName}</h3>
							<div className='flex items-center'>
								<h4>{message.date}</h4>-<h4>{message.message}</h4>
							</div>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<button
							type='button'
							className='w-10 h-10 bg-blue-800 rounded-lg p-1 flex items-center justify-center'>
							<BiMessageAltDots
								className='text-white'
								size={24}
								onClick={() => goToChatDetails(message.id)}
							/>
						</button>
						<button
							type='button'
							className='w-10 h-10 bg-blue-800 rounded-lg p-1 flex items-center justify-center'>
							<IoAttach
								className='text-white'
								size={24}
							/>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
