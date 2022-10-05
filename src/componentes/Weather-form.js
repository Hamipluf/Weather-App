


const Weatherform = props => {
  
  

return(

 

  
    <form onSubmit={props.getWeather} className="w-full hero bg-base-200">
      
    <div className="flex-col hero-content">
      <div className="text-center lg:text-left">
      <h1 className="p-2 text-4xl font-bold text-white border border-solid rounded-md border-withe mr-36 mb-36">Weather App</h1>
      </div>
      <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            
            <input type="text" name="ciudad" autoFocus placeholder="Ej: Buenos Aires" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input type="text" name="pais" placeholder="Ej: Arg" className="input input-bordered" />
          </div>
          <div className="mt-6 form-control">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    
    </div>
  </form>

)}
export default Weatherform