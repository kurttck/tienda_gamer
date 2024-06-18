
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



const NotFound: React.FC=()=>{
    return(
        <>
        <NavBar />
        <main className='flex justify-center'>
            <div className='w-2/4'>
            <h1 className="text-center text-[45px] font-bold">
                    404 not Found
                </h1>
            </div>
        </main>
        <Footer/>
        </>
    )
}


export default NotFound;