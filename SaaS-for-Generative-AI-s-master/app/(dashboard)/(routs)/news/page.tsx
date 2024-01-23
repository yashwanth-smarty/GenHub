"use client"

import axios from "axios";
import * as z from "zod";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empte } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

const ConversationPage = () => {
    const router = useRouter();
    const [messages , setMessages ] = useState<ChatCompletionMessageParam[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values:z.infer<typeof formSchema>)=>{
        try{
            const userMessage: ChatCompletionMessageParam = {
                role:"user",
                content: values.prompt,
            };
            const newMessages = [...messages,userMessage];

            const response = await axios.post("/api/dashboard",{
                messages: newMessages,
            });

            setMessages((current)=>[...current,userMessage,response.data]);

            form.reset();
        }catch(error: any){
            console.log(error);
        }finally{
            router.refresh();
        }
    }
    return(
        <div>
            <Heading
                title="News"
                description="our most advanced conversation model"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            
            />
            <div className="px-4 lg:px-8">
            <nav>
        <div className="main-nav container flex">
            <a href="#"  className="company-logo">
                {/* <img src="/logo.png" alt="company logo"/> */}
            </a>
            <div className="nav-links">
                <ul className="flex">
                    <li className="hover-link nav-item" id="Israel Hamas war" >Israel–Hamas</li>
                    <li className="hover-link nav-item" id="2023 cricket world cup" >Cricket</li>
                    <li className="hover-link nav-item" id="finance" >Finance</li>
                    <li className="hover-link nav-item" id="politics" >Politics</li>
                </ul>
            </div>
            <div className="search-bar flex">
                <input id="search-text" type="text" className="news-input" placeholder="e.g. Science"/>
                <button id="search-button" className="search-button">Search</button>
            </div>
        </div>
    </nav>
            </div>
        </div>
    );
}

export default ConversationPage;