import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQHomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10 mb-20 w-full max-w-[1000px] mx-auto">
      <img
        src="/images/homepage/FAQ.svg"
        className="max-md:h-[7vh] object-cover"
        alt=""
      />

      <Accordion
        type="single"
        collapsible
        className="w-full max-md:px-5 z-20 mt-10   flex-col  flex "
        defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className=" rounded-xl px-4 text-xl mt-3 bg-white text-[#330084]"
        >
          <AccordionTrigger className="cursor-pointer">
            Product Information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-xl px-4 text-xl mt-3 bg-white text-[#330084]"
        >
          <AccordionTrigger className="cursor-pointer">
            Shipping Details
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-xl px-4 text-xl mt-3 bg-white text-[#330084]"
        >
          <AccordionTrigger className="cursor-pointer">
            Return Policy
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQHomePage;
