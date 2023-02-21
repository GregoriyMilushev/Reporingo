import { supabase } from '../supabase/supabaseClient';

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

const Report = {
  create,
};

export default Report;
