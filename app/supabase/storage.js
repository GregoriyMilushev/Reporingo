import { supabase } from './supabaseClient';

async function uploadImage({ fileName, image }) {
  return supabase.storage.from('images').upload(fileName, image, {
    cacheControl: '3600',
    upsert: false,
  });
}

async function downloadImage({ fileName }) {
  return supabase.storage.from('images').download(fileName);
}

const Storage = {
  uploadImage,
  downloadImage,
};

export default Storage;
