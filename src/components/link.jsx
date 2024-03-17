export function Link() {
    const adress = "https://zrozumiecreact.pl"
    return(
        <a href={adress} target="_blank" rel="noopener noreferrer">{adress}</a>
    )
}