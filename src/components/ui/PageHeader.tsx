import { ArrowLeft, HelpCircle } from "lucide-react";
import LinkButton from "@/components/ui/LinkButton";

type PageHeaderProps = {
    title: string;
    backHref?: string;
    onHelpClick?: () => void;
};

export default function PageHeader({
    title,
    backHref = "/game",
    onHelpClick,
}: PageHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6 pt-4">
            <LinkButton
                to={backHref}
                className="bg-[#2a2f3a] hover:bg-[#373e51] rounded-full p-2.5 transition"
            >
                <ArrowLeft className="w-6 h-6 text-gray-300" />
            </LinkButton>

            <h1 className="text-gray-100 text-xl font-bold">
                {title}
            </h1>

            <button
                onClick={onHelpClick}
                className="bg-[#2a2f3a] hover:bg-[#373e51] rounded-full p-2.5 transition"
            >
                <HelpCircle className="w-6 h-6 text-gray-300" />
            </button>
        </div>
    );
}