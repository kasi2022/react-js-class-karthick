import './externl.css';
const ThreeTypesCSS = () => {
    const styleInternal = {
        color: "blue",
        padding: "10px",
        width: "300px",
        height: "10%",
        border: "2px solid black"
    }
    return (
        <div>
            {/* jsx allose to write html  */}
            <h2>Three Types of CSS </h2>
            <h1>Inline, Internal, and External</h1>
            <p style={{ "color": "red" }}>Inline CSS is applied directly to HTML elements using the style attribute.</p>
            <p style={styleInternal}>This is an internal CSS style applied to this paragraph.</p>
            {/* parent Child communication */}
            <div className="parent">
                <div className="child"></div>
                <div className="child"></div>
                <div className="child"></div>\
            </div>
        </div>
    )
}

export default ThreeTypesCSS;