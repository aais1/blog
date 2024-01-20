import { Link } from "react-router-dom";

export default function Error404() {
    document.title = "Error 404";
    return (
        <>
        <div className="h-[90vh] flex items-center justify-center text-2xl">
        <div className="">
            <h1 className="text-center text-red-500">Error 404</h1>
            <p>Sorry, we couldn't find what you were looking for.</p>
            <p className="text-center p-2">Go back to <Link className="underline font-bold text-red-500" to="/Home">Home</Link></p>
        </div>
        </div>
        </>
    )
}