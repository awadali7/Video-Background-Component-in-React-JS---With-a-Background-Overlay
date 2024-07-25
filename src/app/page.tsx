import CircularText from "@/components/rotaing-text";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <CircularText
                text="For more - scroll down"
                radius={60}
                className="text-blue-600 font-bold text-lg"
                duration={10}
            />
        </div>
    );
}
