// @ts-nocheck
import ChatHeader from "./ChatHeader";
import MembersRow from "./MembersRow";
import SubscriptionCard from "./SubscriptionCard";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const MEMBERS = [
    "https://assets.codepen.io/3685267/wheel-of-fortune-evsxajkr.png",
    "https://assets.codepen.io/3685267/wheel-of-fortune-pskhfbpn.png",
    "https://assets.codepen.io/3685267/wheel-of-fortune-jctiffhg.png",
];

const MESSAGES = [
    { name: "Madina S.", image: "https://assets.codepen.io/3685267/wheel-of-fortune-evsxajkr.png", message: "I hope luck is on my today🙏", time: "1 min ago" },
    { name: "Angelica F.", image: "https://assets.codepen.io/3685267/wheel-of-fortune-jctiffhg.png", message: "Hey guys, I'm here again and ready to win all of you! again lol", time: "2 min ago" },
    { name: "Max A.", image: "https://assets.codepen.io/3685267/wheel-of-fortune-mqkqnfsn.png", message: "I'm going to take her today, she seems to have cool bonuses 😯", time: "3 min ago" },
    { name: "Katya V.", image: "https://assets.codepen.io/3685267/wheel-of-fortune-lgplemaf.png", message: "Which of you got a new VIP subscription", time: "12 min ago" },
];

export default function SidebarRight() {
    return (
        <aside className="fixed top-16 right-4 bottom-4 w-64 bg-[#282c37] rounded-md hidden xl:flex flex-col">
            <ChatHeader title="Royal Chat" action={<span>Edit</span>} />
            <MembersRow members={MEMBERS} />
            <SubscriptionCard
                image="https://assets.codepen.io/3685267/wheel-of-fortune-gzonbjuu.png"
                title="VIP Subscription"
                description={
                    <>Purchase <span className="text-[#f2c11e] font-semibold">new subscription</span> with in game gold</>
                }
            />
            <div className="grow overflow-hidden py-2">
                <div className="h-full overflow-y-auto px-3 space-y-2">
                    {MESSAGES.map((msg, i) => <ChatMessage key={i} {...msg} />)}
                </div>
            </div>
            <ChatInput />
        </aside>
    );
}
