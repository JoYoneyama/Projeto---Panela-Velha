import Receita from "../../components/Receita";
import Slider from "../../components/Slider";
import Title from "../../components/Title";

const Home = () => (
    <>
        <div className="w-full h-screen">
            <div className='mt-6 mr-[3%]'>
                <Slider />
            </div>
            <div>
            <Receita/>
        </div>
        </div>
    </>
)

export default Home;