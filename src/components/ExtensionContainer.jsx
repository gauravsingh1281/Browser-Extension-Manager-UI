import Extension from "./Extension";
import data from "../../data.json";


const ExtensionContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((value, idx) => (
                <Extension key={idx} value={value} />
            ))}
        </div>
    )
}

export default ExtensionContainer