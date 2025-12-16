import Button from "./Button";
const FilterBtn = () => {
    return (
        <div className="flex justify-between items-center my-8">
            <h1 className="font-notoSans font-700 text-3xl">Extension List</h1>
            <div className="flex justify-center items-center gap-2">
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Inactive</Button>
            </div>
        </div>
    )
}

export default FilterBtn