import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
    return (
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                   <Heading>Sub-heading</Heading>
                   <Heading>Sub-heading</Heading>
                   <Heading>Sub-heading</Heading>
                   <Section>
                       <Heading>Sub-heading</Heading> 
                       <Heading>Sub-heading</Heading>
                       <Heading>Sub-heading</Heading>
                   </Section>
                </Section>
            </Section>
        </Section>
    )
}
