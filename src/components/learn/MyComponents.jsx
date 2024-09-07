import './style.css'

const Mycomponent = () => {
    const hoidanit = [1, 2, 3]
    return (
        <>
            <h1 className="child">{JSON.stringify(hoidanit)} & ahihi</h1>
        </>
    );
}

export default Mycomponent;