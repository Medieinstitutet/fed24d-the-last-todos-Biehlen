import logo from '../assets/Logo.png';

export const Header = () => {
    return (
        <>
            <header className="bg-[#1A5CCF] h-[150px] w-screen flex justify-between items-center">
                <img 
                    src={logo} 
                    alt="A white logo of a clipboard with the text To-Do List on it."
                    className="h-[150px] ml-[5%]" 
                />
                <h1 className="font-thin text-[1.3rem] mr-[5%] text-white">
                    Get shit done
                </h1>
            </header>
        </>
    );
};