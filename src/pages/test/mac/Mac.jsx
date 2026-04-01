import React from "react"
import "./Mac.css"

import WorldIcon from "@/assets/mac/world.svg?react"
import ArrowIcon from "@/assets/mac/arrow.svg?react"
import OptionIcon from "@/assets/mac/option.svg?react"
import MacIcon from "@/assets/mac/mac.svg?react"
import LeftIcon from "@/assets/mac/left.svg?react"
import TopIcon from "@/assets/mac/top.svg?react"
import BottomIcon from "@/assets/mac/bottom.svg?react"
import RightIcon from "@/assets/mac/right.svg?react"

function Mac() {
    return (
        <div className="mac">
            <div className="mac__stroke1">
                <button className="mac__stroke1__esc key">ESC</button>
                <button className="mac__stroke1__f key">F1</button>
                <button className="mac__stroke1__f key">F2</button>
                <button className="mac__stroke1__f key">F3</button>
                <button className="mac__stroke1__f key">F4</button>
                <button className="mac__stroke1__f key">F5</button>
                <button className="mac__stroke1__f key">F6</button>
                <button className="mac__stroke1__f key">F7</button>
                <button className="mac__stroke1__f key">F8</button>
                <button className="mac__stroke1__f key">F9</button>
                <button className="mac__stroke1__f key">F10</button>
                <button className="mac__stroke1__f key">F11</button>
                <button className="mac__stroke1__f key">F12</button>
                <button className="mac__stroke1__p key">P</button>
            </div>
            <div className="mac__stroke2">
                <button className="mac__stroke2__double key">
                    <span>~</span><span>`</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>!</span><span>1</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>@</span><span>2</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>#</span><span>3</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>$</span><span>4</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>%</span><span>5</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>^</span><span>6</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>&</span><span>7</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>*</span><span>8</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>(</span><span>9</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>)</span><span>0</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>_</span><span>-</span>
                </button>
                <button className="mac__stroke2__double key">
                    <span>+</span><span>=</span>
                </button>
                <button className="mac__stroke2__delete key">delete</button>
            </div>
            <div className="mac__stroke3">
                <button className="mac__stroke3__tab key">tab</button>
                <button className="mac__stroke3__single key">Q</button>
                <button className="mac__stroke3__single key">W</button>
                <button className="mac__stroke3__single key">E</button>
                <button className="mac__stroke3__single key">R</button>
                <button className="mac__stroke3__single key">T</button>
                <button className="mac__stroke3__single key">Y</button>
                <button className="mac__stroke3__single key">U</button>
                <button className="mac__stroke3__single key">I</button>
                <button className="mac__stroke3__single key">O</button>
                <button className="mac__stroke3__single key">P</button>
                <button className="mac__stroke3__single key">[</button>
                <button className="mac__stroke3__single key">]</button>
                <button className="mac__stroke3__single key">\</button>
            </div>
            <div className="mac__stroke4">
                <button className="mac__stroke4__lock key">caps lock</button>
                <button className="mac__stroke4__single key">A</button>
                <button className="mac__stroke4__single key">S</button>
                <button className="mac__stroke4__single key">D</button>
                <button className="mac__stroke4__single key">F</button>
                <button className="mac__stroke4__single key">G</button>
                <button className="mac__stroke4__single key">H</button>
                <button className="mac__stroke4__single key">J</button>
                <button className="mac__stroke4__single key">K</button>
                <button className="mac__stroke4__single key">L</button>
                <button className="mac__stroke4__double key">
                    <span>:</span><span>;</span>
                </button>
                <button className="mac__stroke4__double key">
                    <span>“</span><span>‘</span>
                </button>
                <button className="mac__stroke4__return key">return</button>
            </div>

            <div className="mac__stroke5">
                <button className="mac__stroke5__shift key">shift</button>
                <button className="mac__stroke5__single key">Z</button>
                <button className="mac__stroke5__single key">X</button>
                <button className="mac__stroke5__single key">C</button>
                <button className="mac__stroke5__single key">V</button>
                <button className="mac__stroke5__single key">B</button>
                <button className="mac__stroke5__single key">N</button>
                <button className="mac__stroke5__single key">M</button>
                <button className="mac__stroke5__double key">
                    <span>{"<"}</span><span>,</span>
                </button>
                <button className="mac__stroke5__double key">
                    <span>{">"}</span><span>.</span>
                </button>
                <button className="mac__stroke5__double key">
                    <span>?</span><span>/</span>
                </button>
                <button className="mac__stroke5__shift key">shift</button>
            </div>
            <div className="mac__stroke6">
                <button className="mac__stroke6__double key">
                    <WorldIcon/><span>fn</span>
                </button>
                <button className="mac__stroke6__double key">
                    <ArrowIcon/><span>control</span>
                </button>
                <button className="mac__stroke6__double key">
                    <OptionIcon/><span>option</span>
                </button>
                <button className="mac__stroke6__double mac__stroke6__double-mac key">
                    <MacIcon/><span>command</span>
                </button>
                <button className="mac__stroke6__space key"></button>
                <button className="mac__stroke6__double mac__stroke6__double-mac key">
                    <MacIcon/><span>command</span>
                </button>
                <button className="mac__stroke6__double key">
                    <OptionIcon/><span>option</span>
                </button>
                <div className="mac__stroke6__arrows">
                    <button className="mac__stroke6__arrow-left key">
                        <LeftIcon/>
                    </button>
                    <div className="mac__stroke6__arrows-center">
                        <button className="mac__stroke6__arrow-top key">
                            <TopIcon/>
                        </button>
                        <div className="mac__stroke6__arrows-line"></div>
                        <button className="mac__stroke6__arrow-bottom key">
                            <BottomIcon/>
                        </button>
                    </div>
                    <button className="mac__stroke6__arrow-right key">
                        <RightIcon/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mac