import { SubTitle } from "./SubTitle";

export function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-6 sm:mb-8 lg:mb-10 text-left">

            <h3 className="inline-block
                     text-xl lg:text-2xl
                     font-bold tracking-tight
                     gradient-text mb-2">
                {title}
            </h3>
            <SubTitle>
                {subtitle}
            </SubTitle>

        </div>
    );
}
