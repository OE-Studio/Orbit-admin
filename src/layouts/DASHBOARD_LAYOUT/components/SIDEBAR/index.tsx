import React from "react";
import Image from "next/image";
import { ArrowDown } from "../../../../assets/icons";
import { sidebarArray } from "@/utils/sidebarArray";
import Link from "next/link";
import {RiArrowDownSLine} from "react-icons/ri"
import styles from './index.module.css'

const Sidebar = ({user}:{user:{}}) =>{
    return (
        <div className="relative w-64 h-screen overflow-y-scroll inline-block">
            <div className="fixed top-0 left-0 h-screen w-64 overflow-y-scroll bg-neutral_100">
                <header className="flex bg-brand_blue_500 h-20 items-center justify-between px-5 sticky top-0 left-0">
                    <div className="block">
                        <Image height="32" width="95" src="/logo.svg" alt="logo" className="block" priority/>
                    </div>

                    <div className="w-6 h-6 rounded-5px border border-brand_blue_200 bg-brand_blue_400 flex items-center justify-center">
                        <ArrowDown/>
                    </div>
                </header>

                <div className={`w-full overflow-scroll ${styles.nav}`}>
                    <div className="px-7 flex flex-col gap-6 mt-10">
                        {sidebarArray.map(s=>{
                            return (
                                <Link href={s.url} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <span className="text-xl">{s.activeIcon}</span>
                                        {s.text}
                                    </div>

                                    {s.count && <div className="bg-red_500 px-2 py-0.5 rounded-full text-xs text-white font-medium">{s.count}</div>}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="h-[154px] px-5">
                    <div className="px-2 flex flex-col gap-6">
                        {sidebarArray.slice(1,3).map(s=>{
                            return (
                                <Link href={s.url} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <span className="text-xl">{s.activeIcon}</span>
                                        {s.text}
                                    </div>

                                    {s.count && <div className="bg-red_500 px-2 py-0.5 rounded-full text-xs text-white font-medium">{s.count}</div>}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center justify-between p-2 bg-white border border-neutral_200 rounded-[12px] mt-2">
                        <div className="inline-block">
                            <Image src="/avatar.png" width={32} height={32} alt="avatar"/>
                        </div>
                        <div>
                            <p className="font-medium text-[#4B5768] font-clash-medium">{user?.email}</p>
                            <p className="text-[#A0ABBB] text-xs font-clash-regular capitalize">{user?.role}</p>
                        </div>
                        <div className="w-6 h-6 rounded-5px border border-neutral_200 flex items-center justify-center">
                            <RiArrowDownSLine size={12}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar