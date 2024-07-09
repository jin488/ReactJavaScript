import "../NavBar/NavBar.css"

const Welcome = ({data}) => {
    return (
        <div className="box">
            <h2 className="text">
                {data}
            </h2>
        </div>
    )    
}

export default Welcome