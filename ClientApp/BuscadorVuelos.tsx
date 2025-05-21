const BuscadorVuelos = () => {
    return (
        <>
            <div className="h1">Buscador de Vuelos</div>
            <div className="card mt-4">
                <div className="card-header">Búsqueda de Vuelos</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-3">
                                <label>Fecha Inicial</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                                <label>Fecha Final</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="mb-3">
                                <label>Origen</label>
                                <select className="form-control"></select>
                            </div>
                        </div>
                          <div className="col-sm-4">
                            <div className="mb-3">
                                <label>Destino</label>
                                <select className="form-control"></select>
                            </div>
                        </div>
                          <div className="col-sm-4">
                            <div className="mb-3">
                                <label>Estatus</label>
                                <select className="form-control"></select>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuscadorVuelos