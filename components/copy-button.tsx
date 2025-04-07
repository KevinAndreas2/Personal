"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CopyButtonProps {
  textToCopy: string
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Button
      onClick={handleCopy}
      className="bg-pink-500 hover:bg-pink-600 ml-3 flex-shrink-0 shadow-md shadow-pink-500/20"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
    </Button>
  )
}

