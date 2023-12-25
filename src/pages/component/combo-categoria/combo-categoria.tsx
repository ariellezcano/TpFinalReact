import UseComboCategoria from "./useComboCategoria";

function ComboCategoria(props) {
  const { categorias } = UseComboCategoria();

  const handleCategoriaChange = (event) => {
    const selectedCategoryId = event.target.value;
    console.log("Categoría seleccionada:", selectedCategoryId);
    props.onDataChange(selectedCategoryId);
  };


  return (
    <div className="row">
      <div className="col-md-12">
        <select
          className="form-select border border-primary"
          aria-label="Default select example"
          onChange={handleCategoriaChange}
        >
          <option value="" disabled selected>
            Selecciona una categoría
          </option>
          {categorias?.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ComboCategoria;
