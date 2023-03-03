import supabase from './supabaseClient';

async function create(report) {
  // const { selectedOne, selectedTwo, selectedThree, text, imageUrl } = report;

  return supabase.from('reports').insert([
    {
      report,
    },
  ]);
}

async function getAll() {
  let { data: reports, error } = await supabase.from('reports').select('*');
  return reports;
}

async function getById(id) {
  let { data: reports, error } = await supabase.from('reports').select('*').eq('id', id);
  return reports[0];
}

const Report = {
  create,
  getAll,
  getById,
};

export default Report;
