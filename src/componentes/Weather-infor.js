

const Weatherinfor = props => {
    return (
        <>
          
            <div className="w-full card bg-neutral text-neutral-content">
           
                <div className="pb-10 items-left card-body">
                    <h2 className="card-normal card-title">Today's forecast is:</h2>
                    <hr className="pb-5" />
                    <p> Location: {props.ciudad} </p>
                    <p> Country: {props.pais}</p>
                    <p> Time Zone: {props.zona_horaria}</p>
                    <p> Actual Temperature: {props.temperatura}°C  , {props.descripcion}</p>
                    <p> Max Temperature: {props.temperatura_max}°C</p>
                    <p> Min Temperature: {props.temperatura_min}°C</p>
                    <p> Humidity: {props.humedad}%</p>
                    <p> Visibility: {props.visibilidad}</p>
                    <p> Wind Speed: {props.velocidad_del_viento} Km/H</p>
                    {
                props.error &&
                <div className="shadow-lg alert alert-error">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{props.error}</span>
                    </div>
                </div>
            }
              {
                props.cod &&
                <div className="shadow-lg alert alert-error">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{props.cod}</span>
                    </div>
                </div>
            }
                </div>
            </div>
        </>
    )
}
export default Weatherinfor