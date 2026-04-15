import FriendsDetails from "../../../components/FriendsDetails";
import fs from 'fs';
import path from 'path';
export default async function FriendsDetailsPage({ params }) {
    const { FriendID } = await params;
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const allFriends = JSON.parse(jsonData);
    const selectedFriend = allFriends.find(friend => friend.id === parseInt(FriendID));
    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-[#F8FAFC] dark:bg-black">
            <FriendsDetails selectedFriend={selectedFriend} />
        </main>
    );
};