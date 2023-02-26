import supabase from './supabaseClient';

function getValues(cellName) {
  return supabase.from(`cell_data_${cellName}`).select('value');
}

const CellData = {
  getValues,
};

export default CellData;
