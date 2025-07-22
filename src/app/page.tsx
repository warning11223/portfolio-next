'use client'

import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {Projects} from "@/sections/Projects";
import {Tape} from "@/sections/Tape";
import {About} from "@/sections/About";
import {Contact} from "@/sections/Contact";
import {Footer} from "@/sections/Footer";
import {Testimonials} from "@/sections/Testimonials";
import CanvasCursor from "@/components/CanvasCursor";
import {useWindowWidth} from "../../hooks/use-device-width";

export default function Home() {
    const width = useWindowWidth();
    const isMobile = width <= 768;

    return (
        <div>
            <Header />
            <Hero/>
            <Projects />
            <Tape />
            <Testimonials />
            <About />
            <Contact />
            <Footer />

            {!isMobile && (
                <CanvasCursor />
            )}
        </div>
    );
}
