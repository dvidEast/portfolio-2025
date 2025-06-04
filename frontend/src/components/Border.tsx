interface BorderProps {
    sectionTitle: string,
    textOnLeft?: boolean
}

export default function Border({
    sectionTitle,
    textOnLeft = true
} : BorderProps) {
    return (
        <div className={'w-full'}>
            {textOnLeft ? (
                <div className={'flex flex-row items-center gap-3'}>
                    <span className="whitespace-nowrap pl-3">{sectionTitle}</span>
                    <div className={'flex-grow border-t w-full h-0'} />
                </div>
                
            ) : (
                <div className={'w-full flex flex-row items-center gap-3'}>
                    <div className={'flex-grow border-t w-full h-0'} />
                    <span className="whitespace-nowrap pr-3">{sectionTitle}</span>
                </div>
            )}
        </div>
    );
}