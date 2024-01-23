"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, ScrollText, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    lable: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    lable: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    lable: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    lable: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    lable: "Story Generation",
    icon: ScrollText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/story"
  },
  {
    lable: "Code Generation",
    icon: Code,
    color: "text-yellow-500",
    bgColor: "bg-yellow-700/10",
    href: "/code"
  },
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
        Venture into the realm of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Engage with the brightest AI - harness the AI advantage.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=>(
          <Card 
            onClick={()=>router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.lable}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
    
  )
}

export default DashboardPage;
