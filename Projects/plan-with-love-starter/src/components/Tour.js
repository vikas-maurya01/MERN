import Card from "./Card";

function Tour({ tours , updatedTour}) {

    return (

        <div className="cont">
            <h2 className="title"> Plan With Vikas</h2>

            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card {...tour} updatedTour={updatedTour}></Card>
                    })
                }
            </div>

        </div>

    );
}

export default Tour;