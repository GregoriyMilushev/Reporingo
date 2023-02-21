import { supabase } from './supabaseClient';

async function create(report) {
  const { selectedOne, selectedTwo, selectedThree, text, imagePath } = report;

  return supabase.from('reports').insert([
    {
      first: selectedOne.value,
      second: selectedTwo.value,
      third: selectedThree.value,
      comment: text,
      image_url: imagePath,
    },
  ]);
}

async function getAll() {
  let { data: reports, error } = await supabase.from('reports').select('*');
  return reports;
}

const Report = {
  create,
  getAll,
};

export default Report;
