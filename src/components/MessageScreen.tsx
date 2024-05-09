import { BiSearch, BiTrash } from "react-icons/bi";
import { MessageList } from "./MessageList";

import { dummyMessages } from "../messages";

export const MessageScreen = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center space-y-3'>
			<div className='bg-white w-full rounded-xl shadow-md flex items-center justify-between px-8 py-2'>
				<h2 className='text-xl text-[#2253af]'>MESAJLAR</h2>
				<button
					type='button'
					className='border border-red-500 rounded-xl flex justify-between items-center w-32 p-2 text-red-500'>
					<BiTrash className='text-red-500' />
					Tümünü Sil
				</button>
			</div>
			<div className='rounded-xl border p-4 bg-white w-full flex items-center'>
				<BiSearch
					className='text-gray-400'
					size={30}
				/>
				<input
					className='p-2 w-full'
					type='text'
					placeholder='Mesajlarda Ara'
				/>
			</div>
			<div className='w-full'>
				<MessageList messages={dummyMessages} />
			</div>
		</div>
	);
};
