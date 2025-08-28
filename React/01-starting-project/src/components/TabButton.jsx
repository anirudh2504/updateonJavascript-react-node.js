export default function TabButton({children,onSelect,selectedButton})
{
    return (
        <li><button className={selectedButton?'active':null} onClick={onSelect}>{children}</button></li>
    )
}