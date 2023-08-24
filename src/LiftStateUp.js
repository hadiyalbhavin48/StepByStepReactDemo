
function LiftStateUp(p) {
    const data = "bhavin hadiyal"
    return (
        <div>
            <h2>Lifting State Up </h2>
            <button onClick={() => p.alert(data)}>Click Me</button>
        </div>
    )

}
export default LiftStateUp;