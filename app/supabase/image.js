import { supabase } from '../supabase/supabaseClient';

async function upload({ fileName, image }) {
  // TODO:Add filename!!!
  return supabase.storage.from('images').upload(fileName, image, {
    cacheControl: '3600',
    upsert: false,
  });
}

const Image = {
  upload,
};

export default Image;
