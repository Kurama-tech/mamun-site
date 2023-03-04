import { LayoutServices } from "@/components/layout";
import Section from "@/components/services/Section";
import SectionWithImg from "@/components/services/SectionImg";
import SectionPricing from "@/components/services/SectionPricing";
import Head from "next/head";

export default function Services() {
    return (
    <>
        <Head>
            <title>Ma&rsquo;mun!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <LayoutServices>
            <Section />
            <SectionWithImg />
            <SectionPricing />
        </LayoutServices>
    </>)
}