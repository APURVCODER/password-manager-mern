import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-purple-500 flex justify-between p-3 '>
            <div className="font-bold ">PassOp</div>
            <button className='bg-green-700 absolute right-5 top-15 border-2 border-black gap-x-1.5 rounded-2xl hover:cursor-pointer hover:bg-purple-800 p-1  flex justify-between items-center' type="button">
                <span><img className='invert w-8' src="/src/assets/github.svg" alt="hum" /></span>
                <div className='font-bold text-xl'>GitHub</div>
            </button>
            <ul>
                <li className='flex justify-around items-center gap-6'>
                    <a className='hover:font-bold' href="#">Contact</a>
                    <a className='hover:font-bold' href="#">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar