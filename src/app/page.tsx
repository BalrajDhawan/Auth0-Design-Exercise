'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MousePointer2,
  Layout,
  Code,
  Wand2,
  ArrowRight,
  Sparkles,
  Star,
  MousePointer,
  Palette,
  Zap,
  Layers,
  Shield
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      {/* Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-800 px-10 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 text-[#0d7ff2]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">FormKit</h2>
        </div>
        <div className="flex flex-1 justify-end gap-6">
          <div className="flex items-center gap-6">
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-medium leading-normal transition-colors" href="#">Templates</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-medium leading-normal transition-colors" href="#">Features</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-medium leading-normal transition-colors" href="#">Pricing</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-medium leading-normal transition-colors" href="#">Docs</a>
          </div>
          <div className="flex gap-4">
            <Button className="bg-slate-800 text-slate-100 hover:bg-slate-700">
              Login
            </Button>
            <Link href="/builder">
              <Button className="bg-[#0d7ff2] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </header>

            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="@container">
                        <div className="p-4">
                            <div className="flex min-h-[480px] flex-col gap-8 rounded-2xl items-center justify-center p-8 bg-slate-950" style={{backgroundImage: 'radial-gradient(circle at top left, rgba(13, 127, 242, 0.3), transparent 30%), radial-gradient(circle at bottom right, rgba(13, 127, 242, 0.2), transparent 40%)'}}>
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em] max-w-2xl">
                      Build forms that actually convert
                    </h1>
                                    <h2 className="text-slate-300 text-lg font-normal leading-normal max-w-xl">
                      Create beautiful, high-performing forms with our intuitive drag-and-drop builder. No coding required, just stunning results.
                    </h2>
                                </div>
                                <Link href="/builder">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#0d7ff2] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 shadow-blue-500/30 hover:shadow-blue-500/40">
                                        <span className="truncate">Start Building for Free</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 px-4 py-20 @container">
                        <div className="flex flex-col gap-6 items-center text-center">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-slate-100 tracking-tight text-5xl font-bold leading-tight max-w-[720px]">
                    Why choose FormKit?
                  </h1>
                                <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
                                    FormKit is the ultimate form builder for creating forms that not only look great but also drive results.
                                </p>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#0d7ff2] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors w-fit shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                                <span className="truncate">Explore Features</span>
                            </button>
                        </div>
                    <div className="grid grid-cols-1 @[480px]:grid-cols-2 @[768px]:grid-cols-3 gap-6">
                        <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="text-[#0d7ff2]" data-icon="CursorClick" data-size="32px" data-weight="regular">
                                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-slate-100 text-lg font-bold leading-tight">Drag & Drop Interface</h2>
                                <p className="text-slate-400 text-base font-normal leading-normal">Easily build forms with our intuitive drag-and-drop interface. No coding skills needed.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="text-[#0d7ff2]" data-icon="Layout" data-size="32px" data-weight="regular">
                                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-slate-100 text-lg font-bold leading-tight">Responsive Layouts</h2>
                                <p className="text-slate-400 text-base font-normal leading-normal">Ensure your forms look perfect on any device with our responsive design capabilities.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="text-[#0d7ff2]" data-icon="MagicWand" data-size="32px" data-weight="regular">
                                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-slate-100 text-lg font-bold leading-tight">Smart Automation</h2>
                                <p className="text-slate-400 text-base font-normal leading-normal">Automate form logic and workflows with our smart automation features.</p>
                            </div>
</div>
                            <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="text-[#0d7ff2]" data-icon="Code" data-size="32px" data-weight="regular">
                                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-slate-100 text-lg font-bold leading-tight">Customizable Code</h2>
                                <p className="text-slate-400 text-base font-normal leading-normal">Customize every aspect of your forms with our flexible code editor.</p>
                            </div>
</div>
                            <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                                <div className="text-[#0d7ff2]" data-icon="ChartLineUp" data-size="32px" data-weight="regular">
                                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M244,148.83,215.1,120H200a8,8,0,0,0-5.12,1.58L160,146.42,109.12,95.53A8,8,0,0,0,96,96H40a8,8,0,0,0,0,16H90.9l54.34,54.34a8,8,0,0,0,5.66,2.34h0a8,8,0,0,0,5.65-2.34L184,142.9,207.1,166a8,8,0,0,0,10.28-2.32L244,148.83ZM216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-slate-100 text-lg font-bold leading-tight">Analytics & Insights</h2>
                                    <p className="text-slate-400 text-base font-normal leading-normal">Gain valuable insights into form performance with our powerful analytics dashboard.</p>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-6 flex-col hover:border-blue-500/50 hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                                <div className="text-[#0d7ff2]" data-icon="LockSimple" data-size="32px" data-weight="regular">
                                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,68a12,12,0,1,1-12-12A12,12,0,0,1,128,148Zm32-68H96V56a32,32,0,0,1,64,0Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-slate-100 text-lg font-bold leading-tight">Secure & Reliable</h2>
                                    <p className="text-slate-400 text-base font-normal leading-normal">Rest assured your data is safe and secure with our enterprise-grade security features.</p>
                                </div>
                            </div>
</div>
                    </div>
                    <div className="flex flex-col gap-16 px-4 py-20 @container bg-slate-950/50 rounded-2xl">
                        <div className="flex flex-col gap-6 items-center text-center">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-slate-100 tracking-tight text-5xl font-bold leading-tight max-w-[720px]">
                    See FormKit in action
                  </h1>
                                <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
                                    Discover how FormKit can transform your form creation process and boost your conversion rates.
                                </p>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-800 text-slate-100 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-700 transition-colors border border-slate-700">
                                <span className="truncate">View Case Studies</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-md" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf7iSgCLlS5ZDsYVFC7eBYyfNMHopGXZVyxUZ_WCdEqp7dA_ztVSuJGGxBJ6B7jr8ivmvbgZ_QGgcCGN_BWMeD8BX-HWPLh6CJvRA_j51afiop7tIvW5PplBNYefoJNwF67K81RxIAU8frSHZcTmWDMiunX2MPDivdKBZ1ew4ZvmnyfWNxk1uTZIgpUHS-XB-Z2_O_E_JRZ7DSc2uUy2MLQadg0DQUW2b7u1OW1n2D30ebEfoiQ00wIzqCRvywDTyClSlRcP9nD0Au")'}}></div>
                                <div>
                                    <p className="text-slate-100 text-lg font-medium leading-normal">Marketing Agency Success</p>
                                    <p className="text-slate-400 text-base font-normal leading-normal">Learn how a leading marketing agency increased their lead generation by 40% using FormKit.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-md" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbhvIlarsZMeqTrQYIJBYEYS-Tr-nCy3AW60qXtusOIPdy_V12iN3m71h4Cq3oPQUawjDaJSkdq-LHDagAIE2gGEltn4LfF6wKDliYT60BjHVYh52gOZimaLzRe5YaSEmVn1eZnXKTAomlfYP9NoCp-BGj-zZQo9nVt77WhmlOkwpKIcZc8V2UxRbYvlWDUUDmLXvpFzxnE_A2tTXBAteeLKM3i3dh6iXzVYII2Hgscjrs-59U4ixfi8-TlQ8BqnNZDhqWEgaSBgUY")'}}></div>
                                <div>
                                    <p className="text-slate-100 text-lg font-medium leading-normal">E-commerce Checkout Optimization</p>
                                    <p className="text-slate-400 text-base font-normal leading-normal">
                                        See how a popular e-commerce store improved their checkout process and reduced cart abandonment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-md" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcpknMjnAjLhFyYqIj_M6z6PYzyE7KSchybgqMqEK570khyvSPuW491CTyIWFlIjUhkZ5EMAqn6wAHKjNq3X1TVC1oF4NiU12bW2RggYTfGv6Y0vyEPzl1GjV-MMq8-iI2ZMHCxJ7QCXj4LFKNFslWxw0u_8KWI_vzke5dS4WrJuJMnG9GiFce21ClAyW4zIZpB0iP0UmoauXWbBk0asQ2wMWB6H2q5-wW1eGYQSFqiLu2UYr7psuVJjOdz48GWpkhzxb2gzlWuuOo")'}}></div>
                                <div>
                                    <p className="text-slate-100 text-lg font-medium leading-normal">Non-Profit Donation Streamlining</p>
                                    <p className="text-slate-400 text-base font-normal leading-normal">Discover how a non-profit organization streamlined their donation process with FormKit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="@container">
                        <div className="flex flex-col justify-end gap-8 px-4 py-20 @[480px]:px-10 @[480px]:py-24 items-center">
                            <div className="flex flex-col gap-4 text-center">
                                <h1 className="text-slate-100 tracking-tight text-5xl font-bold leading-tight max-w-[720px]">
                    Ready to get started?
                  </h1>
                                <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
                                    Join thousands of businesses and individuals who are creating high-converting forms with FormKit.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[#0d7ff2] text-white text-xl font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 shadow-blue-500/30 hover:shadow-blue-500/40">
                                    <span className="truncate">Start Your Free Trial Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-normal leading-normal transition-colors" href="#">Terms of Service</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-normal leading-normal transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-normal leading-normal transition-colors" href="#">Contact Us</a>
            <a className="text-slate-400 hover:text-[#0d7ff2] text-base font-normal leading-normal transition-colors" href="#">Documentation</a>
          </div>
          <p className="text-center text-slate-400 text-base font-normal leading-normal">© 2025 FormKit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
