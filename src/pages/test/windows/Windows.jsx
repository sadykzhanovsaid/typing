import React from "react"
import "./Windows.css"

import WindowsIcon from "@/assets/windows/windows.svg?react"
import LeftIcon from "@/assets/windows/left.svg?react"
import TopIcon from "@/assets/windows/top.svg?react"
import BottomIcon from "@/assets/windows/bottom.svg?react"
import RightIcon from "@/assets/windows/right.svg?react"

function Windows() {
    return (
        <div className="windows">
            <div className="windows__standard">
                <div className="windows__standard__stroke1">
                    <button className="windows__standard__stroke1__esc key">ESC</button>
                    <button className="windows__standard__stroke1__f key">F1</button>
                    <button className="windows__standard__stroke1__f key">F2</button>
                    <button className="windows__standard__stroke1__f key">F3</button>
                    <button className="windows__standard__stroke1__f key">F4</button>
                    <button className="windows__standard__stroke1__f key">F5</button>
                    <button className="windows__standard__stroke1__f key">F6</button>
                    <button className="windows__standard__stroke1__f key">F7</button>
                    <button className="windows__standard__stroke1__f key">F8</button>
                    <button className="windows__standard__stroke1__f key">F9</button>
                    <button className="windows__standard__stroke1__f key">F10</button>
                    <button className="windows__standard__stroke1__f key">F11</button>
                    <button className="windows__standard__stroke1__f key">F12</button>
                </div>
                <div className="windows__standard__stroke2">
                    <button className="windows__standard__stroke2__double key">
                        <span>~</span><span>`</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>!</span><span>1</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>@</span><span>2</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>#</span><span>3</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>$</span><span>4</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>%</span><span>5</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>^</span><span>6</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>&</span><span>7</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>*</span><span>8</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>(</span><span>9</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>)</span><span>0</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>_</span><span>-</span>
                    </button>
                    <button className="windows__standard__stroke2__double key">
                        <span>+</span><span>=</span>
                    </button>
                    <button className="windows__standard__stroke2__delete key">Delete</button>
                </div>
                <div className="windows__standard__stroke3">
                    <button className="windows__standard__stroke3__tab key">Tab</button>
                    <button className="windows__standard__stroke3__single key">Q</button>
                    <button className="windows__standard__stroke3__single key">W</button>
                    <button className="windows__standard__stroke3__single key">E</button>
                    <button className="windows__standard__stroke3__single key">R</button>
                    <button className="windows__standard__stroke3__single key">T</button>
                    <button className="windows__standard__stroke3__single key">Y</button>
                    <button className="windows__standard__stroke3__single key">U</button>
                    <button className="windows__standard__stroke3__single key">I</button>
                    <button className="windows__standard__stroke3__single key">O</button>
                    <button className="windows__standard__stroke3__single key">P</button>
                    <button className="windows__standard__stroke3__single key">[</button>
                    <button className="windows__standard__stroke3__single key">]</button>
                    <button className="windows__standard__stroke3__single key">\</button>
                </div>
                <div className="windows__standard__stroke4">
                    <button className="windows__standard__stroke4__lock key">CapsLock</button>
                    <button className="windows__standard__stroke4__single key">A</button>
                    <button className="windows__standard__stroke4__single key">S</button>
                    <button className="windows__standard__stroke4__single key">D</button>
                    <button className="windows__standard__stroke4__single key">F</button>
                    <button className="windows__standard__stroke4__single key">G</button>
                    <button className="windows__standard__stroke4__single key">H</button>
                    <button className="windows__standard__stroke4__single key">J</button>
                    <button className="windows__standard__stroke4__single key">K</button>
                    <button className="windows__standard__stroke4__single key">L</button>
                    <button className="windows__standard__stroke4__double key">
                        <span>:</span><span>;</span>
                    </button>
                    <button className="windows__standard__stroke4__double key">
                        <span>“</span><span>‘</span>
                    </button>
                    <button className="windows__standard__stroke4__enter key">Enter</button>
                </div>
                <div className="windows__standard__stroke5">
                    <button className="windows__standard__stroke5__shift key">Shift</button>
                    <button className="windows__standard__stroke5__single key">Z</button>
                    <button className="windows__standard__stroke5__single key">X</button>
                    <button className="windows__standard__stroke5__single key">C</button>
                    <button className="windows__standard__stroke5__single key">V</button>
                    <button className="windows__standard__stroke5__single key">B</button>
                    <button className="windows__standard__stroke5__single key">N</button>
                    <button className="windows__standard__stroke5__single key">M</button>
                    <button className="windows__standard__stroke5__double key">
                        <span>{"<"}</span><span>,</span>
                    </button>
                    <button className="windows__standard__stroke5__double key">
                        <span>{">"}</span><span>.</span>
                    </button>
                    <button className="windows__standard__stroke5__double key">
                        <span>?</span><span>/</span>
                    </button>
                    <button className="windows__standard__stroke5__shift key">Shift</button>
                </div>
                <div className="windows__standard__stroke6">
                    <button className="windows__standard__stroke6__ctrl key">Ctrl</button>
                    <button className="windows__standard__stroke6__fn key">Fn</button>
                    <button className="windows__standard__stroke6__windows key"><WindowsIcon/></button>
                    <button className="windows__standard__stroke6__alt key">Alt</button>
                    <button className="windows__standard__stroke6__space key"></button>
                    <button className="windows__standard__stroke6__alt key">Alt</button>
                    <button className="windows__standard__stroke6__ctrl key">Ctrl</button>
                    <div className="windows__standard__stroke6__arrows">
                        <button className="windows__standard__stroke6__arrow-left key">
                            <LeftIcon/>
                        </button>
                        <div className="windows__standard__stroke6__arrows-center">
                            <button className="windows__standard__stroke6__arrow-top key">
                                <TopIcon/>
                            </button>
                            <div className="windows__standard__stroke6__arrows-line"></div>
                            <button className="windows__standard__stroke6__arrow-bottom key">
                                <BottomIcon/>
                            </button>
                        </div>
                        <button className="windows__standard__stroke6__arrow-right key">
                            <RightIcon/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="windows__calc">
                <div className="windows__calc__stroke1">
                    <button className="windows__calc__stroke1__prt key">prt<br/>sc</button>
                    <button className="windows__calc__stroke1__scr key">Scr<br/>Lk</button>
                    <button className="windows__calc__stroke1__pause key">Pause<br/>break</button>
                    <button className="windows__calc__stroke1__home key">Home</button>
                    <button className="windows__calc__stroke1__end key">End</button>
                </div>
                <div className="windows__calc__stroke2">
                    <button className="windows__calc__stroke2__page key">page<br/>up</button>
                    <button className="windows__calc__stroke2__lock key">Num<br/>Lock</button>
                    <button className="windows__calc__stroke2__num key">/</button>
                    <button className="windows__calc__stroke2__num key">*</button>
                    <button className="windows__calc__stroke2__num key">-</button>
                </div>
                <div className="windows__double">
                    <div className="windows__left">
                        <div className="windows__calc__stroke3">
                            <button className="windows__calc__stroke3__page key">page<br/>down</button>
                            <button className="windows__calc__stroke3__num key">7</button>
                            <button className="windows__calc__stroke3__num key">8</button>
                            <button className="windows__calc__stroke3__num key">9</button>
                        </div>
                        <div className="windows__calc__stroke4">
                            <button className="windows__calc__stroke4__page key">ins</button>
                            <button className="windows__calc__stroke4__num key">4</button>
                            <button className="windows__calc__stroke4__num key">5</button>
                            <button className="windows__calc__stroke4__num key">6</button>
                        </div>
                    </div>
                    <button className="windows__calc__stroke3__plus key">+</button>
                </div>
                <div className="windows__double">
                    <div className="windows__left">
                        <div className="windows__calc__stroke5">
                            <button className="windows__calc__stroke5__del key">del</button>
                            <button className="windows__calc__stroke5__num key">1</button>
                            <button className="windows__calc__stroke5__num key">2</button>
                            <button className="windows__calc__stroke5__num key">3</button>
                        </div>
                        <div className="windows__calc__stroke6">
                            <button className="windows__calc__stroke6__null key">0</button>
                            <button className="windows__calc__stroke6__num key">.</button>
                        </div>
                    </div>
                    <button className="windows__calc__stroke5__enter key">enter</button>
                </div>
            </div>
        </div>
    );
}

export default Windows