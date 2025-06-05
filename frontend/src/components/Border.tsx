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
                    <span className="text-1xl whitespace-nowrap">{sectionTitle}</span>
                    <div className={'flex-grow border-t border-1 w-full h-0'} />
                </div>
                
            ) : (
                <div className={'flex flex-row items-center pl-3  gap-3'}>
                    <span className="text-1xl whitespace-nowrap">{sectionTitle}</span>
                    <div className={'flex-grow border-t border-1 w-full h-0'} />
                </div>
            )}
        </div>
    );
}