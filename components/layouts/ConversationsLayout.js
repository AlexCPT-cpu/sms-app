import Sidebar from "../sidebar/Sidebar";
import ConversationList from "../conversations/ConversationList";

export default async function ConversationsLayout({ children }) {
  // const conversations = await getConversations();
  // const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        {/* <ConversationList users={[]} title="Messages" initialItems={[]} /> */}
        {children}
      </div>
    </Sidebar>
  );
}
