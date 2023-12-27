import { ChangeEvent } from "react";
import UseComboCategoria from "./useComboCategoria";

interface ComboCategoriaProps {
  onDataChange: (selectedCategoryId: string) => void;
  selectedCategory: number | null;
}

function ComboCategoria({ onDataChange, selectedCategory }: ComboCategoriaProps) {
  const { categorias } = UseComboCategoria();

  const handleCategoriaChange = (event:  ChangeEvent<HTMLSelectElement>) => {
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
          value={selectedCategory !== null ? String(selectedCategory) : ''}
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
