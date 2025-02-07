import { EmailForm } from "../components/emailform";
import { SocialButtons } from "../components/socialbuttons";

export function Contacts() {
    return (
        <div className="flex flex-col lg:flex-row m-10">
            {/* SOCIALS CONTACTS */}
            <div className="basis-1/2">
                <h1 className="text-6xl font-bold font-serif">Contact Us</h1>
                <SocialButtons/>
            </div>
                {/* EMAIL FORM */}
            <div className="basis-1/2 ">
                <EmailForm/>
            </div>
        </div>
    )
}