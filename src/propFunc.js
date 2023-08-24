function propFunc(p) {
    console.log(p)
    return (
        <div>
            <h1>Hello {p.name}</h1>
            <h2>Hello {p.email}</h2>

        </div>
    )

}

export default propFunc;