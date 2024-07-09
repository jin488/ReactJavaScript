import "../NavBar/NavBar.css"

const Welcome = ({data}) => {
    return (
        <div className="box">
            <h2 className="text">
                {data}
            </h2>

            <a href="https://jin488.github.io/ReactJavaScript/" className="entrega">GitHub</a>
            <a href="https://github.com/jin488/ReactJavaScript" className="entrega">GitHub arch</a>
        </div>
    )    
}

export default Welcome