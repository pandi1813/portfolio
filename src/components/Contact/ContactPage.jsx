import ContactForm from "./form/ContactForm";
import './contact-page.css'

export default function ContactPage() {
    return (
        <>
            <ContactForm />
            <div className="flex justify-end gap-8">
                <a href="https://github.com/pandi1813" target="_blank" rel="noreferrer"><img id="github" src="./images/github.png" alt="GitHub logo" /></a>
                <a href="https://www.linkedin.com/in/andrea-peter-b70a89102/"  target="_blank" rel="noreferrer"><img id="linkedin" src="./images/linkedin.png" alt="LinkeIn logo" /></a>
            </div>
        </>
    )
}