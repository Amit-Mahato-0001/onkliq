import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import { type TabInfo } from "_bg/getTabData"
import { BOX_STYLES } from "~/Global/Container"
import { unitStyles } from "~/UI/Unit"
import logo from "@/assets/logo.png"

export default function Header() {
  const [tabData, setTabData] = useState<TabInfo>({
    favicon: null,
    url: "",
    title: ""
  })

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "GET_TAB_INFO" }, (response) => {
      if (response) setTabData(response)
    })
  }, [])

  return (
    <header
      className={cn(
        BOX_STYLES,
        "py-3 grid grid-cols-[auto_1fr_auto] items-center gap-3"
      )}
    >
      <div
        className={cn(
          unitStyles,
          "w-[42px] h-[42px] overflow-hidden p-0 flex items-center justify-center group"
        )}
      >
        <img
          src={logo}
          alt="logo"
          className={cn(
            "w-full h-full object-cover duration-300",
            "group-hover:scale-105"
          )}
        />
      </div>

      <div
        className={cn(
          unitStyles,
          "w-full px-4 py-1 flex items-center justify-center"
        )}
      >
        <span className="font-semibold text-3xl text-white">
          ONKLIQ
        </span>
      </div>

      <a
        href="https://onkliq.website"
        target="_blank"
        className="group cursor-pointer"
      >
        <div
          className={cn(
            unitStyles,
            "w-[42px] h-[42px] flex items-center justify-center"
          )}
        >
          <Github className="size-[26px] text-white group-hover:scale-105 duration-300" />
        </div>
      </a>
    </header>
  )
}
