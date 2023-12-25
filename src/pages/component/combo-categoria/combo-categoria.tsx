import UseComboCategoria from "./useComboCategoria";

function ComboCategoria({ onDataChange, selectedCategory }) {
  const { categorias } = UseComboCategoria();

  const handleCategoriaChange = (event) => {
    console.log("evento de categoria", event.target.value)
    const selectedCategoryId = event.target.value;
    onDataChange(selectedCategoryId);
  };


  return (
    <div className="row">
      <div className="col-md-12">
        <select
          className="form-select border border-primary"
          aria-label="Default select example"
          onChange={handleCategoriaChange}
          defaultValue={selectedCategory}
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
