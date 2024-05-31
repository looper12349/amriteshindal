import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";
import blender from "../assets/Brands/logo/frontend/blender.png"
import f1 from "../assets/Brands/logo/frontend/fluterflow.png"
import android from "../assets/Brands/logo/frontend/android.png"
import framer from "../assets/Brands/logo/frontend/framer.png"
import next from "../assets/Brands/logo/frontend/nextjs.png"
import tailwind from "../assets/Brands/logo/frontend/tailwind.png"
import typescript from "../assets/Brands/logo/frontend/typescript.png"
import node from "../assets/Brands/logo/frontend/node.png"
import webflow from "../assets/Brands/logo/frontend/webflow.jpg"
import aws from "../assets/Brands/logo/backend/aws.png"
import docker from "../assets/Brands/logo/backend/docker.png"
import Kubernetes from "../assets/Brands/logo/backend/kubernetes.png"
import Firebase from "../assets/Brands/logo/backend/firebase.png"
import stripe from "../assets/Brands/logo/backend/stripe.png"
import rust from "../assets/Brands/logo/backend/rust.jpg"
import mongo from "../assets/Brands/logo/backend/mongo.png"
import spring from "../assets/Brands/logo/backend/springboot.png"

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={next} />
                    <SkillIcon path={blender} />
                    <SkillIcon path={f1} />
                    <SkillIcon path={android} />
                    <SkillIcon path={framer} />
                    <SkillIcon path={webflow} />
                    {/* <SkillIcon path={tailwind}/> */}
                    <SkillIcon path={typescript}/>
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={node} />
                    <SkillIcon path={docker} style={{ width: "70px", height: "70px", borderRadius:"40%"} }/>
                    <SkillIcon path={spring} style={{height: "50px"} }/>
                    <SkillIcon path={rust} style={{ width: "70px", height: "70px", borderRadius:"50%"} }/>
                    <SkillIcon path={Firebase} />
                    <SkillIcon path={Kubernetes} style={{ width: "280px", height: "80px"} }/>
                    <SkillIcon path={stripe} style={{ width: "180px", height: "70px"} }/>
                    <SkillIcon path={aws} style={{ width: "80px", height: "50px"} }/>
                    <SkillIcon path={mongo} style={{ width: "45px", height: "90px"} }/>
                   

                    
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Ui/Ux Design"
                            desc="I specialize in UI/UX design, with expertise in Adobe XD, Sketch, and Figma. I create intuitive, visually engaging interfaces that prioritize user experience and accessibility. From wireframing to prototyping, I craft seamless digital experiences that resonate with users and drive engagement."

                            data={[
                                "Prototype",
                                "Wireframe",
                                "User Experience",
                                "Figma",
                                "Adobe XD",
                            ]}
                        />
                        
                        <Service
                            num="2"
                            title="Frontend Development"
                            desc="I specialize in frontend development using React.js, Next.js, and Webflow, crafting visually stunning interfaces with Framer Motion animations. I design with Figma and Blender, implementing responsive layouts with Tailwind CSS. For cross-platform projects, I utilize Flutterflow, ensuring seamless experiences across devices."
                            data={[
                                "Next JS",
                                "Tailwind CSS",
                                "Framer Motion",
                                "Fluter Flow",
                                "Gasp Animation",
                            ]}
                        />
                        <Service
                            num="3"
                            title="Backend Development"
                            desc="My backend expertise spans Node.js and Spring Boot, coupled with MongoDB and PostgreSQL for data management. I orchestrate deployments with Docker and Kubernetes on AWS. Rust handles performance tasks, while Firebase enables real-time app development. Stripe integrates seamless payment processing."
                            data={[
                                "Node Js",
                                "Spring Boot",
                                "Mongo DB",
                                "MySQL",
                                "Rust",
                                "Docker",
                                "AWS",
                                "Stripe",
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
