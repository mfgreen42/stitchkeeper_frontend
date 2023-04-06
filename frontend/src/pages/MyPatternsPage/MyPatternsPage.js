import PatternTable from "../../components/PatternTable";


import "../../pages/MyPatternsPage/MyPatternsPage.css"

const MyPatternsPage = (props) => {

    
    const { patterns } = props;
    return ( 
        <section className="my-patterns">
            <PatternTable patterns = {patterns} />
        </section>
     );
}
 
export default MyPatternsPage;