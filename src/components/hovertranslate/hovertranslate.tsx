type HoverTranslateProps = {
    readonly text: string;
}

export default function HoverTranslate({ text }: HoverTranslateProps) {
    return (
        <span className="flex relative overflow-hidden">
            <span className="inline-block duration-200 group-hover:-translate-y-full">
                {text}
            </span>
            <span className="inline-block absolute top-full left-0 duration-200 group-hover:-translate-y-full">
                {text}
            </span>
        </span>
    )
}