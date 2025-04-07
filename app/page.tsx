"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, ChevronDown, Zap, Users, Shield, Percent, Flame, Database, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/copy-button"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  // Effect to play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Start by setting muted to false - we want sound from the beginning
      videoRef.current.muted = false
      
      // Play the video
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
          console.log("Video playing with sound")
        } catch (err) {
          console.error("Error playing video:", err)
          
          // If autoplay with sound fails, try muted (almost all browsers allow this)
          if (videoRef.current) {
            videoRef.current.muted = true
            setIsMuted(true)
            
            try {
              await videoRef.current.play()
              console.log("Video playing muted")
              
              // Add event listener to unmute on first interaction
              const unmute = () => {
                if (videoRef.current) {
                  videoRef.current.muted = false
                  setIsMuted(false)
                }
                document.removeEventListener('click', unmute)
              }
              
              document.addEventListener('click', unmute, { once: true })
            } catch (e) {
              console.error("Even muted autoplay failed:", e)
            }
          }
        }
      }
      
      playVideo()
    }
    
    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">ASHTON HALL</span>
          </Link>
          <nav className="hidden md:flex gap-10">
            <a
              href="#about"
              className="text-sm font-medium text-white/90 hover:text-pink-400 transition-all uppercase relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
            <a
              href="#how-to-buy"
              className="text-sm font-medium text-white/90 hover:text-pink-400 transition-all uppercase relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              How to Buy
            </a>
            <a
              href="#tokenomics"
              className="text-sm font-medium text-white/90 hover:text-pink-400 transition-all uppercase relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Tokenomics
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Video Background with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10"></div>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              preload="auto"
              src="/Update Final.mp4"
            />
            {/* Sound toggle button */}
            <div
              className="absolute bottom-20 right-20 bg-black/70 p-4 rounded-full z-20 text-white cursor-pointer"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                  setIsMuted(videoRef.current.muted);
                }
              }}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </div>
          </div>

          {/* Hero Content */}
          <div className="container relative z-20">
            <div className="max-w-3xl space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-pink-400 mb-2 leading-tight tracking-tight">
                WELCOME TO
              </h1>
              <h2
                className="text-5xl md:text-7xl font-bold text-pink-500 mb-6 tracking-tighter"
                style={{
                  textShadow:
                    "0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4)",
                }}
              >
                ASHTON HALL
              </h2>
              <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl">
                Ashton Hall is a former running back turned online fitness coach for "Burn + Build." As a content
                creator, he has been filming and posting variations of his "life-changing" morning routine on social
                media since at least November.
              </p>
              <div className="flex gap-5 pt-4">
                <Link
                  href="https://x.com/ashtonhallcoins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500/20 hover:bg-pink-500/30 transition-colors p-3.5 rounded-full"
                >
                  <Twitter className="h-5 w-5 text-pink-400" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2.5 text-base font-medium">
                  Buy Coins
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-pink-500 animate-bounce">
            <a href="#about" className="flex flex-col items-center gap-2 hover:text-pink-400 transition-colors">
              <span className="text-sm uppercase font-medium">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 bg-gradient-to-b from-neutral-900 to-black scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-center">
              <span className="text-pink-500 neon-text">ABOUT ASHTON COIN</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-pink-500/20 p-4 rounded-lg">
                      <Zap className="h-6 w-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Fast Transactions</h3>
                      <p className="text-white/80 text-base">Powered by Solana's lightning-fast blockchain</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-pink-500/20 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Growing Community</h3>
                      <p className="text-white/80 text-base">Join thousands of feet enthusiasts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-pink-500/20 p-4 rounded-lg">
                      <Shield className="h-6 w-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Secure & Safe</h3>
                      <p className="text-white/80 text-base">Audited contract with locked liquidity</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg font-medium">
                    BUY COINS
                  </Button>
                </div>
              </div>

              <div className="relative h-[500px] rounded-xl overflow-hidden border-2 border-pink-500/20 shadow-lg shadow-pink-500/10">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent z-10"></div>
                <Image
                  src="/images/ashton.jpeg"
                  alt="Ashton Hall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-28 relative bg-black scroll-mt-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 z-10"></div>
            <Image
              src="/images/how-to-buy-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
              priority={false}
              loading="lazy"
              sizes="100vw"
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                HOW TO <span className="text-pink-500 neon-text">BUY</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                <div className="h-0.5 w-20 bg-pink-500"></div>
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-pink-500/20">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Create a Wallet</h3>
                </div>
                <p className="text-white/80 text-center">
                  Download and set up a Solana-compatible wallet like Phantom or Solflare
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-pink-500/20">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Buy SOL</h3>
                </div>
                <p className="text-white/80 text-center">Purchase Solana (SOL) from an exchange of your choice</p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-pink-500/20">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Connect to DEX</h3>
                </div>
                <p className="text-white/80 text-center">Access Raydium or Jupiter and connect your wallet</p>
              </div>

              {/* Step 4 */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-pink-500/20">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Swap for HALL</h3>
                </div>
                <p className="text-white/80 text-center">Enter the HALL token address and complete the swap</p>
              </div>
            </div>

            {/* Token Address */}
            <div className="mt-20 bg-black/60 p-8 rounded-xl border border-pink-500/10 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-pink-400 mb-5 text-center">Token Address:</h3>
              <div className="flex items-center justify-between bg-black/80 p-4 rounded-lg border border-pink-500/10">
                <code className="text-white/90 text-sm md:text-base overflow-x-auto font-mono">
                  5DXhLoSLJBaH2mx1AsPgqfvPXEgZXEftpC6GZB9xpump
                </code>
                <CopyButton textToCopy="3ceg02WzuCvpdQrGbnd8pGKoQEK2U5C3hg24Lvsppump" />
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-28 relative bg-black scroll-mt-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 z-10"></div>
            <Image
              src="/images/tokenomics-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
              priority={false}
              loading="lazy"
              sizes="100vw"
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                TOKEN<span className="text-pink-500 neon-text">OMICS</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                <div className="h-0.5 w-20 bg-pink-500"></div>
                <div className="h-2 w-2 rounded-full bg-pink-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Total Supply */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-16 w-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-pink-500/20">
                    <Coins className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-4">Total Supply</h3>
                </div>
                <p className="text-white text-center text-xl font-bold">1,000,000,000 HALL</p>
              </div>

              {/* Tax */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-16 w-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-pink-500/20">
                    <Percent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-4">Tax</h3>
                </div>
                <p className="text-white text-center text-xl font-bold">0% Buy / 0% Sell</p>
              </div>

              {/* Liquidity */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-16 w-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-pink-500/20">
                    <Flame className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-4">Liquidity</h3>
                </div>
                <p className="text-white text-center text-xl font-bold">100% Burned</p>
              </div>

              {/* Network */}
              <div className="bg-black/60 p-8 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-pink-500 text-white h-16 w-16 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-pink-500/20">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-4">Network</h3>
                </div>
                <p className="text-white text-center text-xl font-bold">Solana</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-10 bg-black">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">ASHTON HALL</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Ashton Hall. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
