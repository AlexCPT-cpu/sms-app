import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import ConversationList from "@/components/conversations/ConversationList";

const Page = () => {
  return (
    <div className="min-h-screen w-full">
      <SideBar>
        <div className="bg-white w-full h-full text-white">
          <TopBar />
        </div>
        <div className="w-full h-full bg-gray-200 p-4">
          <ConversationList />
        </div>
      </SideBar>
    </div>
  );
};

export default Page;
