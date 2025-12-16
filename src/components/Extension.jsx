import DevlensLogo from "../assets/images/logo-devlens.svg";

const Extension = ({ value }) => {
    const { logo, name, isActive, description } = value;
    return (
        <div className='shadow rounded-xl h-52 bg-Neutral-0 flex flex-col justify-between  p-4'>
            <div className="flex justify-between items-center ">
                <div className="w-1/4">
                    <img src={logo} alt={name} />
                </div>
                <div className="w-3/4">
                    <h3 className="font-notoSans font-700 text-neutral-950">{name}</h3>
                    <p className="font-notoSans font-500 text-neutral-600">{description}</p>
                </div>

            </div>
            {/* action */}
            <div className="flex justify-between items-center">
                <button className="rounded-2xl p-2 font-notoSans font-500 border border-neutral-600 bg-Neutral-50">Remove</button>
                <input
                    type="checkbox"
                    checked={isActive && "checked"}
                    className="toggle text-neutral-50 border-Neutral-400 bg-Neutral-300 checked:border-red-800 checked:bg-red-700 checked:text-neutral-50"
                />
            </div>
        </div>
    )
}

export default Extension