import supabase from './supabaseClient';

async function create(report) {
  const { selectedOne, selectedTwo, selectedThree, text, imageUrl } = report;

  return supabase.from('reports').insert([
    {
      first: selectedOne.value,
      second: selectedTwo.value,
      third: selectedThree.value,
      comment: text,
      image_url: imageUrl,
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
