import React from "react";
import SEOHead from "@/components/site/SEOHead";
import PageHero from "@/components/site/PageHero";
import { Separator } from "@/components/ui/separator";
import PhoneCTABand from "@/components/site/PhoneCTABand";
import { SITE } from "@/lib/site";

const sections = [
  {
    h: "1. Use of Website",
    body: [
      "1.1 This website is intended to provide information about web design, development and marketing services and related products.",
      "1.2 You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.",
    ],
  },
  {
    h: "2. Intellectual Property",
    body: [
      "2.1 The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws and are owned by WebDesignFLA or its licensors, unless otherwise stated.",
      "2.2 You may not reproduce, download, transmit or retransmit, manipulate or store on any other website or electronic retrieval system any material from this site without prior written consent.",
    ],
  },
  {
    h: "3. Liability",
    body: [
      "3.1 WebDesignFLA does not guarantee the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.",
      "3.2 You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
    ],
  },
  {
    h: "4. Links to Other Websites",
    body: [
      "4.1 This website may include links to external websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).",
      "4.2 We have no responsibility for the content of the linked website(s).",
    ],
  },
  {
    h: "5. Changes to Terms",
    body: [
      "5.1 WebDesignFLA reserves the right to change these terms at any time by posting changes online. Your continued use of this site after changes are posted constitutes your acceptance of this agreement as modified.",
    ],
  },
  {
    h: "6. Governing Law",
    body: ["6.1 These terms shall be governed by and interpreted in accordance with the laws of the United States."],
  },
  {
    h: "7. Contact Information",
    body: [`7.1 For any questions or queries regarding these terms, please contact us at ${SITE.email} or call ${SITE.phoneDisplay}.`],
  },
  {
    h: "8. Communication Preferences",
    body: [
      "8.1 By providing your mobile number to WebDesignFLA, you agree that you may receive periodic text messages from us regarding your inquiries, orders or updates about our products and services. Standard text messaging rates may apply as provided by your mobile carrier.",
      "8.2 Opt-Out of Text Messages: If you wish to opt out of receiving text messages from us, you can do so at any time. To stop receiving text messages, please reply \u201cSTOP\u201d to any text message you receive from WebDesignFLA. After you send the SMS message \u201cSTOP\u201d to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to start receiving messages again, you can sign up as you did the first time.",
      "8.3 Assistance with Text Messages: If at any time you forget what keywords are supported, just text \u201cHELP\u201d to the number from which you received the messages. After you send the SMS message \u201cHELP\u201d to us, we will respond with instructions on how to use our service as well as how to unsubscribe.",
      "Please note that opting out of receiving text messages may impact your use of our services, as certain notifications and updates may only be provided via SMS.",
    ],
  },
  {
    h: "9. Privacy and Data Sharing",
    body: [
      "9.1 Your personal information is used only to enhance our services. We do not share your data with any third party.",
      "9.2 WebDesignFLA is committed to protecting your privacy. We do not share, sell, rent or lease your personal data to any third parties for their marketing purposes.",
      "9.3 Any information collected on this site will be kept strictly confidential and will not be disclosed to any third party without your prior consent, except as required by law.",
      "9.4 No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and terms of use for WebDesignFLA. Your data is used only to enhance our services and is never sold or shared with third parties."
        path="/privacy-policy/"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy & Terms"
        subtitle="By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section data-testid="privacy-policy-page" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <p className="text-sm text-muted-foreground">
          Welcome to WebDesignFLA. By accessing or using our website, you agree to be bound by these terms and conditions (“Terms”). If you do not agree with any part of these Terms, please do not use our website.
        </p>
        <Separator className="my-8" />
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#0A192F]">{s.h}</h2>
              <div className="mt-3 space-y-3 text-sm sm:text-[0.95rem] text-foreground/80 leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <PhoneCTABand heading="Questions about our privacy practices?" subheading={`Call us directly at ${SITE.phoneDisplay}.`} />
    </>
  );
}
