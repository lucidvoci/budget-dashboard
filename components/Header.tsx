type Props = {
    title: string
}

const Header = ({ title }: Props) => (
    <div>
        <h2>{title}</h2>
        <style jsx>{`
            h2 {
                background-color: pink;
            }
        `}</style>
    </div>
)

export default Header
