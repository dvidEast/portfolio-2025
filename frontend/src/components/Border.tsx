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
                <div className={'flex flex-row items-center pl-3 gap-3'}>
                    <span className="whitespace-nowrap">{sectionTitle}</span>
                    <div className={'flex-grow border-t w-full h-0'} />
                </div>
                
            ) : (
                <div className={'flex flex-row items-center pr-3 gap-3'}>
                    <div className={'flex-grow border-t w-full h-0'} />
                    <span className="whitespace-nowrap">{sectionTitle}</span>
                </div>
            )}
        </div>
    );
}