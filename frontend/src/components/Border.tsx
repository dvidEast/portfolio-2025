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
                    <span className="whitespace-nowrap">{sectionTitle}</span>
                    <div className={'flex-grow border-t w-full h-0'} />
                </div>
                
            ) : (
                <div className={'w-full flex flex-row items-center gap-3 mb-10 mt-10'}>
                    <div className={'flex-grow border-t w-full h-0'} />
                    <span className="whitespace-nowrap">{sectionTitle}</span>
                </div>
            )}
        </div>
    );
}