import MobileSettings from "@/components/ui/MobileSettings";
import PageHeader from "@/components/ui/PageHeader";

export default function GameSound() {
    return (

        <div className="mx-auto">
            <div className="max-w-md mx-auto text-gray-100 px-6 py-4">

                <PageHeader title="Sound" />

                <div className="py-6">
                    <h1 className="text-2xl font-bold mb-2">Audio Control</h1>
                    <p className="text-sm pr-6 text-gray-400">
                        Tune your game experience. Enable or mute sounds, effects, and music as you play through your financial journey.
                    </p>
                </div>

                <div className="space-y-4 border bg-[#161920] border-[#373e51] rounded-3xl p-5  mb-6 shadow-lg shadow-[#373e51]/40">

                    <MobileSettings />

                </div>
            </div>
        </div>)
}